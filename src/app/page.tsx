import Link from "next/link";

import Countdown from "@/components/Countdown";
import GtaHub from "@/components/GtaHub";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050308] text-white">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-8 md:px-10">
        {/* Glows de fundo */}
        <div className="pointer-events-none absolute left-[-150px] top-[200px] h-[500px] w-[500px] rounded-full bg-[#ff2bd6]/10 blur-[140px]" />

        <div className="pointer-events-none absolute right-[-200px] top-[100px] h-[450px] w-[450px] rounded-full bg-[#8b5cf6]/10 blur-[140px]" />

        <header className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <div className="text-xl font-bold tracking-tight">
            Level
            <span className="text-[#ff2bd6]">Route</span>
          </div>

          <div className="rounded-full border border-[#ff2bd6]/20 bg-[#ff2bd6]/5 px-3 py-1 text-xs text-[#ff7ce8]">
            BUILD 0.0.3
          </div>
        </header>

        <section className="relative z-10 flex min-h-[820px] items-center py-20">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-[#ff2bd6]/30 bg-[#ff2bd6]/10 px-4 py-2 text-sm font-medium text-[#ff75e6] shadow-[0_0_30px_rgba(255,43,214,0.08)]">
              GTA VI • HUB EM CONSTRUÇÃO
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Seu mapa para o
              <span className="block bg-gradient-to-r from-[#ff2bd6] via-[#ff65df] to-[#9b6cff] bg-clip-text text-transparent">
                próximo grande mundo.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
              Guias, progresso, descobertas, ferramentas e tudo que você
              precisa para explorar GTA VI.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/gta-vi"
                className="rounded-xl bg-[#ff2bd6] px-6 py-3 font-bold text-black shadow-[0_0_30px_rgba(255,43,214,0.25)] transition hover:bg-[#ff65df] hover:shadow-[0_0_40px_rgba(255,43,214,0.4)]"
              >
                Explorar GTA VI
              </Link>

              <a
                href="#gta-hub"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/70 transition hover:border-[#ff2bd6]/30 hover:bg-[#ff2bd6]/5 hover:text-white"
              >
                Ver recursos
              </a>
            </div>

            <Countdown />
          </div>
        </section>

        <div
          id="gta-hub"
          className="relative z-10 scroll-mt-8"
        >
          <GtaHub />
        </div>

        <footer className="relative z-10 border-t border-white/10 pt-6 text-sm text-white/30">
          LevelRoute — Built for players.
        </footer>
      </div>
    </main>
  );
}