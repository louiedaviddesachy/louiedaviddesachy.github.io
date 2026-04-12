import { useEffect, useRef } from 'react';

export function FluidWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      const waves = 4;
      const amplitude = 60;
      const frequency = 0.01;

      for (let i = 0; i < waves; i++) {
        const offset = (i / waves) * Math.PI * 2;
        const opacity = 0.03 + (i * 0.02);
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(155, 241, 255, ${opacity})`;
        ctx.lineWidth = 2;

        for (let x = 0; x <= canvas.width; x += 2) {
          const y = 
            canvas.height / 2 +
            Math.sin(x * frequency + time + offset) * amplitude +
            Math.sin(x * frequency * 2 + time * 1.5 + offset) * (amplitude / 2);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Mirror wave
        ctx.beginPath();
        ctx.strokeStyle = `rgba(247, 111, 145, ${opacity * 0.5})`;
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = 
            canvas.height / 2 -
            Math.sin(x * frequency + time + offset) * amplitude -
            Math.sin(x * frequency * 2 + time * 1.5 + offset) * (amplitude / 2);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
