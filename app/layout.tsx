import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SeasonalAlertBanner from "@/components/SeasonalAlertBanner";
import "leaflet/dist/leaflet.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rutas con perro en Valencia",
  description:
    "Colección de rutas verificadas para disfrutar con perro cerca de Valencia, organizadas por zona, tipo y ficha detallada.",
  metadataBase: new URL("https://rutasperrovalencia.es"),
  verification: {
    google: "6Cr92jGfY8D6cZX4sdEC1v1vECb_mgjBy8Jd9qoUfI4"
  }
};

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/rutas", label: "Rutas" },
  { href: "/mapa", label: "Mapa" }
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
                    <h1 className="font-serif text-4xl font-bold tracking-tight text-bosque sm:text-5xl">
                      Rutas con perro en Valencia
                    </h1>
                  </Link>
                  <p className="max-w-xl text-base leading-7 text-grafito/80 sm:text-lg">
                    Una base sencilla y clara para encontrar escapadas por zona,
                    cercanía o perfil de ruta, con datos prácticos para salir con tu
                    perro con más confianza.
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
        </div>
      </body>
    </html>
  );
}
