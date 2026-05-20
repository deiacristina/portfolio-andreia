import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andréia Cristina | Frontend Developer",

  description:
    "Desenvolvedora Frontend em Angular, React, TypeScript e interfaces modernas. Mestranda na USP e criadora de conteúdo tech.",

  keywords: [
    "Frontend Developer",
    "Angular Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Angular",
    "Desenvolvedora Frontend",
    "Andreia Cristina",
  ],

  authors: [
    {
      name: "Andréia Cristina",
    },
  ],

  creator: "Andréia Cristina",

  openGraph: {
    title: "Andréia Cristina | Frontend Developer",

    description:
      "Desenvolvedora Frontend em Angular, React e TypeScript.",

    url:
      "https://andreiacristina.netlify.app",

    siteName:
      "Andréia Cristina Portfolio",

    images: [
      {
        url: "/images/andreia.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}