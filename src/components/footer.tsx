export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">

      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-zinc-500 text-sm">
          © 2026 Andréia Cristina.
          Todos os direitos reservados.
        </p>

        <p className="text-zinc-600 text-sm">
          Desenvolvido com Next.js & Tailwind
        </p>

      </div>

    </footer>
  );
}