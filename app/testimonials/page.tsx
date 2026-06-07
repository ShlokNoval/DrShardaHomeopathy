import { testimonials } from "@/data/testimonials";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingGlobules from "@/components/shared/FloatingGlobules";
import CTABanner from "@/components/home/CTABanner";
import VideoTestimonials from "@/components/home/VideoTestimonials";
import { Star, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description: "Real video and written reviews from patients treated by Dr. Sharda Tawale at Sharda Homeopathy Clinic, Pune. 4.9/5 rating across 10,000+ patients.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO + VIDEO ZONE - dark green
      ══════════════════════════════════════════════ */}

      {/* Animations + decorative image hover styles */}
      <style>{`
        @keyframes sparklePulse {
          0%, 100% { opacity: 0.08; transform: scale(1) rotate(0deg); }
          50%       { opacity: 0.25; transform: scale(1.3) rotate(20deg); }
        }
        @keyframes floatImg {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .deco-img {
          transition: opacity 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
        }
        .deco-img:hover {
          opacity: 0.8 !important;
          transform: scale(1.05) !important;
          border-color: rgba(201,150,58,0.8) !important;
        }
        .deco-img-tilt-l:hover { transform: scale(1.05) rotate(-8deg) !important; }
        .deco-img-tilt-r:hover { transform: scale(1.05) rotate(8deg) !important; }
        @media (max-width: 1023px) { .deco-side { display: none !important; } }
      `}</style>

      <section className="relative bg-gradient-to-br from-primary to-primary-dark overflow-hidden">

        {/* ── Layer 1: Dot grid texture ── */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />

        {/* ── Layer 2: Grain overlay ── */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
          opacity: 0.03,
          mixBlendMode: "overlay" as React.CSSProperties["mixBlendMode"],
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }} />

        {/* ── Layer 3: Radial warm glow behind heading ── */}
        <div aria-hidden style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400, zIndex: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at center, rgba(201,150,58,0.10) 0%, transparent 70%)",
        }} />

        {/* ── Layer 4: Giant quotation marks ── */}
        <div aria-hidden style={{
          position: "absolute", top: 12, left: 24, zIndex: 0, pointerEvents: "none",
          fontSize: 280, lineHeight: 1, fontFamily: "Georgia, 'Playfair Display', serif",
          color: "rgba(255,255,255,0.04)", userSelect: "none", fontWeight: 700,
        }}>"</div>
        <div aria-hidden style={{
          position: "absolute", bottom: 12, right: 24, zIndex: 0, pointerEvents: "none",
          fontSize: 280, lineHeight: 1, fontFamily: "Georgia, 'Playfair Display', serif",
          color: "rgba(255,255,255,0.04)", userSelect: "none", fontWeight: 700,
        }}>"</div>

        {/* ── Layer 5: Left botanical SVG ── */}
        <div aria-hidden style={{
          position: "absolute", top: 0, left: 0, bottom: 0, width: 120,
          zIndex: 0, pointerEvents: "none", opacity: 0.07, overflow: "hidden",
        }}>
          <svg viewBox="0 0 120 800" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }} fill="none" stroke="white" strokeWidth="1.2">
            <path d="M60 800 Q58 600 60 400 Q62 200 60 0" strokeLinecap="round"/>
            <path d="M60 650 Q30 620 15 590" strokeLinecap="round"/>
            <path d="M60 600 Q85 575 100 545" strokeLinecap="round"/>
            <path d="M60 520 Q28 490 10 455" strokeLinecap="round"/>
            <path d="M60 470 Q88 445 105 415" strokeLinecap="round"/>
            <path d="M60 380 Q25 355 8 320" strokeLinecap="round"/>
            <path d="M60 320 Q90 298 108 268" strokeLinecap="round"/>
            <path d="M60 240 Q30 215 12 182" strokeLinecap="round"/>
            <path d="M60 180 Q88 160 106 130" strokeLinecap="round"/>
            <ellipse cx="15" cy="590" rx="12" ry="7" transform="rotate(-30 15 590)" fill="white" stroke="none"/>
            <ellipse cx="100" cy="545" rx="12" ry="7" transform="rotate(20 100 545)" fill="white" stroke="none"/>
            <ellipse cx="10" cy="455" rx="12" ry="7" transform="rotate(-25 10 455)" fill="white" stroke="none"/>
            <ellipse cx="105" cy="415" rx="12" ry="7" transform="rotate(25 105 415)" fill="white" stroke="none"/>
            <ellipse cx="8" cy="320" rx="12" ry="7" transform="rotate(-20 8 320)" fill="white" stroke="none"/>
            <ellipse cx="108" cy="268" rx="12" ry="7" transform="rotate(30 108 268)" fill="white" stroke="none"/>
            <ellipse cx="12" cy="182" rx="12" ry="7" transform="rotate(-35 12 182)" fill="white" stroke="none"/>
            <ellipse cx="106" cy="130" rx="12" ry="7" transform="rotate(25 106 130)" fill="white" stroke="none"/>
          </svg>
        </div>

        {/* ── Layer 5: Right botanical SVG (mirrored) ── */}
        <div aria-hidden style={{
          position: "absolute", top: 0, right: 0, bottom: 0, width: 120,
          zIndex: 0, pointerEvents: "none", opacity: 0.06, overflow: "hidden",
          transform: "scaleX(-1)",
        }}>
          <svg viewBox="0 0 120 800" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }} fill="none" stroke="white" strokeWidth="1.2">
            <path d="M60 800 Q58 600 60 400 Q62 200 60 0" strokeLinecap="round"/>
            <path d="M60 650 Q30 620 15 590" strokeLinecap="round"/>
            <path d="M60 600 Q85 575 100 545" strokeLinecap="round"/>
            <path d="M60 520 Q28 490 10 455" strokeLinecap="round"/>
            <path d="M60 470 Q88 445 105 415" strokeLinecap="round"/>
            <path d="M60 380 Q25 355 8 320" strokeLinecap="round"/>
            <path d="M60 320 Q90 298 108 268" strokeLinecap="round"/>
            <path d="M60 240 Q30 215 12 182" strokeLinecap="round"/>
            <path d="M60 180 Q88 160 106 130" strokeLinecap="round"/>
            <ellipse cx="15" cy="590" rx="12" ry="7" transform="rotate(-30 15 590)" fill="white" stroke="none"/>
            <ellipse cx="100" cy="545" rx="12" ry="7" transform="rotate(20 100 545)" fill="white" stroke="none"/>
            <ellipse cx="10" cy="455" rx="12" ry="7" transform="rotate(-25 10 455)" fill="white" stroke="none"/>
            <ellipse cx="105" cy="415" rx="12" ry="7" transform="rotate(25 105 415)" fill="white" stroke="none"/>
            <ellipse cx="8" cy="320" rx="12" ry="7" transform="rotate(-20 8 320)" fill="white" stroke="none"/>
            <ellipse cx="108" cy="268" rx="12" ry="7" transform="rotate(30 108 268)" fill="white" stroke="none"/>
            <ellipse cx="12" cy="182" rx="12" ry="7" transform="rotate(-35 12 182)" fill="white" stroke="none"/>
            <ellipse cx="106" cy="130" rx="12" ry="7" transform="rotate(25 106 130)" fill="white" stroke="none"/>
          </svg>
        </div>

        {/* ── Layer 6: Gold sparkle scatter ── */}
        {([
          { top: "8%",  left: "6%",  size: 14, delay: "0s",    dur: "3s" },
          { top: "18%", left: "2%",  size: 9,  delay: "1.2s",  dur: "4s" },
          { top: "38%", left: "5%",  size: 16, delay: "0.5s",  dur: "2.5s" },
          { top: "58%", left: "3%",  size: 10, delay: "2s",    dur: "3.5s" },
          { top: "75%", left: "7%",  size: 12, delay: "0.8s",  dur: "4.5s" },
          { top: "12%", right: "5%", size: 14, delay: "1.5s",  dur: "3s" },
          { top: "28%", right: "2%", size: 8,  delay: "0.3s",  dur: "4s" },
          { top: "50%", right: "6%", size: 18, delay: "2.2s",  dur: "2.8s" },
          { top: "68%", right: "3%", size: 10, delay: "1s",    dur: "5s" },
          { top: "85%", right: "8%", size: 12, delay: "0.6s",  dur: "3.8s" },
        ] as Array<{ top?: string; left?: string; right?: string; size: number; delay: string; dur: string }>).map((s, i) => (
          <div
            key={i}
            aria-hidden
            style={{
              position: "absolute",
              top: s.top, left: s.left, right: s.right,
              zIndex: 0, pointerEvents: "none",
              fontSize: s.size,
              color: "rgba(201,150,58,0.2)",
              animation: `sparklePulse ${s.dur} ${s.delay} ease-in-out infinite`,
              userSelect: "none",
              lineHeight: 1,
            }}
          >✦</div>
        ))}

        {/* ── Photo Layer: Left circular stack + connectors ── */}
        <div className="deco-side" aria-hidden style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 120, zIndex: 1, pointerEvents: "none", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", paddingTop: 60, paddingBottom: 60 }}>
          {/* Leaf connector top */}
          <span style={{ fontSize: 22, opacity: 0.4, marginBottom: -8 }}>🌿</span>
          {/* Circle 1 - vegetables */}
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=160"
            alt=""
            className="deco-img"
            style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(201,150,58,0.4)", opacity: 0.55, mixBlendMode: "luminosity", filter: "saturate(0.7) brightness(0.85)", animation: "floatImg 5s ease-in-out infinite" }}
          />
          <span style={{ fontSize: 20, opacity: 0.35, transform: "rotate(15deg)", margin: "4px 0" }}>🌿</span>
          {/* Circle 2 - herbs */}
          <img
            src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=160"
            alt=""
            className="deco-img"
            style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(201,150,58,0.4)", opacity: 0.55, mixBlendMode: "luminosity", filter: "saturate(0.7) brightness(0.85)", animation: "floatImg 6s 2s ease-in-out infinite" }}
          />
          <span style={{ fontSize: 20, opacity: 0.35, transform: "rotate(-10deg)", margin: "4px 0" }}>🌿</span>
          {/* Circle 3 - mortar pestle */}
          <img
            src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=160"
            alt=""
            className="deco-img"
            style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(201,150,58,0.4)", opacity: 0.55, mixBlendMode: "luminosity", filter: "saturate(0.7) brightness(0.85)", animation: "floatImg 7s 4s ease-in-out infinite" }}
          />
          <span style={{ fontSize: 22, opacity: 0.4, marginTop: -8 }}>🌿</span>
        </div>

        {/* ── Layer 7: Prescription Pad Watermark ── */}
        <div className="deco-side" aria-hidden style={{
          position: "absolute", top: "45%", right: -60, zIndex: 0, pointerEvents: "none",
          fontSize: 48, fontFamily: "Georgia, 'Playfair Display', serif",
          color: "rgba(255,255,255,0.04)", fontWeight: 700, userSelect: "none",
          transform: "rotate(-12deg) translateY(-50%)", whiteSpace: "nowrap"
        }}>
          Dr. Sharda Homeopathy
        </div>

        {/* ── Photo Layer: Right circular stack + connectors ── */}
        <div className="deco-side" aria-hidden style={{ position: "absolute", right: 20, top: 0, bottom: 0, width: 120, zIndex: 1, pointerEvents: "none", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", paddingTop: 60, paddingBottom: 60 }}>
          <span style={{ fontSize: 22, opacity: 0.4, marginBottom: -8 }}>🌿</span>
          {/* Circle 1 - ginger turmeric */}
          <img
            src="https://images.unsplash.com/photo-1550572017-edd951b55104?w=160"
            alt=""
            className="deco-img"
            style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(201,150,58,0.4)", opacity: 0.55, mixBlendMode: "luminosity", filter: "saturate(0.7) brightness(0.85)", animation: "floatImg 5.5s 1s ease-in-out infinite" }}
          />
          <span style={{ fontSize: 20, opacity: 0.35, transform: "rotate(-15deg)", margin: "4px 0" }}>🌿</span>
          {/* Circle 2 - green nature */}
          <img
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=160"
            alt=""
            className="deco-img"
            style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(201,150,58,0.4)", opacity: 0.55, mixBlendMode: "luminosity", filter: "saturate(0.7) brightness(0.85)", animation: "floatImg 6.5s 3s ease-in-out infinite" }}
          />
          <span style={{ fontSize: 20, opacity: 0.35, transform: "rotate(12deg)", margin: "4px 0" }}>🌿</span>
          {/* Circle 3 - healthy food bowl */}
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=160"
            alt=""
            className="deco-img"
            style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(201,150,58,0.4)", opacity: 0.55, mixBlendMode: "luminosity", filter: "saturate(0.7) brightness(0.85)", animation: "floatImg 7.5s 5s ease-in-out infinite" }}
          />
          <span style={{ fontSize: 22, opacity: 0.4, marginTop: -8 }}>🌿</span>
        </div>

        {/* ── Photo Layer: Top-left corner accent ── */}
        <div className="deco-side" aria-hidden style={{ position: "absolute", top: 24, left: 140, zIndex: 1, pointerEvents: "none" }}>
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200"
            alt=""
            className="deco-img deco-img-tilt-l"
            style={{ width: 140, height: 90, borderRadius: 12, objectFit: "cover", opacity: 0.3, mixBlendMode: "luminosity", filter: "saturate(0.7) brightness(0.85)", transform: "rotate(-8deg)", border: "2px solid rgba(201,150,58,0.3)" }}
          />
        </div>

        {/* ── Photo Layer: Top-right corner accent ── */}
        <div className="deco-side" aria-hidden style={{ position: "absolute", top: 24, right: 140, zIndex: 1, pointerEvents: "none" }}>
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=200"
            alt=""
            className="deco-img deco-img-tilt-r"
            style={{ width: 140, height: 90, borderRadius: 12, objectFit: "cover", opacity: 0.3, mixBlendMode: "luminosity", filter: "saturate(0.7) brightness(0.85)", transform: "rotate(8deg)", border: "2px solid rgba(201,150,58,0.3)" }}
          />
        </div>

        <FloatingGlobules count={10} opacity={0.2} />

        {/* Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-10 text-center">
          <span className="inline-block border border-white/30 text-white text-sm px-4 py-1.5 rounded-full mb-4">⭐ Testimonials</span>
          <h1 className="text-white mb-4">Voices of Healing</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Real stories from real patients who trusted us with their health</p>
          <div className="flex items-center justify-center gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="text-secondary fill-secondary" />
            ))}
            <span className="text-white ml-2 font-bold text-lg">4.9/5</span>
          </div>
          <div className="mt-6">
            <a
              href="https://www.google.com/search?q=Dr+Sharda+Homoeopathy+Center+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white hover:bg-white hover:text-primary px-6 py-2 rounded-full font-medium transition-colors"
            >
              Verify on Google Reviews →
            </a>
          </div>
        </div>

        {/* Video grid inside green zone */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-6">
          <VideoTestimonials />
        </div>
      </section>


      {/* ── SVG wave transition: green → cream ── */}
      <div
        aria-hidden
        style={{
          marginTop: -2,
          lineHeight: 0,
          background: "#0F3D22",   /* same as section bottom so no gap */
        }}
      >
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 60 }}
        >
          <path
            d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z"
            fill="#F7F9F4"
          />
        </svg>
      </div>

      {/* ══════════════════════════════════════════════
          WRITTEN REVIEWS - cream zone
      ══════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">

          {/* Written reviews label */}
          <div className="flex items-center justify-center mb-10">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(27,94,53,0.07)",
                border: "1px solid rgba(27,94,53,0.2)",
                borderRadius: 999,
                padding: "6px 18px",
              }}
            >
              <span style={{ fontSize: 16 }}>✍️</span>
              <span style={{ color: "#1B5E35", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
                Written Reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={(i % 6) * 0.05}>
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col card-hover">
                  <Quote size={24} className="text-secondary/30 mb-3" />
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-charcoal text-sm leading-relaxed flex-1 mb-4">&ldquo;{t.review}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">{t.initials}</div>
                    <div>
                      <p className="text-charcoal font-medium text-sm">{t.name}</p>
                      <p className="text-muted text-xs">Treated for {t.condition}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm max-w-xl mx-auto border border-secondary/20">
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-secondary fill-secondary" />
                ))}
              </div>
              <h3 className="font-playfair text-xl text-charcoal mb-2">Read More on Google</h3>
              <p className="text-muted text-sm mb-5">See all verified patient reviews directly on Google</p>
              <a
                href="https://www.google.com/search?sca_esv=b1b5cd030bce143a&sxsrf=ANbL-n55Og0o7vgPF7jKCc3kUDiEr9VygQ:1780409699271&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_xzkhZCGpc0wIBfbs2Iwn68TC8o7YNaT1jbXTopVOaSBXY9AWU2qKnq_Ur6DQWY5DkFaDVWxgq4wYi_3QnoMR9PC0nwCzEo66TqPqGl-0h9OUaS6hLg%3D%3D&q=Dr+Sharda+Homoeopathy+Center+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                ⭐ Read Our Google Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
