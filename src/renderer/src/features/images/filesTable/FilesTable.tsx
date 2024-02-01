import { IImages } from '@shared/types/images.type';
import { useAppSelector } from '../../../hooks';

import TableRow from './tableRow/TableRow';
import TotalRow from './totalRow/TotalRow';

const FilesTable = (): JSX.Element => {
  const { images } = useAppSelector<IImages>((state) => state.images);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[25px] max-h-64 overflow-y-scroll">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-gray-250 dark:bg-gray-500 dark:text-gray-100">
          <tr>
            <th scope="col" className="text-center px-6 py-3">
              Name
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Type
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Size
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Width
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Height
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Fit
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Convert
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Trim
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {images.map((file, i) => {
            console.log(file);
            return <TableRow key={file.originName + i} originName={file.originName} i={i} />;
          })}
          {images.length > 1 && <TotalRow />}
        </tbody>
      </table>
    </div>
  );
};
export default FilesTable;
