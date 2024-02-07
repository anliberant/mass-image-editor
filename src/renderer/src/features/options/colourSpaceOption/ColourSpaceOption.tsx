import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { ColourScapes } from '@shared/types/formatTypes/coloursSpace.type';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setColourSpace,
  setIsColourSpace,
  setIsOptionsReseted,
  setIsOptionsUpdated,
} from '../store/optionsSlice';
import styles from './ColourSpaceOption.module.css';

const ColourSpaceOption = (): JSX.Element => {
  const { isColourSpace, colourSpace } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();
  const [coloursCheckbox, setColourCheckbox] = useState(isColourSpace || false);

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };

  const updateIsColourSpace = (): void => {
    dispatch(setIsColourSpace(!coloursCheckbox));
    setColourCheckbox((coloursCheckbox) => !coloursCheckbox);
    updateOptionsNotifier();
  };
  const setNewColorSpace = (str: ColourScapes): void => {
    dispatch(setColourSpace(str));
    updateOptionsNotifier();
  };

  useEffect(() => {
    setColourCheckbox(isColourSpace || false);
  }, [isColourSpace]);

  const rowInputStyles = `w-4 h-4 text-red-100 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-100 dark:ring-offset-gray-100 focus:ring-2 dark:bg-gray-500 dark:border-gray-300`;

  return (
    <>
      <div className="options__container md:flex-row gap-5">
        <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[48%] h-[40px]">
          <input
            type="checkbox"
            checked={coloursCheckbox}
            className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
      focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={updateIsColourSpace}
          />
          <label className="options__label">Colourspace</label>
        </div>
      </div>
      <OptionsDescriptor isChecked={coloursCheckbox}>
        A &quot;colourspace&quot; is a specific instance of a color model, representing a range of
        colors that can be produced or displayed. Different color spaces have different gamuts,
        which define the range of colors that can be represented within that color space.
      </OptionsDescriptor>
      {coloursCheckbox && (
        <div className="md:pl-10 mt-[25px]">
          <div className="flex flex-wrap gap-2 items-center justify-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full md:w-[98%] h-full py-5">
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.BW}
                checked={ColourScapes.BW === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.BW)}
              />
              <label className={styles.rowLabel}>{ColourScapes.BW}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.CMC}
                checked={ColourScapes.CMC === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.CMC)}
              />
              <label className={styles.rowLabel}>{ColourScapes.CMC}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.CMYK}
                checked={ColourScapes.CMYK === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.CMYK)}
              />
              <label className={styles.rowLabel}>{ColourScapes.CMYK}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.FOURIER}
                checked={ColourScapes.FOURIER === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.FOURIER)}
              />
              <label className={styles.rowLabel}>{ColourScapes.FOURIER}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.GREY16}
                checked={ColourScapes.GREY16 === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.GREY16)}
              />
              <label className={styles.rowLabel}>{ColourScapes.GREY16}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.HISTOGRAM}
                checked={ColourScapes.HISTOGRAM === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.HISTOGRAM)}
              />
              <label className={styles.rowLabel}>{ColourScapes.HISTOGRAM}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.HSV}
                checked={ColourScapes.HSV === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.HSV)}
              />
              <label className={styles.rowLabel}>{ColourScapes.HSV}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.LAB}
                checked={ColourScapes.LAB === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.LAB)}
              />
              <label className={styles.rowLabel}>{ColourScapes.LAB}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.LABQ}
                checked={ColourScapes.LABQ === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.LABQ)}
              />
              <label className={styles.rowLabel}>{ColourScapes.LABQ}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.LABS}
                checked={ColourScapes.LABS === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.LABS)}
              />
              <label className={styles.rowLabel}>{ColourScapes.LABS}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.LCH}
                checked={ColourScapes.LCH === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.LCH)}
              />
              <label className={styles.rowLabel}>{ColourScapes.LCH}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.MATRIX}
                checked={ColourScapes.MATRIX === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.MATRIX)}
              />
              <label className={styles.rowLabel}>{ColourScapes.MATRIX}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.RGB}
                checked={ColourScapes.RGB === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.RGB)}
              />
              <label className={styles.rowLabel}>{ColourScapes.RGB}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.RGB16}
                checked={ColourScapes.RGB16 === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.RGB16)}
              />
              <label className={styles.rowLabel}>{ColourScapes.RGB16}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.SCRGB}
                checked={ColourScapes.SCRGB === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.SCRGB)}
              />
              <label className={styles.rowLabel}>{ColourScapes.SCRGB}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.SRGB}
                checked={ColourScapes.SRGB === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.SRGB)}
              />
              <label className={styles.rowLabel}>{ColourScapes.SRGB}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.XYZ}
                checked={ColourScapes.XYZ === colourSpace}
                className={rowInputStyles}
                onChange={(): void => setNewColorSpace(ColourScapes.XYZ)}
              />
              <label className={styles.rowLabel}>{ColourScapes.XYZ}</label>
            </div>
            <div className={styles.rowFlex}>
              <input
                type="radio"
                value={ColourScapes.YXY}
                checked={ColourScapes.YXY === colourSpace}
                className={rowInputStyles}
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
