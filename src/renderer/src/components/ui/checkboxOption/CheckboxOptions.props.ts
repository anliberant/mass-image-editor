import { DetailedHTMLProps, DivHTMLAttributes } from 'react';

export interface CheckboxOptionsProps
  extends DetailedHTMLProps<DivHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  checkboxValue: boolean;
  checkboxLabel: string;
  inputValue: string | number;
  setInputValue: (value: string | number) => void;
  setCheckboxValue: (value: boolean) => void;
  type: 'text' | 'number';
  max: number;
  min: number;
  step: number;
}
