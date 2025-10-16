import { Shield, Eye, Users, Banknote, Package, Calendar, UserCheck, Image, AlertTriangle, Wrench } from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      title: "Seguridad, control y acompañamiento",
      description: "Le proponemos la posibilidad de dar solución a la preocupación de salvaguardar el bienestar de su familia, su empresa y de sus propiedades, con un servicio discrecional, mediante el cuidado y mantenimiento integral de la seguridad."
    },
    {
      icon: <Eye className="w-12 h-12 text-yellow-400" />,
      title: "Supervisión de negocios",
      description: "Controlamos el negocio de manera pautada con el propósito de descubrir en el menor tiempo posible de los problemas o alarmas."
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-400" />,
      title: "Control de personal",
      description: "El personal es fundamental en una empresa y un miembro conflictivo, avaricioso o sin escrúpulos supone un problema para todos. Contamos con personal experto, que puede controlar el correcto funcionamiento y descubrir el origen del mal, logrando la expulsión de la empresa si es preciso."
    },
    {
      icon: <Banknote className="w-12 h-12 text-yellow-400" />,
      title: "Caja",
      description: "Referencia clave son las ganancias diarias y en especial aquellas que son elevadas y tiene que ser transportadas a la entidad financiera. Le acompañamos y cuidamos de que el traslado se complete con total éxito."
    },
    {
      icon: <Package className="w-12 h-12 text-yellow-400" />,
      title: "Traslado de bienes valiosos",
      description: "Tienen que trasladar sus pertenencias más valiosas, llevar mercancía de valor, distribuir productos valiosos. Nosotros le ayudamos."
    }
  ];

  const solutions = [
    {
      icon: <Calendar className="w-8 h-8 text-yellow-400" />,
      title: "Organización de eventos",
      description: "Incluye el diseño, planificación y producción de conciertos, veladas, fiestas, torneos, u otro tipo de reuniones con diferentes y particulares finalidades."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-yellow-400" />,
      title: "Recursos Humanos",
      description: "La guía y supervisión del personal desde la necesidad de contratarlo (reclutamiento y selección) a tu formación y capacitación (coaching) para alinear a los profesionales durante la permanencia en la empresa."
    },
    {
      icon: <Image className="w-8 h-8 text-yellow-400" />,
      title: "Chicas de imagen",
      description: "Protocolo, glamour, etiqueta, buenos modales y lo último en tendencias."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
      title: "Planes de emergencia",
      description: "Diseño de planes de emergencia y medios para evitar que ocurran desgracias. Evaluación del riesgo, medios de protección, elaboración de planes de emergencia, divulgación, realización, formación y revisión."
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
      title: "Equipamiento",
      description: "Disponemos de todo tipo de ropas, protecciones, material de trabajo para la realización de nuestros servicios."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-black/25">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">
          ASFORP SERVICIOS
        </h2>
        <p className="text-gray-300 text-center mb-12 text-lg">
          Seguridad, control y acompañamiento
        </p>

        {/* Servicios principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-yellow-400/50 transition-all hover:transform hover:scale-105"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Sus soluciones */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4 text-center">
            Sus soluciones
          </h3>
          <p className="text-gray-400 text-center mb-12">
            Organización de eventos, chicas de imagen, planes de emergencia, equipamiento.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-yellow-400/30 transition-all"
              >
                <div className="mb-3">{solution.icon}</div>
                <h4 className="text-lg font-bold text-yellow-400 mb-2">{solution.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sobre ASFORP */}
        <div className="mt-20 max-w-4xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">Sobre ASFORP</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong className="text-yellow-400">ASFORP es una plataforma sin ánimo de lucro</strong> que actúa 
              como intermediario especializado conectando profesionales de control de acceso con clientes que 
              necesitan sus servicios.
            </p>
            <p>
              <strong className="text-yellow-400">No cobramos comisiones</strong> por nuestros servicios de 
              intermediación. Nuestro objetivo es ganar reconocimiento y fama en el sector para, en un futuro, 
              poder ofrecer servicios de formación premium y, solo cuando sea necesario por alta demanda, 
              contratar personal propio para mayor agilidad.
            </p>
            <p>
              <strong className="text-yellow-400">Nuestra misión</strong> es facilitar el contacto entre 
              profesionales cualificados del control de acceso y quienes necesitan estos servicios especializados 
              en León y alrededores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

