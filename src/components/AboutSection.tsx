import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const features = [
    {
      title: "Renderização 3D",
      description:
        "Criamos imagens fotorrealistas para dar vida aos seus projetos.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      ),
    },
    {
      title: "Maquetes Virtuais",
      description:
        "Apresentações interativas para melhorar a experiência do cliente.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m-11.142 0L12 12m0 0l4.179-2.25L20.25 12l-4.179 2.25L12 12m0 0l-4.179 2.25L3.75 12l4.179-2.25L12 12m0 0l4.179 2.25L12 16.5l-4.179-2.25L12 12m0-4.5V2.25m0 13.5v-9"
          />
        </svg>
      ),
    },
    {
      title: "Equipe Especializada",
      description:
        "Profissionais com vasta experiência em arquitetura e computação gráfica.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-nimu rounded-full opacity-20 blur-3xl"></div>
              {/* Imagem principal */}
              <div className="rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
                  alt="Equipe NIMU trabalhando em renderizações 3D"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre a <span className="text-gradient">NIMU</span>
            </h2>
            <p className="text-gray-700 mb-6">
              A NIMU Studio é um estúdio criativo especializado em visualização
              arquitetônica. Combinamos arte, técnica e narrativa para
              transformar ideias em imagens que comunicam propósito. Nosso
              trabalho une realismo, sensibilidade e storytelling para destacar
              cada detalhe do seu projeto.  Nossa equipe combina conhecimento
              técnico avançado com sensibilidade artística para entregar imagens
              que não apenas mostram, mas emocionam e vendem.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa equipe combina conhecimento técnico avançado com
              sensibilidade artística para entregar imagens que não apenas
              mostram, mas emocionam e vendem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div
                    className={cn(
                      "w-12 h-12 flex items-center justify-center rounded-full mb-4",
                      index === 0
                        ? "bg-nimu-green/10 text-nimu-green"
                        : index === 1
                        ? "bg-nimu-teal/10 text-nimu-teal"
                        : "bg-nimu-blue/10 text-nimu-blue"
                    )}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <Button className="bg-gradient-nimu hover:opacity-90 transition-opacity px-12 py-6 text-lg">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
