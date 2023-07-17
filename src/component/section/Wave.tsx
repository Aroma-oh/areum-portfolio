import { useRef, useEffect } from 'react';

interface Wave {
  amplitude: number;
  frequency: number;
  yOffset: number;
  xOffset: number;
}

export const WaveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    let animationFrameId: number;

    if (!canvas || !context) return;

    // 캔버스 크기 설정
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // wave 데이터 생성
    const waves: Wave[] = [
      { amplitude: 40, frequency: 0.01, yOffset: -20, xOffset: 100 },
      { amplitude: 30, frequency: 0.02, yOffset: 40, xOffset: 50 },
      { amplitude: 20, frequency: 0.025, yOffset: 60, xOffset: -10 },
    ];

    const draw = () => {
      if (!context) return;

      // 캔버스 초기화
      context.clearRect(0, 0, canvas.width, canvas.height);

      // wave 생성
      waves.forEach((wave) => {
        context.beginPath();
        context.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + Math.sin((x + wave.xOffset) * wave.frequency) * wave.amplitude * Math.sin(Date.now() * 0.002) + wave.yOffset;
          context.lineTo(x, y);
        }

        context.lineTo(canvas.width, canvas.height);
        context.lineTo(0, canvas.height);
        context.closePath();

        // 그라디언트 추가
        const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(0, 0, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 255, 0)');
        context.fillStyle = gradient;

        // 그리기
        context.fill();

        // xOffset 업데이트
        wave.xOffset += 1; // 이 값은 원하는 속도 및 방향에 따라 조정 가능
      });

      // 애니메이션 프레임 요청
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

  }, []);

  return <canvas ref={canvasRef} />;
};