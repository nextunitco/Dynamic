import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);

  const handleError = () => {
    if (!hasFailed && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasFailed(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      loading="lazy"
      className={className}
      {...props}
    />
  );
};
