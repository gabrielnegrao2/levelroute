import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa de GTA VI — Leonida, Vice City e regiões confirmadas",

  description:
    "Explore o mapa pré-lançamento de GTA VI na LevelRoute com Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia e Mount Kalaga.",

  alternates: {
    canonical: "/gta-vi/mapa",
  },

  openGraph: {
    title: "Mapa de GTA VI — Leonida Atlas | LevelRoute",
    description:
      "Conheça as regiões confirmadas de GTA VI e explore o Leonida Atlas da LevelRoute.",
    url: "https://levelroute.vercel.app/gta-vi/mapa",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mapa de GTA VI — Leonida Atlas | LevelRoute",
    description:
      "Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia e Mount Kalaga em um só lugar.",
  },
};

export default function MapaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}