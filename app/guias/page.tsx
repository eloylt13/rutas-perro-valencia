import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildBreadcrumbJsonLd } from "@/lib/rutas";

export const metadata: Metadata = {
  metadataBase: new URL("https://rutasperrovalencia.es"),
  title: "Guías para salir con tu perro en Valencia",
  description:
    "Guías prácticas para planificar salidas con tu perro en Valencia, evitar riesgos y elegir rutas según el tiempo de acceso.",
  alternates: {
    canonical: "/guias"
  }
};

const guideCards = [
  {
    title: "Procesionaria del pino: peligro real para tu perro",
    href: "/guias/procesionaria-perros",
    description: "Qué es, síntomas, qué hacer y rutas de menor riesgo en Valencia"
  },
  {
    title: "Rutas cerca de Valencia por tiempo de acceso",
    href: "/guias/cerca-de-valencia",
    description: "Las mejores escapadas organizadas por minutos desde Valencia"
  }
] as const;

export default function GuiasIndexPage() {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Guías" }
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Inicio", href: "/" },
    { name: "Guías", href: "/guias" }
  ]);

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="panel px-6 py-8 sm:px-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-5 space-y-4">
          <span className="chip border-sol/40 bg-sol/15 text-bosque">Guías para salidas dog-friendly</span>
          <div>
            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-bosque sm:text-4xl">
              Guías para salir con tu perro en Valencia
            </h1>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-grafito/80">
              Aquí reunimos guías prácticas para ayudarte a escoger mejor cada salida, anticipar
              riesgos y encontrar rutas que encajen con el tiempo disponible.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {guideCards.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="panel flex h-full flex-col p-6 hover:border-bosque/35"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">Guía</p>
            <h2 className="mt-3 text-2xl font-bold text-bosque">{guide.title}</h2>
            <p className="mt-3 text-base leading-7 text-grafito/80">{guide.description}</p>
            <span className="mt-6 text-sm font-semibold text-bosque">Abrir guía →</span>
          </Link>
        ))}
      </section>
    </div>
  );
}