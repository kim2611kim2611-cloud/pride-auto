"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { type FormEvent, useState } from "react";
import { FadeSection } from "@/components/FadeSection";

export function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [car, setCar] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, car }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Не удалось отправить. Попробуйте позже.");
        return;
      }
      setSent(true);
    } catch {
      setError("Ошибка сети. Проверьте подключение и попробуйте снова.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FadeSection id="contact" className="scroll-mt-24">
      <div className="relative overflow-hidden border-t border-[#D4A843]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A843]/15 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-semibold text-3xl tracking-tight text-white sm:text-4xl">
              Готовы найти ваш автомобиль?
            </h2>
            <p className="mt-4 text-lg text-[#A0A0A0]">
              Оставьте заявку — мы свяжемся в течение 1 часа
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            {!sent ? (
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-white/10 bg-[#111]/90 p-6 backdrop-blur-md sm:p-8"
              >
                <label className="block">
                  <span className="text-sm font-medium text-[#A0A0A0]">
                    Ваше имя
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white outline-none focus:border-[#D4A843]/50 focus:ring-2 focus:ring-[#D4A843]/30"
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
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white outline-none focus:border-[#D4A843]/50 focus:ring-2 focus:ring-[#D4A843]/30"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="text-sm font-medium text-[#A0A0A0]">
                    Какой автомобиль вас интересует?
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0A0A0A] px-4 py-3 text-white outline-none focus:border-[#D4A843]/50 focus:ring-2 focus:ring-[#D4A843]/30"
                  />
                </label>
                {error && (
                  <p className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-8 w-full rounded-full bg-[#D4A843] py-3.5 text-base font-semibold text-[#0A0A0A] transition hover:bg-[#e0b85a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Отправка…" : "Отправить заявку"}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl border border-[#D4A843]/30 bg-[#111]/90 p-8 text-center backdrop-blur-md"
              >
                <p className="text-lg font-medium text-white">
                  Спасибо! Мы свяжемся с вами в течение 1 часа 🚗
                </p>
              </motion.div>
            )}

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#A0A0A0]">
              <a
                href="https://wa.me/821021750107"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[#D4A843]"
              >
                <Phone className="h-5 w-5 text-[#D4A843]" />
                Телефон / WhatsApp: +82 10 2175 0107
              </a>
              <a
                href="https://t.me/gi_bok"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[#D4A843]"
              >
                <MessageCircle className="h-5 w-5 text-[#D4A843]" />
                Telegram: @gi_bok
              </a>
              <span className="inline-flex items-center gap-2">
                🌍 Работаем по всей России
              </span>
            </div>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}
