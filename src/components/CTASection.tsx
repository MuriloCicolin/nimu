import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-gradient-nimu py-12">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 xl:px-32">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para turbinar as vendas do seu lançamento?
          </h2>
          <p className="text-white/90 mb-6 text-base">
            Consulta gratuita e proposta personalizada para as necessidades do
            seu empreendimento.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
