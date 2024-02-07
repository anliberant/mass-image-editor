import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setIsNormalize,
  setIsNormalizeLower,
  setIsNormalizeUpper,
  setIsOptionsReseted,
  setIsOptionsUpdated,
  setNormalizeLower,
  setNormalizeUpper,
} from '../store/optionsSlice';

const NormalizeOption = (): JSX.Element => {
  const { isNormalize, isNormalizeLower, isNormalizeUpper, normalizeLower, normalizeUpper } =
    useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isNormalizeCheckbox, setIsNormalizeCheckbox] = useState(isNormalize || false);
  const [isNormalizeLowerCheckbox, setIsNormalizeLowerCheckbox] = useState(
    isNormalizeLower || false
  );
  const [isNormalizeUpperCheckbox, setIsNormalizeUpperCheckbox] = useState(
    isNormalizeUpper || false
  );

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };
  const updateIsNormalize = (): void => {
    dispatch(setIsNormalize(!isNormalizeCheckbox));
    setIsNormalizeCheckbox((isNormalizeCheckbox) => !isNormalizeCheckbox);
    updateOptionsNotifier();
  };
  const updateIsNormalizeLower = (): void => {
    dispatch(setIsNormalizeLower(!isNormalizeLowerCheckbox));
    setIsNormalizeLowerCheckbox((isNormalizeLowerCheckbox) => !isNormalizeLowerCheckbox);
    updateOptionsNotifier();
  };
  const updateIsNormalizeUpper = (): void => {
    dispatch(setIsNormalizeUpper(!isNormalizeUpperCheckbox));
    setIsNormalizeUpperCheckbox((isNormalizeUpperCheckbox) => !isNormalizeUpperCheckbox);
    updateOptionsNotifier();
  };

  useEffect(() => {
    setIsNormalizeCheckbox(isNormalize || false);
    setIsNormalizeLowerCheckbox(isNormalizeLower || false);
    setIsNormalizeUpperCheckbox(isNormalizeUpper || false);
  }, [isNormalize, isNormalizeLower, isNormalizeUpper]);

  return (
    <>
      <div className="options__container md:flex-row gap-5">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isNormalizeCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsNormalize}
          />
          <label className="options__label">Normalize</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isNormalizeCheckbox}>
        Adjust the pixel values of an image to a standard range or distribution. Normalization aims
        to enhance the visual quality of an image, improve its contrast, and ensure consistency
        across different images or datasets.
      </OptionsDescriptor>
      {isNormalizeCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isNormalizeLowerCheckbox}
            checkboxLabel="Normalize Lower"
            inputValue={normalizeLower}
            setInputValue={setNormalizeLower}
            setCheckboxValue={updateIsNormalizeLower}
            type="number"
            min={0}
            max={99}
            step={1}
          />
        </div>
      )}
      {isNormalizeCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isNormalizeUpperCheckbox}
            checkboxLabel="Normalize upper"
            inputValue={normalizeUpper}
            setInputValue={setNormalizeUpper}
            setCheckboxValue={updateIsNormalizeUpper}
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
