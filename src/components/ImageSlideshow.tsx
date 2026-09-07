import { useEffect, useState } from 'react';

type ImageSlideshowProps = {
  images: string[];
  className?: string;
  intervalMs?: number;
};

export default function ImageSlideshow({ images, className, intervalMs = 4500 }: ImageSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
          style={{ opacity: i === index ? 1 : 0, transitionDuration: '1200ms' }}
        />
      ))}
    </div>
  );
}
