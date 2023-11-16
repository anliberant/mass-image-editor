import { StatusType } from '../../../../../../dtos/img.dto';
import TypeIcon from '../typeIcon/TypeIcon';
import { TableProps } from './TableRow.props';

const TableRow = ({
  name,
  i,
  src,
  sizeStr,
  optimizedSizeStr,
  format,
  status,
}: TableProps): JSX.Element => {
  return (
    <tr
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
        <img src={src} width={20} height={20} alt={name} className="rounded-sm" />
        {name > 14 ? name.substring(0, 14) + '...' : name}
      </th>
      <td className="px-6 py-2 whitespace-nowrap dark:text-white">
        <TypeIcon type={format} />
      </td>
      <td className="px-6 py-2 whitespace-nowrap dark:text-white">{sizeStr}</td>
      <td className="px-6 py-2 whitespace-nowrap dark:text-white">{optimizedSizeStr}</td>
      <td
        className={`px-6 py-2 whitespace-nowrap  ${
          status === StatusType.completed ? 'text-green dark:text-green' : ''
        }`}
      >
        {status}
      </td>
    </tr>
  );
};
export default TableRow;
