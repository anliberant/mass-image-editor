import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import {
  SHARPEN_MAX_VALUE,
  SHARPEN_MIN_VALUE,
  SHARPEN_SIGMA_MAX_VALUE,
  SHARPEN_SIGMA_MIN_VALUE,
} from '@shared/constants/options.constants';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';
import {
  setIsOptionsReseted,
  setIsOptionsUpdated,
  setIsSharpen,
  setIsSharpenDefaults,
  setIsSharpenM1,
  setIsSharpenM2,
  setIsSharpenSigma,
  setIsSharpenX1,
  setIsSharpenY2,
  setIsSharpenY3,
  setSharpenM1,
  setSharpenM2,
  setSharpenSigma,
  setSharpenX1,
  setSharpenY2,
  setSharpenY3,
} from '../../options/store/optionsSlice';

const SharpenOption = (): JSX.Element => {
  const {
    isSharpen,
    isSharpenDefaults,
    isSharpenSigma,
    sharpenSigma,
    isSharpenM1,
    sharpenM1,
    isSharpenM2,
    sharpenM2,
    isSharpenX1,
    sharpenX1,
    isSharpenY2,
    sharpenY2,
    isSharpenY3,
    sharpenY3,
  } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isSharpenCheckbox, setIsSharpenCheckbox] = useState(isSharpen || false);
  const [isSigmaCheckbox, setIsSigmaCheckbox] = useState(isSharpenSigma || false);
  const [isM1Checkbox, setIsM1Checkbox] = useState(isSharpenM1 || false);
  const [isM2Checkbox, setIsM2Checkbox] = useState(isSharpenM2 || false);
  const [isX1Checkbox, setIsX1Checkbox] = useState(isSharpenX1 || false);
  const [isY2Checkbox, setIsY2Checkbox] = useState(isSharpenY2 || false);
  const [isY3Checkbox, setIsY3Checkbox] = useState(isSharpenY3 || false);
  const [isSetDefaultSettings, setIsSetDefaultSettings] = useState(isSharpenDefaults || false);

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };
  const upadateIsSharpen = (): void => {
    dispatch(setIsSharpen(!isSharpenCheckbox));
    setIsSharpenCheckbox((isSharpenCheckbox) => !isSharpenCheckbox);
    updateOptionsNotifier();
  };
  const updateDefaultSettings = (): void => {
    setIsSetDefaultSettings(!isSetDefaultSettings);
    dispatch(setIsSharpenDefaults(!isSetDefaultSettings));
    updateOptionsNotifier();
  };
  const updateSharpenSigma = (): void => {
    dispatch(setIsSharpenSigma(!isSigmaCheckbox));
    setIsSigmaCheckbox((isSigmaCheckbox) => !isSigmaCheckbox);
    updateOptionsNotifier();
  };
  const updateM1Checkbox = (): void => {
    dispatch(setIsSharpenM1(!isM1Checkbox));
    setIsM1Checkbox((isM1Checkbox) => !isM1Checkbox);
    updateOptionsNotifier();
  };
  const updateM2Checkbox = (): void => {
    dispatch(setIsSharpenM2(!isM2Checkbox));
    setIsM2Checkbox((isM2Checkbox) => !isM2Checkbox);
    updateOptionsNotifier();
  };
  const updateX1Checkbox = (): void => {
    dispatch(setIsSharpenX1(!isX1Checkbox));
    setIsX1Checkbox((isX1Checkbox) => !isX1Checkbox);
    updateOptionsNotifier();
  };
  const updateY2Checkbox = (): void => {
    dispatch(setIsSharpenY2(!isY2Checkbox));
    setIsY2Checkbox((isY2Checkbox) => !isY2Checkbox);
    updateOptionsNotifier();
  };
  const updateY3Checkbox = (): void => {
    dispatch(setIsSharpenY3(!isY3Checkbox));
    setIsY3Checkbox((isY3Checkbox) => !isY3Checkbox);
    updateOptionsNotifier();
  };

  useEffect(() => {
    setIsSharpenCheckbox(isSharpen);
    setIsSigmaCheckbox(isSharpenSigma);
    setIsM1Checkbox(isSharpenM1);
    setIsM2Checkbox(isSharpenM2);
    setIsX1Checkbox(isSharpenX1);
    setIsY2Checkbox(isSharpenY2);
    setIsY3Checkbox(isSharpenY3);
  }, [isSharpen, isSharpenDefaults, isSharpenM2, isSharpenX1, isSharpenY2, isSharpenY3]);

  return (
    <>
      <div className="options__container md:flex-row gap-5">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isSharpenCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={upadateIsSharpen}
          />
          <label className="options__label">Sharpen</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isSharpenCheckbox}>
        Enhance the clarity and detail of an image by increasing the contrast along edges. It works
        by accentuating the differences in pixel intensity values between neighboring pixels,
        thereby making edges appear more defined and distinct.
      </OptionsDescriptor>
      {isSharpenCheckbox && (
        <div className="md:pl-10 w-full">
          <div className="options__container">
            <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-[98%] h-[40px]">
              <input
                type="checkbox"
                checked={isSetDefaultSettings}
                className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
                focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
                dark:bg-gray-700 dark:border-gray-600"
                onChange={updateDefaultSettings}
              />
              <label className="options__label">Set Default Options (fast, mild sharpen)</label>
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
            setCheckboxValue={updateSharpenSigma}
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
            setCheckboxValue={updateM1Checkbox}
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
            setCheckboxValue={updateM2Checkbox}
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
            setCheckboxValue={updateX1Checkbox}
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
            setCheckboxValue={updateY2Checkbox}
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
            setCheckboxValue={updateY3Checkbox}
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
