import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { THRESHOLD_MAX_VAL, THRESHOLD_MIN_VAL } from '@shared/constants/options.constants';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setIsOptionsReseted,
  setIsOptionsUpdated,
  setIsThreshold,
  setIsThresholdGrayscale,
  setIsThresholdGreyscale,
  setIsThresholdVal,
  setThresholdVal,
} from '../store/optionsSlice';

const ThresholdOption = (): JSX.Element => {
  const { isThreshold, isThresholdVal, thresholdVal, isThresholdGreyscale, isThresholdGrayscale } =
    useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const [isThresholdCheckbox, setIsThresholdCheckbox] = useState(isThreshold || false);
  const [isThresholdValCheckbox, setIsThresholdValCheckbox] = useState(isThresholdVal || false);
  const [isThresholdGreyscaleCheckbox, setIsThresholdGreyscaleCheckbox] = useState(
    isThresholdGreyscale || false
  );
  const [isThresholdGrayscaleCheckbox, setIsThresholdGrayscaleCheckbox] = useState(
    isThresholdGrayscale || false
  );

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };
  const updateIsThreshold = (): void => {
    dispatch(setIsThreshold(!isThresholdCheckbox));
    setIsThresholdCheckbox((isThresholdCheckbox) => !isThresholdCheckbox);
    updateOptionsNotifier();
  };
  const updateIsThresholdVal = (): void => {
    dispatch(setIsThresholdVal(!isThresholdValCheckbox));
    setIsThresholdValCheckbox((isThresholdValCheckbox) => !isThresholdValCheckbox);
    updateOptionsNotifier();
  };
  const updateIsThresholdGreyscale = (): void => {
    dispatch(setIsThresholdGreyscale(!isThresholdGreyscaleCheckbox));
    setIsThresholdGreyscaleCheckbox(
      (isThresholdGreyscaleCheckbox) => !isThresholdGreyscaleCheckbox
    );
    updateOptionsNotifier();
  };
  const updateIsThresholdGrayscale = (): void => {
    dispatch(setIsThresholdGrayscale(!isThresholdGrayscaleCheckbox));
    setIsThresholdGrayscaleCheckbox(
      (isThresholdGrayscaleCheckbox) => !isThresholdGrayscaleCheckbox
    );
    updateOptionsNotifier();
  };

  useEffect(() => {
    setIsThresholdCheckbox(isThreshold || false);
    setIsThresholdValCheckbox(isThresholdVal || false);
    setIsThresholdGreyscaleCheckbox(isThresholdGreyscale || false);
    setIsThresholdGrayscaleCheckbox(isThresholdGrayscale || false);
  }, [isThreshold, isThresholdVal, isThresholdGreyscale, isThresholdGrayscale]);

  return (
    <div className="options__container">
      <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full h-[40px]">
        <input
          type="checkbox"
          checked={isThresholdCheckbox}
          className="w-4 h-4 text-blue-600 bg-gray-100
       border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-500"
          onChange={updateIsThreshold}
        />
        <label className="options__label">Treshold</label>
      </div>
      <OptionsDescriptor isChecked={isThresholdCheckbox}>
        Thresholding is a simple yet powerful technique in image processing for segmenting images
        based on pixel intensity values, enabling various segmentation and analysis tasks in both
        grayscale and color images
      </OptionsDescriptor>
      {isThresholdCheckbox && (
        <div className="pl-10">
          <CheckboxOptions
            checkboxValue={isThresholdValCheckbox}
            checkboxLabel="Threshold Value"
            inputValue={thresholdVal}
            setInputValue={setThresholdVal}
            setCheckboxValue={updateIsThresholdVal}
            type="number"
            step={1}
            min={THRESHOLD_MIN_VAL}
            max={THRESHOLD_MAX_VAL}
          />
          <div className="options__container gap-4 sm:gap-0 sm:flex-row">
            <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-[48%] h-[40px]">
              <input
                type="checkbox"
                checked={isThresholdGreyscaleCheckbox}
                className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={updateIsThresholdGreyscale}
              />
              <label className="options__label">Greyscale</label>
            </div>
            <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-[48%] h-[40px]">
              <input
                type="checkbox"
                checked={isThresholdGrayscaleCheckbox}
                className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={updateIsThresholdGrayscale}
              />
              <label className="options__label">Grayscale</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ThresholdOption;
