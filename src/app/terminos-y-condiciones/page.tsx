import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso | Dr. Willmer Obregón",
  description: "Términos y condiciones de uso del sitio web del Dr. Willmer Obregón, especialista en medicina interna en Medellín, Colombia.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://internistamedellin.com/terminos-y-condiciones",
  },
};

export default function TerminosYCondicionesPage() {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-16 md:py-20">
      <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-sm border border-white/40">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
          Términos y Condiciones de Uso
        </h1>
        <p className="text-[#1080A0] font-semibold mb-8">
          Dr. Willmer Obregón · Internista en Medellín
        </p>

        <div className="prose prose-slate max-w-none text-[#475569] leading-relaxed space-y-8">
          <p>
            El presente documento establece los términos y condiciones aplicables al uso del sitio web del Dr. Willmer Obregón, especialista en Medicina Interna, con sede en Medellín, Colombia.
          </p>

          {/* Sección 1 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar este sitio web, usted acepta quedar vinculado por los presentes términos y condiciones. Si no está de acuerdo con estos términos, le solicitamos que se abstenga de utilizar este sitio.
            </p>
          </div>

          {/* Sección 2 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">2. Naturaleza del Contenido</h2>
            <p>
              La información publicada en este sitio tiene carácter estrictamente informativo y educativo sobre Medicina Interna, estudios cardiovasculares y condiciones crónicas como obesidad, diabetes, hipertensión, enfermedades renales, tiroideas, digestivas y otras patologías atendidas por el Dr. Willmer Obregón.
            </p>
            <p className="mt-3">
              Dicha información no constituye diagnóstico médico, prescripción ni recomendación de tratamiento individual. Para recibir atención médica, diagnóstico o formulación, el usuario debe agendar una consulta presencial o virtual con el consultorio a través de los canales oficiales publicados en esta página.
            </p>
          </div>

          {/* Sección 3 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">3. Servicios Ofrecidos</h2>
            <p>
              Este sitio web presenta información sobre los servicios médicos ofrecidos por el Dr. Willmer Obregón, que incluyen, entre otros:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Consulta de Medicina Interna.</li>
              <li>Estudios cardiovasculares: electrocardiograma, ecocardiograma transtorácico, Holter 24 horas y MAPA 24 horas.</li>
              <li>Procedimientos y valoraciones relacionados con el manejo integral de enfermedades metabólicas y cardiovasculares.</li>
            </ul>
            <p className="mt-3">
              Los servicios y tratamientos descritos están siempre sujetos a evaluación clínica previa y se aplican conforme al criterio médico del especialista y a las guías de práctica clínica vigentes.
            </p>
          </div>

          {/* Sección 4 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">4. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de este sitio web —textos, imágenes, fotografías, logotipos, videos, estructura de navegación, diseño gráfico, marcas y demás elementos— es propiedad del Dr. Willmer Obregón o de sus respectivos titulares y se encuentra protegido por las leyes de propiedad intelectual y normas aplicables en la República de Colombia.
            </p>
            <p className="mt-3">
              Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otro uso no autorizado del contenido, salvo autorización previa y expresa del titular de los derechos.
            </p>
          </div>

          {/* Sección 5 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">5. Uso del Sitio y Responsabilidad</h2>
            <p>
              El usuario se compromete a utilizar el sitio de forma responsable, lícita y conforme a los presentes términos.
            </p>
            <p className="mt-3">El consultorio y el Dr. Willmer Obregón no se hacen responsables por:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>El uso inadecuado o interpretación errónea de la información publicada en el sitio.</li>
              <li>Decisiones médicas o de salud que el usuario adopte sin consulta directa con un profesional de la salud.</li>
              <li>Fallos técnicos, indisponibilidad del sitio o problemas de conectividad ajenos al control del consultorio.</li>
            </ul>
            <p className="mt-3">
              El uso de los canales de contacto (formularios, WhatsApp, teléfonos y correos electrónicos) no crea por sí mismo una relación médico-paciente hasta tanto no se concrete una cita y se realice la correspondiente valoración clínica.
            </p>
          </div>

          {/* Sección 6 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">6. Enlaces a Terceros</h2>
            <p>
              El sitio puede incluir enlaces a otras páginas web, redes sociales u otros recursos administrados por terceros (por ejemplo, perfiles de Facebook, Instagram, YouTube, TikTok o mapas de ubicación). Estos enlaces se proveen únicamente como referencia y no implican aprobación ni responsabilidad del Dr. Willmer Obregón sobre el contenido, políticas o servicios ofrecidos en dichos sitios.
            </p>
          </div>

          {/* Sección 7 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">7. Modificaciones del Sitio y de los Términos</h2>
            <p>
              El Dr. Willmer Obregón se reserva el derecho de actualizar, modificar o eliminar en cualquier momento el contenido del sitio web, así como de cambiar estos Términos y Condiciones sin previo aviso. Se recomienda al usuario revisar periódicamente este documento para conocer la versión vigente.
            </p>
          </div>

          {/* Sección 8 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">8. Protección de Datos Personales</h2>
            <p>
              El tratamiento de los datos personales recolectados a través del sitio se regirá por la <a href="/politica-de-datos" rel="nofollow" className="text-[#1080A0] hover:underline">Política de Tratamiento de Datos Personales</a> del consultorio, disponible en esta misma página web. Al utilizar los formularios de contacto o los canales de comunicación publicados, el usuario declara haber leído y aceptado dicha política.
            </p>
          </div>

          {/* Sección 9 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">9. Legislación Aplicable y Jurisdicción</h2>
            <p>
              Los presentes Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia relacionada con el uso del sitio web será resuelta por los jueces competentes de la ciudad de Medellín, Antioquia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
