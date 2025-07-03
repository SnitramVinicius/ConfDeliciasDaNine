import Navbar from "@/components/Navbar";
import TestimonialSlider from "@/components/TestimonialSlider";

export const metadata = {
  title: "Delicias da Nine",
  description: "",
};
export default function Home() {
  return (
    <>
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
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
            O sabor que encanta — feito com carinho,<br></br> entregue com amor.
          </h1>
          <button className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer">
            Faça o seu pedido
          </button>
        </div>
      </main>

      <section className="min-h-screen bg-[#faf0e8] flex items-center justify-center">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 max-w-6xl w-full mb-8">
          <div className=" p-8 max-w-lg w-full">
            <h1 className="text-3xl font-bold text-[#7a5641] mb-4">
              Sobre nós
            </h1>
            <p className="text-[#7a5641] leading-relaxed">
              Na <strong>Delícias da Nine</strong>, cada doce é feito com amor,
              cuidado e aquele toque especial de casa. Trabalhamos com receitas
              artesanais, ingredientes selecionados e uma paixão verdadeira por
              encantar paladares. Seja para uma comemoração ou para adoçar o seu
              dia, conte com a gente para criar momentos inesquecíveis!
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
  <section className="bg-[#faf0e8] py-20">
  <div className="flex flex-col items-center">
    <div className="mb-10">
      <h1 className="text-4xl text-[#7a5641]">Produtos Destaques</h1>
    </div>
    <div className="flex-col md:flex-row flex gap-10 justify-center mb-10">
            <div className="flex flex-col items-center text-center">
              <img
                src="/img1.jpg"
                alt="Bolo"
                className="w-60 h-auto mb-4 rounded-2xl"
              />
              <h1 className="text-2xl text-[#7a5641]">Bolos</h1>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="./doces.jpg"
                alt=""
                className="w-60 h-auto mb-4 rounded-2xl"
              />
              <h1 className="text-2xl text-[#7a5641]">Brigadeiros</h1>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="./coxinha1.jpg"
                alt=""
                className="w-60 h-auto mb-4 rounded-2xl"
              />
              <h1 className="text-2xl text-[#7a5641]">Bombom</h1>
            </div>
          </div>
          <button className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer mb-8 ">
            Ver Cardápio
          </button>
        </div>
      </section>
         <TestimonialSlider />
      <section className=" bg-[#faf0e8] flex flex-col items-center">
        <h1 className="text-4xl text-[#7a5641] mb-8">Encomende seu doce preferido para qualquer ocasião!</h1>
        <button className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer mb-8">
            Fazer pedido via Whatsapp
          </button>
      </section>
      <section className=" min-h-screen bg-amber-400 ">
        <h1>(00)000000000</h1>
        <h1>@doce_doces</h1>
        <h1>Seg-Sex 8h-18h Sab 8h-12h</h1>
        <h1>Rua exemplo, 123, Campo Grande-Ms</h1>
      </section>
    </>
  );
}
