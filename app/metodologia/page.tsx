import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { buildBreadcrumbJsonLd } from "@/lib/rutas";

export const metadata: Metadata = {
  metadataBase: new URL("https://rutasperrovalencia.es"),
  title: "Cómo verificamos las rutas | Rutas Perro Valencia",
  description:
    "Explicamos cómo revisamos cada ficha, qué fuentes consultamos y qué significan los niveles de confianza de las rutas.",
  alternates: {
    canonical: "/metodologia"
  }
};

const confidenceLevels = [
  {
    title: "✅ Verificado",
    description: "Datos contrastados en Wikiloc, AllTrails o fuentes oficiales."
  },
  {
    title: "🟡 Probable",
    description: "Datos con alta fiabilidad, pero no verificados in situ."
  },
  {
    title: "🔴 Pendiente",
    description: "Datos sin verificar que pueden contener inexactitudes."
  }
] as const;

const sources = [
  "Wikiloc",
  "AllTrails",
  "Webs de turismo municipal",
  "Generalitat Valenciana (senderisme.gva.es y similares)"
] as const;

export default function MetodologiaPage() {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Cómo verificamos las rutas" }
  ];
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Inicio", href: "/" },
    { name: "Cómo verificamos las rutas", href: "/metodologia" }
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
          <span className="chip border-sol/40 bg-sol/15 text-bosque">Metodología editorial</span>
          <div>
            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-bosque sm:text-4xl">
              Cómo verificamos las rutas
            </h1>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-grafito/80">
              Cada ficha intenta dejar claro qué datos están contrastados, qué nivel de fiabilidad
              tienen y desde qué fuentes se ha revisado la información antes de publicar o
              actualizar una ruta.
            </p>
          </div>
        </div>
      </section>

      <section className="panel px-6 py-8 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-bosque">Niveles de confianza</h2>
          <p className="mt-3 text-base leading-7 text-grafito/80">
            Usamos un nivel de confianza visible en cada ficha para que puedas valorar rápidamente
            cuánto se ha podido contrastar la información disponible.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {confidenceLevels.map((level) => (
            <article
              key={level.title}
              className="rounded-3xl border border-bosque/10 bg-bosque/5 p-5"
            >
              <h3 className="text-lg font-semibold text-bosque">{level.title}</h3>
              <p className="mt-2 text-sm leading-6 text-grafito/75">{level.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel px-6 py-8 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-bosque">Fuentes que consultamos</h2>
          <p className="mt-3 text-base leading-7 text-grafito/80">
            Contrastamos la información con plataformas de rutas y fuentes institucionales para
            reducir errores en acceso, trazado, estado general o condiciones de uso.
          </p>
        </div>

        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {sources.map((source) => (
            <li
              key={source}
              className="rounded-3xl border border-bosque/10 bg-white px-5 py-4 text-base font-medium text-grafito"
            >
              {source}
            </li>
          ))}
        </ul>
      </section>

      <section className="panel px-6 py-8 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-bosque">Frecuencia de revisión y errores</h2>
          <p className="mt-3 text-base leading-7 text-grafito/80">
            Las fichas se revisan periódicamente para actualizar datos prácticos y detectar cambios
            relevantes en accesos, estado del entorno o fiabilidad de la información publicada.
          </p>
          <p className="mt-3 text-base leading-7 text-grafito/80">
            Si detectas un error, puedes avisarnos desde el formulario de reporte disponible en cada
            ficha de ruta para que podamos revisarlo y corregirlo.
          </p>
        </div>
      </section>
    </div>
  );
}
