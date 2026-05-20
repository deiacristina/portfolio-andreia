import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andréia Cristina | Frontend Developer",
  description:
    "Desenvolvedora Frontend especialista em Angular, interfaces modernas, UX e tecnologia. Mestranda em Computação Aplicada pela USP.",

  keywords: [
    "Frontend Developer",
    "Angular Developer",
    "Desenvolvedora Frontend",
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "UX",
    "USP",
    "Programadora",
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
      "Frontend Developer com experiência em Angular, UX e interfaces modernas.",

    url: "https://andreia-alves.netlify.app",

    siteName: "Portfólio Andréia Cristina",

    images: [
      {
        url: "/images/andreia.png",
        width: 1200,
        height: 630,
        alt: "Andréia Cristina",
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
      <body>{children}</body>
    </html>
  );
}