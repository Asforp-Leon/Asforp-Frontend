import { GraduationCap, BookOpen, Award, Lock } from 'lucide-react';

export default function Academia({ onShowRegister, isLoggedIn, isPremium }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="academia" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            ASFORP ACADEMIA
          </h2>
          <p className="text-xl text-gray-300">
            Formación especializada para profesionales (Próximamente)
          </p>
        </div>

        {/* Descripción de la Academia */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <p className="text-gray-300 text-center leading-relaxed mb-6">
              <strong className="text-yellow-400">ASFORP Academia</strong> es nuestra sección premium dedicada a la 
              formación especializada de profesionales del control de acceso. Próximamente ofreceremos cursos y 
              capacitaciones para porteros y miembros de la policía nacional.
            </p>
            <p className="text-gray-300 text-center leading-relaxed">
              Esta sección está actualmente en desarrollo. Regístrate ahora para ser de los primeros en acceder 
              cuando lancemos nuestros programas de formación.
            </p>
          </div>
        </div>

        {/* Cursos futuros */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 relative">
            <div className="absolute top-4 right-4">
              <Lock className="w-6 h-6 text-yellow-400" />
            </div>
            <GraduationCap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 text-center">
              Formación para Porteros
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Cursos especializados en control de acceso, gestión de conflictos y protocolos de seguridad para porteros de discotecas y eventos.
            </p>
            <div className="mt-4 text-center">
              <span className="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded text-sm">
                Próximamente
              </span>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 relative">
            <div className="absolute top-4 right-4">
              <Lock className="w-6 h-6 text-yellow-400" />
            </div>
            <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 text-center">
              Capacitación Policial
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Programas de actualización y especialización para miembros de la policía nacional en técnicas avanzadas de control y seguridad.
            </p>
            <div className="mt-4 text-center">
              <span className="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded text-sm">
                Próximamente
              </span>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10 relative">
            <div className="absolute top-4 right-4">
              <Lock className="w-6 h-6 text-yellow-400" />
            </div>
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 text-center">
              Certificaciones
            </h3>
            <p className="text-gray-300 text-center text-sm">
              Obtén certificaciones oficiales reconocidas en el sector de control de acceso.
            </p>
            <div className="mt-4 text-center">
              <span className="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded text-sm">
                Próximamente
              </span>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-yellow-400/10 backdrop-blur-sm p-8 rounded-lg border border-yellow-400/30">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              ¿Interesado en la formación?
            </h3>
            <p className="text-gray-300 mb-6">
              Regístrate ahora y sé de los primeros en acceder a nuestros cursos cuando estén disponibles. 
              Los usuarios registrados recibirán notificaciones exclusivas sobre el lanzamiento de ASFORP Academia.
            </p>
            {!isLoggedIn ? (
              <button 
                onClick={onShowRegister}
                className="px-8 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition font-semibold text-lg"
              >
                Registrarse Ahora
              </button>
            ) : (
              <div className="space-y-4">
                <p className="text-yellow-400 font-semibold">
                  ✓ Ya estás registrado
                </p>
                <p className="text-gray-400 text-sm">
                  Te notificaremos cuando los cursos estén disponibles
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

