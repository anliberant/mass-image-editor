import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import { setIsTint, setTintColor } from '../store/optionsSlice';

const TintOption = (): JSX.Element => {
  const { isTint, tintColor } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [tintColorCheckbox, setTintColorCheckbox] = useState(false);
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
            checked={isTint}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
            onChange={(): void => dispatch(setIsTint(!isTint))}
          />
          <label htmlFor="bordered-checkbox" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Tint
          </label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isTint}>
        <>
          Adjust the color balance of images, offering creative control over the appearance and mood
          of images while preserving their luminance characteristics. Tinting can be used to create
          stylistic effects, adjust the mood or atmosphere of an image, or correct color balance
          issues.
        </>
      </OptionsDescriptor>
      {isTint && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={tintColorCheckbox}
            checkboxLabel="Set tint BACKGROUND"
            inputValue={tintColor}
            setInputValue={setTintColor}
            setCheckboxValue={setTintColorCheckbox}
            type="color"
          />
        </div>
      )}
    </>
  );
};
export default TintOption;
