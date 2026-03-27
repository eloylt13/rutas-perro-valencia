import { getRutas } from '@/lib/rutas'

export default function sitemap() {
  const rutas = getRutas()
  const base = 'https://rutas-perro-valencia.vercel.app'
  
  const rutasUrls = rutas.map(r => ({
    url: `${base}/rutas/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/mapa`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/rutas`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/guias/cerca-de-valencia`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/guias/procesionaria-perros`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/tipo/con-agua`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/tipo/faciles`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/tipo/cerca-de-valencia`, lastModified: new Date(), priority: 0.8 },
    ...rutasUrls,
  ]
}
