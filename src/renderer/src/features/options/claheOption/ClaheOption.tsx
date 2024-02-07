import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { CLAHE_MAX_SLOPE, CLAHE_MIN_SLOPE } from '@shared/constants/options.constants';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setClaheHeight,
  setClaheMaxSlope,
  setClaheWidth,
  setIsClahe,
  setIsClaheHeight,
  setIsClaheMaxSlope,
  setIsClaheWidth,
  setIsOptionsReseted,
  setIsOptionsUpdated,
} from '../store/optionsSlice';

const ClaheOption = (): JSX.Element => {
  const {
    isClahe,
    isClaheWidth,
    isClaheHeight,
    isClaheMaxSlope,
    claheWidth,
    claheHeight,
    claheMaxSlope,
  } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isClaheCheckbox, setIsClaheCheckbox] = useState(isClahe || false);
  const [claheWidthCheckbox, setClaheWidthCheckbox] = useState(isClaheWidth || false);
  const [claheHeightCheckbox, setClaheHeightCheckbox] = useState(isClaheHeight || false);
  const [claheMaxSlopeCheckbox, setClaheMaxSlopeCheckbox] = useState(isClaheMaxSlope || false);

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };
  const updateIsClahe = (): void => {
    dispatch(setIsClahe(!isClaheCheckbox));
    setIsClaheCheckbox((isClaheCheckbox) => !isClaheCheckbox);
    updateOptionsNotifier();
  };
  const updateIsClaheWidth = (): void => {
    dispatch(setIsClaheWidth(!claheWidthCheckbox));
    setClaheWidthCheckbox((claheWidthCheckbox) => !claheWidthCheckbox);
    updateOptionsNotifier();
  };
  const updateIsClaheHeight = (): void => {
    dispatch(setIsClaheHeight(!claheHeightCheckbox));
    setClaheHeightCheckbox((claheHeightCheckbox) => !claheHeightCheckbox);
    updateOptionsNotifier();
  };
  const updateIsClaheMaxSlope = (): void => {
    dispatch(setIsClaheMaxSlope(!claheMaxSlopeCheckbox));
    setClaheMaxSlopeCheckbox((claheMaxSlopeCheckbox) => !claheMaxSlopeCheckbox);
    updateOptionsNotifier();
  };

  useEffect(() => {
    setIsClaheCheckbox(isClahe || false);
    setClaheWidthCheckbox(isClaheWidth || false);
    setClaheHeightCheckbox(isClaheHeight || false);
    setClaheMaxSlopeCheckbox(isClaheMaxSlope || false);
  }, [isClahe, isClaheWidth, isClaheHeight, isClaheMaxSlope]);
  return (
    <div className="options__container">
      <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full h-[40px]">
        <input
          type="checkbox"
          checked={isClaheCheckbox}
          className="w-4 h-4 text-blue-600 bg-gray-100
       border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-500"
          onChange={updateIsClahe}
        />
        <label className="options__label">Clahe</label>
      </div>
      <OptionsDescriptor isChecked={isClaheCheckbox}>
        CLAHE stands for Contrast Limited Adaptive Histogram Equalization. It is an advanced image
        enhancement technique used to improve the contrast and overall visual quality of digital
        images. CLAHE is particularly effective in enhancing images with non-uniform illumination or
        uneven contrast distribution.
      </OptionsDescriptor>
      {isClaheCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={claheWidthCheckbox}
            checkboxLabel="Width"
            inputValue={claheWidth}
            setInputValue={setClaheWidth}
            setCheckboxValue={updateIsClaheWidth}
            type="number"
            step={1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={claheHeightCheckbox}
            checkboxLabel="Height"
            inputValue={claheHeight}
            setInputValue={setClaheHeight}
            setCheckboxValue={updateIsClaheHeight}
            type="number"
            step={1}
            min={0}
          />

          <CheckboxOptions
            checkboxValue={claheMaxSlopeCheckbox}
            checkboxLabel="MAX Slope"
            inputValue={claheMaxSlope}
            setInputValue={setClaheMaxSlope}
            setCheckboxValue={updateIsClaheMaxSlope}
            type="number"
            step={1}
            min={CLAHE_MIN_SLOPE}
            max={CLAHE_MAX_SLOPE}
          />
        </div>
      )}
    </div>
  );
};
export default ClaheOption;
