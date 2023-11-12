import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface ImgFormProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setImages: (files: File[]) => void;
}
