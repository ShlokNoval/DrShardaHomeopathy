import Image from "next/image";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import BotanicalDecor from "@/components/shared/BotanicalDecor";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Sharda Tawale",
  description: "Learn about Dr. Sharda Tawale, a leading homeopathic physician in Pune with 25+ years of experience since 2001. MD (Homeopath), IIM Bangalore. Treating 50+ conditions naturally.",
};

const milestones = [
  { year: "2001", event: "Began practicing homeopathy, driven by a passion for natural healing" },
  { year: "2005", event: "Completed MD in Homeopathy with specialization in chronic conditions" },
  { year: "2010", event: "Crossed 2,000+ successfully treated patients" },
  { year: "2015", event: "Completed General Management Programme from IIM Bangalore (GS 10K)" },
  { year: "2020", event: "Expanded to online consultations for patients across India" },
  { year: "2025", event: "10,000+ patients treated with 4.9/5 satisfaction rating" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark pt-24 pb-32 overflow-hidden">
        {/* Layer 1: Dot Grid Texture */}
        <div aria-hidden className="absolute inset-0 z-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        {/* Layer 2: Diagonal Light Beam */}
        <div aria-hidden className="absolute inset-0 z-0 pointer-events-none" style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
        }} />

        {/* Layer 3: Warm Radial Glow */}
        <div aria-hidden className="absolute z-0 pointer-events-none" style={{
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 600, height: 300,
          background: "radial-gradient(ellipse 600px 300px at 50% 50%, rgba(201,150,58,0.10) 0%, transparent 70%)",
        }} />

        {/* Layer 4: Giant Watermark */}
        <div aria-hidden className="absolute z-0 pointer-events-none text-center" style={{
          fontSize: 180, fontFamily: "Georgia, 'Playfair Display', serif",
          color: "rgba(255,255,255,0.03)", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)", whiteSpace: "nowrap", letterSpacing: "0.05em",
        }}>
          Sharda
        </div>

        {/* Layer 5: Left Side Decor */}
        <div aria-hidden className="hidden md:flex absolute z-0 pointer-events-none flex-col items-center" style={{ left: 40, top: "50%", transform: "translateY(-50%)" }}>
          {/* Stethoscope */}
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" opacity="0.08" style={{ transform: "rotate(-15deg)" }}>
            <path d="M5 4h14a2 2 0 0 1 2 2v6a7 7 0 0 1-14 0V6a2 2 0 0 1 2-2z" />
            <path d="M12 19v3" />
            <circle cx="12" cy="16" r="3" />
          </svg>
          {/* Certificate Frame */}
          <div className="mt-6 flex items-center justify-center border-double border-[3px]" style={{ width: 100, height: 70, borderColor: "rgba(201,150,58,0.12)", borderRadius: 4 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: "bold", letterSpacing: "1px" }}>BHMS · MD</span>
          </div>
        </div>

        {/* Layer 6: Right Side Decor */}
        <div aria-hidden className="hidden md:flex absolute z-0 pointer-events-none flex-col items-center" style={{ right: 40, top: "50%", transform: "translateY(-50%)" }}>
          {/* Mortar & Pestle */}
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" opacity="0.07">
            <path d="M5 8l14 0" />
            <path d="M6 8c0 0 1.5 12 6 12s6-12 6-12" />
            <path d="M10 4l4 10" />
          </svg>
          {/* Botanical Sprig */}
          <svg width="60" height="80" viewBox="0 0 24 24" fill="none" stroke="#C9963A" strokeWidth="1.5" opacity="0.10" style={{ transform: "rotate(10deg)" }} className="mt-2">
            <path d="M12 22V2M12 16c-3-2-6-1-6-1s-1 3 2 4M12 10c3-2 6-1 6-1s1 3-2 4M12 4c-3-2-6-1-6-1s-1 3 2 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <FloatingGlobules count={10} opacity={0.2} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">🌿 About</span>
          <h1 className="text-white mb-6">Dr. Sharda Tawale</h1>
          
          {/* Layer 7: Credential Pills */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 border border-white/15 rounded-full px-3.5 py-1.5 shadow-sm" style={{ background: "rgba(255,255,255,0.08)" }}>
              <span className="text-[14px]">🎓</span>
              <span className="text-white text-xs font-medium tracking-wide">MD (Homeopath)</span>
            </div>
            <div className="flex items-center gap-1.5 border border-white/15 rounded-full px-3.5 py-1.5 shadow-sm" style={{ background: "rgba(255,255,255,0.08)" }}>
              <span className="text-[14px]">🏛️</span>
              <span className="text-white text-xs font-medium tracking-wide">IIM Bangalore</span>
            </div>
            <div className="flex items-center gap-1.5 border border-white/15 rounded-full px-3.5 py-1.5 shadow-sm" style={{ background: "rgba(255,255,255,0.08)" }}>
              <span className="text-[14px]">⏳</span>
              <span className="text-white text-xs font-medium tracking-wide">25+ Years</span>
            </div>
            <div className="flex items-center gap-1.5 border border-white/15 rounded-full px-3.5 py-1.5 shadow-sm" style={{ background: "rgba(255,255,255,0.08)" }}>
              <span className="text-[14px]">📍</span>
              <span className="text-white text-xs font-medium tracking-wide">Pune, Maharashtra</span>
            </div>
          </div>
        </div>

        {/* Layer 8: Bottom Wave Transition */}
        <div aria-hidden className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[70px] block" preserveAspectRatio="none">
            <path d="M0,0 C400,80 800,0 1440,60 L1440,100 L0,100 Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
        <BotanicalDecor variant="sprig" position="top-right" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-secondary/20 -z-0" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <Image src="/dr-sharda.jpg" alt="Dr. Sharda Tawale" fill className="object-cover" sizes="400px" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div>
                <h2 className="font-playfair text-charcoal mb-3">My Journey in Healing</h2>
                <div className="w-12 h-0.5 bg-secondary mb-6" />
                <p className="text-muted leading-relaxed mb-4">
                  My journey into homeopathy began with a deeply personal experience - watching a family member find lasting relief from chronic asthma through homeopathic treatment after years of struggling with conventional medicines. That experience planted the seed of what would become my life&apos;s calling.
                </p>
                <p className="text-muted leading-relaxed mb-4">
                  After completing my MD in Homeopathy and later a General Management Programme from IIM Bangalore, I established my practice in Pune in 2001 with a simple mission: to bring the gentle, profound healing power of homeopathy to every family that seeks natural solutions.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  Over 25 years and 10,000+ patients later, I remain as passionate as day one. Every case is unique, every patient teaches me something new, and every successful healing reinforces my belief in the remarkable potential of homeopathic medicine.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Skin Conditions", "Respiratory", "Women's Health", "Children", "Joint Care", "Lifestyle"].map((spec) => (
                    <span key={spec} className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-charcoal mb-3">How I Treat My Patients</h2>
              <div className="w-12 h-0.5 bg-secondary mx-auto" />
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.05}>
              <div className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-primary">
                <p className="font-playfair text-lg text-charcoal mb-2">&ldquo;I listen first, prescribe later.&rdquo;</p>
                <p className="text-muted text-sm leading-relaxed">
                  Many patients tell me they&apos;ve never been heard by a doctor before. I spend 30–45 minutes on the first consultation alone - understanding your symptoms, your daily life, your emotional state. That&apos;s how homeopathy works: the remedy must match <em>you</em>, not just your disease.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-secondary">
                <p className="font-playfair text-lg text-charcoal mb-2">&ldquo;No two patients get the same medicine.&rdquo;</p>
                <p className="text-muted text-sm leading-relaxed">
                  Ten people may come to me with eczema, but each one leaves with a different remedy. I study your constitution, triggers, family history, and temperament before choosing the right medicine. That&apos;s the beauty of individualized treatment.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-primary">
                <p className="font-playfair text-lg text-charcoal mb-2">&ldquo;I won&apos;t promise overnight miracles.&rdquo;</p>
                <p className="text-muted text-sm leading-relaxed">
                  Homeopathy heals from within - it takes time, but the results are deep and lasting. I&apos;ll always be honest with you about timelines. Some conditions show improvement in days, others take weeks. But we work together until you feel genuinely better, not just symptom-free.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-charcoal mb-3">Professional Milestones</h2>
            <div className="w-12 h-0.5 bg-secondary mx-auto" />
          </div>
          <div className="relative border-l-2 border-primary/20 ml-4">
            {milestones.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="relative pl-8 pb-8 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-white shadow" />
                  <span className="text-secondary font-bold text-sm">{m.year}</span>
                  <p className="text-charcoal mt-1">{m.event}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-primary-dark py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-white mb-3">Qualifications & Credentials</h2>
            <div className="w-12 h-0.5 bg-secondary mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "MD (Homeopath)",
              "IIM Bangalore - General Management Programme (GS 10K)",
              "Member - Maharashtra Homeopathic Medical Association",
              "Certified in Advanced Homeopathic Therapeutics",
              "Published researcher in homeopathic case studies",
              "Regular speaker at homeopathic conferences",
              "25+ years of active clinical practice (Since 2001)",
              "10,000+ patients successfully treated",
            ].map((q, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <Check size={18} className="text-secondary mt-0.5 shrink-0" />
                  <span className="text-white/80 text-sm">{q}</span>
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
