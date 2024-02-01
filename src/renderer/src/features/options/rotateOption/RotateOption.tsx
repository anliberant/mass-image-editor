import CircularSlider from '@fseehawer/react-circular-slider';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import CheckboxOptions from '../../../components/ui/checkboxOption/CheckboxOptions';
import { setRotate, setRotateBg } from '../../options/store/optionsSlice';

const RotateOption = (): JSX.Element => {
  const { rotate, rotateBg } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [isRotating, setIsRotating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isSetRotateBg, setIsSetRotateBg] = useState(false);

  const onRotate = (val: number): void => {
    dispatch(setRotate(val));
  };
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
            checked={isRotating}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
            onChange={(): void => setIsRotating((isRotating) => !isRotating)}
          />
          <label htmlFor="bordered-checkbox" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Rotate
          </label>
        </div>
        {isRotating && (
          <div
            className="flex justify-center items-center w-[48%] h-40 pl-4 pr-4 border border-gray-300 rounded-lg bg-gray-50 
        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <CircularSlider
              min={0}
              max={360}
              width={100}
              height={100}
              initialValue={rotate}
              direction={-1}
              knobPosition="right"
              knobSize={16}
              data={Array.from(360)}
              dataIndex={rotate}
              appendToValue="°"
              valueFontSize="1.5rem"
              trackColor="#eeeeee"
              progressColorFrom={isDragging ? '#F0A367' : '#00bfbd'}
              progressColorTo={isDragging ? '#F65749' : '#009c9a'}
              labelColor={isDragging ? '#F0A367' : '#00bfbd'}
              labelFontSize="0.8rem"
              labelBottom={true}
              knobColor={isDragging ? '#F0A367' : '#00bfbd'}
              isDragging={(value): void => setIsDragging(value)}
              onChange={(value: number): void => onRotate(value)}
            />
          </div>
        )}
      </div>
      <OptionsDescriptor isChecked={isRotating}>
        Change the orientation of an image by a specified angle. It involves repositioning the
        pixels of the image around a central point, to create a new image with a different
        orientation.
      </OptionsDescriptor>
      {isRotating && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isSetRotateBg}
            checkboxLabel="Set rotate BACKGROUND"
            inputValue={rotateBg}
            setInputValue={setRotateBg}
            setCheckboxValue={setIsSetRotateBg}
            type="color"
          />
        </div>
      )}
    </>
  );
};
export default RotateOption;
