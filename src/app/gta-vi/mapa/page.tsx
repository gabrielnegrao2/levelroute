import Link from "next/link";

const locations = [
  {
    id: "01",
    name: "Vice City",
    type: "METRÓPOLE",
    description:
      "O coração urbano de Leonida. Praias, vida noturna, negócios, música e crime dividindo o mesmo cenário.",
    tags: ["URBANO", "NIGHTLIFE", "MÚSICA"],
  },
  {
    id: "02",
    name: "Leonida Keys",
    type: "ARQUIPÉLAGO",
    description:
      "Ilhas tropicais ao sul de Leonida. Região ligada diretamente a Jason e às operações de Brian Heder.",
    tags: ["ILHAS", "JASON", "BRIAN HEDER"],
  },
  {
    id: "03",
    name: "Grassrivers",
    type: "ÁREA SELVAGEM",
    description:
      "Pântanos, natureza e vida selvagem mostram um lado de Leonida completamente diferente de Vice City.",
    tags: ["PÂNTANOS", "WILDLIFE", "EXPLORAÇÃO"],
  },
  {
    id: "04",
    name: "Port Gellhorn",
    type: "REGIÃO COSTEIRA",
    description:
      "Uma das regiões já apresentadas oficialmente, distante do glamour e do ritmo de Vice City.",
    tags: ["COSTA", "CIDADE", "EXPLORAÇÃO"],
  },
  {
    id: "05",
    name: "Ambrosia",
    type: "INTERIOR",
    description:
      "Uma região do interior de Leonida ligada a um ambiente mais industrial e rural.",
    tags: ["INTERIOR", "INDÚSTRIA", "LEONIDA"],
  },
  {
    id: "06",
    name: "Mount Kalaga",
    type: "PARQUE NACIONAL",
    description:
      "Montanhas, trilhas e áreas selvagens expandem Leonida muito além de suas cidades.",
    tags: ["MONTANHAS", "TRILHAS", "NATUREZA"],
  },
];

const mapNodes = [
  {
    name: "Mount Kalaga",
    label: "06",
    position: "left-[48%] top-[9%]",
  },
  {
    name: "Ambrosia",
    label: "05",
    position: "left-[65%] top-[30%]",
  },
  {
    name: "Port Gellhorn",
    label: "04",
    position: "left-[14%] top-[37%]",
  },
  {
    name: "Grassrivers",
    label: "03",
    position: "left-[42%] top-[52%]",
  },
  {
    name: "Vice City",
    label: "01",
    position: "left-[70%] top-[61%]",
    featured: true,
  },
  {
    name: "Leonida Keys",
    label: "02",
    position: "left-[57%] top-[82%]",
  },
];

export default function MapaPage() {
  return (
    <main className="min-h-screen bg-[#050308] text-white">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-8 md:px-10">
        {/* Luzes */}
        <div className="pointer-events-none absolute left-[-300px] top-[300px] h-[800px] w-[800px] rounded-full bg-[#ff2bd6]/10 blur-[200px]" />

        <div className="pointer-events-none absolute right-[-300px] top-[900px] h-[800px] w-[800px] rounded-full bg-[#8b5cf6]/10 blur-[200px]" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Level
            <span className="text-[#ff2bd6]">Route</span>
          </Link>

          <div className="flex items-center gap-6">
            <span className="hidden text-xs tracking-[0.2em] text-white/25 md:block">
              LEONIDA ATLAS
            </span>

            <Link
              href="/gta-vi"
              className="text-sm text-white/40 transition hover:text-[#ff65df]"
            >
              GTA VI Hub
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="relative z-10 py-20">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#ff2bd6]/30 bg-[#ff2bd6]/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#ff65df]">
              LEONIDA ATLAS
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/35">
              PRE-LAUNCH INTEL
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Muito além de
            <span className="block bg-gradient-to-r from-[#ff2bd6] via-[#ff65df] to-[#9b6cff] bg-clip-text text-transparent">
              Vice City.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
            A LevelRoute está catalogando tudo que já sabemos sobre o estado
            de Leonida antes mesmo do lançamento.
          </p>
        </section>

        {/* Intel Map */}
        <section className="relative z-10 border-y border-white/10 py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#ff65df]">
                INTEL MAP / 001
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                O que já conhecemos de Leonida.
              </h2>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/25">
                SCHEMATIC VIEW
              </p>

              <p className="mt-1 text-xs text-white/20">
                Não representa posições geográficas exatas
              </p>
            </div>
          </div>

          <div className="relative h-[620px] overflow-hidden rounded-[32px] border border-white/10 bg-[#08060b]">
            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute left-[52%] top-[48%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff2bd6]/10 blur-[100px]" />

            {/* Decorative route lines */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 620"
              preserveAspectRatio="none"
            >
              <path
                d="M 500 90 C 520 170, 640 160, 670 220"
                stroke="rgba(255,43,214,0.18)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 10"
              />

              <path
                d="M 670 220 C 610 300, 520 300, 450 340"
                stroke="rgba(255,43,214,0.18)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 10"
              />

              <path
                d="M 450 340 C 570 400, 650 400, 730 410"
                stroke="rgba(255,43,214,0.18)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 10"
              />

              <path
                d="M 730 410 C 680 470, 620 500, 590 540"
                stroke="rgba(255,43,214,0.18)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 10"
              />

              <path
                d="M 450 340 C 350 310, 240 290, 160 260"
                stroke="rgba(155,108,255,0.18)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 10"
              />
            </svg>

            {/* Map title */}
            <div className="absolute left-7 top-7">
              <p className="text-[10px] font-bold tracking-[0.25em] text-white/20">
                STATE OF
              </p>

              <p className="mt-1 text-2xl font-black tracking-[0.2em] text-white/10">
                LEONIDA
              </p>
            </div>

            {/* Coordinates decoration */}
            <div className="absolute bottom-6 left-7 font-mono text-[9px] leading-5 text-white/15">
              LR-ATLAS-001
              <br />
              CLASSIFICATION: PRE-LAUNCH
              <br />
              SOURCE: OFFICIAL INTEL
            </div>

            {/* Nodes */}
            {mapNodes.map((node) => (
              <div
                key={node.name}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 ${node.position}`}
              >
                <div className="relative flex items-center gap-3">
                  <div
                    className={`relative flex h-11 w-11 items-center justify-center rounded-full border font-mono text-xs font-bold transition duration-300 ${
                      node.featured
                        ? "border-[#ff2bd6] bg-[#ff2bd6] text-black shadow-[0_0_40px_rgba(255,43,214,0.5)]"
                        : "border-[#ff2bd6]/40 bg-[#100b13] text-[#ff65df] shadow-[0_0_25px_rgba(255,43,214,0.1)] group-hover:border-[#ff2bd6] group-hover:bg-[#ff2bd6] group-hover:text-black"
                    }`}
                  >
                    {node.label}

                    <div className="absolute inset-[-8px] rounded-full border border-[#ff2bd6]/10" />
                  </div>

                  <div className="whitespace-nowrap rounded-xl border border-white/10 bg-[#08060b]/90 px-4 py-3 backdrop-blur">
                    <p className="text-[9px] font-bold tracking-[0.18em] text-[#ff65df]/60">
                      CONFIRMED
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      {node.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-6 right-7 rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-2 text-[10px] text-white/30">
                <div className="h-2 w-2 rounded-full bg-[#ff2bd6]" />
                REGIÃO CONFIRMADA
              </div>
            </div>
          </div>
        </section>

        {/* Database */}
        <section className="relative z-10 py-20">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.25em] text-[#ff65df]">
              REGION DATABASE
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Arquivos de Leonida.
            </h2>
          </div>

          <div className="space-y-3">
            {locations.map((location) => (
              <article
                key={location.id}
                className="group grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-[#ff2bd6]/30 hover:bg-[#ff2bd6]/[0.03] md:grid-cols-[70px_1fr_auto]"
              >
                <div className="font-mono text-lg font-bold text-[#ff65df]">
                  {location.id}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-black transition group-hover:text-[#ff65df]">
                      {location.name}
                    </h3>

                    <span className="text-[9px] font-bold tracking-[0.18em] text-white/25">
                      {location.type}
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl leading-6 text-white/40">
                    {location.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {location.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 px-2 py-1 text-[9px] font-bold tracking-[0.13em] text-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-white/25">
                  <div className="h-2 w-2 rounded-full bg-[#ff2bd6] shadow-[0_0_12px_rgba(255,43,214,.8)]" />
                  CONFIRMADO
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Future */}
        <section className="relative z-10 border-t border-white/10 py-20">
          <div className="relative overflow-hidden rounded-[32px] border border-[#ff2bd6]/20 bg-[#ff2bd6]/[0.04] p-8 md:p-12">
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-[#ff2bd6]/10 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="text-xs font-bold tracking-[0.25em] text-[#ff65df]">
                LAUNCH PROTOCOL
              </p>

              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Depois do lançamento, isso muda de nível.
              </h2>

              <p className="mt-6 max-w-2xl leading-7 text-white/45">
                Quando GTA VI estiver nas mãos dos jogadores, o Atlas poderá
                evoluir para um mapa interativo com descobertas da comunidade,
                missões, veículos, lojas, segredos, atividades e
                colecionáveis.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "MISSÕES",
                  "VEÍCULOS",
                  "EASTER EGGS",
                  "LOJAS",
                  "COLECIONÁVEIS",
                  "ATIVIDADES",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-[#ff2bd6]/15 bg-[#ff2bd6]/5 px-3 py-2 text-[10px] font-bold tracking-[0.15em] text-[#ff7ce8]/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-10 flex flex-col gap-5 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/gta-vi"
            className="text-sm text-white/40 transition hover:text-[#ff65df]"
          >
            ← GTA VI Hub
          </Link>

          <a
            href="https://www.rockstargames.com/VI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/30 transition hover:text-[#ff65df]"
          >
            Intel baseada em material oficial Rockstar ↗
          </a>
        </footer>
      </div>
    </main>
  );
}