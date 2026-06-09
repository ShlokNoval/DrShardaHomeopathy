"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  caption: string;
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <ScrollReveal key={i} delay={(i % 6) * 0.08}>
            <div 
              className="group relative rounded-2xl overflow-hidden shadow-sm bg-white card-hover cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <div className="relative aspect-[3/2]">
                <Image src={img.src} alt={img.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-medium text-sm">{img.caption}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors z-10"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] mx-12">
            <Image 
              src={images[selectedIndex].src} 
              alt={images[selectedIndex].caption}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors z-10"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 z-10">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
