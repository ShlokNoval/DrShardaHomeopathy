"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { ShieldOff, Target, Baby, Globe, CheckCircle, IndianRupee } from "lucide-react";

const reasons = [
  { icon: ShieldOff, title: "No Side Effects", desc: "Homeopathic remedies are gentle and free from adverse effects, making them safe for long-term use." },
  { icon: Target, title: "Treats Root Cause", desc: "Instead of suppressing symptoms, homeopathy addresses the underlying cause of illness for lasting healing." },
  { icon: Baby, title: "Safe for All Ages", desc: "From infants to the elderly, homeopathy is safe and effective for patients of every age group." },
  { icon: Globe, title: "Holistic Healing", desc: "Treats the mind, body, and spirit as one — addressing physical, emotional, and mental well-being together." },
  { icon: CheckCircle, title: "Long-Lasting Results", desc: "Homeopathic treatment aims for permanent resolution, not temporary relief. Results that endure." },
  { icon: IndianRupee, title: "Affordable Treatment", desc: "Effective healthcare that doesn't burden your wallet. Quality treatment accessible to all families." },
];

export default function WhyHomeopathy() {
  return (
    <section className="bg-cream-alt py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Why Choose Homeopathy?"
          subtitle="A gentle, holistic system of medicine that heals from within"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 card-hover border border-transparent hover:border-l-4 hover:border-l-primary group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2">
                  {reason.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
