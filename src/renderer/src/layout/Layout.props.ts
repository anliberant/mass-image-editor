import { DetailedHTMLProps, ReactNode, DivHTMLAttributes } from 'react';

export interface LayoutProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
