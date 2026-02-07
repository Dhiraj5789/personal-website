"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/slideshow/1.png",
  "/slideshow/2.jpeg",
  "/slideshow/3.jpeg",
  "/slideshow/4.jpeg",
  "/slideshow/5.jpeg",
  "/slideshow/6.jpeg"
];

function MemoryReveal() {
  const [showVideo, setShowVideo] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!showVideo) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 2200);

      return () => clearInterval(interval);
    }
  }, [showVideo]);

  return (
    <div className="memory-box">
      <AnimatePresence mode="wait">
        {showVideo ? (
          <motion.div
            key="video"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            width={300}
            height={300}
          >
            <video
              src="/intro.mp4"
              autoPlay
              muted
              playsInline
              onEnded={() => setShowVideo(false)}
              className="media-video"
              width={300}
              height={300}
            >
              <source src="/intro.mp4" type="video/mp4" />
            </video>
          </motion.div>
        ) : (
          <motion.div
            key="slideshow"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="media"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={images[index]}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8 }}
                className="slide"
              >
                <Image
                  src={images[index]}
                  alt="memory"
                  width={300}
                  height={300}
                  className="image"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MemoryReveal;
