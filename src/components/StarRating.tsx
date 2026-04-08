"use client";

import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  className?: string;
}

export default function StarRating({ 
  rating, 
  maxStars = 5, 
  size = 16,
  className = "" 
}: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: maxStars }).map((_, i) => {
        const starValue = i + 1;
        const isFull = starValue <= Math.floor(rating);
        const isHalf = !isFull && starValue <= Math.ceil(rating) && rating % 1 !== 0;

        return (
          <div key={i} className="relative">
            {isFull ? (
              <Star 
                size={size} 
                fill="currentColor" 
                className="text-gold-400 drop-shadow-[0_0_8px_rgba(233,195,73,0.5)]" 
              />
            ) : isHalf ? (
              <div className="relative">
                <Star size={size} className="text-outline-variant/30" />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                   <Star 
                    size={size} 
                    fill="currentColor" 
                    className="text-gold-400 drop-shadow-[0_0_8px_rgba(233,195,73,0.5)]" 
                  />
                </div>
              </div>
            ) : (
              <Star size={size} className="text-outline-variant/30" />
            )}
          </div>
        );
      })}
    </div>
  );
}
