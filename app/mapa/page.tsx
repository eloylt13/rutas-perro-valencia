import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { getRutas, sanitizeText } from "@/lib/rutas";

export const metadata: Metadata = {
  metadataBase: new URL("https://rutasperrovalencia.es"),
  title: "Mapa",
  description: "Mapa interactivo de rutas con perro cerca de Valencia.",
  alternates: {
    canonical: "/mapa"
  }
};

const MapaRutas = dynamic(() => import("@/components/MapaRutas"), { ssr: false });

export default function MapaPage() {
  const rutas = getRutas();

  return (
    <div className="space-y-6">
      <section className="panel px-6 py-8 sm:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-bosque sm:text-4xl">
          Mapa de rutas con perro en Valencia
        </h1>
      </section>

      <MapaRutas variant="full" />

      <section className="panel px-6 py-6 text-sm leading-7 text-grafito/65 sm:px-8">
        <p>
          Este mapa reúne todas las rutas con perro en Valencia en una vista rápida para comparar
          zonas, distancias y condiciones antes de salir de casa. Puedes usar los filtros para ver
          solo rutas fáciles, recorridos con agua, opciones con correa obligatoria o áreas con menor
          riesgo de procesionaria según la temporada. Al pulsar sobre cada marcador se abre un
          resumen con datos básicos y un enlace directo a la ficha completa, donde encontrarás notas
          prácticas, consejos y coordenadas del inicio. Es una forma muy útil de planificar paseos
          con tu perro según el tiempo disponible, el nivel físico y la época del año. Si buscas una
          escapada cerca de Valencia, empieza filtrando por acceso y revisa después cada ficha para
          confirmar agua, sombra y normas del entorno antes de ponerte en marcha.
        </p>
        <div className="mt-5">
          <h2 className="text-base font-semibold text-grafito/80">Listado de rutas enlazadas</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {rutas.map((ruta) => (
              <li key={ruta.slug}>
                <Link href={`/rutas/${ruta.slug}`} className="hover:text-bosque">
                  {sanitizeText(ruta.nombre)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
