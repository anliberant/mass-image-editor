import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import { setFlattenBg, setIsFlatten } from '../../options/store/optionsSlice';

const FlattenOption = (): JSX.Element => {
  const { isFlatten, flattenBg } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isSetFlattenBg, setIsSetFlattenBg] = useState(false);
  const updateIsFlatten = (): void => {
    dispatch(setIsFlatten(!isFlatten));
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
            checked={isFlatten}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsFlatten}
          />
          <label htmlFor="bordered-checkbox" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Flatten
          </label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isFlatten}>
        <>
          Combine a multiple layers of an image into a single layer. <br />
          When you "flatten" an image, you merge all the visible layers into a single layer. This
          means that all the elements from each layer are combined into a single image, with
          transparency preserved where applicable.
        </>
      </OptionsDescriptor>
      {isFlatten && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isSetFlattenBg}
            checkboxLabel="Set flatten BACKGROUND"
            inputValue={flattenBg}
            setInputValue={setFlattenBg}
            setCheckboxValue={setIsSetFlattenBg}
            type="color"
          />
        </div>
      )}
    </>
  );
};
export default FlattenOption;
