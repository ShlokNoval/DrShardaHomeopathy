import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import BotanicalDecor from "@/components/shared/BotanicalDecor";
import { Check } from "lucide-react";

const credentials = [
  "MD (Homeopath)",
  "IIM Bangalore - General Management Programme (GS 10K)",
  "25+ Years of Clinical Practice (Since 2001)",
  "10,000+ Patients Successfully Treated",
  "Member - Maharashtra Homeopathic Medical Association",
];

export default function AboutPreview() {
  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Doctor Image */}
          <ScrollReveal direction="left">
            <div className="relative flex justify-center w-full">
              <div className="relative w-full max-w-md">
                {/* Decorative green circle */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-primary/20 -z-0" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <Image
                    src="/dr-sharda-hero.jpg"
                    alt="Dr. Sharda Tawale - Homeopathic Doctor in Pune"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Badge overlay */}
                  <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    MD (Homeopath) · IIM Bangalore
                  </div>
                </div>
                {/* Scattered pellet dots */}
                <div className="absolute -bottom-3 -right-3 w-5 h-5 rounded-full bg-secondary/40" />
                <div className="absolute top-8 -right-5 w-3 h-3 rounded-full bg-accent/30" />
              </div>
              <BotanicalDecor variant="leaf" position="bottom-left" className="-mb-8 -ml-8" />
            </div>
          </ScrollReveal>

          {/* Right - Bio */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
                Meet Your Healer
              </span>
              <h2 className="font-playfair text-charcoal mb-6">
                Dr. Sharda Tawale
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                With over 25 years of dedicated practice in homeopathic
                medicine since 2001, Dr. Sharda Tawale brings a unique blend of classical
                homeopathic training, an MD in Homeopathy, and management expertise
                from IIM Bangalore to every patient interaction.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Her approach goes beyond treating symptoms - she believes in
                understanding the whole person: their physical health, emotional
                state, lifestyle, and individual constitution. This holistic
                understanding allows her to prescribe the most effective remedies
                tailored specifically for each patient.
              </p>

              {/* Credentials */}
              <ul className="space-y-3 mb-8">
                {credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-charcoal text-sm">{cred}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group"
              >
                Full Profile & Vision
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
