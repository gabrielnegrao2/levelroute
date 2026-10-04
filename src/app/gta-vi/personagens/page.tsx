import Link from "next/link";

const supportingCharacters = [
  {
    number: "03",
    name: "Cal Hampton",
    role: "CÍRCULO DE JASON",
    location: "LEONIDA",
    description:
      "Amigo de Jason e associado de Brian. Prefere ficar em casa, beber cerveja e monitorar comunicações da Guarda Costeira enquanto mergulha em teorias e paranoias.",
  },
  {
    number: "04",
    name: "Boobie Ike",
    role: "VICE CITY",
    location: "VICE CITY",
    description:
      "Uma figura conhecida da cidade. Transformou sua vida nas ruas em um império envolvendo imóveis, entretenimento e música.",
  },
  {
    number: "05",
    name: "Dre'Quan Priest",
    role: "ONLY RAW RECORDS",
    location: "VICE CITY",
    description:
      "Sempre teve mais cabeça para negócios do que para o crime. Seu objetivo é conquistar espaço na indústria musical de Vice City.",
  },
  {
    number: "06",
    name: "Real Dimez",
    role: "BAE-LUXE + ROXY",
    location: "VICE CITY",
    description:
      "Dupla formada por amigas de longa data que transformaram golpes, música e presença nas redes em uma tentativa real de chegar ao topo.",
  },
  {
    number: "07",
    name: "Raul Bautista",
    role: "ASSALTANTE PROFISSIONAL",
    location: "LEONIDA",
    description:
      "Assaltante de bancos experiente, carismático e calculista. Está sempre procurando gente disposta a assumir riscos maiores por recompensas maiores.",
  },
  {
    number: "08",
    name: "Brian Heder",
    role: "TRÁFICO / KEYS",
    location: "LEONIDA KEYS",
    description:
      "Traficante veterano da velha guarda. Opera a partir de seu estaleiro nos Keys e permite que Jason more em uma de suas propriedades.",
  },
];

const connections = [
  {
    from: "Jason",
    to: "Lucia",
    description: "Parceiros no centro da história.",
  },
  {
    from: "Jason",
    to: "Cal",
    description: "Amigos.",
  },
  {
    from: "Jason",
    to: "Brian",
    description: "Jason trabalha para Brian nos Keys.",
  },
  {
    from: "Boobie",
    to: "Dre'Quan",
    description: "Parceiros ligados à Only Raw Records.",
  },
  {
    from: "Dre'Quan",
    to: "Real Dimez",
    description: "As Real Dimez estão ligadas à gravadora.",
  },
];

export default function PersonagensPage() {
  return (
    <main className="min-h-screen bg-[#050308] text-white">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-8 md:px-10">
        {/* Luzes de fundo */}
        <div className="pointer-events-none absolute left-[-250px] top-[250px] h-[700px] w-[700px] rounded-full bg-[#ff2bd6]/10 blur-[180px]" />

        <div className="pointer-events-none absolute right-[-250px] top-[700px] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/10 blur-[180px]" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Level
            <span className="text-[#ff2bd6]">Route</span>
          </Link>

          <div className="flex items-center gap-6">
            <span className="hidden text-xs tracking-[0.2em] text-white/25 md:block">
              LEONIDA DATABASE
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
        <section className="relative z-10 border-b border-white/10 py-20">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#ff2bd6]/30 bg-[#ff2bd6]/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#ff65df]">
              PEOPLE OF LEONIDA
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/35">
              8 PERSONAGENS CONFIRMADOS
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Quem é quem
            <span className="block bg-gradient-to-r from-[#ff2bd6] via-[#ff65df] to-[#9b6cff] bg-clip-text text-transparent">
              em Leonida.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
            Personagens, relações e grupos já revelados oficialmente para GTA
            VI. Sem teoria tratada como fato.
          </p>
        </section>

        {/* Protagonistas */}
        <section className="relative z-10 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#ff65df]">
                ARQUIVO 01
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Os protagonistas
              </h2>
            </div>

            <span className="hidden text-xs text-white/25 md:block">
              STATUS: CONFIRMADO
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {/* Jason */}
            <article className="group relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 transition duration-500 hover:border-[#ff2bd6]/40">
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#ff2bd6]/10 blur-[100px]" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.25em] text-[#ff65df]">
                    JASON / 01
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-widest text-white/35">
                    PROTAGONISTA
                  </span>
                </div>

                <div className="mt-auto">
                  <p className="mb-2 text-xs tracking-[0.2em] text-white/25">
                    LEONIDA KEYS
                  </p>

                  <h3 className="text-5xl font-black tracking-[-0.04em] md:text-6xl">
                    Jason
                    <span className="block text-white/25">Duval</span>
                  </h3>

                  <p className="mt-6 max-w-lg leading-7 text-white/45">
                    Cresceu cercado por golpistas e criminosos. Passou pelo
                    Exército antes de terminar nos Keys trabalhando para
                    traficantes locais.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {["EX-MILITAR", "LEONIDA KEYS", "BRIAN HEDER", "LUCIA"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-[10px] font-bold tracking-[0.15em] text-white/40"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* Lucia */}
            <article className="group relative min-h-[430px] overflow-hidden rounded-[28px] border border-[#ff2bd6]/20 bg-gradient-to-br from-[#ff2bd6]/10 to-transparent p-8 transition duration-500 hover:border-[#ff2bd6]/50">
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#9b6cff]/15 blur-[100px]" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.25em] text-[#ff65df]">
                    LUCIA / 02
                  </span>

                  <span className="rounded-full border border-[#ff2bd6]/20 px-3 py-1 text-[10px] tracking-widest text-[#ff7ce8]">
                    PROTAGONISTA
                  </span>
                </div>

                <div className="mt-auto">
                  <p className="mb-2 text-xs tracking-[0.2em] text-white/25">
                    LEONIDA
                  </p>

                  <h3 className="text-5xl font-black tracking-[-0.04em] md:text-6xl">
                    Lucia
                    <span className="block bg-gradient-to-r from-[#ff2bd6] to-[#9b6cff] bg-clip-text text-transparent">
                      Caminos
                    </span>
                  </h3>

                  <p className="mt-6 max-w-lg leading-7 text-white/45">
                    Aprendeu a lutar ainda criança. Depois de passar pela
                    prisão de Leonida, está determinada a mudar as próprias
                    chances e conquistar uma vida melhor.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "LEONIDA PENITENTIARY",
                      "LIBERTY CITY",
                      "JASON",
                      "FAMÍLIA",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-[#ff2bd6]/15 bg-[#ff2bd6]/5 px-3 py-2 text-[10px] font-bold tracking-[0.15em] text-[#ff7ce8]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Outros personagens */}
        <section className="relative z-10 border-t border-white/10 py-20">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.25em] text-[#ff65df]">
              ARQUIVO 02
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Pessoas para ficar de olho.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {supportingCharacters.map((character) => (
              <article
                key={character.name}
                className="group bg-[#08060b] p-7 transition hover:bg-[#ff2bd6]/[0.04]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-[#ff65df]">
                    {character.number}
                  </span>

                  <span className="text-[10px] font-bold tracking-[0.18em] text-white/25">
                    {character.location}
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-black transition group-hover:text-[#ff65df]">
                  {character.name}
                </h3>

                <p className="mt-2 text-[10px] font-bold tracking-[0.2em] text-[#ff65df]/60">
                  {character.role}
                </p>

                <p className="mt-5 max-w-xl leading-7 text-white/40">
                  {character.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Connections */}
        <section className="relative z-10 border-t border-white/10 py-20">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.25em] text-[#ff65df]">
              CONNECTION MAP
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Quem está ligado a quem?
            </h2>

            <p className="mt-4 max-w-2xl text-white/40">
              Relações já conhecidas entre os personagens apresentados pela
              Rockstar.
            </p>
          </div>

          <div className="space-y-3">
            {connections.map((connection) => (
              <div
                key={`${connection.from}-${connection.to}`}
                className="grid items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-[#ff2bd6]/25 md:grid-cols-[1fr_auto_1fr_2fr]"
              >
                <span className="font-bold">{connection.from}</span>

                <span className="text-[#ff2bd6]">→</span>

                <span className="font-bold">{connection.to}</span>

                <span className="text-sm text-white/35">
                  {connection.description}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#ff2bd6]/15 bg-[#ff2bd6]/5 p-5">
            <p className="text-sm leading-6 text-white/45">
              Conforme a Rockstar revelar novos personagens e relações, este
              painel pode crescer automaticamente como uma base de inteligência
              de Leonida.
            </p>
          </div>
        </section>

        {/* Footer */}
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
            Informações baseadas em material oficial da Rockstar ↗
          </a>
        </footer>
      </div>
    </main>
  );
}