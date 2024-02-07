import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonType = 'optimize' | 'clear' | 'save' | 'reset';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: ButtonType;
  disabled: boolean;
}
