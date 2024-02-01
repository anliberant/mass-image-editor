import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface OptionsDescriptorProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isChecked: boolean;
}
