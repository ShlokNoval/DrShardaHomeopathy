"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Data ---
const cases = [
  { id: 1, beforeImg: "/results/before/1.jpeg", afterImg: "/results/after/1.png", condition: "Psoriasis Recovery" },
  { id: 2, beforeImg: "/results/before/2.jpeg", afterImg: "/results/after/2.png", condition: "Severe Eczema" },
  { id: 3, beforeImg: "/results/before/3.jpeg", afterImg: "/results/after/3.png", condition: "Hair Fall & Regrowth" },
  { id: 4, beforeImg: "/results/before/4.jpeg", afterImg: "/results/after/4.png", condition: "Acne Treatment" },
  { id: 5, beforeImg: "/results/before/5.jpeg", afterImg: "/results/after/5.png", condition: "Vitiligo Pigmentation" },
];

// --- Compare Slider Component ---
interface CompareSliderProps {
  beforeImg: string;
  afterImg: string;
  condition: string;
}

function CompareSlider({ beforeImg, afterImg, condition }: CompareSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setPosition(percent);
  }, []);

  useEffect(() => {
    const handleNode = handleRef.current;
    if (!handleNode) return;

    const onPointerDown = (e: PointerEvent) => {
      e.stopPropagation(); // Stop Embla carousel drag
      e.preventDefault();
      isDragging.current = true;
      handleNode.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      handleNode.releasePointerCapture(e.pointerId);
    };

    handleNode.addEventListener("pointerdown", onPointerDown);
    handleNode.addEventListener("pointermove", onPointerMove);
    handleNode.addEventListener("pointerup", onPointerUp);
    handleNode.addEventListener("pointercancel", onPointerUp);

    return () => {
      handleNode.removeEventListener("pointerdown", onPointerDown);
      handleNode.removeEventListener("pointermove", onPointerMove);
      handleNode.removeEventListener("pointerup", onPointerUp);
      handleNode.removeEventListener("pointercancel", onPointerUp);
    };
  }, [handleMove]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[680px] aspect-[680/380] mx-auto rounded-2xl overflow-hidden shadow-2xl select-none group bg-[#FAF8F3]"
    >
      {/* Before Image Container */}
      <div className="absolute inset-0 w-full h-full bg-[#0F3D22] overflow-hidden">
        {/* Blurred Ambient Background to fill empty space */}
        <Image src={beforeImg} alt="" fill className="object-cover opacity-40 blur-2xl scale-110 brightness-50" aria-hidden="true" sizes="(max-width: 768px) 100vw, 680px" />
        {/* Uncropped Foreground Image */}
        <Image src={beforeImg} alt="Before treatment" fill className="object-contain" draggable={false} sizes="(max-width: 768px) 100vw, 680px" priority />
        <div className="absolute top-[12px] left-[12px] bg-[#2D2D2D] text-white rounded-[6px] px-3 py-1 font-bold tracking-[0.08em] text-[11px] z-10 shadow-sm pointer-events-none">
          BEFORE
        </div>
      </div>

      {/* After Image Container (Foreground, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#0F3D22] overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        {/* Blurred Ambient Background to fill empty space */}
        <Image src={afterImg} alt="" fill className="object-cover opacity-40 blur-2xl scale-110 brightness-50" aria-hidden="true" sizes="(max-width: 768px) 100vw, 680px" />
        {/* Uncropped Foreground Image */}
        <Image src={afterImg} alt="After treatment" fill className="object-contain" draggable={false} sizes="(max-width: 768px) 100vw, 680px" priority />
        {/* AFTER Badge moves with the slider handle so it stays 12px from the left edge of its visible half */}
        <div 
          className="absolute top-[12px] bg-[#1B5E35] text-white rounded-[6px] px-3 py-1 font-bold tracking-[0.08em] text-[11px] z-10 shadow-sm pointer-events-none"
          style={{ left: `calc(${position}% + 12px)` }}
        >
          AFTER
        </div>
      </div>

      {/* Slider Handle Area (Wider for easy grabbing) */}
      <div 
        ref={handleRef}
        className="absolute top-0 bottom-0 w-12 flex items-center justify-center cursor-ew-resize z-30 touch-none"
        style={{ left: `calc(${position}% - 24px)` }}
      >
        <div className="absolute top-0 bottom-0 w-[2px] bg-[rgba(201,150,58,0.6)]"></div>
        <div className="w-10 h-10 rounded-full bg-[#C9963A] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-transform hover:scale-110 active:scale-95 z-10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 17l-5-5 5-5" />
            <path d="M13 7l5 5-5 5" />
          </svg>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-[rgba(0,0,0,0.35)] backdrop-blur-[2px] flex items-center justify-between px-4 z-40 pointer-events-none">
        <span className="text-[11px] text-white/85 font-medium tracking-wide truncate pr-4">
          Condition: {condition}
        </span>
        <span className="text-[11px] text-[#4ADE80] flex items-center font-bold tracking-wide whitespace-nowrap">
          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          Verified Result
        </span>
      </div>
    </div>
  );
}

// --- Main Slider Component ---
export default function BeforeAfterSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-[#0F3D22] py-20 sm:py-28 overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#C9963A] rounded-full blur-[120px] opacity-[0.08] z-0 pointer-events-none"></div>
      
      {/* Faint Botanical Sprig (Inline SVG) */}
      <div className="absolute bottom-0 left-0 w-64 h-64 text-white opacity-[0.03] z-0 pointer-events-none -translate-x-1/4 translate-y-1/4 transform rotate-12">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 100 C 50 80, 40 60, 20 50 C 40 45, 45 25, 50 0 C 55 25, 60 45, 80 50 C 60 60, 50 80, 50 100 Z" />
          <path d="M50 80 C 70 70, 85 50, 95 20 C 75 35, 55 45, 50 80 Z" />
          <path d="M50 80 C 30 70, 15 50, 5 20 C 25 35, 45 45, 50 80 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
            Real Results, Real People
          </h2>
          <div className="space-y-3">
            <p className="text-[14px] text-[#FAF8F3] font-medium leading-relaxed">
              Documented results from Dr. Sharda&apos;s patients — real skin, real healing.
            </p>
            <div className="relative pt-3 border-t border-[#C9963A]/20">
              <p className="text-[10px] text-white/50 italic tracking-wide">
                &#9432; Results may vary. Identities anonymized. Shared with patient consent.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative max-w-[1200px] mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-8 py-4 px-2">
              {cases.map((c) => (
                <div
                  key={c.id}
                  className="flex-[0_0_90%] sm:flex-[0_0_auto] sm:w-[680px] min-w-0"
                >
                  <CompareSlider beforeImg={c.beforeImg} afterImg={c.afterImg} condition={c.condition} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button 
            onClick={scrollPrev} 
            className="absolute -left-2 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0F3D22] text-[#C9963A] border-2 border-[#C9963A] flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:bg-[#C9963A] hover:text-[#0F3D22] transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] z-30 focus:outline-none" 
            aria-label="Previous case"
          >
            <ChevronLeft size={32} className="mr-1" />
          </button>
          <button 
            onClick={scrollNext} 
            className="absolute -right-2 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0F3D22] text-[#C9963A] border-2 border-[#C9963A] flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:bg-[#C9963A] hover:text-[#0F3D22] transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] z-30 focus:outline-none" 
            aria-label="Next case"
          >
            <ChevronRight size={32} className="ml-1" />
          </button>

          {/* Indicators */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <div className="flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "w-8 bg-[#C9963A]" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
            <div className="text-[#C9963A] font-medium text-sm tracking-widest font-playfair">
              {selectedIndex + 1} / {cases.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
