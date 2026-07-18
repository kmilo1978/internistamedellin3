"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const routeLabels: Record<string, string> = {
  'servicios': 'Servicios',
  'consulta-medicina-interna': 'Consulta de Medicina Interna',
  'viscosuplementacion-para-rodilla': 'Viscosuplementación para Rodilla',
  'enfermedades-cardiovasculares': 'Enfermedades Cardiovasculares',
  'enfermedades-endocrinas': 'Enfermedades Endocrinas',
  'enfermedades-gastrointestinales': 'Enfermedades Gastrointestinales',
  'enfermedades-pulmonares': 'Enfermedades Pulmonares',
  'enfermedades-hematologicas': 'Enfermedades Hematológicas',
  'enfermedades-psiquiatricas': 'Enfermedades Psiquiátricas',
  'manejo-avanzado-dolor': 'Manejo Avanzado de Dolor',
  'infiltraciones-corticoides': 'Infiltraciones con Corticoides',
  'infiltraciones-bioreguladores': 'Infiltraciones con Bioreguladores',
  'acido-hialuronico': 'Ácido Hialurónico',
  'prp-lisado-plaquetas': 'PRP y Lisado de Plaquetas',
  'cardiologia': 'Cardiología',
  'electrocardiograma': 'Electrocardiograma',
  'ecocardiograma-transtoracico': 'Ecocardiograma Transtorácico',
  'holter-24-horas': 'Holter 24 Horas',
  'mapa-24-horas': 'MAPA 24 Horas',
  'testimonios': 'Testimonios',
  'sobre-mi': 'Sobre el Dr. Obregón',
  'contacto': 'Contacto',
  'politica-de-datos': 'Política de Datos',
  'terminos-y-condiciones': 'Términos y Condiciones',
};

const Breadcrumbs = () => {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/');
    const label = routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const isLast = index === segments.length - 1;

    return { path, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 sm:px-6 pt-6 -mb-2">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-ellipsis overflow-hidden" itemScope itemType="https://schema.org/BreadcrumbList">
        <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link
            href="/"
            className="flex items-center gap-1 text-[#64748B] hover:text-[#1080A0] transition-colors"
            itemProp="item"
          >
            <Home className="w-3.5 h-3.5" />
            <span itemProp="name">Inicio</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {crumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <ChevronRight className="w-3.5 h-3.5 text-[#CBD5E1] mx-1" aria-hidden="true" />
            {crumb.isLast ? (
              <span className="text-[#0F172A] font-medium" itemProp="name" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.path}
                className="text-[#64748B] hover:text-[#1080A0] transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{crumb.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
