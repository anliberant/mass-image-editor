import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import {
  setHeightExtract,
  setLeftExtract,
  setTopExtract,
  setWidthExtract,
} from '@renderer/features/options/store/optionsSlice';
import { useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';

const ExtractOption = (): JSX.Element => {
  const { leftExtract, topExtract, widthExtract, heightExtract } = useAppSelector<IOptions>(
    (state) => state.options
  );
  const [isExtract, setIsExtract] = useState(false);
  const [isLeftExtract, setIsLeftExtract] = useState(false);
  const [isTopExtract, setIsTopExtract] = useState(false);
  const [isWidthExtract, setIsWidthExtract] = useState(false);
  const [isHeightExtract, setIsHeightExtract] = useState(false);
  return (
    <div className="mt-[25px] flex flex-col justify-between">
      <div
        className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
pl-6 pr-4 w-full h-[40px]"
      >
        <input
          type="checkbox"
          checked={isExtract || false}
          className="w-4 h-4 text-blue-600 bg-gray-100
       border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
       focus:ring-2 dark:bg-gray-500"
          onChange={(): void => setIsExtract((isExtract) => !isExtract)}
        />
        <label htmlFor="bordered-checkbox-1" className="w-full py-2 ms-2 pl-[12px] font-inter">
          Extract (Crop)
        </label>
      </div>
      <OptionsDescriptor isChecked={isExtract}>
        Extract a specific region or object from an image. The selected region is extracted from the
        original image by applying pixel-wise operations. Pixels inside the selected region are
        copied to a new image, while pixels outside the selected region are typically set to
        transparent or filled with a background color.
      </OptionsDescriptor>
      {isExtract && (
        <div className="pl-10">
          <CheckboxOptions
            checkboxValue={isLeftExtract}
            checkboxLabel="Extract left"
            inputValue={leftExtract}
            setInputValue={setLeftExtract}
            setCheckboxValue={setIsLeftExtract}
            type="number"
            step={1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isTopExtract}
            checkboxLabel="Extract top"
            inputValue={topExtract}
            setInputValue={setTopExtract}
            setCheckboxValue={setIsTopExtract}
            type="number"
            step={1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isWidthExtract}
            checkboxLabel="Extract width"
            inputValue={widthExtract}
            setInputValue={setWidthExtract}
            setCheckboxValue={setIsWidthExtract}
            type="number"
            step={1}
            min={0}
          />

          <CheckboxOptions
            checkboxValue={isHeightExtract}
            checkboxLabel="Extract height"
            inputValue={heightExtract}
            setInputValue={setHeightExtract}
            setCheckboxValue={setIsHeightExtract}
            type="number"
            step={1}
            min={0}
          />
        </div>
      )}
    </div>
  );
};
export default ExtractOption;
