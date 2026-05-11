"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { type ReactNode, useState } from "react";
import { FadeSection } from "@/components/FadeSection";

type FaqItem = {
  q: string;
  a: ReactNode;
};

const ITEMS: FaqItem[] = [
  {
    q: "Машина будет нормальная, не битая?",
    a: (
      <>
        <span className="font-medium text-[#D4A843]">Да.</span> Мы работаем напрямую
        с проверенными поставщиками в Китае. Перед отправкой каждый автомобиль
        проходит визуальную проверку, вы получаете фото и видео машины до оплаты.
        Все автомобили новые, с нулевым или минимальным пробегом, приобретаются у{" "}
        <span className="font-medium text-[#D4A843]">
          официальных дилеров в Китае
        </span>
        .
      </>
    ),
  },
  {
    q: "Почему так долго — 6–8 недель?",
    a: (
      <>
        Машина физически едет из Китая в Россию — это занимает{" "}
        <span className="font-medium text-[#D4A843]">2–4 недели</span> морем или по
        железной дороге. Плюс таможенное оформление во Владивостоке — ещё{" "}
        <span className="font-medium text-[#D4A843]">1–2 недели</span>. Мы держим вас
        в курсе на каждом этапе и отправляем фото с пути.
      </>
    ),
  },
  {
    q: "Есть ли гарантия на автомобиль?",
    a: (
      <>
        Новые автомобили из Китая имеют{" "}
        <span className="font-medium text-[#D4A843]">
          заводскую гарантию производителя
        </span>
        . Условия зависят от конкретной марки и модели — уточняем индивидуально.
        Большинство китайских брендов дают гарантию 3 года или 100 000 км.
      </>
    ),
  },
  {
    q: "Можно ли поставить на учёт в России?",
    a: (
      <>
        <span className="font-medium text-[#D4A843]">Да, без проблем.</span>{" "}
        Автомобиль приходит с полным пакетом документов: ЭПТС (электронный
        паспорт ТС) и СБКТС (одобрение типа транспортного средства). Этого
        достаточно для постановки на учёт в любом отделении ГИБДД России.
      </>
    ),
  },
  {
    q: "Чем вы лучше обычного дилера?",
    a: (
      <>
        У официальных дилеров те же китайские автомобили стоят на{" "}
        <span className="font-medium text-[#D4A843]">20–40% дороже</span> из-за
        накрутки за бренд, аренду салона и маркетинг. Мы везём напрямую из Китая,
        поэтому цена значительно ниже. При этом документы, гарантия и качество —
        те же самые.
      </>
    ),
  },
  {
    q: "Как происходит оплата?",
    a: (
      <>
        Схема простая: вы вносите предоплату для бронирования и закупки
        автомобиля, остаток оплачиваете перед отправкой из Китая.{" "}
        <span className="font-medium text-[#D4A843]">Работаем с рублями</span>. Все
        условия фиксируются в договоре до начала работы.
      </>
    ),
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
