"use client";

import { useState } from "react";

type AcordeonComoLlegarProps = {
  latitude: number;
  longitude: number;
  comoLlegar?: string;
};

export default function AcordeonComoLlegar({
  latitude,
  longitude,
  comoLlegar
}: AcordeonComoLlegarProps) {
  const [abierto, setAbierto] = useState(false);
  const showComoLlegarWarning = comoLlegar
    ?.toLowerCase()
    .includes("pendiente de verificación");

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setAbierto((valorActual) => !valorActual)}
        className="inline-flex text-sm font-semibold text-bosque hover:text-grafito"
        aria-expanded={abierto}
      >
        {abierto ? "▲" : "▼"} Cómo llegar al inicio
      </button>

      {abierto ? (
        <div className="mt-3 space-y-3">
          {comoLlegar ? (
            <p className="text-sm leading-6 text-grafito/70">
              {showComoLlegarWarning ? "⚠️ " : null}
              {comoLlegar}
            </p>
          ) : (
            <p className="text-sm leading-6 text-grafito/70">
              No hay indicaciones disponibles para este punto de inicio.
            </p>
          )}

          <a
            href={`https://maps.google.com/?q=${latitude},${longitude}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-semibold text-bosque hover:text-grafito"
          >
            Abrir punto de inicio en Google Maps
          </a>
        </div>
      ) : null}
    </div>
  );
}
