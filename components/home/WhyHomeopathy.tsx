"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppUrl } from "@/lib/utils";

const reasons = [
  {
    emoji: "🍃",
    title: "No Side Effects",
    desc: "Safe for children, pregnant women, and the elderly. No chemicals, no dependency.",
  },
  {
    emoji: "🎯",
    title: "Treats the Root Cause",
    desc: "We don't suppress symptoms. We find why you're unwell and fix that.",
  },
  {
    emoji: "👶",
    title: "Safe for All Ages",
    desc: "From 6-month-old babies to 80-year-old grandparents — works for everyone.",
  },
  {
    emoji: "🧠",
    title: "Mind + Body Together",
    desc: "Stress causing your skin issues? We treat the whole picture, not just patches.",
  },
  {
    emoji: "⏳",
    title: "Results That Last",
    desc: "Patients who completed treatment report lasting relief — not just temporary fixes.",
  },
  {
    emoji: "💰",
    title: "Affordable Care",
    desc: "Quality treatment that doesn't burn a hole in your pocket. Monthly plans available.",
  },
];

export default function WhyHomeopathy() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="font-playfair text-charcoal mb-3">
              Why 10,000+ Families Trust Homeopathy
            </h2>
            <div className="w-12 h-0.5 bg-secondary mx-auto mb-4" />
            <p className="text-muted max-w-lg mx-auto text-sm">
              Real reasons from real patients who switched to homeopathy — and never looked back.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="flex gap-5 items-start p-6 sm:p-8 rounded-2xl bg-cream/30 border border-secondary/10 hover:bg-cream/60 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-2xl">
                  {reason.emoji}
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2 text-lg">
                    {reason.title}
                  </h4>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-muted text-sm mb-4">
              Still unsure? Talk to Dr. Sharda — no pressure, no commitment.
            </p>
            <a
              href={getWhatsAppUrl("Hi, I have some questions about homeopathy treatment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 px-5 py-2.5 rounded-full hover:bg-primary/5 transition-colors"
            >
              Ask a Question on WhatsApp →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
