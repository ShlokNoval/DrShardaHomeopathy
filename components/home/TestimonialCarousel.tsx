"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/testimonials";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback } from "react";
import Link from "next/link";

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const featured = testimonials.slice(0, 8);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Voices of Healing"
          subtitle="Real stories from patients who trusted us with their health"
        />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {featured.map((t) => (
                <div
                  key={t.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3"
                >
                  <div className="bg-cream rounded-2xl p-6 h-full flex flex-col border border-transparent hover:border-secondary/30 transition-colors">
                    {/* Quote icon */}
                    <Quote size={24} className="text-secondary/30 mb-3" />

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={14} className="text-secondary fill-secondary" />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-charcoal text-sm leading-relaxed flex-1 mb-4">
                      &ldquo;{t.review}&rdquo;
                    </p>

                    {/* Patient Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-charcoal font-medium text-sm">
                          {t.name}
                        </p>
                        <p className="text-muted text-xs">
                          Treated for {t.condition}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/testimonials" className="text-primary font-semibold hover:text-primary-light transition-colors">
            Read All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
