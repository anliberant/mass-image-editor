import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { setIsFlop } from '../../options/store/optionsSlice';

const FlopOption = (): JSX.Element => {
  const { isFlop } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const updateIsFlop = (): void => {
    dispatch(setIsFlop(!isFlop));
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
            checked={isFlop}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
  focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
  dark:bg-gray-700 dark:border-gray-600"
            onChange={(): void => updateIsFlop()}
          />
          <label htmlFor="bordered-checkbox-1" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Flop (Mirror Horizontally)
          </label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isFlop}>
        Flop or a horizontal flip is a transformation that mirrors an image horizontally, reversing
        the order of pixels from left to right. This operation is also known as a horizontal
        reflection or flop.
      </OptionsDescriptor>
    </>
  );
};
export default FlopOption;
