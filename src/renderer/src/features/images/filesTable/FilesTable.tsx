import { IImages } from '@shared/types/images.type';
import { useAppSelector } from '../../../hooks';

import styles from './FilesTable.module.css';
import TableRow from './tableRow/TableRow';
import TotalRow from './totalRow/TotalRow';

const FilesTable = (): JSX.Element => {
  const { images } = useAppSelector<IImages>((state) => state.images);

  return (
    <div className={styles.tableContainer}>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-gray-250 dark:bg-gray-500 dark:text-gray-100">
          <tr>
            <th scope="col" className={styles.tableRow}>
              Name
            </th>
            <th scope="col" className={styles.tableRow}>
              Type
            </th>
            <th scope="col" className={styles.tableRow}>
              Size
            </th>
            <th scope="col" className={styles.tableRow}>
              Width
            </th>
            <th scope="col" className={styles.tableRow}>
              Height
            </th>
            <th scope="col" className={styles.tableRow}>
              Fit
            </th>
            <th scope="col" className={styles.tableRow}>
              Convert
            </th>
            <th scope="col" className={styles.tableRow}>
              Trim
            </th>
            <th scope="col" className={styles.tableRow}>
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
