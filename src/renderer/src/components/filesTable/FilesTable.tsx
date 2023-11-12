import { getSizeStr } from '../../../../utils/calcSize';
import { StatusType } from '../../../../dtos/img.dto';
import TypeIcon from './typeIcon/TypeIcon';
import { FilesTableProps } from './FilesTable.props';

const FilesTable = ({ images }: FilesTableProps): JSX.Element => {
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
            const sizeStr = getSizeStr(file.file.size);
            const optimizedSizeStr = getSizeStr(file.newSize || 0);
            return (
              <tr
                key={file.name + i}
                className={`${
                  i % 2 === 0
                    ? 'bg-white border-b dark:bg-gray-450 dark:border-gray-500'
                    : 'border-b bg-gray-150 dark:bg-gray-500 dark:border-gray-500'
                }`}
              >
                <th
                  scope="row"
                  className="flex gap-4 items-center px-6 py-2 font-medium text-dark whitespace-nowrap dark:text-white"
                >
                  <img
                    src={file.image.src}
                    width={20}
                    height={20}
                    alt={file.name}
                    className="rounded-sm"
                  />
                  {file.name > 14 ? file.name.substring(0, 14) + '...' : file.name}
                </th>
                <td className="px-6 py-2 whitespace-nowrap dark:text-white">
                  <TypeIcon type={file.file.type.substring(6, file.file.type.length)} />
                </td>
                <td className="px-6 py-2 whitespace-nowrap dark:text-white">{sizeStr}</td>
                <td className="px-6 py-2 whitespace-nowrap dark:text-white">{optimizedSizeStr}</td>
                <td
                  className={`px-6 py-2 whitespace-nowrap  ${
                    file.status === StatusType.completed ? 'text-green dark:text-green' : ''
                  }`}
                >
                  {file.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default FilesTable;
