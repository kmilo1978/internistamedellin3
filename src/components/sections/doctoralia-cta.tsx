const DoctoraliaCta = () => {
  return (
    <section className="container py-10 md:py-16">
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

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#00B4B4]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#00B4B4]/5 blur-3xl" />
      </div>
    </section>
  );
};

export default DoctoraliaCta;
