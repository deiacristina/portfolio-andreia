export function About() {
  return (
    <section
      id="about"
      className="section-spacing"
    >
      <div className="container-custom">

        <div className="mb-14">

          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Sobre mim
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Quem é Andréia?
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="glass-card p-10">

            <h3 className="text-2xl font-semibold mb-6">
              Minha trajetória
            </h3>

            <p className="text-zinc-400 leading-8 text-lg">

              Sou Desenvolvedora Frontend com experiência
              prática em Angular, Angular Material,
              TypeScript e interfaces modernas focadas
              na experiência do usuário.

              <br />
              <br />

              Atuei no desenvolvimento de plataformas
              agronômicas na BemAgro e também como
              professora de programação para mulheres
              de baixa renda.

              <br />
              <br />

              Atualmente sou mestranda em Computação
              Aplicada pela USP, com pesquisa voltada
              para Inteligência Artificial, além de
              produzir conteúdo tech.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="glass-card p-8">
              <h4 className="text-4xl font-bold text-violet-400">
                +2
              </h4>
              <p className="text-zinc-400 mt-2">
                anos de experiência
              </p>
            </div>

            <div className="glass-card p-8">
              <h4 className="text-4xl font-bold text-violet-400">
                USP
              </h4>
              <p className="text-zinc-400 mt-2">
                Mestranda em Computação Aplicada
              </p>
            </div>

            <div className="glass-card p-8">
              <h4 className="text-4xl font-bold text-violet-400">
                Angular
              </h4>
              <p className="text-zinc-400 mt-2">
                Especialidade Frontend
              </p>
            </div>

            <div className="glass-card p-8">
              <h4 className="text-4xl font-bold text-violet-400">
                Tech
              </h4>
              <p className="text-zinc-400 mt-2">
                Conteúdo & Educação
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}