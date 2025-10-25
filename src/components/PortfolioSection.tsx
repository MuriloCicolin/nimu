import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

// Import portfolio images
import img04 from "@/assets/nossoporf/04.jpg";
import imgAp32Jpg from "@/assets/nossoporf/1- ap 32.jpg";
import imgAp32Png from "@/assets/nossoporf/AP 32.png";
import imgCoworking from "@/assets/nossoporf/COWORKING 03_EDITADA_.jpg";
import imgExterno07 from "@/assets/nossoporf/EXTERNO 07_EDITADO_.png";
import imgExterno08 from "@/assets/nossoporf/EXTERNO 08_EDITADO_.png";
import imgLobby from "@/assets/nossoporf/LOBBY 01_editado.png";
import imgRestaurante from "@/assets/nossoporf/RESTAURANTE 04_EDITADO.png";
import imgTerreo from "@/assets/nossoporf/térreo_PAV.png";

// Import additional exterior images
import imgExt00E from "@/assets/externas/00_E.png";
import imgExt13E from "@/assets/externas/13_E.png";
import imgExt16 from "@/assets/externas/16.png";
import imgExt31E from "@/assets/externas/31_E.png";
import imgExtEx08 from "@/assets/externas/EX-08.jpg";
import imgExt04 from "@/assets/externas/EXTERNO 04_EDITADA_.png";
import imgExt05 from "@/assets/externas/EXTERNO 05_EDITADO_.png";
import imgExt11 from "@/assets/externas/EXTERNO 11_editadaa_.png";
import imgExt12 from "@/assets/externas/EXTERNO 12_editada.png";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("todos");

  const mainProjects = [
    {
      id: 1,
      title: "Área de Coworking",
      category: "interiores",
      image: imgCoworking,
      description: "Espaço colaborativo com design moderno",
    },
    {
      id: 2,
      title: "Fachada Externa",
      category: "exteriores",
      image: imgExterno07,
      description: "Vista externa do edifício",
    },
    {
      id: 3,
      title: "Fachada Principal",
      category: "exteriores",
      image: imgExterno08,
      description: "Perspectiva da fachada principal",
    },
    {
      id: 4,
      title: "Lobby Principal",
      category: "interiores",
      image: imgLobby,
      description: "Área de recepção e lobby",
    },
    {
      id: 5,
      title: "Restaurante",
      category: "interiores",
      image: imgRestaurante,
      description: "Área do restaurante com design contemporâneo",
    },
    {
      id: 6,
      title: "Apartamento 32",
      category: "implantacao",
      image: imgAp32Png,
      description: "Planta do apartamento tipo 32",
    },
    {
      id: 7,
      title: "Área Interna",
      category: "interiores",
      image: img04,
      description: "Vista interna do ambiente",
    },
    {
      id: 8,
      title: "Planta Baixa",
      category: "implantacao",
      image: imgTerreo,
      description: "Vista do pavimento térreo",
    },
    {
      id: 9,
      title: "Planta Apartamento 32",
      category: "implantacao",
      image: imgAp32Jpg,
      description: "Planta humanizada do apartamento tipo 32",
    },
  ];

  const additionalExteriors = [
    {
      id: 10,
      title: "Fachada Residencial",
      category: "exteriores",
      image: imgExt00E,
      description: "Vista externa de residência moderna",
    },
    {
      id: 11,
      title: "Edifício Comercial",
      category: "exteriores",
      image: imgExt13E,
      description: "Renderização de edifício comercial",
    },
    {
      id: 12,
      title: "Complexo Arquitetônico",
      category: "exteriores",
      image: imgExt16,
      description: "Vista panorâmica do complexo",
    },
    {
      id: 13,
      title: "Projeto Residencial Premium",
      category: "exteriores",
      image: imgExt31E,
      description: "Fachada de residência de alto padrão",
    },
    {
      id: 14,
      title: "Edifício Contemporâneo",
      category: "exteriores",
      image: imgExtEx08,
      description: "Design contemporâneo com elementos modernos",
    },
    {
      id: 15,
      title: "Entrada Principal",
      category: "exteriores",
      image: imgExt04,
      description: "Vista da entrada principal do empreendimento",
    },
    {
      id: 16,
      title: "Área Externa com Jardim",
      category: "exteriores",
      image: imgExt05,
      description: "Integração de paisagismo com arquitetura",
    },
    {
      id: 17,
      title: "Fachada Noturna",
      category: "exteriores",
      image: imgExt11,
      description: "Vista externa com iluminação noturna",
    },
    {
      id: 18,
      title: "Vista Lateral do Edifício",
      category: "exteriores",
      image: imgExt12,
      description: "Perspectiva lateral com detalhes arquitetônicos",
    },
  ];

  const allProjects =
    activeTab === "exteriores"
      ? [...mainProjects, ...additionalExteriors]
      : mainProjects;

  const filteredProjects =
    activeTab === "todos"
      ? mainProjects
      : allProjects.filter((project) => project.category === activeTab);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-gray-700">
            Conheça alguns dos nossos principais projetos e visualize a
            qualidade do nosso trabalho.
          </p>
        </div>

        <Tabs
          defaultValue="todos"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-8"
        >
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="exteriores">Exteriores</TabsTrigger>
              <TabsTrigger value="interiores">Interiores</TabsTrigger>
              <TabsTrigger value="implantacao">Planta</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="todos" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exteriores" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interiores" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="implantacao" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Link to="/projetos">
            <Button className="bg-gradient-nimu hover:opacity-90 transition-opacity">
              Ver Mais Projetos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-sm bg-white transition-all hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default PortfolioSection;
