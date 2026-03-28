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
    google: "6Cr92jGfY8D6cZX4sdEC1v1vECb_mgjBy8Jd9qoUfI4"
  }
};

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/rutas", label: "Rutas" },
  { href: "/mapa", label: "Mapa" },
  { href: "/guias", label: "Guías" }
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
                  <nav className="flex flex-wrap gap-3 pt-1">
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
                <div className="hidden items-center justify-center md:flex md:justify-end">
                  <Image
                    src="/nala.png"
                    alt="Nala — la perrita de las rutas"
                    width={320}
                    height={320}
                    className="h-auto w-full max-w-[320px]"
                    style={{
                      objectFit: "contain",
                      mixBlendMode: "multiply"
                    }}
                  />
                </div>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="mt-16 border-t border-black/10 px-6 py-6 sm:px-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <div className="flex flex-col items-center gap-1.5 md:items-start">
                <Image
                  src="/logo-iamagica.png"
                  alt="IAMagica"
                  width={100}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
                <p className="m-0 text-xs text-grafito/55">© 2026 IAMagica</p>
              </div>
              <a
                href="mailto:info@iamagica.es"
                className="inline-flex items-center gap-2 text-sm text-grafito/75 no-underline hover:text-bosque"
              >
                <span className="text-[20px] leading-none" aria-hidden="true">
                  ✉
                </span>
                <span>info@iamagica.es</span>
              </a>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
