"use client";

import { useState } from "react";
import Link from "next/link";

export default function SeasonalAlertBanner() {
  const month = new Date().getMonth() + 1;
  const [isVisible, setIsVisible] = useState(true);

  if (month < 1 || month > 5 || !isVisible) {
    return null;
  }

  return (
    <div className="border-b border-amber-300/70 bg-amber-100 text-amber-950">
      <div className="page-shell flex items-start justify-between gap-3 py-3 text-sm font-medium">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>
            ⚠️ Temporada de procesionaria (ene-may): peligrosa para perros. Evita rutas con riesgo alto.
          </span>
          <Link
            href="/guias/procesionaria-perros"
            className="underline decoration-amber-800/50 underline-offset-4 hover:decoration-amber-950"
          >
            Más info →
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar aviso de procesionaria"
          className="shrink-0 cursor-pointer bg-transparent px-2 py-1 text-amber-950 transition hover:text-grafito"
        >
          X
        </button>
      </div>
    </div>
  );
}