export default function Cardapio() {
  return (
   <div className="inset-0 bg-white/10 backdrop-blur-sm flex justify-center items-center">
    <div className="text-[#7a5641] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Nosso Cardápio</h2>

      <div className="grid grid-cols gap-6">
        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md">
         
          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de Beijinho</h3>
          <p className="text-sm">R$70,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md">
         
          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de Brigadeiro</h3>
          <p className="text-sm">R$70,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md">

          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de Leite Ninho</h3>
          <p className="text-sm">R$70,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md">
          
          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de 4 Leites C/ pedaços de Chocolate</h3>
          <p className="text-sm">R$70,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md">
          
          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de 4 Leites</h3>
          <p className="text-sm">R$70,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md">
        
          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de Leite Ninho com Abacaxi</h3>
          <p className="text-sm">R$73,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md">
        
          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de 4 Leites com Abacaxi</h3>
          <p className="text-sm">R$73,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md">

          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de Abacaxi com Coco</h3>
          <p className="text-sm">R$75,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md">
          
          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de Leite Ninho com Morango</h3>
          <p className="text-sm">R$85,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md ">
         
          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de 4 Leites com Morango</h3>
          <p className="text-sm">R$85,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md">
         
          <h3 className="text-xl font-semibold mb-2 text-center">Bolo de Ninho com Nutella</h3>
          <p className="text-sm">R$95,00 kg</p>
        </div>

        <div className="bg-[#fff5f5] p-4 rounded-xl shadow-md mb-20">
         
          <h3 className="text-xl font-semibold mb-2 text-center">Adicionais:</h3>
          <p className="text-sm">Glitter R$ 15,00 por kg</p>
          <p className="text-sm">Topper simples a partir R$20,00</p>
          <p className="text-sm">Bolo retangular R$20,00</p>
          <p className="text-sm">Pó de decoração R$ 15,00 por kg</p>
        </div>
      </div>
      <button className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer mb-20">
            Fazer pedido via Whatsapp
          </button>
    </div>
    </div>
  );
}
