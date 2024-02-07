import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import {
  setHeightExtract,
  setIsExtract,
  setLeftExtract,
  setTopExtract,
  setWidthExtract,
} from '@renderer/features/options/store/optionsSlice';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';

const ExtractOption = (): JSX.Element => {
  const { isExtract, leftExtract, topExtract, widthExtract, heightExtract } =
    useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const [isExtractCheckbox, setIsExtractCheckbox] = useState(isExtract || false);
  const [isLeftExtractCheckbox, setIsLeftExtractCheckbox] = useState(leftExtract > 0 || false);
  const [isTopExtractCheckbox, setIsTopExtractCheckbox] = useState(topExtract > 0 || false);
  const [isWidthExtractCheckbox, setIsWidthExtractCheckbox] = useState(widthExtract > 0 || false);
  const [isHeightExtractCheckbox, setIsHeightExtractCheckbox] = useState(
    heightExtract > 0 || false
  );
  const updateIsExtract = (): void => {
    dispatch(setIsExtract(!isExtractCheckbox));
    setIsExtractCheckbox((isExtractCheckbox) => !isExtractCheckbox);
  };

  useEffect(() => {
    setIsExtractCheckbox(isExtract);
  }, [isExtract]);

  return (
    <div className="options__container">
      <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full h-[40px]">
        <input
          type="checkbox"
          checked={isExtractCheckbox}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-500"
          onChange={updateIsExtract}
        />
        <label className="options__label">Extract (Crop)</label>
      </div>
      <OptionsDescriptor isChecked={isExtractCheckbox}>
        Extract a specific region or object from an image. The selected region is extracted from the
        original image by applying pixel-wise operations. Pixels inside the selected region are
        copied to a new image, while pixels outside the selected region are typically set to
        transparent or filled with a background color.
      </OptionsDescriptor>
      {isExtractCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isLeftExtractCheckbox}
            checkboxLabel="Extract left"
            inputValue={leftExtract}
            setInputValue={setLeftExtract}
            setCheckboxValue={setIsLeftExtractCheckbox}
            type="number"
            step={1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isTopExtractCheckbox}
            checkboxLabel="Extract top"
            inputValue={topExtract}
            setInputValue={setTopExtract}
            setCheckboxValue={setIsTopExtractCheckbox}
            type="number"
            step={1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isWidthExtractCheckbox}
            checkboxLabel="Extract width"
            inputValue={widthExtract}
            setInputValue={setWidthExtract}
            setCheckboxValue={setIsWidthExtractCheckbox}
            type="number"
            step={1}
            min={0}
          />

          <CheckboxOptions
            checkboxValue={isHeightExtractCheckbox}
            checkboxLabel="Extract height"
            inputValue={heightExtract}
            setInputValue={setHeightExtract}
            setCheckboxValue={setIsHeightExtractCheckbox}
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
