import { useState, useEffect, useCallback } from 'react';

interface UseImageSliderOptions {
  images: string[];
  autoSlide?: boolean;
  interval?: number;
  pauseOnHover?: boolean;
}

interface UseImageSliderReturn {
  currentIndex: number;
  currentImage: string;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
}

export const useImageSlider = ({
  images,
  autoSlide = true,
  interval = 3000,
  pauseOnHover = true,
}: UseImageSliderOptions): UseImageSliderReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoSlide);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  }, [images.length]);

  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const intervalId = setInterval(nextSlide, interval);
    return () => clearInterval(intervalId);
  }, [isPlaying, interval, nextSlide, images.length]);

  const currentImage = images[currentIndex] || '';

  return {
    currentIndex,
    currentImage,
    nextSlide,
    prevSlide,
    goToSlide,
    isPlaying,
    play,
    pause,
    toggle,
  };
};
