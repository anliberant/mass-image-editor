import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setIsNegate,
  setIsNegateAlpha,
  setIsOptionsReseted,
  setIsOptionsUpdated,
} from '../store/optionsSlice';

const NegateOption = (): JSX.Element => {
  const { isNegate, isNegateAlpha } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isNegateCheckbox, setIsNegateCheckbox] = useState(isNegate || false);
  const [isNegateAlphaCheckbox, setIsNegateAlphaCheckbox] = useState(isNegateAlpha || false);

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };
  const updateIsNegate = (): void => {
    dispatch(setIsNegate(!isNegateCheckbox));
    setIsNegateCheckbox((isNegateCheckbox) => !isNegateCheckbox);
    updateOptionsNotifier();
  };
  const updateIsNegateAlpha = (): void => {
    dispatch(setIsNegateAlpha(!isNegateAlphaCheckbox));
    setIsNegateAlphaCheckbox((isNegateAlphaCheckbox) => !isNegateAlphaCheckbox);
    updateOptionsNotifier();
  };

  useEffect(() => {
    setIsNegateCheckbox(isNegate || false);
    setIsNegateAlphaCheckbox(isNegateAlpha || false);
  }, [isNegate, isNegateAlpha]);

  return (
    <>
      <div className="options__container md:flex-row gap-5">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isNegateCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsNegate}
          />
          <label className="options__label">Negate</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isNegateCheckbox}>
        The term &quot;negate&quot; in image manipulation refers to a process where the colors of an
        image are inverted or reversed. In other words, the bright areas become dark, and the dark
        areas become bright. This transformation is achieved by subtracting the RGB (Red, Green,
        Blue) values of each pixel from the maximum possible value.
      </OptionsDescriptor>
      {isNegateCheckbox && (
        <div className="md:pl-10">
          <div className="mt-[25px] flex items-center border border-gray-200 rounded-lg pl-6 ps-4 dark:border-gray-300 pr-4 w-full h-[40px]">
            <input
              type="checkbox"
              checked={isNegateAlphaCheckbox}
              className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={updateIsNegateAlpha}
            />
            <label className="options__label">Negate (any alpha channel)</label>
          </div>
          <OptionsDescriptor isChecked={isNegateAlphaCheckbox}>
            For the Red channel: Negate the red value by subtracting it from 255 (maximum value).
            <br />
            For the Green channel: Negate the green value by subtracting it from 255. <br />
            For the Blue channel: Negate the blue value by subtracting it from 255.
          </OptionsDescriptor>
        </div>
      )}
    </>
  );
};
export default NegateOption;
