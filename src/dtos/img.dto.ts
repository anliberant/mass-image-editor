export type TabStatusType = 'files' | 'options';

export enum StatusType {
  notProcessed = 'Not processed',
  completed = 'Completed',
}

export interface ImageDto {
  name: string;
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
