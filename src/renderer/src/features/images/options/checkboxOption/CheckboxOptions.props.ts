import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface CheckboxOptionsProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  checkboxValue: boolean;
  checkboxLabel: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  setCheckboxValue: (value: boolean) => void;
}
