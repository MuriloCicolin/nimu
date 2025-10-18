import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProjectTypesSection = () => {
  const projectTypes = [
    {
      title: "360°",
      description:
        "Visualizações panorâmicas imersivas que permitem uma experiência completa do ambiente",
      icon: "🔄",
      link: "/projetos/360",
    },
    {
      title: "Externas",
      description:
        "Renderizações fotorrealistas de fachadas, paisagismo e ambientes externos",
      icon: "🏢",
      link: "/projetos/externas",
    },
    {
      title: "Internas",
      description:
        "Visualizações detalhadas de interiores com iluminação e materiais realistas",
      icon: "🏠",
      link: "/projetos/internas",
    },
    {
      title: "Planta Humanizada",
      description:
        "Plantas baixas com elementos humanos e mobiliário para melhor compreensão",
      icon: "📐",
      link: "/projetos/planta-humanizada",
    },
  ];

  return (
    <section
      id="projetos"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Tipos de Projetos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Oferecemos soluções completas em renderização 3D para diferentes
            necessidades do seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectTypes.map((type, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg h-full flex flex-col"
            >
              <CardContent className="p-8 text-center flex-1 flex flex-col">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {type.description}
                </p>
                <div className="mt-auto">
                  <Link to={type.link}>
                    <Button className="bg-gradient-nimu hover:opacity-90 transition-opacity w-full group">
                      Ver mais
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypesSection;
