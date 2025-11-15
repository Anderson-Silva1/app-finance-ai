export default function HeroSection() {
  return (
    <section className="bg-background-hero flex flex-col items-center px-6 py-20 text-center text-white">
      {/* Título com Gradiente no texto */}
      <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
        <span className="from-primary bg-linear-to-r to-violet-600 bg-clip-text text-transparent">
          Muito mais
        </span>{" "}
        que um <br className="hidden md:block" />
        gestor de finanças
      </h1>

      {/* Subtítulo com largura limitada para leitura confortável */}
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
        O <strong>Finane AI</strong> não apenas registra seus gastos. Nossa
        inteligência artificial analisa seu padrão de consumo e te diz
        exatamente onde cortar e onde investir.
      </p>

      {/* Botões com brilho sutil */}
      <div className="mb-10 flex gap-4">
        <button className="from-primary rounded-full bg-linear-to-r to-violet-600 px-8 py-3 font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] transition hover:opacity-90">
          Para você
        </button>
        <button className="rounded-full border border-gray-700 px-8 py-3 font-semibold text-gray-300 transition hover:bg-gray-800">
          Para empresas
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <CardHero
          dado="+1.5 milhão"
          label="Transações processadas pela nossa IA"
        />
        <CardHero
          dado="+R$ 50 milhões"
          label="Em patrimônio gerenciado pelos usuários"
        />
        <CardHero dado="+5.000" label="Metas financeiras alcançadas este ano" />
      </div>
    </section>
  );
}

const CardHero = ({ dado, label }: { dado: string; label: string }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-8 transition-colors duration-300 hover:border-purple-500/30">
      {/* O ponto brilhante (glow) no canto superior direito */}
      <div className="absolute top-6 right-6 h-2 w-2 animate-pulse rounded-full bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.8)]" />
      <h3 className="mb-4 text-4xl font-bold text-white">{dado}</h3>
      <p className="text-sm font-light text-gray-400">{label}</p>
    </div>
  );
};
