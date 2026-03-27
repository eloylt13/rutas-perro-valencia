import rutasData from "@/data/rutas-verified.json";
import type { Ruta } from "@/types/ruta";

export const TIPOS_SOPORTADOS = ["con-agua", "faciles", "cerca-de-valencia"] as const;

export type TipoSoportado = (typeof TIPOS_SOPORTADOS)[number];

const cp1252Map = new Map<number, number>([
  [0x20ac, 0x80],
  [0x201a, 0x82],
  [0x0192, 0x83],
  [0x201e, 0x84],
  [0x2026, 0x85],
  [0x2020, 0x86],
  [0x2021, 0x87],
  [0x02c6, 0x88],
  [0x2030, 0x89],
  [0x0160, 0x8a],
  [0x2039, 0x8b],
  [0x0152, 0x8c],
  [0x017d, 0x8e],
  [0x2018, 0x91],
  [0x2019, 0x92],
  [0x201c, 0x93],
  [0x201d, 0x94],
  [0x2022, 0x95],
  [0x2013, 0x96],
  [0x2014, 0x97],
  [0x02dc, 0x98],
  [0x2122, 0x99],
  [0x0161, 0x9a],
  [0x203a, 0x9b],
  [0x0153, 0x9c],
  [0x017e, 0x9e],
  [0x0178, 0x9f]
]);

const utf8Decoder = new TextDecoder("utf-8");

function encodeWindows1252(value: string): Uint8Array | null {
  const bytes: number[] = [];

  for (const char of value) {
    const codePoint = char.codePointAt(0);

    if (codePoint === undefined) {
      continue;
    }

    if (cp1252Map.has(codePoint)) {
      bytes.push(cp1252Map.get(codePoint)!);
      continue;
    }

    if (codePoint <= 0xff) {
      bytes.push(codePoint);
      continue;
    }

    return null;
  }

  return Uint8Array.from(bytes);
}

function fixUtf8Mojibake(value: string): string {
  let current = value;

  for (let index = 0; index < 3; index += 1) {
    if (!/[ÃÂâ]/.test(current)) {
      break;
    }

    const encoded = encodeWindows1252(current);

    if (!encoded) {
      break;
    }

    const next = utf8Decoder.decode(encoded);

    if (next === current || next.includes("\ufffd")) {
      break;
    }

    current = next;
  }

  return current;
}

function sanitizeRuta(ruta: Ruta): Ruta {
  return {
    ...ruta,
    nombre: fixUtf8Mojibake(ruta.nombre),
    slug: fixUtf8Mojibake(ruta.slug),
    zona: fixUtf8Mojibake(ruta.zona),
    tipo_ruta: fixUtf8Mojibake(ruta.tipo_ruta),
    dificultad: fixUtf8Mojibake(ruta.dificultad),
    sombra: fixUtf8Mojibake(ruta.sombra),
    confianza_dato: fixUtf8Mojibake(ruta.confianza_dato),
    notas: fixUtf8Mojibake(ruta.notas),
    riesgo_procesionaria: fixUtf8Mojibake(ruta.riesgo_procesionaria)
  };
}

const rutas = (rutasData as Ruta[]).map(sanitizeRuta);

function normalizeText(value: string): string {
  return fixUtf8Mojibake(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function capitalize(value: string): string {
  return fixUtf8Mojibake(value)
    .toLocaleLowerCase("es")
    .replace(/(^|[\s/'’-])\p{L}/gu, (match) => match.toLocaleUpperCase("es"));
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
