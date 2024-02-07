import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface PieChartProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  before: number;
  after: number;
}
