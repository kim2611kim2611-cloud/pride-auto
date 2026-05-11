"use client";

import Image from "next/image";
import { FadeSection } from "@/components/FadeSection";

const BRANDS: { name: string; blurb: string }[] = [
  { name: "BYD", blurb: "Электромобили и гибриды с собственными технологиями" },
  { name: "Haval", blurb: "Кроссоверы и внедорожники для города и бездорожья" },
  { name: "Chery", blurb: "Сбалансированные модели по доступной цене" },
  { name: "Geely", blurb: "Современный дизайн и продуманная эргономика" },
  { name: "Li Auto", blurb: "Семейные гибриды с запасом хода для дальних поездок" },
  { name: "Zeekr", blurb: "Премиальный сегмент и высокая динамика" },
  { name: "Nio", blurb: "Инновации, сервис и быстрая смена аккумуляторов" },
  { name: "Xiaomi", blurb: "Экосистема умного автомобиля нового поколения" },
  { name: "Omoda", blurb: "Стильный городской кроссовер из линейки Chery" },
  { name: "Jaecoo", blurb: "Комфортные SUV с упором на безопасность" },
];

const TOP_PHOTOS = [
  {
    title: "BYD Han",
    src: "https://global2.autoimg.cn/globalcardfs/product/g31/M04/F0/D8/autohomecar__ChxoHmhbpoWAT-1QACy7eE4KXEQ887.jpg",
  },
  {
    title: "Haval H6",
    src: "https://global2.autoimg.cn/globalcardfs/product/g32/M06/3E/05/autohomecar__ChxkPWhdABaAbApEACCJTba-wqQ053.jpg",
  },
  {
    title: "Chery Tiggo 8",
    src: "https://global2.autoimg.cn/globalcardfs/product/g30/M06/82/46/autohomecar__ChxknGhic-qAfY4-AAnQmXYqRaQ385.jpg",
  },
];

export function Brands() {
  return (
    <FadeSection id="brands" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight text-white sm:text-4xl">
          Популярные марки
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#A0A0A0]">
          Подберём любую модель из официальных каналов Китая
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TOP_PHOTOS.map((photo) => (
            <div
              key={photo.title}
              className="group relative h-[200px] overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="group rounded-2xl border border-white/10 bg-[#1A1A1A] p-5 transition duration-300 hover:scale-[1.02] hover:border-[#D4A843]/80 hover:shadow-[0_0_28px_rgba(212,168,67,0.1)]"
            >
              <p className="font-semibold text-lg text-[#D4A843]">{b.name}</p>
              <p className="mt-2 text-sm leading-snug text-[#A0A0A0]">{b.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}
