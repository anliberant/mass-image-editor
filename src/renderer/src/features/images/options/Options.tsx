import { useState } from 'react';

import { useAppSelector } from '../../../hooks';
import { setDestNameFolder, setIsCreateDestSub } from '@renderer/features/images/imagesSlice';
//import { OptionsProps } from './Options.props';
import CheckboxOptions from './checkboxOption/CheckboxOptions';

const defClasses = `w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
peer-focus:ring-blue-100 dark:peer-focus:ring-blue-200 rounded-full peer
dark:bg-gray-500  peer-checked:after:border-white
after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white
after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
dark:border-gray-500`;

const checkedClasses = `w-11 h-6 peer-focus:outline-none peer-focus:ring-4 
peer-focus:ring-blue-100 dark:peer-focus:ring-blue-200 rounded-full peer
dark:bg-blue-200 after:translate-x-full after:border-white
after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white
after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
dark:border-gray-500 bg-blue-200`;

const Options = (): JSX.Element => {
  const { destNameFolder, isCreateDestSub } = useAppSelector((state) => state.images);
  const [isOpenFolder, setIsOpenFolder] = useState(true);

  const toggleOpen = (): void => {
    api.toggle('isOpenFolder', !isOpenFolder);
    setIsOpenFolder((isOpenFolder) => !isOpenFolder);
  };

  return (
    <>
      <div className="flex justify-between items-center mt-[25px]">
        <div
          className="flex bg-gray-100 hover:bg-gray-200 dark:bg-gray-450 dark:hover:bg-gray-500 
        h-[40px] 
      rounded-lg flex-row justify-between items-center pl-4 pr-4 w-[48%]"
        >
          <div className="flex items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.2295 5.99999V6.75H3.77102V3C3.77102 1.34315 5.11416 0 6.77102 0H11.9496C12.651 0 13.3303 0.24578 13.8693 0.694622L15.8037 2.30537C16.3427 2.75421 17.0219 2.99999 17.7234 2.99999H23.2295C24.8863 2.99999 26.2295 4.34314 26.2295 5.99999ZM27.9994 9.00015H2.00068C0.738179 9.00015 -0.208501 10.1555 0.0397186 11.3934L3.12639 26.7865C3.50112 28.6553 5.14235 30.0001 7.04832 30.0001H22.9517C24.8577 30.0001 26.4989 28.6553 26.8736 26.7865L29.9603 11.3934C30.2085 10.1555 29.2619 9.00015 27.9994 9.00015ZM16.053 16.4999C16.053 15.8786 15.5817 15.3749 15.0003 15.3749C14.4189 15.3749 13.9475 15.8786 13.9475 16.4999V19.8752H10.7892C10.2078 19.8752 9.73646 20.3788 9.73646 21.0001C9.73646 21.6215 10.2078 22.1251 10.7892 22.1251H13.9475V25.4999C13.9475 26.1212 14.4189 26.6249 15.0003 26.6249C15.5817 26.6249 16.053 26.1212 16.053 25.4999V22.1251H19.2111C19.7925 22.1251 20.2639 21.6215 20.2639 21.0001C20.2639 20.3788 19.7925 19.8752 19.2111 19.8752H16.053V16.4999Z"
                fill="#809FB8"
              />
            </svg>
            <span className="pl-[12px] font-inter">Open a folder after complete</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className={isOpenFolder ? checkedClasses : defClasses} onClick={toggleOpen}></div>
          </label>
        </div>
        <div
          className="flex bg-gray-100 hover:bg-gray-200 dark:bg-gray-450 dark:hover:bg-gray-500 h-[40px] 
      rounded-lg flex-row justify-between items-center pl-4 pr-4 w-[48%]"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.3028 0.711451C28.0375 1.95267 29.9502 4.68778 29.999 7.875H20.186L25.3028 0.711451ZM22 0C22.3392 0 22.6735 0.0211114 23.0016 0.0620921L17.4209 7.875H8.18609L13.8111 0H22ZM8 0H11.0461L5.42106 7.875H0.000956753C0.0677515 3.51436 3.62346 0 8 0ZM0 22V10.125H30V22C30 26.4183 26.4183 30 22 30H8C3.58172 30 0 26.4183 0 22ZM12.0001 16.3028V22.6972C12.0001 23.8953 13.3353 24.6099 14.3321 23.9453L19.1279 20.7481C20.0185 20.1543 20.0185 18.8457 19.1279 18.2519L14.3321 15.0547C13.3353 14.3901 12.0001 15.1047 12.0001 16.3028Z"
              fill="#809FB8"
            />
          </svg>

          <span>Overwrite existing files</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
          peer-focus:ring-blue-100 dark:peer-focus:ring-blue-200 rounded-full peer dark:bg-gray-500
          peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']
          after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border
          after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500
          peer-checked:bg-blue-200"
            ></div>
          </label>
        </div>
      </div>
      <CheckboxOptions
        checkboxValue={isCreateDestSub}
        checkboxLabel="Create a subfolder for the result"
        inputValue={destNameFolder}
        setInputValue={setDestNameFolder}
        setCheckboxValue={setIsCreateDestSub}
      />
    </>
  );
};
export default Options;
