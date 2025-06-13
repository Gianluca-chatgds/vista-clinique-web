
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Award, Heart } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Daniel Guedes",
      specialty: "Oftalmologista",
      description: "Dedicado a oferecer tratamentos modernos e personalizados para preservar e melhorar sua visão.",
      icon: Eye,
      color: "from-blue-500 to-blue-600",
      photo: "/lovable-uploads/650ee987-2dbf-4751-a876-bae3cf1c9c86.png"
    },
    {
      name: "Dra. Telma Guedes",
      specialty: "Oftalmologista",
      description: "Comprometida com o diagnóstico precoce e tratamento avançado das doenças oculares.",
      icon: Eye,
      color: "from-purple-500 to-purple-600",
      photo: "/lovable-uploads/212e0ff0-1bb4-4ddb-95c1-9649582a28d5.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Nossos Oftalmologistas</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossa equipe de oftalmologistas altamente qualificados, especialistas em cuidados 
            oftalmológicos completos para toda a família.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={doctor.photo} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900 mb-2">{doctor.name}</h4>
                  <p className="text-blue-600 font-semibold mb-4">{doctor.specialty}</p>
                  <p className="text-gray-600 leading-relaxed">{doctor.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
