import type { Metadata } from "next";
import Script from "next/script";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import AboutMe from "@/components/sections/about-me";
import DoctoraliaCta from "@/components/sections/doctoralia-cta";
import CtaBanner from "@/components/sections/cta-banner";
import BenefitsSection from "@/components/sections/benefits";
import FAQSection from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Médico Internista en Medellín | Dr. Willmer Obregón - Consulta Integral",
  description: "El Dr. Willmer Obregón es médico internista en Medellín con 15+ años de experiencia. Diagnóstico y tratamiento de hipertensión, diabetes y enfermedades crónicas. Agenda por WhatsApp.",
  alternates: {
    canonical: "https://internistamedellin.com/",
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dr. Willmer Obregón - Medicina Interna Medellín",
    "alternateName": "Internista Medellín",
    "url": "https://internistamedellin.com",
    "description": "Consulta de medicina interna en Medellín con el Dr. Willmer Obregón. Especialista en hipertensión, diabetes, enfermedades cardiovasculares y crónicas.",
    "publisher": {
      "@type": "MedicalBusiness",
      "name": "Dr. Willmer Obregón - Medicina Interna",
      "url": "https://internistamedellin.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://internistamedellin.com/Wilmer_Obregon_Logo.png",
        "width": 512,
        "height": 512
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://internistamedellin.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "es-CO"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo puedo agendar una cita?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contáctanos por WhatsApp o llama. Disponemos de citas el mismo día o próxima semana según tu disponibilidad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tratamientos ofrece el Dr. Obregón?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trata diabetes, presión alta, problemas del corazón, sobrepeso, problemas de tiroides, dolor crónico y otras enfermedades crónicas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué debo llevar a mi primera consulta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trae tus informes médicos previos, resultados de laboratorio, lista de medicamentos actuales e identificación."
        }
      },
      {
        "@type": "Question",
        "name": "¿La consulta incluye seguimiento después de la cita?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. El Dr. Willmer Obregón ofrece seguimiento por WhatsApp sin costo adicional, y además la consulta de control para revisar exámenes solicitados está incluida sin costo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo realizarme estudios cardiovasculares en el mismo proceso de atención?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Se ofrecen estudios como electrocardiograma, ecocardiograma transtorácico, Holter 24 horas y MAPA 24 horas, los cuales se indican según la valoración clínica y el motivo de consulta."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://internistamedellin.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios de Medicina Interna",
        "item": "https://internistamedellin.com/servicios/consulta-medicina-interna"
      }
    ]
  };

  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <AboutMe />
      <FAQSection />
      <DoctoraliaCta />
      <CtaBanner />
    </>
  );
}
