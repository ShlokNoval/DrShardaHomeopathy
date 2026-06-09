"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("sharda_loaded");
    if (hasLoaded) {
      setIsReturning(true);
      setShow(false);
    } else {
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("sharda_loaded", "true");
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (isReturning) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="loading-screen"
        >
          {/* Bottle SVG Animation */}
          <motion.svg
            width="80"
            height="120"
            viewBox="0 0 80 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Bottle body */}
            <rect
              x="20"
              y="35"
              width="40"
              height="70"
              rx="8"
              fill="rgba(255,255,255,0.15)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
            />
            {/* Bottle neck */}
            <rect
              x="30"
              y="20"
              width="20"
              height="18"
              rx="4"
              fill="rgba(255,255,255,0.15)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
            />
            {/* Cap */}
            <rect
              x="28"
              y="14"
              width="24"
              height="8"
              rx="3"
              fill="rgba(201,168,76,0.6)"
            />
            {/* Pellets dropping in */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.circle
                key={i}
                cx={35 + (i % 3) * 5}
                cy={10}
                r={3}
                fill="white"
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [0, 60 + i * 5],
                  opacity: [0, 1, 1],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.15,
                  ease: "easeIn",
                }}
              />
            ))}
          </motion.svg>

          {/* Text */}
          <motion.h1
            className="font-playfair text-white text-2xl sm:text-3xl mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Sharda Homeopathy
          </motion.h1>
          <motion.p
            className="text-white/60 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Healing Naturally Since 2001
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
