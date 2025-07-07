import React from "react";
import { TextHoverEffect } from "../magicui/text-hover-effect";
import { InteractiveHoverButton } from "@/app/components/magicui/interactive-hover-button";

const MainSection: React.FC = () => {
  return (
    <section className="w-full pt-12 md:mt-auto pb-12">
      <div className="mx-auto px-8 flex items-center justify-center gap-3">
        <div className="text-center  font-extrabold max-w-4xl">
          <h1 className="text-3xl md:text-[3.4vw] text-gray-200 leading-tight">
            Инвестируй в{" "}
            <span className="inline-block px-4 py-1 border border-white rounded-full">
              цифровое
            </span>{" "}
            золото Получай доход каждый{" "}
            <span className="inline-block px-4 py-1 border border-white rounded-full">
              месяц
            </span>
          </h1>

          <p className="md:text-lg font-extralight text-gray-300 mt-6">
            Покупай токены, торгуй с другими участниками или <br /> получай
            прибыль по цене золота
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center pr-10">
            <InteractiveHoverButton>Зарегистрироваться</InteractiveHoverButton>
            <InteractiveHoverButton>Как это работает?</InteractiveHoverButton>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
