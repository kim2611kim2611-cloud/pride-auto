"use client";

import { type FormEvent, useMemo, useState } from "react";
import {
  calculateImportCost,
  formatRub,
  type AgeBracket,
  type EngineBracket,
} from "@/lib/calculate-import-cost";
import { FadeSection } from "@/components/FadeSection";

const ENGINE_OPTIONS: { value: EngineBracket; label: string }[] = [
  { value: "low", label: "до 1500 см³" },
  { value: "mid", label: "1500–2300 см³" },
  { value: "high", label: "свыше 2300 см³" },
];

const AGE_OPTIONS: { value: AgeBracket; label: string }[] = [
  { value: "new", label: "до 3 лет" },
  { value: "mid", label: "3–5 лет" },
  { value: "old", label: "старше 5 лет" },
];

export function Calculator() {
  const [priceUsd, setPriceUsd] = useState<string>("25000");
  const [engine, setEngine] = useState<EngineBracket>("mid");
  const [age, setAge] = useState<AgeBracket>("new");
  const [showResult, setShowResult] = useState(false);

  const parsed = Number(priceUsd.replace(/\s/g, "").replace(",", "."));
  const breakdown = useMemo(() => {
    if (!Number.isFinite(parsed) || parsed <= 0) return null;
    return calculateImportCost(parsed, engine, age);
  }, [parsed, engine, age]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <FadeSection id="calculator" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight text-white sm:text-4xl">
          Рассчитайте стоимость
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#A0A0A0]">
          Ориентировочный расчёт под ключ с учётом пошлины и сервиса
        </p>

        <div className="mx-auto mt-12 max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#D4A843]/25 bg-[#1A1A1A] p-6 shadow-[0_0_60px_rgba(212,168,67,0.06)] sm:p-8"
          >
            <label className="block">
              <span className="text-sm font-medium text-[#A0A0A0]">
                Стоимость авто в Китае (USD)
              </span>
              <input
                type="number"
                min={0}
                step={100}
                value={priceUsd}
                onChange={(e) => setPriceUsd(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white outline-none ring-[#D4A843]/0 transition focus:border-[#D4A843]/50 focus:ring-2 focus:ring-[#D4A843]/30"
              />
            </label>

            <label className="mt-6 block">
              <span className="text-sm font-medium text-[#A0A0A0]">
                Объём двигателя
              </span>
              <select
                value={engine}
                onChange={(e) => setEngine(e.target.value as EngineBracket)}
                className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white outline-none focus:border-[#D4A843]/50 focus:ring-2 focus:ring-[#D4A843]/30"
              >
                {ENGINE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-6 block">
              <span className="text-sm font-medium text-[#A0A0A0]">
                Возраст авто
              </span>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value as AgeBracket)}
                className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white outline-none focus:border-[#D4A843]/50 focus:ring-2 focus:ring-[#D4A843]/30"
              >
                {AGE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-[#D4A843] py-3.5 text-base font-semibold text-[#0A0A0A] transition hover:bg-[#e0b85a]"
            >
              Рассчитать
            </button>
          </form>

          {showResult && breakdown && (
            <div className="mt-8 rounded-3xl border border-white/10 bg-[#111] p-6 sm:p-8">
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">Стоимость авто (в рублях)</dt>
                  <dd className="font-medium text-white tabular-nums">
                    {formatRub(breakdown.carPriceRub)} ₽
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">Таможенная пошлина</dt>
                  <dd className="font-medium text-white tabular-nums">
                    {formatRub(breakdown.customsDuty)} ₽
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">Утилизационный сбор</dt>
                  <dd className="font-medium text-white tabular-nums">
                    {formatRub(breakdown.recyclingFee)} ₽
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">Доставка</dt>
                  <dd className="font-medium text-white tabular-nums">
                    {formatRub(breakdown.delivery)} ₽
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#A0A0A0]">Комиссия Pride Auto</dt>
                  <dd className="font-medium text-white tabular-nums">
                    {formatRub(breakdown.commission)} ₽
                  </dd>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-end justify-between gap-4">
                    <dt className="text-lg font-semibold text-white">ИТОГО</dt>
                    <dd className="text-2xl font-semibold tabular-nums text-[#D4A843]">
                      {formatRub(breakdown.total)} ₽
                    </dd>
                  </div>
                </div>
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-[#6b6b6b]">
                Расчёт приблизительный. Точную стоимость уточняйте у менеджера.
              </p>
            </div>
          )}

          {showResult && (!breakdown || !Number.isFinite(parsed) || parsed <= 0) && (
            <p className="mt-6 text-center text-sm text-[#c9a227]">
              Введите корректную стоимость авто в USD
            </p>
          )}
        </div>
      </div>
    </FadeSection>
  );
}
