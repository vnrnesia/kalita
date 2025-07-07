"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const icons = Array.from({ length: 10 }, (_, i) => `/images/BrandIcon/brand${i + 1}.png`);

export default function Brands() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // İkonları iki kere yazarak loop için içerik hazırla
  const doubledIcons = [...icons, ...icons];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const items = Array.from(slider.children) as HTMLElement[];
      const gap = 24; // Tailwind'deki gap-6 yaklaşık 24px (6*4)

      // Toplam genişlik: tüm eleman genişliği + gap'ler
      const totalWidth = items.reduce((acc, el) => acc + el.offsetWidth + gap, 0);

      // Slider genişliği toplam içeriğe eşit olmalı
      slider.style.width = `${totalWidth}px`;

      const animation = gsap.to(slider, {
        x: -totalWidth / 2,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
        },
      });

      return () => {
        animation.kill();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden py-10 max-w-full px-4 sm:px-6 lg:px-8 flex justify-center">
      {/* Slider kapsayıcı: genişlik sınırı ve ortalanmış */}
      <div
        className="overflow-hidden max-w-[1000px] w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        {/* Slider içeriği */}
        <div ref={sliderRef} className="flex gap-6 sm:gap-8 md:gap-10" style={{ width: "max-content" }}>
          {doubledIcons.map((icon, index) => (
            <div
              key={index}
              className="group flex-shrink-0 flex items-center justify-center h-16 sm:h-20 w-28 sm:w-36 hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={icon}
                alt={`Company logo ${index + 1}`}
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
