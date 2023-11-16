import { getSizeStr } from '../../../../../utils/calcSize';
import { FilesInfoProps } from './FilesInfo.props';

const FilesInfo = ({
  filesCount,
  totalSize,
  optimizedSize,
  reductionPercentage,
}: FilesInfoProps): JSX.Element => {
  const size = getSizeStr(totalSize);
  const optSize = getSizeStr(optimizedSize);
  return (
    <div className="mt-[25px] w-full flex justify-between font-inter">
      <div className="info-badge info-badge__first">
        <span className="font-medium">Images:</span>
        <span className="font-bold text-xl">{filesCount}</span>
      </div>
      <div className="info-badge">
        <span className="font-medium">Original:</span>
        <span className="font-bold text-xl">{size}</span>
      </div>
      <div className="info-badge">
        <span className="font-medium">Optimized:</span>
        <span className="font-bold text-xl"> {optSize}</span>
      </div>
      <div className="info-badge info-badge__last">
        <span className="font-medium">Reduction:</span>
        <span className={`font-bold text-xl text-green`}>{reductionPercentage + '%'}</span>
      </div>
    </div>
  );
};
export default FilesInfo;
