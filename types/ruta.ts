export type CoordenadasInicio = [number, number];

export type DificultadRuta = "fácil" | "media" | string;
export type TipoRuta = "lineal" | "circular" | string;
export type SombraRuta = "poca" | "moderada" | "mucha" | string;
export type ConfianzaDato = "verificado" | "probable" | "pendiente" | string;
export type RiesgoProcesionaria = "alto" | "medio" | "bajo" | string;

export interface Ruta {
  nombre: string;
  slug: string;
  zona: string;
  distancia_km: number;
  desnivel_m: number;
  tipo_ruta: TipoRuta;
  dificultad: DificultadRuta;
  agua: boolean;
  sombra: SombraRuta;
  correa_obligatoria: boolean;
  apta_verano: boolean;
  parking: boolean;
  acceso_desde_valencia_min: number;
  coordenadas_inicio: CoordenadasInicio;
  confianza_dato: ConfianzaDato;
  notas: string;
  riesgo_procesionaria: RiesgoProcesionaria;
  como_llegar?: string;
}
