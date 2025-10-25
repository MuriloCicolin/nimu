import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Pannellum } from "pannellum-react";
import { useState } from "react";

// Import all panorama images
import panoramica1 from "@/assets/3d/PANORAMICA_editado (1).png";
import panoramica2 from "@/assets/3d/PANORAMA2_editado.png";
import panoramicaSala from "@/assets/3d/P_360º_SALA_.jpg";
import panoramicaCozinha from "@/assets/3d/P_360º_COZ_.jpg";
import panoramicaQuarto from "@/assets/3d/P_360º_QUARTO_.jpg";
import panoramicaEntrada from "@/assets/3d/ENTRADA.jpg";
import panoramica360_2 from "@/assets/3d/360_2.jpg";

const Project360 = () => {
  const [selectedPanorama, setSelectedPanorama] = useState<string | null>(null);

  const panoramas = [
    {
      id: 1,
      image: panoramica1,
      title: "Vista Panorâmica Principal",
      description: "Vista panorâmica do ambiente principal",
    },
    {
      id: 2,
      image: panoramica2,
      title: "Vista Panorâmica 2",
      description: "Vista panorâmica do segundo ambiente",
    },
    {
      id: 3,
      image: panoramicaSala,
      title: "Sala",
      description: "Vista panorâmica 360° da sala",
    },
    {
      id: 4,
      image: panoramicaCozinha,
      title: "Cozinha",
      description: "Vista panorâmica 360° da cozinha",
    },
    {
      id: 5,
      image: panoramicaQuarto,
      title: "Quarto",
      description: "Vista panorâmica 360° do quarto",
    },
    {
      id: 6,
      image: panoramicaEntrada,
      title: "Entrada",
      description: "Vista panorâmica da entrada",
    },
    {
      id: 7,
      image: panoramica360_2,
      title: "Vista Adicional",
      description: "Vista panorâmica adicional",
    },
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
              Tour Virtual 360°
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mb-8">
              Explore nosso ambiente em uma visualização 360° imersiva. Use o
              mouse ou toque para navegar pelo espaço.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {panoramas.map((panorama) => (
              <Card
                key={panorama.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer"
                onClick={() => setSelectedPanorama(panorama.image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={panorama.image}
                      alt={panorama.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white text-lg font-semibold">
                        Ver em 360°
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog
            open={!!selectedPanorama}
            onOpenChange={() => setSelectedPanorama(null)}
          >
            <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-0 shadow-none">
              <div className="relative bg-black/80 rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-50 bg-black/20 hover:bg-black/40 text-white rounded-full"
                  onClick={() => setSelectedPanorama(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
                {selectedPanorama && (
                  <div className="w-full aspect-[16/9]">
                    <Pannellum
                      width="100%"
                      height="100%"
                      image={selectedPanorama}
                      pitch={0}
                      yaw={180}
                      hfov={120}
                      autoLoad
                      autoRotate={-2}
                      compass={true}
                      showZoomCtrl={true}
                      showFullscreenCtrl={true}
                      minHfov={50}
                      maxHfov={150}
                      onLoad={() => {
                        console.log("panorama loaded");
                      }}
                    />
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Instruções de Navegação:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Arraste o mouse ou deslize o dedo para olhar ao redor</li>
              <li>Use a roda do mouse ou o gesto de pinça para dar zoom</li>
              <li>
                Clique no ícone de tela cheia para uma experiência imersiva
              </li>
              <li>Use a bússola no canto superior para orientação</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project360;
