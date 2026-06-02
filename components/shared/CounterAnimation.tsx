"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface CounterAnimationProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-IN");
}

export default function CounterAnimation({
  target,
  suffix = "",
  duration = 2000,
  className = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    },
    [target, duration]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startTimeRef.current = 0;
          frameRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0, rootMargin: "50px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [hasAnimated, animate]);

  return (
    <span ref={elementRef} className={className}>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
