import { createSlice } from '@reduxjs/toolkit';
import {
  AFFINE_INITIAL_AVAL,
  AFFINE_INITIAL_BVAL,
  AFFINE_INITIAL_CVAL,
  AFFINE_INITIAL_DVAL,
  BLUR_SIGMA_MIN_VALUE,
  CLAHE_DEFAULT_SLOPE,
  GAMMA_DEFAULT_VALUE,
  GAMMA_OUT_DEFAULT_VALUE,
  MEDIAN_DEFAULT_VAL,
  SHARPEN_M1_DEFAULT,
  SHARPEN_M2_DEFAULT,
  SHARPEN_SIGMA_MIN_VALUE,
  SHARPEN_X1_DEFAULT,
  SHARPEN_Y2_DEFAULT,
  SHARPEN_Y3_DEFAULT,
  THRESHOLD_MAX_VAL,
  TRANSPARENT_COLOR,
} from '@shared/constants/options.constants';
import { ColourScapes } from '@shared/types/formatTypes/coloursSpace.type';
import { ChannelTypes } from '@shared/types/formats.type';
import { THRESHOLD_DEFAULT_VAL } from './../../../../../shared/constants/options.constants';
import { initialOptionsState } from './initialStore';

export const optionsSlice = createSlice({
  name: 'options',
  initialState: initialOptionsState,
  reducers: {
    setIsOptionsUpdated(state, action) {
      state.isOptionsUpdated = action.payload;
    },
    setIsOptionsReseted(state, action) {
      state.isOptionsReseted = action.payload;
    },
    nullOptions(state) {
      state.isOptionsUpdated = true;
      state.isOptionsReseted = true;
      state.isExtend = false;
      state.leftExtend = 0;
      state.rightExtend = 0;
      state.topExtend = 0;
      state.bottomExtend = 0;
      state.isExtendColor = false;
      state.extendColor = TRANSPARENT_COLOR;
      state.isExtract = false;
      state.leftExtract = 0;
      state.topExtract = 0;
      state.widthExtract = 0;
      state.heightExtract = 0;
      state.isRotate = false;
      state.rotate = 0;
      state.isRotateBg = false;
      state.rotateBg = TRANSPARENT_COLOR;
      state.isFlip = false;
      state.isFlop = false;
      state.isUnflatten = false;
      state.isGamma = false;
      state.isGammaVal = false;
      state.gammaVal = GAMMA_DEFAULT_VALUE;
      state.isGammaOut = false;
      state.gammaOut = GAMMA_OUT_DEFAULT_VALUE;
      state.isNegate = false;
      state.isNegateAlpha = false;
      state.isNormalize = false;
      state.isNormalizeLower = false;
      state.normalizeLower = 1;
      state.isNormalizeUpper = false;
      state.normalizeUpper = 99;
      state.isConvolve = false;
      state.isThreshold = false;
      state.isThresholdVal = false;
      state.thresholdVal = THRESHOLD_DEFAULT_VAL;
      state.isThresholdGreyscale = true;
      state.isThresholdGrayscale = true;
      state.isModulate = false;
      state.isModulateBrightness = false;
      state.modulateBrightness = 0;
      state.isModulateSaturation = false;
      state.modulateSaturation = 0;
      state.isModulateHue = false;
      state.modulateHue = 0;
      state.isModulateLightness = false;
      state.modulateLightness = 0;
      state.isTint = false;
      state.isTintColor = false;
      state.tintColor = TRANSPARENT_COLOR;
      state.isGreyscale = false;
      state.isColourSpace = false;
      state.colourSpace = ColourScapes.SRGB;
      state.isAffine = false;
      state.affineA = AFFINE_INITIAL_AVAL;
      state.affineB = AFFINE_INITIAL_BVAL;
      state.affineC = AFFINE_INITIAL_CVAL;
      state.affineD = AFFINE_INITIAL_DVAL;
      state.isSharpen = false;
      state.isSharpenDefaults = false;
      state.isSharpenSigma = false;
      state.sharpenSigma = SHARPEN_SIGMA_MIN_VALUE;
      state.isSharpenM1 = false;
      state.sharpenM1 = SHARPEN_M1_DEFAULT;
      state.isSharpenM2 = false;
      state.sharpenM2 = SHARPEN_M2_DEFAULT;
      state.isSharpenX1 = false;
      state.sharpenX1 = SHARPEN_X1_DEFAULT;
      state.isSharpenY2 = false;
      state.sharpenY2 = SHARPEN_Y2_DEFAULT;
      state.isSharpenY3 = false;
      state.sharpenY3 = SHARPEN_Y3_DEFAULT;
      state.isMedian = false;
      state.isMedianSize = false;
      state.medianSize = MEDIAN_DEFAULT_VAL;
      state.isBlur = false;
      state.isBlurDefaultSettings = false;
      state.isBlurSigma = false;
      state.blurSigma = BLUR_SIGMA_MIN_VALUE;
      state.isFlatten = false;
      state.isFlattenBg = false;
      state.flattenBg = TRANSPARENT_COLOR;
      state.isClahe = false;
      state.isClaheWidth = false;
      state.claheWidth = 0;
      state.isClaheHeight = false;
      state.claheHeight = 0;
      state.isClaheMaxSlope = false;
      state.claheMaxSlope = CLAHE_DEFAULT_SLOPE;
      state.isChannelManipulation = false;
      state.isRemoveAlpha = false;
      state.isEnsureAlpha = false;
      state.ensureAlphaVal = 1;
      state.isExtractChannel = false;
      state.extractChannel = ChannelTypes.NONE;
    },
    nullSharpen(state) {
      state.isSharpen = false;
      state.isSharpenDefaults = false;
      state.isSharpenSigma = false;
      state.sharpenSigma = SHARPEN_SIGMA_MIN_VALUE;
      state.isSharpenM1 = false;
      state.sharpenM1 = SHARPEN_M1_DEFAULT;
      state.isSharpenM2 = false;
      state.sharpenM2 = SHARPEN_M2_DEFAULT;
      state.isSharpenX1 = false;
      state.sharpenX1 = SHARPEN_X1_DEFAULT;
      state.isSharpenY2 = false;
      state.sharpenY2 = SHARPEN_Y2_DEFAULT;
      state.isSharpenY3 = false;
      state.sharpenY3 = SHARPEN_Y3_DEFAULT;
    },
    setIsExtend(state, action) {
      state.isExtend = action.payload;
    },
    setLeftExtend(state, action) {
      state.leftExtend = parseInt(action.payload);
    },
    setRightExtend(state, action) {
      state.rightExtend = parseInt(action.payload);
    },
    setTopExtend(state, action) {
      state.topExtend = parseInt(action.payload);
    },
    setBottomExtend(state, action) {
      state.bottomExtend = parseInt(action.payload);
    },
    setIsExtendColor(state, action) {
      state.isExtendColor = action.payload;
    },
    setExtendColor(state, action) {
      state.extendColor = action.payload;
    },
    setIsExtract(state, action) {
      state.isExtract = action.payload;
    },
    setLeftExtract(state, action) {
      state.leftExtract = parseInt(action.payload);
    },
    setTopExtract(state, action) {
      state.topExtract = parseInt(action.payload);
    },
    setWidthExtract(state, action) {
      state.widthExtract = parseInt(action.payload);
    },
    setHeightExtract(state, action) {
      state.heightExtract = parseInt(action.payload);
    },
    setIsRotate(state, action) {
      state.isRotate = action.payload;
    },
    setRotate(state, action) {
      state.rotate = parseInt(action.payload);
    },
    setIsRotateBg(state, action) {
      state.isRotateBg = action.payload;
    },
    setRotateBg(state, action) {
      state.rotateBg = action.payload;
    },
    setIsFlip(state, action) {
      state.isFlip = action.payload;
    },
    setIsFlop(state, action) {
      state.isFlop = action.payload;
    },
    setIsAffine(state, action) {
      state.isAffine = action.payload;
    },
    setAffineA(state, action) {
      state.affineA = parseFloat(action.payload);
      state.isAffine = true;
      state.isOptionsUpdated = false;
      state.isOptionsReseted = false;
    },
    setAffineB(state, action) {
      state.affineB = parseFloat(action.payload);
      state.isAffine = true;
      state.isOptionsUpdated = false;
      state.isOptionsReseted = false;
    },
    setAffineC(state, action) {
      state.affineC = parseFloat(action.payload);
      state.isAffine = true;
      state.isOptionsUpdated = false;
      state.isOptionsReseted = false;
    },
    setAffineD(state, action) {
      state.affineD = parseFloat(action.payload);
      state.isAffine = true;
      state.isOptionsUpdated = false;
      state.isOptionsReseted = false;
    },
    setIsSharpen(state, action) {
      state.isSharpen = action.payload;
    },
    setIsSharpenDefaults(state, action) {
      nullSharpen();
      const bool = action.payload as boolean;
      state.isSharpenSigma = bool;
      state.isSharpenDefaults = bool;
      state.isSharpenM1 = bool;
      state.isSharpenM2 = bool;
      state.isSharpenX1 = bool;
      state.isSharpenY2 = bool;
      state.isSharpenY3 = bool;
    },
    setIsSharpenSigma(state, action) {
      state.isSharpenSigma = action.payload;
    },
    setSharpenSigma(state, action) {
      state.sharpenSigma = parseFloat(action.payload);
    },
    setIsSharpenM1(state, action) {
      state.isSharpenM1 = action.payload;
    },
    setSharpenM1(state, action) {
      state.sharpenM1 = parseInt(action.payload);
    },
    setIsSharpenM2(state, action) {
      state.isSharpenM2 = action.payload;
    },
    setSharpenM2(state, action) {
      state.sharpenM2 = parseInt(action.payload);
    },
    setIsSharpenX1(state, action) {
      state.isSharpenX1 = action.payload;
    },
    setSharpenX1(state, action) {
      state.sharpenX1 = parseInt(action.payload);
    },
    setIsSharpenY2(state, action) {
      state.isSharpenY2 = action.payload;
    },
    setSharpenY2(state, action) {
      state.sharpenY2 = parseInt(action.payload);
    },
    setIsSharpenY3(state, action) {
      state.isSharpenY3 = action.payload;
    },
    setSharpenY3(state, action) {
      state.sharpenY3 = parseInt(action.payload);
    },
    setIsMedian(state, action) {
      state.isMedian = action.payload;
    },
    setIsMedianSize(state, action) {
      state.isMedianSize = action.payload;
    },
    setMedianSize(state, action) {
      state.medianSize = parseInt(action.payload);
      state.isMedianSize = true;
    },
    setIsBlur(state, action) {
      state.isBlur = action.payload;
    },
    setIsBlurDefaultSettings(state, action) {
      const bool = action.payload as boolean;
      state.isBlurDefaultSettings = bool;
      state.isBlurSigma = !bool;
    },
    setIsBlurSigma(state, action) {
      const bool = action.payload as boolean;
      state.isBlurSigma = bool;
      state.isBlurDefaultSettings = !bool;
    },
    setBlurSigma(state, action) {
      state.blurSigma = parseFloat(action.payload);
      state.isBlur = true;
    },
    setIsFlatten(state, action) {
      state.isFlatten = action.payload;
    },
    setIsFlattenBg(state, action) {
      state.isFlattenBg = action.payload;
    },
    setFlattenBg(state, action) {
      state.flattenBg = action.payload;
    },
    setIsUnflatten(state, action) {
      state.isUnflatten = action.payload;
    },
    setIsGamma(state, action) {
      state.isGamma = action.payload;
    },
    setIsGammaVal(state, action) {
      state.isGammaVal = action.payload;
    },
    setGammaVal(state, action) {
      state.gammaVal = parseFloat(action.payload);
    },
    setIsGammaOut(state, action) {
      state.isGammaOut = action.payload;
    },
    setGammaOut(state, action) {
      state.gammaOut = parseFloat(action.payload);
    },
    setIsNegate(state, action) {
      state.isNegate = action.payload;
    },
    setIsNegateAlpha(state, action) {
      state.isNegateAlpha = action.payload;
    },
    setIsNormalize(state, action) {
      state.isNormalize = action.payload;
    },
    setIsNormalizeLower(state, action) {
      state.isNormalizeLower = action.payload;
    },
    setNormalizeLower(state, action) {
      state.normalizeLower = parseInt(action.payload);
    },
    setIsNormalizeUpper(state, action) {
      state.isNormalizeUpper = action.payload;
    },
    setNormalizeUpper(state, action) {
      state.normalizeUpper = parseInt(action.payload);
    },
    setIsClahe(state, action) {
      state.isClahe = action.payload;
    },
    setIsClaheWidth(state, action) {
      state.isClaheWidth = action.payload;
    },
    setClaheWidth(state, action) {
      state.claheWidth = parseInt(action.payload);
    },
    setIsClaheHeight(state, action) {
      state.isClaheHeight = action.payload;
    },
    setClaheHeight(state, action) {
      state.claheHeight = parseInt(action.payload);
    },
    setIsClaheMaxSlope(state, action) {
      state.isClaheMaxSlope = action.payload;
    },
    setClaheMaxSlope(state, action) {
      state.claheMaxSlope = parseInt(action.payload);
    },
    setIsConvolve(state, action) {
      state.isConvolve = action.payload;
    },
    setIsThreshold(state, action) {
      state.isThreshold = action.payload;
    },
    setIsThresholdVal(state, action) {
      state.isThresholdVal = action.payload;
    },
    setThresholdVal(state, action) {
      let thresholdVal = parseInt(action.payload);
      if (thresholdVal > THRESHOLD_MAX_VAL) {
        thresholdVal = THRESHOLD_MAX_VAL;
      }
      state.thresholdVal = thresholdVal;
    },
    setIsThresholdGreyscale(state, action) {
      state.isThresholdGreyscale = action.payload;
    },
    setIsThresholdGrayscale(state, action) {
      state.isThresholdGrayscale = action.payload;
    },
    setIsModulate(state, action) {
      state.isModulate = action.payload;
    },
    setIsModulateBrightness(state, action) {
      state.isModulateBrightness = action.payload;
    },
    setModulateBrightness(state, action) {
      state.modulateBrightness = parseFloat(action.payload);
    },
    setIsModulateSaturation(state, action) {
      state.isModulateSaturation = action.payload;
    },
    setModulateSaturation(state, action) {
      state.modulateSaturation = parseFloat(action.payload);
    },
    setIsModulateHue(state, action) {
      state.isModulateHue = action.payload;
    },
    setModulateHue(state, action) {
      state.modulateHue = parseInt(action.payload);
    },
    setIsModulateLightness(state, action) {
      state.isModulateLightness = action.payload;
    },
    setModulateLightness(state, action) {
      state.modulateLightness = parseFloat(action.payload);
    },
    setIsTint(state, action) {
      state.isTint = action.payload;
    },
    setIsTintColor(state, action) {
      state.isTintColor = action.payload;
    },
    setTintColor(state, action) {
      state.tintColor = action.payload;
    },
    setIsGreyscale(state, action) {
      state.isGreyscale = action.payload;
    },
    setIsColourSpace(state, action) {
      state.isColourSpace = action.payload;
    },
    setColourSpace(state, action) {
      const colourSpace = action.payload as ColourScapes;
      if (colourSpace !== ColourScapes.SRGB) {
        state.isColourSpace = true;
      }
      state.colourSpace = action.payload;
    },
    setIsChannelManipulation(state, action) {
      state.isChannelManipulation = action.payload;
    },
    setIsRemoveAlpha(state, action) {
      state.isRemoveAlpha = action.payload;
    },
    setIsEnsureAlpha(state, action) {
      state.isEnsureAlpha = action.payload;
    },
    setEnsureAlphaValue(state, action) {
      state.ensureAlphaVal = parseFloat(action.payload);
    },
    setIsExtractChannel(state, action) {
      state.isExtractChannel = action.payload;
    },
    setExtractChannel(state, action) {
      const extractChannel = action.payload as ChannelTypes;
      if (extractChannel === ChannelTypes.NONE) {
        state.isEnsureAlpha = false;
      } else {
        state.isEnsureAlpha = true;
      }
      state.extractChannel = action.payload;
    },
  },
});
export const {
  setIsOptionsUpdated,
  setIsOptionsReseted,
  nullOptions,
  nullSharpen,
  setIsExtend,
  setLeftExtend,
  setRightExtend,
  setTopExtend,
  setBottomExtend,
  setIsExtendColor,
  setExtendColor,
  setIsExtract,
  setLeftExtract,
  setTopExtract,
  setWidthExtract,
  setHeightExtract,
  setIsRotate,
  setRotate,
  setIsRotateBg,
  setRotateBg,
  setIsFlip,
  setIsFlop,
  setIsAffine,
  setAffineA,
  setAffineB,
  setAffineC,
  setAffineD,
  setIsSharpen,
  setIsSharpenDefaults,
  setIsSharpenSigma,
  setSharpenSigma,
  setIsSharpenM1,
  setSharpenM1,
  setIsSharpenM2,
  setSharpenM2,
  setIsSharpenX1,
  setSharpenX1,
  setIsSharpenY2,
  setSharpenY2,
  setIsSharpenY3,
  setSharpenY3,
  setIsMedian,
  setIsMedianSize,
  setMedianSize,
  setIsBlur,
  setIsBlurDefaultSettings,
  setIsBlurSigma,
  setBlurSigma,
  setIsFlatten,
  setIsFlattenBg,
  setFlattenBg,
  setIsUnflatten,
  setIsGamma,
  setIsGammaVal,
  setGammaVal,
  setIsGammaOut,
  setGammaOut,
  setIsNegate,
  setIsNegateAlpha,
  setIsNormalize,
  setIsNormalizeLower,
  setNormalizeLower,
  setIsNormalizeUpper,
  setNormalizeUpper,
  setIsClahe,
  setIsClaheWidth,
  setClaheWidth,
  setIsClaheHeight,
  setClaheHeight,
  setIsClaheMaxSlope,
  setClaheMaxSlope,
  setIsConvolve,
  setIsThreshold,
  setIsThresholdVal,
  setThresholdVal,
  setIsThresholdGreyscale,
  setIsThresholdGrayscale,
  setIsModulate,
  setIsModulateBrightness,
  setModulateBrightness,
  setIsModulateSaturation,
  setModulateSaturation,
  setIsModulateHue,
  setModulateHue,
  setIsModulateLightness,
  setModulateLightness,
  setIsTint,
  setIsTintColor,
  setTintColor,
  setIsGreyscale,
  setIsColourSpace,
  setColourSpace,
  setIsChannelManipulation,
  setIsRemoveAlpha,
  setIsEnsureAlpha,
  setIsExtractChannel,
  setEnsureAlphaValue,
  setExtractChannel,
} = optionsSlice.actions;

export default optionsSlice.reducer;
