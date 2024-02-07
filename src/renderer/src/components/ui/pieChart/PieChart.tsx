import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChartProps } from './PieChart.props';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ before, after }: PieChartProps): JSX.Element => {
  const data = {
    labels: ['After', 'Before'],
    datasets: [
      {
        label: 'Size',
        data: [after, before],
        backgroundColor: ['rgba(32, 116, 172, 1)', 'rgba(166, 206, 227, 1)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1.5,
        offset: 20,
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="mt-[25px] flex justify-around items-center">
      <div className="flex gap-1 items-center">
        <span className="rounded-full w-5 h-5 bg-blue-50 inline-block"></span> Before
      </div>
      <div className="w-48 h-48 inline-block">
        <Pie data={data} options={options} />
      </div>
      <div className="flex gap-1 items-center">
        <span className="rounded-full w-5 h-5 bg-blue-150 inline-block"></span> After
      </div>
    </div>
  );
};
export default PieChart;
