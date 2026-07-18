import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import CtaBanner from "@/components/sections/cta-banner";
import ServiceBenefits from "@/components/sections/service-benefits";
import { getWhatsAppLink } from '@/lib/contact-config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MedicalDisclaimer from '@/components/ui/medical-disclaimer';
import RelatedServices from '@/components/ui/related-services';

export const metadata: Metadata = {
  title: "Electrocardiograma en Medellín | Dr. Willmer Obregón",
  description: "Electrocardiograma en Medellín con resultados inmediatos. Evalúa la actividad eléctrica del corazón de forma rápida y precisa con el Dr. Willmer Obregón. Agenda por WhatsApp.",
  alternates: {
    canonical: "https://internistamedellin.com/cardiologia/electrocardiograma",
  },
};

const faqs = [
  {
    question: "¿Qué es un Electrocardiograma y para qué se utiliza?",
    answer: "Es una prueba indolora y no invasiva que registra la actividad eléctrica de su corazón a través de pequeños electrodos adheridos a la piel. Se utiliza para detectar problemas cardíacos como arritmias, ataques cardíacos previos o actuales, y anomalías en la estructura del corazón."
  },
  {
    question: "¿Cuánto tiempo dura la realización de un Electrocardiograma?",
    answer: "El procedimiento es muy rápido, generalmente toma entre 5 y 10 minutos. El registro real de la actividad eléctrica solo dura unos segundos, pero se requiere tiempo para colocar y retirar los electrodos."
  },
  {
    question: "¿Es necesario prepararse antes de realizar un Electrocardiograma?",
    answer: "No se requiere una preparación especial. Se recomienda evitar el uso de cremas o lociones en el pecho el día del examen para asegurar que los electrodos se adhieran correctamente. Debe informar al médico sobre cualquier medicamento que esté tomando."
  },
  {
    question: "¿Qué información proporciona un Electrocardiograma?",
    answer: "Proporciona información sobre la frecuencia cardíaca, el ritmo cardíaco, y puede mostrar signos de daño al corazón, falta de flujo sanguíneo (isquemia) o aumento del tamaño de las cavidades cardíacas."
  },
  {
    question: "¿Es necesario realizarse un Electrocardiograma de manera regular?",
    answer: "Depende de su edad, síntomas y factores de riesgo. En pacientes con antecedentes de enfermedad cardíaca o síntomas como dolor de pecho o palpitaciones, se recomienda de forma regular. Su médico determinará la frecuencia ideal según su caso."
  },
  {
    question: "¿Qué diferencia hay entre un Electrocardiograma y un Holter de ECG?",
    answer: "Un electrocardiograma estándar es una 'fotografía' rápida de la actividad eléctrica en un momento específico. Un Holter es un dispositivo portátil que registra la actividad eléctrica de forma continua durante 24 o 48 horas, permitiendo captar arritmias que ocurren esporádicamente durante el día."
  }
];

const ElectrocardiogramaPage = () => {
  const benefits = [
    "Procedimiento rápido e indoloro",
    "Resultados inmediatos y claros",
    "No invasivo y seguro",
    "Detecta arritmias y anormalidades",
    "Evaluación de salud cardíaca",
    "Registros para seguimiento médico"
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://internistamedellin.com" },
      { "@type": "ListItem", "position": 2, "name": "Electrocardiograma", "item": "https://internistamedellin.com/cardiologia/electrocardiograma" }
    ]
  };

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Electrocardiograma",
    "description": "Prueba rápida y no invasiva para evaluar la actividad eléctrica del corazón.",
    "url": "https://internistamedellin.com/cardiologia/electrocardiograma",
    "provider": { "@type": "MedicalBusiness", "name": "Dr. Willmer Obregón - Medicina Interna", "url": "https://internistamedellin.com" },
    "procedureType": "Diagnóstico cardiovascular",
    "bodyLocation": "Corazón",
    "preparation": "No requiere preparación especial"
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
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Cardiología</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Electrocardiograma en Medellín — Dr. Willmer Obregón
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Realizamos electrocardiogramas (ECG) para analizar la actividad eléctrica del corazón y detectar alteraciones como arritmias, bloqueos o signos de enfermedad cardiovascular, de manera precisa y no invasiva.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="relative mb-12 h-[300px] overflow-hidden rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 shadow-sm md:h-[450px]">
          <Image
            src="/electrocardiogra home.jpg"
            alt="Electrocardiograma en Medellín - electrodos colocados en pecho de paciente para registro cardíaco"
            fill
            className="object-cover object-center"
            sizes="100vw"
            loading="lazy"
          />
        </figure>

        {/* Benefits Section */}
        <ServiceBenefits benefits={benefits} />

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main Article */}
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              Electrocardiograma: evaluación rápida de la actividad cardíaca
            </h2>
            <div className="text-[#475569] space-y-4 mb-10 leading-relaxed">
              <p>
                El Dr. Willmer Obregón ofrece un servicio de excelencia en la realización de electrocardiogramas, con atención personalizada y resultados claros para apoyar tu evaluación clínica.
              </p>
              <h3 className="text-xl font-bold text-[#0F172A] pt-4">Servicio de Electrocardiograma</h3>
              <p>
                El Electrocardiograma (ECG) es una prueba diagnóstica no invasiva que permite evaluar la actividad eléctrica del corazón. Es útil para el diagnóstico y seguimiento de distintas condiciones, ya que aporta información sobre ritmo, conducción y posibles alteraciones.
              </p>
              <p>
                El examen se realiza de manera rápida: se colocan electrodos en puntos específicos del cuerpo para registrar la señal eléctrica del corazón. Luego, el especialista interpreta el trazado y emite un informe.
              </p>
              <p>
                Puede apoyar el estudio de síntomas como palpitaciones, dolor torácico, mareo, disnea o controles de rutina según el contexto clínico.
              </p>
            </div>

            {/* FAQs */}
            <h3 className="text-xl font-bold text-[#0F172A] mb-6">Preguntas frecuentes</h3>
            <div className="mb-10">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-2 border-[#E2E8F0]">
                    <AccordionTrigger className="text-left font-medium text-[#1E293B] hover:text-[#1080A0] hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#475569] leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Conclusión</h3>
            <p className="text-[#475569] leading-relaxed">
              Si necesitas un Electrocardiograma, agenda una valoración. Con un enfoque claro y preventivo, definimos el estudio indicado y los siguientes pasos según tus síntomas y antecedentes.
            </p>

            <RelatedServices services={[
              { title: "Ecocardiograma Transtorácico", href: "/cardiologia/ecocardiograma-transtoracico", description: "Ultrasonido para evaluar estructura y función del corazón" },
              { title: "Holter 24 Horas", href: "/cardiologia/holter-24-horas", description: "Monitoreo continuo del ritmo cardíaco" },
              { title: "MAPA 24 Horas", href: "/cardiologia/mapa-24-horas", description: "Control ambulatorio de presión arterial" },
            ]} />

            <MedicalDisclaimer />
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <section className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 shadow-sm">
              <h4 className="text-xl font-bold text-[#0F172A] mb-6">Contáctanos</h4>
              <div className="space-y-3 mb-8">
                <a
                  href={getWhatsAppLink(0)}
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
                  Llamar por teléfono
                </a>
              </div>

              {/* Location Card */}
              <div className="rounded-2xl border-2 border-[#E2E8F0] bg-[#F8FAFC]/60 p-6 mb-6">
                <p className="font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#1080A0]" />
                  Ubicación
                </p>
                <a
                  href="https://maps.app.goo.gl/ATcuaGZM9YdvY7kFA"
                  className="text-sm text-[#475569] leading-relaxed hover:text-[#1080A0] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Biencrecer Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia
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

export default ElectrocardiogramaPage;
