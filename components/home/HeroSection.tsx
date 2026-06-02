"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Calendar, ArrowRight, Star, Users, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1B5E35] overflow-hidden pt-20">
      {/* Botanical Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83-2.69 2.69c.813-.42 1.637-.82 2.47-1.2l.623 1.897c-.89.377-1.78.74-2.67 1.08.625-.563 1.258-1.123 1.9-1.673l-1.347-1.48c-.687.593-1.383 1.187-2.093 1.777.407-.76.803-1.533 1.18-2.317L50.993.427c-.43.83-.87 1.657-1.32 2.477.16-1 .287-2 .377-3.003L48.067-.293c-.113 1.18-.283 2.353-.513 3.513-.377-.733-.767-1.46-1.173-2.177l-1.633.913c.47.817.92 1.64 1.34 2.47-.79-.543-1.603-1.077-2.437-1.597l-.987 1.74c.95.587 1.903 1.157 2.853 1.707-1.2-.237-2.42-.423-3.653-.553L42.23 7.82c1.377.14 2.753.34 4.113.6-.977-.283-1.967-.52-2.973-.703l.463-1.94c1.127.203 2.247.457 3.357.76-.797-.5-1.61-.98-2.44-1.44l1.01-1.727c.92.513 1.83 1.047 2.723 1.6-1.19-.243-2.4-.44-3.627-.583l-.337 1.97c1.36.16 2.713.373 4.053.64-.95-.36-1.917-.677-2.897-.943l.593-1.907c1.097.29 2.18.633 3.243 1.02-.757-.597-1.53-1.17-2.327-1.713l1.197-1.6c.883.6 1.747 1.22 2.583 1.867C52.793 4.67 51.52 4.417 50.22 4.22l.27-1.98C51.72 2.417 52.937 2.65 54.12 2.94c-.95-.45-1.913-.85-2.893-1.193l.737-1.853c1.09.387 2.163.83 3.21 1.317-.667-.73-1.36-1.437-2.077-2.113l1.413-1.42c.8.76 1.573 1.547 2.31 2.36-.613-1.047-1.28-2.063-2-3.047zM29.567.013L29.983 2c-1.393-.11-2.793-.163-4.197-.163h-1.98v-2h2.01c1.39.01 2.78.07 4.16.173l-.41.003zM5.38 0l1.4 1.433c-.76.79-1.493 1.6-2.197 2.433l-1.523-1.3c.773-.917 1.577-1.807 2.41-2.673l-.09.107zM.163 29.567l1.987.417c-.11-1.393-.163-2.793-.163-4.197v-1.98h-2v2.01c.01 1.39.07 2.78.173 4.16l.003-.41zM0 54.627l.83.83-2.69 2.69c-.42-.813-.82-1.637-1.2-2.47l1.897.623c.377-.89.74-1.78 1.08-2.67-.563.625-1.123 1.258-1.673 1.9l-1.48-1.347c.593-.687 1.187-1.383 1.777-2.093-.76.407-1.533.803-2.317 1.18L.427 50.993c.83-.43 1.657-.87 2.477-1.32-1 .16-2 .287-3.003.377L-.293 48.067c1.18-.113 2.353-.283 3.513-.513-.733-.377-1.46-.767-2.177-1.173l.913-1.633c.817.47 1.64.92 2.47 1.34-.543-.79-1.077-1.603-1.597-2.437l1.74-.987c.587.95 1.157 1.903 1.707 2.853-.237-1.2-.423-2.42-.553-3.653L7.82 42.23c.14 1.377.34 2.753.6 4.113-.283-.977-.52-1.967-.703-2.973l-1.94.463c.203 1.127.457 2.247.76 3.357-.5-.797-.98-1.61-1.44-2.44l-1.727 1.01c.513.92 1.047 1.83 1.6 2.723-.243-1.19-.44-2.4-.583-3.627l1.97-.337c.16 1.36.373 2.713.64 4.053-.36-.95-.677-1.917-.943-2.897l-1.907.593c.29 1.097.633 2.18 1.02 3.243-.597-.757-1.17-1.53-1.713-2.327l-1.6 1.197c.6.883 1.22 1.747 1.867 2.583-1.277-.167-2.53-.42-3.83-.617l-1.98.27c1.177.363 2.394.596 3.577.886-.45-.95-.85-1.913-1.193-2.893l-1.853.737c.387 1.09.83 2.163 1.317 3.21-.73-.667-1.437-1.36-2.113-2.077l-1.42 1.413c.76.8 1.547 1.573 2.36 2.31-1.047-.613-2.063-1.28-3.047-2z' fill='%23C9963A' fill-rule='evenodd'/%3E%3C/svg%3E")` 
        }} 
      />

      {/* Radial Gradient Glow for Image */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2E7D50] via-transparent to-transparent opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column — Text */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#C9963A]/40 bg-white/10 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-8 shadow-sm">
                <span>🌿</span>
                <span>Trusted Homeopathic Care</span>
              </div>
              
              <h1 className="mb-6 leading-tight">
                <span className="font-playfair text-5xl sm:text-6xl lg:text-[72px] text-white block relative w-fit mb-3">
                  Heal Naturally.
                  {/* Brush stroke highlight */}
                  <svg className="absolute w-[105%] h-4 -bottom-2 -left-1 text-[#C9963A]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 2" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="font-sans font-bold text-4xl sm:text-5xl lg:text-[56px] tracking-tight text-white block mt-4">
                  Live Completely.
                </span>
              </h1>
              
              <p className="text-white/80 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-light">
                Expert homeopathic care for 100+ conditions by Dr. Sharda Tawale.
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Safe, natural, and lasting results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mb-14">
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

              {/* Stats Row - Pill Cards */}
              <div className="flex flex-wrap gap-4 text-white">
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
          </ScrollReveal>

          {/* Right Column — Doctor Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative z-10">
                {/* Double ring border & Drop shadow glow */}
                <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full p-2 border-[4px] border-white/10 ring-2 ring-[#C9963A]/50 ring-offset-4 ring-offset-[#1B5E35] shadow-[0_0_60px_rgba(201,150,58,0.25)]">
                  
                  {/* Floral SVG Ornament at top */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#C9963A] z-20 bg-[#1B5E35] px-2 rounded-full">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22C12 22 19 18 19 12C19 6 12 2 12 2C12 2 5 6 5 12C5 18 12 22 12 22Z" fill="currentColor" fillOpacity="0.2"/>
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
                      sizes="(max-width: 768px) 300px, 400px"
                    />
                  </div>
                </div>

                {/* Floating Social Proof Card */}
                <div className="absolute -bottom-6 -left-4 sm:bottom-10 sm:-left-12 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-4 flex items-center gap-3 border border-gray-100 z-30 hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                      <Image src="https://picsum.photos/100/100?random=1" alt="Patient" fill className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                      <Image src="https://picsum.photos/100/100?random=2" alt="Patient" fill className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#C9963A] border-2 border-white flex items-center justify-center text-xs font-bold text-white relative z-10 shadow-sm">
                      +
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Trusted by</p>
                    <p className="text-sm font-bold text-[#1B5E35]">10,000+ patients</p>
                  </div>
                </div>

                {/* Decorative floating dots */}
                <div className="absolute top-1/4 -right-4 w-3 h-3 rounded-full bg-[#C9963A]/80 animate-pulse" />
                <div className="absolute bottom-1/3 -right-8 w-4 h-4 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Elegant Wave Separator */}
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
  );
}
