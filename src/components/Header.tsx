
import { Phone, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-blue-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">VC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Vista Clinique</h1>
              <p className="text-sm text-blue-600">Cuidado médico especializado</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-blue-700">
              <Phone size={18} />
              <span className="font-medium">(11) 3456-7890</span>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="p-2">
                <Instagram size={18} />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Youtube size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
