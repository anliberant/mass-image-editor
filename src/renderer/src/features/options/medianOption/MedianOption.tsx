import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';
import { setIsMedian, setMedianSize } from '../../options/store/optionsSlice';

const MedianOption = (): JSX.Element => {
  const { medianSize } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isMedianCheckbox, setIsMedianCheckbox] = useState(false);
  const [isMedianSizeCheckbox, setIsMedianSizeCheckbox] = useState(false);
  const updateMedianCheckbox = (): void => {
    dispatch(setIsMedian(!isMedianCheckbox));
    setIsMedianCheckbox((isMedianCheckbox) => !isMedianCheckbox);
  };
  return (
    <>
      <div className="mt-[25px] flex  flex-col md:flex-row gap-5 justify-between">
        <div
          className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
  pl-6 pr-4 w-full md:w-[48%] h-[40px]"
        >
          <input
            type="checkbox"
            name="bordered-checkbox"
            checked={isMedianCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
            onChange={updateMedianCheckbox}
          />
          <label htmlFor="bordered-checkbox" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Median
          </label>
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
            setCheckboxValue={setIsMedianSizeCheckbox}
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
