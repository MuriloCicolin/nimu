import { Card } from "@/components/ui/card";
import { FileText, FileCheck, Box, Palette, CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Briefing & Alinhamento",
      description: "Entendemos seu projeto, público e objetivos",
    },
    {
      number: "2",
      icon: FileCheck,
      title: "Proposta Comercial",
      description: "Proposta clara com prazos e escopo",
    },
    {
      number: "3",
      icon: Box,
      title: "Modelagem 3D",
      description: "Modelo inicial para sua validação",
    },
    {
      number: "4",
      icon: Palette,
      title: "Criação de Cenários",
      description: "Desenvolvimento com seu feedback contínuo",
    },
    {
      number: "5",
      icon: CheckCircle2,
      title: "Entrega",
      description: "Arquivos de alta qualidade prontos para campanhas",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Processo <span className="text-gradient">Simples e Direto</span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Do briefing ao material pronto
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="p-6 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-xl border-2 border-gray-100 hover:border-nimu-teal group h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-nimu-teal to-nimu-blue rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-nimu-green/10 to-nimu-teal/10 rounded-xl flex items-center justify-center mb-4 mt-2 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-nimu-teal" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </Card>

                {/* Arrow Connector (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <svg
                      className="w-4 h-4 text-nimu-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
