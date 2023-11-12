import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface ControlsProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  clearImagesList: () => void;
  sendImagesList: () => void;
  allOptimized: boolean;
}
