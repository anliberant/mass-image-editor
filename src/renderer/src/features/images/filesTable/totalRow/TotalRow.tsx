import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { ImageDto } from '@shared/dtos/img.dto';
import { FormatTypes } from '@shared/types/formats.type';
import { IImages } from '@shared/types/images.type';
import { getSizeStr } from '@shared/utils/calcSize';
import { ChangeEvent, useEffect, useState } from 'react';
import { updateImage } from '../../store/imagesSlice';

const TotalRow = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { images, totalSize, optimizedSize, maxWidth, maxHeight } = useAppSelector<IImages>(
    (store) => store.images
  );

  const [trimAllChecked, setTrimAllChecked] = useState(false);
  const [allResize, setAllResize] = useState('100%');
  const [trimAllColor, setTrimAllColor] = useState('#ffffff');
  const [allWidth, setAllWidth] = useState(maxWidth);
  const [allHeight, setAllHeight] = useState(maxHeight);

  const fitChangeToAll = (e: ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    images.forEach((img: ImageDto) => {
      dispatch(updateImage(img.originName, { fit: e.target.value }));
    });
  };

  const updateImageFormatToAll = (newFormat: string): void => {
    images.forEach((img: ImageDto) => {
      dispatch(updateImage(img.originName, { newFormat }));
    });
  };

  const totalSizeStr = getSizeStr(totalSize);
  let optSizeStr;
  if (optimizedSize) {
    optSizeStr = getSizeStr(optimizedSize);
  }

  const formatChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    images.forEach((image: ImageDto) => {
      //@ts-expect-error:method with premade
      dispatch(updateImage(image.name, { newFormat: e.target.value }));
    });
  };

  const setAllToTrim = (): void => {
    images.forEach((image: ImageDto) => {
      //@ts-expect-error:method with premade
      dispatch(updateImage(image.originName, { isTrim: !trimAllChecked }));
    });
    setTrimAllChecked((trimAllChecked) => !trimAllChecked);
  };

  const setAllTrimColor = (e: InputEvent): void => {
    setTrimAllColor(e.target.value);
    images.forEach((image: ImageDto) => {
      dispatch(updateImage(image.originName, { trimColor: e.target.value }));
    });
  };

  const setNewWidthToAll = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setAllWidth(+e.target.value);
    images.forEach((image: ImageDto) => {
      if (image.width > +e.target.value) {
        dispatch(updateImage(image.originName, { newWidth: +e.target.value }));
      } else {
        dispatch(updateImage(image.originName, { newWidth: image.width }));
      }
    });
  };

  const setNewHeightToAll = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setAllHeight(+e.target.value);
    images.forEach((image: ImageDto) => {
      if (image.height > +e.target.value) {
        dispatch(updateImage(image.originName, { newHeight: +e.target.value }));
      } else {
        dispatch(updateImage(image.originName, { newHeight: image.height }));
      }
    });
  };

  const resizeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.value === 'custom') {
      dispatch(setNewSizeForName('all'));
    } else {
      dispatch(setNewSizeForName('none'));
      images.forEach((image: ImageDto) => {
        dispatch(
          // @ts-expect-error:method with premade
          updateImage(image.name, {
            resize: e.target.value,
          })
        );
      });
    }
    setAllResize(e.target.value);
  };

  useEffect(() => {
    if (allWidth === maxWidth) {
      return;
    }
    setAllWidth(maxWidth);
    if (allHeight === maxHeight) {
      return;
    }
    setAllHeight(maxHeight);
  }, [maxWidth, maxHeight]);

  return (
    <tr
      className={`${'border-b bg-gray-150 dark:bg-gray-500 dark:border-gray-500'} align-baseline`}
    >
      <th
        scope="row"
        className="flex gap-4 items-center text-center sm:px-1 md:px-2 xl:px-6 py-2 whitespace-nowrap  font-medium text-dark dark:text-white"
      >
        Total {images.length} images
      </th>
      <td className="md:table-cell table__row"></td>

      <td className="table__row flex justify-between">
        {totalSizeStr}
        {optSizeStr && <span>{'=>'}</span>}
        {optSizeStr && (
          <span className={`${optimizedSize < totalSize ? 'text-green' : 'text-red-950'}`}>
            {optSizeStr}
          </span>
        )}
      </td>
      <td className="table__row">
        <input
          type="number"
          value={allWidth}
          max={maxWidth}
          min={1}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => setNewWidthToAll(e)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Set new Width"
        />
      </td>
      <td className="table__row">
        <input
          type="number"
          value={allHeight}
          max={maxHeight}
          min={1}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => setNewHeightToAll(e)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Set new Height"
        />
      </td>

      <td className={`table__row`}>
        <select
          className="text-center border border-gray-300 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-1.5 dark:bg-gray-500 dark:border-gray-600 
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e: ChangeEvent<HTMLSelectElement>): void => fitChangeToAll(e)}
        >
          <option value="inside" default>
            inside
          </option>
          <option value="cover">cover</option>
          <option value="contain">contain</option>
          <option value="fill">fill</option>
          <option value="outside">outside</option>
        </select>
      </td>
      <td className="table__row">
        <select
          className="text-center border border-gray-300 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-1.5 dark:bg-gray-500 dark:border-gray-600 
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
            updateImageFormatToAll(e.target.value)
          }
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
      <td className={`flex gap-4 items-center justify-center table__row `}>
        <input
          type="checkbox"
          checked={trimAllChecked}
          className="w-4 h-4 text-blue-600 bg-gray-100
             border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
             focus:ring-2 dark:bg-gray-500"
          onChange={setAllToTrim}
        />
        {trimAllChecked && (
          <input
            type="color"
            value={trimAllColor}
            className="block w-6 h-6"
            onChange={(e: InputEvent): void => setAllTrimColor(e)}
          />
        )}
      </td>

      <td className="md:table-cell table__row"></td>
    </tr>
  );
};
export default TotalRow;
