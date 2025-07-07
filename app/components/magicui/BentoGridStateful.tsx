"use client";
import React, { useState } from "react";
import { BentoCard } from "./bento-grid";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { InteractiveHoverButton } from "@/app/components/magicui/interactive-hover-button";

const cards = [
  {
    name: "Безопасность",
    background: <div className="h-24  bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545] w-full" />,
    Icon: ArrowRightIcon,
    description: "Ваши данные и средства защищены современными технологиями безопасности.",
    href: "#",
    cta: "Узнать больше",
  },
  {
    name: "Доходность",
    background: <div className="h-24  bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545]  w-full" />,
    Icon: ArrowRightIcon,
    description: "",
    href: "#",
    cta: "Подробнее",
  },
  {
    name: "Прозрачность",
    background: <div className="h-24  bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545]  w-full" />,
    Icon: ArrowRightIcon,
    description: "",
    href: "#",
    cta: "Узнать больше",
  },
  {
    name: "Надёжность",
    background: <div className="h-24  bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545] w-full" />,
    Icon: ArrowRightIcon,
    description: "",
    href: "#",
    cta: "Узнать больше",
  },
];

export default function BentoGridStateful() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-16 max-w-6xl mx-auto flex flex-col gap-10">

      {/* Üst Satır */}
      <div className="flex gap-6">
        {/* Sol Alan */}
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Безопасность и прибыль — всё в одном месте</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
            Ваши инвестиции в безопасности, а доход растёт вместе с золотом. Прозрачность,
            быстрые операции и поддержка 24/7 для вашего комфорта.
          </p>
          <div className="max-w-xl">
            <InteractiveHoverButton>Действуй сейчас!</InteractiveHoverButton>
          </div>
        </div>

        {/* Sağ Alan */}
        <div className="w-1/2 flex gap-6">
          <BentoCard
            key={cards[0].name}
            {...cards[0]}
            className={`w-2/3 ${
              selected === cards[0].name
                ? "ring-4 ring-red-500"
                : "hover:ring-2 hover:ring-red-400"
            } cursor-pointer`}
            onClick={() => setSelected(cards[0].name)}
          />
          <BentoCard
            key={cards[1].name}
            {...cards[1]}
            className={`w-1/3 ${
              selected === cards[1].name
                ? "ring-4 ring-red-500"
                : "hover:ring-2 hover:ring-red-400"
            } cursor-pointer`}
            onClick={() => setSelected(cards[1].name)}
          />
        </div>
      </div>

      {/* Alt Satır */}
      <div className="flex gap-6">
        {/* Sol Alan */}
        <BentoCard
          key={cards[2].name}
          {...cards[2]}
          className={`w-1/2 ${
            selected === cards[2].name
              ? "ring-4 ring-red-500"
              : "hover:ring-2 hover:ring-red-400"
          } cursor-pointer`}
          onClick={() => setSelected(cards[2].name)}
        />

        {/* Sağ Alan */}
        <div className="w-1/2 flex gap-6">
          <BentoCard
            key={cards[3].name}
            {...cards[3]}
            className={`w-1/3 ${
              selected === cards[3].name
                ? "ring-4 ring-red-500"
                : "hover:ring-2 hover:ring-red-400"
            } cursor-pointer`}
            onClick={() => setSelected(cards[3].name)}
          />
          <BentoCard
            name="Новый блок"
            background={<div className="h-24  bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545]  w-full" />}
            Icon={ArrowRightIcon}
            description="Добавьте сюда ваш контент."
            href="#"
            cta="Подробнее"
            className={`w-2/3 ${
              selected === "Новый блок"
                ? "ring-4 ring-red-500"
                : "hover:ring-2 hover:ring-red-400"
            } cursor-pointer`}
            onClick={() => setSelected("Новый блок")}
          />
        </div>
      </div>
    </div>
  );
}
