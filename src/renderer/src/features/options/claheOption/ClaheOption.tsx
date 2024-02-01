import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { CLAHE_MAX_SLOPE, CLAHE_MIN_SLOPE } from '@shared/constants/options.constants';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import { setClaheHeight, setClaheMaxSlope, setClaheWidth, setIsClahe } from '../store/optionsSlice';

const ClaheOption = (): JSX.Element => {
  const { isClahe, claheWidth, claheHeight, claheMaxSlope } = useAppSelector<IOptions>(
    (state) => state.options
  );
  const dispatch = useAppDispatch();
  const [claheWidthCheckbox, setClaheWidthCheckbox] = useState(false);
  const [claheHeightCheckbox, setClaheHeightCheckbox] = useState(false);
  const [claheMaxSlopeCheckbox, setClaheMaxSlopeCheckbox] = useState(false);
  return (
    <div className="mt-[25px] flex flex-col justify-between">
      <div
        className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
pl-6 pr-4 w-full h-[40px]"
      >
        <input
          type="checkbox"
          checked={isClahe}
          className="w-4 h-4 text-blue-600 bg-gray-100
       border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
       focus:ring-2 dark:bg-gray-500"
          onChange={(): void => dispatch(setIsClahe(!isClahe))}
        />
        <label htmlFor="bordered-checkbox-1" className="w-full py-2 ms-2 pl-[12px] font-inter">
          Clahe
        </label>
      </div>
      <OptionsDescriptor isChecked={isClahe}>
        CLAHE stands for Contrast Limited Adaptive Histogram Equalization. It is an advanced image
        enhancement technique used to improve the contrast and overall visual quality of digital
        images. CLAHE is particularly effective in enhancing images with non-uniform illumination or
        uneven contrast distribution.
      </OptionsDescriptor>
      {isClahe && (
        <div className="pl-10">
          <CheckboxOptions
            checkboxValue={claheWidthCheckbox}
            checkboxLabel="Width"
            inputValue={claheWidth}
            setInputValue={setClaheWidth}
            setCheckboxValue={setClaheWidthCheckbox}
            type="number"
            step={1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={claheHeightCheckbox}
            checkboxLabel="Height"
            inputValue={claheHeight}
            setInputValue={setClaheHeight}
            setCheckboxValue={setClaheHeightCheckbox}
            type="number"
            step={1}
            min={0}
          />

          <CheckboxOptions
            checkboxValue={claheMaxSlopeCheckbox}
            checkboxLabel="MAX Slope"
            inputValue={claheMaxSlope}
            setInputValue={setClaheMaxSlope}
            setCheckboxValue={setClaheMaxSlopeCheckbox}
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
