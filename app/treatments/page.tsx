"use client";

import { useState } from "react";
import Link from "next/link";
import { treatments, categoryLabels, type TreatmentCategory } from "@/data/treatments";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories: ("all" | TreatmentCategory)[] = [
  "all", "skin", "respiratory", "digestive", "joint", "children", "womens", "lifestyle",
];

export default function TreatmentsPage() {
  const [active, setActive] = useState<"all" | TreatmentCategory>("all");

  const filtered = active === "all" ? treatments : treatments.filter((t) => t.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 overflow-hidden">
        <FloatingGlobules count={10} opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">🧬 Treatments</span>
          <h1 className="text-white mb-4">Conditions We Treat</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Expert homeopathic treatment for 100+ conditions across 7 speciality areas</p>
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
                    <h3 className="font-semibold text-lg text-charcoal group-hover:text-primary transition-colors mb-2">
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
