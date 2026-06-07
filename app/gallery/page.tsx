import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View photos of Sharda Homeopathy Clinic in Pune - our facility, treatment rooms, and clinic environment.",
};

const gallery = [
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop", caption: "Clinic Reception" },
  { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop", caption: "Consultation Room" },
  { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", caption: "Treatment Area" },
  { src: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop", caption: "Homeopathic Medicines" },
  { src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop", caption: "Natural Remedies" },
  { src: "https://images.unsplash.com/photo-1612531386530-97ee5d18b862?w=600&h=400&fit=crop", caption: "Clinic Exterior" },
  { src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&h=400&fit=crop", caption: "Waiting Area" },
  { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop", caption: "Medicine Preparation" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", caption: "Patient Wellness" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 overflow-hidden">
        <FloatingGlobules count={10} opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">📷 Gallery</span>
          <h1 className="text-white mb-4">Our Clinic</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">A glimpse into the healing environment at Sharda Homeopathy Clinic</p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <ScrollReveal key={i} delay={(i % 6) * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden shadow-sm bg-white card-hover">
                  <div className="relative aspect-[3/2]">
                    <Image src={img.src} alt={img.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-medium text-sm">{img.caption}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
