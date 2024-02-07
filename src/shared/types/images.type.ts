import { ImageDto } from '@shared/dtos/img.dto';

export interface IImages {
  images: ImageDto[];
  totalSize: number;
  optimizedSize: number;
  totalPercentage: number;
  maxWidth: number;
  maxHeight: number;
  destPath: string;
  destNameFolder: string;
  isCreateDestSub: boolean;
  isCreatePrefix: boolean;
  prefix: string;
  isCreateSuffix: boolean;
  suffix: string;
  isAllCompleted: boolean;
}
