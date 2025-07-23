"use client";

import Navbar from "@/components/Navbar";
import TestimonialSlider from "@/components/TestimonialSlider";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";
import Cardapio from "@/components/cardapio";
import CarrosselDuplo from "@/components/Carrossel";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [mostrarCardapio, setMostrarCardapio] = useState(false);

  useEffect(() => {
    // Importa ScrollReveal de forma segura após o carregamento do cliente
    import("scrollreveal").then((ScrollReveal) => {
      const sr = ScrollReveal.default();

      sr.reveal(".reveal-top", {
        origin: "top",
        distance: "40px",
        duration: 1000,
        delay: 100,
        easing: "ease-in-out",
        reset: false,
      });

      sr.reveal(".reveal-bottom", {
        origin: "bottom",
        distance: "40px",
        duration: 1000,
        delay: 200,
        easing: "ease-in-out",
        reset: false,
      });

      sr.reveal(".reveal-left", {
        origin: "left",
        distance: "60px",
        duration: 1000,
        delay: 300,
        easing: "ease-in-out",
        reset: false,
      });

      sr.reveal(".reveal-right", {
        origin: "right",
        distance: "60px",
        duration: 1000,
        delay: 400,
        easing: "ease-in-out",
        reset: false,
      });
    });


    if (mostrarCardapio) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mostrarCardapio]);

  return (
    <>
    <Preloader />
    <ScrollToTopButton />
      <div
        className={
          mostrarCardapio ? "blur-sm pointer-events-none select-none" : ""
        }
      >
        <main className="relative w-full h-screen overflow-hidden">
          <Navbar />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-85 -z-10"
          >
            <source src="/Cupcake.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text- text-3xl md:text-5xl font-bold mb-10 text-white drop-shadow-lg">
              Cada doce é um pedaço de cuidado,<br/> feito pra emocionar
            </h1>
            <a href="https://api.whatsapp.com/send?phone=67991015654"
  target="_blank"
  rel="noopener noreferrer" 
  className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer">
              Faça o seu pedido
            </a>
          </div>
        </main>

        <section id="sobre" className="min-h-screen bg-[#faf0e8] flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-6xl w-full">
            <div className="p-8 max-w-lg w-full">
              <h1 className="text-3xl font-bold text-[#7a5641] mb-4 reveal-top">
                Sobre nós
              </h1>
              <p className="text-[#7a5641] leading-relaxed reveal-top">
             A <strong>Delícias da Nine</strong> nasceu em 21 de fevereiro de 2021, inspirada pelo amor pela confeitaria e pelo desejo de levar doçura aos momentos mais especiais. Desde o início, cada receita é feita com carinho, cuidado e aquele toque especial de casa que conquista corações.
Com cursos na área de confeitaria e docinhos, fui aprendendo, testando e aperfeiçoando cada detalhe para oferecer produtos artesanais, preparados com ingredientes selecionados e uma boa dose de paixão.
Mais do que doces, entregamos experiências, seja para uma comemoração, um presente ou para tornar o seu dia mais gostoso. Aqui, cada pedido é feito com dedicação e pensado para criar memórias inesquecíveis.
              </p>
            </div>

            <div className="max-w-sm w-full">
              <img
                src="/perfil1.jpg"
                alt="Imagem de doces"
                className="w-full h-auto rounded-2xl reveal-top"
              />
            </div>
          </div>
        </section>

        <section id="informacoes" className="bg-[#faf0e8] py-20 px-4 reveal-top">
          <div className="flex flex-col items-center max-w-6xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl text-[#7a5641] font-bold text-center mb-10 reveal-top">
                Produtos Destaques
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-center mb-20 w-full">
                <div className="flex flex-col items-center text-center flex-1">
                <img
                  src="/9.jpg"
                  alt="Bolo"
                  className="w-60 h-60 object-cover mb-4 rounded-2xl shadow-md reveal-top"
                />
                
                <h2 className="text-2xl text-[#7a5641] font-medium reveal-top">Bolo de Aniversário</h2>
              </div>
              <div className="flex flex-col items-center text-center flex-1">
                <img
                  src="/bolovulcao.jpg"
                  alt="Bolo"
                  className="w-60 h-60 object-cover mb-4  rounded-2xl shadow-md reveal-bottom"
                />
                <h2 className="text-2xl text-[#7a5641] font-medium reveal-bottom">Bolo Vulcão</h2>
              </div>
              <div className="flex flex-col items-center text-center flex-1">
                <img
                  src="/doces.jpg"
                  alt="Brigadeiros"
                  className="w-60 h-60 object-cover mb-4 rounded-2xl shadow-md reveal-top"
                />
                <h2 className="text-2xl text-[#7a5641] font-medium reveal-top">
                  Cento de Doces
                </h2>
              </div>
              <div className="flex flex-col items-center text-center flex-1">
                <img
                  src="/bolovitrine1.jpg"
                  alt="Bombom"
                  className="w-60 h-60 object-cover mb-4 rounded-2xl shadow-md reveal-bottom"
                />
                <h2 className="text-2xl text-[#7a5641] font-medium reveal-top reveal-bottom">Bolo Vitrine</h2>
              </div>
            </div>

            <button
              onClick={() => setMostrarCardapio(true)}
              className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer reveal-top"
              type="button"
            >
              Ver Cardápio
            </button>
          </div>
        </section>
<div id="clientes" className="reveal-top"><TestimonialSlider /></div>
        
        <div id="servicos">
       <CarrosselDuplo />
       </div>

        <section className="bg-[#faf0e8] flex flex-col items-center">
          <h1 className="text-4xl text-[#7a5641] mb-20 font-bold text-center reveal-top">
            Encomende seu doce preferido para qualquer ocasião!
          </h1>
          <a
  href="https://api.whatsapp.com/send?phone=67991015654"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer mb-20 inline-block text-center reveal-top"
>
  Fazer pedido via Whatsapp
</a>
        </section>

        <section
          id="contato"
          className="bg-[#faf0e8] w-full min-h-100 flex flex-col items-center justify-center px-4 py-8"
        >
          <div className="w-full max-w-5xl flex flex-col md:flex-row-reverse gap-10 md:items-center justify-center mx-auto">
            <img
              src="/Background.png"
              alt="Logo"
              className="md:w-70 w-70 h-auto order-1 md:order-1 self-center md:self-auto reveal-top"
            />
            <div className="flex flex-col justify-center order-3 md:order-2 text-left gap-3">
              <a
                href="https://www.instagram.com/delicias_danine55/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-600 transition reveal-top"
              >
                <FaInstagram size={24} />
                @DeliciasdaNine
              </a>


              <a
                href="https://api.whatsapp.com/send?phone=67991015654&text=Olá,%20gostaria%20de%20fazer%uma%encomenda%."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-600 transition reveal-top"
              >
                <FaWhatsapp size={24} />
                (67) 99101-5654
              </a>

              <div className="flex items-center gap-2 text-pink-600 reveal-top">
                <MdLocationOn size={24} />
                Rua Manoel Pereira de Souza, 101, Jardim Los Angeles
              </div>
            </div>
          </div>
        </section>

        <footer className="md:w-full h-full bg-[#faf0e8] text-black text-center">
          <p className="text-[7px] sm:text-[10px] ">
            &copy; 2025. Todos os Direitos Reservados. Delícias da Nine. Desenvolvido por Vinicius Martins
          </p>
        </footer>
      </div>

    
      {mostrarCardapio && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50  bg-opacity-30">
          <div className="bg-white rounded-xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto relative shadow-lg no-scrollbar">
            <button
              onClick={() => setMostrarCardapio(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Fechar cardápio"
            >
              &times;
            </button>
            <Cardapio />
          </div>
        </div>
      )}
    </>
  );
}
