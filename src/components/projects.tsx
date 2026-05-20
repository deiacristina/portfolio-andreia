import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "BemAgro Platform",
    category: "Experiência Profissional",
    description:
      "Atuação no desenvolvimento e manutenção de plataforma agronômica para processamento de relatórios e análises utilizando Angular, Angular Material e TypeScript.",
    technologies: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "REST API",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Sistema Financeiro — Rodonaves",
    category: "Experiência Profissional",
    description:
      "Manutenção e evolução de sistema financeiro corporativo com foco em frontend Angular e integração com backend.",
    technologies: [
      "Angular",
      "C#",
      "TypeScript",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "SteamGirls",
    category: "Projeto Educacional",
    description:
      "Atuação como professora de programação para mulheres e meninas de baixa renda, promovendo inclusão tecnológica.",
    technologies: [
      "Educação",
      "Lógica",
      "Programação",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Meu Portfólio",
    category: "Projeto Pessoal",
    description:
      "Portfólio responsivo desenvolvido com Next.js, TypeScript e Tailwind CSS, focado em UX, performance e design premium.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
    ],
    github:
      "https://github.com/deiacristina/portfolio-andreia",
    demo:
      "https://andreia-alves.netlify.app/",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing"
    >
      <div className="container-custom">

        <div className="mb-16">

          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Projetos
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Projetos em Destaque
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                glass-card
                p-8
                hover:border-violet-500
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
              "
            >

              <span className="text-violet-400 text-sm">
                {project.category}
              </span>

              <h3 className="text-3xl font-bold mt-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 mt-5 leading-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      rounded-full
                      border border-violet-500/20
                      bg-violet-500/10
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {(project.github !== "#" ||
                project.demo !== "#") && (
                <div className="flex gap-4 mt-8">

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="
                        flex items-center gap-2
                        border border-zinc-700
                        hover:border-violet-500
                        transition
                        px-5 py-3
                        rounded-xl
                      "
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="
                        flex items-center gap-2
                        bg-violet-600
                        hover:bg-violet-500
                        transition
                        px-5 py-3
                        rounded-xl
                      "
                    >
                      <ExternalLink size={18} />
                      Ver Projeto
                    </a>
                  )}

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}