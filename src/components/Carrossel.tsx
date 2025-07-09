"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CarouselProps = {
  images: string[];
  reverse?: boolean;
};

function Carousel({ images, reverse = false }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const halfway = carousel.scrollWidth / 2;
    carousel.scrollLeft = reverse ? halfway : 0;

    const intervalId = setInterval(() => {
      if (!carousel) return;

      carousel.scrollLeft += reverse ? -1 : 1;

      if (!reverse && carousel.scrollLeft >= halfway) {
        carousel.scrollLeft = 0;
      }

      if (reverse && carousel.scrollLeft <= 0) {
        carousel.scrollLeft = halfway;
      }
    }, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, [reverse, images.length]); // ✅ Corrigido aqui

  return (
    <div className="w-full overflow-hidden py-4 min-h-[220px] bg-[#faf0e8]">
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-hidden no-scrollbar whitespace-nowrap will-change-scroll"
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="min-w-[200px] flex-shrink-0">
            <Image
              src={src}
              alt={`Imagem ${index}`}
              width={200}
              height={200}
              className="rounded-lg object-cover"
              onLoad={() => setLoadedImages((prev) => prev + 1)}
              onError={() => console.error("Erro ao carregar imagem:", src)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CarrosselDuplo() {
  const imagesTop = [
    "/bolo.jpg", "/bolo1.jpg", "/bolo2.jpg", "/bolo3.jpg", "/bolo4.jpg",
    "/bolo5.jpg", "/bolo6.jpg", "/bolo7.jpg", "/bolo8.jpg", "/bolo9.jpg",
    "/bolo10.jpg", "/bolo11.jpg", "/bolo12.jpg", "/bolo13.jpg", "/bolo14.jpg", "/bolo15.jpg",
  ];

  const imagesBottom = [
    "/bolo16.jpg", "/bolo17.jpg", "/bolo18.jpg", "/bolo19.jpg", "/bolo20.jpg",
    "/bolo21.jpg", "/bolo22.jpg", "/bolo23.jpg", "/bolo24.jpg", "/bolo25.jpg",
    "/bolo26.jpg", "/bolo27.jpg", "/bolo28.jpg", "/bolo29.jpg", "/bolo30.jpg"
  ];

  return (
    <div className="bg-[#faf0e8]">
      <Carousel images={imagesTop} reverse={false} />
      <div className="mb-20">
        <Carousel images={imagesBottom} reverse={true} />
      </div>
    </div>
  );
}
