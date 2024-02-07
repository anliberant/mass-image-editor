import CheckboxOptions from '@renderer/components/ui/checkboxOption/CheckboxOptions';
import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { ChannelTypes } from '@shared/types/formats.type';
import { IOptions } from '@shared/types/options.type';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  setEnsureAlphaValue,
  setExtractChannel,
  setIsChannelManipulation,
  setIsEnsureAlpha,
  setIsExtractChannel,
  setIsOptionsReseted,
  setIsOptionsUpdated,
  setIsRemoveAlpha,
} from '../store/optionsSlice';

const ChanelManipulation = (): JSX.Element => {
  const {
    isChannelManipulation,
    isRemoveAlpha,
    isEnsureAlpha,
    ensureAlphaVal,
    isExtractChannel,
    extractChannel,
  } = useAppSelector<IOptions>((state) => state.options);
  const dispatch = useAppDispatch();

  const [channelManipulationCheckbox, setChannelManipulationCheckbox] = useState(
    isChannelManipulation || false
  );
  const [isRemoveAlphaCheckbox, setIsRemoveAlphaCheckbox] = useState(isRemoveAlpha || false);
  const [isEnsureAlphaCheckbox, setIsEnsureAlphaCheckbox] = useState(isEnsureAlpha || false);
  const [extractChannelCheckbox, setExtractChannelCheckbox] = useState(isExtractChannel || false);

  const updateOptionsNotifier = (): void => {
    dispatch(setIsOptionsUpdated(false));
    dispatch(setIsOptionsReseted(false));
  };
  const updateIsChannelManipulation = (): void => {
    dispatch(setIsChannelManipulation(!channelManipulationCheckbox));
    setChannelManipulationCheckbox((channelManipulationCheckbox) => !channelManipulationCheckbox);
    updateOptionsNotifier();
  };
  const updateIsRemoveAlpha = (): void => {
    dispatch(setIsRemoveAlpha(!isRemoveAlphaCheckbox));
    setIsRemoveAlphaCheckbox((isRemoveAlphaCheckbox) => !isRemoveAlphaCheckbox);
    updateOptionsNotifier();
  };
  const updateIsEnsureAlpha = (): void => {
    dispatch(setIsEnsureAlpha(!isEnsureAlphaCheckbox));
    setIsEnsureAlphaCheckbox((isEnsureAlphaCheckbox) => !isEnsureAlphaCheckbox);
    updateOptionsNotifier();
  };
  const updateIsExtractChannel = (): void => {
    dispatch(setIsExtractChannel(!extractChannelCheckbox));
    setExtractChannelCheckbox((extractChannelCheckbox) => !extractChannelCheckbox);
    updateOptionsNotifier();
  };
  const updateExtractChannel = (val: string): void => {
    dispatch(setExtractChannel(val));
    updateOptionsNotifier();
  };

  useEffect(() => {
    setChannelManipulationCheckbox(isChannelManipulation || false);
    setIsRemoveAlphaCheckbox(isRemoveAlpha || false);
    setIsEnsureAlphaCheckbox(isEnsureAlpha || false);
  }, [isChannelManipulation, isRemoveAlpha, isEnsureAlpha, isExtractChannel]);
  return (
    <div className="options__container">
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
          onChange={updateIsChannelManipulation}
        />
        <label className="options__label">Channel Manipulation</label>
      </div>
      {channelManipulationCheckbox && (
        <div className="mt-[25px] flex flex-col justify-between md:pl-10 md:flex-row gap-5">
          <div
            className="flex items-center ps-4 border border-gray-200 rounded-lg dark:border-gray-300 
 pl-6 pr-4 w-full md:w-[98%] h-[40px]"
          >
            <input
              type="checkbox"
              checked={isRemoveAlphaCheckbox}
              className="w-4 h-4 bg-blue-500 border-gray-300 rounded 
     focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 
     dark:bg-gray-700 dark:border-gray-600"
              onChange={updateIsRemoveAlpha}
            />
            <label className="options__label">Remove Alpha (Transparency)</label>
          </div>
        </div>
      )}
      {channelManipulationCheckbox && (
        <div className="md:pl-10">
          <CheckboxOptions
            checkboxValue={isEnsureAlphaCheckbox}
            checkboxLabel="Ensure Alpha"
            inputValue={ensureAlphaVal}
            setInputValue={setEnsureAlphaValue}
            setCheckboxValue={updateIsEnsureAlpha}
            type="number"
            min={0}
            max={1}
            step={0.1}
          />
        </div>
      )}
      {channelManipulationCheckbox && (
        <div className="options__container md:pl-10 md:flex-row gap-5">
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
              onChange={updateIsExtractChannel}
            />
            <label className="options__label">Extract Channel</label>
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
                onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
                  updateExtractChannel(e.target.value)
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
