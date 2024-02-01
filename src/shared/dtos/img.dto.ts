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
  size: number;
  width: number;
  height: number;
  newWidth: number;
  newHeight: number;
  newFormat?: string;
  fit: FitStatusType;
  isTrim: boolean;
  trimColor: string;
}
export interface ShortImageDto {
  imgPath: string;
  width: number;
  height: number;
  newWidth: number;
  newHeight: number;
  dest: string;
  // dirName: string;
  openDestFolder?: boolean;
  fit: FitStatusType;
  isTrim: boolean;
  trimColor: string;
  isFlip: boolean;
  isFlop: boolean;
  isMedian: boolean;
  medianSize: number;
  isConvolve: boolean;
}
export interface ExtendDto {
  isExtend: booleand;
  leftExtend: number;
  rightExtend: number;
  topExtend: number;
  bottomExtend: number;
  extendColor: string;
}
export interface ExtractDto {
  isExtract: boolean;
  leftExtract: number;
  topExtract: number;
  widthExtract: number;
  heightExtract: number;
}
export interface RotateDto {
  rotate: number;
  rotateBg: string;
}
export interface AffineDto {
  isAffine: boolean;
  affineA: number;
  affineB: number;
  affineC: number;
  affineD: number;
}
export interface BlurDto {
  isBlur: boolean;
  blurSigma: number;
}
export interface FlattenDto {
  isFlatten: boolean;
  flattenBg: string;
  isUnflatten: boolean;
}
export interface GammaDto {
  isGamma: boolean;
  gammaVal: number;
  gammaOut: number;
}
export interface NegateDto {
  isNegate: boolean;
  negateAlpha: boolean;
}
export interface NormalizeDto {
  isNormalize: boolean;
  normalizeLower: number;
  normalizeUpper: number;
}
export interface ClaheDto {
  isClahe: boolean;
  claheWidth: number;
  claheHeight: number;
  claheMaxSlope: number;
}
export interface ThresholdDto {
  isThreshold: boolean;
  thresholdVal: number;
  thresholdGreyscale: boolean;
  thresholdGrayscale: boolean;
}
export interface ModulateDto {
  isModulate: boolean;
  modulateBrightness: number;
  modulateSaturation: number;
  modulateHue: number;
  modulateLightness: number;
}
export interface SharpenDto {
  isSharpen: boolean;
  sharpenSigma: number;
  sharpenM1: number;
  sharpenM2: number;
  sharpenX1: number;
  sharpenY2: number;
  sharpenY3: number;
}

export interface ImgNotifyDto {
  format: string;
  width: number;
  height: number;
  size: number;
}

export type ImageWithOptions = ShortImageDto &
  ExtendDto &
  ExtractDto &
  RotateDto &
  AffineDto &
  BlurDto &
  FlattenDto &
  GammaDto &
  NegateDto &
  NormalizeDto &
  ClaheDto &
  ThresholdDto &
  ModulateDto &
  SharpenDto;
