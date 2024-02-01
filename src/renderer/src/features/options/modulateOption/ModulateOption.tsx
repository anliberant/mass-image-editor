import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import {
  setIsModulate,
  setModulateBrightness,
  setModulateHue,
  setModulateLightness,
  setModulateSaturation,
} from '../store/optionsSlice';

const ModulateOption = (): JSX.Element => {
  const { isModulate, modulateBrightness, modulateSaturation, modulateHue, modulateLightness } =
    useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isSetModulateBrightness, setIsSetModulateBrightness] = useState(false);
  const [isSetModulateSaturation, setIsSetModulateSaturation] = useState(false);
  const [isSetModulateHue, setIsSetModulateHue] = useState(false);
  const [isSetModulateLightness, setIsSetModulateLightness] = useState(false);
  return (
    <div className="mt-[25px] flex flex-col justify-between">
      <div
        className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
pl-6 pr-4 w-full h-[40px]"
      >
        <input
          type="checkbox"
          checked={isModulate}
          className="w-4 h-4 text-blue-600 bg-gray-100
       border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
       focus:ring-2 dark:bg-gray-500"
          onChange={(): void => dispatch(setIsModulate(!isModulate))}
        />
        <label htmlFor="bordered-checkbox-1" className="w-full py-2 ms-2 pl-[12px] font-inter">
          Modulate
        </label>
      </div>
      <OptionsDescriptor isChecked={isModulate}>
        Modulate is a versatile operation in image processing for adjusting the brightness,
        saturation, and hue of images, allowing for creative control over the color appearance and
        overall visual quality of images.
      </OptionsDescriptor>
      {isModulate && (
        <div className="pl-10">
          <CheckboxOptions
            checkboxValue={isSetModulateBrightness}
            checkboxLabel="Brightness"
            inputValue={modulateBrightness}
            setInputValue={setModulateBrightness}
            setCheckboxValue={setIsSetModulateBrightness}
            type="number"
            step={0.1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isSetModulateSaturation}
            checkboxLabel="Saturation"
            inputValue={modulateSaturation}
            setInputValue={setModulateSaturation}
            setCheckboxValue={setIsSetModulateSaturation}
            type="number"
            step={0.1}
            min={0}
          />
          <CheckboxOptions
            checkboxValue={isSetModulateHue}
            checkboxLabel="Hue"
            inputValue={modulateHue}
            setInputValue={setModulateHue}
            setCheckboxValue={setIsSetModulateHue}
            type="number"
            step={1}
            min={0}
          />

          <CheckboxOptions
            checkboxValue={isSetModulateLightness}
            checkboxLabel="Lightness"
            inputValue={modulateLightness}
            setInputValue={setModulateLightness}
            setCheckboxValue={setIsSetModulateLightness}
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
