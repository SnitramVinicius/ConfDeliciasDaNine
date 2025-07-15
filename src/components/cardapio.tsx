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
            <p className="text-xl font mb-2">
              Leite Ninho - <strong>R$70,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              Brigadeiro - <strong>R$70,00 kg</strong>
            </p>
            <p className="text-xl mb-2">
              Duo (Leite ninho com brigadeiro) - <strong>R$70,00 kg</strong>
            </p>
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
              Leite Ninho - <strong>R$70,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              Brigadeiro - <strong>R$70,00 kg</strong>
            </p>
            <p className="text-xl mb-2">
              Duo (Leite ninho com brigadeiro) - <strong>R$70,00 kg</strong>
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
              Leite Ninho - <strong>R$70,00 kg</strong>
            </p>
            <p className="text-xl font mb-2">
              Brigadeiro - <strong>R$70,00 kg</strong>
            </p>
            <p className="text-xl mb-2">
              Ferreiro Rocher - <strong>R$70,00 kg</strong>
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
            <p className="text-sm">R$70,00 kg</p>
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
              Leite Ninho - <strong>R$70,00</strong>
            </p>
            <p className="text-xl font mb-2">
              Brigadeiro - <strong>R$70,00</strong>
            </p>
            <p className="text-xl mb-2">
              Ninho e brigadeiro - <strong>R$70,00</strong>
            </p>
            <p className="text-xl font mb-2">
              Ninho e morango - <strong>R$70,00</strong>
            </p>
            <p className="text-xl font mb-2">
              Ninho e beijinho - <strong>R$70,00</strong>
            </p>
            <p className="text-xl mb-2">
              Abacaxi com coco - <strong>R$70,00 kg</strong>
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
            <p className="text-xl">R$73,00 Un</p>
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
              Copo da Felicidade
            </h1>
            <p className="text-xl">R$73,00 Un</p>
          </div>
          <div className="border-2 border-[#ffe7e7] p-4 rounded-xl shadow-md mb-15">
            <p className="text-xl font-semibold mb-2 text-center">
              Adicionais:
            </p>
            <p className="text-xl">Glitter R$ 15,00 por kg de bolo</p>
            <p className="text-xl">Topper simples a partir R$20,00</p>
            <p className="text-xl">Bolo retangular R$20,00</p>
            <p className="text-xl">Pó de decoração R$ 15,00 por kg de bolo</p>
          </div>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5567991347729"
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
