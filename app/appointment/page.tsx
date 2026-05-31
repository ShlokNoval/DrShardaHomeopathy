"use client";

import { useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import { treatments } from "@/data/treatments";
import { Calendar, CheckCircle, Clock, MapPin, Monitor, Building2 } from "lucide-react";

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", age: "", gender: "", city: "",
    condition: "", preferred_date: "", preferred_time: "",
    consultation_mode: "in-person", message: "", referral_source: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/appointment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setStatus("sent"); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 overflow-hidden">
        <FloatingGlobules count={10} opacity={0.2} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">📅 Appointment</span>
          <h1 className="text-white mb-4">Book Your Consultation</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Take the first step towards natural healing. Book online or in-person.</p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2"><Clock size={18} /> Clinic Hours</h3>
                <div className="text-sm space-y-2 text-muted">
                  <p>Mon–Sat: 10AM–2PM, 5PM–8PM</p>
                  <p className="text-red-500">Sunday: Closed</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2"><MapPin size={18} /> Location</h3>
                <p className="text-muted text-sm">{process.env.NEXT_PUBLIC_CLINIC_ADDRESS || "Pune, Maharashtra"}</p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
                <h3 className="font-semibold text-primary mb-2">What to Expect</h3>
                <ul className="text-muted text-sm space-y-2">
                  <li>✓ 30–45 min first consultation</li>
                  <li>✓ Complete health analysis</li>
                  <li>✓ Personalized treatment plan</li>
                  <li>✓ Medicine dispensed same day</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  {status === "sent" ? (
                    <div className="text-center py-12">
                      <CheckCircle size={56} className="text-primary mx-auto mb-4" />
                      <h2 className="font-playfair text-2xl text-charcoal mb-2">Appointment Request Sent!</h2>
                      <p className="text-muted mb-6">Our team will contact you within 24 working hours to confirm your appointment.</p>
                      <a href="/" className="btn-ghost">← Back to Home</a>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h2 className="font-playfair text-2xl text-charcoal mb-2">Patient Details</h2>

                      {/* Consultation Mode Toggle */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Consultation Mode *</label>
                        <div className="grid grid-cols-2 gap-3">
                          <button type="button" onClick={() => update("consultation_mode", "in-person")} className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 text-sm font-medium transition-all ${form.consultation_mode === "in-person" ? "border-primary bg-primary/5 text-primary" : "border-gray-200 text-muted hover:border-primary/30"}`}>
                            <Building2 size={18} /> In-Person
                          </button>
                          <button type="button" onClick={() => update("consultation_mode", "online")} className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 text-sm font-medium transition-all ${form.consultation_mode === "online" ? "border-secondary bg-secondary/5 text-secondary" : "border-gray-200 text-muted hover:border-secondary/30"}`}>
                            <Monitor size={18} /> Online
                          </button>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                          <input type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Phone *</label>
                          <input type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
                          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Age</label>
                          <input type="number" min={0} max={120} value={form.age} onChange={(e) => update("age", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Gender</label>
                          <select value={form.gender} onChange={(e) => update("gender", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm bg-white">
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">Condition / Concern *</label>
                        <select required value={form.condition} onChange={(e) => update("condition", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm bg-white">
                          <option value="">Select a condition</option>
                          {treatments.map((t) => (
                            <option key={t.slug} value={t.name}>{t.name}</option>
                          ))}
                          <option value="Other">Other (specify in message)</option>
                        </select>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Preferred Date</label>
                          <input type="date" value={form.preferred_date} onChange={(e) => update("preferred_date", e.target.value)} min={new Date().toISOString().split("T")[0]} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Preferred Time</label>
                          <select value={form.preferred_time} onChange={(e) => update("preferred_time", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm bg-white">
                            <option value="">Select</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">Additional Message</label>
                        <textarea rows={3} value={form.message} onChange={(e) => update("message", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm resize-none" placeholder="Describe your condition briefly..." />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">How did you hear about us?</label>
                        <select value={form.referral_source} onChange={(e) => update("referral_source", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm bg-white">
                          <option value="">Select</option>
                          <option value="google">Google Search</option>
                          <option value="social">Social Media</option>
                          <option value="friend">Friend / Family</option>
                          <option value="doctor">Doctor Referral</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly.</p>}

                      <button type="submit" disabled={status === "sending"} className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4">
                        {status === "sending" ? "Submitting..." : <><Calendar size={18} /> Book Appointment</>}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
