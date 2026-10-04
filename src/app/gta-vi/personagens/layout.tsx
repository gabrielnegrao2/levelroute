import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personagens de GTA VI — Jason, Lucia e elenco confirmado",

  description:
    "Conheça os personagens confirmados de GTA VI, incluindo Jason Duval, Lucia Caminos, Cal Hampton, Boobie Ike, Dre'Quan Priest, Real Dimez, Raul Bautista e Brian Heder.",

  alternates: {
    canonical: "/gta-vi/personagens",
  },

  openGraph: {
    title: "Personagens de GTA VI | LevelRoute",
    description:
      "Explore os personagens confirmados de GTA VI, suas relações e conexões em Leonida.",
    url: "https://levelroute.vercel.app/gta-vi/personagens",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Personagens de GTA VI | LevelRoute",
    description:
      "Jason, Lucia e os personagens já revelados oficialmente para GTA VI.",
  },
};

export default function PersonagensLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}