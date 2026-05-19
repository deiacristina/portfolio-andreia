const experiences = [
  {
    company: "BemAgro",
    role: "Frontend Developer Jr",
    period: "Jun 2023 — Out 2024",
    description:
      "Desenvolvimento e manutenção da plataforma de processamento e relatórios agronômicos utilizando Angular, Angular Material e TypeScript.",
  },

  {
    company: "Quest",
    role: "Professora de Programação",
    period: "Mar 2024 — Nov 2024",
    description:
      "Ministrei aulas de programação para mulheres e meninas de baixa renda no projeto SteamGirls em parceria com a prefeitura e universidade.",
  },

  {
    company: "IB8 Comunicação",
    role: "Web Designer",
    period: "Out 2022 — Mar 2023",
    description:
      "Criação de sites e landing pages utilizando Figma, WordPress e conceitos de UX/UI.",
  },

  {
    company: "RTE Rodonaves",
    role: "Software Developer Jr",
    period: "Jul 2022 — Out 2022",
    description:
      "Desenvolvimento e manutenção do sistema financeiro da empresa utilizando Angular e C#.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="section-spacing"
    >
      <div className="container-custom">

        <div className="mb-14">

          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Experiência
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Minha trajetória profissional
          </h2>

        </div>

        <div className="grid gap-6">

          {experiences.map((job) => (
            <div
              key={job.company}
              className="glass-card p-8 hover:border-violet-500 transition"
            >

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">

                <div>
                  <h3 className="text-2xl font-semibold">
                    {job.role}
                  </h3>

                  <p className="text-violet-400 mt-2">
                    {job.company}
                  </p>
                </div>

                <span className="text-zinc-500">
                  {job.period}
                </span>

              </div>

              <p className="text-zinc-400 leading-8 mt-6">
                {job.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}