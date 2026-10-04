export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-10">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="text-xl font-bold tracking-tight">
            Level<span className="text-lime-400">Route</span>
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
            BUILD 0.0.1
          </div>
        </header>

        <section className="flex flex-1 items-center py-20">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-300">
              GTA VI • HUB EM CONSTRUÇÃO
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Seu mapa para o
              <span className="block text-white/40">
                próximo grande mundo.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50 md:text-xl">
              Guias, progresso, descobertas, ferramentas e tudo que você
              precisa para explorar GTA VI.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300">
                Explorar GTA VI
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/70 transition hover:bg-white/10">
                Em breve
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-6 text-sm text-white/30">
          LevelRoute — Built for players.
        </footer>
      </div>
    </main>
  );
}