'use client';

import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    id: 1,
    icon: "img/icons/Construction.svg",
    title: "Eficiência e otimização dos ambientes públicos",
    description: "Permite gerir os ambientes como ativos estratégicos, reduzindo ociosidade, melhorando a ocupação e qualificando o uso da infraestrutura existente.",
  },
  {
    id: 2,
    icon: "img/icons/Diligence.svg",
    title: "Transparência, controle e rastreabilidade",
    description: "Assegura regras claras de uso, histórico completo das ocupações e rastreabilidade das decisões, fortalecendo a transparência e a prestação de contas.",
  },
  {
    id: 3,
    icon: "img/icons/Data analysis.svg",
    title: "Decisão estratégica baseada em dados",
    description: "Disponibiliza indicadores e análises que apoiam o planejamento, a priorização de investimentos e a racionalização dos ambientes públicos.",
  },
  {
    id: 4,
    icon: "img/icons/To Do List.svg",
    title: "Fortalecimento da governança e do compliance",
    description: "Apoia o cumprimento de normas legais e institucionais, facilitando auditorias, controles internos e a atuação dos órgãos de fiscalização públicos.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="w-full bg-[#5D3171] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Título */}
        <h2 className="mb-12 text-3xl md:text-4xl font-ubuntu text-white">
          Benefícios da Gestão Inteligente de <br /> Ambientes para o Setor Público
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col p-6 transition hover:scale-105"
            >
              {/* Ícone com fundo verde */}
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-[#4FB286]">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Título */}
              <h3 className="mb-2 text-lg font-semibold text-white">
                {benefit.title}
              </h3>

              {/* Descrição */}
              <p className="text-sm text-white ">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botão */}
        <div>
          <Link
            href="#contato"
            className="inline-flex items-center justify-center rounded-full bg-[#4FB286] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#43a97a]"
          >
            CONHEÇA A PLATAFORMA
          </Link>
        </div>
      </div>
    </section>
  );
}
