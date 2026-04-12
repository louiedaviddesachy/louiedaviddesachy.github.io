import { useState } from 'react';
import { ParticleBackground } from './ParticleBackground';
import { WarpedGrid } from './backgrounds/WarpedGrid';
import { FluidWaves } from './backgrounds/FluidWaves';
import { FlowField } from './backgrounds/FlowField';
import { MathSymbols } from './backgrounds/MathSymbols';
import { AnimatedGradient } from './backgrounds/AnimatedGradient';
import { Sparkles } from 'lucide-react';

export type BackgroundType = 'particles' | 'grid' | 'waves' | 'flow' | 'symbols' | 'gradient';

const backgrounds = [
  { id: 'particles' as BackgroundType, name: 'Particles', component: ParticleBackground },
  { id: 'grid' as BackgroundType, name: 'Warped Grid', component: WarpedGrid },
  { id: 'waves' as BackgroundType, name: 'Fluid Waves', component: FluidWaves },
  { id: 'flow' as BackgroundType, name: 'Flow Field', component: FlowField },
  { id: 'symbols' as BackgroundType, name: 'Math Symbols', component: MathSymbols },
  { id: 'gradient' as BackgroundType, name: 'Gradient', component: AnimatedGradient },
];

interface BackgroundSelectorProps {
  currentBackground: BackgroundType;
  onBackgroundChange: (bg: BackgroundType) => void;
}

export function BackgroundSelector({ currentBackground, onBackgroundChange }: BackgroundSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderColor: 'rgba(155, 241, 255, 0.3)',
        }}
        className="p-3 rounded-full border transition-all hover:bg-opacity-20 flex items-center gap-2"
        title="Change background animation"
      >
        <Sparkles className="w-5 h-5" style={{ color: '#9bf1ff' }} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            backgroundColor: 'rgba(36, 41, 67, 0.95)',
            backdropFilter: 'blur(10px)',
            borderColor: 'rgba(155, 241, 255, 0.2)',
          }}
          className="absolute top-16 right-0 border rounded-lg overflow-hidden shadow-2xl min-w-[200px]"
        >
          {backgrounds.map((bg) => (
            <button
              key={bg.id}
              onClick={() => {
                onBackgroundChange(bg.id);
                setIsOpen(false);
              }}
              style={{
                backgroundColor: currentBackground === bg.id 
                  ? 'rgba(155, 241, 255, 0.15)' 
                  : 'transparent',
                borderLeft: currentBackground === bg.id 
                  ? '3px solid #9bf1ff' 
                  : '3px solid transparent',
                color: currentBackground === bg.id ? '#9bf1ff' : '#ffffff',
              }}
              className="w-full px-4 py-3 text-left text-sm hover:bg-opacity-10 transition-all flex items-center gap-2"
            >
              <span className="flex-1">{bg.name}</span>
              {currentBackground === bg.id && (
                <span style={{ color: '#9bf1ff' }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function BackgroundRenderer({ type }: { type: BackgroundType }) {
  const Background = backgrounds.find(bg => bg.id === type)?.component || ParticleBackground;
  return <Background />;
}
