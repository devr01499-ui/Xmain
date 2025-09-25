import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';

const LazyImage = ({ 
  src, 
  alt, 
  sx = {}, 
  quality = 80,
  width = 'auto',
  height = 'auto',
  placeholder = true,
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  // Optimize Unsplash URLs with better parameters
  const getOptimizedSrc = (originalSrc) => {
    if (originalSrc.includes('unsplash.com')) {
      const url = new URL(originalSrc);
      url.searchParams.set('auto', 'format'); // Auto format (WebP when supported)
      url.searchParams.set('q', quality.toString()); // Quality
      url.searchParams.set('fit', 'crop'); // Crop to fit
      url.searchParams.set('w', width === 'auto' ? '800' : width.toString()); // Width
      if (height !== 'auto') {
        url.searchParams.set('h', height.toString()); // Height
      }
      return url.toString();
    }
    return originalSrc;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <Box
      ref={imgRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        ...sx
      }}
      {...props}
    >
      {placeholder && !imageLoaded && !imageError && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '-200% 0' },
              '100%': { backgroundPosition: '200% 0' }
            }
          }}
        />
      )}
      {inView && (
        <img
          src={optimizedSrc}
          alt={alt}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
      {imageError && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            color: '#666',
            fontSize: '0.875rem'
          }}
        >
          Image failed to load
        </Box>
      )}
    </Box>
  );
};

export default LazyImage;
