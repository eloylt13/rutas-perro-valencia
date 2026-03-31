import dynamic from "next/dynamic";
import Link from "next/link";

const MapaRutas = dynamic(() => import("@/components/MapaRutas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[260px] items-center justify-center text-sm text-grafito/70 sm:h-[340px]">
      Cargando mapa...
    </div>
  )
});

export default function MapaTeaserSection() {
  return (
    <section className="panel overflow-hidden px-6 py-7 sm:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-bosque">📍 Rutas cerca de mí</h2>
          <p className="mt-2 text-sm leading-6 text-grafito/75">
            Activa tu ubicación para descubrir las rutas más cercanas, ordenadas por distancia.
          </p>
        </div>
        <Link
          href="/mapa"
          className="shrink-0 text-sm font-semibold text-bosque hover:text-grafito"
        >
          {"Abrir mapa completo \u2192"}
        </Link>
      </div>
      <div className="mt-5">
        <MapaRutas variant="home" />
      </div>
    </section>
  );
}
