import { useAppDispatch, useAppSelector } from '../../../hooks';
import { nullImages } from '@renderer/features/images/imagesSlice';
import { ControlsProps } from './Controls.props';

const Controls = ({ setIsUpdated }: ControlsProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { images, destPath } = useAppSelector((state) => state.images);

  const sendImagesList = (): void => {
    images.forEach((image, i) => {
      const imgPath = image.path;
      api.send('image:resize', {
        imgPath,
        dest: destPath,
        width: 100,
        height: 100,
        openDestFolder: i === images.length - 1,
        status: image.status,
      });
      setIsUpdated(true);
    });
  };
  return (
    <div className="w-full flex justify-between mt-[25px]">
      <button
        className="flex items-center py-[10px] px-[12%] bg-red-500 
      dark:bg-white dark:border dark:border-red-500 rounded-xl
      font-medium text-white text-lg hover:bg-red-100 dark:hover:bg-gray-100"
        onClick={(): void => dispatch(nullImages())}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 9.75C15.4142 9.75 15.75 9.41421 15.75 9C15.75 8.58579 15.4142 8.25 15 8.25V9.75ZM9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75V8.25ZM7.6 13.8L7 14.25L7 14.25L7.6 13.8ZM8.8 15.4L9.4 14.95L9.4 14.95L8.8 15.4ZM15.2 15.4L14.6 14.95L14.6 14.95L15.2 15.4ZM16.4 13.8L15.8 13.35L15.8 13.35L16.4 13.8ZM15 8.25H9V9.75H15V8.25ZM21.25 16V19H22.75V16H21.25ZM19 21.25H5V22.75H19V21.25ZM2.75 19V16H1.25V19H2.75ZM5 13.75H6V12.25H5V13.75ZM7 14.25L8.2 15.85L9.4 14.95L8.2 13.35L7 14.25ZM18 13.75H19V12.25H18V13.75ZM15.8 15.85L17 14.25L15.8 13.35L14.6 14.95L15.8 15.85ZM12 17.75C13.4951 17.75 14.9029 17.0461 15.8 15.85L14.6 14.95C13.9862 15.7684 13.023 16.25 12 16.25V17.75ZM18 12.25C17.1344 12.25 16.3193 12.6575 15.8 13.35L17 14.25C17.2361 13.9352 17.6066 13.75 18 13.75V12.25ZM8.2 15.85C9.09706 17.0461 10.5049 17.75 12 17.75V16.25C10.977 16.25 10.0138 15.7684 9.4 14.95L8.2 15.85ZM6 13.75C6.39345 13.75 6.76393 13.9352 7 14.25L8.2 13.35C7.68065 12.6575 6.86558 12.25 6 12.25V13.75ZM5 21.25C3.75736 21.25 2.75 20.2426 2.75 19H1.25C1.25 21.0711 2.92893 22.75 5 22.75V21.25ZM21.25 19C21.25 20.2426 20.2426 21.25 19 21.25V22.75C21.0711 22.75 22.75 21.0711 22.75 19H21.25ZM22.75 16C22.75 13.9289 21.0711 12.25 19 12.25V13.75C20.2426 13.75 21.25 14.7574 21.25 16H22.75ZM2.75 16C2.75 14.7574 3.75736 13.75 5 13.75V12.25C2.92893 12.25 1.25 13.9289 1.25 16H2.75ZM20.75 13V6H19.25V13H20.75ZM16 1.25H8V2.75H16V1.25ZM3.25 6V13H4.75V6H3.25ZM8 1.25C5.37665 1.25 3.25 3.37665 3.25 6H4.75C4.75 4.20507 6.20507 2.75 8 2.75V1.25ZM20.75 6C20.75 3.37665 18.6234 1.25 16 1.25V2.75C17.7949 2.75 19.25 4.20507 19.25 6H20.75Z"
            className="fill-white dark:fill-red-500"
          />
        </svg>
        <span className="pl-[10px] dark:text-red-500">Clear list</span>
      </button>
      <button
        className="flex items-center py-[10px] px-[12%] bg-blue-200 
      dark:bg-white dark:border dark:border-blue-200 rounded-xl
      font-medium text-white text-lg hover:bg-blue-100 dark:hover:bg-gray-100"
        onClick={sendImagesList}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 15.5179V8.48207C7 6.93849 8.67443 5.97675 10.0077 6.75451L16.0385 10.2724C17.3615 11.0442 17.3615 12.9558 16.0385 13.7276L10.0077 17.2455C8.67443 18.0232 7 17.0615 7 15.5179Z"
            className="stroke-white dark:stroke-blue-200"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        <span className="pl-[8px] dark:text-blue-200">Optimize</span>
      </button>
    </div>
  );
};
export default Controls;
