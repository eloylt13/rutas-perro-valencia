import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://rutasperrovalencia.es"),
  title: "Mapa",
  description: "Mapa interactivo de rutas con perro cerca de Valencia.",
  alternates: {
    canonical: "/mapa"
  }
};

const MapaRutas = dynamic(() => import("@/components/MapaRutas"), { ssr: false });

export default function MapaPage() {
  return <MapaRutas />;
}
