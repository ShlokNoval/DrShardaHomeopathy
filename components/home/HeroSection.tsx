"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Calendar, ArrowRight, Star, Users, Clock, ChevronDown } from "lucide-react";

/* ─── Static trust micro-pills ───────────────────────────────────── */
const TRUST_PILLS = [
  { icon: "🌿", label: "Natural & Safe" },
  { icon: "✦",  label: "No Side Effects" },
  { icon: "⭐", label: "4.9/5 on Google" },
];

function TrustPills() {
  return (
    <div className="flex flex-wrap gap-2 px-4 pt-3 pb-1" aria-label="Trust indicators">
      {TRUST_PILLS.map((pill) => (
        <span
          key={pill.label}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(201,150,58,0.35)",
            borderRadius: "999px",
            fontSize: "11px",
            color: "rgba(255,255,255,0.70)",
            padding: "4px 12px",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          {pill.icon}&nbsp;&nbsp;{pill.label}
        </span>
      ))}
    </div>
  );
}

/* ─── Scroll Indicator ───────────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-24 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      style={{ opacity: 0.4 }}
      aria-hidden
    >
      <span
        style={{
          color: "#C9963A",
          fontSize: "11px",
          letterSpacing: "0.08em",
          fontWeight: 500,
        }}
      >
        SCROLL
      </span>
      <ChevronDown
        size={20}
        style={{ color: "#C9963A", animation: "bounce 1.8s ease-in-out infinite" }}
      />
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <>
      {/* ── Bounce keyframe for scroll indicator ── */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
      `}</style>

      <section
        className="relative flex flex-col bg-[#1B5E35] overflow-hidden"
        style={{ height: "calc(100vh - 88px)" }}
      >
        {/* ── Trust pills pinned at very top ── */}
        <div className="relative z-20">
          <TrustPills />
        </div>

        {/* ── Background decorations ── */}
        {/* Dot mesh */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Botanical SVG top-right */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.05] pointer-events-none text-white overflow-hidden z-0">
          <svg
            viewBox="0 0 200 200"
            fill="currentColor"
            className="w-full h-full transform translate-x-1/4 -translate-y-1/4 rotate-12"
          >
            <path d="M100 200 C 90 100 120 50 180 20 C 130 40 110 80 100 200 Z" />
            <path d="M110 140 C 150 130 180 150 190 180 C 160 160 130 160 110 140 Z" />
            <path d="M105 80 C 140 60 170 80 180 110 C 150 90 120 90 105 80 Z" />
            <path d="M95 160 C 60 150 30 170 20 200 C 50 180 80 180 95 160 Z" />
            <path d="M98 100 C 60 80 30 100 20 130 C 50 110 80 110 98 100 Z" />
          </svg>
        </div>

        {/* Botanical SVG bottom-left */}
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.05] pointer-events-none text-white overflow-hidden z-0">
          <svg
            viewBox="0 0 200 200"
            fill="currentColor"
            className="w-full h-full transform -translate-x-1/4 translate-y-1/4 -rotate-12"
          >
            <path d="M100 0 C 110 100 80 150 20 180 C 70 160 90 120 100 0 Z" />
            <path d="M90 60 C 50 70 20 50 10 20 C 40 40 70 40 90 60 Z" />
            <path d="M95 120 C 60 140 30 120 20 90 C 50 110 80 110 95 120 Z" />
          </svg>
        </div>

        {/* Glow spots */}
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[600px] h-[600px] bg-[#C9963A] rounded-full blur-[120px] mix-blend-screen opacity-[0.15] pointer-events-none z-0" />
        <div className="absolute top-1/3 -left-[10%] w-[500px] h-[500px] bg-[#2E7D50] rounded-full blur-[100px] mix-blend-screen opacity-40 pointer-events-none z-0" />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full animate-drift mix-blend-screen"
              style={{
                width: `${Math.max(4, Math.random() * 14)}px`,
                height: `${Math.max(4, Math.random() * 14)}px`,
                left: `${Math.random() * 100}%`,
                top: `${70 + Math.random() * 30}%`,
                backgroundColor:
                  Math.random() > 0.4
                    ? "rgba(201, 150, 58, 0.3)"
                    : "rgba(144, 238, 144, 0.4)",
                animationDuration: `${6 + Math.random() * 8}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Falling leaves */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`leaf-${i}`}
              className="absolute animate-fall text-[#C9963A] opacity-[0.15]"
              style={{
                left: `${10 + Math.random() * 90}%`,
                top: `${-10 - Math.random() * 20}%`,
                animationDuration: `${10 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 10}s`,
                transform: `scale(${0.4 + Math.random() * 0.6})`,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C7 2 3 6 3 12C3 18 12 22 12 22C12 22 21 18 21 12C21 6 17 2 12 2Z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Top light beam */}
        <div className="absolute top-0 left-0 w-[150%] h-[300px] bg-gradient-to-b from-white/[0.06] to-transparent transform -rotate-12 -translate-y-1/2 -translate-x-1/4 pointer-events-none mix-blend-overlay z-0" />

        {/* ── Main content — flex-1 to fill remaining height, vertically centered ── */}
        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 w-full py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center w-full">

            {/* Left Column — Text */}
            <ScrollReveal direction="left">
              <div className="flex flex-col">
                {/* Badge — first visible element */}
                <div className="inline-flex items-center gap-2 border border-[#C9963A]/40 bg-white/10 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm w-fit">
                  <span>🌿</span>
                  <span>Trusted Homeopathic Care</span>
                </div>

                <h1 className="mb-5 leading-tight">
                  <span className="font-playfair text-5xl sm:text-6xl lg:text-[70px] text-white block relative w-fit mb-3">
                    Heal Naturally.
                    <svg
                      className="absolute w-[105%] h-4 -bottom-2 -left-1 text-[#C9963A]"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10 100 2"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="font-sans font-bold text-4xl sm:text-5xl lg:text-[54px] tracking-tight text-white block mt-4">
                    Live Completely.
                  </span>
                </h1>

                <p className="text-white/80 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed font-light">
                  Expert homeopathic care for 100+ conditions by Dr. Sharda Tawale.
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Safe, natural, and lasting results.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-0">
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9963A] to-[#E8C96D] hover:from-[#b58532] hover:to-[#d4b55c] text-[#0F3D22] text-base font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-lg shadow-[#C9963A]/20"
                  >
                    <Calendar size={20} />
                    Book Appointment
                  </Link>
                  <Link
                    href="/treatments"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#C9963A] text-white hover:bg-[#C9963A]/10 text-base font-semibold px-8 py-4 rounded-full transition-colors"
                  >
                    Explore Treatments
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column — Doctor Image (vertically centered via grid items-center) */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative z-10">
                  {/* Double ring + glow */}
                  <div className="relative w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full p-2 border-[4px] border-white/10 ring-2 ring-[#C9963A]/50 ring-offset-4 ring-offset-[#1B5E35] shadow-[0_0_60px_rgba(201,150,58,0.25)]">
                    {/* Floral ornament */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#C9963A] z-20 bg-[#1B5E35] px-2 rounded-full">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M12 22C12 22 19 18 19 12C19 6 12 2 12 2C12 2 5 6 5 12C5 18 12 22 12 22Z"
                          fill="currentColor"
                          fillOpacity="0.2"
                        />
                        <path d="M12 22V12" />
                        <path d="M12 12C12 12 15 10 15 7" />
                        <path d="M12 12C12 12 9 10 9 7" />
                      </svg>
                    </div>

                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#2E7D50]/20">
                      <Image
                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=800&fit=crop&crop=face"
                        alt="Dr. Sharda Tawale - Homeopathic Physician in Pune"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 260px, 380px"
                      />
                    </div>
                  </div>

                  {/* Floating Social Proof Card */}
                  <div className="absolute -bottom-6 -left-4 sm:bottom-6 sm:-left-12 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-4 flex items-center gap-3 border border-gray-100 z-30 hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                        <Image
                          src="https://picsum.photos/100/100?random=1"
                          alt="Patient"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                        <Image
                          src="https://picsum.photos/100/100?random=2"
                          alt="Patient"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#C9963A] border-2 border-white flex items-center justify-center text-xs font-bold text-white relative z-10 shadow-sm">
                        +
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                        Trusted by
                      </p>
                      <p className="text-sm font-bold text-[#1B5E35]">10,000+ patients</p>
                    </div>
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-1/4 -right-4 w-3 h-3 rounded-full bg-[#C9963A]/80 animate-pulse" />
                  <div
                    className="absolute bottom-1/3 -right-8 w-4 h-4 rounded-full bg-white/60 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Stats row — pinned at the bottom of the hero ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pb-20 sm:pb-16">
          <div className="flex flex-wrap gap-3 text-white justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#C9963A]/30 px-4 py-2.5 rounded-full shadow-sm hover:-translate-y-1 transition-transform">
              <Star size={16} className="text-[#C9963A] fill-[#C9963A]" />
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#C9963A]/30 px-4 py-2.5 rounded-full shadow-sm hover:-translate-y-1 transition-transform">
              <Users size={16} className="text-[#C9963A]" />
              <span className="text-sm font-medium">10,000+ Patients</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#C9963A]/30 px-4 py-2.5 rounded-full shadow-sm hover:-translate-y-1 transition-transform">
              <Clock size={16} className="text-[#C9963A]" />
              <span className="text-sm font-medium">25+ Years</span>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <ScrollIndicator />

        {/* ── Wave separator ── */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-20"
          >
            <path
              d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,70 1440,60 L1440,100 L0,100 Z"
              fill="#FAF8F3"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
