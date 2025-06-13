
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Cuidando da sua
            <span className="text-blue-600 block">Visão com Excelência</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Na Vista Clinique, oferecemos atendimento oftalmológico especializado com 
            dois profissionais dedicados ao cuidado completo da sua visão. 
            Tecnologia avançada e atendimento humanizado em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Calendar className="mr-2" size={20} />
              Agendar Consulta
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              <Phone className="mr-2" size={20} />
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
