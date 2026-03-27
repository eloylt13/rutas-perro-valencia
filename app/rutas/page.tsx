import type { Metadata } from "next";
import Link from "next/link";
import { formatDificultad, formatZona, getRutas, sanitizeText } from "@/lib/rutas";

export const metadata: Metadata = {
  metadataBase: new URL("https://rutasperrovalencia.es"),
  title: "Todas las rutas",
  description: "Listado completo de rutas para ir con perro cerca de Valencia.",
  alternates: {
    canonical: "/rutas"
  }
};

export default function RutasPage() {
  const rutas = getRutas();

  return (
    <div className="space-y-6">
      <section className="panel px-6 py-8 sm:px-8">
        <h1 className="text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">
          Rutas con perro en Valencia provincia
        </h1>
        <h2 className="mt-2 text-3xl font-bold text-bosque">Todas las rutas disponibles</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-grafito/80">
          Cada ficha incluye zona, dificultad, agua, cercanía a Valencia y notas prácticas para
          preparar la salida con tu perro.
        </p>
      </section>

      <section className="route-grid">
        {rutas.map((ruta) => (
          <Link key={ruta.slug} href={`/rutas/${ruta.slug}`} className="panel p-5 hover:border-bosque/35">
            <div className="flex flex-wrap gap-2">
              <span className="chip border-rio/25 bg-rio/10 text-rio">{formatZona(ruta.zona)}</span>
              <span className="chip border-bosque/15 bg-bosque/5 text-bosque">
                {formatDificultad(ruta.dificultad)}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-bosque">{sanitizeText(ruta.nombre)}</h3>
            <p className="mt-3 text-sm leading-6 text-grafito/75">{sanitizeText(ruta.notas)}</p>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm lg:grid-cols-5">
              <div>
                <dt className="text-grafito/55">Distancia</dt>
                <dd className="font-semibold text-bosque">{ruta.distancia_km} km</dd>
              </div>
              <div>
                <dt className="text-grafito/55">Tipo</dt>
                <dd className="font-semibold capitalize text-bosque">{ruta.tipo_ruta}</dd>
              </div>
              <div>
                <dt className="text-grafito/55">Desde Valencia en coche</dt>
                <dd className="font-semibold text-bosque">{ruta.acceso_desde_valencia_min} min</dd>
              </div>
              <div>
                <dt className="text-grafito/55">Agua</dt>
                <dd className="font-semibold text-bosque">{ruta.agua ? "💧 Sí" : "✗ No"}</dd>
              </div>
              <div>
                <dt className="text-grafito/55">Correa</dt>
                <dd className="font-semibold text-bosque">
                  {ruta.correa_obligatoria ? "🔴 Sí obligatoria" : "✓ No obligatoria"}
                </dd>
              </div>
            </dl>
          </Link>
        ))}
      </section>
    </div>
  );
}
