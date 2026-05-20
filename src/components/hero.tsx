import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[100svh] flex items-center relative overflow-hidden">

      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full" />

      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center pt-20">

        <div>

          <span className="border border-violet-500/30 bg-violet-500/10 rounded-full px-5 py-2 text-sm w-fit flex items-center gap-2">
            ✨ Frontend Developer & Tech Creator
          </span>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mt-8">

            Desenvolvendo
            <span className="gradient-text block">
              interfaces modernas
            </span>

             com Angular, UX e
            performance.

          </h1>

          <p className="text-zinc-400 text-xl mt-8 max-w-xl leading-relaxed">

            Desenvolvedora Frontend com experiência
            em Angular, UI moderna e experiência
            do usuário. Mestranda em Computação
            Aplicada pela USP e criadora de conteúdo tech.

          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:bg-violet-500 transition-all hover:scale-105 px-8 py-4 rounded-2xl font-medium">

              Ver Projetos

            </button>

            <button className="border border-zinc-700 hover:border-violet-500 transition-all px-8 py-4 rounded-2xl">

              GitHub

            </button>

          </div>

        </div>

        <div className="relative flex justify-center">

          <div className="absolute w-[450px] h-[450px] bg-violet-600/20 blur-[100px] rounded-full" />

          <div className="relative w-[420px] h-[520px] rounded-[32px] overflow-hidden border border-violet-500/20 bg-zinc-900">

            <Image
              src="/images/andreia.png"
              alt="Andreia"
              fill
              className="object-cover object-top"
              priority
            />

          </div>

        </div>

      </div>

    </section>
  );
}