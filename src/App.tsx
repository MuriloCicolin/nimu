import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Project360 from "./pages/Project360";
import ProjectExternas from "./pages/ProjectExternas";
import ProjectInternas from "./pages/ProjectInternas";
import ProjectPlantaHumanizada from "./pages/ProjectPlantaHumanizada";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projetos/360" element={<Project360 />} />
          <Route path="/projetos/externas" element={<ProjectExternas />} />
          <Route path="/projetos/internas" element={<ProjectInternas />} />
          <Route path="/projetos/planta-humanizada" element={<ProjectPlantaHumanizada />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
