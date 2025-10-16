export default function About() {
  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
            Acerca de ASFORP
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              En 2009 profesionales de diversos sectores unieron fuerzas para crear un servicio de calidad 
              para mejorar la oferta de nuestros clientes. Entonces fundamos ASFORP.
            </p>

            <p>
              Conocemos en profundidad nuestro sector. Las necesidades de nuestros clientes. Las ventajas 
              de poder ofrecer los mejores profesionales, con experiencia y reciclaje.
            </p>

            <p>
              Conocemos la variedad de servicios que se nos demandan y que podemos cubrir, incluso la 
              posibilidad de asesorar en mejoras y necesidades.
            </p>

            <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-6 my-8 rounded">
              <p className="text-yellow-200 italic text-lg">
                ASFORP nos dotamos de estatutos, de una Junta Directiva y de unas estrategias de comunicación 
                y de formación interna.
              </p>
              <p className="text-yellow-200 italic text-lg mt-4">
                Todos los asociados compartimos el interés principal de ofrecer el mejor servicio y conocemos el mejor método para lograrlo: profesionalidad y mejora.
              </p>
            </div>

            <p>
              Nos hemos unido para ofrecer servicios a nuestros clientes. Con la seriedad en la administración, 
              en los recursos humanos, en los seguros y en la formación.
            </p>
          </div>

          {/* Propuesta destacada */}
          <div className="mt-12 bg-yellow-400/10 border-2 border-yellow-400/50 rounded-lg p-8">
            <p className="text-yellow-200 font-semibold text-xl leading-relaxed">
              Le proponemos la posibilidad de dar solución a la preocupación de salvaguardar el bienestar de 
              su familia, su empresa y de sus propiedades, con un servicio discrecional, mediante el cuidado 
              y mantenimiento integral de la seguridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

