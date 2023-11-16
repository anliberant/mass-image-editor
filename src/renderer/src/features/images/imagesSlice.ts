import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

import { ImageFileDto } from './../../../../dtos/img.dto';
import { nullImages } from '@renderer/features/images/imagesSlice';
import { imagesSlice } from './imagesSlice';

interface ImagesState {
  images: ImageFileDto[];
  totalSize: number;
  optimizedSize: number;
  totalPercentage: number;
  destPath: string;
  destNameFolder: string;
  isCreateDestSub: boolean;
}
const initialState: ImagesState = {
  images: [],
  totalSize: 0,
  optimizedSize: 0,
  totalPercentage: 0,
  destPath: '',
  destNameFolder: 'mie',
  isCreateDestSub: true,
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage(state: RootState, action: PayloadAction) {
      state.images.push(action.payload as ImageFileDto);
      state.totalSize = state.images.reduce((acc, currentVal) => acc + currentVal.size, 0);
      state.optimizedSize = state.images.reduce((acc, currentVal) => acc + currentVal.newSize, 0);
      state.totalPercentage =
        !state.totalSize || !state.optimizedSize
          ? 0
          : (((state.totalSize - state.optimizedSize) / state.totalSize) * 100).toFixed(2);
      state.destPath = state.destPath
        ? state.destPath
        : state.images[0].path.substring(0, state.images[0].path.lastIndexOf('\\') + 1) +
          (state.isCreateDestSub ? state.destNameFolder : '');
    },
    removeImage(state, action) {
      state.images.map((img) => img.name !== action.payload);
    },
    updateImage: {
      prepare(name, data) {
        return {
          payload: { name, data },
        };
      },
      reducer(state, action) {
        if (!state.images.length) {
          return;
        }
        state.images = state.images.map((img) => {
          if (img.originName === action.payload.name) {
            return {
              ...img,
              ...action.payload.data,
            };
          } else {
            return img;
          }
        });
        state.optimizedSize = state.images.reduce(
          (acc, currentVal) => acc + currentVal?.newSize,
          0
        );
        state.totalPercentage =
          !state.totalSize || !state.optimizedSize
            ? 0
            : (((state.totalSize - state.optimizedSize) / state.totalSize) * 100).toFixed(2);
      },
    },
    nullImages(state) {
      state.images = [];
      state.totalSize = 0;
      state.optimizedSize = 0;
      state.totalPercentage = 0;
    },
    setDestPath(state, action) {
      state.destPath = action.payload;
    },
    setDestNameFolder(state, action) {
      state.destNameFolder = action.payload;
      state.destPath = state.destPath
        ? state.images[0].path.substring(0, state.images[0].path.lastIndexOf('\\') + 1) +
          (state.isCreateDestSub ? state.destNameFolder : '')
        : '';
    },
    setIsCreateDestSub(state, action) {
      state.isCreateDestSub = action.payload;
      state.destPath = state.destPath
        ? state.images[0].path.substring(0, state.images[0].path.lastIndexOf('\\') + 1) +
          (state.isCreateDestSub ? state.destNameFolder : '')
        : '';
    },
  },
});
export const {
  addImage,
  removeImage,
  updateImage,
  nullImages,
  setDestPath,
  setDestNameFolder,
  setIsCreateDestSub,
} = imagesSlice.actions;

export default imagesSlice.reducer;
