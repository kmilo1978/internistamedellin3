import { ShieldCheck, UserCheck, CalendarDays, BookOpen } from 'lucide-react';

interface MedicalDisclaimerProps {
  lastUpdated?: string;
  sources?: string[];
}

const MedicalDisclaimer = ({
  lastUpdated = "Junio 2026",
  sources = [
    "Harrison's Principles of Internal Medicine, 21st Ed.",
    "Guías de Práctica Clínica – Ministerio de Salud de Colombia",
    "American College of Physicians (ACP)"
  ]
}: MedicalDisclaimerProps) => {
  return (
    <aside
      className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-8 mt-10"
      aria-label="Información del autor y aviso médico"
    >
      <div className="space-y-5">
        {/* Author */}
        <div className="flex items-start gap-3">
          <UserCheck className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-[#0F172A]">Autor: Dr. Willmer Obregón</p>
            <p className="text-xs text-[#64748B] mt-0.5">Especialista en Medicina Interna · Medellín, Colombia</p>
          </div>
        </div>

        {/* Last updated */}
        <div className="flex items-start gap-3">
          <CalendarDays className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-[#0F172A]">Última actualización</p>
            <p className="text-xs text-[#64748B] mt-0.5">{lastUpdated}</p>
          </div>
        </div>

        {/* Clinical sources */}
        <div className="flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-[#1080A0] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-[#0F172A]">Fuentes clínicas</p>
            <ul className="mt-1 space-y-0.5">
              {sources.map((source, i) => (
                <li key={i} className="text-xs text-[#64748B]">• {source}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 pt-3 border-t border-[#E2E8F0]">
          <ShieldCheck className="w-5 h-5 text-[#94A3B8] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            <strong className="text-[#64748B]">Aviso:</strong> Este contenido es informativo y educativo. No reemplaza la valoración médica profesional. Para un diagnóstico o tratamiento personalizado, agenda una consulta con el Dr. Willmer Obregón.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default MedicalDisclaimer;
