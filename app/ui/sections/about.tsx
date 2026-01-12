import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="w-full bg-[#5D3171] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        
        {/* Lado esquerdo */}
        <div>
          {/* Logo */}
          <Image
            src="/img/logo/logoBranco.png"
            alt="WingHub"
            width={160}
            height={60}
            className="mb-6"
          />

          {/* Texto */}
          <p className="font-ubuntu text-base leading-relaxed text-white md:text-lg">
            O WingHub é uma plataforma integrada <span className="font-bold text-[#4FB286]">de Gestão Inteligente de Ambientes</span> que reúne dados e 
            recursos digitais para permitir que órgãos públicos planejem, operem e evoluam seus ambientes 
            com mais <span className="font-bold text-[#4FB286]">eficiência, segurança e transparência</span>, com foco no cidadão e no servidor público.
          </p>
        </div>

        {/* Lado direito */}
        <div className="relative h-[320px] w-full md:h-[420px]">
          <Image
            src="/img/apoio/diagramaAbout.png"
            alt="Ambientes inteligentes"
            fill
            className="rounded-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
