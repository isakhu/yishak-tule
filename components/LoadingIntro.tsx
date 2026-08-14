"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] text-[#f5f5f5]"
          aria-label="Loading YZAK portfolio"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.72, x: 0 }}
              animate={{ opacity: [0, 1, 1, 1], scale: [0.72, 1.05, 1, 1], x: [0, -3, 3, 0] }}
              transition={{ duration: 1.05, times: [0, 0.38, 0.52, 1], ease: "easeOut" }}
              className="relative text-5xl sm:text-6xl font-black tracking-[0.22em] text-[#f5b82e] select-none"
            >
              <span className="relative z-10">YZAK</span>
              <motion.span
                aria-hidden
                animate={{ opacity: [0, 0.9, 0, 0.7, 0], x: [-12, 10, -5, 14, 0] }}
                transition={{ duration: 0.8, delay: 0.22, ease: "linear" }}
                className="absolute inset-0 text-[#f5f5f5]"
              >
                YZAK
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.5, ease: "easeOut" }}
              className="mt-4 h-px max-w-36 bg-[#f5b82e]"
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mt-3 text-[10px] tracking-[0.38em] uppercase text-[#d0d0d0]"
            >
              Digital Craft
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
