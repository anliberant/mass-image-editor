import { ColourScapes } from '@shared/types/formatTypes/coloursSpace.type';
import { ChannelTypes } from '@shared/types/formats.type';

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
  isGreyscale: boolean;
  isColourSpace: boolean;
  colourSpace: ColourScapes;
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
  isRotate: boolean;
  rotate: number;
  isRotateBg: boolean;
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
  isNegateAlpha: boolean;
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
  isThresholdGreyscale: boolean;
  isThresholdGrayscale: boolean;
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
  isSharpenDefaults: boolean;
  isSharpenSigma: boolean;
  sharpenSigma: number;
  isSharpenM1: boolean;
  sharpenM1: number;
  isSharpenM2: boolean;
  sharpenM2: number;
  isSharpenX1: boolean;
  sharpenX1: number;
  isSharpenY2: boolean;
  sharpenY2: number;
  isSharpenY3: boolean;
  sharpenY3: number;
}
export interface TintDto {
  isTint: boolean;
  tintColor: string;
}
export interface ChannelManipulationDto {
  isRemoveAlpha: boolean;
  isEnsureAlpha: boolean;
  ensureAlphaVal: number;
  extractChannel: ChannelTypes;
}
export interface ImgOptionsDto {
  isCreatePrefix: boolean;
  prefix: string;
  isCreateSuffix: boolean;
  suffix: string;
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
  SharpenDto &
  TintDto &
  ChannelManipulationDto &
  ImgOptionsDto;
