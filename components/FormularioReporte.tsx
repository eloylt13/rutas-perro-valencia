"use client";

import { useState } from "react";

type FormularioReporteProps = {
  nombreRuta: string;
};

const opcionesReporte = [
  "El río o fuente tenía agua",
  "El camino estaba cortado o en mal estado",
  "Había mucha gente / muy concurrida",
  "Detecté riesgo de procesionaria",
  "El parking estaba lleno o no había",
  "La dificultad real es mayor de lo indicado",
  "Todo correcto, la info es fiable"
] as const;

type EstadoEnvio = "idle" | "sending" | "success" | "error";

export default function FormularioReporte({ nombreRuta }: FormularioReporteProps) {
  const [estado, setEstado] = useState<EstadoEnvio>("idle");
  const [detalle, setDetalle] = useState("");
  const [seleccionadas, setSeleccionadas] = useState<string[]>([]);
  const haySeleccion = seleccionadas.length > 0;

  function toggleOpcion(opcion: string) {
    setSeleccionadas((actuales) =>
      actuales.includes(opcion)
        ? actuales.filter((item) => item !== opcion)
        : [...actuales, opcion]
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!haySeleccion) {
      return;
    }

    setEstado("sending");

    const formData = {
      ruta: nombreRuta,
      incidencias: seleccionadas,
      detalle
    };

    try {
      const response = await fetch("https://formspree.io/f/xreoezen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Formspree error");
      }

      setEstado("success");
      setDetalle("");
      setSeleccionadas([]);
    } catch {
      setEstado("error");
    }
  }

  if (estado === "success") {
    return (
      <section className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-7 shadow-card sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
          Reporte enviado
        </p>
        <p className="mt-3 max-w-2xl text-base leading-7 text-emerald-950">
          ✓ ¡Gracias por tu reporte! Lo revisaremos para mantener la información actualizada.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-bosque/10 bg-bosque/5 px-6 py-7 shadow-card sm:px-8">
      <div className="max-w-2xl">
        <h3 className="text-xl font-semibold text-bosque">¿Has hecho esta ruta recientemente?</h3>
        <p className="mt-2 text-base leading-7 text-grafito/75">
          Ayúdanos a mantener la información actualizada
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <input type="hidden" name="ruta" value={nombreRuta} />

        <fieldset>
          <legend className="text-sm font-semibold text-bosque">¿Qué viste en la ruta?</legend>
          <div className="mt-3 grid gap-3">
            {opcionesReporte.map((opcion) => {
              const checked = seleccionadas.includes(opcion);

              return (
                <label
                  key={opcion}
                  className={`flex min-h-11 items-center gap-3 rounded-2xl border px-4 py-3 text-sm leading-6 transition ${
                    checked
                      ? "border-bosque/35 bg-white text-bosque"
                      : "border-bosque/10 bg-white/75 text-grafito hover:border-bosque/25"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="incidencias"
                    value={opcion}
                    checked={checked}
                    onChange={() => toggleOpcion(opcion)}
                    className="h-5 w-5 shrink-0 accent-bosque"
                  />
                  <span>{opcion}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <label className="block space-y-2">
          <span className="text-sm font-semibold text-bosque">Detalles</span>
          <textarea
            name="detalle"
            value={detalle}
            onChange={(event) => setDetalle(event.target.value)}
            placeholder="Añade cualquier detalle útil (opcional)"
            rows={3}
            className="w-full rounded-2xl border border-bosque/15 bg-white px-4 py-3 text-sm text-grafito outline-none transition placeholder:text-grafito/45 focus:border-bosque/40"
          />
        </label>

        {estado === "error" ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            ✗ Hubo un problema al enviar. Inténtalo de nuevo.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={!haySeleccion || estado === "sending"}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-bosque px-6 py-3 text-sm font-semibold text-white transition hover:bg-bosque/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {estado === "sending" ? "Enviando..." : "Confirmar reporte"}
        </button>
      </form>
    </section>
  );
}