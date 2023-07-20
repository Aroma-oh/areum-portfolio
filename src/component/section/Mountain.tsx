import { useRef, useEffect } from 'react';

const Mountain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const handleResize = () => {
      const devicePixel = window.devicePixelRatio;
      canvas.width = window.innerWidth * devicePixel;
      canvas.height = window.innerHeight * devicePixel;
      ctx.scale(devicePixel, devicePixel);
    };

    window.addEventListener('resize', handleResize);
    handleResize();


  }, []);

  return <canvas ref={canvasRef} />
}