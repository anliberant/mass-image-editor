import { useAppSelector } from '../../../hooks';

import { getSizeStr } from '../../../../../utils/calcSize';
import TableRow from './tableRow/TableRow';

const FilesTable = (): JSX.Element => {
  const { images } = useAppSelector((state) => state.images);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[25px] max-h-64 overflow-y-scroll">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-gray-250 dark:bg-gray-500 dark:text-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Original size
            </th>
            <th scope="col" className="px-6 py-3">
              Optimized size
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {images.map((file, i) => {
            const sizeStr = getSizeStr(file.size);
            const optimizedSizeStr = getSizeStr(file.newSize);
            return (
              <TableRow
                key={file.name + i}
                name={file.name}
                i={i}
                src={file.src}
                sizeStr={sizeStr}
                optimizedSize={optimizedSizeStr}
                format={file.format}
                status={file.status}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default FilesTable;
