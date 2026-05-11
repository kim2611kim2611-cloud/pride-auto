"use client";

import {
  Car,
  Globe2,
  Search,
  Ship,
} from "lucide-react";
import Image from "next/image";
import { FadeSection } from "@/components/FadeSection";

const STEPS = [
  {
    num: "01",
    emoji: "🔍",
    icon: Search,
    title: "Вы выбираете авто",
    desc: "Говорите марку, модель, цвет и комплектацию",
  },
  {
    num: "02",
    emoji: "🤝",
    icon: Globe2,
    title: "Мы находим в Китае",
    desc: "Связываемся с поставщиком, проверяем авто, согласовываем цену",
  },
  {
    num: "03",
    emoji: "🚢",
    icon: Ship,
    title: "Доставка и таможня",
    desc: "Организуем доставку, берём на себя все документы и таможенное оформление",
  },
  {
    num: "04",
    emoji: "🚗",
    icon: Car,
    title: "Вы получаете авто",
    desc: "Машина приезжает с российскими документами, готовая к постановке на учёт",
  },
];

export function HowItWorks() {
  return (
    <FadeSection id="how-it-works" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80"
          alt="Car driving on a dark road"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0a0a0a]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight text-white sm:text-4xl">
          Как это работает
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#A0A0A0]">
          Прозрачный процесс от заявки до ключей в ваших руках
        </p>

        <div className="relative mt-16">
          {/* Desktop connector */}
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-[52px] hidden h-0 border-t-2 border-dashed border-[#D4A843]/45 lg:block"
            aria-hidden
          />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="relative flex flex-col items-center text-center">
                  {i < STEPS.length - 1 && (
                    <div
                      className="absolute left-1/2 top-10 h-[calc(100%+3rem)] w-0 -translate-x-1/2 border-l-2 border-dashed border-[#D4A843]/45 lg:hidden"
                      aria-hidden
                    />
                  )}
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="font-medium text-sm tracking-widest text-[#D4A843]">
                      {s.num}
                    </span>
                    <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4A843]/25 bg-[#1A1A1A] shadow-[0_0_30px_rgba(212,168,67,0.08)]">
                      <Icon className="h-7 w-7 text-[#D4A843]" strokeWidth={1.5} />
                    </div>
                    <span className="mt-3 text-2xl" aria-hidden>
                      {s.emoji}
                    </span>
                    <h3 className="mt-2 font-semibold text-lg text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A0A0A0]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FadeSection>
  );
}
