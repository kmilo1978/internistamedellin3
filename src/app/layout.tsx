import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import StickySocialSidebar from "@/components/ui/sticky-social-sidebar";
import MobileQuickActions from "@/components/ui/mobile-quick-actions";
import { GTMProvider } from "@/components/providers/GTMProvider";
import { RouteTracker } from "@/components/providers/RouteTracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://internistamedellin.com"),
  title: "Médico Internista en Medellín | Dr. Willmer Obregón - Consulta Integral",
  description: "El Dr. Willmer Obregón es médico internista en Medellín con 15+ años de experiencia. Diagnóstico y tratamiento de hipertensión, diabetes y enfermedades crónicas. Agenda por WhatsApp.",

  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Médico Internista en Medellín | Dr. Willmer Obregón - Consulta Integral",
    description: "El Dr. Willmer Obregón es médico internista en Medellín con 15+ años de experiencia. Diagnóstico y tratamiento de hipertensión, diabetes y enfermedades crónicas. Agenda por WhatsApp.",
    url: "https://internistamedellin.com",
    siteName: "Dr. Willmer Obregón - Medicina Interna",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/Dr.-Willmer-Obregon-consultorio.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Willmer Obregón en su consultorio de medicina interna en Medellín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Médico Internista en Medellín | Dr. Willmer Obregón - Consulta Integral",
    description: "El Dr. Willmer Obregón es médico internista en Medellín con 15+ años de experiencia. Diagnóstico y tratamiento de hipertensión, diabetes y enfermedades crónicas. Agenda por WhatsApp.",
    images: ["/Dr.-Willmer-Obregon-consultorio.jpg"],
  },
  icons: {
    icon: "/Wilmer_Obregon_Logo.png",
    apple: "/Wilmer_Obregon_Logo.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es-CO" className={inter.variable} suppressHydrationWarning>
        <head>
          <meta name="msvalidate.01" content="A863C93F66A9ADA5DF9548F5D3F51F28" />
          <link rel="author" href="https://internistamedellin.com/llms.txt" />
          <link rel="preload" as="image" href="/dr-willmer-obregon-hero.jpg" fetchPriority="high" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://slelguoygbfzlpylpxfs.supabase.co" />
          <link rel="preconnect" href="https://maps.googleapis.com" />
          <Script
            id="physician-schema"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "Physician"],
              "@id": "https://internistamedellin.com/#physician",
              "name": "Dr. Willmer Obregón",
              "jobTitle": "Médico Internista",
              "description": "Especialista en Medicina Interna con más de 15 años de experiencia en prevención cardiovascular, enfermedades metabólicas y manejo integral de enfermedades crónicas. Atiende pacientes en Medellín con un enfoque centrado en el diagnóstico, tratamiento, prevención y seguimiento personalizado.",
              "url": "https://internistamedellin.com/sobre-mi",
              "image": {
                "@type": "ImageObject",
                "url": "https://i.postimg.cc/Gp24y1jg/dr-willmer-obregon-medicina-interna.png"
              },
              "telephone": "+573009895852",
              "email": "contacto@internistamedellin.com",
              "sameAs": [
                "https://www.facebook.com/tu.internista.favorito/",
                "https://www.instagram.com/tu_internista_favorito/",
                "https://www.youtube.com/@tuinternistafavorito",
                "https://www.tiktok.com/@tuinternistafavorito"
              ],
              "knowsLanguage": ["Spanish", "es-CO"],
              "knowsAbout": [
                "Medicina Interna",
                "Obesidad",
                "Diabetes",
                "Hipertensión Arterial",
                "Prevención Cardiovascular",
                "Enfermedades Cardiovasculares",
                "Enfermedades Renales",
                "Enfermedades de Tiroides",
                "Hipotiroidismo",
                "Gastritis",
                "Colon Irritable",
                "Fibromialgia",
                "Salud Metabólica",
                "Enfermedades Crónicas"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Título Profesional",
                  "name": "Médico Cirujano"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Especialización Médica",
                  "name": "Especialista en Medicina Interna"
                }
              ],
              "alumniOf": [
                { "@type": "CollegeOrUniversity", "name": "Universidad del Zulia" },
                { "@type": "CollegeOrUniversity", "name": "Universidad del Zulia - Postgrado de Medicina Interna" }
              ],
              "memberOf": [
                { "@type": "Organization", "name": "ACMI" },
                { "@type": "Organization", "name": "CMC" }
              ],
              "award": ["Más de 15 años de experiencia en Medicina Interna"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.228775303053171,
                "longitude": -75.6022137220876
              },
              "areaServed": [
                { "@type": "City", "name": "Medellín" },
                { "@type": "Country", "name": "Colombia" }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+573009895852",
                "contactType": "medical consultations",
                "availableLanguage": ["Spanish"]
              },
              "worksFor": {
                "@type": "MedicalClinic",
                "@id": "https://internistamedellin.com/#clinic",
                "name": "Internista Medellín"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://internistamedellin.com/sobre-mi"
              }
            })}
          </Script>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTRKGD87');`}
          </Script>
          <Script
            id="medicalbusiness-schema"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalClinic",
                  "@id": "https://internistamedellin.com/#clinic",
                  "name": "Internista Medellín",
                  "alternateName": "Consulta de Medicina Interna Medellín",
                  "description": "Consultorio de medicina interna especializado en prevención cardiovascular, diagnóstico y manejo de enfermedades crónicas en Medellín, Colombia.",
                  "url": "https://internistamedellin.com/",
                  "image": "https://i.postimg.cc/4x3Fv4NQ/Logotipo-Dr-Wilmer-Obregon-selecc-1-jpg.jpg",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://i.postimg.cc/4x3Fv4NQ/Logotipo-Dr-Wilmer-Obregon-selecc-1-jpg.jpg"
                  },
                  "telephone": "+573009895852",
                  "email": "contacto@internistamedellin.com",
                  "priceRange": "$$",
                  "currenciesAccepted": "COP",
                  "paymentAccepted": ["Efectivo", "Transferencia", "Tarjeta de crédito"],
                  "sameAs": [
                    "https://www.facebook.com/tu.internista.favorito/",
                    "https://www.instagram.com/tu_internista_favorito/",
                    "https://www.youtube.com/@tuinternistafavorito",
                    "https://www.tiktok.com/@tuinternistafavorito"
                  ],
                  "hasMap": "https://maps.app.goo.gl/ATcuaGZM9YdvY7kFA",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Medellín",
                    "addressRegion": "Antioquia",
                    "addressCountry": "CO"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 6.228775303053171,
                    "longitude": -75.6022137220876
                  },
                  "areaServed": [
                    { "@type": "City", "name": "Medellín" },
                    { "@type": "Country", "name": "Colombia" }
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+573009895852",
                    "contactType": "customer service",
                    "availableLanguage": ["Spanish"]
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "17:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": "Saturday",
                      "opens": "09:00",
                      "closes": "13:00"
                    }
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": 4.9,
                    "reviewCount": 280
                  },
                  "founder": { "@id": "https://internistamedellin.com/#physician" },
                  "employee": { "@id": "https://internistamedellin.com/#physician" },
                  "makesOffer": [
                    {
                      "@type": "Offer",
                      "price": "500000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalProcedure", "name": "Consulta presencial a domicilio" }
                    },
                    {
                      "@type": "Offer",
                      "price": "300000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalProcedure", "name": "Consulta Especializada Presencial" }
                    },
                    {
                      "@type": "Offer",
                      "price": "200000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalProcedure", "name": "Consulta Especializada Virtual" }
                    },
                    {
                      "@type": "Offer",
                      "price": "250000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalTest", "name": "MAPA 24 horas" }
                    },
                    {
                      "@type": "Offer",
                      "price": "250000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalTest", "name": "Holter de ritmo 24 horas" }
                    },
                    {
                      "@type": "Offer",
                      "price": "45000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalTest", "name": "Electrocardiograma" }
                    },
                    {
                      "@type": "Offer",
                      "price": "290000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalTest", "name": "MAPA + Electrocardiograma" }
                    },
                    {
                      "@type": "Offer",
                      "price": "480000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalTest", "name": "MAPA o Holter de presión + Holter de ritmo" }
                    },
                    {
                      "@type": "Offer",
                      "price": "750000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalProcedure", "name": "Consulta + Holter de ritmo" }
                    },
                    {
                      "@type": "Offer",
                      "price": "530000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalProcedure", "name": "Consulta + MAPA o Holter de presión" }
                    },
                    {
                      "@type": "Offer",
                      "price": "530000",
                      "priceCurrency": "COP",
                      "itemOffered": { "@type": "MedicalProcedure", "name": "Consulta + MAPA + Electrocardiograma" }
                    }
                  ]
                },
                {
                  "@type": ["Person", "Physician"],
                  "@id": "https://internistamedellin.com/#physician",
                  "name": "Dr. Willmer Obregón",
                  "description": "Médico internista con más de 15 años de experiencia en enfermedades crónicas, prevención cardiovascular, hipertensión, diabetes y enfermedades metabólicas.",
                  "url": "https://internistamedellin.com/sobre-mi",
                  "image": "https://i.postimg.cc/Gp24y1jg/dr-willmer-obregon-medicina-interna.png",
                  "telephone": "+573009895852",
                  "email": "contacto@internistamedellin.com",
                  "sameAs": [
                    "https://www.facebook.com/tu.internista.favorito/",
                    "https://www.instagram.com/tu_internista_favorito/",
                    "https://www.youtube.com/@tuinternistafavorito",
                    "https://www.tiktok.com/@tuinternistafavorito"
                  ],
                  "knowsLanguage": ["Spanish", "es-CO"],
                  "knowsAbout": [
                    "Medicina Interna",
                    "Hipertensión Arterial",
                    "Diabetes Mellitus",
                    "Enfermedades Cardiovasculares",
                    "Enfermedades Endocrinas",
                    "Dolor Crónico",
                    "Fibromialgia",
                    "Enfermedades Gastrointestinales"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Medellín",
                    "addressRegion": "Antioquia",
                    "addressCountry": "CO"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 6.228775303053171,
                    "longitude": -75.6022137220876
                  },
                  "areaServed": [
                    { "@type": "City", "name": "Medellín" },
                    { "@type": "Country", "name": "Colombia" }
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+573009895852",
                    "contactType": "medical consultations",
                    "availableLanguage": ["Spanish"]
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "17:00"
                  },
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://internistamedellin.com/sobre-mi"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": 4.9,
                    "reviewCount": 280
                  }
                }
              ]
            })}
          </Script>
          <Script
            id="organization-schema"
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dr. Willmer Obregón - Medicina Interna",
              "alternateName": "Internista Medellín",
              "url": "https://internistamedellin.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://internistamedellin.com/Wilmer_Obregon_Logo.png",
                "width": 512,
                "height": 512
              },
              "image": "https://internistamedellin.com/Consulta_medica_personalizada_con_el_Dr._Willmer_Obregon_especialista_en_medicina_interna_en_Medellin._(1).jpg",
              "description": "Consulta de medicina interna integral en Medellín con el Dr. Willmer Obregón. Especialista en hipertensión, diabetes, enfermedades cardiovasculares, gastrointestinales, endocrinas y dolor crónico.",
              "sameAs": [
                "https://www.facebook.com/tu.internista.favorito/",
                "https://www.instagram.com/tu_internista_favorito/",
                "https://www.youtube.com/@tuinternistafavorito",
                "https://www.tiktok.com/@tuinternistafavorito"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+573009895852",
                "contactType": "Agendar cita",
                "availableLanguage": "Spanish"
              }
            })}
          </Script>
        </head>
        <body className="antialiased pb-20 xl:pb-0 text-slate-900" suppressHydrationWarning>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MTRKGD87"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <GTMProvider />
        <RouteTracker />
        <Header />
        <main>
          <Breadcrumbs />
          {children}
        </main>
        <Footer />
        <StickySocialSidebar />
        <MobileQuickActions />
      </body>
    </html>
  );
}
