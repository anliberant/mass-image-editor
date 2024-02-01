import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { BLUR_SIGMA_MAX_VALUE, BLUR_SIGMA_MIN_VALUE } from '@shared/constants/options.constants';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';
import { setBlurSigma, setIsBlur } from '../../options/store/optionsSlice';

const BlurOption = (): JSX.Element => {
  const { blurSigma } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isBlurCheckbox, setIsBlurCheckbox] = useState(false);
  const [isSetDefaultSettings, setIsSetDefaultSettings] = useState(false);
  const [isBlurSigmaChecked, setIsBlurSigmaChecked] = useState(false);

  const updateDefaultSettings = (): void => {
    dispatch(setIsBlur(!isSetDefaultSettings));
    setIsSetDefaultSettings((isSetDefaultSettings) => !isSetDefaultSettings);
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
            checked={isBlurCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
            onChange={(): void => setIsBlurCheckbox((isBlurCheckbox) => !isBlurCheckbox)}
          />
          <label htmlFor="bordered-checkbox" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Blur
          </label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isBlurCheckbox}>
        Reduce the level of detail or sharpness in an image. It smooths out abrupt changes in color
        or intensity, resulting in a softer appearance. Blurring is commonly applied to images for
        various purposes, such as enhancing aesthetics, reducing noise, or preparing images for
        certain visual effects.
      </OptionsDescriptor>
      {isBlurCheckbox && (
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
                onChange={updateDefaultSettings}
              />
              <label
                htmlFor="bordered-checkbox-1"
                className="w-full py-2 ms-2 pl-[12px] font-inter"
              >
                Set Default Options (a fast 3x3 box blur (equivalent to a box linear filter))
              </label>
            </div>
          </div>
        </div>
      )}
      {isBlurCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isBlurSigmaChecked}
            checkboxLabel="Set SIGMA for slower Gaussian blur"
            inputValue={blurSigma}
            setInputValue={setBlurSigma}
            setCheckboxValue={setIsBlurSigmaChecked}
            type="number"
            min={BLUR_SIGMA_MIN_VALUE}
            max={BLUR_SIGMA_MAX_VALUE}
            step={0.1}
          />
        </div>
      )}
    </>
  );
};
export default BlurOption;
