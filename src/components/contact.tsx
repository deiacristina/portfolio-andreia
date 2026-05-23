"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_ffiw8gs",
        "template_4ywyczx",
        form,
        "c_HHXP4L9vMKorjfB"
      );

      setStatus(
        "Mensagem enviada com sucesso ✨"
      );

      form.reset();
    } catch (error) {
      console.error(error);

      setStatus(
        "Erro ao enviar mensagem."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-spacing"
    >
      <div className="container-custom">

        {/* CARD FORM */}
        <div className="glass-card p-10 lg:p-16 text-center">
          <span className="text-violet-400 uppercase tracking-[4px] text-sm">
            Contato
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Vamos conversar?
          </h2>

          <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Tem uma oportunidade, parceria,
            projeto ou só quer trocar uma
            ideia sobre tecnologia? Me manda
            uma mensagem 💜
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-14 max-w-3xl mx-auto space-y-5"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Seu nome"
              className="w-full bg-zinc-900/60 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-violet-500 transition"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Seu email"
              className="w-full bg-zinc-900/60 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-violet-500 transition"
            />

            <input
              type="text"
              name="subject"
              required
              placeholder="Assunto"
              className="w-full bg-zinc-900/60 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-violet-500 transition"
            />

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Sua mensagem..."
              className="w-full bg-zinc-900/60 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-violet-500 transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-600 hover:bg-violet-700 transition rounded-2xl py-4 font-semibold disabled:opacity-50"
            >
              {loading
                ? "Enviando..."
                : "Enviar mensagem"}
            </button>

            {status && (
              <p className="text-zinc-400 text-sm">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* LINKS */}
        <div className="flex justify-center flex-wrap gap-5 mt-10">
          <a
            href="https://github.com/deiacristina"
            target="_blank"
            rel="noreferrer"
            className="glass-card px-6 py-4 hover:border-violet-500 transition flex items-center gap-3"
          >
            <GithubIcon size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/andreiacristina/"
            target="_blank"
            rel="noreferrer"
            className="glass-card px-6 py-4 hover:border-violet-500 transition flex items-center gap-3"
          >
            <LinkedinIcon size={20} />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/codedeia/"
            target="_blank"
            rel="noreferrer"
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
    </section>
  );
}