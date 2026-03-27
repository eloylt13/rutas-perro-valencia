import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa",
  description: "Vista del mapa de rutas. Próximamente."
};

export default function MapaPage() {
  return (
    <section className="panel px-6 py-16 text-center sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">
        Vista cartográfica
      </p>
      <h2 className="mt-3 text-3xl font-bold text-bosque">Mapa próximamente</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-grafito/80">
        El mapa interactivo lo añadiremos en el siguiente paso. De momento, la navegación
        completa está disponible desde el catálogo, las zonas y los filtros por tipo.
      </p>
    </section>
  );
}
