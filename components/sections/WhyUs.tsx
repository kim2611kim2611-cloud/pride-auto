"use client";

import { BadgePercent, Car, FileText, Package } from "lucide-react";
import Image from "next/image";
import { FadeSection } from "@/components/FadeSection";

const CARDS = [
  {
    icon: BadgePercent,
    title: "💰 На 20–40% дешевле дилера",
    desc: "Прямые поставки без посредников",
  },
  {
    icon: Package,
    title: "📦 Полный цикл под ключ",
    desc: "От выбора авто до получения ключей",
  },
  {
    icon: FileText,
    title: "📄 Все документы и таможня",
    desc: "ЭПТС, СБКТС, таможенное оформление",
  },
  {
    icon: Car,
    title: "🚗 Любая марка из Китая",
    desc: "BYD, Haval, Geely, Li Auto, Zeekr и другие",
  },
];

export function WhyUs() {
  return (
    <FadeSection id="advantages" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
          alt="Luxury car in dark setting"
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/75" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/65 to-[#0a0a0a]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight text-white sm:text-4xl">
          Почему Pride Auto
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#A0A0A0]">
          Премиальный сервис и выгода без компромиссов по качеству
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#D4A843]/70 hover:shadow-[0_0_40px_rgba(212,168,67,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#D4A843]/5 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4A843]/30 bg-[#1A1A1A] text-[#D4A843]">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A0A0A0]">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </FadeSection>
  );
}
