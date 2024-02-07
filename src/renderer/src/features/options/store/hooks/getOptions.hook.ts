import { RootState, store } from '@renderer/store';
import { IOptions } from '@shared/types/options.type';

export function getOptionsFromState(): IOptions {
  const state: RootState = store.getState();

  const options: IOptions = {
    isOptionsUpdated: state.options.isOptionsUpdated,
    isOptionsReseted: state.options.isOptionsReseted,
    isExtend: state.options.isExtend,
    leftExtend: state.options.leftExtend,
    rightExtend: state.options.rightExtend,
    topExtend: state.options.topExtend,
    bottomExtend: state.options.bottomExtend,
    isExtendColor: state.options.isExtendColor,
    extendColor: state.options.extendColor,
    isExtract: state.options.isExtract,
    leftExtract: state.options.leftExtract,
    topExtract: state.options.topExtract,
    widthExtract: state.options.widthExtract,
    heightExtract: state.options.heightExtract,
    isRotate: state.options.isRotate,
    rotate: state.options.rotate,
    isRotateBg: state.options.isRotateBg,
    rotateBg: state.options.rotateBg,
    isFlip: state.options.isFlip,
    isFlop: state.options.isFlop,
    isAffine: state.options.isAffine,
    affineA: state.options.affineA,
    affineB: state.options.affineB,
    affineC: state.options.affineC,
    affineD: state.options.affineD,
    isMedian: state.options.isMedian,
    isMedianSize: state.options.isMedianSize,
    medianSize: state.options.medianSize,
    isBlur: state.options.isBlur,
    isBlurDefaultSettings: state.options.isBlurDefaultSettings,
    isBlurSigma: state.options.isBlurSigma,
    blurSigma: state.options.blurSigma,
    isFlatten: state.options.isFlatten,
    isFlattenBg: state.options.isFlattenBg,
    flattenBg: state.options.flattenBg,
    isUnflatten: state.options.isUnflatten,
    isGamma: state.options.isGamma,
    isGammaVal: state.options.isGammaVal,
    gammaVal: state.options.gammaVal,
    isGammaOut: state.options.isGammaOut,
    gammaOut: state.options.gammaOut,
    isNegate: state.options.isNegate,
    isNegateAlpha: state.options.isNegateAlpha,
    isNormalize: state.options.isNormalize,
    isNormalizeLower: state.options.isNormalizeLower,
    normalizeLower: state.options.normalizeLower,
    isNormalizeUpper: state.options.isNormalizeUpper,
    normalizeUpper: state.options.normalizeUpper,
    isClahe: state.options.isClahe,
    isClaheWidth: state.options.isClaheWidth,
    claheWidth: state.options.claheWidth,
    isClaheHeight: state.options.claheHeight,
    claheHeight: state.options.claheHeight,
    isClaheMaxSlope: state.options.isClaheMaxSlope,
    claheMaxSlope: state.options.claheMaxSlope,
    isConvolve: state.options.isConvolve,
    isThreshold: state.options.isThreshold,
    isThresholdVal: state.options.isThresholdVal,
    thresholdVal: state.options.thresholdVal,
    isThresholdGreyscale: state.options.isThresholdGreyscale,
    isThresholdGrayscale: state.options.isThresholdGrayscale,
    isModulate: state.options.isModulate,
    isModulateBrightness: state.options.isModulateBrightness,
    modulateBrightness: state.options.modulateBrightness,
    isModulateSaturation: state.options.isModulateSaturation,
    modulateSaturation: state.options.modulateSaturation,
    isModulateHue: state.options.isModulateHue,
    modulateHue: state.options.modulateHue,
    isModulateLightness: state.options.isModulateLightness,
    modulateLightness: state.options.modulateLightness,
    isSharpen: state.options.isSharpen,
    isSharpenDefaults: state.options.isSharpenDefaults,
    isSharpenSigma: state.options.isSharpenSigma,
    sharpenSigma: state.options.sharpenSigma,
    isSharpenM1: state.options.isSharpenM1,
    sharpenM1: state.options.sharpenM1,
    isSharpenM2: state.options.isSharpenM2,
    sharpenM2: state.options.sharpenM2,
    isSharpenX1: state.options.isSharpenX1,
    sharpenX1: state.options.sharpenX1,
    isSharpenY2: state.options.isSharpenY2,
    sharpenY2: state.options.sharpenY2,
    isSharpenY3: state.options.isSharpenY3,
    sharpenY3: state.options.sharpenY3,
    isTint: state.options.isTint,
    isTintColor: state.options.isTintColor,
    tintColor: state.options.tintColor,
    isGreyscale: state.options.isGreyscale,
    isColourSpace: state.options.isColourSpace,
    colourSpace: state.options.colourSpace,
    isChannelManipulation: state.options.isChannelManipulation,
    isRemoveAlpha: state.options.isRemoveAlpha,
    isEnsureAlpha: state.options.isEnsureAlpha,
    ensureAlphaVal: state.options.ensureAlphaVal,
    isExtractChannel: state.options.isExtractChannel,
    extractChannel: state.options.extractChannel,
  };

  return options || {};
}