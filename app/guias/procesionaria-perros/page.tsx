import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { getRutas, sanitizeText } from "@/lib/rutas";

export const metadata: Metadata = {
  metadataBase: new URL("https://rutasperrovalencia.es"),
  title: "Procesionaria del pino: peligro real para tu perro en Valencia",
  description:
    "Guía completa sobre la procesionaria del pino: síntomas en perros, qué hacer, temporada en Valencia y rutas de menor riesgo. Información veterinaria actualizada.",
  alternates: {
    canonical: "/guias/procesionaria-perros"
  }
};

const affiliateLinkClassName =
  "inline-flex items-center gap-1 text-sm font-semibold text-bosque no-underline hover:underline underline-offset-4";

const sections = [
  { id: "que-es", label: "¿Qué es la procesionaria del pino?" },
  { id: "por-que-peligrosa", label: "¿Por qué es tan peligrosa para los perros?" },
  { id: "sintomas", label: "Síntomas: cómo identificar una reacción" },
  { id: "que-hacer", label: "Qué hacer si tu perro toca una procesionaria" },
  { id: "temporada", label: "Temporada en Valencia" },
  { id: "nidos", label: "Cómo identificar los nidos" },
  { id: "rutas-bajo-riesgo", label: "Rutas con menor riesgo en Valencia" },
  { id: "consejos", label: "Consejos para salir seguro con tu perro" }
] as const;

export default function ProcesionariaPerrosPage() {
  const datePublished = new Date().toISOString();
  const rutasBajoRiesgo = getRutas()
    .filter((ruta) => ruta.riesgo_procesionaria.toLowerCase() === "bajo")
    .sort((rutaA, rutaB) =>
      sanitizeText(rutaA.nombre).localeCompare(sanitizeText(rutaB.nombre), "es")
    );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Procesionaria del pino: peligro real para tu perro en Valencia",
    datePublished,
    author: {
      "@type": "Organization",
      name: "rutasperrovalencia.es"
    }
  };

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="panel px-6 py-8 sm:px-8">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Guías" },
            { label: "Procesionaria" }
          ]}
        />

        <div className="mt-5 space-y-4">
          <span className="chip border-amber-300 bg-amber-100 text-amber-900">
            Guía de prevención para salidas con perro
          </span>
          <div>
            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-bosque sm:text-4xl">
              Procesionaria del pino: peligro real para tu perro
            </h1>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-grafito/80">
              Qué es, por qué puede provocar una urgencia veterinaria, cómo actuar si hay
              contacto y qué rutas de Valencia presentan menor riesgo según nuestro catálogo.
            </p>
          </div>
        </div>
      </section>

      <section className="panel px-6 py-7 sm:px-8">
        <h2 className="text-xl font-semibold text-bosque">Índice de contenidos</h2>
        <nav aria-label="Índice de contenidos" className="mt-4">
          <ol className="grid gap-3 sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block rounded-2xl border border-bosque/10 bg-bosque/5 px-4 py-3 font-medium text-bosque hover:border-bosque/35"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <article id="que-es" className="panel px-6 py-7 sm:px-8">
            <h2 className="text-2xl font-bold text-bosque">¿Qué es la procesionaria del pino?</h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-grafito/80">
              <p>
                La procesionaria del pino (Thaumetopoea pityocampa) es una oruga que constituye
                una de las plagas forestales más extendidas en los bosques mediterráneos. Debe su
                nombre a la característica fila india o "procesión" que forman las orugas cuando
                abandonan el nido y descienden del árbol para enterrarse en el suelo y completar su
                ciclo vital. Se alimentan de las acículas de diversas especies de pinos y cedros, y
                son fácilmente reconocibles por los grandes bolsones blancos de seda que construyen
                en las copas de los árboles.
              </p>
              <p>
                Lo que convierte a esta oruga en un verdadero peligro son los miles de pelos
                urticantes microscópicos que recubren su cuerpo. Estos pelos contienen una proteína
                llamada taumatopeína, una toxina que provoca reacciones alérgicas e inflamatorias
                intensas al contacto con la piel, las mucosas o los ojos de personas y animales. En
                España, la procesionaria está presente en prácticamente todo el territorio peninsular
                y Baleares, y supone un problema de salud pública recurrente cada invierno y
                primavera, especialmente en zonas con abundancia de pinares como la Comunitat
                Valenciana.
              </p>
            </div>
          </article>

          <article id="por-que-peligrosa" className="panel px-6 py-7 sm:px-8">
            <h2 className="text-2xl font-bold text-bosque">
              ¿Por qué es tan peligrosa para los perros?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-grafito/80">
              <p>
                Los perros son especialmente vulnerables a la procesionaria por su forma natural de
                explorar el entorno: olfateando y lamiendo el suelo. Al acercarse a una oruga o
                incluso a los restos de pelos urticantes que quedan en el suelo, en la hierba o
                arrastrados por el viento, los filamentos microscópicos se clavan en la lengua, el
                hocico, las encías y la mucosa oral del perro. La taumatopeína desencadena una
                reacción inflamatoria aguda que puede provocar necrosis del tejido afectado en
                cuestión de horas. La lengua, al ser la zona de contacto más frecuente y tener un
                tejido muy irrigado, es el órgano que sufre consecuencias más graves.
              </p>
              <p>
                Los síntomas aparecen de forma rápida, normalmente en los primeros 30 minutos tras el
                contacto. El perro empieza a hipersalivar de forma abundante, se rasca la boca con
                las patas, puede presentar inflamación visible de la lengua y los labios, y muestra
                inquietud y dolor evidente. En los casos más graves, la lengua se hincha tanto que
                puede dificultar la respiración, y si la necrosis avanza, el animal puede perder
                parte del tejido lingual. Sin tratamiento veterinario rápido, las complicaciones
                pueden incluir vómitos, dificultad respiratoria por inflamación de la glotis y, en
                casos extremos, un desenlace fatal.
              </p>
            </div>
          </article>

          <article id="sintomas" className="panel px-6 py-7 sm:px-8">
            <h2 className="text-2xl font-bold text-bosque">
              Síntomas: cómo identificar una reacción
            </h2>
            <ul className="mt-4 space-y-3 text-base leading-7 text-grafito/80">
              <li>
                <strong className="text-bosque">Inflamación severa de la lengua o la garganta:</strong>{" "}
                puede comprometer la respiración. Emergencia veterinaria inmediata.
              </li>
              <li>
                <strong className="text-bosque">Dificultad para respirar o ruidos al hacerlo:</strong>{" "}
                inflamación de vías aéreas. Emergencia veterinaria.
              </li>
              <li>
                <strong className="text-bosque">Hipersalivación intensa y repentina:</strong> síntoma
                más frecuente y primero en aparecer.
              </li>
              <li>
                <strong className="text-bosque">
                  El perro se rasca o frota la boca compulsivamente:
                </strong>{" "}
                intenta aliviar el dolor.
              </li>
              <li>
                <strong className="text-bosque">Lengua hinchada, amoratada o con zonas oscuras:</strong>{" "}
                inflamación intensa y posible necrosis.
              </li>
              <li>
                <strong className="text-bosque">Vómitos:</strong> si el perro ha ingerido parte de la
                oruga.
              </li>
              <li>
                <strong className="text-bosque">Inflamación de los ojos o la cara:</strong> contacto
                con pelos en zona ocular.
              </li>
              <li>
                <strong className="text-bosque">Decaimiento, fiebre o pérdida de apetito:</strong>{" "}
                síntomas generales en horas posteriores.
              </li>
            </ul>
          </article>

          <article id="que-hacer" className="panel border border-rose-200 bg-rose-50 px-6 py-7 sm:px-8">
            <h2 className="text-2xl font-bold text-rose-950">
              Qué hacer si tu perro toca una procesionaria
            </h2>
            <ol className="mt-4 space-y-3 pl-6 text-base leading-7 text-rose-900">
              <li className="list-decimal">
                Mantén la calma y aleja al perro de la zona inmediatamente.
              </li>
              <li className="list-decimal">
                NO le frotes la boca, la lengua ni ninguna zona afectada.
              </li>
              <li className="list-decimal">
                Lava la zona con agua abundante y templada, desde dentro hacia fuera.
              </li>
              <li className="list-none space-y-2 pl-0 text-grafito/80">
                <p>
                  Llevar siempre agua embotellada de sobra es imprescindible: sirve tanto
                  para hidratar como para lavar en caso de contacto. Un bebedero portátil
                  te lo facilita.
                </p>
                <a
                  href="https://amzn.to/4uXEM8I"
                  target="_blank"
                  rel="nofollow sponsored"
                  className={affiliateLinkClassName}
                >
                  Ver bebedero portátil →
                </a>
              </li>
              <li className="list-decimal">
                No le dejes lamerse, rascarse ni beber agua de charcos.
              </li>
              <li className="list-decimal">Acude al veterinario de urgencia lo antes posible.</li>
              <li className="list-decimal">
                Llama al veterinario de camino para que preparen el tratamiento.
              </li>
              <li className="list-decimal">
                No administres medicación por tu cuenta salvo indicación veterinaria.
              </li>
            </ol>
          </article>

          <article id="temporada" className="panel px-6 py-7 sm:px-8">
            <h2 className="text-2xl font-bold text-bosque">Temporada en Valencia</h2>
            <p className="mt-4 text-base leading-7 text-grafito/80">
              En la Comunitat Valenciana, la temporada de mayor riesgo se concentra entre enero y
              abril, siendo febrero y marzo los meses más críticos. El cambio climático está
              adelantando el ciclo: en los últimos años se han registrado procesiones desde finales
              de noviembre. Extrema la precaución desde noviembre hasta abril, y mantente alerta
              incluso fuera de estos meses en otoños cálidos.
            </p>
          </article>

          <article id="nidos" className="panel px-6 py-7 sm:px-8">
            <h2 className="text-2xl font-bold text-bosque">Cómo identificar los nidos</h2>
            <p className="mt-4 text-base leading-7 text-grafito/80">
              Los nidos son bolsones de seda blanca en las ramas de los pinos, generalmente en la
              parte alta de la copa y orientados al sur.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-grafito/80">
              <li>
                <strong className="text-bosque">Forma:</strong> bolsa redondeada, similar a una gran
                bola de algodón.
              </li>
              <li>
                <strong className="text-bosque">Color:</strong> blanco o blanco grisáceo cuando es
                reciente; amarillento con el tiempo.
              </li>
              <li>
                <strong className="text-bosque">Tamaño:</strong> desde el tamaño de una naranja hasta
                un balón de fútbol.
              </li>
              <li>
                <strong className="text-bosque">Ubicación:</strong> puntas de ramas de pinos, parte
                alta y soleada.
              </li>
              <li>
                <strong className="text-bosque">Textura:</strong> aspecto sedoso y compacto con hilos
                de seda entrecruzados.
              </li>
              <li>
                <strong className="text-bosque">Señales en el suelo:</strong> ramas defoliadas y
                excrementos oscuros bajo el árbol.
              </li>
            </ul>
          </article>

          <article id="rutas-bajo-riesgo" className="panel px-6 py-7 sm:px-8">
            <h2 className="text-2xl font-bold text-bosque">Rutas con menor riesgo en Valencia</h2>
            <p className="mt-4 text-base leading-7 text-grafito/80">
              En nuestra web clasificamos las rutas según el nivel de riesgo de procesionaria.
              Consulta la ficha de cada ruta para conocer el nivel actualizado y las recomendaciones
              específicas para la época del año.
            </p>
            <div className="mt-5 grid gap-3">
              {rutasBajoRiesgo.map((ruta) => (
                <Link
                  key={ruta.slug}
                  href={`/rutas/${ruta.slug}`}
                  className="rounded-2xl border border-bosque/10 bg-white px-4 py-4 hover:border-bosque/35"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="chip border-emerald-200 bg-emerald-50 text-emerald-800">
                      Riesgo bajo
                    </span>
                    <span className="text-sm text-grafito/60">{ruta.zona}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-bosque">
                    {sanitizeText(ruta.nombre)}
                  </h3>
                </Link>
              ))}
            </div>
          </article>

          <article id="consejos" className="panel px-6 py-7 sm:px-8">
            <h2 className="text-2xl font-bold text-bosque">Consejos para salir seguro con tu perro</h2>
            <ol className="mt-4 space-y-3 pl-6 text-base leading-7 text-grafito/80">
              <li className="list-decimal">
                Lleva siempre agua embotellada de sobra para hidratación y para lavar en caso de
                contacto.
              </li>
              <li className="list-decimal">
                Mantén a tu perro atado en zonas con pinos entre noviembre y abril.
              </li>
              <li className="list-decimal">
                Aprende a mirar hacia arriba antes de entrar en una zona con pinos.
              </li>
              <li className="list-decimal">
                Evita caminos con pinares densos en los meses de mayor riesgo.
              </li>
              <li className="list-decimal">
                No dejes que tu perro olfatee montículos de tierra bajo los pinos.
              </li>
              <li className="list-decimal">
                Ten localizado el veterinario de urgencia más cercano antes de salir.
              </li>
              <li className="list-decimal">
                Consulta nuestra web antes de cada ruta para comprobar el nivel de riesgo.
              </li>
            </ol>
            <div className="mt-5 border-t border-bosque/10 pt-4 text-grafito/80">
              <p className="text-base leading-7">
                En rutas con riesgo alto, lleva siempre un kit de primeros auxilios para
                perros.
              </p>
              <a
                href="https://amzn.to/4tbVSOn"
                target="_blank"
                rel="nofollow sponsored"
                className={`${affiliateLinkClassName} mt-2`}
              >
                Ver kit de primeros auxilios →
              </a>
            </div>
          </article>
        </div>

        <aside className="space-y-6">
          <article className="panel px-6 py-7 sm:px-8">
            <h2 className="text-xl font-semibold text-bosque">Resumen rápido</h2>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl bg-bosque/5 p-4">
                <p className="text-sm text-grafito/60">Mayor riesgo</p>
                <p className="mt-1 text-lg font-semibold text-bosque">Enero a abril</p>
              </div>
              <div className="rounded-2xl bg-bosque/5 p-4">
                <p className="text-sm text-grafito/60">Señal de alarma</p>
                <p className="mt-1 text-lg font-semibold text-bosque">
                  Inflamación de lengua o dificultad respiratoria
                </p>
              </div>
              <div className="rounded-2xl bg-bosque/5 p-4">
                <p className="text-sm text-grafito/60">Primera acción</p>
                <p className="mt-1 text-lg font-semibold text-bosque">
                  Aclarar con agua y acudir a urgencias veterinarias
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-emerald-300 bg-emerald-50 px-6 py-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Consulta práctica
            </p>
            <h2 className="mt-2 text-2xl font-bold text-emerald-950">
              Ver rutas de bajo riesgo en el mapa
            </h2>
            <p className="mt-3 text-base leading-7 text-emerald-900">
              Filtra el mapa para localizar recorridos con clasificación baja y revisar cada ficha
              antes de salir.
            </p>
            <Link
              href="/mapa?procesionaria=bajo"
              className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Ver rutas de bajo riesgo en el mapa
            </Link>
          </article>
        </aside>
      </section>
    </div>
  );
}
