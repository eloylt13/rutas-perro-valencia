"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import type { RiesgoProcesionaria, Ruta } from "@/types/ruta";
import { capitalize, getRutas } from "@/lib/rutas";

delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png"
});

const userIcon = L.divIcon({
  className: "",
  html: `<div style="width:16px;height:16px;border-radius:50%;
         background:#3b82f6;border:3px solid white;
         box-shadow:0 0 0 2px #3b82f6"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});

const rutas = getRutas();
const mapCenter: [number, number] = [39.47, -0.37];
const defaultZoom = 9;
const userLocationZoom = 11;
const defaultFilter = "todas";
const riesgosProcesionaria: RiesgoProcesionaria[] = ["bajo", "medio", "alto"];

const zonas = [...new Set(rutas.map((ruta) => ruta.zona))].sort((a, b) =>
  a.localeCompare(b, "es")
);
const dificultades = [...new Set(rutas.map((ruta) => ruta.dificultad))].sort((a, b) =>
  a.localeCompare(b, "es")
);

const riesgoConfig: Record<"bajo" | "medio" | "alto", { label: string; className: string }> = {
  bajo: {
    label: "🟢 Bajo riesgo procesionaria",
    className: "border-emerald-200 bg-emerald-50 text-emerald-800"
  },
  medio: {
    label: "🟡 Medio riesgo procesionaria",
    className: "border-amber-200 bg-amber-50 text-amber-800"
  },
  alto: {
    label: "🔴 Alto riesgo procesionaria",
    className: "border-rose-200 bg-rose-50 text-rose-800"
  }
};

type RutaConDistanciaUsuario = Ruta & {
  distanciaUsuarioKm: number | null;
};

function degreesToRadians(value: number) {
  return (value * Math.PI) / 180;
}

function haversineDistance(from: [number, number], to: [number, number]) {
  const earthRadiusKm = 6371;
  const latitudeDelta = degreesToRadians(to[0] - from[0]);
  const longitudeDelta = degreesToRadians(to[1] - from[1]);
  const fromLatitude = degreesToRadians(from[0]);
  const toLatitude = degreesToRadians(to[0]);

  const a =
    Math.sin(latitudeDelta / 2) * Math.sin(latitudeDelta / 2) +
    Math.cos(fromLatitude) *
      Math.cos(toLatitude) *
      Math.sin(longitudeDelta / 2) *
      Math.sin(longitudeDelta / 2);

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function MapViewController({
  center,
  zoom
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, map, zoom]);

  return null;
}

function getRutasFiltradas({
  dificultad,
  zona,
  procesionaria,
  soloConAgua,
  soloConCorrea,
  userLocation
}: {
  dificultad: string;
  zona: string;
  procesionaria: string;
  soloConAgua: boolean;
  soloConCorrea: boolean;
  userLocation: [number, number] | null;
}) {
  const rutasFiltradas = rutas.filter((ruta) => {
    if (dificultad !== defaultFilter && ruta.dificultad !== dificultad) {
      return false;
    }

    if (zona !== defaultFilter && ruta.zona !== zona) {
      return false;
    }

    if (procesionaria !== defaultFilter && ruta.riesgo_procesionaria !== procesionaria) {
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

  const rutasConDistancia = rutasFiltradas.map((ruta) => ({
    ...ruta,
    distanciaUsuarioKm: userLocation
      ? haversineDistance(userLocation, ruta.coordenadas_inicio)
      : null
  }));

  if (!userLocation) {
    return rutasConDistancia;
  }

  return rutasConDistancia.sort(
    (rutaA, rutaB) => (rutaA.distanciaUsuarioKm ?? 0) - (rutaB.distanciaUsuarioKm ?? 0)
  );
}

export default function MapaRutas() {
  const [dificultad, setDificultad] = useState(defaultFilter);
  const [zona, setZona] = useState(defaultFilter);
  const [procesionaria, setProcesionaria] = useState(defaultFilter);
  const [soloConAgua, setSoloConAgua] = useState(false);
  const [soloConCorrea, setSoloConCorrea] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [currentCenter, setCurrentCenter] = useState(mapCenter);
  const [currentZoom, setCurrentZoom] = useState(defaultZoom);
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    setIsReady(true);
  }, []);

  const rutasFiltradas: RutaConDistanciaUsuario[] = getRutasFiltradas({
    dificultad,
    zona,
    procesionaria,
    soloConAgua,
    soloConCorrea,
    userLocation
  });

  function resetToDefaultMap(message: string) {
    setLocationError(message);
    setUserLocation(null);
    setCurrentCenter(mapCenter);
    setCurrentZoom(defaultZoom);
  }

  function handleLocateUser() {
    if (!navigator.geolocation) {
      resetToDefaultMap("Activa la ubicación para ver rutas cercanas");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const nextLocation: [number, number] = [coords.latitude, coords.longitude];

        setUserLocation(nextLocation);
        setLocationError("");
        setCurrentCenter(nextLocation);
        setCurrentZoom(userLocationZoom);
      },
      () => {
        resetToDefaultMap("Activa la ubicación para ver rutas cercanas");
      }
    );
  }

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
              Filtra por dificultad, zona, riesgo de procesionaria o necesidades prácticas y abre
              cada ficha completa desde su marcador.
            </p>
          </div>
          <div className="rounded-2xl border border-bosque/10 bg-bosque/5 px-4 py-3 text-sm text-grafito/80">
            {rutasFiltradas.length} rutas visibles
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
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

          <label className="space-y-2">
            <span className="text-sm font-semibold text-bosque">Procesionaria</span>
            <select
              value={procesionaria}
              onChange={(event) => setProcesionaria(event.target.value)}
              className="w-full rounded-2xl border border-bosque/15 bg-white px-4 py-3 text-sm text-grafito outline-none transition focus:border-bosque/40"
            >
              <option value={defaultFilter}>Todos</option>
              {riesgosProcesionaria.map((option) => (
                <option key={option} value={option}>
                  {capitalize(option)}
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

      <div className="space-y-3">
        <button
          type="button"
          onClick={handleLocateUser}
          className="inline-flex items-center justify-center rounded-full bg-bosque px-5 py-3 text-sm font-semibold text-white transition hover:bg-grafito"
        >
          📍 Ver rutas cerca de mí
        </button>
        {locationError ? (
          <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {locationError}
          </p>
        ) : null}
      </div>

      <div className="panel overflow-hidden">
        {isReady ? (
          <MapContainer
            center={currentCenter}
            zoom={currentZoom}
            scrollWheelZoom
            style={{ height: "600px", width: "100%" }}
            className="h-[420px] w-full sm:h-[560px]"
          >
            <MapViewController center={currentCenter} zoom={currentZoom} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {userLocation ? (
              <Marker position={userLocation} icon={userIcon}>
                <Popup>
                  <div className="space-y-1 text-sm text-grafito">
                    <p className="font-semibold text-bosque">Tu ubicación</p>
                    <p>Mostrando rutas ordenadas por cercanía.</p>
                  </div>
                </Popup>
              </Marker>
            ) : null}
            {rutasFiltradas.map((ruta) => (
              <Marker key={ruta.slug} position={ruta.coordenadas_inicio}>
                <Popup>
                  <div className="min-w-[220px] space-y-3 text-sm text-grafito">
                    <div>
                      <p className="text-base font-semibold text-bosque">{ruta.nombre}</p>
                      <p className="text-xs tracking-[0.08em] text-bosque/60">
                        {capitalize(ruta.zona)}
                      </p>
                    </div>
                    <p
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
                        riesgoConfig[ruta.riesgo_procesionaria as "bajo" | "medio" | "alto"].className
                      }`}
                    >
                      {riesgoConfig[ruta.riesgo_procesionaria as "bajo" | "medio" | "alto"].label}
                    </p>
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
                        <dd>{ruta.agua ? "💧 Sí" : "✗ No"}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="font-medium">Correa</dt>
                        <dd>{ruta.correa_obligatoria ? "🔴 Sí" : "✓ No"}</dd>
                      </div>
                    </dl>
                    {ruta.distanciaUsuarioKm !== null ? (
                      <p className="text-xs font-medium text-bosque/70">
                        A {ruta.distanciaUsuarioKm.toFixed(1)} km de tu ubicación
                      </p>
                    ) : null}
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
