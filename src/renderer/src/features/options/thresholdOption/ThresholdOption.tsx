import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { THRESHOLD_MAX_VAL, THRESHOLD_MIN_VAL } from '@shared/constants/options.constants';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import {
  setIsThreshold,
  setIsThresholdGrayscale,
  setIsThresholdGreyscale,
  setThresholdVal,
} from '../store/optionsSlice';

const ThresholdOption = (): JSX.Element => {
  const { isThreshold, thresholdVal, thresholdGreyscale, thresholdGrayscale } =
    useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [thresholdValCheckbox, setThresholdValCheckbox] = useState(false);
  return (
    <div className="mt-[25px] flex flex-col justify-between">
      <div
        className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
pl-6 pr-4 w-full h-[40px]"
      >
        <input
          type="checkbox"
          checked={isThreshold}
          className="w-4 h-4 text-blue-600 bg-gray-100
       border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
       focus:ring-2 dark:bg-gray-500"
          onChange={(): void => dispatch(setIsThreshold(!isThreshold))}
        />
        <label htmlFor="bordered-checkbox-1" className="w-full py-2 ms-2 pl-[12px] font-inter">
          Treshold
        </label>
      </div>
      <OptionsDescriptor isChecked={isThreshold}>
        Thresholding is a simple yet powerful technique in image processing for segmenting images
        based on pixel intensity values, enabling various segmentation and analysis tasks in both
        grayscale and color images
      </OptionsDescriptor>
      {isThreshold && (
        <div className="pl-10">
          <CheckboxOptions
            checkboxValue={thresholdValCheckbox}
            checkboxLabel="Threshold Value"
            inputValue={thresholdVal}
            setInputValue={setThresholdVal}
            setCheckboxValue={setThresholdValCheckbox}
            type="number"
            step={1}
            min={THRESHOLD_MIN_VAL}
            max={THRESHOLD_MAX_VAL}
          />
          <div className="mt-[25px] flex justify-between">
            <div
              className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
  pl-6 pr-4 w-[48%] h-[40px]"
            >
              <input
                type="checkbox"
                name="bordered-checkbox"
                checked={thresholdGreyscale}
                className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
                onChange={(): void => dispatch(setIsThresholdGreyscale(!thresholdGreyscale))}
              />
              <label
                htmlFor="bordered-checkbox-1"
                className="w-full py-2 ms-2 pl-[12px] font-inter"
              >
                Greyscale
              </label>
            </div>
            <div
              className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
  pl-6 pr-4 w-[48%] h-[40px]"
            >
              <input
                type="checkbox"
                name="bordered-checkbox"
                checked={thresholdGrayscale}
                className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
                onChange={(): void => dispatch(setIsThresholdGrayscale(!thresholdGrayscale))}
              />
              <label
                htmlFor="bordered-checkbox-1"
                className="w-full py-2 ms-2 pl-[12px] font-inter"
              >
                Grayscale
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ThresholdOption;
