import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setIsOptionsReseted,
  setIsOptionsUpdated,
  setIsUnflatten,
} from '../../options/store/optionsSlice';

const UnflattenOption = (): JSX.Element => {
  const { isUnflatten } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isUnflattenCheckbox, setIsUnflattenCheckbox] = useState(isUnflatten || false);

  const updateIsUnflatten = (): void => {
    dispatch(setIsUnflatten(!isUnflattenCheckbox));
    setIsUnflattenCheckbox((isUnflattenCheckbox) => !isUnflattenCheckbox);
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };

  useEffect(() => {
    setIsUnflattenCheckbox(isUnflatten || false);
  }, [isUnflatten]);

  return (
    <>
      <div className="options__container">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={isUnflattenCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
  focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsUnflatten}
          />
          <label className="options__label">Unflatten</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={isUnflattenCheckbox}>
        Convert a flattened or compressed image back into its original, uncompressed format. This
        can involve several different techniques depending on how the image was flattened or
        compressed in the first place.
      </OptionsDescriptor>
    </>
  );
};
export default UnflattenOption;
