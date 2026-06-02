"use client";

import { useRef, useEffect, useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const highlights = [
  "MD (Homeopath) with 25+ years of clinical practice",
  "IIM Bangalore — General Management Programme (GS 10K)",
  "10,000+ patients treated across skin, respiratory, joint, and lifestyle disorders",
  "Personalized constitutional treatment — no two patients get the same medicine",
  "Online + in-clinic consultations for patients across India",
];

export default function ExpertiseParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      if (scrolled > 0 && rect.bottom > 0) {
        setOffsetY(scrolled * 0.15);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[520px] flex items-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 -top-20 -bottom-20"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1400&h=800&fit=crop&q=80')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary-dark/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left — Doctor's message */}
          <div className="lg:col-span-2">
            <span className="inline-block text-secondary text-xs font-semibold uppercase tracking-widest mb-3">
              Dr. Sharda Tawale
            </span>
            <h2 className="font-playfair text-white text-2xl sm:text-3xl leading-snug mb-4">
              Your Partner in Health & Healing
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              With over two decades of clinical experience, I combine classical
              homeopathic principles with a patient-first approach to deliver
              treatments that are safe, effective, and lasting.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-secondary text-sm font-semibold hover:text-secondary-light transition-colors"
            >
              Read my full story →
            </Link>
          </div>

          {/* Right — Credentials card */}
          <div className="lg:col-span-3">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="font-playfair text-charcoal text-xl mb-5">
                Our Medical Excellence
              </h3>
              <ul className="space-y-4">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-charcoal/80 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/appointment"
                  className="btn-primary text-center flex-1"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/treatments"
                  className="btn-ghost border-primary/20 text-primary hover:bg-primary/5 text-center flex-1"
                >
                  View Treatments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
