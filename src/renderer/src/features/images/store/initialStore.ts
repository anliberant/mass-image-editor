import { IImages } from '@shared/types/images.type';

export const initialImagesState: IImages = {
  images: [],
  totalSize: 0,
  optimizedSize: 0,
  totalPercentage: 0,
  maxWidth: 0,
  maxHeight: 0,
  destPath: '',
  destNameFolder: 'mie',
  isCreateDestSub: true,
};
