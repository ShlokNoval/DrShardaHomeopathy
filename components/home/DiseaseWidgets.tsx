"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { treatments, categoryLabels, type TreatmentCategory, type Treatment } from "@/data/treatments";
import { Sparkles, Wind, Apple, Activity, Baby, HeartPulse, Coffee, ArrowRight, X, CheckCircle2, Brain, Ear } from "lucide-react";

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

import { diseaseImages } from "@/data/treatments";

export default function DiseaseWidgets() {
  const [active, setActive] = useState<"all" | TreatmentCategory>("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const filtered = active === "all"
    ? treatments
    : treatments.filter((t) => t.category === active);

  const displayed = filtered.slice(0, visibleCount);

  return (
    <section className="relative bg-[#0F3D22] py-16 sm:py-24 overflow-hidden">
      {/* Section Background Image */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: 'url(/conditions/homeopathy-default.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F3D22]/90 via-[#0F3D22]/60 to-[#0F3D22]/90 pointer-events-none" />

      {/* Background Enhancements */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9963A] via-transparent to-transparent opacity-10 pointer-events-none blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Conditions We Treat"
          subtitle="Discover natural, lasting healing for chronic and acute conditions"
          light
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = CategoryIcons[cat];
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setVisibleCount(8);
                }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#1B5E35] font-bold"
                    : "text-white border border-white/20 hover:border-white/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#C9963A] rounded-full shadow-[0_0_15px_rgba(201,150,58,0.4)]"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                {!isActive && <div className="absolute inset-0 bg-[#1B5E35]/40 rounded-full" style={{ zIndex: -1 }} />}
                
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#1B5E35]' : 'text-[#C9963A]'}`} />
                {cat === "all" ? "All Conditions" : categoryLabels[cat]}
              </button>
            );
          })}
        </div>

        {/* Disease Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {displayed.map((t) => {
              const Icon = CategoryIcons[t.category];
              return (
                <motion.div
                  key={t.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    onClick={() => setSelectedTreatment(t)}
                    className="group relative h-[220px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#4ADE80]/50 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(74,222,128,0.15)] bg-[#1B5E35]"
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
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Load More Conditions
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedTreatment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#00140A]/80 backdrop-blur-sm"
            onClick={() => setSelectedTreatment(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-md text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-56 sm:h-72 w-full shrink-0">
                <img
                  src={diseaseImages[selectedTreatment.slug] || "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=400&h=300"}
                  alt={selectedTreatment.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 pr-6">
                  <div className="text-[#C9963A] text-xs font-bold uppercase tracking-widest mb-2">
                    {categoryLabels[selectedTreatment.category]}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white leading-tight">
                    {selectedTreatment.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1">
                <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
                  {selectedTreatment.overview}
                </p>

                <div className="bg-[#FAFAF7] rounded-xl p-5 border border-[#1B5E35]/10 mb-8">
                  <h3 className="text-lg font-bold text-[#1B5E35] mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#C9963A]" />
                    How Homeopathy Helps
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1B5E35]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1B5E35]" />
                      </div>
                      <span className="text-gray-700 text-sm">Treats the root cause rather than suppressing symptoms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1B5E35]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1B5E35]" />
                      </div>
                      <span className="text-gray-700 text-sm">Safe, natural remedies with no chemical dependency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1B5E35]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1B5E35]" />
                      </div>
                      <span className="text-gray-700 text-sm">{selectedTreatment.homeopathyApproach.substring(0, 120)}...</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/appointment?reason=${selectedTreatment.slug}`}
                    className="flex-1 flex justify-center items-center gap-2 py-3.5 bg-[#C9963A] hover:bg-[#b58532] text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#C9963A]/20 hover:shadow-[#C9963A]/40 hover:-translate-y-0.5"
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/treatments/${selectedTreatment.slug}`}
                    className="flex-1 flex justify-center items-center gap-2 py-3.5 bg-white border-2 border-[#1B5E35]/20 hover:border-[#1B5E35] hover:bg-[#1B5E35]/5 text-[#1B5E35] font-semibold rounded-xl transition-all"
                  >
                    Read Full Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
