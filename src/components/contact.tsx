import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-spacing"
    >
      <div className="container-custom">

        <div className="glass-card p-10 lg:p-16 text-center">

          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Contato
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Vamos construir algo incrível?
          </h2>

          <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Estou aberta a oportunidades como
            Desenvolvedora Frontend, projetos,
            tecnologia, conteúdo tech e networking.
          </p>

          <div className="flex justify-center flex-wrap gap-5 mt-10">

            <a
              href="https://github.com/deiacristina"
              target="_blank"
              className="glass-card px-6 py-4 hover:border-violet-500 transition flex items-center gap-3"
            >
              <GithubIcon size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/andreiacristina/"
              target="_blank"
              className="glass-card px-6 py-4 hover:border-violet-500 transition flex items-center gap-3"
            >
              <LinkedinIcon size={20} />
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/codedeia/"
              target="_blank"
              className="glass-card px-6 py-4 hover:border-violet-500 transition flex items-center gap-3"
            >
              <InstagramIcon size={20} />
              Instagram
            </a>

            <a
              href="mailto:codedeia07@gmail.com"
              className="glass-card px-6 py-4 hover:border-violet-500 transition flex items-center gap-3"
            >
              <MailIcon size={20} />
              Email
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}