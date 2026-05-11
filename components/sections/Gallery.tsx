"use client";

import Image from "next/image";
import { FadeSection } from "@/components/FadeSection";

const GALLERY_IMAGES = [
  {
    model: "BYD Han",
    src: "https://global2.autoimg.cn/globalcardfs/product/g31/M04/F0/D8/autohomecar__ChxoHmhbpoWAT-1QACy7eE4KXEQ887.jpg",
  },
  {
    model: "Haval H6",
    src: "https://global2.autoimg.cn/globalcardfs/product/g32/M06/3E/05/autohomecar__ChxkPWhdABaAbApEACCJTba-wqQ053.jpg",
  },
  {
    model: "Chery Tiggo 8",
    src: "https://global2.autoimg.cn/globalcardfs/product/g30/M06/82/46/autohomecar__ChxknGhic-qAfY4-AAnQmXYqRaQ385.jpg",
  },
  {
    model: "Geely Monjaro",
    src: "https://img3.autoimg.cn/aimediahubdfs/g34/M0A/3A/9F/ChxpV2jNC0qAHI3PAACtgZoCArk311.jpg",
  },
  {
    model: "Li Auto L7",
    src: "https://img2.autoimg.cn/aimediahubdfs/g32/M00/AC/14/ChxkPmbOzPeAb-k6AACJ5g05HY8902.jpg",
  },
  {
    model: "Zeekr 001",
    src: "https://global2.autoimg.cn/globalcardfs/product/g28/M04/57/51/autohomecar__CjIFVGhhJrqAY1AoABwk2M2I4Xg937.jpg",
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
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}
