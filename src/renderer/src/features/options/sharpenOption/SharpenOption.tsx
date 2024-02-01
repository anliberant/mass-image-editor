import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import {
  SHARPEN_MAX_VALUE,
  SHARPEN_MIN_VALUE,
  SHARPEN_SIGMA_MAX_VALUE,
  SHARPEN_SIGMA_MIN_VALUE,
} from '@shared/constants/options.constants';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';
import {
  nullSharpen,
  setIsSharpen,
  setSharpenM1,
  setSharpenM2,
  setSharpenSigma,
  setSharpenX1,
  setSharpenY2,
  setSharpenY3,
} from '../../options/store/optionsSlice';

const SharpenOption = (): JSX.Element => {
  const { sharpenSigma, sharpenM1, sharpenM2, sharpenX1, sharpenY2, sharpenY3 } =
    useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isSharpenCheckbox, setIsSharpenCheckbox] = useState(false);
  const [isSigmaCheckbox, setIsSigmaCheckbox] = useState(false);
  const [isM1Checkbox, setIsM1Checkbox] = useState(false);
  const [isM2Checkbox, setIsM2Checkbox] = useState(false);
  const [isX1Checkbox, setIsX1Checkbox] = useState(false);
  const [isY2Checkbox, setIsY2Checkbox] = useState(false);
  const [isY3Checkbox, setIsY3Checkbox] = useState(false);
  const [isSetDefaultSettings, setIsSetDefaultSettings] = useState(false);

  const updateDefaultSettings = (bool: boolean): void => {
    setIsSetDefaultSettings((isSetDefaultSettings) => !isSetDefaultSettings);
    if (bool) {
      dispatch(nullSharpen());
      dispatch(setIsSharpen(true));
    }
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
            checked={isSharpenCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
            onChange={(): void => setIsSharpenCheckbox((isSharpenCheckbox) => !isSharpenCheckbox)}
          />
          <label htmlFor="bordered-checkbox" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Sharpen
          </label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isSharpenCheckbox}>
        Enhance the clarity and detail of an image by increasing the contrast along edges. It works
        by accentuating the differences in pixel intensity values between neighboring pixels,
        thereby making edges appear more defined and distinct.
      </OptionsDescriptor>
      {isSharpenCheckbox && (
        <div className="md:pl-10 w-full">
          <div className="mt-[25px] flex justify-between">
            <div
              className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
  pl-6 pr-4 w-[98%] h-[40px]"
            >
              <input
                type="checkbox"
                checked={isSetDefaultSettings}
                className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
                focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600"
                onChange={(e: InputEvent): void => updateDefaultSettings(e.target.value)}
              />
              <label
                htmlFor="bordered-checkbox-1"
                className="w-full py-2 ms-2 pl-[12px] font-inter"
              >
                Set Default Options (fast, mild sharpen)
              </label>
            </div>
          </div>
        </div>
      )}
      {isSharpenCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isSigmaCheckbox}
            checkboxLabel="Set SIGMA (sigma = 1 + radius / 2)"
            inputValue={sharpenSigma}
            setInputValue={setSharpenSigma}
            setCheckboxValue={setIsSigmaCheckbox}
            type="number"
            min={SHARPEN_SIGMA_MIN_VALUE}
            max={SHARPEN_SIGMA_MAX_VALUE}
          />
        </div>
      )}
      {isSharpenCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isM1Checkbox}
            checkboxLabel="Set M1 (flat areas)"
            inputValue={sharpenM1}
            setInputValue={setSharpenM1}
            setCheckboxValue={setIsM1Checkbox}
            type="number"
            min={SHARPEN_MIN_VALUE}
            max={SHARPEN_MAX_VALUE}
            step={1}
          />
        </div>
      )}
      {isSharpenCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isM2Checkbox}
            checkboxLabel="Set M2 (jagged areas)"
            inputValue={sharpenM2}
            setInputValue={setSharpenM2}
            setCheckboxValue={setIsM2Checkbox}
            type="number"
            min={SHARPEN_MIN_VALUE}
            max={SHARPEN_MAX_VALUE}
            step={1}
          />
        </div>
      )}
      {isSharpenCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isX1Checkbox}
            checkboxLabel="Set X1 (threshold between flat and jagged)"
            inputValue={sharpenX1}
            setInputValue={setSharpenX1}
            setCheckboxValue={setIsX1Checkbox}
            type="number"
            min={SHARPEN_MIN_VALUE}
            max={SHARPEN_MAX_VALUE}
            step={1}
          />
        </div>
      )}
      {isSharpenCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isY2Checkbox}
            checkboxLabel="Set Y2 (brightening)"
            inputValue={sharpenY2}
            setInputValue={setSharpenY2}
            setCheckboxValue={setIsY2Checkbox}
            type="number"
            min={SHARPEN_MIN_VALUE}
            max={SHARPEN_MAX_VALUE}
            step={1}
          />
        </div>
      )}
      {isSharpenCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isY3Checkbox}
            checkboxLabel="Set Y3 (darkening)"
            inputValue={sharpenY3}
            setInputValue={setSharpenY3}
            setCheckboxValue={setIsY3Checkbox}
            type="number"
            min={SHARPEN_MIN_VALUE}
            max={SHARPEN_MAX_VALUE}
            step={1}
          />
        </div>
      )}
    </>
  );
};
export default SharpenOption;
