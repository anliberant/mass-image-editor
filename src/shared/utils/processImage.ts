/* eslint-disable */
const sharp = require('sharp');
//import sharp from 'sharp';

sharp.cache(false);

/* eslint-disable */
const isFileImage = (file: File): boolean => {
  const allowedFiles = ['image/gif', 'image/jpg', 'image/png', 'image/jpeg', 'svg'];
  return file && allowedFiles.includes(file['type']);
};

const processImage = async (
  imgPath: string,
  width: number,
  height: number,
  format: string,
  dest: string,
  fit: string,
  isExtend: boolean,
  leftExtend: number,
  topExtend: number,
  rightExtend: number,
  bottomExtend: number,
  extendColor: string,
  isExtract: boolean,
  leftExtract: number,
  topExtract: number,
  widthExtract: number,
  heightExtract: number,
  isTrim: boolean,
  trimColor: string,
  rotate: number,
  rotateBg: string,
  isFlip: boolean,
  isFlop: boolean,
  isAffine: boolean,
  affineA: number,
  affineB: number,
  affineC: number,
  affineD: number,
  isMedian: boolean,
  medianSize: number,
  isBlur: boolean,
  blurSigma: number,
  isFlatten: boolean,
  flattenBg: string,
  isUnflatten: boolean,
  isGamma: boolean,
  gammaOut: number,
  isNegate: boolean,
  negateAlpha: boolean,
  isNormalize: boolean,
  normalizeLower: number,
  normalizeUpper: number,
  isClahe: boolean,
  claheWidth: number,
  claheHeight: number,
  claheMaxSlope: number,
  newWidth: number,
  newHeight: number,
  isConvolve: boolean,
  isThreshold: boolean,
  thresholdVal: number,
  thresholdGreyscale: boolean,
  thresholdGrayscale: boolean,
  isModulate: boolean,
  modulateBrightness: number,
  modulateSaturation: number,
  modulateHue: number,
  modulateLightness: number
): Promise<sharp.OutputInfo> => {
  const affineArray = [
    [affineA, affineB],
    [affineC, affineD],
  ];
  const resize = newWidth !== width || newHeight !== height;

  try {
    let buffer = await sharp(imgPath, { failOn: 'none' })
      .rotate(rotate, {
        background: rotateBg,
      })
      .extend({
        top: topExtend || 0,
        bottom: bottomExtend || 0,
        left: leftExtend || 0,
        right: rightExtend || 0,
        background: extendColor,
      })
      .trim({
        background: trimColor,
        threshold: 0,
        lineArt: true,
      })
      .resize(newWidth || width, newHeight || height, {
        fit: sharp.fit[fit],
        withoutEnlargement: true,
      })
      .flip(isFlip)
      .flop(isFlop)
      .affine(affineArray, {
        background: 'white',
        interpolator: sharp.interpolators.nohalo,
      })
      .toBuffer();
    if (isExtract) {
      if (leftExtract && topExtract && widthExtract && heightExtract) {
        return await sharp(buffer)
          .extract({
            left: leftExtract || 0,
            top: topExtract || 0,
            width: widthExtract || 0,
            height: heightExtract || 0,
          })
          .toFile(dest);
      }
    }
    if (isMedian) {
      return await sharp(buffer).median(medianSize).toFile(dest);
    }
    if (isConvolve) {
      return await sharp(buffer)
        .convolve({
          width: 3,
          height: 3,
          kernel: [-1, 0, 1, -2, 0, 2, -1, 0, 1],
          scale: 1,
        })
        .toFile(dest);
    }
    if (isBlur) {
      if (blurSigma !== 0 && blurSigma !== 0.3) {
        return await sharp(buffer).blur(blurSigma).toFile(dest);
      }
      return await sharp(buffer).blur().toFile(dest);
    }
    if (isFlatten) {
      if (flattenBg && flattenBg !== '#ffffff00') {
        return await sharp(buffer).flatten({ background: flattenBg }).toFile(dest);
      }
      return await sharp(buffer).flatten().toFile(dest);
    }
    if (isUnflatten) {
      return await sharp(buffer).unflatten().toFile(dest);
    }
    if (isGamma) {
      if (gammaOut && gammaOut !== 2.2) {
        return await sharp(buffer).gamma().toFile(dest);
      }
    }
    if (isNegate) {
      return await sharp(buffer).negate({ alpha: negateAlpha }).toFile(dest);
    }
    if (isNormalize) {
      return await sharp(buffer)
        .normalize({ lower: normalizeLower, upper: normalizeUpper })
        .toFile(dest);
    }
    if (isClahe && claheWidth && claheHeight) {
      return await sharp(buffer)
        .clahe({
          width: claheWidth,
          height: claheHeight,
          maxSlape: claheMaxSlope,
        })
        .toFile(dest);
    }
    if (isThreshold) {
      return await sharp(buffer)
        .threshold(thresholdVal, { greyscale: thresholdGreyscale, grayscale: thresholdGrayscale })
        .toFile(dest);
    }
    if (isModulate) {
      return await sharp(buffer)
        .modulate({
          brightness: modulateBrightness,
          saturation: modulateSaturation,
          lightness: modulateLightness,
          hue: modulateHue,
        })
        .toFile(dest);
    }
    return await sharp(buffer).toFile(dest);
  } catch (error) {
    console.log(error);
  }
  return await image.toFile(dest);
};

export { isFileImage, processImage };

