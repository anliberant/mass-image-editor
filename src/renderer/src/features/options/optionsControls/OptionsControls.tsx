import Button from '@renderer/components/ui/button/Button';
import { getImagesOptionsFromState } from '@renderer/features/images/store/hooks/getImagesOptions.hook';
import { nullImagesOptions } from '@renderer/features/images/store/imagesSlice';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { LocalStorage } from '@shared/utils/localStorage';
import { getOptionsFromState } from '../store/hooks/getOptions.hook';
import { nullOptions, setIsOptionsReseted, setIsOptionsUpdated } from '../store/optionsSlice';

const OptionsControls = (): JSX.Element => {
  const { isOptionsUpdated, isOptionsReseted } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const saveLocalData = (): void => {
    dispatch(setIsOptionsUpdated(true));
    dispatch(setIsOptionsReseted(false));
    LocalStorage.setOptionsData();
    const options = getOptionsFromState();
    LocalStorage.setOptionsData(options);
    const imagesOptions = getImagesOptionsFromState();
    console.log('imagesOptions: ', imagesOptions);
    LocalStorage.setImagesOptionsData(imagesOptions);
  };

  const resetLocalData = (): void => {
    dispatch(nullOptions());
    dispatch(nullImagesOptions());
    LocalStorage.removeOptionsData();
    LocalStorage.removeImagesOptionsData();
  };

  return (
    <div className="w-full flex justify-between mt-[25px]">
      <Button type="reset" onClick={(): void => resetLocalData()} disabled={isOptionsReseted}>
        Reset
      </Button>
      <Button type="save" onClick={(): void => saveLocalData()} disabled={isOptionsUpdated}>
        Save Options
      </Button>
    </div>
  );
};
export default OptionsControls;
