import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface StatusBadgeProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  status: string;
}
