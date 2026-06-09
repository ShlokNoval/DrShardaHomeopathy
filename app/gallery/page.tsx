import CTABanner from "@/components/home/CTABanner";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View photos of Sharda Homeopathy Clinic in Pune - our facility, treatment rooms, and clinic environment.",
};

const gallery = Array.from({ length: 21 }).map((_, i) => ({
  src: `/gallery/${i + 1}.jpeg`,
  caption: "Sharda Homeopathy Clinic"
}));

export default function GalleryPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 overflow-hidden">
        <FloatingGlobules count={10} opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">📷 Gallery</span>
          <h1 className="text-white mb-4">Homeopathy Gallery</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Explore informative visuals, clinic highlights, and insights into homeopathic care.</p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryGrid images={gallery} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
