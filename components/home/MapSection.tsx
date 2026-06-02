import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Link from "next/link";

export default function MapSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Visit Our Clinic"
          subtitle="Conveniently located in Pune, Maharashtra"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <ScrollReveal direction="left">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] bg-gray-100">
              <iframe
                src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || "https://maps.google.com/maps?q=Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sharda Homeopathy Clinic Location in Pune"
              />
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Clinic Address</h4>
                    <p className="text-muted text-sm">
                      {process.env.NEXT_PUBLIC_CLINIC_ADDRESS || "Pune, Maharashtra, India 411001"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Clinic Timings</h4>
                    <div className="text-sm space-y-1">
                      <p className="flex justify-between gap-4">
                        <span className="text-muted">Monday – Saturday</span>
                        <span className="text-charcoal font-medium">10AM – 2PM, 5PM – 8PM</span>
                      </p>
                      <p className="flex justify-between gap-4">
                        <span className="text-muted">Sunday</span>
                        <span className="text-red-500 font-medium">Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Contact</h4>
                    <p className="text-muted text-sm mb-1">
                      <a href={`tel:${(process.env.NEXT_PUBLIC_CLINIC_PHONE || "+91-XXXXXXXXXX").replace(/[^+\d]/g, "")}`} className="hover:text-primary transition-colors">
                        📞 {process.env.NEXT_PUBLIC_CLINIC_PHONE || "+91-XXXXXXXXXX"}
                      </a>
                    </p>
                    <p className="text-muted text-sm">
                      ✉️ info@shardahomeopathy.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/appointment" className="btn-primary text-center flex-1">
                  Book Appointment
                </Link>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=Pune+Maharashtra+India`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center justify-center gap-2 flex-1"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
