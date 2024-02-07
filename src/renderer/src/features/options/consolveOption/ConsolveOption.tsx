import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import { setIsConvolve, setIsOptionsReseted, setIsOptionsUpdated } from '../store/optionsSlice';

const ConsolveOption = (): JSX.Element => {
  const { isConvolve } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const [isConvolveCheckbox, setIsConvolveCheckbox] = useState(isConvolve || false);

  const updateIsConvolve = (): void => {
    dispatch(setIsConvolve(!isConvolveCheckbox));
    setIsConvolveCheckbox((isConvolveCheckbox) => isConvolveCheckbox);
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };

  useEffect(() => {
    setIsConvolveCheckbox(isConvolve || false);
  }, [isConvolve]);
  return (
    <>
      <div className="options__container">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isConvolveCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded  focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsConvolve}
          />
          <label className="options__label">Convolve</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isConvolveCheckbox}>
        Involve applying a convolution kernel to an image, which modifies the pixel values to
        achieve specific effects.
      </OptionsDescriptor>
    </>
  );
};
export default ConsolveOption;
