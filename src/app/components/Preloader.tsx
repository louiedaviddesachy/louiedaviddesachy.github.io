import { useEffect, useState } from 'react';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Check if preloader was already shown in this session
    const hasSeenPreloader = sessionStorage.getItem('preloader-shown');
    
    if (hasSeenPreloader) {
      setIsVisible(false);
      return;
    }

    // Mark as shown for this session
    sessionStorage.setItem('preloader-shown', 'true');

    // Start fade out after animation completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: '#242943' }}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className={isAnimating ? 'preloader-svg' : 'preloader-svg-fadeout'}
      >
        {/* Pi symbol that morphs into brain */}
        <path
          id="pi-morph"
          d="M 30 35 L 30 30 L 90 30 L 90 35 L 70 35 L 70 90 L 65 90 L 65 35 L 55 35 L 55 90 L 50 90 L 50 35 L 30 35 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .preloader-svg, .preloader-svg-fadeout {
            animation: none !important;
          }
        }

        .preloader-svg {
          animation: preloader-sequence 1.6s ease-in-out forwards;
        }

        .preloader-svg-fadeout {
          animation: preloader-fadeout 0.3s ease-out forwards;
        }

        .preloader-svg #pi-morph {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw-pi 0.8s ease-out forwards,
                     morph-to-brain 0.5s ease-in-out 0.8s forwards;
        }

        @keyframes draw-pi {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes morph-to-brain {
          0% {
            d: path("M 30 35 L 30 30 L 90 30 L 90 35 L 70 35 L 70 90 L 65 90 L 65 35 L 55 35 L 55 90 L 50 90 L 50 35 L 30 35 Z");
          }
          50% {
            d: path("M 35 40 Q 30 35 35 30 Q 45 25 60 25 Q 75 25 85 30 Q 90 35 85 40 Q 80 45 75 50 Q 70 55 60 55 Q 50 55 45 50 Q 40 45 35 40 M 40 60 Q 38 70 42 80 Q 50 90 60 88 Q 70 90 78 80 Q 82 70 80 60 Z");
          }
          100% {
            d: path("M 35 45 Q 30 38 38 32 Q 48 28 60 28 Q 72 28 82 32 Q 90 38 85 45 Q 80 50 75 54 L 70 58 Q 65 60 60 60 Q 55 60 50 58 L 45 54 Q 40 50 35 45 M 42 65 Q 40 72 44 78 Q 50 85 60 86 Q 70 85 76 78 Q 80 72 78 65 Q 75 60 70 62 Q 65 63 60 63 Q 55 63 50 62 Q 45 60 42 65 Z");
          }
        }

        @keyframes preloader-sequence {
          0%, 81.25% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0;
          }
        }

        @keyframes preloader-fadeout {
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
