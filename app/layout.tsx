import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import NavMenu from "@/components/NavMenu";
import SeasonalAlertBanner from "@/components/SeasonalAlertBanner";
import "leaflet/dist/leaflet.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rutas con perro en Valencia",
  description:
    "Colección de rutas verificadas para disfrutar con perro cerca de Valencia, organizadas por zona, tipo y ficha detallada.",
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
    google: "TgjWuJcE63weWJL-9P9WqaKz0ZA7TZstiDb0KN9tybI"
  }
};

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
              <div className="flex flex-col gap-8 md:grid md:grid-cols-[3fr_2fr] md:items-center">
                <div className="space-y-4 md:max-w-none">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bosque/70">
                    Senderismo dog-friendly
                  </p>
                  <Link href="/" className="inline-block">
                    <p className="font-serif text-4xl font-bold tracking-tight text-bosque sm:text-5xl">
                      Rutas con perro en Valencia
                    </p>
                  </Link>
                  <p className="max-w-xl text-base leading-7 text-grafito/80 sm:text-lg">
                    Una base sencilla y clara para encontrar escapadas por zona, cercanía o perfil de ruta,
                    con datos prácticos para salir con tu perro con más confianza.
                  </p>
                  <NavMenu />
                </div>
                <div className="hidden items-center justify-center md:flex md:justify-end">
                  <HeroImage />
                </div>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}