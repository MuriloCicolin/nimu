import { Card } from "@/components/ui/card";
import { Building2, Award, TrendingUp, Sparkles } from "lucide-react";

const SolutionSection = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Arquitetura no DNA",
      description:
        "Equipe de arquitetos experientes que entendem proporção, escala e intenção de projeto.",
    },
    {
      icon: Award,
      title: "Cases com Credibilidade",
      description:
        "Projetos de grande escala como a rede Golden Tulip com qualidade comprovada.",
    },
    {
      icon: TrendingUp,
      title: "Foco no ROI",
      description:
        "Cada imagem como investimento em conversão e velocidade de venda.",
    },
    {
      icon: Sparkles,
      title: "Tecnologia Avançada",
      description:
        "Ferramentas modernas para criar experiências completas e imersivas, com dinamismo e sem intermináveis burocracias.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A dificuldade de vender um projeto no papel{" "}
            <span className="text-gradient">Acaba Aqui</span>
          </h2>
        </div>

        {/* Challenge and Solution Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Challenge Card */}
          <Card className="p-8 bg-white border-2 border-gray-200 hover:border-nimu-teal transition-all duration-300 hover:shadow-xl">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  O Desafio
                </h3>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Seus clientes não conseguem visualizar o empreendimento final.
              Plantas técnicas não vendem o sonho, e as vendas podem ficar
              estagnadas.
            </p>
          </Card>

          {/* Solution Card */}
          <Card className="p-8 bg-gradient-to-br from-nimu-teal to-nimu-blue text-white border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Nossa Solução</h3>
              </div>
            </div>
            <p className="text-white/95 text-lg leading-relaxed">
              Criamos imagens, vídeos e tours virtuais realistas, uma
              experiência para que o cliente consiga se ver no espaço. Uma
              estratégia perfeita para colaborar nas vendas do seu
              empreendimento.
            </p>
          </Card>
        </div>

        {/* Why Choose NIMU */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-10 md:p-12 border-2 border-gray-100">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Por que Escolher a <span className="text-gradient">NIMU</span>?
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Expertise arquitetônica aliada à tecnologia de ponta, a NIMU
              Studio é um estúdio criativo especializado em visualização
              arquitetônica. Combinamos arte, técnica e narrativa para
              transformar ideias em imagens que comunicam propósito. Nosso
              trabalho une realismo, sensibilidade e storytelling para destacar
              cada detalhe do seu projeto. Acreditamos que cada render deve ir
              além da representação técnica, deve emocionar, inspirar e vender.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border-2 border-gray-100 hover:border-nimu-teal group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-nimu-teal to-nimu-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
