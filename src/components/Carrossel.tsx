"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type CarouselProps = {
  images: string[];
  reverse?: boolean;
};

function Carousel({ images, reverse = false }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then(({ default: ScrollReveal }) => {
        ScrollReveal().reveal(".reveal-top", {
          origin: "top",
          distance: "40px",
          duration: 1000,
          delay: 100,
          easing: "ease-in-out",
          reset: false,
        });

        ScrollReveal().reveal(".reveal-bottom", {
          origin: "bottom",
          distance: "40px",
          duration: 1000,
          delay: 200,
          easing: "ease-in-out",
          reset: false,
        });

        ScrollReveal().reveal(".reveal-left", {
          origin: "left",
          distance: "60px",
          duration: 1000,
          delay: 300,
          easing: "ease-in-out",
          reset: false,
        });

        ScrollReveal().reveal(".reveal-right", {
          origin: "right",
          distance: "60px",
          duration: 1000,
          delay: 400,
          easing: "ease-in-out",
          reset: false,
        });
      });
    }

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
  }, [reverse, images.length]);

  return (
    <div className="w-full overflow-hidden py-4 min-h-[220px] bg-[#faf0e8]">
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-hidden no-scrollbar whitespace-nowrap will-change-scroll reveal-top"
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="min-w-[200px] flex-shrink-0">
            <Image
              src={src}
              alt={`Imagem ${index}`}
              width={200}
              height={200}
              className="rounded-lg object-cover"
              onError={() => console.error("Erro ao carregar imagem:", src)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CarrosselDuplo() {
  const imagesTop = Array.from({ length: 50 }, (_, i) => `/${i + 1}.jpg`);
  const imagesBottom = Array.from({ length: 51 }, (_, i) => `/${i + 51}.jpg`);

  return (
    <div className="bg-[#faf0e8]">
      <Carousel images={imagesTop} reverse={false} />
      <div className="mb-20">
        <Carousel images={imagesBottom} reverse={true} />
      </div>
    </div>
  );
}
