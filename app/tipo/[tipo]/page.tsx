import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import {
  buildBreadcrumbJsonLd,
  formatDificultad,
  getRutasByTipo,
  getTipoDescription,
  getTipoLabel,
  getTipoSeoTitle,
  isTipoSoportado,
  sanitizeText,
  TIPOS_SOPORTADOS
} from "@/lib/rutas";

type TipoPageProps = {
  params: {
    tipo: string;
  };
};

export function generateStaticParams() {
  return TIPOS_SOPORTADOS.map((tipo) => ({
    tipo
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params
}: TipoPageProps): Promise<Metadata> {
  if (!isTipoSoportado(params.tipo)) {
    return {
      title: "Tipo no encontrado"
    };
  }

  return {
    metadataBase: new URL("https://rutasperrovalencia.es"),
    title: getTipoSeoTitle(params.tipo),
    description: getTipoDescription(params.tipo),
    alternates: {
      canonical: `/tipo/${params.tipo}`
    }
  };
}

export default function TipoPage({ params }: TipoPageProps) {
  if (!isTipoSoportado(params.tipo)) {
    notFound();
  }

  const rutas = getRutasByTipo(params.tipo);

  if (rutas.length === 0) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: getTipoLabel(params.tipo) }
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(
    breadcrumbItems.map((item) => ({
      name: item.label,
      href: item.href
    }))
  );

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="panel px-6 py-8 sm:px-8">
        <Breadcrumb items={breadcrumbItems} />
        <Link href="/" className="mt-4 inline-flex text-sm font-semibold text-bosque hover:text-grafito">
          ← Volver al inicio
        </Link>
        <h1 className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">
          {getTipoSeoTitle(params.tipo)}
        </h1>
        <h2 className="mt-2 text-3xl font-bold text-bosque">{getTipoLabel(params.tipo)}</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-grafito/80">
          {getTipoDescription(params.tipo)}
        </p>
      </section>

      <section className="route-grid">
        {rutas.map((ruta) => (
          <Link key={ruta.slug} href={`/rutas/${ruta.slug}`} className="panel p-5 hover:border-bosque/35">
            <div className="flex flex-wrap gap-2">
              <span className="chip border-rio/25 bg-rio/10 text-rio">{ruta.zona}</span>
              <span className="chip border-bosque/15 bg-bosque/5 text-bosque">
                {formatDificultad(ruta.dificultad)}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-bosque">{sanitizeText(ruta.nombre)}</h3>
            <p className="mt-3 text-sm leading-6 text-grafito/75">{sanitizeText(ruta.notas)}</p>
            <p className="mt-4 text-sm font-semibold text-bosque">
              Acceso desde Valencia: {ruta.acceso_desde_valencia_min} min
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
