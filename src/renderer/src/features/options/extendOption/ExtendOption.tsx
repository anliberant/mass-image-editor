import {
  setBottomExtend,
  setExtendColor,
  setIsExtendColor,
  setLeftExtend,
  setRightExtend,
  setTopExtend,
} from '@renderer/features/options/store/optionsSlice';
import { useState } from 'react';

import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';

function ExtendOption(): JSX.Element {
  const { leftExtend, rightExtend, topExtend, bottomExtend, isExtendColor, extendColor } =
    useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const [isExtend, setIsExtend] = useState(false);
  const [isLeftExtend, setIsLeftExtend] = useState(false);
  const [isRightExtend, setIsRightExtend] = useState(false);
  const [isTopExtend, setIsTopExtend] = useState(false);
  const [isBottomExtend, setIsBottomExtend] = useState(false);

  const updateIsExtendColor = (): void => {
    dispatch(setIsExtendColor(!isExtendColor));
  };

  return (
    <div className="mt-[25px] flex flex-col justify-between">
      <div
        className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
pl-6 pr-4 w-full h-[40px]"
      >
        <input
          type="checkbox"
          checked={isExtend}
          className="w-4 h-4 text-blue-600 bg-gray-100
       border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
       focus:ring-2 dark:bg-gray-500"
          onChange={(): void => setIsExtend((isExtend) => !isExtend)}
        />
        <label htmlFor="bordered-checkbox-1" className="w-full py-2 ms-2 pl-[12px] font-inter">
          Extend (Create a border around the image)
        </label>
      </div>
      {isExtend && (
        <div className="pl-10">
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
            checkboxValue={isExtendColor}
            checkboxLabel="Pick extend color"
            inputValue={extendColor}
            setInputValue={setExtendColor}
            setCheckboxValue={updateIsExtendColor}
            type="color"
          />
        </div>
      )}
      <OptionsDescriptor isChecked={isExtend}>
        Enlarge the image size by adding pixels to one or more sides. This operation is often used
        when you want to increase the dimensions of an image, either to accommodate additional
        content or to create a border around the existing content.
      </OptionsDescriptor>
    </div>
  );
}
export default ExtendOption;
