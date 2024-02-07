import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { BLUR_SIGMA_MAX_VALUE, BLUR_SIGMA_MIN_VALUE } from '@shared/constants/options.constants';
import { IOptions } from '@shared/types/options.type';
import { ChangeEvent, useEffect, useState } from 'react';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';
import {
  setBlurSigma,
  setIsBlur,
  setIsBlurDefaultSettings,
  setIsBlurSigma,
  setIsOptionsReseted,
  setIsOptionsUpdated,
} from '../../options/store/optionsSlice';

const BlurOption = (): JSX.Element => {
  const { isBlur, isBlurDefaultSettings, isBlurSigma, blurSigma } = useAppSelector<IOptions>(
    (state) => state.options
  );
  const dispatch = useAppDispatch();
  const [isBlurCheckbox, setIsBlurCheckbox] = useState(isBlur || false);
  const [isSetDefaultSettings, setIsSetDefaultSettings] = useState(isBlurDefaultSettings || false);
  const [isBlurSigmaChecked, setIsBlurSigmaChecked] = useState(isBlurSigma || false);

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };
  const updateDefaultSettings = (): void => {
    dispatch(setIsBlurDefaultSettings(!isSetDefaultSettings));
    setIsSetDefaultSettings((isSetDefaultSettings) => !isSetDefaultSettings);
    setIsBlurSigmaChecked(false);
    updateOptionsNotifier();
  };
  const updateIsBlur = (): void => {
    dispatch(setIsBlur(!isBlurCheckbox));
    setIsBlurCheckbox((isBlurCheckbox) => !isBlurCheckbox);
    updateOptionsNotifier();
  };
  const updateIsBlurSigma = (): void => {
    dispatch(setIsBlurSigma(!isBlurSigmaChecked));
    setIsBlurSigmaChecked((isBlurSigmaChecked) => !isBlurSigmaChecked);
    updateOptionsNotifier();
  };

  useEffect(() => {
    setIsBlurCheckbox(isBlur || false);
    setIsSetDefaultSettings(isBlurDefaultSettings || false);
    setIsBlurSigmaChecked(isBlurSigma || false);
  }, [isBlur, isBlurDefaultSettings, isBlurSigma]);

  return (
    <>
      <div className="options__container md:flex-row">
        <div
          className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
  pl-6 pr-4 w-full md:w-[48%] h-[40px]"
        >
          <input
            type="checkbox"
            checked={isBlurCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsBlur}
          />
          <label className="options__label">Blur</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isBlurCheckbox}>
        Reduce the level of detail or sharpness in an image. It smooths out abrupt changes in color
        or intensity, resulting in a softer appearance. Blurring is commonly applied to images for
        various purposes, such as enhancing aesthetics, reducing noise, or preparing images for
        certain visual effects.
      </OptionsDescriptor>
      {isBlurCheckbox && (
        <div className="options__sub-container">
          <div className="options__container">
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
                onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                  updateDefaultSettings(e.target.checked)
                }
              />
              <label className="options__label">
                Set Default Options (a fast 3x3 box blur (equivalent to a box linear filter))
              </label>
            </div>
          </div>
        </div>
      )}
      {isBlurCheckbox && (
        <div className="options__sub-container">
          <CheckboxOptions
            checkboxValue={isBlurSigmaChecked}
            checkboxLabel="Set SIGMA for slower Gaussian blur"
            inputValue={blurSigma}
            setInputValue={setBlurSigma}
            setCheckboxValue={updateIsBlurSigma}
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
