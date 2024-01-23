import { useAppDispatch, useAppSelector } from '@renderer/hooks';
import { ChangeEvent, useEffect, useState } from 'react';
import { ImageDto } from 'src/dtos/img.dto';
import { getSizeStr } from '../../../../../../utils/calcSize';
import { ImagesState, updateImage } from '../../imagesSlice';

const TotalRow = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { images, totalSize, optimizedSize, maxWidth, maxHeight } = useAppSelector<ImagesState>(
    (store) => store.images
  );

  const [trimAllChecked, setTrimAllChecked] = useState(false);
  const [allResize, setAllResize] = useState('100%');

  // let maxWidth;
  // let maxHeight;
  // images.map((image) => {
  //   if (image.width > maxWidth) {
  //     maxWidth = image.width;
  //   }
  //   if (image.height > maxHeight) {
  //     maxHeight = image.height;
  //   }
  // });

  console.log('max width: ' + maxWidth);
  console.log('max height: ' + maxHeight);

  const [allWidth, setAllWidth] = useState(maxWidth);
  const [allHeight, setAllHeight] = useState(maxHeight);
  console.log('allWidth: ' + allWidth);
  console.log('allHeight: ' + allHeight);

  const fitChangeToAll = (e: ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    images.forEach((img: ImageDto) => {
      dispatch(updateImage(img.originName, { fit: e.target.value }));
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
    <tr className={`${'border-b bg-gray-150 dark:bg-gray-500 dark:border-gray-500'}`}>
      <th
        scope="row"
        className="flex gap-4 items-center sm:px-1 md:px-2 xl:px-6 py-2 whitespace-nowrap  font-medium text-darkdark:text-white"
      >
        Total {images.length} images
      </th>
      <td className="hidden md:table-cell sm:px-1 md:px-2 xl:px-6 py-2 whitespace-nowrap dark:text-white"></td>

      <td className="sm:px-1 md:px-2 xl:px-6 py-2 whitespace-nowrap  dark:text-white flex justify-between">
        {totalSizeStr}
        {optSizeStr && <span>{'=>'}</span>}
        {optSizeStr && (
          <span className={`${optimizedSize < totalSize ? 'text-green' : 'text-red-950'}`}>
            {optSizeStr}
          </span>
        )}
      </td>
      <td className="sm:px-1 md:px-2 xl:px-6 py-2 whitespace-nowrap dark:text-white">
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
      <td className="sm:px-1 md:px-2 xl:px-6 py-2 whitespace-nowrap dark:text-white">
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

      <td className={`sm:px-1 md:px-2 xl:px-6 py-2 whitespace-nowrap`}>
        <select
          className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500
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
      <td className={`sm:px-1 md:px-2 xl:px-6 py-2 whitespace-nowrap`}>
        <input
          type="checkbox"
          checked={trimAllChecked || false}
          className="w-4 h-4 text-blue-600 bg-gray-100
             border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
             focus:ring-2 dark:bg-gray-500"
          onChange={setAllToTrim}
        />
      </td>
      <td className="hidden md:table-cell sm:px-1 md:px-2 xl:px-6 py-2 whitespace-nowrap dark:text-white"></td>
    </tr>
  );
};
export default TotalRow;
