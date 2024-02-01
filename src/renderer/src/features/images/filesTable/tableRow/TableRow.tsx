import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { ImageDto, StatusType } from '@shared/dtos/img.dto';
import { FormatTypes } from '@shared/types/formats.type';
import { getSizeStr } from '@shared/utils/calcSize';
import { ChangeEvent, useState } from 'react';
import { ImagesState, updateImage } from '../../store/imagesSlice';
import TypeIcon from '../typeIcon/TypeIcon';
import { TableProps } from './TableRow.props';

const TableRow = ({ originName, i }: TableProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { images } = useAppSelector<ImagesState>((state) => state.images);
  const image = images.find((image: ImageDto) => image.originName === originName);

  const {
    name,
    src,
    size,
    format,
    status,
    width,
    height,
    isTrim,
    trimColor,
    fit,
    newSize,
    newWidth,
    newHeight,
  } = image;

  const sizeStr = getSizeStr(size);
  let optimizedSizeStr;
  if (newSize) {
    optimizedSizeStr = getSizeStr(newSize);
  }

  const [newWidthVal, setNewWidthVal] = useState(newWidth || width);
  const [newHeightVal, setNewHeightVal] = useState(newHeight || height);

  const setIsTrim = (): void => {
    dispatch(updateImage(originName, { isTrim: !isTrim }));
  };
  const fitChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    dispatch(updateImage(originName, { fit: e.target.value }));
  };

  const setNewWidth = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewWidthVal(+e.target.value);
    dispatch(updateImage(originName, { newWidth: +e.target.value }));
  };

  const setNewHeight = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewHeightVal(+e.target.value);
    dispatch(updateImage(originName, { newHeight: +e.target.value }));
  };

  const updateImageFormat = (newFormat: string): void => {
    dispatch(updateImage(originName, { newFormat }));
  };

  return (
    <tr
      className={`align-super ${
        i % 2 === 0
          ? 'bg-white border-b dark:bg-gray-450 dark:border-gray-500'
          : 'border-b bg-gray-150 dark:bg-gray-500 dark:border-gray-500'
      }`}
    >
      <th
        scope="row"
        className="flex gap-4 items-center text-center sm:px-1 md:px-2 xl:px-6 py-2 whitespace-nowrap font-medium text-darkdark:text-white align-super"
      >
        <img src={src} width={20} height={20} alt={name} className="rounded-sm" />
        {name > 14 ? name.substring(0, 14) + '...' : name}
      </th>
      <td className="table__row">
        <TypeIcon type={format} />
      </td>
      <td className="table__row flex justify-between">
        {sizeStr}
        {optimizedSizeStr && <span>{'=>'}</span>}
        {optimizedSizeStr && (
          <span className={`${newSize < size ? 'text-green' : 'text-red-950'}`}>
            {optimizedSizeStr}
          </span>
        )}
      </td>
      <td className="table__row">
        <input
          type="number"
          value={newWidth || newWidthVal}
          max={width}
          min={1}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => setNewWidth(e)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="90210"
        />
      </td>
      <td className="table__row">
        <input
          type="number"
          value={newHeight ? newHeight : newHeightVal}
          max={height}
          min={1}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => setNewHeight(e)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="90210"
        />
      </td>
      <td className="table__row">
        <select
          className="text-center border border-gray-300 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-1.5 dark:bg-gray-500 dark:border-gray-600 
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e: ChangeEvent<HTMLSelectElement>): void => fitChange(e)}
          value={fit}
        >
          <option value="cover" default>
            cover
          </option>
          <option value="contain">contain</option>
          <option value="fill">fill</option>
          <option value="inside">inside</option>
          <option value="outside">outside</option>
        </select>
      </td>
      <td className="table__row">
        <select
          className="text-center border border-gray-300 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-1.5 dark:bg-gray-500 dark:border-gray-600 
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e: ChangeEvent<HTMLSelectElement>): void => updateImageFormat(e.target.value)}
          value={image.newFormat || image.format}
        >
          <option value={FormatTypes.JPEG}>jpeg</option>
          <option value={FormatTypes.PNG}>png</option>
          <option value={FormatTypes.WEBP}>webp</option>
          <option value={FormatTypes.JP2}>jp2</option>
          <option value={FormatTypes.TIFF}>tiff</option>
          <option value={FormatTypes.AVIF}>avif</option>
          <option value={FormatTypes.HEIF}>heif</option>
          <option value={FormatTypes.JXL}>jxl</option>
          <option value={FormatTypes.RAW}>raw</option>
        </select>
      </td>
      <td
        className={`flex gap-4 items-center justify-center table__row ${
          status === StatusType.completed ? 'text-green dark:text-green' : ''
        }`}
      >
        <input
          type="checkbox"
          checked={isTrim || false}
          className="w-4 h-4 text-blue-600 bg-gray-100
             border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
             focus:ring-2 dark:bg-gray-500"
          onChange={setIsTrim}
        />
        {isTrim && (
          <input
            type="color"
            value={trimColor}
            className="block w-6 h-6"
            onChange={(e: InputEvent): void =>
              dispatch(updateImage(originName, { trimColor: e.target.value }))
            }
          />
        )}
      </td>
      <td
        className={`table__row ${
          status === StatusType.completed ? 'text-green dark:text-green' : ''
        }`}
      >
        {status}
      </td>
    </tr>
  );
};
export default TableRow;
