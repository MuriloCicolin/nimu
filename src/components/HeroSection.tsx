import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Renderização Arquitetônica"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 xl:px-32 relative z-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Venda mais e mais rápido, antes mesmo da{" "}
            <span className="text-gradient">obra começar</span>
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-6">
            Tornamos seu projeto arquitetônico em ferramenta de vendas poderosas
            com visualizações 3D realistas e imersivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/#contato">
              <Button className="bg-gradient-nimu hover:opacity-90 transition-opacity w-full sm:w-auto">
                Solicitar Proposta
              </Button>
            </Link>
            <Link to="/projetos">
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 w-full sm:w-auto"
              >
                Ver Cases
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Rolar para baixo</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
