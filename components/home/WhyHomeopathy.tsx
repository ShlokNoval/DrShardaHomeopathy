"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import { getWhatsAppUrl } from "@/lib/utils";
import { Leaf, Target, Baby, Brain, Clock, Wallet, CheckCircle2, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "No Side Effects",
    desc: "Safe for children, pregnant women, and the elderly. No chemicals, no dependency.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: Target,
    title: "Treats the Root Cause",
    desc: "We don't suppress symptoms. We find why you're unwell and fix that.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Baby,
    title: "Safe for All Ages",
    desc: "From 6-month-old babies to 80-year-old grandparents - works for everyone.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Brain,
    title: "Mind + Body",
    desc: "Stress causing skin issues? We treat the whole picture, not just patches.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Clock,
    title: "Results That Last",
    desc: "Patients who completed treatment report lasting relief - not just temporary fixes.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Wallet,
    title: "Affordable & Transparent Care",
    desc: "Quality treatment that doesn't burn a hole in your pocket. Accessible monthly plans available for long-term healing.",
    colSpan: "lg:col-span-3",
  },
];

export default function WhyHomeopathy() {
  return (
    <section className="relative bg-[#FAFAF7] py-20 sm:py-32 overflow-hidden">
      {/* Background Botanical Illustration */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-multiply" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 120C40 100 80 50 120 20C90 40 70 80 60 120Z M65 90C85 80 100 100 110 120C90 110 70 110 65 90Z M62 50C85 40 100 50 110 70C90 60 70 60 62 50Z' fill='%231B5E35'/%3E%3C/svg%3E")`,
          backgroundSize: "400px"
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Leaf className="text-[#C9963A] w-6 h-6 rotate-12" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-playfair mb-6 tracking-tight text-slate-900 relative inline-block">
              Why 10,000+ Families{" "}
              <span className="text-[#1B5E35] font-serif relative whitespace-nowrap">
                Trust Homeopathy
                {/* Hand-drawn SVG underline */}
                <svg className="absolute w-[110%] h-4 -bottom-1 -left-2 text-[#C9963A]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            {/* Proof Strip */}
            <div className="hidden md:flex flex-wrap justify-center gap-3 sm:gap-6 mt-10">
              {[
                "98% Patient Satisfaction",
                "10,000+ Treated",
                "50+ Conditions",
                "Zero Chemical Dependency"
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#1B5E35]/5 border border-[#1B5E35]/15 text-[#1B5E35] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9963A]" />
                  {stat}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="relative">
          {/* Subtle dotted connector lines in background */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none hidden lg:block" style={{ zIndex: -1 }}>
            <path d="M200 100 C 400 100 400 300 600 300 C 800 300 800 100 1000 100" stroke="#1B5E35" strokeWidth="2" strokeDasharray="8 8" fill="none" />
            <path d="M200 300 C 400 300 400 500 600 500" stroke="#1B5E35" strokeWidth="2" strokeDasharray="8 8" fill="none" />
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className={reason.colSpan}>
                <div className="group relative h-full flex flex-col p-8 sm:p-10 rounded-[2rem] bg-white/70 backdrop-blur-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white border-l-[4px] border-l-[#C9963A] hover:border-l-[#1B5E35] hover:shadow-[0_12px_40px_rgba(27,94,53,0.08)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                  
                  {/* Faint Background Number */}
                  <div className="absolute top-4 right-6 text-[80px] font-black text-[#1B5E35]/5 select-none font-playfair tracking-tighter transition-transform duration-500 group-hover:scale-110">
                    0{i + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 mb-6 rounded-full bg-[#1B5E35]/5 group-hover:bg-[#C9963A]/10 flex items-center justify-center transition-colors duration-500">
                      <reason.icon className="w-7 h-7 text-[#1B5E35] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                    
                    <h4 className="font-bold text-[#1B5E35] text-xl mb-3 pr-8">
                      {reason.title}
                    </h4>
                    
                    <p className="text-[#555] leading-relaxed text-sm sm:text-base">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-[#555] text-sm mb-5 font-medium">
              Start your healing journey today - no pressure, no commitment.
            </p>
            <a
              href={getWhatsAppUrl("Hi, I want to switch to homeopathy. Can we talk?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B5E35] border-2 border-[#1B5E35]/20 px-8 py-3.5 rounded-full hover:bg-[#1B5E35] hover:text-white hover:border-[#1B5E35] transition-all duration-300 shadow-sm"
            >
              Ask a Question on WhatsApp →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
