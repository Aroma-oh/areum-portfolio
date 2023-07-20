import { useRef, useEffect } from 'react';
import { Hill } from '@/component/section/intro/Hill';

export const Mountain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const hills = [
      new Hill('#DFFFD8', 0.5, 12),
      new Hill('#B5F1CC', 1, 8),
      new Hill('#95DAC1', 2, 6),
    ];

    const handleResize = () => {
      const stageWidth = document.body.clientWidth;
      const stageHeight = window.innerHeight;

      canvas.width = stageWidth;
      canvas.height = stageHeight;

      for (const hill of hills) {
        hill.resize(stageWidth, stageHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < hills.length; i++) {
        hills[i].draw(ctx);
      }
      requestAnimationFrame(animate);
    };
    animate();

  }, []);

  return <canvas ref={canvasRef} />
}