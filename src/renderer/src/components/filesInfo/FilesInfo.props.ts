import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface FilesInfoProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  filesCount: number;
  totalSize: number;
  optimizedSize: number;
  reductionPercentage: number;
}
