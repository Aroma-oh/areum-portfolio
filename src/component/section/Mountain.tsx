import { useRef } from 'react';

const Mountain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return <canvas ref={canvasRef} />
}