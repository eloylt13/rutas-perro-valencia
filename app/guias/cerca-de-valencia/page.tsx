import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildBreadcrumbJsonLd } from "@/lib/rutas";

export const metadata: Metadata = {
  metadataBase: new URL("https://rutasperrovalencia.es"),
  title: "Rutas con perro cerca de Valencia: escapadas por tiempo de acceso",
  description:
    "Las mejores rutas con perro cerca de Valencia organizadas por tiempo en coche: menos de 30 min, 45 min, 60 min y más. Con datos de agua, dificultad y correa.",
  alternates: {
    canonical: "/guias/cerca-de-valencia"
  }
};

type RouteItem = {
  slug: string;
  nombre: string;
  tiempo: string;
  dificultad: "fácil" | "media";
  agua: "sí" | "no";
  correa: "sí" | "no";
  descripcion?: string;
};

type RouteSection = {
  id: string;
  title: string;
  intro: string;
  routes: RouteItem[];
};

const routeSections: RouteSection[] = [
  {
    id: "menos-de-30",
    title: "Menos de 30 minutos desde Valencia",
    intro:
      "Si buscas rutas con perro cerca de Valencia para una salida rápida, esta es la franja más cómoda.",
    routes: [
      {
        slug: "ruta-albufera-saler",
        nombre: "Ruta Albufera Dehesa del Saler",
        tiempo: "20 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "sí",
        descripcion:
          "Ruta fácil entre pinar, dunas y tramos de sombra. Tiene agua cerca y conviene llevar correa por el entorno protegido."
      },
      {
        slug: "rio-turia-manises-vilamarxant",
        nombre: "Río Turia Manises Vilamarxant",
        tiempo: "20 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "sí",
        descripcion:
          "Recorrido sencillo junto al río, ideal para caminar sin demasiada exigencia física con sensación de naturaleza cerca de la ciudad."
      },
      {
        slug: "cruz-montepicayo",
        nombre: "Cruz de Montepicayo GR-10",
        tiempo: "30 min",
        dificultad: "media",
        agua: "no",
        correa: "sí",
        descripcion:
          "Ruta algo más activa, con desnivel moderado y mejores vistas. No tiene agua; conviene ir preparado."
      }
    ]
  },
  {
    id: "entre-30-y-45",
    title: "Entre 30 y 45 minutos desde Valencia",
    intro: "Escapadas muy asumibles con más variedad de entorno.",
    routes: [
      {
        slug: "parque-fluvial-turia-masia-traver",
        nombre: "Parque Fluvial Turia Masía de Traver",
        tiempo: "30 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "sí",
        descripcion:
          "Ruta fácil y cómoda para una salida tranquila con perro. Terreno sencillo con agua."
      },
      {
        slug: "bunol-molino-luz-alborache",
        nombre: "Buñol Molino de la Luz",
        tiempo: "40 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "no",
        descripcion:
          "Opción fácil y agradable con presencia de agua. El perro puede ir más suelto en tramos adecuados."
      },
      {
        slug: "sierra-aledua-pico-besori",
        nombre: "Sierra Aledua Pico Besori",
        tiempo: "40 min",
        dificultad: "media",
        agua: "no",
        correa: "no",
        descripcion:
          "Para quienes prefieren más sensación de montaña. Sin agua; llevar suficiente para el perro."
      },
      {
        slug: "cueva-turche",
        nombre: "Cueva Turche Buñol",
        tiempo: "40 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "sí",
        descripcion:
          "Muy popular por su zona de agua y entorno visual. Conviene llevar correa en accesos concurridos."
      }
    ]
  },
  {
    id: "entre-45-y-60",
    title: "Entre 45 y 60 minutos desde Valencia",
    intro: "La franja con más rutas conocidas y variedad de opciones.",
    routes: [
      {
        slug: "ruta-pantaneros-loriguilla",
        nombre: "Ruta Pantaneros Loriguilla",
        tiempo: "50 min",
        dificultad: "media",
        agua: "sí",
        correa: "sí"
      },
      {
        slug: "puentes-colgantes-chulilla",
        nombre: "Puentes Colgantes Chulilla",
        tiempo: "50 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "sí"
      },
      {
        slug: "gatova-pico-aguila-molino-ceja",
        nombre: "Gátova Pico del Águila",
        tiempo: "55 min",
        dificultad: "media",
        agua: "no",
        correa: "sí"
      },
      {
        slug: "embalse-bellus",
        nombre: "Embalse de Bellús",
        tiempo: "60 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "no"
      },
      {
        slug: "salto-novia-navajas",
        nombre: "Salto de la Novia Navajas",
        tiempo: "60 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "sí"
      },
      {
        slug: "xativa-cova-negra-bellus",
        nombre: "Xàtiva Cova Negra Bellús",
        tiempo: "60 min",
        dificultad: "media",
        agua: "sí",
        correa: "sí"
      },
    ]
  },
  {
    id: "mas-de-60",
    title: "Más de 60 minutos: merece la pena el viaje",
    intro: "Escapadas que requieren más planificación pero compensan.",
    routes: [
      {
        slug: "acueducto-romano-pena-cortada",
        nombre: "Acueducto Romano Peña Cortada",
        tiempo: "65 min",
        dificultad: "media",
        agua: "no",
        correa: "no"
      },
      {
        slug: "ontinyent-senda-enginyers",
        nombre: "Ontinyent Senda Enginyers",
        tiempo: "75 min",
        dificultad: "media",
        agua: "no",
        correa: "no"
      },
      {
        slug: "gorgo-escalera-anna",
        nombre: "Gorgo de la Escalera Anna",
        tiempo: "70 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "no"
      },
      {
        slug: "ruta-del-agua-chelva",
        nombre: "Ruta del Agua Chelva",
        tiempo: "70 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "no"
      },
      {
        slug: "ruta-chera",
        nombre: "Ruta de Chera",
        tiempo: "70 min",
        dificultad: "media",
        agua: "sí",
        correa: "sí"
      },
      {
        slug: "senda-portalet-gandia",
        nombre: "Senda del Portalet Gandía",
        tiempo: "70 min",
        dificultad: "fácil",
        agua: "no",
        correa: "sí"
      },
      {
        slug: "ruta-caves-requena",
        nombre: "Ruta de les Caves Requena",
        tiempo: "65 min",
        dificultad: "fácil",
        agua: "no",
        correa: "no"
      },
      {
        slug: "descenso-rio-fraile",
        nombre: "Descenso Río Fraile",
        tiempo: "90 min",
        dificultad: "media",
        agua: "sí",
        correa: "no"
      },
      {
        slug: "canones-jucar-jalance",
        nombre: "Cañones del Júcar Jalance",
        tiempo: "90 min",
        dificultad: "media",
        agua: "sí",
        correa: "no"
      },
      {
        slug: "rio-sellent-bolbaite",
        nombre: "Río Sellent Bolbaite",
        tiempo: "75 min",
        dificultad: "fácil",
        agua: "sí",
        correa: "no"
      },
      {
        slug: "barranco-agua-negra",
        nombre: "Barranco Agua Negra Bocairent",
        tiempo: "90 min",
        dificultad: "media",
        agua: "sí",
        correa: "sí"
      }
    ]
  }
];

const faqItems = [
  {
    question: "¿Cuál es la ruta con perro más cercana a Valencia?",
    answer:
      "Las opciones más cercanas son Ruta Albufera Dehesa del Saler y Río Turia Manises Vilamarxant, ambas a unos 20 minutos."
  },
  {
    question: "¿Qué rutas con perro se pueden hacer en menos de una hora?",
    answer:
      "Tienes muchas opciones: Albufera, Río Turia, Cruz Montepicayo, Parque Fluvial Turia, Buñol Molino de la Luz, Sierra Aledua, Cueva Turche, Pantaneros Loriguilla, Puentes Colgantes, Gátova, Embalse Bellús, Salto Novia Navajas, Xàtiva Cova Negra."
  },
  {
    question: "¿Hay rutas con perro cerca de Valencia aptas para verano?",
    answer:
      "Sí. Funcionan mejor las rutas con agua: Ruta del Agua Chelva, Gorgo de la Escalera, Río Sellent, Cueva Turche, Embalse Bellús o Río Turia. Conviene salir temprano y evitar horas centrales."
  },
  {
    question: "¿Qué rutas no requieren correa cerca de Valencia?",
    answer:
      "Sin correa obligatoria: Buñol Molino de la Luz, Sierra Aledua, Embalse Bellús, Gorgo de la Escalera, Ruta del Agua Chelva, Ruta Caves Requena, Descenso Río Fraile, Cañones del Júcar y Río Sellent."
  }
] as const;

const tableOfContents = routeSections.map((section) => ({
  id: section.id,
  label: section.title
}));

function RouteBadge({
  tone,
  children
}: {
  tone: "difficulty" | "water" | "leash";
  children: ReactNode;
}) {
  const classes = {
    difficulty: "border-bosque/15 bg-bosque/5 text-bosque",
    water: "border-rio/20 bg-rio/10 text-rio",
    leash: "border-sol/40 bg-sol/20 text-bosque"
  };

  return <span className={`chip ${classes[tone]}`}>{children}</span>;
}

export default function CercaDeValenciaGuidePage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Inicio", href: "/" },
    { name: "Guías" },
    { name: "Rutas cerca de Valencia", href: "/guias/cerca-de-valencia" }
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="panel px-6 py-8 sm:px-8">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Guías" },
            { label: "Rutas cerca de Valencia" }
          ]}
        />

        <div className="mt-5 space-y-4">
          <span className="chip border-sol/40 bg-sol/15 text-bosque">
            Guía pilar para escapadas dog-friendly
          </span>
          <div>
            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-bosque sm:text-4xl">
              Rutas con perro cerca de Valencia: las mejores escapadas por tiempo de acceso
            </h1>
            <div className="mt-3 max-w-3xl space-y-4 text-lg leading-8 text-grafito/80">
              <p>
                Valencia es un punto de partida muy cómodo para organizar rutas con perro durante
                todo el año. En menos de una hora puedes pasar de la ciudad a senderos de río,
                pinares, embalses, miradores o recorridos sencillos donde tu perro puede caminar,
                oler y disfrutar sin necesidad de hacer un gran viaje.
              </p>
              <p>
                En esta página hemos organizado las mejores escapadas con perro desde Valencia según
                el tiempo de acceso en coche. Si solo tienes una mañana libre, verás rápido qué
                rutas encajan. Si quieres una salida más larga, también tendrás opciones que
                justifican perfectamente el desplazamiento.
              </p>
              <p>
                Para clasificar cada ruta usamos tres datos prácticos: tiempo aproximado desde
                Valencia, nivel de dificultad y si hay agua durante el recorrido. También indicamos
                si conviene llevar al perro con correa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="panel px-6 py-7 sm:px-8">
        <h2 className="text-xl font-semibold text-bosque">Índice de contenidos</h2>
        <nav aria-label="Índice de contenidos" className="mt-4">
          <ol className="grid gap-3 sm:grid-cols-2">
            {tableOfContents.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block rounded-2xl border border-bosque/10 bg-bosque/5 px-4 py-3 font-medium text-bosque hover:border-bosque/35"
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#consejos"
                className="block rounded-2xl border border-bosque/10 bg-bosque/5 px-4 py-3 font-medium text-bosque hover:border-bosque/35"
              >
                Consejos para planificar la salida
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block rounded-2xl border border-bosque/10 bg-bosque/5 px-4 py-3 font-medium text-bosque hover:border-bosque/35"
              >
                Preguntas frecuentes
              </a>
            </li>
          </ol>
        </nav>
      </section>

      {routeSections.map((section) => (
        <section key={section.id} id={section.id} className="panel px-6 py-7 sm:px-8">
          <h2 className="text-2xl font-bold text-bosque">{section.title}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-grafito/80">{section.intro}</p>

          <div className="mt-6 grid gap-4">
            {section.routes.map((route) => (
              <article
                key={route.slug}
                className="rounded-3xl border border-bosque/10 bg-white px-5 py-5 hover:border-bosque/35"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/rutas/${route.slug}`}
                    className="text-lg font-semibold text-bosque hover:text-grafito"
                  >
                    {route.nombre}
                  </Link>
                  <span className="text-sm font-medium text-grafito/60">{route.tiempo}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <RouteBadge tone="difficulty">Dificultad: {route.dificultad}</RouteBadge>
                  <RouteBadge tone="water">Agua: {route.agua}</RouteBadge>
                  <RouteBadge tone="leash">Correa: {route.correa}</RouteBadge>
                </div>
                {route.descripcion ? (
                  <p className="mt-4 text-sm leading-6 text-grafito/75">{route.descripcion}</p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ))}

      <section id="consejos" className="panel px-6 py-7 sm:px-8">
        <h2 className="text-2xl font-bold text-bosque">Consejos para planificar la salida</h2>
        <ol className="mt-5 space-y-3 pl-6 text-base leading-7 text-grafito/80">
          <li className="list-decimal">
            Si solo tienes media mañana, prioriza rutas de menos de 30 o 45 minutos.
          </li>
          <li className="list-decimal">
            En días de calor, da prioridad a rutas con agua o sombra.
          </li>
          <li className="list-decimal">
            Revisa siempre si conviene llevar correa aunque tu perro obedezca bien.
          </li>
          <li className="list-decimal">
            No te fijes solo en la distancia: mira también la dificultad.
          </li>
          <li className="list-decimal">
            Lleva agua, comedero plegable y toalla incluso si la ruta tiene agua natural.
          </li>
        </ol>
      </section>

      <section id="faq" className="panel px-6 py-7 sm:px-8">
        <h2 className="text-2xl font-bold text-bosque">Preguntas frecuentes</h2>
        <div className="mt-5 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-bosque/10 bg-white px-5 py-4 open:border-bosque/35"
            >
              <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-bosque">
                {item.question}
              </summary>
              <p className="mt-3 text-base leading-7 text-grafito/80">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

