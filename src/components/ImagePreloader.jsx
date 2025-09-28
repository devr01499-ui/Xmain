import React, { useEffect, useState } from 'react';

const ImagePreloader = ({ images, onComplete }) => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    setTotalImages(images.length);
    let loadedCount = 0;

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadedImages(loadedCount);
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    const preloadAllImages = async () => {
      try {
        await Promise.all(images.map(preloadImage));
        if (onComplete) onComplete();
      } catch (error) {
        console.warn('Some images failed to preload:', error);
        if (onComplete) onComplete();
      }
    };

    preloadAllImages();
  }, [images, onComplete]);

  return null; // This component doesn't render anything
};

export default ImagePreloader;
