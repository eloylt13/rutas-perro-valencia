import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatDificultad,
  formatZona,
  getRutasByZona,
  getZonaBySlug,
  getZonaSlug,
  getZonas,
  sanitizeText
} from "@/lib/rutas";

type ZonaPageProps = {
  params: {
    zona: string;
  };
};

export function generateStaticParams() {
  return getZonas().map((zona) => ({
    zona: getZonaSlug(zona)
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params
}: ZonaPageProps): Promise<Metadata> {
  const zona = getZonaBySlug(params.zona);

  if (!zona) {
    return {
      title: "Zona no encontrada"
    };
  }

  return {
    title: `Rutas en ${formatZona(zona)}`,
    description: `Listado de rutas con perro en ${formatZona(zona)}.`
  };
}

export default function ZonaPage({ params }: ZonaPageProps) {
  const zona = getZonaBySlug(params.zona);

  if (!zona) {
    notFound();
  }

  const rutas = getRutasByZona(zona);

  if (rutas.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section className="panel px-6 py-8 sm:px-8">
        <Link href="/" className="text-sm font-semibold text-bosque hover:text-grafito">
          ← Volver al inicio
        </Link>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">
          Zona
        </p>
        <h2 className="mt-2 text-3xl font-bold text-bosque">{formatZona(zona)}</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-grafito/80">
          {rutas.length} rutas disponibles para esta zona, con acceso rápido a la ficha
          individual de cada recorrido.
        </p>
      </section>

      <section className="route-grid">
        {rutas.map((ruta) => (
          <Link key={ruta.slug} href={`/rutas/${ruta.slug}`} className="panel p-5 hover:border-bosque/35">
            <div className="flex flex-wrap gap-2">
              <span className="chip border-bosque/15 bg-bosque/5 text-bosque">
                {formatDificultad(ruta.dificultad)}
              </span>
              <span className="chip border-rio/25 bg-rio/10 text-rio">{ruta.acceso_desde_valencia_min} min</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-bosque">{sanitizeText(ruta.nombre)}</h3>
            <p className="mt-3 text-sm leading-6 text-grafito/75">{sanitizeText(ruta.notas)}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
