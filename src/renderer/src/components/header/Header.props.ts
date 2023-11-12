import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

import { ImageFileDto } from 'src/dtos/img.dto';

export interface HeaderProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setImages: (files: ImageFileDto[]) => void;
  setDestPath: (path: string) => void;
}
