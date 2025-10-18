import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-gradient-nimu py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seus projetos?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Entre em contato conosco hoje mesmo para uma consulta gratuita.
            Vamos discutir como podemos elevar seus projetos com visualizações
            3D de alta qualidade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-[#1959E5] hover:bg-white/20 bg-white"
            >
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
