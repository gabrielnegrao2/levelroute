import Link from "next/link";

export default function GtaViPage() {
  return (
    <main className="min-h-screen bg-[#050308] text-white">
      <div className="relative mx-auto min-h-screen max-w-7xl overflow-hidden px-6 py-8 md:px-10">
        {/* Glows */}
        <div className="pointer-events-none absolute left-[-150px] top-[150px] h-[500px] w-[500px] rounded-full bg-[#ff2bd6]/10 blur-[140px]" />
        <div className="pointer-events-none absolute right-[-200px] top-[250px] h-[450px] w-[450px] rounded-full bg-[#9b6cff]/10 blur-[140px]" />

        <header className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            Level
            <span className="text-[#ff2bd6]">
              Route
            </span>
          </Link>

          <span className="rounded-full border border-[#ff2bd6]/20 bg-[#ff2bd6]/5 px-3 py-1 text-xs text-[#ff7ce8]">
            GTA VI
          </span>
        </header>

        <section className="relative z-10 py-24">
          <p className="mb-5 text-xs font-bold tracking-[0.3em] text-[#ff65df]">
            LEVELROUTE / GTA VI
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            GTA VI
            <span className="block bg-gradient-to-r from-[#ff2bd6] via-[#ff65df] to-[#9b6cff] bg-clip-text text-transparent">
              Hub.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
            O ponto central da LevelRoute para mapas, missões, veículos,
            personagens, progresso e guias de GTA VI.
          </p>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Mapa",
              "Missões",
              "Veículos",
              "Personagens",
              "Progresso",
              "Guias",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#ff2bd6]/30 hover:bg-[#ff2bd6]/5"
              >
                <div className="mb-10 h-2 w-2 rounded-full bg-[#ff2bd6] shadow-[0_0_15px_rgba(255,43,214,0.8)]" />

                <h2 className="text-xl font-bold">
                  {item}
                </h2>

                <p className="mt-2 text-sm text-white/35">
                  Em desenvolvimento.
                </p>
              </div>
            ))}
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