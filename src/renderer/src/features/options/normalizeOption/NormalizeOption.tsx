import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import { setIsNormalize, setNormalizeLower, setNormalizeUpper } from '../store/optionsSlice';

const NormalizeOption = (): JSX.Element => {
  const { isNormalize, normalizeLower, normalizeUpper } = useAppSelector<IOptions>(
    (state) => state.options
  );
  const dispatch = useAppDispatch();
  const [normalizeLowerCheckbox, setNormalizeLowerCheckbox] = useState(false);
  const [normalizeUpperCheckbox, setNormalizeUpperCheckbox] = useState(false);

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
            checked={isNormalize}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
            onChange={(): void => dispatch(setIsNormalize(!isNormalize))}
          />
          <label htmlFor="bordered-checkbox" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Normalize
          </label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isNormalize}>
        Adjust the pixel values of an image to a standard range or distribution. Normalization aims
        to enhance the visual quality of an image, improve its contrast, and ensure consistency
        across different images or datasets.
      </OptionsDescriptor>
      {isNormalize && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={normalizeLowerCheckbox}
            checkboxLabel="Normalize Lower"
            inputValue={normalizeLower}
            setInputValue={setNormalizeLower}
            setCheckboxValue={setNormalizeLowerCheckbox}
            type="number"
            min={0}
            max={99}
            step={1}
          />
        </div>
      )}
      {isNormalize && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={normalizeUpperCheckbox}
            checkboxLabel="Normalize upper"
            inputValue={normalizeUpper}
            setInputValue={setNormalizeUpper}
            setCheckboxValue={setNormalizeUpperCheckbox}
            type="number"
            min={0}
            max={99}
            step={1}
          />
        </div>
      )}
    </>
  );
};
export default NormalizeOption;
