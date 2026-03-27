import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRutaBySlug, getRutas, getZonaSlug } from "@/lib/rutas";
import type { Ruta } from "@/types/ruta";

type RutaPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getRutas().map((ruta) => ({
    slug: ruta.slug
  }));
}

export const dynamicParams = false;

function buildDescription(ruta: Ruta): string {
  return `${ruta.nombre} en ${ruta.zona}. ${ruta.distancia_km} km, dificultad ${ruta.dificultad}, acceso desde Valencia en ${ruta.acceso_desde_valencia_min} minutos.`;
}

function getConfidenceBadgeStyles(confianza: string): string {
  switch (confianza.toLowerCase()) {
    case "verificado":
      return "border-emerald-200 bg-emerald-50 text-emerald-800";
    case "probable":
      return "border-amber-200 bg-amber-50 text-amber-800";
    case "pendiente":
      return "border-slate-200 bg-slate-50 text-slate-700";
    default:
      return "border-bosque/15 bg-bosque/5 text-bosque";
  }
}

export async function generateMetadata({
  params
}: RutaPageProps): Promise<Metadata> {
  const ruta = getRutaBySlug(params.slug);

  if (!ruta) {
    return {
      title: "Ruta no encontrada"
    };
  }

  return {
    title: `${ruta.nombre} | ${ruta.zona}`,
    description: buildDescription(ruta)
  };
}

export default function RutaDetailPage({ params }: RutaPageProps) {
  const ruta = getRutaBySlug(params.slug);

  if (!ruta) {
    notFound();
  }

  const [latitude, longitude] = ruta.coordenadas_inicio;
  const description = buildDescription(ruta);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: ruta.nombre,
    description,
    touristType: "Senderismo con perro",
    address: {
      "@type": "PostalAddress",
      addressLocality: ruta.zona,
      addressRegion: "Valencia"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude
    }
  };

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="panel px-6 py-8 sm:px-8">
        <div className="flex flex-wrap gap-3">
          <span className="chip border-rio/25 bg-rio/10 text-rio">{ruta.zona}</span>
          <span className="chip border-bosque/15 bg-bosque/5 text-bosque capitalize">
            {ruta.tipo_ruta}
          </span>
          <span className={`chip capitalize ${getConfidenceBadgeStyles(ruta.confianza_dato)}`}>
            {ruta.confianza_dato}
          </span>
        </div>

        <div className="mt-5 space-y-4">
          <Link href="/rutas" className="text-sm font-semibold text-bosque hover:text-grafito">
            ← Volver al listado
          </Link>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-bosque sm:text-4xl">
              {ruta.nombre}
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-grafito/80">{description}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="panel px-6 py-7 sm:px-8">
          <h3 className="text-xl font-semibold text-bosque">Ficha rápida</h3>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-bosque/5 p-4">
              <dt className="text-sm text-grafito/60">Distancia</dt>
              <dd className="mt-1 text-lg font-semibold text-bosque">{ruta.distancia_km} km</dd>
            </div>
            <div className="rounded-2xl bg-bosque/5 p-4">
              <dt className="text-sm text-grafito/60">Desnivel</dt>
              <dd className="mt-1 text-lg font-semibold text-bosque">{ruta.desnivel_m} m</dd>
            </div>
            <div className="rounded-2xl bg-bosque/5 p-4">
              <dt className="text-sm text-grafito/60">Dificultad</dt>
              <dd className="mt-1 text-lg font-semibold text-bosque">{ruta.dificultad}</dd>
            </div>
            <div className="rounded-2xl bg-bosque/5 p-4">
              <dt className="text-sm text-grafito/60">Acceso desde Valencia</dt>
              <dd className="mt-1 text-lg font-semibold text-bosque">
                {ruta.acceso_desde_valencia_min} min
              </dd>
            </div>
            <div className="rounded-2xl bg-bosque/5 p-4">
              <dt className="text-sm text-grafito/60">Agua</dt>
              <dd className="mt-1 text-lg font-semibold text-bosque">
                {ruta.agua ? "Sí" : "No"}
              </dd>
            </div>
            <div className="rounded-2xl bg-bosque/5 p-4">
              <dt className="text-sm text-grafito/60">Sombra</dt>
              <dd className="mt-1 text-lg font-semibold text-bosque">{ruta.sombra}</dd>
            </div>
            <div className="rounded-2xl bg-bosque/5 p-4">
              <dt className="text-sm text-grafito/60">Parking</dt>
              <dd className="mt-1 text-lg font-semibold text-bosque">
                {ruta.parking ? "Disponible" : "No indicado"}
              </dd>
            </div>
            <div className="rounded-2xl bg-bosque/5 p-4">
              <dt className="text-sm text-grafito/60">Correa obligatoria</dt>
              <dd className="mt-1 text-lg font-semibold text-bosque">
                {ruta.correa_obligatoria ? "Sí" : "No"}
              </dd>
            </div>
            <div className="rounded-2xl bg-bosque/5 p-4">
              <dt className="text-sm text-grafito/60">Apta en verano</dt>
              <dd className="mt-1 text-lg font-semibold text-bosque">
                {ruta.apta_verano ? "Sí" : "No"}
              </dd>
            </div>
            <div className="rounded-2xl bg-bosque/5 p-4">
              <dt className="text-sm text-grafito/60">Coordenadas de inicio</dt>
              <dd className="mt-1 text-lg font-semibold text-bosque">
                {latitude}, {longitude}
              </dd>
            </div>
          </dl>
        </article>

        <aside className="space-y-6">
          <article className="panel px-6 py-7 sm:px-8">
            <h3 className="text-xl font-semibold text-bosque">Notas de la ruta</h3>
            <p className="mt-4 text-base leading-7 text-grafito/80">{ruta.notas}</p>
          </article>

          <article className="panel px-6 py-7 sm:px-8">
            <h3 className="text-xl font-semibold text-bosque">Explorar más</h3>
            <div className="mt-4 grid gap-3">
              <Link
                href={`/zona/${getZonaSlug(ruta.zona)}`}
                className="rounded-2xl border border-bosque/10 bg-white px-4 py-3 font-semibold text-bosque hover:border-bosque/35"
              >
                Ver más rutas en {ruta.zona}
              </Link>
              <Link
                href={`/tipo/${ruta.agua ? "con-agua" : "cerca-de-valencia"}`}
                className="rounded-2xl border border-bosque/10 bg-white px-4 py-3 font-semibold text-bosque hover:border-bosque/35"
              >
                {ruta.agua ? "Explorar rutas con agua" : "Explorar rutas cerca de Valencia"}
              </Link>
            </div>
          </article>
        </aside>
      </section>
    </div>
  );
}