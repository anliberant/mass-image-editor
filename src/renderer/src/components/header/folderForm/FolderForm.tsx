import { ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';
import { FolderProps } from './FolderForm.props';
import { isFileImage } from '../../../../../utils/processImage';
import { getImageInfo } from './../../../../../utils/getImageInfo';

const notifyError = (text: string): unknown => toast.error(text, { duration: 4000 });

const FolderForm = ({ setImages, setDestPath }: FolderProps): JSX.Element => {
  const folderOnChange = async (e: ChangeEvent<HTMLInputElement>): void => {
    console.log('folder on change');
    if (!e.target.files?.length) {
      notifyError('Please select a non-empty directory');
    }
    setImages([]);
    const files: FileList = e.target.files;
    const images: ImageFileDto[] = [];
    Array.from(files).forEach((file) => {
      if (!isFileImage(file)) {
        notifyError('Please select a image');
      } else {
        const newImage = getImageInfo(file);
        images.push(newImage);
      }
    });
    if (images.length > 0) {
      setImages(images);
    }
  };

  const pathFolderOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log('here', e);
    // if (!e?.target?.files[0]?.webkitRelativePath) {
    //   notifyError('Please select a non-empty directory');
    // }
    if (!e.target.files?.length) {
      notifyError('Please select a non-empty directory');
    } else {
      const webKitPath = e.target.files[0]?.path;
      console.log('webkit path: ' + webKitPath);
      if (!webKitPath) {
        return;
      }
      setDestPath(webKitPath.substring(0, webKitPath.lastIndexOf('\\')));
    }
  };
  // async function getFiles(dir, files = []) {
  //   // Get an array of all files and directories in the passed directory using fs.readdirSync
  //   const fileList = await api.readdirS(dir);
  //   // Create the full path of the file/directory by concatenating the passed directory and file/directory name
  //   for (const file of Array.from(fileList)) {
  //     const name = `${dir}\\${file.name}`;
  //     const imageReg = /(?!.*?\/).*?(?:\.(?:jpg|png|jpeg|svg|gif|svg))/g;
  //     const isImage = imageReg.test(file.name);
  //     // Check if the current file/directory is a directory using fs.statSync
  //     if (api.isDirectory(name)) {
  //       // If it is a directory, recursively call the getFiles function with the directory path and the files array
  //       getFiles(name, files);
  //     } else {
  //       // If it is a file, push the full path to the files array
  //       if (isImage) {
  //         files.push(name);
  //       }
  //     }
  //   }
  //   return files;
  // }

  return (
    <>
      <div className="flex items-center gap-6 justify-center w-full mt-5">
        <label
          className="flex items-center justify-center w-[216px] h-[45px] border border-gray-300 border-dashed 
        rounded-lg cursor-pointer 
        bg-gray-100 hover:bg-gray-250 dark:hover:bg-bray-400 dark:bg-gray-500 dark:hover:bg-gray-250
        hover:shadow-lg dark:hover:shadow-gray-400 hover:rotate-44"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10V16M15 13H9M22 10V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H8.66667C9.53215 3 10.3743 3.28071 11.0667 3.8L12.9333 5.2C13.6257 5.71929 14.4679 6 15.3333 6H18C20.2091 6 22 7.79086 22 10Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-gray-500 dark:stroke-gray-400"
            />
          </svg>

          <p className="mb-1 pl-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Select a folder</span>
          </p>
          <input type="file" className="hidden" webkitdirectory="" onChange={folderOnChange} />
        </label>
        <ReactTooltip className="text-white bg-red-500 z-50" id="my-tooltip" />
        <label
          className="flex items-center justify-center w-[216px] h-[45px] border border-gray-300 border-dashed 
        rounded-lg cursor-pointer 
        bg-gray-100 hover:bg-gray-250 dark:hover:bg-bray-400 dark:bg-gray-500 dark:hover:bg-gray-250
        hover:shadow-lg dark:hover:shadow-gray-400 hover:rotate-4"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Select a non-empty folder!"
          data-tooltip-place="top"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5174 15.7525L9.66694 20.812M3.98344 13.807C7.57194 9.61349 12.9774 14.348 9.29194 18.457C5.70394 22.6505 0.298445 17.916 3.98344 13.807ZM14.7079 13.83C18.2959 9.63649 23.7014 14.3715 20.0164 18.4805C16.4279 22.674 11.0229 17.9385 14.7079 13.83ZM16.9369 4.57099C18.7574 4.54449 18.7574 7.40399 16.9369 7.37699C15.1169 7.40349 15.1169 4.54399 16.9369 4.57099Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-gray-500 dark:stroke-gray-400"
            />
            <path
              d="M11.9629 15.8375C12.8139 12.041 12.9644 11.304 8.98644 10.268C8.47644 10.1405 7.28644 9.84305 7.49844 8.99255C8.65594 6.93155 10.7799 6.41705 12.7279 5.63355C15.7974 4.64855 14.0139 9.91855 17.8299 10.8635M9.30844 5.74505C5.53094 8.23655 6.98594 3.56005 10.1349 3.21105C10.9299 3.12255 12.4469 3.25455 12.0899 4.27355C11.8994 4.81855 10.4289 5.00605 9.30844 5.74505Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-gray-500 dark:stroke-gray-400"
            />
            <path
              d="M9.58206 10.3105C9.53956 10.3105 11.6226 7.67454 14.9816 7.46204"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-gray-500 dark:stroke-gray-400"
            />
          </svg>

          <p className="mb-1 pl-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Select a path dest</span>
          </p>
          <input type="file" className="hidden" webkitdirectory="" onChange={pathFolderOnChange} />
        </label>
      </div>
    </>
  );
};
export default FolderForm;
