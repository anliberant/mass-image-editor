import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setIsFlip,
  setIsOptionsReseted,
  setIsOptionsUpdated,
} from '../../options/store/optionsSlice';

const FlipOption = (): JSX.Element => {
  const { isFlip } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isFlipCheckbox, setIsFlipCheckbox] = useState(isFlip || false);

  const updateIsFlip = (): void => {
    dispatch(setIsFlip(!isFlipCheckbox));
    setIsFlipCheckbox((isFlipCheckbox) => !isFlipCheckbox);
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };

  useEffect(() => {
    setIsFlipCheckbox(isFlip);
  }, [isFlip]);

  return (
    <>
      <div className="options__container">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isFlipCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
  focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsFlip}
          />
          <label className="options__label">Flip (Mirror Vertically)</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isFlipCheckbox}>
        Change the orientation of the image by reversing the order of pixels along a specified axis.
        Flipping an image can create a mirror image of the original along the chosen axis.
      </OptionsDescriptor>
    </>
  );
};
export default FlipOption;
