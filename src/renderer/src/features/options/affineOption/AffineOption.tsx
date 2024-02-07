import Canvas from '@renderer/components/ui/canvas/Canvas';
import OptionsDescriptor from '@renderer/components/ui/optionsDescriptor/OptionsDescriptor';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { AFFINE_MINMAX_VALUE } from '@shared/constants/options.constants';
import { IOptions } from '@shared/types/options.type';
import { useEffect, useState } from 'react';
import {
  setAffineA,
  setAffineB,
  setAffineC,
  setAffineD,
  setIsAffine,
} from '../../options/store/optionsSlice';

function AffineOption(): JSX.Element {
  const { isAffine, affineA, affineB, affineC, affineD } = useAppSelector<IOptions>(
    (state) => state.options
  );
  const dispatch = useAppDispatch();
  const [isAffineCheckbox, setIsAffineCheckbox] = useState(isAffine || false);

  const updateIsAffine = (): void => {
    dispatch(setIsAffine(!isAffineCheckbox));
    setIsAffineCheckbox((isAffineCheckbox) => !isAffineCheckbox);
  };

  useEffect(() => {
    setIsAffineCheckbox(isAffine);
  }, [isAffine]);

  return (
    <div className="options__container">
      <div className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 pl-6 pr-4 w-full h-[40px]">
        <input
          type="checkbox"
          checked={isAffineCheckbox}
          className="w-4 h-4 text-blue-600 bg-gray-100
       border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
       focus:ring-2 dark:bg-gray-500"
          onChange={updateIsAffine}
        />
        <label className="options__label">Affine (The transformation matrix)</label>
      </div>
      <OptionsDescriptor isChecked={isAffineCheckbox}>
        <>
          Geometric transformation that preserves parallel lines, ratios of distances, and angles
          between objects. Affine transformations include translation, rotation, scaling, and
          shearing. These transformations are linear and can be represented by a matrix
          multiplication.
        </>
        <p>
          <svg
            width="719"
            height="127"
            viewBox="0 0 719 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-full object-cover md:h-full"
          >
            <rect width="719" height="127" fill="white" />
            <rect y="9" width="267" height="112" fill="url(#pattern0)" />
            <rect x="495" y="11" width="214" height="105" fill="url(#pattern1)" />
            <path
              d="M456.5 65L431.5 50.5662V79.4338L456.5 65ZM318 67.5H434V62.5H318V67.5Z"
              fill="#272424"
              fillOpacity="0.93"
            />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_221_1438" transform="scale(0.00374532 0.00892857)" />
              </pattern>
              <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image1_221_1438" transform="scale(0.0046729 0.00952381)" />
              </pattern>
              <image
                id="image0_221_1438"
                width="267"
                height="112"
                xlinkHref="data:image/png;base64,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"
              />
              <image
                id="image1_221_1438"
                width="214"
                height="105"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </p>
      </OptionsDescriptor>
      {isAffineCheckbox && (
        <div className="options__input_container">
          <div className="options__input_flex-wrapper">
            <div
              className="flex items-center justify-center flex-col ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
pl-6 pr-4 w-full md:w-[48%] h-full mt-5"
            >
              <div className="flex py-4">
                [a:
                <div className="relative flex items-center px-6 justify-between">
                  <input
                    type="number"
                    step={0.2}
                    max={AFFINE_MINMAX_VALUE}
                    min={-AFFINE_MINMAX_VALUE}
                    className="flex-shrink-0 text-gray-900 dark:text-white border-0 text-sm font-normal focus:ring-0 max-w-[2.5rem] text-center bg-gray-200 dark:bg-gray-550"
                    value={affineA}
                    onChange={(e: InputEvent): void => dispatch(setAffineA(e.target.value))}
                  />
                  {', '}
                </div>
                b:
                <div className="relative flex items-center px-6 justify-between">
                  <input
                    type="number"
                    step={0.2}
                    max={AFFINE_MINMAX_VALUE}
                    min={-AFFINE_MINMAX_VALUE}
                    className="flex-shrink-0 text-gray-900 dark:text-white border-0 text-sm font-normal focus:ring-0 max-w-[2.5rem] text-center bg-gray-200 dark:bg-gray-550 mr-3"
                    placeholder=""
                    value={affineB}
                    onChange={(e: InputEvent): void => dispatch(setAffineB(e.target.value))}
                  />
                </div>
                ]
              </div>
              <div className="flex pb-4">
                [c:
                <div className="relative flex items-center px-6 justify-between">
                  <input
                    type="number"
                    step={0.2}
                    max={AFFINE_MINMAX_VALUE}
                    min={-AFFINE_MINMAX_VALUE}
                    className="flex-shrink-0 text-gray-900 dark:text-white border-0 text-sm font-normal focus:ring-0 max-w-[2.5rem] text-center bg-gray-200 dark:bg-gray-550"
                    placeholder=""
                    value={affineC}
                    onChange={(e: InputEvent): void => dispatch(setAffineC(e.target.value))}
                  />
                  {', '}
                </div>
                d:
                <div className="relative flex items-center px-6 justify-between">
                  <input
                    type="number"
                    step={0.2}
                    max={AFFINE_MINMAX_VALUE}
                    min={-AFFINE_MINMAX_VALUE}
                    className="flex-shrink-0 text-gray-900 dark:text-white border-0 text-sm font-normal focus:ring-0 max-w-[2.5rem] text-center bg-gray-200 dark:bg-gray-550 mr-3"
                    placeholder=""
                    value={affineD}
                    onChange={(e: InputEvent): void => dispatch(setAffineD(e.target.value))}
                  />
                </div>
                ]
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center border border-gray-200 rounded-lg dark:border-gray-300 dark:bg-white
pl-6 pr-4 w-full md:w-[48%] h-[250px] mt-5"
          >
            <Canvas aVal={affineA} bVal={affineB} cVal={affineC} dVal={affineD} />
          </div>
        </div>
      )}
    </div>
  );
}
export default AffineOption;
