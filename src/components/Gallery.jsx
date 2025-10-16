import { Camera } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Galería de Trabajos
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Conoce algunos de nuestros eventos y trabajos anteriores. Profesionalidad y experiencia en cada servicio.
          </p>

          {/* Galería vacía - placeholder */}
          <div className="bg-black/30 backdrop-blur-sm p-16 rounded-lg border border-white/10">
            <Camera className="w-24 h-24 text-yellow-400/50 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              📸 Galería en construcción
            </h3>
            <p className="text-gray-400">
              Pronto agregaremos fotografías de nuestros eventos y trabajos anteriores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

