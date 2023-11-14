import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface OptionsProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setDestNameFolder: (path: string) => void;
  destNameFolder: string;
}
