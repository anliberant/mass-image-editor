import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';
import {
  setIsMedian,
  setIsMedianSize,
  setIsOptionsReseted,
  setIsOptionsUpdated,
  setMedianSize,
} from '../../options/store/optionsSlice';

const MedianOption = (): JSX.Element => {
  const { isMedian, isMedianSize, medianSize } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isMedianCheckbox, setIsMedianCheckbox] = useState(isMedian || false);
  const [isMedianSizeCheckbox, setIsMedianSizeCheckbox] = useState(isMedianSize || false);

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };

  const updateMedianCheckbox = (): void => {
    dispatch(setIsMedian(!isMedianCheckbox));
    setIsMedianCheckbox((isMedianCheckbox) => !isMedianCheckbox);
    updateOptionsNotifier();
  };

  const updateMedianSizeCheckbox = (): void => {
    dispatch(setIsMedianSize(!isMedianSizeCheckbox));
    setIsMedianCheckbox((isMedianSizeCheckbox) => !isMedianSizeCheckbox);
    updateOptionsNotifier();
  };

  useEffect(() => {
    setIsMedianCheckbox(isMedian);
    setIsMedianSizeCheckbox(isMedianSize);
  }, [isMedian, isMedianSize]);
  return (
    <>
      <div className="options__container md:flex-row gap-5">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isMedianCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateMedianCheckbox}
          />
          <label className="options__label">Median</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isMedianCheckbox}>
        Remove the noise from an image while preserving edge details. It works by replacing each
        pixel value with the median value of its neighboring pixels within a specified window or
        kernel size.
      </OptionsDescriptor>
      {isMedianCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isMedianSizeCheckbox}
            checkboxLabel="Set Median Size"
            inputValue={medianSize}
            setInputValue={setMedianSize}
            setCheckboxValue={updateMedianSizeCheckbox}
            type="number"
            min={1}
            max={1000}
            step={1}
          />
        </div>
      )}
    </>
  );
};
export default MedianOption;
