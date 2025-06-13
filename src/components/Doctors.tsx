
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Heart } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Daniel Guedes",
      specialty: "Clínico Geral",
      description: "Especialista em medicina preventiva e cuidados primários, com ampla experiência em diagnósticos e tratamentos clínicos.",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Dra. Telma Machado",
      specialty: "Medicina Interna",
      description: "Dedicada ao cuidado integral do paciente, especializada em medicina interna e acompanhamento de doenças crônicas.",
      icon: Heart,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Nossos Especialistas</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossa equipe médica altamente qualificada, comprometida em oferecer 
            o melhor atendimento para você e sua família.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${doctor.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <doctor.icon size={32} className="text-white" />
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
