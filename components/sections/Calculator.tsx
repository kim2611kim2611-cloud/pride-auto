"use client";

import { type FormEvent, useState } from "react";
import { FadeSection } from "@/components/FadeSection";

export function Calculator() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [car, setCar] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <FadeSection id="calculator" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight text-white sm:text-4xl">
          Узнайте точную стоимость
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#A0A0A0]">
          Оставьте заявку — менеджер рассчитает всё за 1 час и ответит на все
          вопросы
        </p>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="rounded-3xl border border-[#D4A843]/25 bg-[#1A1A1A] p-6 shadow-[0_0_60px_rgba(212,168,67,0.06)] sm:p-8">
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <label className="block">
                  <span className="text-sm font-medium text-[#A0A0A0]">
                    Ваше имя
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white outline-none transition focus:border-[#D4A843]/50 focus:ring-2 focus:ring-[#D4A843]/30"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="text-sm font-medium text-[#A0A0A0]">
                    Телефон или Telegram
                  </span>
                  <input
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white outline-none transition focus:border-[#D4A843]/50 focus:ring-2 focus:ring-[#D4A843]/30"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="text-sm font-medium text-[#A0A0A0]">
                    Какой автомобиль вас интересует?
                  </span>
                  <textarea
                    required
                    rows={3}
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white outline-none transition focus:border-[#D4A843]/50 focus:ring-2 focus:ring-[#D4A843]/30"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-8 w-full rounded-full bg-[#D4A843] py-3.5 text-base font-semibold text-[#0A0A0A] transition hover:bg-[#e0b85a]"
                >
                  Получить расчёт
                </button>
              </form>
            ) : (
              <div className="rounded-2xl border border-[#D4A843]/25 bg-black/20 p-6 text-center">
                <p className="text-lg font-medium text-white">
                  Спасибо! Мы свяжемся с вами в течение 1 часа 🚗
                </p>
              </div>
            )}

            <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-[#111] p-5 text-sm text-[#A0A0A0]">
              <p>
                📞 Телефон / WhatsApp:{" "}
                <a
                  href="https://wa.me/821021750107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-[#D4A843]"
                >
                  +82 10 2175 0107
                </a>
              </p>
              <p>
                💬 Telegram:{" "}
                <a
                  href="https://t.me/gi_bok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-[#D4A843]"
                >
                  @gi_bok
                </a>
              </p>
              <p>🌍 Работаем по всей России</p>
            </div>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}
