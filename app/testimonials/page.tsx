import { testimonials } from "@/data/testimonials";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import CTABanner from "@/components/home/CTABanner";
import { Star, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description: "Read real reviews from patients treated by Dr. Sharda Tawale at Sharda Homeopathy Clinic, Pune. 4.9/5 rating across 10,000+ patients.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 overflow-hidden">
        <FloatingGlobules count={10} opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">⭐ Testimonials</span>
          <h1 className="text-white mb-4">Voices of Healing</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Real stories from real patients who trusted us with their health</p>
          <div className="flex items-center justify-center gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="text-secondary fill-secondary" />
            ))}
            <span className="text-white ml-2 font-bold text-lg">4.9/5</span>
          </div>
          <div className="mt-6">
            <a href="https://www.google.com/search?q=Dr+Sharda+Homoeopathy+Center+Reviews" target="_blank" rel="noopener noreferrer" className="inline-block border border-white text-white hover:bg-white hover:text-primary px-6 py-2 rounded-full font-medium transition-colors">
              Verify on Google Reviews →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={(i % 6) * 0.05}>
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col card-hover">
                  <Quote size={24} className="text-secondary/30 mb-3" />
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-charcoal text-sm leading-relaxed flex-1 mb-4">&ldquo;{t.review}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">{t.initials}</div>
                    <div>
                      <p className="text-charcoal font-medium text-sm">{t.name}</p>
                      <p className="text-muted text-xs">Treated for {t.condition}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
