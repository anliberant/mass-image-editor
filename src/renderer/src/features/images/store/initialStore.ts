import { IImages } from '@shared/types/images.type';
import { LocalStorage } from '@shared/utils/localStorage';

const getStateFromLocalStorage = (): IImages | undefined => {
  const { imagesOptions } = LocalStorage.getImagesOptionsData();
  return imagesOptions;
};

export const initialState: IImages = {
  images: [],
  totalSize: 0,
  optimizedSize: 0,
  totalPercentage: 0,
  maxWidth: 0,
  maxHeight: 0,
  destPath: '',
  destNameFolder: 'mie',
  isCreateDestSub: true,
  isCreatePrefix: false,
  prefix: '',
  isCreateSuffix: false,
  suffix: '',
  isAllCompleted: false,
};

export const initialImagesState: IImages = getStateFromLocalStorage() || initialState;
