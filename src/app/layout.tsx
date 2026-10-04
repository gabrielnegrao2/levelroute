import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LevelRoute — GTA VI Hub, mapas, personagens e guias",
    template: "%s | LevelRoute",
  },

  description:
    "LevelRoute é uma central independente de GTA VI com informações sobre Leonida, personagens, regiões, mapas, guias, descobertas e ferramentas para jogadores.",

  keywords: [
    "GTA VI",
    "GTA 6",
    "GTA VI Brasil",
    "GTA 6 Brasil",
    "Leonida",
    "Vice City",
    "GTA VI mapa",
    "GTA VI personagens",
    "GTA VI guia",
    "GTA 6 mapa",
    "GTA 6 personagens",
    "LevelRoute",
  ],

  authors: [
    {
      name: "LevelRoute",
    },
  ],

  creator: "LevelRoute",
  publisher: "LevelRoute",

  metadataBase: new URL("https://levelroute.vercel.app"),

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "fABU0lYtXW2fNhaPm7G1UuB_FfC0AlJ6tgTFEkml85Q",
  },

  openGraph: {
    title: "LevelRoute — GTA VI Intelligence Hub",
    description:
      "Explore Leonida, personagens, regiões, mapas, descobertas e tudo que já sabemos sobre GTA VI.",
    url: "https://levelroute.vercel.app",
    siteName: "LevelRoute",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LevelRoute — GTA VI Intelligence Hub",
    description:
      "Explore Leonida, personagens, regiões, mapas e tudo que já sabemos sobre GTA VI.",
  },

  robots: {
    index: true,
    follow: true,
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