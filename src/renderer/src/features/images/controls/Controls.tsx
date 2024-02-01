import Button from '@renderer/components/ui/button/Button';
import { nullImages } from '@renderer/features/images/store/imagesSlice';
import { PROCESS_IMAGE } from '@shared/constants/events.constants';
import { IImages } from '@shared/types/images.type';
import { IOptions } from '@shared/types/options.type';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { ControlsProps } from './Controls.props';

const Controls = ({ setIsUpdated }: ControlsProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { images, destPath } = useAppSelector<IImages>((state) => state.images);
  const {
    isExtend,
    leftExtend,
    rightExtend,
    topExtend,
    bottomExtend,
    extendColor,
    isExtract,
    leftExtract,
    topExtract,
    widthExtract,
    heightExtract,
    rotate,
    rotateBg,
    isFlip,
    isFlop,
    isAffine,
    affineA,
    affineB,
    affineC,
    affineD,
    isMedian,
    medianSize,
    isBlur,
    blurSigma,
    isFlatten,
    flattenBg,
    isUnflatten,
    isGamma,
    gammaOut,
    isNegate,
    negateAlpha,
    isNormalize,
    normalizeLower,
    normalizeUpper,
    isClahe,
    claheWidth,
    claheHeight,
    claheMaxSlope,
    isConvolve,
    isThreshold,
    thresholdVal,
    thresholdGreyscale,
    thresholdGrayscale,
    isModulate,
    modulateBrightness,
    modulateSaturation,
    modulateHue,
    modulateLightness,
    isSharpen,
    sharpenSigma,
    sharpenM1,
    sharpenM2,
    sharpenX1,
    sharpenY2,
    sharpenY3,
  } = useAppSelector<IOptions>((state) => state.options);
  const sendImagesList = (): void => {
    images.forEach((image, i) => {
      const imgPath = image.path;
      api.send(PROCESS_IMAGE, {
        imgPath,
        dest: destPath,
        width: image.width,
        height: image.height,
        newWidth: image.newWidth,
        newHeight: image.newHeight,
        openDestFolder: i === images.length - 1,
        status: image.status,
        fit: image.fit,
        isExtend,
        leftExtend,
        rightExtend,
        topExtend,
        bottomExtend,
        extendColor,
        isExtract,
        leftExtract,
        topExtract,
        widthExtract,
        heightExtract,
        isTrim: image.isTrim,
        trimColor: image.trimColor,
        rotate,
        rotateBg,
        isFlip,
        isFlop,
        isAffine,
        affineA,
        affineB,
        affineC,
        affineD,
        isMedian,
        medianSize,
        isBlur,
        blurSigma,
        isFlatten,
        flattenBg,
        isUnflatten,
        isGamma,
        gammaOut,
        isNegate,
        negateAlpha,
        isNormalize,
        normalizeLower,
        normalizeUpper,
        isClahe,
        claheWidth,
        claheHeight,
        claheMaxSlope,
        isConvolve,
        isThreshold,
        thresholdVal,
        thresholdGreyscale,
        thresholdGrayscale,
        isModulate,
        modulateBrightness,
        modulateSaturation,
        modulateHue,
        modulateLightness,
        isSharpen,
        sharpenSigma,
        sharpenM1,
        sharpenM2,
        sharpenX1,
        sharpenY2,
        sharpenY3,
      });
      setIsUpdated(true);
    });
  };
  return (
    <div className="w-full flex justify-between mt-[25px]">
      <Button type="clear" onClick={(): void => dispatch(nullImages())}>
        Clear list
      </Button>
      <Button type="optimize" onClick={sendImagesList}>
        Optimize
      </Button>
    </div>
  );
};
export default Controls;
