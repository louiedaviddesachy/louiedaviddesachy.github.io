import { useEffect, useRef } from 'react';

interface FlowParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  history: { x: number; y: number }[];
}

export function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<FlowParticle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particleCount = 100;
    let time = 0;

    const initParticles = () => {
      const particles: FlowParticle[] = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: 0,
          vy: 0,
          history: [],
        });
      }
      particlesRef.current = particles;
    };

    initParticles();

    const animate = () => {
      // Fade effect instead of clear
      ctx.fillStyle = 'rgba(36, 41, 67, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.005;

      particlesRef.current.forEach((particle, i) => {
        // Flow field calculation
        const angle = 
          Math.sin(particle.x * 0.01 + time) * 
          Math.cos(particle.y * 0.01 + time) * 
          Math.PI * 2;

        particle.vx = Math.cos(angle) * 0.5;
        particle.vy = Math.sin(angle) * 0.5;

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Store history
        particle.history.push({ x: particle.x, y: particle.y });
        if (particle.history.length > 20) {
          particle.history.shift();
        }

        // Draw trail
        if (particle.history.length > 1) {
          ctx.beginPath();
          ctx.strokeStyle = i % 2 === 0 
            ? 'rgba(155, 241, 255, 0.3)' 
            : 'rgba(247, 111, 145, 0.3)';
          ctx.lineWidth = 1;
          
          ctx.moveTo(particle.history[0].x, particle.history[0].y);
          for (let j = 1; j < particle.history.length; j++) {
            ctx.lineTo(particle.history[j].x, particle.history[j].y);
          }
          ctx.stroke();
        }
      });

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
