import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface ControlsProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setIsUpdated: (bool: boolean) => void;
}
