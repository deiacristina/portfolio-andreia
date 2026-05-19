const projects = [
  {
    title: "BemAgro Platform",
    category: "Experiência Profissional",
    description:
      "Atuação no desenvolvimento e manutenção de plataforma agronômica para processamento de relatórios e análises utilizando Angular, Angular Material e TypeScript.",

    stack: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "REST API",
    ],
  },

  {
    title: "Sistema Financeiro — Rodonaves",
    category: "Experiência Profissional",
    description:
      "Manutenção e evolução de sistema financeiro corporativo com foco em frontend Angular e integração com backend.",

    stack: [
      "Angular",
      "C#",
      "TypeScript",
    ],
  },

  {
    title: "SteamGirls",
    category: "Projeto Educacional",
    description:
      "Atuação como professora de programação para mulheres e meninas de baixa renda, promovendo inclusão tecnológica.",

    stack: [
      "Educação",
      "Lógica",
      "Programação",
    ],
  },

  {
    title: "Meu Portfólio",
    category: "Projeto Pessoal",
    description:
      "Portfólio moderno desenvolvido em Next.js com foco em performance, design premium e experiência do usuário.",

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
    ],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing"
    >
      <div className="container-custom">

        <div className="mb-14">

          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Projetos
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Projetos & Experiências
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-8 hover:border-violet-500 transition-all hover:-translate-y-1"
            >

              <span className="text-violet-400 text-sm">
                {project.category}
              </span>

              <h3 className="text-2xl font-semibold mt-3">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-8 mt-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}