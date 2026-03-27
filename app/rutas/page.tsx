import type { Metadata } from "next";
import RutasListadoClient from "@/components/RutasListadoClient";
import { getRutas } from "@/lib/rutas";

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

      <RutasListadoClient rutas={rutas} />
    </div>
  );
}
