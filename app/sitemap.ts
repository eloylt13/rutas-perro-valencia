import type { MetadataRoute } from "next";
import { getRutas, getZonaSlug, getZonas } from "@/lib/rutas";

const siteUrl = "https://rutasperrovalencia.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = getRutas();
  const zonas = getZonas();

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/mapa`,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/rutas`,
      changeFrequency: "weekly",
      priority: 0.9
    },
    ...rutas.map((ruta) => ({
      url: `${siteUrl}/rutas/${ruta.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...zonas.map((zona) => ({
      url: `${siteUrl}/zona/${getZonaSlug(zona)}`,
      changeFrequency: "weekly" as const,
      priority: 0.7
    })),
    {
      url: `${siteUrl}/tipo/con-agua`,
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/tipo/faciles`,
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/tipo/cerca-de-valencia`,
      changeFrequency: "weekly",
      priority: 0.7
    }
  ];
}
