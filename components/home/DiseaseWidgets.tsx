"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { treatments, categoryLabels, type TreatmentCategory } from "@/data/treatments";

const categories: ("all" | TreatmentCategory)[] = [
  "all", "skin", "respiratory", "digestive", "joint", "children", "womens", "lifestyle",
];

export default function DiseaseWidgets() {
  const [active, setActive] = useState<"all" | TreatmentCategory>("all");

  const filtered =
    active === "all"
      ? treatments
      : treatments.filter((t) => t.category === active);

  return (
    <section className="bg-primary-dark py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Conditions We Treat"
          subtitle="Click on any condition to learn how homeopathy can help"
          light
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-secondary text-primary-dark"
                  : "border border-white/20 text-white hover:border-white/40"
              }`}
            >
              {cat === "all" ? "All" : categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Disease Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((t) => (
              <motion.div
                key={t.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/treatments/${t.slug}`}
                  className="block bg-white/5 rounded-2xl border border-white/10 p-5 hover:bg-white/15 hover:border-secondary/50 transition-all duration-300 group"
                >
                  <span className="text-2xl block mb-2">{t.icon}</span>
                  <h4 className="text-white font-semibold text-sm sm:text-base group-hover:text-secondary transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-white/60 text-xs mt-1 line-clamp-2">
                    {t.shortDesc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/treatments" className="btn-primary text-base">
            View All Treatments →
          </Link>
        </div>
      </div>
    </section>
  );
}
