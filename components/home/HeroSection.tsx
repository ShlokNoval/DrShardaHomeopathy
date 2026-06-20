"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Calendar, ArrowRight, Star, Users, Clock, ChevronDown } from "lucide-react";

/* ─── Static trust micro-pills ───────────────────────────────────── */
const TRUST_PILLS = [
  { icon: "🌿", label: "Natural & Safe" },
  { icon: "✦",  label: "No Side Effects" },
  { icon: "⭐", label: "4.9/5 on Google" },
];

function TrustPills() {
  return (
    <div className="flex flex-wrap gap-2 px-4 pt-3 pb-1" aria-label="Trust indicators">
      {TRUST_PILLS.map((pill) => (
        <span
          key={pill.label}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(201,150,58,0.35)",
            borderRadius: "999px",
            fontSize: "11px",
            color: "rgba(255,255,255,0.70)",
            padding: "4px 12px",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          {pill.icon}&nbsp;&nbsp;{pill.label}
        </span>
      ))}
    </div>
  );
}

/* ─── Scroll Indicator ───────────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <div
      className="hidden sm:flex absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1"
      style={{ opacity: 0.4 }}
      aria-hidden
    >
      <span style={{ color: "#C9963A", fontSize: "11px", letterSpacing: "0.08em", fontWeight: 500 }}>
        SCROLL
      </span>
      <ChevronDown size={20} style={{ color: "#C9963A", animation: "bounce 1.8s ease-in-out infinite" }} />
    </div>
  );
}

/* ─── Layer 1: Mortar & Pestle silhouette (left dead zone, desktop only) ── */
function MortarSilhouette() {
  return (
    <div
      className="absolute hidden lg:block pointer-events-none z-[1]"
      style={{ left: "2%", top: "30%", width: 200, height: 200, opacity: 0.06 }}
      aria-hidden
    >
      <svg viewBox="0 0 200 200" fill="white" xmlns="http://www.w3.org/2000/svg">
        {/* Bowl */}
        <ellipse cx="100" cy="155" rx="70" ry="18" />
        <path d="M35 115 Q30 155 100 173 Q170 155 165 115 Q140 105 100 105 Q60 105 35 115Z" />
        {/* Rim */}
        <ellipse cx="100" cy="113" rx="68" ry="14" fill="none" stroke="white" strokeWidth="6" />
        {/* Pestle */}
        <rect x="88" y="20" width="24" height="95" rx="12" />
        <ellipse cx="100" cy="22" rx="18" ry="10" />
        <ellipse cx="100" cy="112" rx="14" ry="7" />
      </svg>
    </div>
  );
}

/* ─── Layer 2: Botanical sprigs SVGs ──────────────────────────────── */
function BotanicalSprigs() {
  return (
    <>
      {/* Large sprig - bottom-left, cropped */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none z-[2] hidden sm:block"
        style={{ width: 280, height: 280, opacity: 0.14, filter: "sepia(60%) saturate(80%) hue-rotate(10deg)" }}
        aria-hidden
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 200 Q 70 140 100 100 Q 130 60 160 30" stroke="#E8C96D" strokeWidth="3" fill="none" />
          <ellipse cx="105" cy="95" rx="22" ry="13" fill="#C9A84C" transform="rotate(-30 105 95)" />
          <ellipse cx="125" cy="72" rx="18" ry="11" fill="#E8C96D" transform="rotate(-45 125 72)" />
          <ellipse cx="85" cy="118" rx="20" ry="12" fill="#C9A84C" transform="rotate(-15 85 118)" />
          <ellipse cx="145" cy="50" rx="15" ry="9" fill="#E8C96D" transform="rotate(-55 145 50)" />
          <ellipse cx="68" cy="145" rx="17" ry="10" fill="#C9A84C" transform="rotate(-10 68 145)" />
          <ellipse cx="108" cy="118" rx="14" ry="8" fill="#E8C96D" transform="rotate(-35 108 118)" />
          <circle cx="160" cy="30" r="6" fill="#C9A84C" />
          <circle cx="148" cy="43" r="4" fill="#E8C96D" />
        </svg>
      </div>

      {/* Medium sprig - top-right (behind vials) */}
      <div
        className="absolute top-0 right-0 pointer-events-none z-[2] hidden sm:block"
        style={{ width: 220, height: 220, opacity: 0.10, filter: "sepia(40%) saturate(80%)" }}
        aria-hidden
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M160 0 Q 120 50 100 100 Q 80 150 90 200" stroke="#E8C96D" strokeWidth="3" fill="none" />
          <ellipse cx="102" cy="95" rx="25" ry="14" fill="#C9A84C" transform="rotate(20 102 95)" />
          <ellipse cx="118" cy="68" rx="20" ry="12" fill="#E8C96D" transform="rotate(35 118 68)" />
          <ellipse cx="88" cy="122" rx="22" ry="13" fill="#C9A84C" transform="rotate(10 88 122)" />
          <ellipse cx="132" cy="45" rx="16" ry="9" fill="#E8C96D" transform="rotate(50 132 45)" />
          <circle cx="160" cy="5" r="7" fill="#C9A84C" />
        </svg>
      </div>

      {/* Small chamomile near badge - top-left content area */}
      <div
        className="absolute pointer-events-none z-[2]"
        style={{ left: "3%", top: "18%", width: 90, height: 90, opacity: 0.13 }}
        aria-hidden
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Chamomile petals */}
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
            <ellipse
              key={i}
              cx="50" cy="22" rx="5" ry="14"
              fill="#E8C96D"
              opacity="0.8"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          {/* Center */}
          <circle cx="50" cy="50" r="10" fill="#C9A84C" />
          {/* Stem */}
          <path d="M50 60 Q 45 80 40 100" stroke="#C9A84C" strokeWidth="3" fill="none" />
          <ellipse cx="36" cy="88" rx="10" ry="6" fill="#C9A84C" opacity="0.7" transform="rotate(-30 36 88)" />
        </svg>
      </div>
    </>
  );
}

/* ─── Layer 3: Warm golden glow behind doctor image ─────────────── */
function WarmGlow() {
  return (
    <div
      className="absolute pointer-events-none z-[3]"
      style={{
        right: "5%",
        top: "50%",
        transform: "translateY(-50%)",
        width: 500,
        height: 500,
        background: "radial-gradient(circle at center, rgba(201,150,58,0.18) 0%, rgba(201,150,58,0.08) 40%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(20px)",
      }}
      aria-hidden
    />
  );
}

/* ─── Layer 4: Globule clusters (replacing plain dots) ──────────── */
function GlobuleClusters() {
  const clusters = [
    // top-left
    { cx: "6%",  cy: "15%", count: 6, baseSize: 5, color: "rgba(255,255,255,0.15)" },
    // bottom-center
    { cx: "48%", cy: "82%", count: 7, baseSize: 6, color: "rgba(201,150,58,0.18)" },
    // far right mid
    { cx: "93%", cy: "45%", count: 5, baseSize: 4, color: "rgba(255,255,255,0.12)" },
    // mid-left
    { cx: "12%", cy: "60%", count: 4, baseSize: 5, color: "rgba(201,150,58,0.15)" },
    // top-right area
    { cx: "78%", cy: "10%", count: 5, baseSize: 4, color: "rgba(255,255,255,0.12)" },
  ];

  // Deterministic offsets to avoid hydration mismatch
  const offsets = [
    [0,0],[8,5],[-6,9],[4,-7],[-9,3],[7,-4],[3,8],
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-[4]" aria-hidden>
      {clusters.map((cluster, ci) => (
        <div
          key={ci}
          className="absolute"
          style={{
            left: cluster.cx,
            top: cluster.cy,
            animation: `globuleDrift ${7 + ci * 1.3}s ease-in-out infinite`,
            animationDelay: `${ci * 0.8}s`,
          }}
        >
          {offsets.slice(0, cluster.count).map((off, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: cluster.baseSize + (i % 3),
                height: cluster.baseSize + (i % 3),
                left: off[0],
                top: off[1],
                background: cluster.color,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ─── Layer 5: Medicine Vials cluster (right, behind doctor) ─────── */
function MedicineVials() {
  const vials = [
    {
      width: 28, height: 90, rotate: -12, top: "-15%", right: "2%",
      label: "Arnica Mont.", delay: "0s", duration: "5s",
    },
    {
      width: 22, height: 110, rotate: 8, top: "-5%", right: "12%",
      label: null, delay: "1.2s", duration: "6.5s",
    },
    {
      width: 32, height: 70, rotate: 18, top: "10%", right: "-2%",
      label: "Belladonna", delay: "2s", duration: "4.5s",
    },
    {
      width: 20, height: 60, rotate: -8, top: "62%", left: "-5%",
      label: null, delay: "0.7s", duration: "7s",
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-[5] hidden lg:block" aria-hidden>
      {vials.map((vial, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: vial.width,
            height: vial.height,
            top: vial.top,
            right: vial.right,
            left: vial.left,
            transform: `rotate(${vial.rotate}deg)`,
            animation: `vialFloat ${vial.duration} ease-in-out infinite`,
            animationDelay: vial.delay,
          }}
        >
          {/* Vial SVG */}
          <svg
            viewBox="0 0 30 100"
            width={vial.width}
            height={vial.height}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cap */}
            <rect x="8" y="0" width="14" height="10" rx="3" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            {/* Neck */}
            <rect x="11" y="9" width="8" height="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            {/* Body */}
            <rect x="5" y="17" width="20" height="72" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            {/* Liquid fill */}
            <rect x="6" y="50" width="18" height="38" rx="3" fill="rgba(201,150,58,0.25)" />
            {/* Label band */}
            {vial.label && (
              <>
                <rect x="5" y="30" width="20" height="18" rx="2" fill="rgba(255,248,236,0.55)" />
                <text x="15" y="41" textAnchor="middle" fontSize="4" fill="#5A3A00" fontFamily="serif" fontStyle="italic">
                  {vial.label.length > 10 ? vial.label.slice(0,10) : vial.label}
                </text>
              </>
            )}
            {/* Shine */}
            <rect x="8" y="19" width="3" height="40" rx="1.5" fill="rgba(255,255,255,0.18)" />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ─── Layer 6: Floating ingredient cutouts ───────────────────────── */
function IngredientCutouts() {
  const ingredients = [
    {
      label: "🍋", size: 52, top: "-8%", right: "28%",
      duration: "9s", delay: "0s", rotateRange: 20,
    },
    {
      label: "🌿", size: 44, top: "65%", right: "22%",
      duration: "11s", delay: "1.5s", rotateRange: -15,
    },
    {
      label: "🫚", size: 40, top: "5%", right: "48%",
      duration: "10s", delay: "3s", rotateRange: 18,
    },
    {
      label: "🌱", size: 48, top: "75%", right: "45%",
      duration: "8s", delay: "0.8s", rotateRange: -12,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-[6] hidden lg:block" aria-hidden>
      {ingredients.map((ing, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: ing.top,
            right: ing.right,
            fontSize: ing.size,
            lineHeight: 1,
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))",
            animation: `ingredientFloat ${ing.duration} ease-in-out infinite`,
            animationDelay: ing.delay,
          }}
        >
          {ing.label}
        </div>
      ))}
    </div>
  );
}

/* ─── Layer 7: Remedy label cards ────────────────────────────────── */
function RemedyLabels() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[7] hidden lg:block" aria-hidden>
      {/* Card 1 - near top-right */}
      <div
        className="absolute"
        style={{
          top: "12%",
          right: "3%",
          transform: "rotate(-3deg)",
          background: "#FFF8EC",
          border: "1px solid rgba(201,150,58,0.55)",
          borderRadius: 8,
          padding: "6px 10px",
          opacity: 0.78,
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
          transition: "transform 0.3s ease, opacity 0.3s ease",
          animation: "labelFloat 6s ease-in-out infinite",
        }}
      >
        <p style={{ fontFamily: "Georgia, serif", fontSize: 9, color: "#5A3A00", fontStyle: "italic", fontWeight: 600, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
          Calendula Q
        </p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 8, color: "#8B6914", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
          · Skin Healing ·
        </p>
      </div>

      {/* Card 2 - near bottom-left of image */}
      <div
        className="absolute"
        style={{
          bottom: "28%",
          right: "42%",
          transform: "rotate(2deg)",
          background: "#FFF8EC",
          border: "1px solid rgba(201,150,58,0.55)",
          borderRadius: 8,
          padding: "6px 10px",
          opacity: 0.72,
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
          animation: "labelFloat 7.5s ease-in-out infinite",
          animationDelay: "1.8s",
        }}
      >
        <p style={{ fontFamily: "Georgia, serif", fontSize: 9, color: "#5A3A00", fontStyle: "italic", fontWeight: 600, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
          Rhus Tox
        </p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: 8, color: "#8B6914", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
          · Joint Relief ·
        </p>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <>
      {/* All keyframes in one block */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        @keyframes vialFloat {
          0%, 100% { transform: translateY(0px) rotate(var(--r, 0deg)); }
          50%       { transform: translateY(-12px) rotate(var(--r, 0deg)); }
        }
        @keyframes globuleDrift {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes ingredientFloat {
          0%   { transform: translateY(0px) rotate(0deg); }
          25%  { transform: translateY(-10px) rotate(5deg); }
          50%  { transform: translateY(-5px) rotate(-3deg); }
          75%  { transform: translateY(-14px) rotate(4deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes labelFloat {
          0%, 100% { transform: translateY(0px) rotate(var(--lr, -3deg)); }
          50%       { transform: translateY(-6px) rotate(var(--lr, -3deg)); }
        }
      `}</style>

      <section
        className="relative flex flex-col bg-[#1B5E35] overflow-hidden"
        style={{ minHeight: "calc(100vh - 88px)" }}
      >
        {/* ── Trust pills pinned at very top ── */}
        <div className="relative z-20">
          <TrustPills />
        </div>

        {/* ══════════════════════════════════════════════
            BACKGROUND LAYERS (back to front)
        ══════════════════════════════════════════════ */}

        {/* Dot mesh grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />

        {/* Glow spots */}
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[600px] h-[600px] bg-[#C9963A] rounded-full blur-[120px] mix-blend-screen opacity-[0.12] pointer-events-none z-0" aria-hidden />
        <div className="absolute top-1/3 -left-[10%] w-[500px] h-[500px] bg-[#2E7D50] rounded-full blur-[100px] mix-blend-screen opacity-40 pointer-events-none z-0" aria-hidden />
        <div className="absolute top-0 left-0 w-[150%] h-[300px] bg-gradient-to-b from-white/[0.06] to-transparent transform -rotate-12 -translate-y-1/2 -translate-x-1/4 pointer-events-none mix-blend-overlay z-0" aria-hidden />

        {/* Falling leaves */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
          {[
            { l:"15%", d:"12s", del:"0s",   s:0.6 },
            { l:"35%", d:"15s", del:"3s",   s:0.5 },
            { l:"55%", d:"11s", del:"6s",   s:0.7 },
            { l:"72%", d:"14s", del:"1.5s", s:0.45 },
            { l:"88%", d:"13s", del:"4.5s", s:0.55 },
            { l:"5%",  d:"16s", del:"8s",   s:0.4 },
            { l:"48%", d:"10s", del:"2s",   s:0.65 },
            { l:"92%", d:"12s", del:"7s",   s:0.5 },
          ].map((leaf, i) => (
            <div
              key={`leaf-${i}`}
              className="absolute animate-fall text-[#C9963A] opacity-[0.14]"
              style={{ left: leaf.l, top: "-12%", animationDuration: leaf.d, animationDelay: leaf.del, transform: `scale(${leaf.s})` }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C7 2 3 6 3 12C3 18 12 22 12 22C12 22 21 18 21 12C21 6 17 2 12 2Z" />
              </svg>
            </div>
          ))}
        </div>

        {/* LAYER 1 - Mortar & Pestle silhouette */}
        <MortarSilhouette />

        {/* LAYER 2 - Botanical sprigs */}
        <BotanicalSprigs />

        {/* LAYER 3 - Warm golden glow behind image */}
        <WarmGlow />

        {/* LAYER 4 - Globule clusters */}
        <GlobuleClusters />

        {/* LAYER 5 - Medicine vials (positioned relative to right column) */}
        <div className="absolute inset-0 pointer-events-none z-[5]" aria-hidden>
          {/* Vial group - top-right of image area */}
          <div className="absolute hidden lg:block" style={{ right: "6%", top: "8%", width: 180, height: 140 }}>
            {/* Vial 1 */}
            <div style={{ position:"absolute", left:0, top:0, animation:"vialFloat 5s ease-in-out infinite", animationDelay:"0s" }}>
              <svg viewBox="0 0 30 100" width={26} height={88} xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="0" width="14" height="10" rx="3" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                <rect x="11" y="9" width="8" height="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <rect x="5" y="17" width="20" height="72" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                <rect x="6" y="50" width="18" height="38" rx="3" fill="rgba(201,150,58,0.28)" />
                <rect x="5" y="28" width="20" height="16" rx="2" fill="rgba(255,248,236,0.55)" />
                <text x="15" y="37" textAnchor="middle" fontSize="3.5" fill="#5A3A00" fontFamily="Georgia, serif" fontStyle="italic">Arnica Mont.</text>
                <rect x="8" y="19" width="3" height="38" rx="1.5" fill="rgba(255,255,255,0.18)" />
              </svg>
            </div>
            {/* Vial 2 - taller, center */}
            <div style={{ position:"absolute", left:42, top:-18, transform:"rotate(7deg)", animation:"vialFloat 6.5s ease-in-out infinite", animationDelay:"1.2s" }}>
              <svg viewBox="0 0 30 110" width={24} height={108} xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="0" width="14" height="10" rx="3" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
                <rect x="11" y="9" width="8" height="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
                <rect x="5" y="17" width="20" height="82" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <rect x="6" y="60" width="18" height="38" rx="3" fill="rgba(144,238,144,0.18)" />
                <rect x="8" y="19" width="3" height="44" rx="1.5" fill="rgba(255,255,255,0.15)" />
              </svg>
            </div>
            {/* Vial 3 - short, right */}
            <div style={{ position:"absolute", left:80, top:10, transform:"rotate(18deg)", animation:"vialFloat 4.5s ease-in-out infinite", animationDelay:"2.1s" }}>
              <svg viewBox="0 0 36 75" width={32} height={68} xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="0" width="20" height="12" rx="4" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
                <rect x="5" y="11" width="26" height="58" rx="6" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <rect x="6" y="40" width="24" height="28" rx="4" fill="rgba(201,150,58,0.22)" />
                <rect x="5" y="18" width="26" height="18" rx="3" fill="rgba(255,248,236,0.50)" />
                <text x="18" y="29" textAnchor="middle" fontSize="3.8" fill="#5A3A00" fontFamily="Georgia, serif" fontStyle="italic">Belladonna</text>
                <rect x="8" y="13" width="4" height="30" rx="2" fill="rgba(255,255,255,0.18)" />
              </svg>
            </div>
          </div>

          {/* Small bottle - bottom-left of image frame */}
          <div
            className="absolute hidden lg:block"
            style={{ right: "43%", bottom: "22%", transform: "rotate(-8deg)", animation: "vialFloat 7s ease-in-out infinite", animationDelay: "0.7s" }}
          >
            <svg viewBox="0 0 30 60" width={22} height={56} xmlns="http://www.w3.org/2000/svg">
              <rect x="9" y="0" width="12" height="8" rx="3" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <rect x="5" y="7" width="20" height="48" rx="6" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
              <rect x="6" y="32" width="18" height="22" rx="4" fill="rgba(201,150,58,0.20)" />
              <rect x="7" y="11" width="4" height="24" rx="2" fill="rgba(255,255,255,0.16)" />
            </svg>
          </div>
        </div>

        {/* LAYER 6 - Ingredient cutouts */}
        <IngredientCutouts />

        {/* LAYER 7 - Remedy label cards */}
        <RemedyLabels />

        {/* ══════════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════════ */}
        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 w-full pt-6 sm:pt-10 pb-8 lg:py-0 lg:mt-0">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center w-full">

            {/* Left Column - Text */}
            <ScrollReveal direction="left">
              <div className="flex flex-col">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 border border-[#C9963A]/40 bg-white/10 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-4 sm:mb-6 shadow-sm w-fit">
                  <span>🌿</span>
                  <span>Trusted Homeopathic Care</span>
                </div>

                <h1 className="mb-3 sm:mb-5 leading-tight">
                  <span className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white block relative w-fit mb-2 sm:mb-3">
                    Heal Naturally.
                    <svg
                      className="absolute w-[105%] h-4 -bottom-2 -left-1 text-[#C9963A]"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10 100 2"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight text-white block mt-3 sm:mt-4">
                    Live Completely.
                  </span>
                </h1>

                <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl mb-5 sm:mb-8 leading-relaxed font-light">
                  Expert homeopathic care for 50+ conditions by Dr. Sharda Tawale.
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Safe, natural, and lasting results.
                </p>

                {/* CTA Buttons (Desktop) */}
                <div className="hidden lg:flex flex-row gap-4 mb-0">
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9963A] to-[#E8C96D] hover:from-[#b58532] hover:to-[#d4b55c] text-[#0F3D22] text-base font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-lg shadow-[#C9963A]/20"
                  >
                    <Calendar size={20} />
                    Book Appointment
                  </Link>
                  <Link
                    href="/treatments"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#C9963A] text-white hover:bg-[#C9963A]/10 text-base font-semibold px-8 py-4 rounded-full transition-colors"
                  >
                    Explore Treatments
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Doctor Image */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-0 w-full items-center lg:items-end">
                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative z-10">

                  {/* ── Health image floating card - top-right of image ── */}
                  <div
                    className="absolute hidden lg:block z-30"
                    style={{
                      top: "-28px",
                      right: "-60px",
                      animation: "vialFloat 7s ease-in-out infinite",
                      animationDelay: "0.5s",
                    }}
                  >
                    <div
                      style={{
                        width: 148,
                        borderRadius: 16,
                        overflow: "hidden",
                        border: "2px solid rgba(201,150,58,0.55)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.28), 0 0 0 4px rgba(27,94,53,0.4)",
                        background: "#0F3D22",
                      }}
                    >
                      <Image
                        src="/hero-health.png"
                        alt="Natural healing foods and holistic health"
                        width={148}
                        height={118}
                        className="object-cover w-full"
                        style={{ display: "block" }}
                      />
                      {/* Label */}
                      <div
                        style={{
                          padding: "5px 10px",
                          background: "rgba(15,61,34,0.95)",
                          borderTop: "1px solid rgba(201,150,58,0.3)",
                        }}
                      >
                        <p style={{ color: "#E8C96D", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0, fontFamily: "Georgia, serif" }}>
                          🌿 Natural Healing
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Double ring + glow */}
                  <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full p-2 border-[4px] border-white/10 ring-2 ring-[#C9963A]/50 ring-offset-4 ring-offset-[#1B5E35] shadow-[0_0_60px_rgba(201,150,58,0.25)]">
                    {/* Floral ornament top */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#C9963A] z-20 bg-[#1B5E35] px-2 rounded-full">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22C12 22 19 18 19 12C19 6 12 2 12 2C12 2 5 6 5 12C5 18 12 22 12 22Z" fill="currentColor" fillOpacity="0.2" />
                        <path d="M12 22V12" />
                        <path d="M12 12C12 12 15 10 15 7" />
                        <path d="M12 12C12 12 9 10 9 7" />
                      </svg>
                    </div>

                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#2E7D50]/20">
                      <Image
                        src="/dr-sharda.jpg"
                        alt="Dr. Sharda Tawale - Homeopathic Physician in Pune"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 640px) 220px, (max-width: 768px) 300px, 380px"
                      />
                    </div>
                  </div>

                  {/* Floating Social Proof Card */}
                  <div className="absolute -bottom-6 -left-4 sm:bottom-4 sm:-left-6 md:bottom-6 md:-left-12 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 border border-gray-100 z-30 hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                        <Image src="https://picsum.photos/100/100?random=1" alt="Patient" fill className="object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                        <Image src="https://picsum.photos/100/100?random=2" alt="Patient" fill className="object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#C9963A] border-2 border-white flex items-center justify-center text-xs font-bold text-white relative z-10 shadow-sm">
                        +
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Trusted by</p>
                      <p className="text-sm font-bold text-[#1B5E35]">10,000+ patients</p>
                    </div>
                  </div>

                  {/* Decorative accent dots */}
                  <div className="absolute top-1/4 -right-4 w-3 h-3 rounded-full bg-[#C9963A]/80 animate-pulse" />
                  <div className="absolute bottom-1/3 -right-8 w-4 h-4 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: "1s" }} />
                </div>
              </div>

              {/* CTA Buttons (Mobile) */}
              <div className="flex lg:hidden flex-col w-full max-w-[340px] gap-4">
                <Link
                  href="/appointment"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9963A] to-[#E8C96D] hover:from-[#b58532] hover:to-[#d4b55c] text-[#0F3D22] text-base font-bold px-6 py-4 rounded-full transition-transform shadow-lg shadow-[#C9963A]/20"
                >
                  <Calendar size={20} />
                  Book Appointment
                </Link>
                <Link
                  href="/treatments"
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#C9963A] text-white hover:bg-[#C9963A]/10 text-base font-semibold px-6 py-4 rounded-full transition-colors"
                >
                  Explore Treatments
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Stats row - bottom ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pt-0 mt-4 lg:mt-0">
          <div className="flex flex-wrap gap-3 text-white justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#C9963A]/30 px-4 py-2.5 rounded-full shadow-sm hover:-translate-y-1 transition-transform">
              <Star size={16} className="text-[#C9963A] fill-[#C9963A]" />
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#C9963A]/30 px-4 py-2.5 rounded-full shadow-sm hover:-translate-y-1 transition-transform">
              <Users size={16} className="text-[#C9963A]" />
              <span className="text-sm font-medium">10,000+ Patients</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#C9963A]/30 px-4 py-2.5 rounded-full shadow-sm hover:-translate-y-1 transition-transform">
              <Clock size={16} className="text-[#C9963A]" />
              <span className="text-sm font-medium">25+ Years</span>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <ScrollIndicator />

        {/* ── Bottom edge - clean straight line into cream section ── */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-4 bg-cream z-20" />
      </section>
    </>
  );
}
