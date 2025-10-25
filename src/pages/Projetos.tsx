import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Projetos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectCategories = [
    {
      id: "externas",
      title: "Renderizações Externas",
      description:
        "Visualizações fotorrealistas de fachadas, entradas e áreas externas dos projetos.",
      image: "/src/assets/externas/00_E.png",
      link: "/projetos/externas",
      count: "11 projetos",
    },
    {
      id: "internas",
      title: "Renderizações Internas",
      description:
        "Ambientes internos detalhados com iluminação, materiais e decoração realistas.",
      image: "/src/assets/internas/COWORKING 03_EDITADA_.jpg",
      link: "/projetos/internas",
      count: "17 projetos",
    },
    {
      id: "planta",
      title: "Plantas Humanizadas",
      description:
        "Plantas baixas com representação humanizada de móveis, texturas e layouts.",
      image: "/src/assets/planta/1- ap 32(1).jpg",
      link: "/projetos/planta-humanizada",
      count: "8 projetos",
    },
    {
      id: "360",
      title: "Tours Virtuais 360°",
      description:
        "Experiências imersivas com panoramas interativos de 360 graus.",
      image: "/src/assets/3dview.webp",
      link: "/projetos/360",
      count: "7 panoramas",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nossos <span className="text-gradient">Projetos</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore nosso portfólio completo de visualizações arquitetônicas,
              tours virtuais e renderizações de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projectCategories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-nimu-teal"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {category.count}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>

                  <Link to={category.link}>
                    <Button className="w-full bg-gradient-to-r from-nimu-teal to-nimu-blue hover:from-nimu-blue hover:to-nimu-teal transition-all duration-300 group">
                      Ver Projetos
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nimu-teal to-nimu-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quer um projeto como esses?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato e transforme suas ideias em visualizações
            impressionantes
          </p>
          <Link to="/#contato">
            <Button
              size="lg"
              className="bg-white text-nimu-blue hover:bg-gray-100 transition-all duration-300 text-lg px-8 py-6"
            >
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projetos;
