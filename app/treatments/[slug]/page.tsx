import { treatments, categoryLabels } from "@/data/treatments";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertCircle, Leaf, Stethoscope, ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const t = treatments.find((t) => t.slug === params.slug);
  if (!t) return {};
  return { title: t.metaTitle, description: t.metaDescription };
}

export default function TreatmentDetail({ params }: Props) {
  const treatment = treatments.find((t) => t.slug === params.slug);
  if (!treatment) notFound();

  const related = treatments.filter(
    (t) => treatment.relatedConditions.includes(t.slug) && t.slug !== treatment.slug
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-16 sm:py-20 overflow-hidden">
        <FloatingGlobules count={8} opacity={0.15} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Link href="/treatments" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Treatments
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">{treatment.icon}</span>
            <span className="text-sm font-medium text-secondary bg-secondary/20 px-3 py-1 rounded-full">
              {categoryLabels[treatment.category]}
            </span>
          </div>
          <h1 className="text-white mb-4">{treatment.name}</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">{treatment.shortDesc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          {/* Overview */}
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="font-playfair text-2xl text-charcoal mb-4">Overview</h2>
              <p className="text-muted leading-relaxed text-lg">{treatment.overview}</p>
            </div>
          </ScrollReveal>

          {/* Symptoms & Causes Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal direction="left">
              <div className="bg-red-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle size={20} className="text-red-500" />
                  <h3 className="font-semibold text-lg text-charcoal">Symptoms</h3>
                </div>
                <ul className="space-y-3">
                  {treatment.symptoms.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-charcoal">
                      <span className="text-red-400 mt-1">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-amber-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope size={20} className="text-amber-600" />
                  <h3 className="font-semibold text-lg text-charcoal">Causes</h3>
                </div>
                <ul className="space-y-3">
                  {treatment.causes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-charcoal">
                      <span className="text-amber-500 mt-1">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Homeopathic Approach */}
          <ScrollReveal>
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Leaf size={20} className="text-primary" />
                <h3 className="font-semibold text-lg text-charcoal">Homeopathic Approach</h3>
              </div>
              <p className="text-muted leading-relaxed">{treatment.homeopathyApproach}</p>
            </div>
          </ScrollReveal>

          {/* Doctor's Note */}
          <ScrollReveal>
            <div className="bg-cream rounded-2xl p-8 mb-12 border-l-4 border-secondary">
              <h3 className="font-playfair text-xl text-charcoal mb-3">💬 A Note from Dr. Sharda</h3>
              <p className="text-charcoal/80 italic leading-relaxed">&ldquo;{treatment.doctorNote}&rdquo;</p>
              <p className="text-muted text-sm mt-4 font-medium">— Dr. Sharda Tawale, MD (Homeopath)</p>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h3 className="font-playfair text-xl text-charcoal mb-4">Ready to Start Your Healing Journey?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/appointment" className="btn-primary px-8 py-3">Book Appointment</Link>
                <Link href="/contact" className="btn-ghost px-8 py-3">Contact Us</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Related Conditions */}
          {related.length > 0 && (
            <ScrollReveal>
              <div>
                <h3 className="font-playfair text-xl text-charcoal mb-6 text-center">Related Conditions</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/treatments/${r.slug}`} className="bg-cream rounded-xl p-4 hover:bg-primary/5 transition-colors group text-center">
                      <span className="text-2xl block mb-2">{r.icon}</span>
                      <h4 className="font-semibold text-charcoal group-hover:text-primary transition-colors text-sm">{r.name}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
