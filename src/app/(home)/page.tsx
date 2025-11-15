import HeroSection from "@/components/home/template/hero";
import {
  EyeOffIcon,
  LandmarkIcon,
  LockIcon,
  ShieldCheckIcon,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="bg-[#F9FAFB] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Grid Principal: Texto à Esquerda | Cards à Direita */}
          <div className="mb-24 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            {/* LADO ESQUERDO: O Manifesto */}
            <div className="max-w-lg">
              <span className="text-primary mb-4 block text-sm font-bold tracking-wider uppercase">
                Segurança em primeiro lugar
              </span>
              <h2 className="mb-6 text-4xl leading-tight font-extrabold text-gray-900 md:text-5xl">
                Nascemos para <span className="text-primary">proteger</span> o
                seu patrimônio.
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Enquanto outros apps vendem seus dados, nós usamos criptografia
                de ponta a ponta. O <strong>Finane AI</strong> foi construído
                com os mesmos protocolos de segurança dos maiores bancos
                globais. Sua privacidade é inegociável para nós.
              </p>
            </div>

            {/* LADO DIREITO: A Tecnologia e os Cards */}
            <div className="flex flex-col gap-8">
              {/* Cabeçalho do Lado Direito (Open Finance) */}
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-lg bg-purple-100 p-3">
                  <LandmarkIcon className="text-primary h-8 w-8" />
                </div>
                <p className="max-w-xs text-sm text-gray-600">
                  Operamos com integração oficial via{" "}
                  <strong>Open Finance</strong>, garantindo a leitura segura dos
                  dados sem acesso a movimentações.
                </p>
              </div>

              {/* Os 3 Cards Cinzas */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Card 1 */}
                <div className="flex flex-col items-center rounded-xl bg-gray-200/70 p-6 text-center transition-colors duration-300 hover:bg-purple-50">
                  <LockIcon className="text-primary mb-4 h-8 w-8" />
                  <h3 className="mb-2 text-sm font-bold text-gray-800">
                    Criptografia Militar
                  </h3>
                  <p className="text-xs text-gray-500">
                    Padrão AES-256 de ponta a ponta
                  </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center rounded-xl bg-gray-200/70 p-6 text-center transition-colors duration-300 hover:bg-purple-50">
                  <ShieldCheckIcon className="text-primary mb-4 h-8 w-8" />
                  <h3 className="mb-2 text-sm font-bold text-gray-800">
                    LGPD Compliant
                  </h3>
                  <p className="text-xs text-gray-500">
                    Conformidade total com a lei de dados
                  </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center rounded-xl bg-gray-200/70 p-6 text-center transition-colors duration-300 hover:bg-purple-50">
                  <EyeOffIcon className="text-primary mb-4 h-8 w-8" />
                  <h3 className="mb-2 text-sm font-bold text-gray-800">
                    Dados Anônimos
                  </h3>
                  <p className="text-xs text-gray-500">
                    Seus dados são invisíveis para nossa equipe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAIXA DE LOGOS (Rodapé da seção) */}
          <div className="border-t border-gray-200 pt-12">
            <p className="mb-8 text-center text-sm font-medium tracking-widest text-gray-400 uppercase">
              Conectamos com as principais instituições
            </p>

            {/* Grid de Logos (Substitua os textos por <img src="logo.svg" />) */}
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 md:justify-between">
              <span className="font-sans text-2xl font-bold text-gray-800">
                nubank
              </span>
              <span className="font-serif text-2xl font-bold text-gray-800 italic">
                Itaú
              </span>
              <span className="font-sans text-2xl font-bold tracking-tighter text-gray-800">
                bradesco
              </span>
              <span className="font-mono text-2xl font-bold text-gray-800">
                inter
              </span>
              <span className="font-sans text-2xl font-bold text-gray-800">
                XP<span className="font-light">inc.</span>
              </span>
              <span className="font-serif text-2xl font-bold text-gray-800">
                Santander
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>Nossos principais recursos</section>
      <section>FEEDBACK DOS CLIENTES</section>
      <section>PLANOS</section>
      <section>BLOG</section>
      <section>FAQ</section>
    </main>
  );
}
