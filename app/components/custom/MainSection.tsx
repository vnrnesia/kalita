import React from "react";

const MainSection: React.FC = () => {
 

  return (
    <section className="w-full pt-12 md:pt-36 pb-12">
      <div className="mx-auto px-8 flex items-center justify-center gap-3">
        <div className="text-center font-black max-w-4xl">
          <h1 className="text-3xl md:text-[3.4vw] text-white leading-tight">
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
            <button className="bg-gray-100 text-black md:px-10 py-3 rounded-full hover:scale-105 transition">
              Зарегистрироваться
            </button>
            <button className="bg-gray-100 text-black md:px-10 py-3 rounded-full hover:scale-105 transition">
              Как это работает?
            </button>
          </div>

        
         
        </div>
      </div>
    </section>
  );
};

export default MainSection;