import { CanvasHTMLAttributes, DetailedHTMLProps } from 'react';

export interface CanvasProps
  extends DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> {
  width: number;
  height: number;
  draw: () => void;
}
