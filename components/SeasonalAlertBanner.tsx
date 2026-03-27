"use client";

import Link from "next/link";

export default function SeasonalAlertBanner() {
  const month = new Date().getMonth() + 1;

  if (month < 1 || month > 5) {
    return null;
  }

  return (
    <div className="border-b border-amber-300/70 bg-amber-100 text-amber-950">
      <div className="page-shell py-3 text-sm font-medium">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>
            ⚠️ Temporada de procesionaria (ene-may): peligrosa para perros. Evita rutas con riesgo alto.
          </span>
          <Link
            href="/rutas?agua=true&procesionaria=bajo"
            className="underline decoration-amber-800/50 underline-offset-4 hover:decoration-amber-950"
          >
            Más info →
          </Link>
        </p>
      </div>
    </div>
  );
}
