import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useState } from "react";

// Import all external project images
import img00E from "@/assets/externas/00_E.png";
import img13E from "@/assets/externas/13_E.png";
import img16 from "@/assets/externas/16.png";
import img31E from "@/assets/externas/31_E.png";
import imgEx08 from "@/assets/externas/EX-08.jpg";
import imgExt04 from "@/assets/externas/EXTERNO 04_EDITADA_.png";
import imgExt05 from "@/assets/externas/EXTERNO 05_EDITADO_.png";
import imgExt07 from "@/assets/externas/EXTERNO 07_EDITADO_.png";
import imgExt08 from "@/assets/externas/EXTERNO 08_EDITADO_.png";
import imgExt11 from "@/assets/externas/EXTERNO 11_editadaa_.png";
import imgExt12 from "@/assets/externas/EXTERNO 12_editada.png";

const ProjectExternas = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectsExternas = [
    { image: img00E },
    { image: img13E },
    { image: img16 },
    { image: img31E },
    { image: imgEx08 },
    { image: imgExt04 },
    { image: imgExt05 },
    { image: imgExt07 },
    { image: imgExt08 },
    { image: imgExt11 },
    { image: imgExt12 },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link to="/projetos">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar aos projetos
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4 text-gradient">
              Projetos Externos
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl">
              Renderizações fotorrealistas de fachadas, paisagismo e ambientes
              externos. Apresentamos seu projeto com a máxima qualidade visual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsExternas.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={`Projeto Externo ${index + 1}`}
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

export default ProjectExternas;
