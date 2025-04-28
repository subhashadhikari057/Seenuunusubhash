"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set progress bar
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);

    // Set window width safely
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-mario-dark flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-8"
      >
        <Image src="/images/mario-logo.png" alt="Mario Developer" width={200} height={100} priority />
      </motion.div>

      <div className="w-64 h-6 bg-mario-dark-lighter rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-mario-red"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-mario-cream">
        Loading... {progress}%
      </motion.p>

      {windowWidth > 0 && (
        <motion.div
          className="absolute bottom-20"
          animate={{ x: [-20, windowWidth + 20] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <Image src="/images/mario-running.png" alt="Mario running" width={50} height={50} />
        </motion.div>
      )}
    </div>
  );
}
