import PieChart from '@renderer/components/ui/pieChart/PieChart';
import { useAppSelector } from '@renderer/hooks';
import { IImages } from '@shared/types/images.type';
import { getSizeStr } from '@shared/utils/calcSize';
import { FilesInfoProps } from './FilesInfo.props';

const FilesInfo = ({
  filesCount,
  totalSize,
  optimizedSize,
  reductionPercentage,
}: FilesInfoProps): JSX.Element => {
  const size = getSizeStr(totalSize);
  const optSize = getSizeStr(optimizedSize);

  const isAllCompleted = useAppSelector<IImages>((state) => state.images.isAllCompleted);

  return (
    <>
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
          <span
            className={`font-bold text-xl ${
              reductionPercentage > 0 ? 'text-green' : 'text-red-950'
            }`}
          >
            {reductionPercentage + '%'}
          </span>
        </div>
      </div>
      {isAllCompleted && <PieChart before={parseFloat(size)} after={parseFloat(optSize)} />}
    </>
  );
};
export default FilesInfo;
