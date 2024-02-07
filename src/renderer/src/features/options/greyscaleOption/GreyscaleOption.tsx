import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import { setIsGreyscale, setIsOptionsReseted, setIsOptionsUpdated } from '../store/optionsSlice';

const GreyscaleOption = (): JSX.Element => {
  const { isGreyscale } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const [isGreyscaleCheckbox, setIsGreyscaleCheckbox] = useState(isGreyscale || false);

  const updateIsGreyscale = (): void => {
    dispatch(setIsGreyscale(!isGreyscaleCheckbox));
    setIsGreyscaleCheckbox((isGreyscaleCheckbox) => !isGreyscaleCheckbox);
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };

  useEffect(() => {
    setIsGreyscaleCheckbox(isGreyscale || false);
  }, [isGreyscale]);
  return (
    <>
      <div className="options__container">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isGreyscaleCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
  focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsGreyscale}
          />
          <label className="options__label">Greyscale</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isGreyscaleCheckbox}>
        Convert to 8-bit greyscale; 256 shades of grey.
      </OptionsDescriptor>
    </>
  );
};
export default GreyscaleOption;
