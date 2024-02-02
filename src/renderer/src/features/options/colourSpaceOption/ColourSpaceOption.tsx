import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { ColourScapes } from '@shared/types/formatTypes/coloursSpace.type';
import { IOptions } from '@shared/types/options.type';
import { useState } from 'react';
import { setColourSpace } from '../store/optionsSlice';
import styles from './ColourSpaceOption.module.css';

const ColourSpaceOption = (): JSX.Element => {
  const { isColourSpace, colourSpace } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [coloursCheckbox, setColourCheckbox] = useState(false);

  const setNewColorSpace = (str: ColourScapes) => {
    dispatch(setColourSpace(str));
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
            checked={coloursCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
      dark:bg-gray-700 dark:border-gray-600"
            onChange={(): void => setColourCheckbox((coloursCheckbox) => !coloursCheckbox)}
          />
          <label htmlFor="bordered-checkbox" className="w-full py-2 ms-2 pl-[12px] font-inter">
            Colourspace
          </label>
        </div>
      </div>
      <OptionsDescriptor isChecked={coloursCheckbox}>
        A "colourspace" is a specific instance of a color model, representing a range of colors that
        can be produced or displayed. Different color spaces have different gamuts, which define the
        range of colors that can be represented within that color space.
      </OptionsDescriptor>
      {coloursCheckbox && (
        <div className="md:pl-10 mt-[25px]">
          <div className={styles.container}>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.BW}
                checked={ColourScapes.BW === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.BW)}
              />
              <label className={styles.rowLabel}>{ColourScapes.BW}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.CMC}
                checked={ColourScapes.CMC === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.CMC)}
              />
              <label className={styles.rowLabel}>{ColourScapes.CMC}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.CMYK}
                checked={ColourScapes.CMYK === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.CMYK)}
              />
              <label className={styles.rowLabel}>{ColourScapes.CMYK}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.FOURIER}
                checked={ColourScapes.FOURIER === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.FOURIER)}
              />
              <label className={styles.rowLabel}>{ColourScapes.FOURIER}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.GREY16}
                checked={ColourScapes.GREY16 === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.GREY16)}
              />
              <label className={styles.rowLabel}>{ColourScapes.GREY16}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.HISTOGRAM}
                checked={ColourScapes.HISTOGRAM === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.HISTOGRAM)}
              />
              <label className={styles.rowLabel}>{ColourScapes.HISTOGRAM}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.HSV}
                checked={ColourScapes.HSV === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.HSV)}
              />
              <label className={styles.rowLabel}>{ColourScapes.HSV}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.LAB}
                checked={ColourScapes.LAB === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.LAB)}
              />
              <label className={styles.rowLabel}>{ColourScapes.LAB}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.LABQ}
                checked={ColourScapes.LABQ === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.LABQ)}
              />
              <label className={styles.rowLabel}>{ColourScapes.LABQ}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.LABS}
                checked={ColourScapes.LABS === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.LABS)}
              />
              <label className={styles.rowLabel}>{ColourScapes.LABS}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.LCH}
                checked={ColourScapes.LCH === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.LCH)}
              />
              <label className={styles.rowLabel}>{ColourScapes.LCH}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.MATRIX}
                checked={ColourScapes.MATRIX === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.MATRIX)}
              />
              <label className={styles.rowLabel}>{ColourScapes.MATRIX}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.RGB}
                checked={ColourScapes.RGB === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.RGB)}
              />
              <label className={styles.rowLabel}>{ColourScapes.RGB}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.RGB16}
                checked={ColourScapes.RGB16 === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.RGB16)}
              />
              <label className={styles.rowLabel}>{ColourScapes.RGB16}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.SCRGB}
                checked={ColourScapes.SCRGB === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.SCRGB)}
              />
              <label className={styles.rowLabel}>{ColourScapes.SCRGB}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.SRGB}
                checked={ColourScapes.SRGB === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.SRGB)}
              />
              <label className={styles.rowLabel}>{ColourScapes.SRGB}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.XYZ}
                checked={ColourScapes.XYZ === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.XYZ)}
              />
              <label className={styles.rowLabel}>{ColourScapes.XYZ}</label>
            </div>
            <div className="flex items-center me-4">
              <input
                type="radio"
                value={ColourScapes.YXY}
                checked={ColourScapes.YXY === colourSpace}
                className={styles.rowInput}
                onChange={(): void => setNewColorSpace(ColourScapes.YXY)}
              />
              <label className={styles.rowLabel}>{ColourScapes.YXY}</label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ColourSpaceOption;
