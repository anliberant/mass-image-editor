import { IImages } from '@shared/types/images.type';
import { IOptions } from '@shared/types/options.type';

export const LocalStorage = {
  setOptionsData: (data: IOptions): void => {
    localStorage.setItem('options', JSON.stringify(data));
  },
  setImagesOptionsData: (data: IImages): void => {
    localStorage.setItem('imagesOptions', JSON.stringify(data));
  },
  removeOptionsData: (): void => {
    localStorage.removeItem('options');
  },
  removeImagesOptionsData: (): void => {
    localStorage.removeItem('imagesOptions');
  },
  getOptionsData: (): IOptions | undefined => ({
    options: JSON.parse(localStorage.getItem('options')),
  }),
  getImagesOptionsData: (): IImages | undefined => ({
    imagesOptions: JSON.parse(localStorage.getItem('imagesOptions')),
  }),
};
