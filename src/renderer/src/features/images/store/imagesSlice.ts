import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../store';

import { ImageDto } from '@shared/dtos/img.dto';
import { imagesSlice } from './imagesSlice';
import { initialImagesState } from './initialStore';

const homeDir = api.homedir();

export const imagesSlice = createSlice({
  name: 'images',
  initialState: initialImagesState,
  reducers: {
    addImage(state: RootState, action: PayloadAction) {
      const candidateImage = action.payload as ImageDto;
      state.images.push(candidateImage);
      state.totalSize = state.images.reduce((acc, currentVal) => acc + currentVal.size, 0);
      state.optimizedSize = state.images.reduce((acc, currentVal) => acc + currentVal.newSize, 0);
      state.maxWidth =
        candidateImage.width > state.maxWidth ? candidateImage.width : state.maxWidth;
      state.maxHeight =
        candidateImage.height > state.maxHeight ? candidateImage.height : state.maxHeight;
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
      state.maxWidth = 0;
      state.maxHeight = 0;
    },
    setDestPath(state, action) {
      state.destPath = action.payload;
    },
    setDestNameFolder(state, action) {
      state.destNameFolder = action.payload;
      state.destPath = state.destPath
        ? state.images.length > 0
          ? state.images[0].path.substring(0, state.images[0]?.path.lastIndexOf('\\') + 1) +
            (state.isCreateDestSub ? state.destNameFolder : '')
          : ''
        : ``;
    },
    setIsCreateDestSub(state, action) {
      state.isCreateDestSub = action.payload;
      state.destPath = state.destPath
        ? state.destPath
        : state.images.length > 0
        ? state.images[0].path.substring(0, state.images[0].path.lastIndexOf('\\') + 1) +
          (state.isCreateDestSub ? state.destNameFolder : '')
        : homeDir;
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