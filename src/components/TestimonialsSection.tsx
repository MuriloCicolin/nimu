
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Paulo Mendes",
      position: "Arquiteto",
      company: "Mendes Arquitetura",
      content:
        "A equipe da NIMU conseguiu capturar perfeitamente a essência do nosso projeto. As renderizações fotorrealistas ajudaram nossos clientes a visualizar o resultado final com precisão impressionante.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Carla Oliveira",
      position: "Diretora de Marketing",
      company: "Golden Incorporadora",
      content:
        "Os renders produzidos pela NIMU foram fundamentais para a comercialização do nosso empreendimento. A qualidade das imagens e a atenção aos detalhes superaram nossas expectativas.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Roberto Andrade",
      position: "CEO",
      company: "Andrade Construtora",
      content:
        "Trabalhamos com a NIMU em vários projetos e sempre ficamos impressionados com a qualidade e rapidez do serviço. As visualizações 3D nos ajudaram a vender unidades antes mesmo do início das construções.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-gray-700">
            A satisfação dos nossos clientes é o melhor testemunho da qualidade do nosso trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <svg className="h-12 w-12 text-nimu-teal opacity-20 mb-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
