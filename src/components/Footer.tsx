
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/bc87fb68-272b-4c48-9d77-89bbd83ba51c.png" 
                alt="Vista Clinique Logo" 
                className="w-10 h-10 object-contain filter brightness-0 invert"
              />
            </div>
            <h3 className="text-2xl font-bold">Vista Clinique</h3>
          </div>
          
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Comprometidos em oferecer cuidados médicos de excelência, 
            sempre priorizando o bem-estar e a saúde dos nossos pacientes.
          </p>
          
          <div className="border-t border-blue-800 pt-6">
            <p className="text-blue-300 flex items-center justify-center">
              Feito com <Heart size={16} className="mx-2 text-red-400" /> para cuidar da sua saúde
            </p>
            <p className="text-blue-400 text-sm mt-2">
              © 2024 Vista Clinique. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
