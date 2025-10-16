import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se implementaría el envío del formulario
    alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Solicitar Información
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded text-white focus:border-yellow-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Servicio de interés</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded text-white focus:border-yellow-400 focus:outline-none"
                >
                  <option value="">Seleccionar servicio</option>
                  <option value="discotecas">Control en discotecas</option>
                  <option value="eventos">Control en eventos</option>
                  <option value="manifestaciones">Control en manifestaciones</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-black/50 border border-white/20 rounded text-white focus:border-yellow-400 focus:outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition font-semibold"
              >
                Enviar Consulta
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                  <p className="text-gray-300">asforp.llion@gmail.com</p>
                  <p className="text-gray-400 text-sm mt-1">Respuesta en 24 horas</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Ubicación</h4>
                  <p className="text-gray-300">León, España</p>
                  <p className="text-gray-400 text-sm mt-1">Servicios en León y provincia</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Disponibilidad</h4>
                  <p className="text-gray-300">Consultas por email</p>
                  <p className="text-gray-400 text-sm mt-1">Servicios de seguridad 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400/10 backdrop-blur-sm p-6 rounded-lg border border-yellow-400/30">
              <h4 className="text-xl font-semibold text-yellow-400 mb-3">Sobre ASFORP</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-2">
                <strong className="text-white">Plataforma sin ánimo de lucro</strong> especializada en conectar 
                profesionales de control de acceso con clientes en León.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-2">
                <strong className="text-white">Sin comisiones:</strong> Actuamos como intermediario gratuito 
                para facilitar el contacto entre profesionales y clientes.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Servicios especializados:</strong> Control de acceso en discotecas, 
                eventos y manifestaciones privadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

