import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useState } from "react";

// Import all planta images
import imgAp32_1 from "@/assets/planta/1- ap 32(1).jpg";
import imgAp32_2 from "@/assets/planta/1- ap 32.jpg";
import imgAp32 from "@/assets/planta/AP 32.png";
import imgAp60 from "@/assets/planta/AP 60.png";
import imgTerreo from "@/assets/planta/térreo_PAV.png";

const ProjectPlantaHumanizada = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectsPlanta = [
    { image: imgAp32_1 },
    { image: imgAp32_2 },
    { image: imgAp32 },
    { image: imgAp60 },
    { image: imgTerreo },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao início
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4 text-gradient">
              Plantas Humanizadas
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl">
              Plantas baixas com elementos humanos e mobiliário para melhor
              compreensão dos espaços. Facilitamos a visualização da
              distribuição e fluxo dos ambientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsPlanta.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={`Planta Humanizada ${index + 1}`}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog
            open={!!selectedImage}
            onOpenChange={() => setSelectedImage(null)}
          >
            <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-0 shadow-none">
              <div className="relative bg-black/80 rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-50 bg-black/20 hover:bg-black/40 text-white rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Projeto Ampliado"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default ProjectPlantaHumanizada;
