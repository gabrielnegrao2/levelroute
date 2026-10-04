export default function GtaHub() {
  const sections = [
    {
      title: "Mapa",
      description: "Explore locais, pontos de interesse e descobertas.",
      status: "Em breve",
    },
    {
      title: "Missões",
      description: "Acompanhe missões e seu progresso pela história.",
      status: "Em breve",
    },
    {
      title: "Veículos",
      description: "Carros, motos e outros veículos encontrados no jogo.",
      status: "Em breve",
    },
    {
      title: "Personagens",
      description: "Conheça personagens, relações e informações importantes.",
      status: "Em breve",
    },
    {
      title: "Progresso",
      description: "Controle tudo o que você já completou no jogo.",
      status: "Em breve",
    },
    {
      title: "Guias",
      description: "Dicas e informações para aproveitar cada parte do jogo.",
      status: "Em breve",
    },
  ];

  return (
    <section className="border-t border-white/10 py-24">
      <div className="mb-12">
        <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#ff65df]">
          GTA VI HUB
        </p>

        <h2 className="text-4xl font-black tracking-tight md:text-5xl">
          Tudo em um só lugar.
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-white/40">
          A LevelRoute está sendo construída para acompanhar sua jornada por
          GTA VI.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <div
            key={section.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#ff2bd6]/30 hover:bg-[#ff2bd6]/5"
          >
            <div className="mb-8 flex items-start justify-between">
              <div className="h-2 w-2 rounded-full bg-[#ff2bd6] shadow-[0_0_15px_rgba(255,43,214,0.8)]" />

              <span className="text-xs text-white/30">
                {section.status}
              </span>
            </div>

            <h3 className="text-xl font-bold">
              {section.title}
            </h3>

            <p className="mt-2 leading-6 text-white/40">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}