export type TabStatusType = 'files' | 'options';
export type FitStatusType = 'cover' | 'contain' | 'fill' | 'inside' | 'outside';

export enum StatusType {
  notProcessed = 'Not processed',
  completed = 'Completed',
}

export interface ImageDto {
  name: string;
  originName: string;
  path: string;
  format: string;
  status: StatusType;
  openDestFolder: boolean;
  dirName: string;
  newSize: number;
  size?: number;
  width?: number;
  height?: number;
  newWidth?: number;
  newHeight?: number;
  newFormat?: string;
  fit: FitStatusType;
  isTrim: boolean;
}
export interface ShortImageDto {
  imgPath: string;
  width: number;
  height: number;
  dest: string;
  // dirName: string;
  openDestFolder?: boolean;
  fit: FitStatusType;
}
export interface ExtendDto {
  isExtend: booleand;
  isLeftExtend: boolean;
  isRightExtend: boolean;
  isTopExtend: boolean;
  isBottomExtend: boolean;
  leftExtend: number;
  rightExtend: number;
  topExtend: number;
  bottomExtend: number;
  extendColor: string;
}
export interface ImgNotifyDto {
  format: string;
  width: number;
  height: number;
  channels: number;
  premultiplied: boolean;
  size: number;
}
