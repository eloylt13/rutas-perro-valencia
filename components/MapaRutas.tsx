"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import rutasData from "@/data/rutas-verified.json";
import type { Ruta } from "@/types/ruta";

const rutas = rutasData as Ruta[];
const mapCenter: [number, number] = [39.47, -0.37];
const defaultFilter = "todas";
const defaultIcon = L.icon({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const zonas = [...new Set(rutas.map((ruta) => ruta.zona))].sort((a, b) =>
  a.localeCompare(b, "es")
);
const dificultades = [...new Set(rutas.map((ruta) => ruta.dificultad))].sort((a, b) =>
  a.localeCompare(b, "es")
);

export default function MapaRutas() {
  const [dificultad, setDificultad] = useState(defaultFilter);
  const [zona, setZona] = useState(defaultFilter);
  const [soloConAgua, setSoloConAgua] = useState(false);
  const [soloConCorrea, setSoloConCorrea] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const rutasFiltradas = rutas.filter((ruta) => {
    if (dificultad !== defaultFilter && ruta.dificultad !== dificultad) {
      return false;
    }

    if (zona !== defaultFilter && ruta.zona !== zona) {
      return false;
    }

    if (soloConAgua && !ruta.agua) {
      return false;
    }

    if (soloConCorrea && !ruta.correa_obligatoria) {
      return false;
    }

    return true;
  });

  return (
    <section className="space-y-6">
      <div className="panel px-5 py-6 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bosque/60">
              Mapa interactivo
            </p>
            <h2 className="text-3xl font-bold text-bosque sm:text-4xl">
              Explora rutas dog-friendly sobre el mapa
            </h2>
            <p className="text-base leading-7 text-grafito/80">
              Filtra por dificultad, zona o necesidades prácticas y abre cada ficha
              completa desde su marcador.
            </p>
          </div>
          <div className="rounded-2xl border border-bosque/10 bg-bosque/5 px-4 py-3 text-sm text-grafito/80">
            {rutasFiltradas.length} rutas visibles
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-bosque">Dificultad</span>
            <select
              value={dificultad}
              onChange={(event) => setDificultad(event.target.value)}
              className="w-full rounded-2xl border border-bosque/15 bg-white px-4 py-3 text-sm text-grafito outline-none transition focus:border-bosque/40"
            >
              <option value={defaultFilter}>Todas</option>
              {dificultades.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-bosque">Zona</span>
            <select
              value={zona}
              onChange={(event) => setZona(event.target.value)}
              className="w-full rounded-2xl border border-bosque/15 bg-white px-4 py-3 text-sm text-grafito outline-none transition focus:border-bosque/40"
            >
              <option value={defaultFilter}>Todas</option>
              {zonas.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

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
              checked={soloConCorrea}
              onChange={(event) => setSoloConCorrea(event.target.checked)}
              className="h-4 w-4 accent-bosque"
            />
            <span>Solo correa obligatoria</span>
          </label>
        </div>
      </div>

      <div className="panel overflow-hidden">
        {isReady ? (
          <MapContainer
            center={mapCenter}
            zoom={9}
            scrollWheelZoom
            className="h-[420px] w-full sm:h-[560px]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {rutasFiltradas.map((ruta) => (
              <Marker
                key={ruta.slug}
                position={ruta.coordenadas_inicio}
                icon={defaultIcon}
              >
                <Popup>
                  <div className="min-w-[220px] space-y-3 text-sm text-grafito">
                    <div>
                      <p className="text-base font-semibold text-bosque">{ruta.nombre}</p>
                      <p className="text-xs uppercase tracking-[0.16em] text-bosque/60">
                        {ruta.zona}
                      </p>
                    </div>
                    <dl className="space-y-1">
                      <div className="flex justify-between gap-3">
                        <dt className="font-medium">Distancia</dt>
                        <dd>{ruta.distancia_km} km</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="font-medium">Dificultad</dt>
                        <dd>{ruta.dificultad}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="font-medium">Agua</dt>
                        <dd>{ruta.agua ? "✓" : "✗"}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="font-medium">Correa</dt>
                        <dd>{ruta.correa_obligatoria ? "✓" : "✗"}</dd>
                      </div>
                    </dl>
                    <Link
                      href={`/rutas/${ruta.slug}`}
                      className="inline-flex rounded-full bg-bosque px-4 py-2 font-semibold text-white hover:bg-grafito"
                    >
                      Ver ruta
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <div className="flex h-[420px] items-center justify-center px-6 text-center text-sm text-grafito/70 sm:h-[560px]">
            Cargando mapa interactivo...
          </div>
        )}
      </div>
    </section>
  );
}
