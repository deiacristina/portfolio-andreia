export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10">

      <div className="container-custom h-20 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold tracking-wide">
            Andréia
            <span className="text-violet-500">.</span>
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-300">

          <a
            href="#about"
            className="hover:text-white transition"
          >
            Sobre
          </a>

          <a
            href="#experience"
            className="hover:text-white transition"
          >
            Experiência
          </a>

          <a
            href="#projects"
            className="hover:text-white transition"
          >
            Projetos
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contato
          </a>

        </nav>

      </div>
    </header>
  );
}