"use client";

import Image from "next/image";
import { FadeSection } from "@/components/FadeSection";

const GALLERY_IMAGES = [
  {
    model: "Современный китайский седан",
    src: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80",
  },
  {
    model: "Премиальный электроседан",
    src: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=800&q=80",
  },
  {
    model: "Современный китайский кроссовер",
    src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
  },
  {
    model: "Спортивный люкс-седан",
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
  },
  {
    model: "Китайский SUV",
    src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
  },
  {
    model: "Электромобиль в современном стиле",
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
  },
];

export function Gallery() {
  return (
    <FadeSection id="gallery" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-3xl tracking-tight text-white sm:text-4xl">
          Автомобили которые мы привозим
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {GALLERY_IMAGES.map((item) => (
            <div key={item.model} className="group relative h-64 overflow-hidden rounded-xl">
              <Image
                src={item.src}
                alt={item.model}
                width={800}
                height={533}
                unoptimized={false}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}
