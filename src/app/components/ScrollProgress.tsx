import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';

    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    // Update on scroll (throttled with RAF)
    window.addEventListener('scroll', requestTick, { passive: true });
    // Update on resize (content height might change)
    window.addEventListener('resize', requestTick, { passive: true });
    // Initial update
    updateProgress();

    return () => {
      window.removeEventListener('scroll', requestTick);
      window.removeEventListener('resize', requestTick);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 transition-opacity duration-300"
      style={{
        opacity: progress > 0 ? 1 : 0,
      }}
    >
      <div
        className="h-full transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          backgroundColor: 'var(--accent-primary)',
        }}
      />
    </div>
  );
}
