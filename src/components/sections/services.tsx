import Image from 'next/image';

const services = [
    {
      title: "Consulta de Medicina Interna",
      description: "Enfoque integral y personalizado, con evaluación completa, diagnóstico y plan de seguimiento.",
      image: "/servicio-consulta-internista-medellin.jpg",
      link: "/servicios/consulta-medicina-interna",
      alt: "Consulta de medicina interna en Medellín - Dr. Willmer Obregón en valoración clínica"
    },
    {
      title: "Viscosuplementación para Rodilla",
    description: "Procedimiento con ácido hialurónico para aliviar dolor y mejorar movilidad en artrosis de rodilla.",
    image: "/servicio-viscosuplementacion-rodilla-medellin.jpg",
    link: "/servicios/viscosuplementacion-para-rodilla",
    alt: "Viscosuplementación e infiltraciones para dolor de rodilla en Medellín"
  },
  {
    title: "Electrocardiograma",
    description: "Registro rápido de la actividad eléctrica del corazón para apoyo diagnóstico y control.",
    image: "/servicio-electrocardiograma-medellin.jpg",
    link: "/cardiologia/electrocardiograma",
    alt: "Electrocardiograma en Medellín - paciente con electrodos para registro cardíaco"
  },
  {
    title: "Ecocardiograma transtorácico",
    description: "Ultrasonido del corazón para evaluar estructura, función y válvulas (según indicación clínica).",
    image: "/servicio-ecocardiograma-medellin.jpg",
    link: "/cardiologia/ecocardiograma-transtoracico",
    alt: "Ecocardiograma transtorácico en Medellín - ecografía cardíaca en consultorio"
  },
  {
    title: "Holter 24 horas",
    description: "Monitoreo continuo del ritmo cardíaco durante 24 horas para detectar arritmias y correlacionar síntomas.",
    image: "/servicio-holter-medellin.jpg",
    link: "/cardiologia/holter-24-horas",
    alt: "Holter 24 horas en Medellín - colocación de dispositivo para monitoreo cardíaco"
  },
  {
    title: "MAPA 24 horas",
    description: "Monitoreo ambulatorio de presión arterial (24h) para diagnóstico y ajuste de tratamiento.",
    image: "/servicio-mapa-medellin.jpg",
    link: "/cardiologia/mapa-24-horas",
    alt: "MAPA 24 horas en Medellín - paciente con brazalete para monitoreo de presión arterial"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative bg-[#F8F9FA]">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-[1280px]">
        <div className="mb-8">
          <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2]">
            Servicios médicos
          </h2>
          <p className="mt-3 text-[1rem] leading-[1.6] text-[#64748B]">
            Descubre nuestros servicios médicos principales y accede a información detallada sobre indicaciones, preparación para cada procedimiento y respuestas a las preguntas más frecuentes, para que tomes decisiones informadas sobre tu cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <a
                href={service.link}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white/60 backdrop-blur-[12px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2"
              >
                <figure className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    loading="lazy"
                    placeholder="empty"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F8F9FA]/70 via-transparent to-transparent"
                  />
                </figure>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[1.125rem] font-semibold tracking-tight text-[#0F172A] leading-[1.4] transition-colors group-hover:text-[#1080A0]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-[1.6] text-[#64748B] line-clamp-2 md:line-clamp-none">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex text-[0.875rem] font-semibold text-[#1080A0] transition-opacity hover:opacity-80">
                      Ver detalles
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;