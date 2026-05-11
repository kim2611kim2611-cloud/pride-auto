"use client";

import { motion } from "framer-motion";
import {
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const NAV = [
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#brands", label: "Бренды" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#contact", label: "Контакты" },
] as const;

const SECTION_IDS = NAV.map((n) => n.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.15, 0.35, 0.6] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToConsult = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link href="#hero" className="group flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="flex items-center bg-transparent"
          >
            <Image
              src="/logo.png"
              alt="Pride Auto"
              width={120}
              height={40}
              className="h-10 w-[120px] object-contain object-top brightness-0 invert mix-blend-lighten sm:h-11 sm:w-[140px]"
            />
          </motion.div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#D4A843]"
                    : "text-[#A0A0A0] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={scrollToConsult}
            className="rounded-full bg-[#D4A843] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition hover:bg-[#e0b85a]"
          >
            Получить консультацию
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white lg:hidden"
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-[#E5E5E5]"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={scrollToConsult}
              className="mt-2 rounded-full bg-[#D4A843] py-3 text-center font-semibold text-[#0A0A0A]"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
