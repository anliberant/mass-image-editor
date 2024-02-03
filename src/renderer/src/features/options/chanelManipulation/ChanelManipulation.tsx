import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { ChannelTypes } from '@shared/types/formats.type';
import { IOptions } from '@shared/types/options.type';
import { ChangeEvent, useState } from 'react';
import {
  setEnsureAlphaValue,
  setExtractChannel,
  setIsEnsureAlpha,
  setIsRemoveAlpha,
} from '../store/optionsSlice';

const ChanelManipulation = (): JSX.Element => {
  const { isRemoveAlpha, isEnsureAlpha, ensureAlphaVal, extractChannel } = useAppSelector<IOptions>(
    (state) => state.options
  );
  const dispatch = useAppDispatch();

  const [channelManipulationCheckbox, setChannelManipulationCheckbox] = useState(false);
  const [extractChannelCheckbox, setExtractChannelCheckbox] = useState(false);
  const [ensureAlphaValCheckbox, setEnsureAlphaValCheckbox] = useState(false);

  const updateEnsureAlphaVal = () => {
    dispatch(setIsEnsureAlpha(!isEnsureAlpha));
    setEnsureAlphaValCheckbox(!isEnsureAlpha);
  };
  return (
    <div className="mt-[25px] flex flex-col justify-between">
      <div
        className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
pl-6 pr-4 w-full h-[40px]"
      >
        <input
          type="checkbox"
          checked={channelManipulationCheckbox}
          className="w-4 h-4 text-blue-600 bg-gray-100
     border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
     focus:ring-2 dark:bg-gray-500"
          onChange={(): void =>
            setChannelManipulationCheckbox(
              (channelManipulationCheckbox) => !channelManipulationCheckbox
            )
          }
        />
        <label htmlFor="bordered-checkbox-1" className="w-full py-2 ms-2 pl-[12px] font-inter">
          Channel Manipulation
        </label>
      </div>
      {channelManipulationCheckbox && (
        <div className="md:pl-10 mt-[25px] flex  flex-col md:flex-row gap-5 justify-between">
          <div
            className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
 pl-6 pr-4 w-full md:w-[98%] h-[40px]"
          >
            <input
              type="checkbox"
              checked={isRemoveAlpha}
              className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
     focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
     dark:bg-gray-700 dark:border-gray-600"
              onChange={(): void => dispatch(setIsRemoveAlpha(!isRemoveAlpha))}
            />
            <label className="w-full py-2 ms-2 pl-[12px] font-inter">
              Remove Alpha (Transparency)
            </label>
          </div>
        </div>
      )}
      {channelManipulationCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={ensureAlphaValCheckbox}
            checkboxLabel="Ensure Alpha"
            inputValue={ensureAlphaVal}
            setInputValue={setEnsureAlphaValue}
            setCheckboxValue={updateEnsureAlphaVal}
            type="number"
            min={0}
            max={1}
            step={0.1}
          />
        </div>
      )}
      {channelManipulationCheckbox && (
        <div className="md:pl-10 mt-[25px] flex  flex-col md:flex-row gap-5 justify-between">
          <div
            className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
 pl-6 pr-4 w-full md:w-[48%] h-[40px]"
          >
            <input
              type="checkbox"
              checked={extractChannelCheckbox}
              className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
     focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
     dark:bg-gray-700 dark:border-gray-600"
              onChange={(): void =>
                setExtractChannelCheckbox((extractChannelCheckbox) => !extractChannelCheckbox)
              }
            />
            <label className="w-full py-2 ms-2 pl-[12px] font-inter">Extract Channel</label>
          </div>
          {extractChannelCheckbox && (
            <div
              className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
 pl-6 pr-4 w-full md:w-[48%] h-[40px]"
            >
              <label className="sr-only">Select Channel</label>
              <select
                className="block w-full border-0 border-b-2  dark:border-gray-100 focus:outline-none focus:ring-0 focus:border-gray-200 bg-white
                dark:bg-black"
                value={extractChannel}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  dispatch(setExtractChannel(e.target.value))
                }
              >
                <option value={ChannelTypes.NONE}>{ChannelTypes.NONE}</option>
                <option value={ChannelTypes.RED}>{ChannelTypes.RED}</option>
                <option value={ChannelTypes.GREEN}>{ChannelTypes.GREEN}</option>
                <option value={ChannelTypes.BLUE}>{ChannelTypes.BLUE}</option>
                <option value={ChannelTypes.ALPHA}>{ChannelTypes.ALPHA}</option>
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default ChanelManipulation;
