"use client";

import { useState } from "react";
import Link from "next/link";
import { treatments, categoryLabels, type TreatmentCategory } from "@/data/treatments";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories: ("all" | TreatmentCategory)[] = [
  "all", "skin", "respiratory", "digestive", "joint", "children", "womens", "lifestyle", "mental-wellness", "ent",
];

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
              {filtered.map((t) => (
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
                    className="block bg-white rounded-2xl p-6 border border-transparent hover:border-primary/30 card-hover group h-full"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{t.icon}</span>
                      <span className="text-xs font-medium text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                        {categoryLabels[t.category]}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-lg text-charcoal group-hover:text-primary transition-colors mb-2">
                      {t.name}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">{t.shortDesc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
