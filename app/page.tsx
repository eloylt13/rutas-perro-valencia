import type { Metadata } from "next";
import Link from "next/link";
import {
  getRutas,
  getTipoDescription,
  getTipoLabel,
  getZonas,
  getZonaSlug,
  TIPOS_SOPORTADOS
} from "@/lib/rutas";

export const metadata: Metadata = {
  metadataBase: new URL("https://rutasperrovalencia.es"),
  title: "Rutas con perro cerca de Valencia",
  description: "Rutas verificadas, mapa y filtros para salir con perro cerca de Valencia.",
  alternates: {
    canonical: "/"
  }
};

const featureItems = [
  {
    title: "Rutas verificadas",
    description: "Consulta fichas con datos de acceso, dificultad, agua, sombra y notas útiles para salir con perro."
  },
  {
    title: "Explora por zona",
    description: "Encuentra rápidamente áreas como Los Serranos, la Calderona o la Ribera Alta."
  },
  {
    title: "Filtra por necesidad",
    description: "Accede a selecciones de rutas con agua, fáciles o especialmente cerca de Valencia."
  }
];

export default function HomePage() {
  const rutas = getRutas();
  const zonas = getZonas();
  const destacadas = rutas.slice(0, 6);

  return (
    <div className="space-y-10">
      <section className="panel px-6 py-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-5">
            <span className="chip border-sol/40 bg-sol/15 text-bosque">
              25 rutas verificadas y clasificadas
            </span>
            <div className="space-y-3">
              <h1 className="text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">
                Rutas con perro en Valencia
              </h1>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-bosque sm:text-4xl">
                Escapadas perrunas para playa, monte y riberas a un salto de Valencia.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-grafito/80">
                Este proyecto organiza rutas reales con información útil para decidir dónde ir según
                tiempo de acceso, agua, dificultad o zona.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/rutas"
                className="rounded-full bg-bosque px-5 py-3 text-sm font-semibold text-white hover:bg-grafito"
              >
                Ver todas las rutas
              </Link>
              <Link
                href="/mapa"
                className="rounded-full border border-bosque/20 px-5 py-3 text-sm font-semibold text-bosque hover:border-bosque/50"
              >
                Ir al mapa
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {featureItems.map((item) => (
              <article key={item.title} className="rounded-3xl border border-bosque/10 bg-bosque/5 p-5">
                <h3 className="text-lg font-semibold text-bosque">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-grafito/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="panel px-6 py-7 sm:px-8">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">
                Tipos destacados
              </p>
              <h2 className="mt-2 text-2xl font-bold text-bosque">Entradas rápidas por necesidad</h2>
            </div>
          </div>
          <div className="grid gap-4">
            {TIPOS_SOPORTADOS.map((tipo) => (
              <Link
                key={tipo}
                href={`/tipo/${tipo}`}
                className="rounded-3xl border border-bosque/10 bg-white px-5 py-4 hover:border-bosque/35"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-bosque">{getTipoLabel(tipo)}</h3>
                    <p className="mt-1 text-sm text-grafito/75">{getTipoDescription(tipo)}</p>
                  </div>
                  <span className="text-2xl text-bosque/35">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div id="zonas" className="panel px-6 py-7 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">
            Explorar por zona
          </p>
          <h2 className="mt-2 text-2xl font-bold text-bosque">Comarcas y áreas disponibles</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {zonas.map((zona) => (
              <Link
                key={zona}
                href={`/zona/${getZonaSlug(zona)}`}
                className="rounded-full border border-bosque/15 bg-white px-4 py-2 text-sm font-medium text-grafito hover:border-bosque/40 hover:text-bosque"
              >
                {zona}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">
              Primeras rutas
            </p>
            <h2 className="mt-2 text-2xl font-bold text-bosque">Selección inicial del catálogo</h2>
          </div>
          <Link href="/rutas" className="text-sm font-semibold text-bosque hover:text-grafito">
            Ver catálogo completo
          </Link>
        </div>
        <div className="route-grid">
          {destacadas.map((ruta) => (
            <Link
              key={ruta.slug}
              href={`/rutas/${ruta.slug}`}
              className="panel p-5 hover:border-bosque/35"
            >
              <div className="flex flex-wrap gap-2">
                <span className="chip border-rio/25 bg-rio/10 text-rio">{ruta.zona}</span>
                <span className="chip border-bosque/15 bg-bosque/5 text-bosque">{ruta.tipo_ruta}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-bosque">{ruta.nombre}</h3>
              <p className="mt-3 text-sm leading-6 text-grafito/75">{ruta.notas}</p>
              <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
                <div>
                  <dt className="text-grafito/55">Distancia</dt>
                  <dd className="font-semibold text-bosque">{ruta.distancia_km} km</dd>
                </div>
                <div>
                  <dt className="text-grafito/55">Desnivel</dt>
                  <dd className="font-semibold text-bosque">{ruta.desnivel_m} m</dd>
                </div>
                <div>
                  <dt className="text-grafito/55">Acceso</dt>
                  <dd className="font-semibold text-bosque">{ruta.acceso_desde_valencia_min} min</dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
