"use client";

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="relative max-w-lg w-full text-center bg-white/80 backdrop-blur-md rounded-[2rem] p-10 md:p-14 shadow-sm border border-white/40">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#1080A0]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#E1F1F6]/40 blur-3xl" />

        <div className="relative z-10">
          <p className="text-[7rem] md:text-[9rem] font-extrabold leading-none text-[#1080A0]/15 select-none">
            500
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] -mt-6 mb-4">
            Algo salió mal
          </h1>
          <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-8">
            Ocurrió un error inesperado. Nuestro equipo ya fue notificado. Puedes intentar de nuevo o volver al inicio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-8 py-4 text-base font-medium text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2"
            >
              Intentar de nuevo
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E1F1F6] px-8 py-4 text-base font-medium text-[#1080A0] transition-colors hover:bg-[#D1E9F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2"
            >
              Volver al Inicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
