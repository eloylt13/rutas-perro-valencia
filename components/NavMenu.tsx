"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/rutas", label: "Rutas" },
  { href: "/mapa", label: "Mapa" },
  { href: "/guias", label: "Guías" }
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-3 pt-1">
      {navigation.map((item) => {
        const isActive = isActivePath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              isActive
                ? "rounded-full border border-bosque bg-bosque px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-bosque/15 bg-white/85 px-4 py-2 text-sm font-semibold text-bosque hover:border-bosque/40 hover:text-grafito"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}