"use client";

import Navbar from "@/components/Navbar";
import TestimonialSlider from "@/components/TestimonialSlider";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";
import Cardapio from "@/components/cardapio";
import CarrosselDuplo from "@/components/Carrossel";

export default function Home() {
  const [mostrarCardapio, setMostrarCardapio] = useState(false);

  useEffect(() => {
    if (mostrarCardapio) {
      document.body.style.overflow = "hidden"; // bloqueia scroll da página
    } else {
      document.body.style.overflow = ""; // libera scroll
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mostrarCardapio]);

  return (
    <>
      {/* Container principal - aplica blur e bloqueia interação se modal aberto */}
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              O sabor que encanta — feito com carinho,
              <br /> entregue com amor.
            </h1>
            <button className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer">
              Faça o seu pedido
            </button>
          </div>
        </main>

        <section className="min-h-screen bg-[#faf0e8] flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-6xl w-full">
            <div className="p-8 max-w-lg w-full">
              <h1 className="text-3xl font-bold text-[#7a5641] mb-4">
                Sobre nós
              </h1>
              <p className="text-[#7a5641] leading-relaxed">
                Na <strong>Delícias da Nine</strong>, cada doce é feito com
                amor, cuidado e aquele toque especial de casa. Trabalhamos com
                receitas artesanais, ingredientes selecionados e uma paixão
                verdadeira por encantar paladares. Seja para uma comemoração ou
                para adoçar o seu dia, conte com a gente para criar momentos
                inesquecíveis!
              </p>
            </div>

            <div className="max-w-sm w-full">
              <img
                src="/perfil.jpg"
                alt="Imagem de doces"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Seção Produtos Destaques */}
        <section className="bg-[#faf0e8] py-20 px-4">
          <div className="flex flex-col items-center max-w-6xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl text-[#7a5641] font-semibold">
                Produtos Destaques
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-center mb-10 w-full">
              <div className="flex flex-col items-center text-center flex-1">
                <img
                  src="/img1.jpg"
                  alt="Bolo"
                  className="w-60 h-auto mb-4 rounded-2xl shadow-md"
                />
                <h2 className="text-2xl text-[#7a5641] font-medium">Bolos</h2>
              </div>
              <div className="flex flex-col items-center text-center flex-1">
                <img
                  src="/doces.jpg"
                  alt="Brigadeiros"
                  className="w-60 h-auto mb-4 rounded-2xl shadow-md"
                />
                <h2 className="text-2xl text-[#7a5641] font-medium">
                  Brigadeiros
                </h2>
              </div>
              <div className="flex flex-col items-center text-center flex-1">
                <img
                  src="/coxinha1.jpg"
                  alt="Bombom"
                  className="w-60 h-auto mb-4 rounded-2xl shadow-md"
                />
                <h2 className="text-2xl text-[#7a5641] font-medium">Bombom</h2>
              </div>
            </div>

            <button
              onClick={() => setMostrarCardapio(true)}
              className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer"
              type="button"
            >
              Ver Cardápio
            </button>
          </div>
        </section>

        <TestimonialSlider />
       <CarrosselDuplo />

        <section className="bg-[#faf0e8] flex flex-col items-center">
          <h1 className="text-4xl text-[#7a5641] mb-8">
            Encomende seu doce preferido para qualquer ocasião!
          </h1>
          <button className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer mb-20">
            Fazer pedido via Whatsapp
          </button>
        </section>

        <section
          id="contato"
          className="bg-[#faf0e8] w-full min-h-100 flex flex-col items-center justify-center px-4 py-8"
        >
          <div className="w-full max-w-5xl flex flex-col md:flex-row-reverse gap-10 md:items-center justify-center mx-auto">
            <img
              src="/Background.png"
              alt="Logo"
              className="md:w-70 w-70 h-auto order-1 md:order-1 self-center md:self-auto"
            />
            <div className="flex flex-col justify-center order-3 md:order-2 text-left gap-3">
              <a
                href="https://www.instagram.com/sua_pagina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-600 transition"
              >
                <FaInstagram size={24} />
                @DeliciasdaNine
              </a>

              <a
                href="mailto:seuemail@exemplo.com"
                className="flex items-center gap-2 text-pink-600 transition"
              >
                <MdEmail size={24} />
                seuemail@exemplo.com
              </a>

              <a
                href="https://wa.me/5599999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-600 transition"
              >
                <FaWhatsapp size={24} />
                (99) 99999-9999
              </a>

              <div className="flex items-center gap-2 text-pink-600">
                <MdLocationOn size={24} />
                Rua Exemplo, 123 - Centro, Cidade/UF
              </div>
            </div>
          </div>
        </section>

        <footer className="md:w-full h-full bg-[#faf0e8] text-[#411417] text-center">
          <p className="text-[7px] sm:text-[10px] ">
            &copy; 2025. Todos os Direitos Reservados. Ana Claudia Martins
            Advogada. Desenvolvido por Vinicius Martins
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
