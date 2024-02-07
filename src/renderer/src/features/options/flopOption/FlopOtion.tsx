import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setIsFlop,
  setIsOptionsReseted,
  setIsOptionsUpdated,
} from '../../options/store/optionsSlice';

const FlopOption = (): JSX.Element => {
  const { isFlop } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isFlopCheckbox, setIsFlopCheckbox] = useState(isFlop || false);

  const updateIsFlop = (): void => {
    dispatch(setIsFlop(!isFlopCheckbox));
    setIsFlopCheckbox((isFlopCheckbox) => !isFlopCheckbox);
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };

  useEffect(() => {
    setIsFlopCheckbox(isFlop);
  }, [isFlop]);

  return (
    <>
      <div className="options__container">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isFlopCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
  focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsFlop}
          />
          <label className="options__label">Flop (Mirror Horizontally)</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isFlopCheckbox}>
        Flop or a horizontal flip is a transformation that mirrors an image horizontally, reversing
        the order of pixels from left to right. This operation is also known as a horizontal
        reflection or flop.
      </OptionsDescriptor>
    </>
  );
};
export default FlopOption;
