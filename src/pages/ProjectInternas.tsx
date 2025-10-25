import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useState } from "react";

// Import all internal project images
import img01 from "@/assets/internas/01_.jpg";
import img01Editado from "@/assets/internas/01_EDITADO.png";
import img03Editada from "@/assets/internas/03-EDITADA_.jpg";
import img03 from "@/assets/internas/03_.jpg";
import img04 from "@/assets/internas/04.jpg";
import img05 from "@/assets/internas/05.png";
import img07 from "@/assets/internas/07_.jpg";
import img09 from "@/assets/internas/09_.jpg";
import imgConveniencia02 from "@/assets/internas/CONVENIENCIA 02_EDITADA.png";
import imgCoworking03 from "@/assets/internas/COWORKING 03_EDITADA_.jpg";
import imgExterno06 from "@/assets/internas/EXTERNO 06_EDITADO_.png";
import imgLobby01 from "@/assets/internas/LOBBY 01_editado.png";
import imgLobby03 from "@/assets/internas/LOBBY 03_editado.png";
import imgLobby04 from "@/assets/internas/LOBBY 04_EDITADO.png";
import imgLobby05 from "@/assets/internas/LOBBY 5_EDITADO.png";
import imgRestaurante04 from "@/assets/internas/RESTAURANTE 04_EDITADO.png";
import imgRestaurante06 from "@/assets/internas/RESTAURANTE 06_EDITADO.png";

const ProjectInternas = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectsInternas = [
    { image: img01 },
    { image: img01Editado },
    { image: img03Editada },
    { image: img03 },
    { image: img04 },
    { image: img05 },
    { image: img07 },
    { image: img09 },
    { image: imgConveniencia02 },
    { image: imgCoworking03 },
    { image: imgExterno06 },
    { image: imgLobby01 },
    { image: imgLobby03 },
    { image: imgLobby04 },
    { image: imgLobby05 },
    { image: imgRestaurante04 },
    { image: imgRestaurante06 },
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
              Projetos Internos
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl">
              Visualizações detalhadas de interiores com iluminação e materiais
              realistas. Cada ambiente é cuidadosamente renderizado para
              transmitir a atmosfera desejada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsInternas.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={`Projeto Interno ${index + 1}`}
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

export default ProjectInternas;
