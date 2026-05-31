"use client";

import CounterAnimation from "@/components/shared/CounterAnimation";

const stats = [
  { icon: "🌿", target: 2000, suffix: "+", label: "Patients Healed" },
  { icon: "⏱️", target: 15, suffix: "+", label: "Years of Experience" },
  { icon: "🧬", target: 100, suffix: "+", label: "Diseases Treated" },
  { icon: "⭐", target: 4.9, suffix: "/5", label: "Patient Rating" },
];

export default function TrustBar() {
  return (
    <section className="bg-cream py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              <div className="text-center px-6 sm:px-10">
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <div className="font-playfair text-3xl sm:text-4xl font-bold text-secondary">
                  {stat.target === 4.9 ? (
                    <span>4.9<span className="text-xl">/5</span></span>
                  ) : (
                    <CounterAnimation
                      target={stat.target}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  )}
                </div>
                <p className="text-muted text-sm mt-1">{stat.label}</p>
              </div>
              {/* Gold Divider */}
              {i < stats.length - 1 && (
                <div className="hidden sm:block h-12 w-px bg-secondary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
