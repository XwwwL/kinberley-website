"use client";

import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) {
    return (
      <div className="mb-8 flex aspect-[3/2] items-center justify-center rounded-lg bg-gray-100">
        <span className="text-gray-400">No images</span>
      </div>
    );
  }

  return (
    <div className="mb-8">
      {/* Main viewer */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[current]}
          alt={`${alt} - ${current + 1}`}
          className="w-full aspect-[3/2] object-contain"
        />

        {/* Left arrow */}
        <button
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
          aria-label="Previous image"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
          aria-label="Next image"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {images.length <= 20 && images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === current
                  ? "bg-[#1a3a5c] w-5"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
          {images.length > 20 && (
            <span className="text-xs text-gray-400">
              {current + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
