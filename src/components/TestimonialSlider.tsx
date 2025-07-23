"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Maria F.",
    text: "Simplesmente maravilhoso, bem molhado e super recheado, sabor incrível, com certeza comprarei de novo.",
    stars: 5,
    img: "/icons8-usuário-mulher-com-círculo-48.png",
  },
  {
    name: "Pedro S.",
    text: "Sempre peço para festas. Todo mundo elogia!",
    stars: 5,
    img: "/icons8-usuário-mulher-com-círculo-48.png",
  },
  {
    name: "Hesdiha",
    text: "Ficou lindo, maravilhoso. Amamos o bolo!",
    stars: 5,
    img: "/icons8-usuário-mulher-com-círculo-48.png",
  },
  {
    name: "Katlyn R.",
    text: "Tudo feito com muito capricho! Uma delícia!",
    stars: 5,
    img: "/icons8-usuário-mulher-com-círculo-48.png",
  },
  {
    name: "Beatriz S.",
    text: "Uma delícia de bolo. Parabens mais uma vez pela confeitaria.",
    stars: 5,
    img: "/icons8-usuário-mulher-com-círculo-48.png",
  },
  {
    name: "Camilla M.",
    text: "Todos os bolos que ja comprei com você, todos maravilhosos.",
    stars: 5,
    img: "/icons8-usuário-mulher-com-círculo-48.png",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-[#faf0e8] py-10 pb-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#7a5641] font-bold text-center mb-10">
          Depoimentos de Clientes
        </h1>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 text-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-[#7a5641] mb-2">“{item.text}”</p>
                <h4 className="font-semibold text-[#7a5641]">{item.name}</h4>
                <div className="text-[#f16789] text-lg mb-20">
                  {"★".repeat(item.stars)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
