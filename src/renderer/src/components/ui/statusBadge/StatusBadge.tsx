import { StatusType } from '@shared/dtos/img.dto';
import { StatusBadgeProps } from './StatusBadge.props';

const StatusBadge = ({ status }: StatusBadgeProps): JSX.Element => {
  return (
    <div
      className={`p-2 rounded-lg ${
        status === StatusType.notProcessed ? 'bg-orange/25' : 'bg-green/25'
      }`}
    >
      {status}
    </div>
  );
};
export default StatusBadge;
