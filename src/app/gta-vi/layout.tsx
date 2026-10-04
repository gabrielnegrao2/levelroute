import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTA VI Hub — Mapa, personagens, regiões e guias",

  description:
    "Explore o hub de GTA VI da LevelRoute com informações sobre Leonida, Vice City, personagens, regiões, mapas, conexões e descobertas confirmadas.",

  alternates: {
    canonical: "/gta-vi",
  },

  openGraph: {
    title: "GTA VI Intelligence Hub | LevelRoute",
    description:
      "Leonida organizada para fãs de GTA VI: regiões, personagens, mapas, conexões e descobertas.",
    url: "https://levelroute.vercel.app/gta-vi",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GTA VI Intelligence Hub | LevelRoute",
    description:
      "Explore Leonida, personagens, regiões e tudo que já sabemos sobre GTA VI.",
  },
};

export default function GtaViLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}