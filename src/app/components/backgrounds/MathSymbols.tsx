import { useEffect, useRef } from 'react';

interface MathSymbol {
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
}

export function MathSymbols() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const symbolsRef = useRef<MathSymbol[]>([]);

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

    const mathSymbols = ['π', 'Σ', '∫', '∂', '∇', '∞', 'α', 'β', 'γ', 'θ', 'λ', 'μ', '∈', '∀', '∃', '≈', '≠', '≤', '≥', '√'];
    const symbolCount = 40;

    const symbols: MathSymbol[] = [];
    for (let i = 0; i < symbolCount; i++) {
      symbols.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        size: 12 + Math.random() * 16,
        opacity: 0.1 + Math.random() * 0.15,
      });
    }
    symbolsRef.current = symbols;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      symbols.forEach((symbol) => {
        // Update position
        symbol.x += symbol.vx;
        symbol.y += symbol.vy;
        symbol.rotation += symbol.rotationSpeed;

        // Bounce off edges
        if (symbol.x < 0 || symbol.x > canvas.width) symbol.vx *= -1;
        if (symbol.y < 0 || symbol.y > canvas.height) symbol.vy *= -1;

        symbol.x = Math.max(0, Math.min(canvas.width, symbol.x));
        symbol.y = Math.max(0, Math.min(canvas.height, symbol.y));

        // Draw symbol
        ctx.save();
        ctx.translate(symbol.x, symbol.y);
        ctx.rotate(symbol.rotation);
        ctx.font = `${symbol.size}px serif`;
        ctx.fillStyle = `rgba(155, 241, 255, ${symbol.opacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(symbol.symbol, 0, 0);
        ctx.restore();
      });

      // Draw connections between nearby symbols
      ctx.strokeStyle = 'rgba(247, 111, 145, 0.08)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < symbols.length; i++) {
        for (let j = i + 1; j < symbols.length; j++) {
          const dx = symbols[i].x - symbols[j].x;
          const dy = symbols[i].y - symbols[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(symbols[i].x, symbols[i].y);
            ctx.lineTo(symbols[j].x, symbols[j].y);
            ctx.stroke();
          }
        }
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
