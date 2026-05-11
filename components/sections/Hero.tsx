"use client";

import { motion } from "framer-motion";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16"
    >
      <div className="hero-gradient absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0a0a0a]/70 to-[#0a0a0a]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#D4A843]/90">
            Автомобили из Китая под ключ
          </p>
          <h1 className="text-balance font-semibold leading-[1.08] tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl">
            Автомобили из Китая — под ключ в России
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#A0A0A0] sm:text-xl">
            Берём на себя всё: поиск, доставку, таможню и документы. Вы просто
            получаете ключи.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => scrollTo("calculator")}
              className="inline-flex items-center justify-center rounded-full bg-[#D4A843] px-8 py-3.5 text-base font-semibold text-[#0A0A0A] shadow-[0_0_40px_rgba(212,168,67,0.25)] transition hover:bg-[#e0b85a]"
            >
              Узнать стоимость
            </button>
            <button
              type="button"
              onClick={() => scrollTo("how-it-works")}
              className="inline-flex items-center justify-center rounded-full border border-[#D4A843]/80 px-8 py-3.5 text-base font-semibold text-[#D4A843] transition hover:border-[#D4A843] hover:bg-[#D4A843]/10"
            >
              Как это работает
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
