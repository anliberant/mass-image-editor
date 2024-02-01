import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

import { TabStatusType } from '../../../../shared/dtos/img.dto';

export interface TabsProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tabStatus: TabStatusType;
  setTabStatus: (value: TabStatusType) => void;
}
