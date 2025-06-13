
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Instagram, Youtube, MapPin, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/vistaclinique/', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Entre em Contato</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Agende sua consulta oftalmológica. Estamos prontos para cuidar da sua visão.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">Telefone</h4>
              <p className="text-gray-600 mb-4">Ligue para agendar sua consulta</p>
              <p className="text-lg font-semibold text-blue-600">(11) 3456-7890</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">Localização</h4>
              <p className="text-gray-600 mb-4">Venha nos visitar</p>
              <p className="text-blue-600 font-medium">
                Av. Presidente Epitácio Pessoa, 2930, Loja 05<br />
                Tambauzinho, João Pessoa - PB<br />
                CEP 58042-006
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg md:col-span-2 lg:col-span-1">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">Horário</h4>
              <p className="text-gray-600 mb-4">Funcionamento</p>
              <div className="space-y-2 text-blue-600">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p className="text-gray-500">Domingo: Fechado</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50" onClick={handleInstagramClick}>
              <Instagram className="mr-2" size={20} />
              @vistaclinique
            </Button>
            
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <FileText size={18} />
            <span>CNPJ: 53.169.299/0001-79</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
