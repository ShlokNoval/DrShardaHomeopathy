"use client";

import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

const cases = [
  { condition: "Psoriasis", patient: "Male, 38 years", duration: "4 months treatment", result: "70% patch reduction, significant itch relief, improved quality of life.", beforeImg: "https://picsum.photos/400/300?random=21", afterImg: "https://picsum.photos/400/300?random=22" },
  { condition: "Eczema (Child)", patient: "Female, 5 years", duration: "3 months treatment", result: "Complete clearing of patches, no recurrence in 6 months.", beforeImg: "https://picsum.photos/400/300?random=23", afterImg: "https://picsum.photos/400/300?random=24" },
  { condition: "Hair Fall", patient: "Female, 32 years", duration: "5 months treatment", result: "Hair fall stopped, visible regrowth observed, improved hair density.", beforeImg: "https://picsum.photos/400/300?random=25", afterImg: "https://picsum.photos/400/300?random=26" },
  { condition: "Acne", patient: "Female, 22 years", duration: "3 months treatment", result: "Cystic acne cleared, skin texture improved significantly.", beforeImg: "https://picsum.photos/400/300?random=27", afterImg: "https://picsum.photos/400/300?random=28" },
  { condition: "Vitiligo", patient: "Male, 28 years", duration: "6 months treatment", result: "Re-pigmentation observed in 3 patches, spread halted completely.", beforeImg: "https://picsum.photos/400/300?random=29", afterImg: "https://picsum.photos/400/300?random=30" },
];

export default function BeforeAfterSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-gradient-to-br from-primary-dark to-primary py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Real Results, Real People"
          light
        />
        <p className="text-center text-white/60 text-xs mb-10 -mt-8">
          Results may vary. All identities are anonymized.
        </p>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {cases.map((c, i) => (
                <div
                  key={i}
                  className="flex-[0_0_90%] sm:flex-[0_0_70%] lg:flex-[0_0_50%] min-w-0"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <div className="absolute top-2 left-2 bg-red-500/80 text-white text-xs font-semibold px-2 py-0.5 rounded z-10">Before</div>
                        <div className="relative aspect-[4/3]">
                          <Image src={c.beforeImg} alt={`Before treatment for ${c.condition}`} fill className="object-cover" sizes="200px" />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute top-2 left-2 bg-green-500/80 text-white text-xs font-semibold px-2 py-0.5 rounded z-10">After</div>
                        <div className="relative aspect-[4/3]">
                          <Image src={c.afterImg} alt={`After treatment for ${c.condition}`} fill className="object-cover" sizes="200px" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-semibold text-primary text-lg">{c.condition}</h4>
                      <p className="text-muted text-sm mt-1">{c.patient} · {c.duration}</p>
                      <p className="text-charcoal text-sm mt-2">{c.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-secondary text-primary-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform hidden sm:flex" aria-label="Previous case">
            <ChevronLeft size={20} />
          </button>
          <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-secondary text-primary-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform hidden sm:flex" aria-label="Next case">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
