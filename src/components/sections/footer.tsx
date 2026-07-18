"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, ChevronUp } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#E1F1F6]/30 pt-16 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          {/* Doctor Info Column */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 shadow-sm border border-white/40">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/Wilmer_Obregon_Logo.png"
                  alt="Logo del Dr. Willmer Obregón, médico internista en Medellín - Internista Medellín"
                  width={200}
                  height={60}
                  className="h-16 w-auto"
                />
              </Link>
            <p className="text-sm text-[#64748B] leading-relaxed mb-6">
              Especialista en Medicina Interna en Medellín, con enfoque personalizado y comprensivo hacia el cuidado de la salud. Acompañamiento en condiciones cardiovasculares y metabólicas con tratamiento basado en evidencia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/tu.internista.favorito/"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/tu_internista_favorito/"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@tuinternistafavorito"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@tuinternistafavorito"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-[#E2E8F0] text-[#1080A0] hover:bg-[#1080A0] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 shadow-sm border border-white/40">
            <h3 className="text-lg font-bold text-[#1E293B] mb-6">Información de contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-[#1080A0]">
                  <MapPin size={20} />
                </div>
                <p className="text-sm text-[#64748B]">
                  Biencrecer Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 text-[#1080A0]">
                  <Phone size={20} />
                </div>
                <a href="tel:+573009895852" className="text-sm text-[#64748B] hover:text-[#1080A0] transition-colors">
                  +57 300 989 5852
                </a>
              </li>
            </ul>
          </div>

          {/* Email and Hours Column */}
          <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 shadow-sm border border-white/40">
            <h3 className="text-lg font-bold text-[#1E293B] mb-6">Correo y horarios</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 text-[#1080A0]">
                  <Mail size={20} />
                </div>
                <a href="mailto:tuinternistafavorito@gmail.com" className="text-sm text-[#64748B] hover:text-[#1080A0] transition-colors break-all">
                  tuinternistafavorito@gmail.com
                </a>
              </li>
              <li className="flex flex-col gap-1 pt-2">
                <div className="flex items-center gap-2 text-[#64748B] mb-2">
                  <Clock size={18} className="text-[#1080A0]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Horario de atención</span>
                </div>
                <p className="text-sm text-[#64748B] pl-7">Lunes a viernes: 8am a 5pm</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Navigation */}
        <nav aria-label="Navegación del sitio" className="py-10 border-t border-[#E2E8F0]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Medicina Interna */}
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] mb-4">Medicina Interna</h4>
              <ul className="space-y-2">
                <li><Link href="/servicios/consulta-medicina-interna" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Consulta de Medicina Interna</Link></li>
                <li><Link href="/servicios/consulta-medicina-interna/enfermedades-cardiovasculares" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Enfermedades Cardiovasculares</Link></li>
                <li><Link href="/servicios/consulta-medicina-interna/enfermedades-endocrinas" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Diabetes y Tiroides</Link></li>
                <li><Link href="/servicios/consulta-medicina-interna/enfermedades-gastrointestinales" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Gastritis y Colon Irritable</Link></li>
                <li><Link href="/servicios/consulta-medicina-interna/enfermedades-pulmonares" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Enfermedades Pulmonares</Link></li>
                <li><Link href="/servicios/consulta-medicina-interna/enfermedades-psiquiatricas" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Ansiedad y Depresión</Link></li>
                <li><Link href="/servicios/consulta-medicina-interna/enfermedades-hematologicas" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Anemias y Hematología</Link></li>
                <li><Link href="/servicios/consulta-medicina-interna/manejo-avanzado-dolor" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Dolor Crónico y Fibromialgia</Link></li>
              </ul>
            </div>

            {/* Viscosuplementación */}
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] mb-4">Infiltraciones</h4>
              <ul className="space-y-2">
                <li><Link href="/servicios/viscosuplementacion-para-rodilla" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Viscosuplementación para Rodilla</Link></li>
                <li><Link href="/servicios/viscosuplementacion-para-rodilla/infiltraciones-corticoides" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Infiltraciones con Corticoides</Link></li>
                <li><Link href="/servicios/viscosuplementacion-para-rodilla/infiltraciones-bioreguladores" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Infiltraciones con Bioreguladores</Link></li>
                <li><Link href="/servicios/viscosuplementacion-para-rodilla/acido-hialuronico" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Ácido Hialurónico</Link></li>
                <li><Link href="/servicios/viscosuplementacion-para-rodilla/prp-lisado-plaquetas" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">PRP y Lisado de Plaquetas</Link></li>
              </ul>
            </div>

            {/* Cardiología */}
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] mb-4">Estudios Cardiológicos</h4>
              <ul className="space-y-2">
                <li><Link href="/cardiologia/electrocardiograma" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Electrocardiograma</Link></li>
                <li><Link href="/cardiologia/ecocardiograma-transtoracico" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Ecocardiograma Transtorácico</Link></li>
                <li><Link href="/cardiologia/holter-24-horas" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Holter 24 Horas</Link></li>
                <li><Link href="/cardiologia/mapa-24-horas" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">MAPA 24 Horas</Link></li>
              </ul>
            </div>

            {/* Páginas */}
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] mb-4">Páginas</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Inicio</Link></li>
                <li><Link href="/sobre-mi" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Sobre el Dr. Obregón</Link></li>
                <li><Link href="/sobre-mi/testimonios" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Testimonios</Link></li>
                <li><Link href="/contacto" className="text-xs text-[#64748B] hover:text-[#1080A0] transition-colors">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-[#E2E8F0] gap-6">
          <p className="text-sm text-[#64748B] text-center md:text-left md:flex-1">
            © 2026 Dr. Willmer Obregón - Medicina Interna. Desarrollado por <a href="https://localrank.com.co/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1080A0] transition-colors">LocalRank</a>.
          </p>
          
          <div className="flex flex-col items-center gap-2 md:flex-1">
            <span className="flex flex-col leading-tight opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-sm font-bold text-[#0F172A] tracking-tight">Dr. Willmer Obregón</span>
              <span className="text-[10px] font-medium text-[#1080A0] uppercase tracking-widest">Medicina Interna</span>
            </span>
            <div className="flex items-center gap-2">
              <a
                href="/politica-de-datos"
                rel="nofollow"
                className="text-xs text-[#94A3B8] hover:text-[#1080A0] transition-colors"
              >
                Política de Datos
              </a>
              <span className="text-xs text-[#94A3B8]">·</span>
              <a
                href="/terminos-y-condiciones"
                rel="nofollow"
                className="text-xs text-[#94A3B8] hover:text-[#1080A0] transition-colors"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>

          <div className="md:flex-1 flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#1080A0] transition-colors group"
            >
              Volver arriba
              <ChevronUp size={16} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;