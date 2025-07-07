"use client";

import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { TextHoverEffect } from "../magicui/text-hover-effect";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrollThreshold = pageHeight * 0.9;

      setVisible(scrollPosition >= scrollThreshold);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Основной футер */}
      <footer className=" bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545] w-full min-h-[550px] bg-gray-100 text-gray-800 font-manrope">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
              {/* Левая часть */}
              <div className="max-w-xl py-8 md:py-16">
                <div className="flex items-center gap-2 mb-4">
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-200 font-medium leading-tight mb-3">
                  Готовы взять под контроль <br className="hidden sm:block" /> свои финансы?
                </h2>
                <p className="text-gray-300 font-sans font-light mb-5">
                  Мы с нетерпением ждём, чтобы узнать о ваших финансовых целях.
                </p>
                <div className="pt-8 md:pt-16">
                  <button className="bg-[#ffffff] hover:bg-blue-100 t font-medium px-6 py-2 rounded-full transition-colors duration-300">
                    Бесплатная консультация
                  </button>
                </div>
              </div>

              {/* Правая часть */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 text-sm pt-8 md:pt-36 text-gray-600">
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-gray-200 tracking-wide mb-4">
                    КОНТАКТЫ
                  </h4>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-200" >Телефон</p>
                    <p className="text-base md:text-lg text-gray-200">+7 (917) 889 94–54</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-200">Email</p>
                    <p className="text-base md:text-lg text-gray-200">info@bankbooker.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-200">Пн – Пт:</p>
                    <p className="text-base md:text-lg text-gray-200">8:30 – 17:30</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-200">Москва:</p>
                    <p className="text-base md:text-lg text-gray-200">
                      Кремлёвская ул. 1140, РФ 13131
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Меню */}
      <div className="w-full border-t border-gray-300 bg-white mb-10 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[142px] text-gray-600 text-sm font-semibold text-center">
            <a href="#" className="hover:text-rose-900 transition-colors">Услуги</a>
            <a href="#" className="hover:text-rose-900 transition-colors">О нас</a>
            <a href="#" className="hover:text-rose-900 transition-colors">Новости</a>
            <a href="#" className="hover:text-rose-900 transition-colors">Карьера</a>
            <a href="#" className="hover:text-rose-900 transition-colors">Команда</a>
            <a href="#" className="hover:text-rose-900 transition-colors">Контакты</a>
          </div>
        </div>

        <div className="hidden md:block w-full max-w-[1270px] mx-auto border-t border-gray-300" />

        {/* Нижняя часть */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="text-gray-600 flex flex-wrap items-center justify-center gap-4">
              <span>2025 Bankbooker. Все права защищены.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-600 transition-colors">Условия использования</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Политика конфиденциальности</a>
              </div>
            </div>

            {/* Соцсети */}
            <div className="flex gap-6 pb-10 md:pb-0">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/images/LeftPanel/icon1.png" alt="X" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/images/LeftPanel/icon2.png" alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/images/LeftPanel/icon3.png" alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="/images/LeftPanel/icon4.png" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка наверх */}
      <button
        onClick={scrollToTop}
        aria-label="Наверх"
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
          bg-[#430000] hover:bg-rose-950
          text-white p-3 rounded-full
          shadow-lg
          flex items-center justify-center
          w-10 h-10
          pointer-events-auto
          transition-all duration-300 ease-in-out
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
        `}
        style={{ willChange: "opacity, transform" }}
      >
        <FiChevronUp size={24} />
      </button>
      <div className="flex justify-center items-center  ">
     
    </div>
    </>
  );
};

export default Footer;
