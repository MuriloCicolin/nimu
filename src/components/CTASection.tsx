import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-gradient-nimu py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para turbinar as vendas do seu lançamento?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Consulta gratuita e proposta personalizada para as necessidades do
            seu empreendimento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
