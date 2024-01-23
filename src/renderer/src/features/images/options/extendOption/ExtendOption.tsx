import {
  ImagesState,
  setBottomExtend,
  setExtendColor,
  setIsBottomExtend,
  setIsExtendColor,
  setIsLeftExtend,
  setIsRightExtend,
  setIsTopExtend,
  setLeftExtend,
  setRightExtend,
  setTopExtend,
} from '@renderer/features/images/imagesSlice';
import { useState } from 'react';

import { useAppSelector } from '@renderer/hooks';
import CheckboxOptions from '../checkboxOption/CheckboxOptions';

function ExtendOption(): JSX.Element {
  const {
    isLeftExtend,
    leftExtend,
    isRightExtend,
    rightExtend,
    isTopExtend,
    topExtend,
    isBottomExtend,
    bottomExtend,
    isExtendColor,
    extendColor,
  } = useAppSelector<ImagesState>((state) => state.images);

  const [isExtend, setIsExtend] = useState(false);

  console.log('setIsLeftExtend', isLeftExtend);
  console.log('leftExtend', leftExtend);
  console.log('setIsRightExtend', isRightExtend);
  console.log('rightExtend', rightExtend);
  console.log('setIsTopExtend', isTopExtend);
  console.log('topExtend', topExtend);

  return (
    <div className="mt-[25px] flex flex-col justify-between">
      <div
        className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
pl-6 pr-4 w-full h-[40px]"
      >
        <input
          type="checkbox"
          checked={isExtend || false}
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
          />
          <CheckboxOptions
            checkboxValue={isRightExtend}
            checkboxLabel="Extend right"
            inputValue={rightExtend}
            setInputValue={setRightExtend}
            setCheckboxValue={setIsRightExtend}
            type="number"
          />
          <CheckboxOptions
            checkboxValue={isTopExtend}
            checkboxLabel="Extend top"
            inputValue={topExtend}
            setInputValue={setTopExtend}
            setCheckboxValue={setIsTopExtend}
            type="number"
          />
          <CheckboxOptions
            checkboxValue={isBottomExtend}
            checkboxLabel="Extend bottom"
            inputValue={bottomExtend}
            setInputValue={setBottomExtend}
            setCheckboxValue={setIsBottomExtend}
            type="number"
          />
          <CheckboxOptions
            checkboxValue={isExtendColor}
            checkboxLabel="Pick extend color"
            inputValue={extendColor}
            setInputValue={setExtendColor}
            setCheckboxValue={setIsExtendColor}
            type="color"
          />
          {/* <ColorPicker /> */}
        </div>
      )}
    </div>
  );
}
export default ExtendOption;
