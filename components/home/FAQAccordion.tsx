"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { faqs } from "@/data/faqs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("g1");

  const homeFaqs = faqs.filter((f) => f.category === "general").slice(0, 5);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about homeopathic treatment"
        />

        <ScrollReveal>
          <div className="space-y-3">
            {homeFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-colors ${
                    isOpen
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-charcoal text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-primary transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-muted text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="text-center mt-8">
          <Link href="/faq" className="text-primary font-semibold hover:text-primary-light transition-colors">
            View All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
