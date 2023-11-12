import { DetailedHTMLProps, ReactNode, DivHTMLAttributes } from 'react';

export interface ProvidersProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
