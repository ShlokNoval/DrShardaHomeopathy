"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import BotanicalDecor from "@/components/shared/BotanicalDecor";
import { Play } from "lucide-react";

const VIDEO_SRC = "/testimonials/testimonial1.mp4";

export default function DoctorVideoSection() {

  return (
    <section className="relative bg-cream py-16 sm:py-24 overflow-hidden">
      <BotanicalDecor variant="branch" position="top-right" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Video */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-charcoal">
              <video
                src={VIDEO_SRC}
                poster="/testimonials/image1.jpeg"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              />
            </div>
          </ScrollReveal>

          {/* Right - Quote */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              {/* Decorative Quote Mark */}
              <svg width="48" height="36" viewBox="0 0 48 36" fill="none" className="text-primary/20 mb-4">
                <path d="M0 36V20.4C0 14.4 1.2 9.6 3.6 6C6 2.4 10 0.4 15.6 0L18 6C14.8 6.8 12.6 8.2 11.4 10.2C10.2 12.2 9.6 14.6 9.6 17.4H18V36H0ZM30 36V20.4C30 14.4 31.2 9.6 33.6 6C36 2.4 40 0.4 45.6 0L48 6C44.8 6.8 42.6 8.2 41.4 10.2C40.2 12.2 39.6 14.6 39.6 17.4H48V36H30Z" fill="currentColor" />
              </svg>

              <h3 className="font-playfair text-charcoal mb-4">
                Myths & Facts About Homeopathy
              </h3>
              <p className="font-playfair text-lg text-charcoal/80 italic leading-relaxed mb-6">
                &ldquo;There are many misconceptions about homeopathic treatments. In this video, I address common myths and share the scientific reality behind how homeopathy gently and effectively treats the root cause of illness.&rdquo;
              </p>

              {/* Signature */}
              <div>
                <p className="font-playfair text-lg font-semibold text-charcoal">
                  Dr. Sharda Tawale
                </p>
                <div className="w-20 h-0.5 bg-primary mt-1" />
                <p className="text-muted text-sm mt-2">
                  MD (Homeopath) · IIM Bangalore
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
