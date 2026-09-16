"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useRef } from "react";
import type { ReactNode } from "react";

type LocateHandler = () => void;

const MapaRutas = dynamic(() => import("@/components/MapaRutas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[260px] items-center justify-center text-sm text-grafito/70 sm:h-[340px]">
      Cargando mapa...
    </div>
  )
});

export default function MapaTeaserSection({ promo }: { promo: ReactNode }) {
  const locateHandlerRef = useRef<LocateHandler | null>(null);
  const registerLocateHandler = useCallback((handler: LocateHandler | null) => {
    locateHandlerRef.current = handler;
  }, []);

  return (
    <div className="space-y-4 md:grid md:grid-cols-[minmax(0,1fr)_320px] md:items-start md:gap-x-5 md:gap-y-5 md:space-y-0 md:overflow-hidden md:rounded-3xl md:border md:border-white/70 md:bg-white/80 md:px-6 md:py-7 md:shadow-card md:backdrop-blur lg:px-8">
      <div className="order-1 md:col-start-2 md:row-start-1">{promo}</div>
      <section className="panel order-2 overflow-hidden px-6 py-7 sm:px-8 md:contents">
        <div className="flex flex-col items-start gap-2 md:col-start-1 md:row-start-1">
          <h2 className="text-2xl font-bold text-bosque">📍 Rutas cerca de mí</h2>
          <p className="text-sm leading-6 text-grafito/75">
            Activa tu ubicación para descubrir las rutas más cercanas, ordenadas por distancia.
          </p>
          <Link
            href="/mapa"
            className="shrink-0 whitespace-nowrap text-sm font-semibold text-bosque hover:text-grafito"
          >
            {"Abrir mapa completo \u2192"}
          </Link>
          <button
            type="button"
            onClick={() => locateHandlerRef.current?.()}
            className="hidden items-center justify-center self-start whitespace-nowrap rounded-full bg-bosque px-5 py-3 text-sm font-semibold text-white transition hover:bg-grafito md:inline-flex"
          >
            📍 Usar mi ubicación
          </button>
        </div>
        <div className="mt-5 md:col-span-2 md:row-start-2 md:mt-0">
          <MapaRutas variant="home" onLocateReady={registerLocateHandler} />
        </div>
      </section>
    </div>
  );
}
