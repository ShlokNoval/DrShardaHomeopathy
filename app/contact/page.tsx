"use client";

import { useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", phone: "", message: "" }); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 overflow-hidden">
        <FloatingGlobules count={10} opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">📞 Contact</span>
          <h1 className="text-white mb-4">Get In Touch</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">We&apos;d love to hear from you. Reach out with any questions.</p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", content: process.env.NEXT_PUBLIC_CLINIC_ADDRESS || "Pune, Maharashtra, India 411001" },
                  { icon: Phone, title: "Phone", content: process.env.NEXT_PUBLIC_CLINIC_PHONE || "+91-XXXXXXXXXX" },
                  { icon: Mail, title: "Email", content: "drshardatawale@gmail.com" },
                  { icon: Clock, title: "Hours", content: "Mon–Sat: 10AM–2PM & 5PM–8PM | Sun: Closed" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">{item.title}</h4>
                      <p className="text-muted text-sm">{item.content}</p>
                    </div>
                  </div>
                ))}

                {/* WhatsApp CTA */}
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="block bg-[#25D366] text-white rounded-2xl p-6 text-center font-semibold hover:bg-[#20bd5a] transition-colors">
                  💬 Chat with us on WhatsApp
                </a>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-sm aspect-video">
                  <iframe src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || "https://maps.google.com/maps?q=Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Clinic location" />
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="font-playfair text-2xl text-charcoal mb-6">Send Us a Message</h2>

                {status === "sent" ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-charcoal text-lg mb-2">Message Sent!</h3>
                    <p className="text-muted text-sm">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm resize-none" placeholder="How can we help you?" />
                    </div>

                    {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again or contact us directly.</p>}

                    <button type="submit" disabled={status === "sending"} className="btn-primary w-full flex items-center justify-center gap-2">
                      {status === "sending" ? "Sending..." : <><Send size={16} /> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
