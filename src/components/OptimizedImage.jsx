import React, { useState } from 'react';
import { Box } from '@mui/material';

const OptimizedImage = ({ 
  src, 
  alt, 
  sx = {}, 
  className = '',
  width = '100%',
  height = 'auto',
  quality = 80,
  format = 'webp',
  lazy = true,
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Optimize Unsplash URLs
  const optimizeUnsplashUrl = (url) => {
    if (!url || !url.includes('unsplash.com')) return url;
    
    // Parse existing parameters
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    
    // Set optimized parameters
    params.set('auto', 'format'); // Auto format selection
    params.set('q', quality.toString()); // Quality
    params.set('w', width === '100%' ? '800' : width.toString()); // Width
    params.set('h', height === 'auto' ? '600' : height.toString()); // Height
    params.set('fit', 'crop'); // Crop to fit
    params.set('crop', 'faces,entropy'); // Smart cropping
    
    return `${urlObj.origin}${urlObj.pathname}?${params.toString()}`;
  };

  const optimizedSrc = optimizeUnsplashUrl(src);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        ...sx
      }}
      className={className}
      {...props}
    >
      {!imageError ? (
        <img
          src={optimizedSrc}
          alt={alt}
          loading={lazy ? 'lazy' : 'eager'}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.3s ease-in-out',
            opacity: imageLoaded ? 1 : 0,
            ...sx
          }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '14px'
          }}
        >
          Image not available
        </Box>
      )}
      
      {!imageLoaded && !imageError && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '14px'
          }}
        >
          Loading...
        </Box>
      )}
    </Box>
  );
};

export default OptimizedImage;