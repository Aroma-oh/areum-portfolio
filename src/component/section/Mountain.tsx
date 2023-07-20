import { useRef, useEffect } from 'react';
import { Hill } from '@/component/section/Hill';

export const Mountain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const hills = [
      new Hill('#DFFFD8', 0.2, 12),
      new Hill('#B5F1CC', 0.5, 8),
      new Hill('#95DAC1', 1.2, 6),
    ];

    const devicePixel = window.devicePixelRatio;
    const stageWidth = window.innerWidth;
    const stageHeight = window.innerHeight;

    const handleResize = () => {
      canvas.width = stageWidth * devicePixel;
      canvas.height = stageHeight * devicePixel;

      for (let i = 0; i < hills.length; i++) {
        hills[i].resize(stageWidth, stageHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, stageWidth, stageHeight);
      for (let i = 0; i < hills.length; i++) {
        hills[i].draw(ctx);
      }
      requestAnimationFrame(animate);
    };
    animate();

  }, []);

  return <canvas ref={canvasRef} />
}