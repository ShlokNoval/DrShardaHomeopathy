"use client";

import { useState } from "react";
import Link from "next/link";
import { treatments, categoryLabels, type TreatmentCategory, diseaseImages } from "@/data/treatments";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wind, Apple, Activity, Baby, HeartPulse, Coffee, ArrowRight, Brain, Ear } from "lucide-react";

const categories: ("all" | TreatmentCategory)[] = [
  "all", "skin", "respiratory", "digestive", "joint", "children", "womens", "lifestyle", "mental-wellness", "ent",
];

const CategoryIcons: Record<string, any> = {
  skin: Sparkles,
  respiratory: Wind,
  digestive: Apple,
  joint: Activity,
  children: Baby,
  womens: HeartPulse,
  lifestyle: Coffee,
  "mental-wellness": Brain,
  ent: Ear,
  all: Activity,
};

export default function TreatmentsPage() {
  const [active, setActive] = useState<"all" | TreatmentCategory>("all");

  const filtered = active === "all" ? treatments : treatments.filter((t) => t.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/treatments-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        {/* Very subtle dark vignette so it's not washed out, but image is 100% visible */}
        <div className="absolute inset-0 z-0 bg-black/20" />

        <div className="absolute inset-0 z-0">
          {/* Globules are optional here, maybe we don't need them if the image is clear, but let's keep them faint */}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="backdrop-blur-md bg-white/85 border border-white/50 p-10 sm:p-14 rounded-3xl shadow-2xl">
            <span className="inline-block border border-primary/30 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 bg-primary/5">🧬 Treatments</span>
            <h1 className="text-charcoal mb-4">Conditions We Treat</h1>
            <p className="text-charcoal/80 text-lg max-w-2xl mx-auto font-medium">Expert homeopathic treatment for 50+ conditions across 9 speciality areas</p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-charcoal border border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat === "all" ? "All Conditions" : categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-muted text-sm mb-6 text-center">{filtered.length} condition{filtered.length !== 1 ? "s" : ""}</p>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((t) => {
                const Icon = CategoryIcons[t.category] || Activity;
                return (
                <motion.div
                  key={t.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="group relative block h-[220px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#4ADE80]/50 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(74,222,128,0.15)] bg-[#1B5E35]"
                  >
                    {/* Background Image */}
                    <img
                      src={diseaseImages[t.slug] || "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=400&h=300"}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-350 group-hover:blur-[3px] group-hover:brightness-[0.4]"
                    />

                    {/* Default State Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00140A]/90 via-[#00140A]/30 to-black/10 transition-opacity duration-300 group-hover:opacity-0" />

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-md border border-[#C9963A]/60 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full z-10 transition-opacity duration-300 group-hover:opacity-0">
                      {categoryLabels[t.category]}
                    </div>

                    {/* Icon */}
                    <div className="absolute top-3 right-3 text-white/60 z-10 transition-opacity duration-300 group-hover:opacity-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Default State Name */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
                      <h4 className="text-white font-bold text-lg leading-tight drop-shadow-md">
                        {t.name}
                      </h4>
                    </div>

                    {/* Hover State: Frosted Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 bg-black/20 backdrop-blur-[2px] opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 z-20">
                      <h4 className="text-white font-bold text-xl mb-1.5 drop-shadow-md">
                        {t.name}
                      </h4>
                      <p className="text-white/90 text-sm line-clamp-2 mb-4 leading-relaxed drop-shadow-sm">
                        {t.shortDesc}
                      </p>
                      <span className="text-[#C9963A] text-sm font-bold flex items-center gap-1 group/btn w-fit">
                        Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
