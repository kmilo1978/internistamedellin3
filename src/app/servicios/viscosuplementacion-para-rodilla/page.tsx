import { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Phone, MapPin, Clock, CircleCheck as CheckCircle2, ArrowRight } from 'lucide-react';
import CtaBanner from "@/components/sections/cta-banner";
import ComparisonTable from "@/components/sections/comparison-table";
import { getWhatsAppLink } from '@/lib/contact-config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MedicalDisclaimer from '@/components/ui/medical-disclaimer';

export const metadata: Metadata = {
  title: "Infiltraciones y ViscosuplementaciÓn Rodilla | MedellÍn",
  description: "Infiltraciones para dolor articular y viscosuplementaciÃ³n en MedellÃ­n. Alivia tu rodilla hoy. Agenda por WhatsApp.",
  alternates: {
    canonical: "https://internistamedellin.com/servicios/viscosuplementacion-para-rodilla",
  },
};

const faqs = [
  {
    question: "Â¿QuÃ© son las infiltraciones y viscosuplementaciÃ³n?",
    answer: "Son procedimientos mÃ­nimamente invasivos que consisten en la colocaciÃ³n de un anestÃ©sico junto con una sustancia adicional (corticoide, bioreguladores, Ã¡cido hialurÃ³nico o plasma rico en plaquetas) directamente en el punto crÃ­tico del dolor o dentro de la articulaciÃ³n. El objetivo es calmar el dolor de forma inmediata y mediata, permitiendo que el paciente inicie terapias fÃ­sicas de rehabilitaciÃ³n."
  },
  {
    question: "Â¿CuÃ¡les son los principales puntos donde se aplican infiltraciones?",
    answer: "Se pueden aplicar en tendones y articulaciones de: hombro, codo, muÃ±eca, rodilla, mÃºsculos, tobillo, talÃ³n y fascia plantar. Cada punto se selecciona segÃºn la evaluaciÃ³n clÃ­nica y los sÃ­ntomas del paciente."
  },
  {
    question: "Â¿CuÃ¡ntas sesiones se requieren?",
    answer: "Depende de la condiciÃ³n y el tipo de infiltraciÃ³n. Algunos casos requieren una sola aplicaciÃ³n, mientras que otros necesitan un ciclo de 2 a 5 inyecciones espaciadas semanalmente o cada dos semanas. Se determina en la consulta inicial."
  },
  {
    question: "Â¿CuÃ¡nto tiempo duran los efectos?",
    answer: "Generalmente, los efectos se pueden sentir inmediatamente y persisten durante varios meses (entre 3 y 12 meses segÃºn el tipo de sustancia y la condiciÃ³n). Se realiza seguimiento para evaluar necesidad de reinfiltraciÃ³n."
  },
  {
    question: "Â¿Es un procedimiento doloroso?",
    answer: "Es generalmente bien tolerado. El anestÃ©sico local minimiza molestias durante la inyecciÃ³n. Muchos pacientes refieren sensaciÃ³n de presiÃ³n mÃ¡s que dolor. El procedimiento es rÃ¡pido, durando solo algunos minutos."
  },
  {
    question: "Â¿CuÃ¡les son los beneficios de las infiltraciones?",
    answer: "Alivio inmediato y prolongado del dolor, reducciÃ³n de inflamaciÃ³n, mejora de la movilidad articular, evita o retrasa cirugÃ­a, permite iniciar rehabilitaciÃ³n fÃ­sica efectiva, y es un procedimiento ambulatorio con mÃ­nimo tiempo de recuperaciÃ³n."
  },
  {
    question: "Â¿Hay contraindicaciones?",
    answer: "Se evalÃºa en cada caso, pero generalmente se evita con infecciones activas en la zona, ciertos trastornos de coagulaciÃ³n, alergia a componentes, embarazo o lactancia. Se hace evaluaciÃ³n completa antes del procedimiento."
  },
  {
    question: "Â¿CuÃ¡l es el tiempo de recuperaciÃ³n?",
    answer: "Es mÃ­nimo. Puede retornarse a actividades normales el mismo dÃ­a, aunque se recomienda evitar actividades intensas las primeras 24-48 horas. La mayorÃ­a de pacientes mejoran progresivamente en los dÃ­as siguientes."
  }
];

const ViscosuplementacionRodillaPage = () => {
  const infiltrationSites = [
    { area: "Hombro", icon: "💪" },
    { area: "Codo", icon: "ð" },
    { area: "MuÃ±eca", icon: "ðï¸" },
    { area: "Rodilla", icon: "ð¦µ" },
    { area: "Tobillo", icon: "ð¦¶" },
    { area: "TalÃ³n", icon: "👠" },
    { area: "Fascia Plantar", icon: "🌊" },
    { area: "Tendones y MÃºsculos", icon: "💪" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://internistamedellin.com" },
      { "@type": "ListItem", "position": 2, "name": "Infiltraciones y ViscosuplementaciÃ³n", "item": "https://internistamedellin.com/servicios/viscosuplementacion-para-rodilla" }
    ]
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Infiltraciones y ViscosuplementaciÃ³n de Rodilla",
    "description": "Procedimientos mÃ­nimamente invasivos para el manejo efectivo del dolor crÃ³nico, viscosuplementaciÃ³n y dolor articular.",
    "url": "https://internistamedellin.com/servicios/viscosuplementacion-para-rodilla",
    "provider": { "@type": "MedicalBusiness", "name": "Dr. Willmer ObregÃ³n - Medicina Interna", "url": "https://internistamedellin.com" },
    "procedureType": "InfiltraciÃ³n articular",
    "bodyLocation": "Rodilla"
  };

  

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
return (
    <div className="bg-[#F8FAFC]">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} strategy="afterInteractive" />
      <Script id="procedure-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }} strategy="afterInteractive" />
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Servicios</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Infiltraciones y ViscosuplementaciÃ³n de Rodilla en MedellÃ­n
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Realizamos procedimientos mÃ­nimamente invasivos para el tratamiento del dolor articular de rodilla, incluyendo infiltraciones terapÃ©uticas y viscosuplementaciÃ³n, orientados a mejorar la funciÃ³n y calidad de vida del paciente.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="relative mb-12 h-[300px] overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm md:h-[450px]">
          <Image
            src="/vizcosuplementacion-rodillas.jpg"
            alt="Infiltraciones mÃ©dicas y viscosuplementaciÃ³n para dolor articular de rodilla en MedellÃ­n"
            fill
            className="object-cover object-center"
            sizes="100vw"
            loading="lazy"
          />
        </figure>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main Article */}
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Â¿QuÃ© son las infiltraciones mÃ©dicas?
            </h2>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                Las infiltraciones son inyecciones especiales que alivian el dolor articular. El doctor inyecta un anestÃ©sico (medicamento que duerme la zona) junto con una sustancia curativa directamente donde duele.
              </p>
              <p>
                Ofrecemos 4 tipos de sustancias terapÃ©uticas:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Corticoides:</strong> Medicinas antiinflamatorias para alivio rÃ¡pido</li>
                <li><strong>Bioreguladores:</strong> Sustancias que estimulan la reparaciÃ³n natural de tu articulaciÃ³n</li>
                <li><strong>Ãcido hialurÃ³nico:</strong> Sustancia que lubrica la articulaciÃ³n como si fuera "aceite para una puerta"</li>
                <li><strong>PRP (Plasma Rico en Plaquetas):</strong> Terapia con cÃ©lulas de tu propia sangre que promueven curaciÃ³n</li>
              </ul>
              <p>
                El procedimiento dura 5-10 minutos. Se realiza en el consultorio, es seguro y muchos pacientes sienten alivio el mismo dÃ­a. DespuÃ©s puedes volver a casa y continuar con ejercicios de fortalecimiento.
              </p>
            </div>

            {/* Infiltration Sites */}
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Zonas donde realizamos infiltraciones</h3>
            <div className="grid gap-2 sm:grid-cols-2 mb-10">
              {infiltrationSites.map((site, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-lg bg-[#E7F5F9]/30 p-3 border border-[#1080A0]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#1080A0] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#0F172A]">{site.area}</span>
                </div>
              ))}
            </div>

            {/* Treatment Types */}
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Tipos de infiltraciones disponibles</h3>
            <p className="text-[#475569] mb-6">
              Ofrecemos diferentes tipos de infiltraciones segÃºn su condiciÃ³n y necesidades especÃ­ficas. Conoce mÃ¡s sobre cada tratamiento:
            </p>
            <div className="grid gap-4 mb-10">
              <Link
                href="/servicios/viscosuplementacion-para-rodilla/infiltraciones-corticoides"
                className="group flex items-center justify-between p-4 rounded-xl border-2 border-[#E2E8F0] bg-white hover:border-[#1080A0] hover:bg-[#E7F5F9]/30 transition-all"
              >
                <div>
                  <h4 className="font-semibold text-[#0F172A] group-hover:text-[#1080A0] transition-colors">
                    Infiltraciones con Corticoides
                  </h4>
                  <p className="text-sm text-[#64748B] mt-1">
                    Antiinflamatorios potentes para alivio rÃ¡pido del dolor
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1080A0] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="/servicios/viscosuplementacion-para-rodilla/infiltraciones-bioreguladores"
                className="group flex items-center justify-between p-4 rounded-xl border-2 border-[#E2E8F0] bg-white hover:border-[#1080A0] hover:bg-[#E7F5F9]/30 transition-all"
              >
                <div>
                  <h4 className="font-semibold text-[#0F172A] group-hover:text-[#1080A0] transition-colors">
                    Infiltraciones con Bioreguladores
                  </h4>
                  <p className="text-sm text-[#64748B] mt-1">
                    EstimulaciÃ³n natural del proceso de reparaciÃ³n
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1080A0] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="/servicios/viscosuplementacion-para-rodilla/acido-hialuronico"
                className="group flex items-center justify-between p-4 rounded-xl border-2 border-[#E2E8F0] bg-white hover:border-[#1080A0] hover:bg-[#E7F5F9]/30 transition-all"
              >
                <div>
                  <h4 className="font-semibold text-[#0F172A] group-hover:text-[#1080A0] transition-colors">
                    ViscosuplementaciÃ³n con Ãcido HialurÃ³nico
                  </h4>
                  <p className="text-sm text-[#64748B] mt-1">
                    LubricaciÃ³n articular para mejorar movilidad
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1080A0] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="/servicios/viscosuplementacion-para-rodilla/prp-lisado-plaquetas"
                className="group flex items-center justify-between p-4 rounded-xl border-2 border-[#E2E8F0] bg-white hover:border-[#1080A0] hover:bg-[#E7F5F9]/30 transition-all"
              >
                <div>
                  <h4 className="font-semibold text-[#0F172A] group-hover:text-[#1080A0] transition-colors">
                    PRP y Lisado de Plaquetas
                  </h4>
                  <p className="text-sm text-[#64748B] mt-1">
                    Medicina regenerativa con factores de crecimiento
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1080A0] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Â¿CÃ³mo funciona el procedimiento?</h3>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed text-left">
              <p>
                El procedimiento se realiza en consultorio de forma ambulatoria. Se limpia y desinfecta la piel en la zona a tratar, y luego se inyecta la sustancia terapÃ©utica directamente en el punto de dolor o dentro de la articulaciÃ³n con una aguja fina y precisa.
              </p>
              <p>
                El procedimiento es rÃ¡pido (suele durar solo algunos minutos) y utiliza anestÃ©sico local para minimizar molestias. La sustancia actÃºa como lubricante, antiinflamatorio o regenerador segÃºn el caso, reduciendo el dolor y mejorando la funciÃ³n articular.
              </p>
            </div>

            {/* Comparison Table */}
            <ComparisonTable title="Comparativa de Tratamientos: Costo vs Beneficio" />

            {/* FAQs */}
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Preguntas frecuentes sobre infiltraciones e inyecciones articulares</h3>
            <div className="mb-10">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-2 border-[#E2E8F0]">
                    <AccordionTrigger className="text-left font-medium text-[#1E293B] hover:text-[#1080A0] hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#475569] leading-relaxed pb-6 text-left">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">ConclusiÃ³n</h3>
            <p className="text-[#475569] leading-relaxed text-left">
              La viscosuplementaciÃ³n para rodillas es una alternativa efectiva y segura para aliviar sÃ­ntomas de artrosis de rodilla en pacientes seleccionados. Agenda una valoraciÃ³n para determinar si este tratamiento es adecuado para ti.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 h-fit">
            <section className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 shadow-sm">
              <h4 className="text-xl font-bold text-[#0F172A] mb-6">ContÃ¡ctanos</h4>
              <div className="space-y-3 mb-8">
                <a
                  href={getWhatsAppLink(1)}
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-[#187495] via-[#11A9D0] to-[#187495] py-4 px-6 text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity"
                >
                  <MessageSquare className="h-5 w-5" />
                  Agendar por WhatsApp
                </a>
                <a
                  href="tel:+573009895852"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#E7F5F9] py-4 px-6 text-sm font-bold text-[#0F172A] hover:bg-[#D9EDF3] transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Llamar por telÃ©fono
                </a>
              </div>

              {/* Location Card */}
              <div className="rounded-2xl border-2 border-[#E2E8F0] bg-[#F8FAFC]/60 p-6 mb-6">
                <p className="font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#1080A0]" />
                  UbicaciÃ³n
                </p>
                <a
                  href="https://maps.app.goo.gl/ATcuaGZM9YdvY7kFA"
                  className="text-sm text-[#475569] leading-relaxed hover:text-[#1080A0] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Biencrecer Cra 81 #27-17 Consultorio 1, BelÃ©n La Palma, MedellÃ­n, Antioquia
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex gap-3 text-sm text-[#475569]">
                <Clock className="h-5 w-5 flex-shrink-0 text-[#1080A0]" />
                <div className="space-y-1">
                  <p>Lunes a viernes: 8am a 5pm</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>

      {/* CTA Banner Section */}
      <CtaBanner />
    </div>
  );
};

export default ViscosuplementacionRodillaPage;
