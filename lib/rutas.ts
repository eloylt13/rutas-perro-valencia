import rutasData from "@/data/rutas-verified.json";
import type { Ruta } from "@/types/ruta";

export const TIPOS_SOPORTADOS = ["con-agua", "faciles", "cerca-de-valencia"] as const;

export type TipoSoportado = (typeof TIPOS_SOPORTADOS)[number];

const rutas = rutasData as Ruta[];

function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Ã¡/g, "a")
    .replace(/Ã©/g, "e")
    .replace(/Ã­/g, "i")
    .replace(/Ã³/g, "o")
    .replace(/Ãº/g, "u")
    .replace(/Ã±/g, "n")
    .replace(/â€“|â€”/g, "-")
    .toLowerCase()
    .trim();
}

export function getRutas(): Ruta[] {
  return [...rutas];
}

export function getRutaBySlug(slug: string): Ruta | undefined {
  return rutas.find((ruta) => ruta.slug === slug);
}

export function getRutasByZona(zona: string): Ruta[] {
  return rutas.filter((ruta) => ruta.zona === zona);
}

export function getRutasByTipo(tipo: string): Ruta[] {
  switch (tipo) {
    case "con-agua":
      return rutas.filter((ruta) => ruta.agua);
    case "faciles":
      return rutas.filter((ruta) => normalizeText(ruta.dificultad) === "facil");
    case "cerca-de-valencia":
      return rutas
        .filter((ruta) => ruta.acceso_desde_valencia_min <= 45)
        .sort(
          (rutaA, rutaB) =>
            rutaA.acceso_desde_valencia_min - rutaB.acceso_desde_valencia_min
        );
    default:
      return [];
  }
}

export function getZonas(): string[] {
  return [...new Set(rutas.map((ruta) => ruta.zona))].sort((zonaA, zonaB) =>
    zonaA.localeCompare(zonaB, "es")
  );
}

export function getZonaSlug(zona: string): string {
  return normalizeText(zona)
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getZonaBySlug(zonaSlug: string): string | undefined {
  return getZonas().find((zona) => getZonaSlug(zona) === zonaSlug);
}

export function isTipoSoportado(tipo: string): tipo is TipoSoportado {
  return TIPOS_SOPORTADOS.includes(tipo as TipoSoportado);
}

export function getTipoLabel(tipo: TipoSoportado): string {
  switch (tipo) {
    case "con-agua":
      return "Rutas con agua";
    case "faciles":
      return "Rutas fáciles";
    case "cerca-de-valencia":
      return "Rutas cerca de Valencia";
  }
}

export function getTipoDescription(tipo: TipoSoportado): string {
  switch (tipo) {
    case "con-agua":
      return "Recorridos con puntos de agua para paseos más frescos.";
    case "faciles":
      return "Selección de rutas asequibles para la mayoría de perros y personas.";
    case "cerca-de-valencia":
      return "Escapadas a 45 minutos o menos de Valencia, ordenadas por cercanía.";
  }
}