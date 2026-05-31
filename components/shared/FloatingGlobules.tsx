"use client";

import { useMemo } from "react";

interface FloatingGlobulesProps {
  count?: number;
  opacity?: number;
}

export default function FloatingGlobules({
  count = 20,
  opacity = 0.3,
}: FloatingGlobulesProps) {
  const globules = useMemo(() => {
    const colors = [
      "rgba(255, 255, 255, 0.8)",
      "rgba(232, 245, 233, 0.7)",
      "rgba(255, 249, 230, 0.6)",
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 4,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [count]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {globules.map((g) => (
        <div
          key={g.id}
          className="absolute rounded-full animate-float-up"
          style={{
            width: `${g.size}px`,
            height: `${g.size}px`,
            left: `${g.left}%`,
            bottom: `-${g.size}px`,
            backgroundColor: g.color,
            "--duration": `${g.duration}s`,
            "--delay": `${g.delay}s`,
            "--globule-opacity": `${opacity}`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
