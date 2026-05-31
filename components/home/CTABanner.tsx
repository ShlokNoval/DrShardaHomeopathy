import Link from "next/link";
import FloatingGlobules from "@/components/shared/FloatingGlobules";

export default function CTABanner() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark py-16 sm:py-20 overflow-hidden">
      <FloatingGlobules count={12} opacity={0.2} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-playfair text-white mb-4">
          Begin Your Healing Journey Today
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          Take the first step towards natural, lasting health. Book your
          consultation with Dr. Sharda Tawale and experience the transformative
          power of homeopathy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/appointment"
            className="bg-secondary text-primary-dark font-bold px-8 py-4 rounded-full hover:bg-secondary-light transition-colors text-base shadow-lg"
          >
            📅 Book Appointment
          </Link>
          <Link
            href="/contact"
            className="btn-ghost border-white text-white hover:bg-white/10 text-base px-8 py-4"
          >
            📞 Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
