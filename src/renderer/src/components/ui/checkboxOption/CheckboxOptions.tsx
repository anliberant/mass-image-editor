import {
  setIsOptionsReseted,
  setIsOptionsUpdated,
} from '@renderer/features/options/store/optionsSlice';
import { useAppDispatch } from '@renderer/hooks';
import { CheckboxOptionsProps } from './CheckboxOptions.props';

const CheckboxOptions = ({
  checkboxValue,
  checkboxLabel,
  inputValue,
  setInputValue,
  setCheckboxValue,
  type = 'text',
  max = 100,
  min = 0,
  step = 0.1,
}: CheckboxOptionsProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const updateIsOptionsUpdated = (e: InputEvent): void => {
    dispatch(setInputValue(e.target.value));
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };

  return (
    <div className="mt-[25px] flex justify-between">
      <div
        className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
  pl-6 pr-4 w-[48%] h-[40px]"
      >
        <input
          type="checkbox"
          checked={checkboxValue}
          className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
          onChange={(): void => setCheckboxValue(!checkboxValue)}
        />
        <label className="w-full py-2 ms-2 pl-[12px] font-inter">{checkboxLabel}</label>
      </div>
      {checkboxValue && (
        <input
          type={type}
          value={inputValue}
          max={max}
          min={min}
          step={step}
          className="block w-[48%] h-[40px] pl-4 pr-4 text-gray-400 border border-gray-300 rounded-lg bg-gray-50 
      focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e: InputEvent): void => updateIsOptionsUpdated(e)}
        />
      )}
    </div>
  );
};
export default CheckboxOptions;
