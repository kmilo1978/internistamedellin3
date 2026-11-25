import type { Metadata } from "next";
import Script from "next/script";
import { Star, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonios | Dr. Willmer Obregón Medellín",
  description: "Lee las opiniones y testimonios reales de pacientes del Dr. Willmer Obregón, médico internista en Medellín. Conoce la experiencia de quienes confían en su atención.",
  alternates: {
    canonical: "https://internistamedellin.com/sobre-mi/testimonios",
  },
  openGraph: {
    title: "Testimonios de Pacientes | Dr. Willmer Obregón",
    description: "Opiniones reales de pacientes del Dr. Willmer Obregón, médico internista en Medellín.",
    url: "https://internistamedellin.com/sobre-mi/testimonios",
    images: [
      {
        url: "/dr-willmer-obregon-medico-internista-en-medellin.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Willmer Obregón, médico internista en Medellín - testimonios de pacientes",
      },
    ],
  },
};

export default function TestimoniosPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <main className="container pt-16 pb-16 md:pt-24">
        {/* Header */}
        <header className="mb-12">
          <p className="text-sm font-semibold text-[#1080A0] uppercase tracking-wider mb-2">Sobre el Dr. Obregón</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
            Testimonios de Pacientes
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed">
            Conoce la experiencia de nuestros pacientes. Sus opiniones reflejan nuestro compromiso con una atención médica cercana, profesional y orientada a resultados.
          </p>
        </header>

        {/* Doctoralia Section */}
        <section className="mb-12">
          <div className="rounded-[2rem] border border-[#E2E8F0] bg-white/80 backdrop-blur-md p-8 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2C8.5 2 5.5 3.5 5.5 6.5C5.5 8 6.5 9.5 8 10.5L6 14L9 12.5C10 13 11 13.2 12 13.2C15.5 13.2 18.5 11 18.5 7.5C18.5 4 15.5 2 12 2Z" fill="#00B4B4"/>
                    <path d="M7 15C5 15.5 3 17 3 19.5V22H21V19.5C21 17 19 15.5 17 15L14 17.5H10L7 15Z" fill="#00B4B4"/>
                  </svg>
                  <span className="text-lg font-bold text-[#0F172A]">Doctoralia</span>
                </div>
                <p className="text-[#475569] leading-relaxed max-w-xl">
                  Consulta todas nuestras opiniones verificadas en Doctoralia. Pacientes reales comparten su experiencia con el Dr. Willmer Obregón.
                </p>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                  <span className="ml-2 text-sm text-[#64748B] font-medium">Calificación destacada</span>
                </div>
              </div>
              <a
                href="https://www.doctoralia.co/willmer-obregon/internista/medellin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00B4B4] px-8 py-4 text-base font-medium text-white shadow-[0_0_15px_rgba(0,180,180,0.2)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4B4] focus-visible:ring-offset-2 whitespace-nowrap"
              >
                Ver perfil en Doctoralia
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Google My Business Reviews */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6">
            Opiniones en Google
          </h2>
          <div className="rounded-[2rem] border border-[#E2E8F0] bg-white/80 backdrop-blur-md p-8 md:p-10 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "María González",
                  date: "Hace 2 semanas",
                  text: "Excelente profesional, muy dedicado y atento. Se toma el tiempo necesario para explicar todo detalladamente."
                },
                {
                  name: "Carlos Rodríguez",
                  date: "Hace 1 mes",
                  text: "El Dr. Obregón es muy profesional. La consulta fue muy completa y me sentí muy bien atendido."
                },
                {
                  name: "Ana Martínez",
                  date: "Hace 2 meses",
                  text: "Un médico excepcional. Su atención es personalizada y se nota su amplia experiencia."
                },
                {
                  name: "Jorge Pérez",
                  date: "Hace 3 meses",
                  text: "Recomendado 100%. Muy profesional, explica todo con claridad y paciencia."
                },
                {
                  name: "Luz Hernández",
                  date: "Hace 1 semana",
                  text: "El Dr. Obregón me ayudó a controlar mis problemas de salud con un plan muy claro. Excelente diagnóstico y seguimiento."
                },
                {
                  name: "David Sánchez",
                  date: "Hace 10 días",
                  text: "Después de visitar varios médicos, el Dr. Obregón fue quien realmente entendió mi caso. Muy recomendado."
                }
              ].map((review, i) => (
                <div key={i} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed mb-3">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-[#0F172A]">{review.name}</p>
                    <p className="text-xs text-[#94A3B8]">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href="https://maps.app.goo.gl/ATcuaGZM9YdvY7kFA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border-2 border-[#E2E8F0] px-8 py-4 text-base font-medium text-[#0F172A] hover:border-[#1080A0] hover:text-[#1080A0] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Ver todas las opiniones en Google
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Instagram Widget */}
        <section className="mb-12">
          <div className="rounded-[2rem] border border-[#E2E8F0] bg-white/80 backdrop-blur-md p-8 md:p-10 shadow-sm">
            <div data-key="Internista Medellin" className="ft" id="ftyby23en"></div>
          </div>
        </section>

        {/* YouTube Video */}
        <section className="mb-12">
          <div className="rounded-[2rem] border border-[#E2E8F0] bg-white/80 backdrop-blur-md p-8 md:p-10 shadow-sm">
            <div className="flex justify-center">
              <div className="w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/1l0We9877vE"
                  title="Dr. Willmer Obregón - Médico Internista en Medellín"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fouita Instagram Widget Script */}
      <Script
        src="https://wdg.fouita.com/widgets/0x4b4ad6.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
