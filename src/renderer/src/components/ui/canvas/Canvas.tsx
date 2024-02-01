import { useEffect, useRef } from 'react';
import { CanvasProps } from './Canvas.props';

export default function Canvas({
  height = 150,
  width = 300,
  aVal,
  bVal,
  cVal,
  dVal,
}: CanvasProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.transform(aVal, bVal, cVal, dVal, 0, 0);
      ctx.fillRect(0, 0, 100, 100);
    }
  }, [aVal, bVal, cVal, dVal]);

  return <canvas ref={canvasRef} />;
}
