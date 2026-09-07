import { useEffect, useRef, useState } from 'react';

type FadingVideoProps = {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
};

function fadeTo(video: HTMLVideoElement, target: number, duration: number) {
  const start = performance.now();
  const initial = parseFloat(video.style.opacity || (target === 1 ? '0' : '1'));

  function step(now: number) {
    const elapsed = now - start;
    const t = Math.min(elapsed / duration, 1);
    video.style.opacity = String(initial + (target - initial) * t);
    if (t < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeOutTriggered = useRef(false);
  const [index, setIndex] = useState(0);

  const sources = Array.isArray(src) ? src : [src];
  const currentSrc = sources[index % sources.length];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';
    fadeOutTriggered.current = false;

    const handleLoadedData = () => {
      fadeTo(video, 1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && !fadeOutTriggered.current) {
        fadeOutTriggered.current = true;
        fadeTo(video, 0, 550);
      }
    };

    const handleEnded = () => {
      if (sources.length > 1) {
        setIndex((i) => (i + 1) % sources.length);
        return;
      }
      fadeOutTriggered.current = false;
      video.currentTime = 0;
      video.play().catch(() => {});
      fadeTo(video, 1, 500);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    video.load();
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSrc]);

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
}
