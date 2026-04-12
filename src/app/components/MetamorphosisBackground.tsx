// Image de fond géométrique pour le build de production
const friezeImage = "/escher-pattern.svg";

export function MetamorphosisBackground() {
  return (
    <div
      role="img"
      aria-label="Geometric pattern background"
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundImage: `url(${friezeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.15,
        filter: 'blur(1px)',
      }}
    />
  );
}