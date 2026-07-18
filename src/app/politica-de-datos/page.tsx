import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos Personales | Dr. Willmer Obregón",
  description: "Política de tratamiento de datos personales del consultorio del Dr. Willmer Obregón en Medellín. Cumplimiento de la Ley 1581 de 2012.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://internistamedellin.com/politica-de-datos",
  },
};

export default function PoliticaDeDatosPage() {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-16 md:py-20">
      <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-sm border border-white/40">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
          Política de Tratamiento de Datos Personales
        </h1>
        <p className="text-[#1080A0] font-semibold mb-8">
          InternistaMedellin.com – Dr. Willmer Obregón
        </p>

        <div className="prose prose-slate max-w-none text-[#475569] leading-relaxed space-y-8">
          <p>
            En cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas concordantes sobre protección de datos personales en Colombia, el consultorio del Dr. Willmer Obregón, identificado con los datos de contacto indicados en este sitio web, en calidad de Responsable del Tratamiento, informa a los titulares de datos personales sobre el tratamiento que dará a su información.
          </p>

          {/* Sección 1 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">1. Datos del Responsable</h2>
            <ul className="space-y-2 list-none pl-0">
              <li><strong>Responsable del tratamiento:</strong> Dr. Willmer Obregón – Especialista en Medicina Interna</li>
              <li><strong>Dirección del consultorio:</strong> Biencrecer – Cra 81 #27-17, Consultorio 1, Barrio Belén La Palma, Medellín, Antioquia, Colombia</li>
              <li><strong>Teléfonos de contacto:</strong> +57 300 989 5852</li>
              <li><strong>Correo electrónico de contacto:</strong> tuinternistafavorito@gmail.com</li>
              <li><strong>Horario de atención:</strong> Lunes a viernes: 8:00 a.m. a 5:00 p.m.</li>
            </ul>
          </div>

          {/* Sección 2 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">2. Datos Recolectados</h2>
            <p>
              El consultorio del Dr. Willmer Obregón recolecta, almacena y trata los datos personales que los pacientes y usuarios suministran a través de los formularios de contacto, canales de WhatsApp, llamadas telefónicas, correos electrónicos y atención presencial, entre ellos:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Nombre y apellidos.</li>
              <li>Número de documento de identidad.</li>
              <li>Número(s) telefónico(s) y datos de contacto por WhatsApp.</li>
              <li>Correo electrónico.</li>
              <li>Ciudad de residencia.</li>
              <li>Motivo de consulta.</li>
              <li>Información clínica y datos relacionados con el estado de salud necesarios para la adecuada prestación de los servicios médicos y la realización de estudios diagnósticos (consultas, electrocardiograma, ecocardiograma, Holter, MAPA, etc.).</li>
            </ul>
            <p className="mt-3">
              Cuando se trate de datos sensibles relacionados con la salud, su suministro es facultativo y se utilizarán exclusivamente para las finalidades vinculadas a la prestación del servicio médico, en los términos permitidos por la normatividad vigente.
            </p>
          </div>

          {/* Sección 3 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">3. Finalidades del Tratamiento</h2>
            <p>Los datos personales serán utilizados, entre otros, para las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Agendar, confirmar, reprogramar y gestionar citas médicas presenciales y virtuales.</li>
              <li>Prestar la atención médica en Medicina Interna y los servicios diagnósticos ofrecidos (electrocardiograma, ecocardiograma transtorácico, Holter 24 horas, MAPA 24 horas, entre otros).</li>
              <li>Realizar seguimiento clínico a los pacientes, incluyendo controles, interpretación de resultados de estudios y ajuste de tratamientos.</li>
              <li>Enviar recordatorios de citas, indicaciones previas a procedimientos y recomendaciones posteriores a la consulta, incluyendo seguimiento por WhatsApp desde los canales oficiales del consultorio.</li>
              <li>Gestionar aspectos administrativos, contables y de facturación asociados a los servicios prestados.</li>
              <li>Atender peticiones, quejas y reclamos relacionados con la prestación del servicio.</li>
              <li>Cumplir con obligaciones legales y regulatorias en materia de historia clínica, seguridad del paciente y demás normativa en salud.</li>
              <li>Remitir información relevante relacionada con los servicios del consultorio, cambios en horarios, canales de atención, y contenido educativo en salud, siempre dentro de los límites permitidos por la ley de protección de datos.</li>
            </ul>
          </div>

          {/* Sección 4 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">4. Derechos del Titular</h2>
            <p>Como titular de datos personales, usted tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Conocer, acceder y obtener copia de los datos personales que reposan en nuestras bases de datos.</li>
              <li>Actualizar y rectificar la información cuando sea parcial, inexacta, incompleta o fraccionada.</li>
              <li>Solicitar la supresión de sus datos cuando considere que no se están tratando conforme a los principios, derechos y garantías constitucionales y legales, salvo cuando exista un deber legal o contractual que lo impida.</li>
              <li>Revocar la autorización otorgada para el tratamiento de los datos, cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la normatividad de protección de datos personales.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, el titular podrá comunicarse a través de los correos electrónicos oficiales indicados o de las líneas telefónicas de contacto del consultorio, indicando de manera clara su solicitud y anexando copia de su documento de identidad.
            </p>
          </div>

          {/* Sección 5 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">5. Seguridad y Confidencialidad</h2>
            <p>
              El consultorio del Dr. Willmer Obregón adopta las medidas técnicas, humanas y administrativas necesarias para garantizar la seguridad de la información y evitar su adulteración, pérdida, consulta, uso o acceso no autorizado.
            </p>
            <p className="mt-3">
              Los datos clínicos y la historia médica se manejan bajo estricta confidencialidad y solo son accesibles por el personal autorizado, respetando el secreto profesional y las disposiciones aplicables en materia de historias clínicas en Colombia.
            </p>
          </div>

          {/* Sección 6 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">6. Transferencias y Transmisiones</h2>
            <p>Los datos personales no serán vendidos ni cedidos a terceros para fines comerciales.</p>
            <p className="mt-3">Solo se compartirán con:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Entidades, profesionales de la salud o instituciones prestadoras de servicios de salud cuando sea necesario para la continuidad del tratamiento, siempre que medie autorización del titular o exista obligación legal.</li>
              <li>Autoridades administrativas o judiciales que, en ejercicio de sus funciones, los soliciten conforme a la ley.</li>
            </ul>
            <p className="mt-3">
              En caso de que se requiera el apoyo de proveedores tecnológicos (por ejemplo, herramientas de agenda, historia clínica electrónica o comunicación), se suscribirán los acuerdos de transmisión de datos que sean necesarios para garantizar el adecuado tratamiento y protección de la información.
            </p>
          </div>

          {/* Sección 7 */}
          <div>
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">7. Vigencia</h2>
            <p>
              Las bases de datos y la presente Política de Tratamiento de Datos Personales tendrán vigencia a partir de su publicación en este sitio web y mientras el consultorio del Dr. Willmer Obregón continúe desarrollando sus actividades de atención médica o exista una obligación legal de conservar la información.
            </p>
            <p className="mt-3">
              Cualquier cambio sustancial en esta política será comunicado a través de la página web www.internistamedellin.com y/o de los canales oficiales de contacto del consultorio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
