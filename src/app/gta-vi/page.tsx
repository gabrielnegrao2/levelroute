import Link from "next/link";

const sections = [
  {
    title: "Mapa",
    description: "Explore Leonida e todas as regiões já reveladas.",
    href: "/gta-vi/mapa",
    available: true,
  },
  {
    title: "Missões",
    description: "Acompanhe missões e seu progresso pela história.",
    href: "#",
    available: false,
  },
  {
    title: "Veículos",
    description: "Carros, motos e outros veículos encontrados no jogo.",
    href: "#",
    available: false,
  },
  {
    title: "Personagens",
    description: "Conheça personagens, relações e grupos de Leonida.",
    href: "/gta-vi/personagens",
    available: true,
  },
  {
    title: "Progresso",
    description: "Controle tudo o que você já completou no jogo.",
    href: "#",
    available: false,
  },
  {
    title: "Guias",
    description: "Descobertas, informações e inteligência sobre GTA VI.",
    href: "#",
    available: false,
  },
];

export default function GtaViPage() {
  return (
    <main className="min-h-screen bg-[#050308] text-white">
      <div className="relative mx-auto min-h-screen max-w-7xl overflow-hidden px-6 py-8 md:px-10">
        {/* Glows */}
        <div className="pointer-events-none absolute left-[-150px] top-[150px] h-[500px] w-[500px] rounded-full bg-[#ff2bd6]/10 blur-[140px]" />

        <div className="pointer-events-none absolute right-[-200px] top-[250px] h-[450px] w-[450px] rounded-full bg-[#9b6cff]/10 blur-[140px]" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Level
            <span className="text-[#ff2bd6]">Route</span>
          </Link>

          <span className="rounded-full border border-[#ff2bd6]/20 bg-[#ff2bd6]/5 px-3 py-1 text-xs text-[#ff7ce8]">
            GTA VI
          </span>
        </header>

        {/* Hero */}
        <section className="relative z-10 py-24">
          <p className="mb-5 text-xs font-bold tracking-[0.3em] text-[#ff65df]">
            LEVELROUTE / GTA VI
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            GTA VI
            <span className="block bg-gradient-to-r from-[#ff2bd6] via-[#ff65df] to-[#9b6cff] bg-clip-text text-transparent">
              Intelligence Hub.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
            Leonida organizada para quem quer saber mais do que apenas jogar.
            Regiões, personagens, conexões, descobertas e tudo que formará o
            mundo de GTA VI.
          </p>

          {/* Hub */}
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => {
              const content = (
                <>
                  <div className="mb-12 flex items-start justify-between">
                    <span className="font-mono text-sm text-[#ff65df]">
                      0{index + 1}
                    </span>

                    <span
                      className={`text-[10px] font-bold tracking-[0.18em] ${
                        section.available
                          ? "text-[#ff65df]"
                          : "text-white/25"
                      }`}
                    >
                      {section.available ? "ACESSAR" : "EM BREVE"}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black transition group-hover:text-[#ff65df]">
                    {section.title}
                  </h2>

                  <p className="mt-3 leading-6 text-white/35">
                    {section.description}
                  </p>

                  {section.available && (
                    <div className="mt-8 text-sm font-medium text-[#ff65df]">
                      Abrir arquivo →
                    </div>
                  )}
                </>
              );

              if (section.available) {
                return (
                  <Link
                    key={section.title}
                    href={section.href}
                    className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ff2bd6]/40 hover:bg-[#ff2bd6]/[0.05] hover:shadow-[0_20px_80px_rgba(255,43,214,0.08)]"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={section.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 opacity-60"
                >
                  {content}
                </div>
              );
            })}
          </div>

          {/* Status */}
          <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-white/10 pt-8 text-xs text-white/30">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#ff2bd6] shadow-[0_0_12px_rgba(255,43,214,0.9)]" />
              2 arquivos disponíveis
            </div>

            <span>•</span>

            <span>LevelRoute Build 0.0.5</span>
          </div>

          <div className="mt-16">
            <Link
              href="/"
              className="text-sm font-medium text-white/40 transition hover:text-[#ff65df]"
            >
              ← Voltar para LevelRoute
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}