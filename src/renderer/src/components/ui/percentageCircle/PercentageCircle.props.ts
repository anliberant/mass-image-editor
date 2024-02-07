import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface PercentageCircleProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  percent: number;
}
