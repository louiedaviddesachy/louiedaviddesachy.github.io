import { useEffect, useRef } from 'react';

export function WarpedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const gridSize = 40;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      ctx.strokeStyle = 'rgba(155, 241, 255, 0.15)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y <= canvas.height; y += 5) {
          const distX = Math.abs(x - mouseRef.current.x);
          const distY = Math.abs(y - mouseRef.current.y);
          const dist = Math.sqrt(distX * distX + distY * distY);
          const offset = Math.sin(time + dist * 0.01) * 20 * Math.max(0, 1 - dist / 200);
          
          if (y === 0) {
            ctx.moveTo(x + offset, y);
          } else {
            ctx.lineTo(x + offset, y);
          }
        }
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 5) {
          const distX = Math.abs(x - mouseRef.current.x);
          const distY = Math.abs(y - mouseRef.current.y);
          const dist = Math.sqrt(distX * distX + distY * distY);
          const offset = Math.sin(time + dist * 0.01) * 20 * Math.max(0, 1 - dist / 200);
          
          if (x === 0) {
            ctx.moveTo(x, y + offset);
          } else {
            ctx.lineTo(x, y + offset);
          }
        }
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
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
