export type TabStatusType = 'files' | 'options';

export enum StatusType {
  notProcessed = 'Not processed',
  completed = 'Completed',
}

export interface ImageFileDto {
  name: string;
  format: string;
  file: File;
  image: typeof Image;
  status: StatusType;
  openDestFolder: boolean;
  dirName: string;
  newSize?: number;
  newWidth?: number;
  newHeight?: number;
  newFormat: string;
}
export interface ShortImageDto {
  imgPath: string;
  width: number;
  height: number;
  dest: string;
  // dirName: string;
  openDestFolder?: boolean;
}
export interface ImgNotifyDto {
  format: string;
  width: number;
  height: number;
  channels: number;
  premultiplied: boolean;
  size: number;
}
