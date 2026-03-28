import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import SeasonalAlertBanner from "@/components/SeasonalAlertBanner";
import "leaflet/dist/leaflet.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rutas con perro en Valencia",
  description:
    "ColecciÃ³n de rutas verificadas para disfrutar con perro cerca de Valencia, organizadas por zona, tipo y ficha detallada.",
  metadataBase: new URL("https://rutasperrovalencia.es"),
  openGraph: {
    title: "Rutas con perro en Valencia",
    description:
      "25 rutas verificadas con perro en Valencia. Mapa interactivo, filtros caninos y fichas detalladas.",
    url: "https://rutasperrovalencia.es",
    siteName: "Rutas Perro Valencia",
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rutas con perro en Valencia",
    description: "25 rutas verificadas con perro en Valencia con mapa interactivo."
  },
  verification: {
    google: "6Cr92jGfY8D6cZX4sdEC1v1vECb_mgjBy8Jd9qoUfI4"
  }
};

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/rutas", label: "Rutas" },
  { href: "/mapa", label: "Mapa" },
  { href: "/guias", label: "GuÃ­as" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SeasonalAlertBanner />
        <div className="page-shell">
          <header className="panel mb-8 overflow-hidden">
            <div className="bg-hero px-6 py-8 sm:px-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bosque/70">
                    Senderismo dog-friendly
                  </p>
                  <Link href="/" className="inline-block">
                    <p className="font-serif text-4xl font-bold tracking-tight text-bosque sm:text-5xl">
                      Rutas con perro en Valencia
                    </p>
                  </Link>
                  <p className="max-w-xl text-base leading-7 text-grafito/80 sm:text-lg">
                    Una base sencilla y clara para encontrar escapadas por zona,
                    cercanÃ­a o perfil de ruta, con datos prÃ¡cticos para salir con tu
                    perro con mÃ¡s confianza.
                  </p>
                </div>
                <nav className="flex flex-wrap gap-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-bosque/15 bg-white/85 px-4 py-2 text-sm font-semibold text-bosque hover:border-bosque/40 hover:text-grafito"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="mt-10 border-t border-bosque/12 px-2 pb-8 pt-6 text-sm text-grafito/70">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3">
                <a
                  href="https://iamagica.es"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center opacity-90 hover:opacity-100"
                >
                  <Image
                    src="/logo-iamagica.png"
                    alt="IAMagica â€” webs y apps con IA"
                    width={120}
                    height={32}
                    style={{ objectFit: "contain" }}
                  />
                </a>
                <p className="leading-6 text-grafito/70">Webs y apps creadas con IA</p>
              </div>
              <div className="max-w-sm space-y-1 leading-6 md:text-right">
                <p>Â¿Has hecho alguna de estas rutas con tu perro?</p>
                <p>EscrÃ­benos con fotos o informaciÃ³n:</p>
                <a
                  href="mailto:info@iamagica.es"
                  className="font-medium text-bosque hover:text-grafito"
                >
                  info@iamagica.es
                </a>
              </div>
            </div>
            <div className="mt-6 space-y-2 border-t border-bosque/10 pt-4 text-xs leading-5 text-grafito/60">
              <p>
                Algunos enlaces son de afiliado. Si compras a travÃ©s de ellos recibimos
                una pequeÃ±a comisiÃ³n sin coste adicional para ti.
              </p>
              <p>Â© 2026 IAMagica</p>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
