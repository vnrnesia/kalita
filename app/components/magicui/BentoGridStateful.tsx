"use client";
import React, { useState } from "react";
import { BentoCard } from "./bento-grid";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/app/components/ui/button"; // Kendi buton component'in veya Tailwind button olabilir

const cards = [
  {
    name: "Безопасность",
    background: <div className="h-24 bg-blue-200 w-full" />,
    Icon: ArrowRightIcon,
    description:
      "Ваши данные и средства защищены современными технологиями безопасности.",
    href: "#",
    cta: "Learn More",
  },
  {
    name: "Доходность",
    background: <div className="h-24 bg-green-200 w-full" />,
    Icon: ArrowRightIcon,
    description: "",
    href: "#",
    cta: "Подробнее",
  },
  {
    name: "Прозрачность",
    background: <div className="h-24 bg-yellow-200 w-full" />,
    Icon: ArrowRightIcon,
    description: "",
    href: "#",
    cta: "Узнать больше",
  },
  {
    name: "Надёжность",
    background: <div className="h-24 bg-purple-200 w-full" />,
    Icon: ArrowRightIcon,
    description:
      "Надёжные партнёры и проверенные поставщики золота по всему миру.",
    href: "#",
    cta: "Узнать больше",
  },
];

export default function BentoGridStateful() {
  const [selected, setSelected] = useState<string | null>(null);

  // Kartları ikili gruplara böl
  const groups = [];
  for (let i = 0; i < cards.length; i += 2) {
    groups.push(cards.slice(i, i + 2));
  }

  return (
    <div className=" py-16 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
      {/* Sol Alan */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6">
          Безопасность и прибыль — всё в одном месте
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
          Ваши инвестиции в безопасности, а доход растёт вместе с
          золотом.Прозрачность, быстрые операции и поддержка 24/7 для вашего
          комфорта.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
          İstersen buraya CTA butonlar veya animasyonlar ekleyebiliriz.
        </p>
        <Button size="lg" className="w-fit">
          Harekete Geç
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Sağ Alan */}
      <div className="lg:w-1/2 w-full flex flex-col gap-6">
        {groups.map((group, groupIndex) => {
          const isEvenRow = groupIndex % 2 === 0;
          return (
            <div key={groupIndex} className="flex gap-6">
              {group.map((card, cardIndex) => {
                const widthClass = isEvenRow
                  ? cardIndex === 0
                    ? "w-2/3"
                    : "w-1/3"
                  : cardIndex === 0
                  ? "w-1/3"
                  : "w-2/3";

                return (
                  <BentoCard
                    key={card.name}
                    {...card}
                    className={`${widthClass} ${
                      selected === card.name
                        ? "ring-4 ring-red-500"
                        : "hover:ring-2 hover:ring-red-400"
                    } cursor-pointer`}
                    onClick={() => setSelected(card.name)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
