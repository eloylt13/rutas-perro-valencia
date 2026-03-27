"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Ruta } from "@/types/ruta";
import { capitalize, formatDificultad, formatZona, sanitizeText } from "@/lib/rutas";

type RutasListadoClientProps = {
  rutas: Ruta[];
};

const allFilterValue = "todas";
const riesgosProcesionaria = ["bajo", "medio", "alto"] as const;
const dificultades = ["fácil", "media", "difícil"] as const;

export default function RutasListadoClient({ rutas }: RutasListadoClientProps) {
  const [zona, setZona] = useState(allFilterValue);
  const [dificultad, setDificultad] = useState<typeof allFilterValue | (typeof dificultades)[number]>(
    allFilterValue
  );
  const [soloConAgua, setSoloConAgua] = useState(false);
  const [soloSinCorreaObligatoria, setSoloSinCorreaObligatoria] = useState(false);
  const [soloAptasEnVerano, setSoloAptasEnVerano] = useState(false);
  const [procesionaria, setProcesionaria] = useState<
    typeof allFilterValue | (typeof riesgosProcesionaria)[number]
  >(allFilterValue);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const zonas = useMemo(
    () => [...new Set(rutas.map((ruta) => ruta.zona))].sort((a, b) => a.localeCompare(b, "es")),
    [rutas]
  );

  const hasActiveFilters =
    zona !== allFilterValue ||
    dificultad !== allFilterValue ||
    soloConAgua ||
    soloSinCorreaObligatoria ||
    soloAptasEnVerano ||
    procesionaria !== allFilterValue;

  const rutasFiltradas = useMemo(
    () =>
      rutas.filter((ruta) => {
        if (zona !== allFilterValue && ruta.zona !== zona) {
          return false;
        }

        if (dificultad !== allFilterValue && ruta.dificultad !== dificultad) {
          return false;
        }

        if (soloConAgua && !ruta.agua) {
          return false;
        }

        if (soloSinCorreaObligatoria && ruta.correa_obligatoria) {
          return false;
        }

        if (soloAptasEnVerano && !ruta.apta_verano) {
          return false;
        }

        if (procesionaria !== allFilterValue && ruta.riesgo_procesionaria !== procesionaria) {
          return false;
        }

        return true;
      }),
    [dificultad, procesionaria, rutas, soloAptasEnVerano, soloConAgua, soloSinCorreaObligatoria, zona]
  );

  function resetFilters() {
    setZona(allFilterValue);
    setDificultad(allFilterValue);
    setSoloConAgua(false);
    setSoloSinCorreaObligatoria(false);
    setSoloAptasEnVerano(false);
    setProcesionaria(allFilterValue);
  }

  return (
    <>
      <section className="panel px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setIsFiltersOpen((current) => !current)}
              className="flex items-center justify-between rounded-2xl border border-bosque/15 bg-white px-4 py-3 text-left text-sm font-semibold text-bosque md:hidden"
              aria-expanded={isFiltersOpen}
              aria-controls="rutas-filtros"
            >
              <span>Filtrar rutas</span>
              <span>{isFiltersOpen ? "\u25B2" : "\u25BE"}</span>
            </button>

            <div className="rounded-2xl border border-bosque/10 bg-bosque/5 px-4 py-3 text-sm text-grafito/80">
              {rutasFiltradas.length} rutas encontradas
            </div>
          </div>

          <div
            id="rutas-filtros"
            className={`${isFiltersOpen ? "grid" : "hidden"} gap-3 md:grid md:grid-cols-2 xl:grid-cols-6`}
          >
            <label className="space-y-2 xl:col-span-2">
              <span className="text-sm font-semibold text-bosque">Zona</span>
              <select
                value={zona}
                onChange={(event) => setZona(event.target.value)}
                className="w-full rounded-2xl border border-bosque/15 bg-white px-4 py-3 text-sm text-grafito outline-none transition focus:border-bosque/40"
              >
                <option value={allFilterValue}>Todas</option>
                {zonas.map((option) => (
                  <option key={option} value={option}>
                    {formatZona(option)}
                  </option>
                ))}
              </select>
            </label>

            <div className="space-y-2 xl:col-span-2">
              <span className="text-sm font-semibold text-bosque">Dificultad</span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setDificultad(allFilterValue)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    dificultad === allFilterValue
                      ? "border-bosque bg-bosque text-white"
                      : "border-bosque/15 bg-white text-bosque hover:border-bosque/40"
                  }`}
                >
                  Todos
                </button>
                {dificultades.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setDificultad(option)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      dificultad === option
                        ? "border-bosque bg-bosque text-white"
                        : "border-bosque/15 bg-white text-bosque hover:border-bosque/40"
                    }`}
                  >
                    {formatDificultad(option)}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-3 rounded-2xl border border-bosque/15 bg-white px-4 py-3 text-sm text-grafito">
              <input
                type="checkbox"
                checked={soloConAgua}
                onChange={(event) => setSoloConAgua(event.target.checked)}
                className="h-4 w-4 accent-bosque"
              />
              <span>Solo rutas con agua</span>
            </label>

            <label className="flex items-center gap-3 rounded-2xl border border-bosque/15 bg-white px-4 py-3 text-sm text-grafito">
              <input
                type="checkbox"
                checked={soloSinCorreaObligatoria}
                onChange={(event) => setSoloSinCorreaObligatoria(event.target.checked)}
                className="h-4 w-4 accent-bosque"
              />
              <span>Solo sin correa obligatoria</span>
            </label>

            <label className="flex items-center gap-3 rounded-2xl border border-bosque/15 bg-white px-4 py-3 text-sm text-grafito">
              <input
                type="checkbox"
                checked={soloAptasEnVerano}
                onChange={(event) => setSoloAptasEnVerano(event.target.checked)}
                className="h-4 w-4 accent-bosque"
              />
              <span>Solo aptas en verano</span>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-bosque">Procesionaria</span>
              <select
                value={procesionaria}
                onChange={(event) =>
                  setProcesionaria(
                    event.target.value as typeof allFilterValue | (typeof riesgosProcesionaria)[number]
                  )
                }
                className="w-full rounded-2xl border border-bosque/15 bg-white px-4 py-3 text-sm text-grafito outline-none transition focus:border-bosque/40"
              >
                <option value={allFilterValue}>Todos</option>
                {riesgosProcesionaria.map((option) => (
                  <option key={option} value={option}>
                    {capitalize(option)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {hasActiveFilters ? (
            <div className="flex justify-start">
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-full border border-bosque/15 bg-white px-4 py-2 text-sm font-semibold text-bosque transition hover:border-bosque/40 hover:text-grafito"
              >
                Limpiar filtros
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {rutasFiltradas.length > 0 ? (
        <section className="route-grid">
          {rutasFiltradas.map((ruta) => (
            <Link key={ruta.slug} href={`/rutas/${ruta.slug}`} className="panel p-5 hover:border-bosque/35">
              <div className="flex flex-wrap gap-2">
                <span className="chip border-rio/25 bg-rio/10 text-rio">{formatZona(ruta.zona)}</span>
                <span className="chip border-bosque/15 bg-bosque/5 text-bosque">
                  {formatDificultad(ruta.dificultad)}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-bosque">{sanitizeText(ruta.nombre)}</h3>
              <p className="mt-3 text-sm leading-6 text-grafito/75">{sanitizeText(ruta.notas)}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm lg:grid-cols-5">
                <div>
                  <dt className="text-grafito/55">Distancia</dt>
                  <dd className="font-semibold text-bosque">{ruta.distancia_km} km</dd>
                </div>
                <div>
                  <dt className="text-grafito/55">Tipo</dt>
                  <dd className="font-semibold capitalize text-bosque">{ruta.tipo_ruta}</dd>
                </div>
                <div>
                  <dt className="text-grafito/55">Desde Valencia en coche</dt>
                  <dd className="font-semibold text-bosque">{ruta.acceso_desde_valencia_min} min</dd>
                </div>
                <div>
                  <dt className="text-grafito/55">Agua</dt>
                  <dd className="font-semibold text-bosque">{ruta.agua ? "Si" : "No"}</dd>
                </div>
                <div>
                  <dt className="text-grafito/55">Correa</dt>
                  <dd className="font-semibold text-bosque">
                    {ruta.correa_obligatoria ? "Si obligatoria" : "No obligatoria"}
                  </dd>
                </div>
              </dl>
            </Link>
          ))}
        </section>
      ) : (
        <section className="panel px-6 py-10 text-center">
          <p className="text-base font-semibold text-bosque">
            No hay rutas con estos filtros. Prueba a cambiar la búsqueda.
          </p>
        </section>
      )}
    </>
  );
}
