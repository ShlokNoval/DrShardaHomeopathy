"use client";

import { useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import { faqs, faqCategories, type FAQ } from "@/data/faqs";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("g1");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 overflow-hidden">
        <FloatingGlobules count={10} opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">❓ FAQs</span>
          <h1 className="text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Everything you need to know about homeopathic treatment</p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          {/* Search */}
          <div className="relative mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === "all" ? "bg-primary text-white" : "bg-white text-charcoal border border-gray-200 hover:border-primary"}`}
            >
              All
            </button>
            {Object.entries(faqCategories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === key ? "bg-primary text-white" : "bg-white text-charcoal border border-gray-200 hover:border-primary"}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <ScrollReveal key={faq.id}>
                  <div className={`rounded-xl border transition-colors ${isOpen ? "border-primary bg-primary/5" : "border-gray-200 bg-white hover:border-primary/30"}`}>
                    <button onClick={() => setOpenId(isOpen ? null : faq.id)} className="w-full flex items-center justify-between gap-4 p-5 text-left" aria-expanded={isOpen}>
                      <span className="font-semibold text-charcoal text-sm sm:text-base">{faq.question}</span>
                      <ChevronDown size={18} className={`shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                          <p className="px-5 pb-5 text-muted text-sm leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {filteredFaqs.length === 0 && (
            <p className="text-center text-muted py-10">No FAQs match your search. Try different keywords.</p>
          )}
        </div>
      </section>
    </>
  );
}
