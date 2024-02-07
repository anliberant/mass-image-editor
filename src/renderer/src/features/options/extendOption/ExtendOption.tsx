import {
  setBottomExtend,
  setExtendColor,
  setIsExtend,
  setIsExtendColor,
  setIsOptionsReseted,
  setIsOptionsUpdated,
  setLeftExtend,
  setRightExtend,
  setTopExtend,
} from '@renderer/features/options/store/optionsSlice';
import { useState } from 'react';

import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect } from 'react';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';

function ExtendOption(): JSX.Element {
  const { isExtend, leftExtend, rightExtend, topExtend, bottomExtend, isExtendColor, extendColor } =
    useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const [isExtendCheckbox, setIsExtendCheckbox] = useState(isExtend || false);
  const [isLeftExtend, setIsLeftExtend] = useState(leftExtend > 0 || false);
  const [isRightExtend, setIsRightExtend] = useState(rightExtend > 0 || false);
  const [isTopExtend, setIsTopExtend] = useState(topExtend > 0 || false);
  const [isBottomExtend, setIsBottomExtend] = useState(bottomExtend > 0 || false);
  const [isExtendColorCheckbox, setIsExtendColorCheckbox] = useState(isExtendColor || false);

  const updateIsExtend = (): void => {
    dispatch(setIsExtend(!isExtendCheckbox));
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
    setIsExtendCheckbox((isExtendCheckbox) => !isExtendCheckbox);
  };

  const updateIsExtendColor = (): void => {
    setIsExtendColorCheckbox(!isExtendColorCheckbox);
    dispatch(setIsExtendColor(!isExtendColor));
  };
  useEffect(() => {
    setIsExtendCheckbox(isExtend);
  }, [isExtend]);

  return (
    <div className="options__container">
      <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full h-[40px]">
        <input
          type="checkbox"
          checked={isExtendCheckbox}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-500"
          onChange={updateIsExtend}
        />
        <label className="options__label">Extend (Create a border around the image)</label>
      </div>
      {isExtendCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isLeftExtend}
            checkboxLabel="Extend left"
            inputValue={leftExtend}
            setInputValue={setLeftExtend}
            setCheckboxValue={setIsLeftExtend}
            type="number"
            step={1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isRightExtend}
            checkboxLabel="Extend right"
            inputValue={rightExtend}
            setInputValue={setRightExtend}
            setCheckboxValue={setIsRightExtend}
            type="number"
            step={1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isTopExtend}
            checkboxLabel="Extend top"
            inputValue={topExtend}
            setInputValue={setTopExtend}
            setCheckboxValue={setIsTopExtend}
            type="number"
            step={1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isBottomExtend}
            checkboxLabel="Extend bottom"
            inputValue={bottomExtend}
            setInputValue={setBottomExtend}
            setCheckboxValue={setIsBottomExtend}
            type="number"
            step={1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isExtendColorCheckbox}
            checkboxLabel="Pick extend color"
            inputValue={extendColor}
            setInputValue={setExtendColor}
            setCheckboxValue={updateIsExtendColor}
            type="color"
          />
        </div>
      )}
      <OptionsDescriptor isChecked={isExtendCheckbox}>
        Enlarge the image size by adding pixels to one or more sides. This operation is often used
        when you want to increase the dimensions of an image, either to accommodate additional
        content or to create a border around the existing content.
      </OptionsDescriptor>
    </div>
  );
}
export default ExtendOption;
