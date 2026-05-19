export function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="container-custom grid lg:grid-cols-2 gap-16">

        <div className="flex flex-col justify-center">

          <span className="border border-violet-500 rounded-full px-4 py-2 text-sm w-fit">
            👋 Oi, eu sou Andréia
          </span>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mt-8">
            Desenvolvedora
            <span className="gradient-text block">
              Frontend
            </span>
            & Criadora Tech
          </h1>

          <p className="text-zinc-400 text-xl mt-6 leading-relaxed max-w-xl">
            Desenvolvedora Frontend com experiência em Angular,
            interfaces modernas e experiência do usuário.
            Mestranda em Computação Aplicada pela USP
            e apaixonada por tecnologia.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-violet-600 hover:bg-violet-500 transition px-8 py-4 rounded-2xl">
              Ver Projetos
            </button>

            <button className="border border-zinc-700 px-8 py-4 rounded-2xl">
              GitHub
            </button>

          </div>
        </div>

        <div className="flex justify-center items-center">

          <div className="w-[420px] h-[520px] glass-card flex items-center justify-center text-zinc-500">

            SUA FOTO

          </div>

        </div>

      </div>

    </section>
  );
}