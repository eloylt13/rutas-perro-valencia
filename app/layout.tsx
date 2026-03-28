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
          <footer
            style={{
              borderTop: "1px solid #e5e7eb",
              marginTop: "4rem",
              padding: "1.5rem",
              background: "transparent"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                alignItems: "end"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <Image
                  src="/logo-iamagica.png"
                  alt="IAMagica"
                  width={100}
                  height={28}
                  style={{ height: "28px", width: "auto", objectFit: "contain" }}
                />
                <p style={{ fontSize: "12px", color: "#9ca3af", margin: 0 }}>
                  © 2026 IAMagica
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <a
                  href="mailto:info@iamagica.es"
                  style={{
                    fontSize: "13px",
                    color: "#6b7280",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "6px",
                    flexWrap: "wrap"
                  }}
                >
                  <span style={{ fontSize: "18px", lineHeight: 1 }} aria-hidden="true">
                    ✉
                  </span>
                  <span>info@iamagica.es</span>
                </a>
              </div>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
