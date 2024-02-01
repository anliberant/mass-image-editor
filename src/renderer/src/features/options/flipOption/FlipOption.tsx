import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { setIsFlip } from '../../options/store/optionsSlice';

const FlipOption = (): JSX.Element => {
  const { isFlip } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const updateIsFlip = (): void => {
    dispatch(setIsFlip(!isFlip));
  };

  return (
    <>
      <div className="mt-[25px] flex justify-between">
        <div
          className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
pl-6 pr-4 w-full md:w-[48%] h-[40px]"
        >
          <input
            type="checkbox"
            name="bordered-checkbox"
            checked={isFlip}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
  focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
  dark:bg-gray-700 dark:border-gray-600"
            onChange={(): void => updateIsFlip()}
          />
          <label htmlFor="bordered-checkbox-1" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Flip (Mirror Vertically)
          </label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isFlip}>
        Change the orientation of the image by reversing the order of pixels along a specified axis.
        Flipping an image can create a mirror image of the original along the chosen axis.
      </OptionsDescriptor>
    </>
  );
};
export default FlipOption;
