import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setIsModulate,
  setIsModulateBrightness,
  setIsModulateHue,
  setIsModulateLightness,
  setIsModulateSaturation,
  setIsOptionsReseted,
  setIsOptionsUpdated,
  setModulateBrightness,
  setModulateHue,
  setModulateLightness,
  setModulateSaturation,
} from '../store/optionsSlice';

const ModulateOption = (): JSX.Element => {
  const {
    isModulate,
    isModulateBrightness,
    modulateBrightness,
    isModulateSaturation,
    modulateSaturation,
    isModulateHue,
    modulateHue,
    isModulateLightness,
    modulateLightness,
  } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const [isModulateCheckbox, setIsModulateCheckbox] = useState(isModulate || false);
  const [isModulateBrightnessCheckbox, setIsModulateBrightnessCheckbox] = useState(
    isModulateBrightness || false
  );
  const [isModulateSaturationCheckbox, setIsModulateSaturationCheckbox] = useState(
    modulateSaturation || false
  );
  const [isModulateHueCheckbox, setIsModulateHueCheckbox] = useState(isModulateHue || false);
  const [isModulateLightnessCheckbox, setIsModulateLightnessCheckbox] = useState(
    isModulateLightness || false
  );

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };
  const updateIsModulate = (): void => {
    dispatch(setIsModulate(!isModulateCheckbox));
    setIsModulateCheckbox((isModulateCheckbox) => !isModulateCheckbox);
    updateOptionsNotifier();
  };
  const updateIsModulateBrightness = (): void => {
    dispatch(setIsModulateBrightness(!isModulateBrightnessCheckbox));
    setIsModulateBrightnessCheckbox(
      (isModulateBrightnessCheckbox) => !isModulateBrightnessCheckbox
    );
    updateOptionsNotifier();
  };
  const updateIsModulateSaturation = (): void => {
    dispatch(setIsModulateSaturation(!isModulateSaturationCheckbox));
    setIsModulateSaturationCheckbox(
      (isModulateSaturationCheckbox) => !isModulateSaturationCheckbox
    );
    updateOptionsNotifier();
  };
  const updateIsModulateHue = (): void => {
    dispatch(setIsModulateHue(!isModulateHueCheckbox));
    setIsModulateHueCheckbox((isModulateHueCheckbox) => !isModulateHueCheckbox);
    updateOptionsNotifier();
  };
  const updateIsModulateLightness = (): void => {
    dispatch(setIsModulateLightness(!isModulateLightnessCheckbox));
    setIsModulateLightnessCheckbox((isModulateLightnessCheckbox) => !isModulateLightnessCheckbox);
    updateOptionsNotifier();
  };

  useEffect(() => {
    setIsModulateCheckbox(isModulate || false);
    setIsModulateBrightnessCheckbox(isModulateBrightness || false);
    setIsModulateSaturationCheckbox(isModulateSaturation || false);
    setIsModulateHueCheckbox(isModulateHue || false);
    setIsModulateLightnessCheckbox(isModulateLightness || false);
  }, [isModulate, isModulateBrightness, isModulateSaturation, isModulateHue, isModulateLightness]);

  return (
    <div className="options__container">
      <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full h-[40px]">
        <input
          type="checkbox"
          checked={isModulateCheckbox}
          className="w-4 h-4 text-blue-600 bg-gray-100
       border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-500"
          onChange={updateIsModulate}
        />
        <label className="options__label">Modulate</label>
      </div>
      <OptionsDescriptor isChecked={isModulateCheckbox}>
        Modulate is a versatile operation in image processing for adjusting the brightness,
        saturation, and hue of images, allowing for creative control over the color appearance and
        overall visual quality of images.
      </OptionsDescriptor>
      {isModulateCheckbox && (
        <div className="pl-10">
          <CheckboxOptions
            checkboxValue={isModulateBrightnessCheckbox}
            checkboxLabel="Brightness"
            inputValue={modulateBrightness}
            setInputValue={setModulateBrightness}
            setCheckboxValue={updateIsModulateBrightness}
            type="number"
            step={0.1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isModulateSaturationCheckbox}
            checkboxLabel="Saturation"
            inputValue={modulateSaturation}
            setInputValue={setModulateSaturation}
            setCheckboxValue={updateIsModulateSaturation}
            type="number"
            step={0.1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isModulateHueCheckbox}
            checkboxLabel="Hue"
            inputValue={modulateHue}
            setInputValue={setModulateHue}
            setCheckboxValue={updateIsModulateHue}
            type="number"
            step={1}
            min={0}
          />

          <CheckboxOptions
            checkboxValue={isModulateLightnessCheckbox}
            checkboxLabel="Lightness"
            inputValue={modulateLightness}
            setInputValue={setModulateLightness}
            setCheckboxValue={updateIsModulateLightness}
            type="number"
            step={0.1}
            min={0}
          />
        </div>
      )}
    </div>
  );
};
export default ModulateOption;
