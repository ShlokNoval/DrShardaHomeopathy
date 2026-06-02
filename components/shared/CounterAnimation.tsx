"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterAnimationProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

function formatNumber(n: number): string {
  // Use Indian number format (e.g. 10,000)
  return n.toLocaleString("en-IN");
}

export default function CounterAnimation({
  target,
  suffix = "",
  duration = 2000,
  className = "",
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Trigger animation when element comes into view
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: duration / 1000,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Math.round(value));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
