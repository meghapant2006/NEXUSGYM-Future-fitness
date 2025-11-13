"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
  fallbackSrc?: string
  width?: number
  height?: number
  onError?: () => void
  onLoad?: () => void
}

export default function OptimizedImage({ 
  src, 
  alt, 
  fill, 
  className, 
  priority, 
  fallbackSrc,
  width,
  height,
  onError,
  onLoad
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  
  const fallbackImages = [
    fallbackSrc,
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ].filter(Boolean)
  
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0)
  const currentSrc = imageError && fallbackImages[currentSrcIndex + 1] 
    ? fallbackImages[currentSrcIndex + 1] 
    : src

  const handleError = () => {
    if (currentSrcIndex < fallbackImages.length - 1) {
      setCurrentSrcIndex(prev => prev + 1)
      setImageError(false)
    } else {
      setImageError(true)
    }
    onError?.()
  }

  const handleLoad = () => {
    setImageLoading(false)
    onLoad?.()
  }

  if (imageError && currentSrcIndex >= fallbackImages.length - 1) {
    return (
      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 ${className} flex items-center justify-center`}>
        <div className="text-gray-400 text-center p-4">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-700 flex items-center justify-center">
            🏋️‍♂️
          </div>
          <div className="text-sm">{alt}</div>
        </div>
      </div>
    )
  }

  return (
    <>
      {imageLoading && (
        <div className={`absolute inset-0 bg-gray-800 animate-pulse ${className}`}>
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800"></div>
        </div>
      )}
      <Image
        src={currentSrc || src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onError={handleError}
        onLoad={handleLoad}
        style={{ opacity: imageLoading ? 0 : 1 }}
      />
    </>
  )
}