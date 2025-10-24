import { Shield, Users, Award } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
            ASFORP
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-8">
            Servicios de control de acceso
          </h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Tu seguridad nos hace más seguros en nuestro entorno. ASFORP actúa como intermediario especializado 
            en contactos de personal para control de acceso en porterías de discotecas, eventos y manifestaciones privadas. 
            Una página web sin ánimo de lucro que conecta profesionales del control de acceso con quienes necesitan sus servicios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="px-8 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition font-semibold text-lg"
            >
              Conocer Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition font-semibold text-lg"
            >
              Contactar Ahora
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <button onClick={() => scrollToSection('servicios')} className="text-left w-full bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-yellow-400/50 transition-all hover:transform hover:scale-[1.02]">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Seguridad Integral</h3>
              <p className="text-gray-400">Protección completa para su familia y empresa</p>
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-left w-full bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-yellow-400/50 transition-all hover:transform hover:scale-[1.02]">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Personal Especializado</h3>
              <p className="text-gray-400">Profesionales con formación específica ampliada</p>
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-left w-full bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-yellow-400/50 transition-all hover:transform hover:scale-[1.02]">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Calidad Garantizada</h3>
              <p className="text-gray-400">Compromiso con la excelencia y profesionalidad</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

