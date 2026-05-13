// Image de fond géométrique - motif de cubes style Escher depuis Unsplash
const friezeImage = "https://images.unsplash.com/photo-1689773890385-4dc5aa100366?w=1920&q=80";

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
