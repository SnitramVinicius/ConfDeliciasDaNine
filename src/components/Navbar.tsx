"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Impede scroll no body quando o menu estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <>
      {/* Navbar principal */}
      <nav className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="./Background.png" alt="Logo" className="w-28" />
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#" className="text-white hover:text-[#7a5641]">Home</a>
              <a href="#sobre" className="text-white hover:text-[#7a5641]">Sobre</a>
              <a href="#informacoes" className="text-white hover:text-[#7a5641]">Informações</a>
              <a href="#servicos" className="text-white hover:text-[#7a5641]">Serviços</a>
              <a href="#contato" className="text-white hover:text-[#7a5641]">Contato</a>
            </div>

            {/* Botão Menu Mobile */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
                {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-8 text-white text-xl">
          <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu" className="absolute top-6 right-6">
            <X size={28} />
          </button>
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#7a5641]">Home</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)} className="hover:text-[#7a5641]">Sobre</a>
          <a href="#informacoes" onClick={() => setMenuOpen(false)} className="hover:text-[#7a5641]">Informações</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)} className="hover:text-[#7a5641]">Serviços</a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="hover:text-[#7a5641]">Contato</a>
        </div>
      )}
    </>
  );
}
