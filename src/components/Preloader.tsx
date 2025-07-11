// components/Preloader.tsx
"use client";

import { useEffect } from "react";
import lottie from "lottie-web";

export default function Preloader() {
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById("lottie-container")!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Preloader.json",
    });

    const delay = 3000;

    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) preloader.style.display = "none";

      // Mostra os botões após o preload
      document.getElementById("whatsapp-button")?.classList.remove("hidden");
      document.getElementById("scroll-button")?.classList.remove("hidden");
    }, delay);

    return () => anim.destroy();
  }, []);

  return (
    <div
      id="preloader"
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <div id="lottie-container" className="w-60 h-60" />
    </div>
  );
}
