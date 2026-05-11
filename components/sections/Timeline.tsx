"use client";

import { motion, useInView } from "framer-motion";
import { CalendarClock, FileSearch, Ship, Timer } from "lucide-react";
import { useRef } from "react";
import { FadeSection } from "@/components/FadeSection";

const MILESTONES = [
  {
    icon: FileSearch,
    title: "Поиск авто",
    time: "3–7 дней",
  },
  {
    icon: Ship,
    title: "Доставка из Китая",
    time: "2–4 недели",
  },
  {
    icon: CalendarClock,
    title: "Таможня и документы",
    time: "1–2 недели",
  },
  {
    icon: Timer,
    title: "Итого",
    time: "6–8 недель",
  },
];

export function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(trackRef, { once: true, margin: "-10%" });

  return (
    <FadeSection id="timeline" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight text-white sm:text-4xl">
          Сроки доставки
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#A0A0A0]">
          Реалистичные вилки — без скрытых задержек с нашей стороны
        </p>

        <div ref={trackRef} className="relative mt-16 overflow-x-auto pb-4">
          <div className="relative min-w-[640px] lg:min-w-0">
            <div className="absolute left-0 right-0 top-[26px] h-1 rounded-full bg-white/10" />
            <motion.div
              className="absolute left-0 top-[26px] h-1 rounded-full bg-gradient-to-r from-[#D4A843] to-[#b8892e]"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="relative grid grid-cols-4 gap-4">
              {MILESTONES.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.title} className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-[#D4A843] bg-[#0A0A0A] shadow-[0_0_24px_rgba(212,168,67,0.2)]">
                      <Icon className="h-6 w-6 text-[#D4A843]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-4 font-semibold text-white">{m.title}</h3>
                    <p className="mt-1 text-sm text-[#D4A843]">{m.time}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}
