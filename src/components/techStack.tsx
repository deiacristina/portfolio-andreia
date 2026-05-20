const technologies = [
  "Angular",
  "TypeScript",
  "JavaScript",
  "Angular Material",
  "HTML",
  "CSS",
  "SCSS",
  "Git",
  "Figma",
  "Node.js",
  "Python",
  "REST APIs",
];

export function TechStack() {
  return (
    <section id="tech" className="pb-32">
      <div className="container-custom">

        <div className="mb-14">
          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Tecnologias
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Minha Stack
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">

          {technologies.map((tech) => (
            <div
              key={tech}
              className="glass-card px-6 py-4 hover:border-violet-500 transition"
            >
              {tech}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}