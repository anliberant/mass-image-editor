import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setIsOptionsReseted,
  setIsOptionsUpdated,
  setIsTint,
  setIsTintColor,
  setTintColor,
} from '../store/optionsSlice';

const TintOption = (): JSX.Element => {
  const { isTint, isTintColor, tintColor } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const [isTintCheckbox, setIsTintCheckbox] = useState(isTint || false);
  const [isTintColorCheckbox, setIsTintColorCheckbox] = useState(isTintColor || false);

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };
  const updateIsTint = (): void => {
    dispatch(setIsTint(!isTintCheckbox));
    setIsTintCheckbox((isTintCheckbox) => !isTintCheckbox);
    updateOptionsNotifier();
  };
  const updateIsTintColor = (): void => {
    dispatch(setIsTintColor(!isTintColorCheckbox));
    setIsTintColorCheckbox((isTintColorCheckbox) => !isTintColorCheckbox);
    updateOptionsNotifier();
  };

  useEffect(() => {
    setIsTintCheckbox(isTint || false);
    setIsTintColorCheckbox(isTintColor || false);
  }, [isTint, isTintColor]);

  return (
    <>
      <div className="options__container md:flex-row gap-5">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isTintCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsTint}
          />
          <label className="options__label">Tint</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isTintCheckbox}>
        <>
          Adjust the color balance of images, offering creative control over the appearance and mood
          of images while preserving their luminance characteristics. Tinting can be used to create
          stylistic effects, adjust the mood or atmosphere of an image, or correct color balance
          issues.
        </>
      </OptionsDescriptor>
      {isTintCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isTintColorCheckbox}
            checkboxLabel="Set tint BACKGROUND"
            inputValue={tintColor}
            setInputValue={setTintColor}
            setCheckboxValue={updateIsTintColor}
            type="color"
          />
        </div>
      )}
    </>
  );
};
export default TintOption;
