import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AcordeonComoLlegar from "@/components/AcordeonComoLlegar";
import Breadcrumb from "@/components/Breadcrumb";
import FormularioReporte from "@/components/FormularioReporte";
import { getContenidoRuta } from "@/data/contenido-rutas";
import {
  buildBreadcrumbJsonLd,
  formatDificultad,
  formatZona,
  getRutaBySlug,
  getRutas,
  getZonaSlug,
  sanitizeText
} from "@/lib/rutas";
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

const affiliateLinkClassName =
  "inline-flex items-center gap-1 text-sm font-semibold text-bosque no-underline hover:underline underline-offset-4";

type AffiliateSuggestion = {
  key: string;
  message: string;
  href: string;
  label: string;
};

function getRutaImagePath(slug: string): string | null {
  const relativePath = `/img/rutas/${slug}.jpg`;
  const absolutePath = path.join(process.cwd(), "public", "img", "rutas", `${slug}.jpg`);

  return fs.existsSync(absolutePath) ? relativePath : null;
}

function buildDescription(ruta: Ruta): string {
  const contenido = getContenidoRuta(ruta.slug);

  if (contenido) {
    return contenido.resumen;
  }

  return `${sanitizeText(ruta.nombre)} en ${formatZona(ruta.zona)}. ${ruta.distancia_km} km, dificultad ${formatDificultad(ruta.dificultad)}, acceso desde Valencia en ${ruta.acceso_desde_valencia_min} minutos.`;
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
    metadataBase: new URL("https://rutasperrovalencia.es"),
    title: `${sanitizeText(ruta.nombre)} | ${formatZona(ruta.zona)}`,
    description: buildDescription(ruta),
    openGraph: {
      title: `Ruta ${sanitizeText(ruta.nombre)} con perro en Valencia`,
      description: buildDescription(ruta),
      url: `https://rutasperrovalencia.es/rutas/${ruta.slug}`,
      type: "article"
    },
    alternates: {
      canonical: `/rutas/${params.slug}`
    }
  };
}

export default function RutaDetailPage({ params }: RutaPageProps) {
  const ruta = getRutaBySlug(params.slug);

  if (!ruta) {
    notFound();
  }

  const [latitude, longitude] = ruta.coordenadas_inicio;
  const comoLlegar = ruta.como_llegar?.trim();
  const contenido = getContenidoRuta(ruta.slug);
  const description = buildDescription(ruta);
  const descripcionParrafos = contenido?.descripcion.split("\n\n") ?? [];
  const isPendiente = ruta.confianza_dato.toLowerCase() === "pendiente";
  const imagePath = getRutaImagePath(ruta.slug);
  const photoLicense = ruta.foto_credito?.match(/\(([^)]+)\)/)?.[1];
  const affiliateSuggestions: AffiliateSuggestion[] = [];

  if (!ruta.agua) {
    affiliateSuggestions.push({
      key: "water",
      message:
        "Sin fuentes en el recorrido, lleva agua suficiente para tu perro.",
      href: "https://amzn.to/4uXEM8I",
      label: "Este es el que llevamos →"
    });
  }

  if (ruta.correa_obligatoria) {
    affiliateSuggestions.push({
      key: "harness",
      message:
        "La correa es obligatoria en esta ruta. Un arnés cómodo marca la diferencia en recorridos largos.",
      href: "https://amzn.to/4uVULUN",
      label: "Este es el que usamos →"
    });
  }

  if (ruta.dificultad.toLowerCase() === "media" && ruta.acceso_desde_valencia_min > 60) {
    affiliateSuggestions.push({
      key: "first-aid",
      message:
        "En rutas alejadas conviene llevar un kit básico de primeros auxilios para perros.",
      href: "https://amzn.to/4tbVSOn",
      label: "Este es el que llevamos →"
    });
  }

  const visibleAffiliateSuggestions = affiliateSuggestions.slice(0, 2);
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Rutas", href: "/rutas" },
    { label: sanitizeText(ruta.nombre) }
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(
    breadcrumbItems.map((item) => ({
      name: item.label,
      href: item.href
    }))
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: sanitizeText(ruta.nombre),
    description,
    touristType: "Senderismo con perro",
    address: {
      "@type": "PostalAddress",
      addressLocality: formatZona(ruta.zona),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="panel px-6 py-8 sm:px-8">
        <Breadcrumb items={breadcrumbItems} />
        <div className="mt-4">
          {imagePath ? (
            <>
              <Image
                src={imagePath}
                alt={`${sanitizeText(ruta.nombre)} con perro en Valencia`}
                width={800}
                height={450}
                className="w-full rounded-lg object-cover"
                priority
              />
              {photoLicense ? (
                <p className="mt-2 text-sm text-grafito/60">Foto: Wikimedia Commons ({photoLicense})</p>
              ) : null}
            </>
          ) : (
            <div className="flex min-h-[240px] items-center justify-center rounded-lg bg-stone-100 px-6 py-12 text-center text-xl font-semibold text-bosque/70">
              {sanitizeText(ruta.nombre)}
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="chip border-rio/25 bg-rio/10 text-rio">{formatZona(ruta.zona)}</span>
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
            <h1 className="text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">
              Ruta {sanitizeText(ruta.nombre)} con perro en Valencia
            </h1>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-bosque sm:text-4xl">
              {sanitizeText(ruta.nombre)}
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-grafito/80">{description}</p>
          </div>
        </div>
      </section>

      {isPendiente ? (
        <section className="rounded-3xl border border-amber-300 bg-amber-100 px-6 py-5 text-amber-950 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
            Verificación pendiente
          </p>
          <p className="mt-2 text-base leading-7">
            Algunos datos de esta ruta están pendientes de verificación in situ. Conviene revisar el
            estado del recorrido antes de ir con tu perro.
          </p>
        </section>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
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
                <dd className="mt-1 text-lg font-semibold text-bosque">
                  {formatDificultad(ruta.dificultad)}
                </dd>
              </div>
              <div className="rounded-2xl bg-bosque/5 p-4">
                <dt className="text-sm text-grafito/60">Desde Valencia en coche</dt>
                <dd className="mt-1 text-lg font-semibold text-bosque">
                  {ruta.acceso_desde_valencia_min} min
                </dd>
              </div>
              <div className="rounded-2xl bg-bosque/5 p-4">
                <dt className="text-sm text-grafito/60">Agua</dt>
                <dd className="mt-1 text-lg font-semibold text-bosque">{ruta.agua ? "\u{1F4A7} S\u00ED" : "\u{1F4A7} No"}</dd>
              </div>
              <div className="rounded-2xl bg-bosque/5 p-4">
                <dt className="text-sm text-grafito/60">Sombra</dt>
                <dd className="mt-1 text-lg font-semibold capitalize text-bosque">{ruta.sombra}</dd>
              </div>
              <div className="rounded-2xl bg-bosque/5 p-4">
                <dt className="text-sm text-grafito/60">Parking</dt>
                <dd className="mt-1 text-lg font-semibold text-bosque">
                  {ruta.parking ? "Disponible" : "No indicado"}
                </dd>
              </div>
              <div className="rounded-2xl bg-bosque/5 p-4">
                <dt className="text-sm text-grafito/60">Correa</dt>
                <dd className="mt-1 text-lg font-semibold text-bosque">
                  {ruta.correa_obligatoria ? "\u{1F534} Obligatoria" : "\u{1F7E2} No obligatoria"}
                </dd>
              </div>
              <div className="rounded-2xl bg-bosque/5 p-4 sm:col-span-2">
                <dt className="text-sm text-grafito/60">Coordenadas</dt>
                <dd className="mt-1 text-lg font-semibold text-bosque">
                  {latitude}, {longitude}
                </dd>
                <AcordeonComoLlegar
                  latitude={latitude}
                  longitude={longitude}
                  comoLlegar={comoLlegar}
                />
              </div>
            </dl>
          </article>

          {contenido ? (
            <>
              <article className="panel px-6 py-7 sm:px-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
                      <span aria-hidden="true">{"\u2713"}</span>
                      <span>Lo mejor</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-[13px] font-normal leading-6 text-grafito/80 sm:text-sm">
                      {contenido.mejor.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-0.5 text-emerald-600">
                            {"\u2713"}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-rose-800">
                      <span aria-hidden="true">{"\u2717"}</span>
                      <span>Lo peor</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-[13px] font-normal leading-6 text-grafito/80 sm:text-sm">
                      {contenido.peor.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-0.5 text-rose-600">
                            {"\u2717"}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              <article className="panel px-6 py-7 sm:px-8">
                <h3 className="text-xl font-semibold text-bosque">Descripción</h3>
                <div className="mt-4 space-y-4 text-base leading-7 text-grafito/80">
                  {descripcionParrafos.map((parrafo) => (
                    <p key={parrafo}>{parrafo}</p>
                  ))}
                </div>
              </article>

              <article className="panel px-6 py-7 sm:px-8">
                <h3 className="text-xl font-semibold text-bosque">Consejos para ir con tu perro</h3>
                <ol className="mt-4 space-y-3 pl-6 text-base leading-7 text-grafito/80">
                  {contenido.consejos.map((consejo) => (
                    <li key={consejo} className="list-decimal">
                      {consejo}
                    </li>
                  ))}
                </ol>
                {visibleAffiliateSuggestions.length > 0 ? (
                  <div className="mt-5 space-y-4 border-t border-bosque/10 pt-4 text-grafito/80">
                    {visibleAffiliateSuggestions.map((suggestion) => (
                      <div key={suggestion.key} className="space-y-2">
                        <p className="text-base leading-7">{suggestion.message}</p>
                        <a
                          href={suggestion.href}
                          target="_blank"
                          rel="nofollow sponsored"
                          className={affiliateLinkClassName}
                        >
                          {suggestion.label}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>

              <article className="panel border border-amber-200 bg-amber-50 px-6 py-7 sm:px-8">
                <h3 className="text-xl font-semibold text-amber-950">Advertencias</h3>
                <p className="mt-4 text-base leading-7 text-amber-900">{contenido.advertencias}</p>
              </article>
            </>
          ) : (
            <article className="panel px-6 py-7 sm:px-8">
              <h3 className="text-xl font-semibold text-bosque">Notas de la ruta</h3>
              <p className="mt-4 text-base leading-7 text-grafito/80">{sanitizeText(ruta.notas)}</p>
            </article>
          )}
        </div>

        <aside className="space-y-6">
          {contenido ? (
            <>
              <article className="panel px-6 py-7 sm:px-8">
                <h3 className="text-xl font-semibold text-bosque">Mejor época</h3>
                <p className="mt-4 text-base leading-7 text-grafito/80">{contenido.mejorEpoca}</p>
              </article>

              <article className="panel px-6 py-7 sm:px-8">
                <h3 className="text-xl font-semibold text-bosque">Preguntas frecuentes</h3>
                <div className="mt-4 space-y-3">
                  {contenido.faq.map((item) => (
                    <div
                      key={item.pregunta}
                      className="rounded-2xl border border-bosque/10 bg-bosque/5 px-4 py-3"
                    >
                      <p className="font-semibold text-bosque">{item.pregunta}</p>
                      <p className="mt-3 text-sm leading-6 text-grafito/80">{item.respuesta}</p>
                    </div>
                  ))}
                </div>
              </article>

              <FormularioReporte nombreRuta={ruta.nombre} />
            </>
          ) : null}

          <article className="panel px-6 py-7 sm:px-8">
            <h3 className="text-xl font-semibold text-bosque">Explorar más</h3>
            <div className="mt-4 grid gap-3">
              <Link
                href={`/zona/${getZonaSlug(ruta.zona)}`}
                className="rounded-2xl border border-bosque/10 bg-white px-4 py-3 font-semibold text-bosque hover:border-bosque/35"
              >
                Ver más rutas en {formatZona(ruta.zona)}
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