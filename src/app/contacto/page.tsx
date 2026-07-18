import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { MessageSquare, Phone, MapPin, Clock, Mail } from 'lucide-react';
import { getWhatsAppLink, getPhoneLink, LOCATION } from '@/lib/contact-config';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Contacto | Agenda tu Cita con el Dr. Willmer Obregón en Medellín",
  description: "Agenda tu cita con el Dr. Willmer Obregón, médico internista en Medellín. Atención rápida por WhatsApp o teléfono. Consultas presenciales y virtuales disponibles.",
  alternates: {
    canonical: "https://internistamedellin.com/contacto",
  },
  openGraph: {
    title: "Contacto | Agenda tu Cita con el Dr. Willmer Obregón en Medellín",
    description: "Agenda tu cita con el Dr. Willmer Obregón, médico internista en Medellín. Atención rápida por WhatsApp o teléfono.",
    url: "https://internistamedellin.com/contacto",
    images: [
      {
        url: "/Dr.-Willmer-Obregón,-Médico-Internista-en-Medellín.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Willmer Obregón, médico internista en Medellín - contacto y citas",
      },
    ],
  },
};

const ContactPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Willmer Obregón - Medicina Interna",
    "description": "Consulta de medicina interna y estudios cardiológicos en Medellín",
    "url": "https://internistamedellin.com",
    "telephone": ["+573009895852"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cra 81 #27-17 Consultorio 1, Biencrecer",
      "addressLocality": "Medellín",
      "addressRegion": "Antioquia",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.2518",
      "longitude": "-75.5636"
    },
    "sameAs": ["https://internistamedellin.com"],
    "image": "https://internistamedellin.com/Wilmer_Obregon_Logo.png",
    "founder": {
      "@type": "Person",
      "name": "Dr. Willmer Obregón",
      "jobTitle": "Especialista en Medicina Interna"
    },
    "medicalSpecialty": ["Medicina Interna", "Cardiología"],
    "knowsAbout": [
      "Diabetes",
      "Presión Alta",
      "Enfermedades del Corazón",
      "Problemas de Tiroides",
      "Enfermedades de los Riñones",
      "Dolor Crónico"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  return (
    <div className="bg-[#F8FAFC]">
      <Script
        id="medical-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        strategy="afterInteractive"
      />
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
            Solicitud de Citas y Atención Médica Especializada
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Estamos disponibles para acompañarte en todo el proceso, desde resolver tus dudas iniciales hasta agendar tu cita de manera fácil, rápida y segura. Nuestro equipo está preparado para brindarte orientación clara y oportuna, ayudándote a identificar el servicio más adecuado según tus síntomas o necesidades de salud.
          </p>
          <p className="mt-3 text-lg text-[#475569] leading-relaxed">
            Puedes contactarnos a través de WhatsApp o llamada telefónica, donde recibirás atención personalizada y guía directa para tu valoración médica. Nos enfocamos en ofrecerte una experiencia ágil, confiable y centrada en tu bienestar, facilitando cada paso para que accedas a una atención especializada sin complicaciones.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Contact Card */}
          <article className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/70 p-8 md:p-10 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Contáctanos para agendar tu cita</h2>

            <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[#1080A0]" />
              Agenda por WhatsApp o teléfono
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 mb-10">
              <a
                href={getWhatsAppLink()}
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#187495] via-[#11A9D0] to-[#187495] py-4 px-6 text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2"
              >
                <MessageSquare className="h-5 w-5" />
                Agendar por WhatsApp
              </a>
              <a
                href={getPhoneLink()}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#E7F5F9] py-4 px-6 text-sm font-bold text-[#0F172A] hover:bg-[#D9EDF3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 border border-[#E2E8F0]"
              >
                <Phone className="h-5 w-5" />
                Llamar
              </a>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#1080A0]" />
                  Ubicación del consultorio en Medellín
                </h3>
                <a
                  href="https://maps.app.goo.gl/ATcuaGZM9YdvY7kFA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#1080A0] hover:text-[#0D6E8A] transition-colors underline"
                >
                  Abrir en Maps
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/ATcuaGZM9YdvY7kFA"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-2xl border-2 border-[#E2E8F0] bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] hover:border-[#CBD5E1] transition-colors aspect-video"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-[#1080A0] mx-auto mb-3" />
                    <p className="text-sm font-semibold text-[#0F172A] mb-2">Ver en Google Maps</p>
                    <p className="text-xs text-[#475569]">Biencrecer Cra 81 #27-17, Medellín</p>
                  </div>
                </div>
              </a>
              <p className="text-sm text-[#475569]">
                Haz clic en "Abrir en Maps" para ver indicaciones y navegación en tiempo real.
              </p>
            </div>
          </article>

          {/* Sidebar Info */}
          <aside className="space-y-6">
            <section className="rounded-[2rem] border-2 border-[#E2E8F0] bg-white/60 p-8 md:p-10 shadow-sm backdrop-blur-sm h-full">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Información de contacto</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#E7F5F9] text-[#1080A0]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[#1E293B]">Dirección</h3>
                    <a
                      href={LOCATION.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#475569] hover:text-[#1080A0] transition-colors leading-relaxed"
                    >
                      {LOCATION.address}
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#E7F5F9] text-[#1080A0]">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[#1E293B]">Teléfono</h3>
                    <a href="tel:+573009895852" className="text-[#475569] hover:text-[#1080A0] transition-colors">
                      +57 300 989 5852
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#E7F5F9] text-[#1080A0]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[#1E293B]">Correo electrónico</h3>
                    <a href="mailto:tuinternistafavorito@gmail.com" className="text-[#475569] hover:text-[#1080A0] transition-colors break-all">
                      tuinternistafavorito@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#E7F5F9] text-[#1080A0]">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="space-y-1 text-[#475569]">
                    <h3 className="font-bold text-[#1E293B] text-base">Horarios de atención</h3>
                    <p>Lunes a viernes: 8am a 5pm</p>
                  </div>
                </div>

                {/* Facilities Image */}
                <div className="relative mt-6 pt-6 border-t border-[#E2E8F0] h-64 rounded-xl overflow-hidden border border-[#E2E8F0]">
                  <Image
                    src="/Instalaciones del Centro Medico Biencrecer.jpg"
                    alt="Fachada de las instalaciones del Centro Médico Biencrecer en Medellín - consultorio Dr. Willmer Obregón"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
          </aside>
        </section>

        {/* Doctoralia CTA */}
        <section className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white/60 p-6 md:p-12 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-md">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2C8.5 2 5.5 3.5 5.5 6.5C5.5 8 6.5 9.5 8 10.5L6 14L9 12.5C10 13 11 13.2 12 13.2C15.5 13.2 18.5 11 18.5 7.5C18.5 4 15.5 2 12 2Z" fill="#00B4B4"/>
                    <path d="M7 15C5 15.5 3 17 3 19.5V22H21V19.5C21 17 19 15.5 17 15L14 17.5H10L7 15Z" fill="#00B4B4"/>
                  </svg>
                  <span className="text-sm font-semibold text-[#00B4B4] uppercase tracking-wider">Doctoralia</span>
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-[#0F172A] md:text-3xl lg:text-4xl">
                  Encuéntranos en Doctoralia
                </h2>
                <p className="mt-3 text-sm text-[#64748B] md:text-lg">
                  Consulta opiniones de pacientes, horarios disponibles y agenda tu cita directamente desde Doctoralia.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto">
                <a
                  href="https://www.doctoralia.co/willmer-obregon/internista/medellin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#00B4B4] px-8 text-sm font-medium text-white shadow-[0_0_15px_rgba(0,180,180,0.2)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4B4] focus-visible:ring-offset-2 sm:h-12 sm:w-72 sm:text-base"
                >
                  Ver perfil en Doctoralia
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#00B4B4]/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#00B4B4]/5 blur-3xl" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
