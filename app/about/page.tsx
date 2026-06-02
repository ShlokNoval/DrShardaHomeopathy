import Image from "next/image";
import { Check, Award, GraduationCap, Heart } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import BotanicalDecor from "@/components/shared/BotanicalDecor";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Sharda Tawale",
  description: "Learn about Dr. Sharda Tawale, a leading homeopathic physician in Pune with 25+ years of experience since 2001. MD (Homeopath), IIM Bangalore. Treating 100+ conditions naturally.",
};

const milestones = [
  { year: "2001", event: "Began practicing homeopathy, driven by a passion for natural healing" },
  { year: "2005", event: "Completed MD in Homeopathy with specialization in chronic conditions" },
  { year: "2010", event: "Crossed 2,000+ successfully treated patients" },
  { year: "2015", event: "Completed General Management Programme from IIM Bangalore (GS 10K)" },
  { year: "2020", event: "Expanded to online consultations for patients across India" },
  { year: "2025", event: "10,000+ patients treated with 4.9/5 satisfaction rating" },
];

const philosophy = [
  { icon: Heart, title: "Patient First", desc: "Every treatment plan starts with truly listening to the patient — understanding not just symptoms, but their story, fears, and aspirations." },
  { icon: GraduationCap, title: "Evidence-Based", desc: "Combining 200 years of homeopathic knowledge with modern clinical methods for the most effective outcomes." },
  { icon: Award, title: "Excellence", desc: "Committed to continuous learning and staying updated with the latest developments in homeopathic medicine." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 overflow-hidden">
        <FloatingGlobules count={10} opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">🌿 About</span>
          <h1 className="text-white mb-4">Dr. Sharda Tawale</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">MD (Homeopath) · IIM Bangalore · 25+ Years · Pune, Maharashtra</p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
        <BotanicalDecor variant="sprig" position="top-right" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-secondary/20 -z-0" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-md">
                  <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop" alt="Dr. Sharda Tawale" fill className="object-cover" sizes="400px" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div>
                <SectionHeading title="My Journey in Healing" centered={false} />
                <p className="text-muted leading-relaxed mb-4">
                  My journey into homeopathy began with a deeply personal experience — watching a family member find lasting relief from chronic asthma through homeopathic treatment after years of struggling with conventional medicines. That experience planted the seed of what would become my life&apos;s calling.
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
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Treatment Philosophy" subtitle="The principles that guide every patient interaction" />
          <div className="grid md:grid-cols-3 gap-6">
            {philosophy.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center card-hover">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <p.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl text-charcoal mb-3">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading title="Professional Milestones" />
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
          <SectionHeading title="Qualifications & Credentials" light />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "MD (Homeopath)",
              "IIM Bangalore — General Management Programme (GS 10K)",
              "Member — Maharashtra Homeopathic Medical Association",
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
