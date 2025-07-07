"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TypewriterTicker() {
  const words = ["стабильно", "быстро", "легко"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const maxWordLength = Math.max(...words.map((word) => word.length));

  useEffect(() => {
    if (!isInView || finished) return;

    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 100 : 180;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, prev.length + 1);
          if (nextText === currentWord) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
          return nextText;
        } else {
          const nextText = prev.slice(0, -1);
          if (nextText === "") {
            const nextIndex = (currentWordIndex + 1) % words.length;
            const newLoopCount = loopCount + 1;

            if (newLoopCount >= words.length * 2) {
              setDisplayedText(words[0]);
              setFinished(true);
              return words[0];
            }

            setIsDeleting(false);
            setCurrentWordIndex(nextIndex);
            setLoopCount(newLoopCount);
          }
          return nextText;
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, loopCount, isInView, finished, words]);

  return (
    <div
      ref={ref}
      className="flex justify-center items-center text-7xl font-extralight"
      style={{ whiteSpace: "nowrap" }}
    >
      <span>Зарабатывайте&nbsp;</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[#862828] inline-block"
        style={{ minWidth: `${maxWordLength}ch` }}
      >
        {displayedText || "\u00A0"}
        <motion.span
          style={{
            display: "inline-block",
            width: 4,
            height: "3.5rem",
            backgroundColor: "#862828",
            marginLeft: 4,
            verticalAlign: "bottom",
            animation: finished ? "none" : "blink 1s infinite alternate",
          }}
        />
      </motion.span>

      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
