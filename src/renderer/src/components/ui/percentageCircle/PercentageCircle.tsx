import { PercentageCircleProps } from './PercentageCircle.props';

const PercentageCircle = ({ percent }: PercentageCircleProps): JSX.Element => {
  return (
    <div className={`circle percentage-${Math.floor(percent)}`}>
      <span>{percent} %</span>
      <div className="percentage-bar"></div>
    </div>
  );
};
export default PercentageCircle;
