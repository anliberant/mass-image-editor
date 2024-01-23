import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

import { ImageDto } from './../../../../dtos/img.dto';
import { imagesSlice } from './imagesSlice';

export interface ImagesState {
  images: ImageDto[];
  totalSize: number;
  optimizedSize: number;
  totalPercentage: number;
  maxWidth: number;
  maxHeight: number;
  destPath: string;
  destNameFolder: string;
  isCreateDestSub: boolean;
  isExtend: boolean;
  isLeftExtend: boolean;
  isRightExtend: boolean;
  isTopExtend: boolean;
  isBottomExtend: boolean;
  leftExtend: number;
  rightExtend: number;
  topExtend: number;
  bottomExtend: number;
  isExtendColor: boolean;
  extendColor: string;
}
const initialState: ImagesState = {
  images: [],
  totalSize: 0,
  optimizedSize: 0,
  totalPercentage: 0,
  maxWidth: 0,
  maxHeight: 0,
  destPath: '',
  destNameFolder: 'mie',
  isCreateDestSub: true,
  isExtend: false,
  isLeftExtend: false,
  isRightExtend: false,
  isTopExtend: false,
  isBottomExtend: false,
  leftExtend: 0,
  rightExtend: 0,
  topExtend: 0,
  bottomExtend: 0,
  isExtendColor: false,
  extendColor: '#000000',
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage(state: RootState, action: PayloadAction) {
      state.images.push(action.payload as ImageDto);
      state.totalSize = state.images.reduce((acc, currentVal) => acc + currentVal.size, 0);
      state.optimizedSize = state.images.reduce((acc, currentVal) => acc + currentVal.newSize, 0);
      state.maxWidth =
        (action.payload as ImageDto).width > state.maxWidth
          ? (action.payload as ImageDto).width
          : state.maxWidth;
      state.maxHeight =
        (action.payload as ImageDto).height > state.maxHeight
          ? (action.payload as ImageDto).height
          : state.maxHeight;
      // state.maxWidth = state.images.reduce((prev, current) =>
      //   prev.width > current.width ? prev.width : current.width
      // );
      // state.maxHeight = state.images.reduce((prev, current) =>
      //   prev.height > current.height ? prev.height : current.height
      // );
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
      state.maxWidth = 0;
      state.maxHeight = 0;
      state.isExtend = false;
      state.isLeftExtend = false;
      state.isRightExtend = false;
      state.isTopExtend = false;
      state.isBottomExtend = false;
      state.leftExtend = 0;
      state.rightExtend = 0;
      state.topExtend = 0;
      state.bottomExtend = 0;
      state.isExtendColor = false;
      state.extendColor = '#000000';
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
    setIsLeftExtend(state, action) {
      state.isLeftExtend = action.payload;
    },
    setLeftExtend(state, action) {
      state.leftExtend = parseInt(action.payload);
      state.isExtend = state.isExtend || state.leftExtend > 0;
    },
    setIsRightExtend(state, action) {
      state.isRightExtend = action.payload;
    },
    setRightExtend(state, action) {
      state.rightExtend = parseInt(action.payload);
      state.isExtend = state.isExtend || state.rightExtend > 0;
    },
    setIsTopExtend(state, action) {
      state.isTopExtend = action.payload;
    },
    setTopExtend(state, action) {
      state.topExtend = parseInt(action.payload);
      state.isExtend = state.isExtend || state.topExtend > 0;
    },
    setIsBottomExtend(state, action) {
      state.isBottomExtend = action.payload;
    },
    setBottomExtend(state, action) {
      state.bottomExtend = parseInt(action.payload);
      state.isExtend = state.isExtend || state.bottomExtend > 0;
    },
    setIsExtendColor(state, action) {
      state.isExtendColor = action.payload;
    },
    setExtendColor(state, action) {
      state.extendColor = action.payload;
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
  setIsLeftExtend,
  setLeftExtend,
  setIsRightExtend,
  setRightExtend,
  setIsTopExtend,
  setTopExtend,
  setIsBottomExtend,
  setBottomExtend,
  setIsExtendColor,
  setExtendColor,
} = imagesSlice.actions;

export default imagesSlice.reducer;
