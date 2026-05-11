import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const QUICK = [
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#brands", label: "Бренды" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#contact", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <p className="font-semibold text-xl text-[#D4A843]">Pride Auto</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#A0A0A0]">
              Автомобили из Китая под ключ
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            {QUICK.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#A0A0A0] transition hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 md:justify-end">
            <a
              href="https://t.me/gi_bok"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#D4A843] transition hover:border-[#D4A843]/60 hover:bg-white/5"
              aria-label="Telegram"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/821021750107"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#D4A843] transition hover:border-[#D4A843]/60 hover:bg-white/5"
              aria-label="WhatsApp"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#101010] p-4 text-sm text-[#A0A0A0] md:flex md:items-center md:justify-between">
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

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-[#6b6b6b]">
          <p>© 2025 Pride Auto. Все права защищены.</p>
          <p className="mt-2">
            Цены носят ориентировочный характер и могут изменяться.
          </p>
        </div>
      </div>
    </footer>
  );
}
