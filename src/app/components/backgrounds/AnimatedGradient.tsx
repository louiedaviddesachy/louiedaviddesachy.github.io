import { useEffect, useRef } from 'react';

export function AnimatedGradient() {
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
      time += 0.005;

      // Create animated gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.cos(time) * 100,
        canvas.height / 2 + Math.sin(time) * 100,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.5
      );

      // Animated color stops
      const color1Opacity = 0.1 + Math.sin(time) * 0.05;
      const color2Opacity = 0.15 + Math.cos(time * 1.3) * 0.05;
      const color3Opacity = 0.08 + Math.sin(time * 0.7) * 0.04;

      gradient.addColorStop(0, `rgba(155, 241, 255, ${color1Opacity})`);
      gradient.addColorStop(0.5, `rgba(247, 111, 145, ${color2Opacity})`);
      gradient.addColorStop(1, `rgba(167, 139, 250, ${color3Opacity})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add some animated circles
      for (let i = 0; i < 3; i++) {
        const offset = (i * Math.PI * 2) / 3;
        const x = canvas.width / 2 + Math.cos(time + offset) * 150;
        const y = canvas.height / 2 + Math.sin(time + offset) * 100;
        const radius = 50 + Math.sin(time * 2 + offset) * 20;

        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        circleGradient.addColorStop(0, i === 0 ? 'rgba(155, 241, 255, 0.15)' : i === 1 ? 'rgba(247, 111, 145, 0.15)' : 'rgba(167, 139, 250, 0.15)');
        circleGradient.addColorStop(1, 'rgba(155, 241, 255, 0)');

        ctx.fillStyle = circleGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
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
