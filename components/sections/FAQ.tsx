"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FadeSection } from "@/components/FadeSection";

const ITEMS = [
  {
    q: "Машина будет нормальная, не битая?",
    a: "Да, мы проверяем каждый автомобиль перед отправкой. Предоставляем фото и документы до оплаты.",
  },
  {
    q: "Почему так долго — 6–8 недель?",
    a: "Машина физически едет из Китая, плюс таможенное оформление. Мы держим вас в курсе на каждом этапе.",
  },
  {
    q: "Есть ли гарантия на автомобиль?",
    a: "Зависит от модели и года выпуска. Уточняем индивидуально по каждому авто.",
  },
  {
    q: "Можно ли поставить на учёт в России?",
    a: "Да, автомобиль приходит с полным пакетом документов: ЭПТС и СБКТС. Ставите на учёт в ГИБДД как обычно.",
  },
  {
    q: "Чем вы лучше обычного дилера?",
    a: "Те же китайские авто у официального дилера стоят на 20–40% дороже. Мы везём напрямую, без накрутки дилера.",
  },
  {
    q: "Как происходит оплата?",
    a: "Предоплата для бронирования, остаток перед отправкой. Работаем с рублями и юанями.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <FadeSection id="faq" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight text-white sm:text-4xl">
          Частые вопросы
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[#A0A0A0]">
          Коротко о том, как мы работаем
        </p>

        <div className="mt-12 space-y-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-white">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-[#D4A843]"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="border-t border-white/10 px-5 pb-5 pt-3 text-sm leading-relaxed text-[#A0A0A0]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </FadeSection>
  );
}
