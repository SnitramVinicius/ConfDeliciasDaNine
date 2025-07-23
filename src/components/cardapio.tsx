import Image from "next/image";
export default function Cardapio() {
  return (
    <div className="inset-0 bg-white/10 backdrop-blur-sm flex justify-center items-center">
      <div className="text-[#7a5641] flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Nosso Cardápio</h2>

        <div className="grid grid-cols gap-6">
          <div className="border-2 border-[#ffe7e7] p-4 rounded-xl shadow-md">
            <h1 className="text-xl font-semibold flex items-center justify-center gap-2 mb-5">
              <Image
                src="/icons8-bolo-48.png"
                alt="Ícone de Bolo"
                width={24}
                height={24}
                className="inline-block"
              />
              Bolo Vulcão
            </h1>
            <p className="text-xl font mb-2">Leite Ninho</p>
            <p className="text-xl font mb-2">Brigadeiro</p>
            <p className="text-xl mb-2">Duo (Leite ninho com brigadeiro)</p>
            <p className="text-xl mb-2"><strong>Valores:</strong></p>
            <p className="text-xl mb-2">1kg <strong>R$52,00</strong></p>
            <p className="text-xl mb-2">1,5kg <strong>R$80,00</strong></p>
          </div>

          <div className="border-2 border-[#ffe7e7] p-4 rounded-xl shadow-md">
            <h1 className="text-xl font-semibold flex items-center justify-center gap-2 mb-5">
              <Image
                src="/icons8-bolo-de-aniversário-48.png"
                alt="Ícone de Bolo"
                width={24}
                height={24}
                className="inline-block"
              />
              Bolo de Aniversário
            </h1>
            <p className="text-xl font mb-2">
              Abacaxi com Coco - <strong>R$ 75,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              Beijinho - <strong>R$ 70,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              Brigadeiro - <strong>R$ 70,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              Leite Ninho - <strong>R$ 70,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              Leite ninho com Abacaxi - <strong>R$ 73,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              Leite ninho com Morango - <strong>R$ 85,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              Leite ninho com Nutella - <strong>R$ 95,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              4 Leites com pedaços de Chocolate - <strong>R$ 70,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              4 Leites - <strong>R$ 70,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              4 Leites com Abacaxi - <strong>R$ 73,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              4 Leites com Morango - <strong>R$ 85,00 kg</strong>
            </p>
          </div>
          <div className="border-2 border-[#ffe7e7] p-4 rounded-xl shadow-md mb-2">
            <p className="text-xl font-semibold mb-2 text-center">
              Adicionais p/ bolos:
            </p>
            <p className="text-xl">
              Glitter <strong>R$ 15,00</strong> por <strong>kg</strong>
            </p>
            <p className="text-xl">
              Topper simples a partir <strong>R$ 20,00</strong>
            </p>
            <p className="text-xl">
              Bolo retangular adicional de <strong>R$ 20,00</strong>
            </p>
            <p className="text-xl">
              Pó de decoração <strong>R$ 15,00</strong> por <strong>kg</strong>
            </p>
          </div>

          <div className="border-2 border-[#ffe7e7] p-4 rounded-xl shadow-md">
            <h1 className="text-xl font-semibold flex items-center justify-center gap-2 mb-5">
              <Image
                src="/icons8-brigadeiro-48.png"
                alt="Ícone de Bolo"
                width={24}
                height={24}
                className="inline-block"
              />
              Cento de Doces
            </h1>
            <p className="text-xl font mb-2">
              Leite Ninho - <strong>R$ 145,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              Brigadeiro - <strong>R$ 145,00 kg</strong>
            </p>
            <p className="text-xl mb-2">
              Ferreiro Rocher - <strong>R$ 145,00 kg</strong>
            </p>
          </div>

          <div className="border-2 border-[#ffe7e7] p-4 rounded-xl shadow-md">
            <h1 className="text-xl font-semibold flex items-center justify-center gap-2 mb-5">
              <Image
                src="/icons8-bolo-de-casamento-48.png"
                alt="Ícone de Bolo"
                width={24}
                height={24}
                className="inline-block"
              />
              Bolo Vitrine
            </h1>
            <p className="text-xl font mb-2">R$ 80,00 kg</p>
          </div>

          <div className="border-2 border-[#ffe7e7] p-4 rounded-xl shadow-md">
            <h1 className="text-xl font-semibold flex items-center justify-center gap-2 mb-5">
              <Image
                src="/icons8-bolo-48.png"
                alt="Ícone de Bolo"
                width={24}
                height={24}
                className="inline-block"
              />
              Bolo no Pote
            </h1>
            <p className="text-xl font mb-2">
              Leite Ninho - <strong>R$ 10,00</strong>
            </p>
            <p className="text-xl font mb-2">
              Brigadeiro - <strong>R$ 10,00</strong>
            </p>
            <p className="text-xl mb-2">
              Ninho e brigadeiro - <strong>R$ 10,00</strong>
            </p>
            <p className="text-xl font mb-2">
              Ninho e morango - <strong>R$ 10,00</strong>
            </p>
            <p className="text-xl font mb-2">
              Ninho e beijinho - <strong>R$ 10,00</strong>
            </p>
            <p className="text-xl mb-2">
              Abacaxi com coco - <strong>R$ 10,00</strong>
            </p>
          </div>

          <div className="border-2 border-[#ffe7e7] p-4 rounded-xl shadow-md">
            <h1 className="text-xl font-semibold flex items-center justify-center gap-2 mb-5">
              <Image
                src="/icons8-morango-48.png"
                alt="Ícone de Bolo"
                width={24}
                height={24}
                className="inline-block"
              />
              Coxinha de Morango
            </h1>
             <p className="text-xl font mb-2">
              Beijinho  - <strong>R$ 10,00 un</strong>
            </p>
            <p className="text-xl font mb-2">
              Brigadeiro - <strong>R$ 10,00 un</strong>
            </p>
            <p className="text-xl font mb-2">
              Leite Ninho - <strong>R$ 10,00 un</strong>
            </p>
            <p className="text-xl font mb-2">
              Ferrero Rocher - <strong>R$ 10,00 un</strong>
            </p>
          </div>

          <div className="border-2 border-[#ffe7e7] p-4 rounded-xl shadow-md mb-15">
            <h1 className="text-xl font-semibold flex items-center justify-center gap-2 mb-5">
              <Image
                src="/icons8-bolo-48.png"
                alt="Ícone de Bolo"
                width={24}
                height={24}
                className="inline-block"
              />
              Copo da Felicidade
            </h1>
            <p className="text-xl font mb-2">
              Leite Ninho  - <strong>R$ 17,00 un</strong>
            </p>
            <p className="text-xl font mb-2">
              Leite Ninho com Brigadeiro - <strong>R$ 17,00 un</strong>
            </p>
            <p className="text-xl font mb-2">
              Brigadeiro - <strong>R$ 17,00 un</strong>
            </p>
          </div>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=67991015654"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ffe7e7] hover:bg-[#f16789] text-[#f16789] hover:text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition cursor-pointer mb-5 inline-block text-center"
        >
          Fazer pedido via Whatsapp
        </a>
      </div>
    </div>
  );
}
