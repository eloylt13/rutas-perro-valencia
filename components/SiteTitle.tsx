"use client";

import { usePathname } from "next/navigation";

const className = "font-serif text-4xl font-bold tracking-tight text-bosque sm:text-5xl";

export default function SiteTitle() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <h1 className={className}>Rutas con perro en Valencia</h1>;
  }

  return <p className={className}>Rutas con perro en Valencia</p>;
}
