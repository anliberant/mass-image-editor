import { RootState, store } from '@renderer/store';
import { IImages } from '@shared/types/images.type';

export function getImagesOptionsFromState(): IImages {
  const state: RootState = store.getState();

  const imagesOptions: IImages = {
    images: [],
    totalSize: 0,
    optimizedSize: 0,
    totalPercentage: 0,
    maxWidth: 0,
    maxHeight: 0,
    destPath: state.images.destPath,
    destNameFolder: state.images.destNameFolder,
    isCreateDestSub: state.images.isCreateDestSub,
    isCreatePrefix: state.images.isCreatePrefix,
    prefix: state.images.prefix,
    isCreateSuffix: state.images.isCreateSuffix,
    suffix: state.images.suffix,
  };

  return imagesOptions || {};
}
