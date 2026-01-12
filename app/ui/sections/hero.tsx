import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] mt-10 w-full items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/apoio/hero.png')",
      }}
    >

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="ml-auto max-w-xl text-center md:text-right">

          {/* Label */}
          <span className="inline-block bg-[#4FB286] ps-2 text-5xl font-ubuntu text-white">
            Ajudaremos
          </span>

          {/* Título */}
          <h1 className="mt-4 font-ubuntu text-3xl leading-tight text-white md:text-5xl">
            você a tornar <br />
            seu espaço<br />
            perfeito.
          </h1>

          {/* Subtítulo */}
          <p className="mt-4 font-ubuntu text-sm font-light text-white/90 md:text-base">
            Gestão Inteligente<br /> de Ambientes para<br /> o Setor Público
          </p>


          {/* Botão */}
          <div className="mt-8">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-[#4FB286] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#43a97a]"
            >
              FALE CONOSCO
            </a>
          </div>
        </div>
      </div>

      {/* Saiba mais */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-sm text-white/80">
        Saiba mais ↓
      </div>
    </section>
  );
}
