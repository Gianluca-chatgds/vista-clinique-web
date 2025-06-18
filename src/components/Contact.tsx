
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/vistaclinique/', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">Entre em Contato</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Agende sua consulta oftalmológica. Estamos prontos para cuidar da sua visão.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg mb-8">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">Nossa Localização</h4>
              <p className="text-blue-600 font-medium text-lg">
                Av. Presidente Epitácio Pessoa, 2930, Loja 05<br />
                Tambauzinho, João Pessoa - PB<br />
                CEP 58042-006
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 mb-6"
              onClick={handleInstagramClick}
            >
              <Instagram className="mr-2" size={20} />
              @vistaclinique
            </Button>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <FileText size={18} />
              <span>CNPJ: 53.169.299/0001-79</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
