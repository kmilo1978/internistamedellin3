import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://internistamedellin.com';
  const lastModified = new Date('2026-07-18');

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${baseUrl}/dr-willmer-obregon-hero.jpg`],
    },
    {
      url: `${baseUrl}/sobre-mi`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/dr-willmer-obregon-medico-internista-en-medellin.jpg`],
    },
    {
      url: `${baseUrl}/sobre-mi/testimonios`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/Instalaciones%20del%20Centro%20Medico%20Biencrecer.jpg`],
    },
    {
      url: `${baseUrl}/servicios/consulta-medicina-interna`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [`${baseUrl}/servicio-consulta-internista-medellin.jpg`],
    },
    {
      url: `${baseUrl}/servicios/consulta-medicina-interna/enfermedades-cardiovasculares`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/consulta-medicina-interna/enfermedades-endocrinas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/consulta-medicina-interna/enfermedades-gastrointestinales`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/consulta-medicina-interna/enfermedades-pulmonares`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/consulta-medicina-interna/enfermedades-hematologicas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/consulta-medicina-interna/enfermedades-psiquiatricas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/consulta-medicina-interna/manejo-avanzado-dolor`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/viscosuplementacion-para-rodilla`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [`${baseUrl}/servicio-viscosuplementacion-rodilla-medellin.jpg`],
    },
    {
      url: `${baseUrl}/servicios/viscosuplementacion-para-rodilla/infiltraciones-corticoides`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/viscosuplementacion-para-rodilla/infiltraciones-bioreguladores`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/viscosuplementacion-para-rodilla/acido-hialuronico`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/viscosuplementacion-para-rodilla/prp-lisado-plaquetas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cardiologia/electrocardiograma`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/servicio-electrocardiograma-medellin.jpg`],
    },
    {
      url: `${baseUrl}/cardiologia/ecocardiograma-transtoracico`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/servicio-ecocardiograma-medellin.jpg`],
    },
    {
      url: `${baseUrl}/cardiologia/holter-24-horas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/servicio-holter-medellin.jpg`],
    },
    {
      url: `${baseUrl}/cardiologia/mapa-24-horas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/servicio-mapa-medellin.jpg`],
    },
    {
      url: `${baseUrl}/politica-de-datos`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
