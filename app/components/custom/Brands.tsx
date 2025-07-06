"use client";

const icons = Array.from({ length: 10 }, (_, i) => `brand${i + 1}.png`);

const Brands = () => {
  return (
    <div className="pt-5 px-6 max-w-7xl mb-16 mx-auto text-center">
      <h3 className="text-md text-gray-500 font-medium mb-2">Партнёры</h3>
      <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
        Нам доверяют более 550 компаний по всему миру
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        Вот некоторые из компаний, которые благодаря Bankbooker смогли с
        уверенностью двигаться вперёд
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center h-20 shadow-sm hover:shadow-md transition"
          >
            <img
              src={`/images/BrandIcon/${icon}`}
              alt={`Company logo ${index + 1}`}
              className={`${
                index === 4 ? "w-[80%] md:w-[45%]" : "w-[100%] md:w-[65%]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
