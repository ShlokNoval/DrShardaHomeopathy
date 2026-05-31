"use client";

import Link from "next/link";
import Image from "next/image";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
      <FloatingGlobules count={20} opacity={0.3} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column — Text */}
          <ScrollReveal direction="left">
            <div>
              <span className="inline-block border border-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                🌿 Trusted Homeopathic Care
              </span>
              <h1 className="text-white mb-6 leading-tight">
                Heal Naturally.
                <br />
                Live Completely.
              </h1>
              <p className="text-white/80 text-lg max-w-xl mb-8 leading-relaxed">
                Expert homeopathic care for 100+ conditions by Dr. Sharda
                Tawale, Pune. Safe, natural, and lasting results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/appointment"
                  className="btn-primary text-base px-8 py-4 text-center"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/treatments"
                  className="btn-ghost border-white text-white hover:bg-white/10 text-base px-8 py-4 text-center"
                >
                  Explore Treatments
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 text-white/90 text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="text-secondary">⭐</span> 4.9/5 Rating
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-secondary">🌿</span> 2000+ Patients
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-secondary">⏱️</span> 15+ Years
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column — Doctor Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-secondary/30 scale-110" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face"
                    alt="Dr. Sharda Tawale - Homeopathic Physician in Pune"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
                {/* Scattered globule dots */}
                <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-secondary/40 animate-pulse" />
                <div className="absolute bottom-8 -left-6 w-4 h-4 rounded-full bg-white/30 animate-pulse" />
                <div className="absolute top-1/4 -right-8 w-3 h-3 rounded-full bg-accent/40 animate-pulse" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Gold Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 wave-separator">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24"
        >
          <path
            d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,70 1440,60 L1440,100 L0,100 Z"
            fill="#C9A84C"
            fillOpacity="0.15"
          />
          <path
            d="M0,80 C360,40 720,90 1080,50 C1260,30 1380,60 1440,80 L1440,100 L0,100 Z"
            fill="#FAF8F3"
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="animate-bounce-arrow text-white/50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
