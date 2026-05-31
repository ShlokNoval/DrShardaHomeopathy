"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Calendar, Microscope, Pill } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Book Consultation",
    desc: "Choose online or in-person, pick a slot that suits you. Quick and hassle-free booking.",
  },
  {
    icon: Microscope,
    number: "02",
    title: "Deep Case Analysis",
    desc: "Dr. Sharda studies your complete health history, lifestyle, and individual constitution.",
  },
  {
    icon: Pill,
    number: "03",
    title: "Personalized Treatment",
    desc: "Receive custom homeopathic remedies tailored just for you, with ongoing support and monitoring.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="Your Healing Journey" />

        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center relative">
                  {/* Step number circle */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-primary-dark font-playfair text-xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>

                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
