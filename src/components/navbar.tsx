"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "Sobre",
    href: "#about",
  },
  {
    label: "Tecnologias",
    href: "#tech",
  },
  {
    label: "Experiência",
    href: "#experience",
  },
  {
    label: "Projetos",
    href: "#projects",
  },
  {
    label: "Contato",
    href: "#contact",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      <nav className="container-custom h-20 flex items-center justify-between">

        <a
          href="#"
          className="text-2xl font-bold"
        >
          <span className="gradient-text">
            Andréia Alves
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-violet-400 transition"
            >
              {item.label}
            </a>
          ))}

        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl">

          <div className="flex flex-col p-6 gap-6">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-zinc-300 hover:text-violet-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

          </div>

        </div>
      )}

    </header>
  );
}