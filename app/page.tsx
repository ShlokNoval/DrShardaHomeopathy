import FloatingGlobules from "@/components/shared/FloatingGlobules";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section - Placeholder until full sections are built */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <FloatingGlobules count={20} opacity={0.3} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <span className="inline-block border border-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🌿 Trusted Homeopathic Care
          </span>
          <h1 className="text-white mb-6">Heal Naturally. Live Completely.</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Expert homeopathic care for 100+ conditions by Dr. Sharda Tawale,
            Pune. Safe, natural, and lasting results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="btn-primary text-base px-8 py-4">
              Book Appointment
            </Link>
            <Link
              href="/treatments"
              className="btn-ghost border-white text-white hover:bg-white/10 text-base px-8 py-4"
            >
              Explore Treatments
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
