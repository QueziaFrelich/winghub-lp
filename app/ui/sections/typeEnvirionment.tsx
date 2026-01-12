'use client';

import Image from "next/image";
import { useState } from "react";

type Ambiente = {
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
};

const ambientes: Ambiente[] = [
  {
    title: "Ambientes Administrativos e Institucionais",
    image: "/img/cards/ambientesA.png",
    shortDescription: "Espaços voltados à gestão pública.",
    fullDescription:
      "Projetados para garantir eficiência administrativa, integração entre equipes e conformidade institucional, promovendo ambientes funcionais e representativos.",
  },
  {
    title: "Equipamentos Públicos de Uso Coletivo",
    image: "/img/cards/ambientesB.png",
    shortDescription: "Espaços de convivência e serviços.",
    fullDescription:
      "Ambientes que atendem grandes fluxos de pessoas, priorizando acessibilidade, conforto e durabilidade.",
  },
  {
    title: "Complexos Institucionais",
    image: "/img/cards/ambientesC.png",
    shortDescription: "Grandes estruturas públicas.",
    fullDescription:
      "Integração de múltiplos serviços institucionais em um único espaço.",
  },
  {
    title: "Ambientes de Atendimento ao Cidadão",
    image: "/img/cards/ambientesD.png",
    shortDescription: "Atendimento direto ao público.",
    fullDescription:
      "Projetados para acolhimento, acessibilidade e eficiência no atendimento.",
  },
  {
    title: "Ambientes Educacionais e de Capacitação",
    image: "/img/cards/ambientesF.png",
    shortDescription: "Educação e formação.",
    fullDescription:
      "Espaços voltados à capacitação contínua, aprendizagem e desenvolvimento institucional.",
  },
  {
    title: "Ambientes Técnicos, Operacionais e de Apoio",
    image: "/img/cards/ambientesG.png",
    shortDescription: "Operação e suporte.",
    fullDescription:
      "Ambientes técnicos essenciais para o funcionamento e suporte das operações públicas.",
  },
  {
    title: "Ambientes de Convivência e Integração",
    image: "/img/cards/ambientesH.png",
    shortDescription: "Integração entre pessoas.",
    fullDescription:
      "Espaços pensados para convivência, integração social e bem-estar.",
  },
];

export default function AmbientesSection() {
  const [active, setActive] = useState<number | null>(null);

  const topRow = ambientes.slice(0, 4);
  const bottomRow = ambientes.slice(4);

  return (
    <section id="ambientes" className="bg-[#5D3171] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Título */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold mb-4">
            Ambientes do Setor Público
          </h2>
          <p className="max-w-2xl text-white/80">
            Ambientes atendidos pelo Winghub.
          </p>
        </div>

        {/* ROW 1 – 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
          {topRow.map((item, index) => (
            <CardAmbiente
              key={index}
              item={item}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>

        {/* ROW 2 – 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {bottomRow.map((item, index) => (
            <CardAmbiente
              key={index}
              item={item}
              index={index + 4}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>

     <div className="flex flex-col items-center px-50 mt-20 gap-3">
  <img
    src="/img/logo/icon.png"
    alt="Exemplo"
    className="h-10 w-30 object-contain"
  />

  <p className="text-white text-center">
    O WingHub foi concebido para apoiar a <span className="font-bold text-[#64BD8E]">gestão integrada, inteligente e orientada à 
      governança dos ambientes do setor público</span>, considerando a diversidade de usos, perfis de usuários, vínculos administrativos e requisitos legais. 
  </p>
  <p className=" text-white text-center">
A plataforma permite que diferentes tipos de espaços sejam tratados como ativos públicos estratégicos, promovendo <span className="font-bold text-[#64BD8E]">
   eficiência operacional, transparência, melhor experiência para cidadãos e servidores e apoio à tomada de decisão.  </span></p>
</div>
    </section>
  );
}

/* ----------------------------------------
   Card Component
---------------------------------------- */

function CardAmbiente({
  item,
  index,
  active,
  setActive,
}: {
  item: Ambiente;
  index: number;
  active: number | null;
  setActive: (value: number | null) => void;
}) {
  const isOpen = active === index;

  return (
    <div className="relative h-[320px] rounded-xl overflow-hidden group cursor-pointer">
      {/* Imagem */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-end">
        {!isOpen ? (
          <>
            <div>
              <h3 className="text-lg font-bold mb-4">
                {item.title}
              </h3>
            </div>

            <button
              onClick={() => setActive(index)}
              className="text-sm font-semibold flex items-center gap-2"
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                +
              </span>
              Saiba mais
            </button>
          </>
        ) : (
          <>
            <div>
              <h3 className="text-lg font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                {item.fullDescription}
              </p>
            </div>

            <button
              onClick={() => setActive(null)}
              className="text-sm font-semibold underline"
            >
              Voltar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
