import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

import { ImageFileDto } from 'src/dtos/img.dto';

export interface FilesTableProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  files: ImageFileDto[];
}
