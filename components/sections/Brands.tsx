"use client";

import { FadeSection } from "@/components/FadeSection";

const BRANDS: { name: string; blurb: string; price: string }[] = [
  {
    name: "BYD",
    blurb: "Электромобили и гибриды с собственными технологиями",
    price: "от 3 500 000 ₽",
  },
  {
    name: "Haval",
    blurb: "Кроссоверы и внедорожники для города и бездорожья",
    price: "от 2 800 000 ₽",
  },
  {
    name: "Chery",
    blurb: "Сбалансированные модели по доступной цене",
    price: "от 2 200 000 ₽",
  },
  {
    name: "Geely",
    blurb: "Современный дизайн и продуманная эргономика",
    price: "от 2 500 000 ₽",
  },
  {
    name: "Li Auto",
    blurb: "Семейные гибриды с запасом хода для дальних поездок",
    price: "от 5 500 000 ₽",
  },
  {
    name: "Zeekr",
    blurb: "Премиальный сегмент и высокая динамика",
    price: "от 4 800 000 ₽",
  },
  {
    name: "Nio",
    blurb: "Инновации, сервис и быстрая смена аккумуляторов",
    price: "от 6 000 000 ₽",
  },
  {
    name: "Xiaomi",
    blurb: "Экосистема умного автомобиля нового поколения",
    price: "от 4 200 000 ₽",
  },
];

export function Brands() {
  return (
    <FadeSection id="brands" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight text-white sm:text-4xl">
          Популярные марки
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#A0A0A0]">
          Подберём любую модель из официальных каналов Китая
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-[#1c1c1c] to-[#131313] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4A843]/70 hover:shadow-[0_0_36px_rgba(212,168,67,0.15)]"
            >
              <p className="font-semibold text-2xl tracking-tight text-[#D4A843]">{b.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#A0A0A0]">{b.blurb}</p>
              <p className="mt-6 font-medium text-lg text-white">{b.price}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}
