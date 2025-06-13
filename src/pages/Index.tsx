
import { Phone, Instagram, Youtube, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Doctors from "@/components/Doctors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Hero />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
