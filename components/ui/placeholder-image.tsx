"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
}

const gradients = [
  ['#4c1d95', '#8b5cf6'], // Purple
  ['#1d4ed8', '#60a5fa'], // Blue
  ['#047857', '#34d399'], // Green
];

function getGradient(text: string) {
  const index = Math.abs(text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % gradients.length;
  return gradients[index];
}

function generatePlaceholderSVG(text: string, colors: string[]) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
    <svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${text}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad-${text})"/>
      <text
        x="50%"
        y="50%"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="48"
        font-weight="bold"
        fill="white"
        text-anchor="middle"
        dominant-baseline="middle"
      >${text}</text>
    </svg>
  `)}`;
}

export function PlaceholderImage({ src, alt, className = "" }: PlaceholderImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setImageSrc(src);
    setIsError(false);
  }, [src]);

  const handleError = () => {
    if (!isError) {
      setIsError(true);
      setImageSrc(generatePlaceholderSVG(alt, getGradient(alt)));
    }
  };

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: "16/9" }}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover rounded-t-lg transition-all duration-300 group-hover:scale-105"
        onError={handleError}
        unoptimized={imageSrc.startsWith('data:')}
      />
    </div>
  );
} 