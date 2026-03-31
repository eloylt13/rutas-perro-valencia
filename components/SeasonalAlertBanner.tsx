"use client";

import { useState } from "react";
import Link from "next/link";

export default function SeasonalAlertBanner() {
  const month = new Date().getMonth() + 1;
  const [isVisible, setIsVisible] = useState(true);
  const isSeasonMonth = month >= 11 || month <= 4;

  if (!isSeasonMonth || !isVisible) {
    return null;
  }

  return (
    <div className="border-b border-amber-300/70 bg-amber-100 text-amber-950">
      <div className="page-shell flex items-center justify-between gap-2 py-1.5">
        <p className="truncate text-xs font-medium leading-tight">
          ⚠️ Procesionaria (nov–abr): peligrosa para perros.{" "}
          <Link
            href="/guias/procesionaria-perros"
            className="underline decoration-amber-800/50 underline-offset-2 hover:decoration-amber-950"
          >
            Más info →
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar aviso de procesionaria"
          className="shrink-0 cursor-pointer bg-transparent px-1 text-xs text-amber-950 transition hover:text-grafito"
        >
          X
        </button>
      </div>
    </div>
  );
}