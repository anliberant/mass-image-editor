import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import { setIsNegate, setIsNegateAlpha } from '../store/optionsSlice';

const NegateOption = (): JSX.Element => {
  const { isNegate, negateAlpha } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [negateAlphaCheckbox, setNegateAlphaCheckbox] = useState(false);

  return (
    <>
      <div className="mt-[25px] flex flex-col md:flex-row gap-5 justify-between">
        <div
          className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
  pl-6 pr-4 w-full md:w-[48%] h-[40px]"
        >
          <input
            type="checkbox"
            name="bordered-checkbox"
            checked={isNegate}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
            onChange={(): void => dispatch(setIsNegate(!isNegate))}
          />
          <label htmlFor="bordered-checkbox" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Negate
          </label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isNegate}>
        The term "negate" in image manipulation refers to a process where the colors of an image are
        inverted or reversed. In other words, the bright areas become dark, and the dark areas
        become bright. This transformation is achieved by subtracting the RGB (Red, Green, Blue)
        values of each pixel from the maximum possible value.
      </OptionsDescriptor>
      {isNegate && (
        <div className="md:pl-10">
          <div className="mt-[25px] flex items-center border border-gray-200 rounded-lg pl-6 ps-4 dark:border-gray-300 pr-4 w-full h-[40px]">
            <input
              type="checkbox"
              name="bordered-checkbox"
              checked={negateAlpha}
              className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
              onChange={(): void => dispatch(setIsNegateAlpha(!negateAlpha))}
            />
            <label htmlFor="bordered-checkbox" className="w-full py-2 ms-2 pl-[12px] font-inter">
              Negate (any alpha channel)
            </label>
          </div>
          <OptionsDescriptor isChecked={negateAlpha}>
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
