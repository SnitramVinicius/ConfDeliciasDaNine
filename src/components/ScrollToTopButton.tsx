"use client";

import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPreloading, setIsPreloading] = useState(true); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPreloading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isPreloading) return null; 

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      <a
       href="https://api.whatsapp.com/send?phone=67991015654"
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-whatsapp"
      >
        <img src="/iconswhatsapp.png" alt="icone whatsapp" className="w-10 h-10" />
      </a>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-3 p-3 transition z-100"
          aria-label="Voltar ao topo"
        >
          <img src="/up.png" alt="Voltar ao topo" className="w-10 h-10 cursor-pointer" />
        </button>
      )}
    </div>
  );
}
