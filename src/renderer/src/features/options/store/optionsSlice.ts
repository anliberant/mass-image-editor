import { createSlice } from '@reduxjs/toolkit';
import {
  AFFINE_INITIAL_AVAL,
  AFFINE_INITIAL_BVAL,
  AFFINE_INITIAL_CVAL,
  AFFINE_INITIAL_DVAL,
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
    nullOptions(state) {
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
      state.rotate = 0;
      state.rotateBg = TRANSPARENT_COLOR;
      state.isFlip = false;
      state.isFlop = false;
      state.isUnflatten = false;
      state.isGamma = false;
      state.gammaVal = GAMMA_DEFAULT_VALUE;
      state.gammaOut = GAMMA_OUT_DEFAULT_VALUE;
      state.isNegate = false;
      state.negateAlpha = false;
      state.isNormalize = false;
      state.normalizeLower = 1;
      state.normalizeUpper = 99;
      state.isConvolve = false;
      state.isThreshold = false;
      state.thresholdVal = THRESHOLD_DEFAULT_VAL;
      state.thresholdGreyscale = true;
      state.thresholdGrayscale = true;
      state.isModulate = false;
      state.modulateBrightness = 0;
      state.modulateSaturation = 0;
      state.modulateHue = 0;
      state.modulateLightness = 0;
      state.isTint = false;
      state.tintColor = TRANSPARENT_COLOR;
      state.isGreyscale = false;
      state.isColourSpace = false;
      state.colourSpace = ColourScapes.SRGB;
    },
    nullAffine(state) {
      state.isAffine = false;
      state.affineA = AFFINE_INITIAL_AVAL;
      state.affineB = AFFINE_INITIAL_BVAL;
      state.affineC = AFFINE_INITIAL_CVAL;
      state.affineD = AFFINE_INITIAL_DVAL;
    },
    nullSharpen(state) {
      state.isSharpen = false;
      state.sharpenSigma = SHARPEN_SIGMA_MIN_VALUE;
      state.sharpenM1 = SHARPEN_M1_DEFAULT;
      state.sharpenM2 = SHARPEN_M2_DEFAULT;
      state.sharpenX1 = SHARPEN_X1_DEFAULT;
      state.sharpenY2 = SHARPEN_Y2_DEFAULT;
      state.sharpenY3 = SHARPEN_Y3_DEFAULT;
    },
    nullMedian(state) {
      state.isMedian = false;
      state.medianSize = MEDIAN_DEFAULT_VAL;
    },
    nullBlur(state) {
      state.isBlur = false;
      state.blurSigma = 0;
    },
    nullFlatten(state) {
      state.isFlatten = false;
      state.flattenBg = TRANSPARENT_COLOR;
    },
    nullClahe(state) {
      state.isClahe = false;
      state.claheWidth = 0;
      state.claheHeight = 0;
      state.claheMaxSlope = CLAHE_DEFAULT_SLOPE;
    },
    nullChannelManipulation(state) {
      state.isRemoveAlpha = false;
      state.isEnsureAlpha = false;
      state.ensureAlphaVal = 1;
      state.extractChannel = ChannelTypes.NONE;
    },
    setLeftExtend(state, action) {
      state.leftExtend = parseInt(action.payload);
      state.isExtend = state.isExtend || state.leftExtend > 0;
    },
    setRightExtend(state, action) {
      state.rightExtend = parseInt(action.payload);
      state.isExtend = state.isExtend || state.rightExtend > 0;
    },
    setTopExtend(state, action) {
      state.topExtend = parseInt(action.payload);
      state.isExtend = state.isExtend || state.topExtend > 0;
    },
    setBottomExtend(state, action) {
      state.bottomExtend = parseInt(action.payload);
      state.isExtend = state.isExtend || state.bottomExtend > 0;
    },
    setIsExtendColor(state, action) {
      state.isExtendColor = action.payload;
    },
    setExtendColor(state, action) {
      state.extendColor = action.payload;
    },
    setLeftExtract(state, action) {
      state.leftExtract = parseInt(action.payload);
      state.isExtract = state.isExtract || state.leftExtract > 0;
    },
    setTopExtract(state, action) {
      state.topExtract = parseInt(action.payload);
      state.isExtract = state.isExtract || state.topExtract > 0;
    },
    setWidthExtract(state, action) {
      state.widthExtract = parseInt(action.payload);
      state.isExtract = state.isExtract || state.widthExtract > 0;
    },
    setHeightExtract(state, action) {
      state.heightExtract = parseInt(action.payload);
      state.isExtract = state.isExtract || state.heightExtract > 0;
    },
    setRotate(state, action) {
      state.rotate = parseInt(action.payload);
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
    setAffineA(state, action) {
      state.affineA = parseFloat(action.payload);
      state.isAffine = true;
    },
    setAffineB(state, action) {
      state.affineB = parseFloat(action.payload);
      state.isAffine = true;
    },
    setAffineC(state, action) {
      state.affineC = parseFloat(action.payload);
      state.isAffine = true;
    },
    setAffineD(state, action) {
      state.affineD = parseFloat(action.payload);
      state.isAffine = true;
    },
    setIsSharpen(state, action) {
      state.isSharpen = action.payload;
    },
    setSharpenSigma(state, action) {
      state.sharpenSigma = parseFloat(action.payload);
      state.isSharpen =
        state.sharpenSigma ||
        state.sharpenM1 !== SHARPEN_M1_DEFAULT ||
        state.sharpenM2 !== SHARPEN_M2_DEFAULT ||
        state.sharpenX1 !== SHARPEN_X1_DEFAULT ||
        state.sharpenY2 !== SHARPEN_Y2_DEFAULT ||
        state.sharpenY3 !== SHARPEN_Y3_DEFAULT;
    },
    setSharpenM1(state, action) {
      state.sharpenM1 = parseInt(action.payload);
      state.isSharpen =
        state.sharpenSigma ||
        state.sharpenM1 !== SHARPEN_M1_DEFAULT ||
        state.sharpenM2 !== SHARPEN_M2_DEFAULT ||
        state.sharpenX1 !== SHARPEN_X1_DEFAULT ||
        state.sharpenY2 !== SHARPEN_Y2_DEFAULT ||
        state.sharpenY3 !== SHARPEN_Y3_DEFAULT;
    },
    setSharpenM2(state, action) {
      state.sharpenM2 = parseInt(action.payload);
      state.isSharpen =
        state.sharpenSigma ||
        state.sharpenM1 !== SHARPEN_M1_DEFAULT ||
        state.sharpenM2 !== SHARPEN_M2_DEFAULT ||
        state.sharpenX1 !== SHARPEN_X1_DEFAULT ||
        state.sharpenY2 !== SHARPEN_Y2_DEFAULT ||
        state.sharpenY3 !== SHARPEN_Y3_DEFAULT;
    },
    setSharpenX1(state, action) {
      state.sharpenX1 = parseInt(action.payload);
      state.isSharpen =
        state.sharpenSigma ||
        state.sharpenM1 !== SHARPEN_M1_DEFAULT ||
        state.sharpenM2 !== SHARPEN_M2_DEFAULT ||
        state.sharpenX1 !== SHARPEN_X1_DEFAULT ||
        state.sharpenY2 !== SHARPEN_Y2_DEFAULT ||
        state.sharpenY3 !== SHARPEN_Y3_DEFAULT;
    },
    setSharpenY2(state, action) {
      state.sharpenY2 = parseInt(action.payload);
      state.isSharpen =
        state.sharpenSigma ||
        state.sharpenM1 !== SHARPEN_M1_DEFAULT ||
        state.sharpenM2 !== SHARPEN_M2_DEFAULT ||
        state.sharpenX1 !== SHARPEN_X1_DEFAULT ||
        state.sharpenY2 !== SHARPEN_Y2_DEFAULT ||
        state.sharpenY3 !== SHARPEN_Y3_DEFAULT;
    },
    setSharpenY3(state, action) {
      state.sharpenY3 = parseInt(action.payload);
      state.isSharpen =
        state.sharpenSigma ||
        state.sharpenM1 !== SHARPEN_M1_DEFAULT ||
        state.sharpenM2 !== SHARPEN_M2_DEFAULT ||
        state.sharpenX1 !== SHARPEN_X1_DEFAULT ||
        state.sharpenY2 !== SHARPEN_Y2_DEFAULT ||
        state.sharpenY3 !== SHARPEN_Y3_DEFAULT;
    },
    setIsMedian(state, action) {
      state.isMedian = action.payload;
    },
    setMedianSize(state, action) {
      state.medianSize = parseInt(action.payload);
    },
    setIsBlur(state, action) {
      state.isBlur = action.payload;
    },
    setBlurSigma(state, action) {
      state.blurSigma = parseFloat(action.payload);
      state.isBlur = true;
    },
    setIsFlatten(state, action) {
      state.isFlatten = action.payload;
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
    setGammaVal(state, action) {
      state.gammaVal = parseFloat(action.payload);
    },
    setGammaOut(state, action) {
      state.gammaOut = parseFloat(action.payload);
    },
    setIsNegate(state, action) {
      state.isNegate = action.payload;
    },
    setIsNegateAlpha(state, action) {
      state.negateAlpha = action.payload;
    },
    setIsNormalize(state, action) {
      state.isNormalize = action.payload;
    },
    setNormalizeLower(state, action) {
      state.normalizeLower = parseInt(action.payload);
    },
    setNormalizeUpper(state, action) {
      state.normalizeUpper = parseInt(action.payload);
    },
    setIsClahe(state, action) {
      state.isClahe = action.payload;
    },
    setClaheWidth(state, action) {
      state.claheWidth = parseInt(action.payload);
    },
    setClaheHeight(state, action) {
      state.claheHeight = parseInt(action.payload);
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
    setThresholdVal(state, action) {
      let thresholdVal = parseInt(action.payload);
      if (thresholdVal > THRESHOLD_MAX_VAL) {
        thresholdVal = THRESHOLD_MAX_VAL;
      }
      state.thresholdVal = thresholdVal;
    },
    setIsThresholdGreyscale(state, action) {
      state.thresholdGreyscale = action.payload;
    },
    setIsThresholdGrayscale(state, action) {
      state.thresholdGrayscale = action.payload;
    },
    setIsModulate(state, action) {
      state.isModulate = action.payload;
    },
    setModulateBrightness(state, action) {
      state.modulateBrightness = parseFloat(action.payload);
    },
    setModulateSaturation(state, action) {
      state.modulateSaturation = parseFloat(action.payload);
    },
    setModulateHue(state, action) {
      state.modulateHue = parseInt(action.payload);
    },
    setModulateLightness(state, action) {
      state.modulateLightness = parseFloat(action.payload);
    },
    setIsTint(state, action) {
      state.isTint = action.payload;
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
    setIsRemoveAlpha(state, action) {
      state.isRemoveAlpha = action.payload;
    },
    setIsEnsureAlpha(state, action) {
      state.isEnsureAlpha = action.payload;
    },
    setEnsureAlphaValue(state, action) {
      state.ensureAlphaVal = parseFloat(action.payload);
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
  nullOptions,
  nullAffine,
  nullSharpen,
  nullMedian,
  nullClahe,
  nullChannelManipulation,
  setLeftExtend,
  setRightExtend,
  setTopExtend,
  setBottomExtend,
  setIsExtendColor,
  setExtendColor,
  setLeftExtract,
  setTopExtract,
  setWidthExtract,
  setHeightExtract,
  setRotate,
  setRotateBg,
  setIsFlip,
  setIsFlop,
  setAffineA,
  setAffineB,
  setAffineC,
  setAffineD,
  setIsSharpen,
  setSharpenSigma,
  setSharpenM1,
  setSharpenM2,
  setSharpenX1,
  setSharpenY2,
  setSharpenY3,
  setIsMedian,
  setMedianSize,
  setIsBlur,
  setBlurSigma,
  setIsFlatten,
  setFlattenBg,
  setIsUnflatten,
  setIsGamma,
  setGammaVal,
  setGammaOut,
  setIsNegate,
  setIsNegateAlpha,
  setIsNormalize,
  setNormalizeLower,
  setNormalizeUpper,
  setIsClahe,
  setClaheWidth,
  setClaheHeight,
  setClaheMaxSlope,
  setIsConvolve,
  setIsThreshold,
  setThresholdVal,
  setIsThresholdGreyscale,
  setIsThresholdGrayscale,
  setIsModulate,
  setModulateBrightness,
  setModulateSaturation,
  setModulateHue,
  setModulateLightness,
  setIsTint,
  setTintColor,
  setIsGreyscale,
  setIsColourSpace,
  setColourSpace,
  setIsRemoveAlpha,
  setIsEnsureAlpha,
  setEnsureAlphaValue,
  setExtractChannel,
} = optionsSlice.actions;

export default optionsSlice.reducer;
