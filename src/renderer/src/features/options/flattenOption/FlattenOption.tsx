import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setFlattenBg,
  setIsFlatten,
  setIsFlattenBg,
  setIsOptionsReseted,
  setIsOptionsUpdated,
} from '../../options/store/optionsSlice';

const FlattenOption = (): JSX.Element => {
  const { isFlatten, isFlattenBg, flattenBg } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isFlattenCheckbox, setIsFlattenCheckbox] = useState(isFlatten || false);
  const [isFlattenBgCheckbox, setIsFlattenBgCheckbox] = useState(false);

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };
  const updateIsFlatten = (): void => {
    dispatch(setIsFlatten(!isFlattenCheckbox));
    setIsFlattenCheckbox((isFlattenCheckbox) => !isFlattenCheckbox);
    updateOptionsNotifier();
  };
  const updateIsFlattenBg = (): void => {
    dispatch(setIsFlattenBg(!isFlattenBgCheckbox));
    setIsFlattenBgCheckbox((isFlattenBgCheckbox) => !isFlattenBgCheckbox);
    updateOptionsNotifier();
  };

  useEffect(() => {
    setIsFlattenCheckbox(isFlatten || false);
    setIsFlattenBgCheckbox(isFlattenBg || false);
  }, [isFlatten, isFlattenBg]);
  return (
    <>
      <div className="options__container md:flex-row gap-5">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isFlattenCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsFlatten}
          />
          <label className="w-full py-2 ms-2 pl-[12px] font-inter">Flatten</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isFlattenCheckbox}>
        <>
          Combine a multiple layers of an image into a single layer. <br />
          When you &quot;flatten&quot; an image, you merge all the visible layers into a single
          layer. This means that all the elements from each layer are combined into a single image,
          with transparency preserved where applicable.
        </>
      </OptionsDescriptor>
      {isFlattenCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isFlattenBgCheckbox}
            checkboxLabel="Set flatten BACKGROUND"
            inputValue={flattenBg}
            setInputValue={setFlattenBg}
            setCheckboxValue={updateIsFlattenBg}
            type="color"
          />
        </div>
      )}
    </>
  );
};
export default FlattenOption;
