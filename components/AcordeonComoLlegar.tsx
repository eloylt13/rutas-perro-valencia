"use client";

import { useState } from "react";

type AcordeonComoLlegarProps = {
  texto: string;
  lat: number;
  lng: number;
};

export default function AcordeonComoLlegar({
  texto,
  lat,
  lng
}: AcordeonComoLlegarProps) {
  const [abierto, setAbierto] = useState(false);
  const showComoLlegarWarning = texto.toLowerCase().includes("pendiente de verificación");

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
          {texto ? (
            <p className="text-sm leading-6 text-grafito/70">
              {showComoLlegarWarning ? "⚠️ " : null}
              {texto}
            </p>
          ) : (
            <p className="text-sm leading-6 text-grafito/70">
              No hay indicaciones disponibles para este punto de inicio.
            </p>
          )}

          <a
            href={`https://maps.google.com/?q=${lat},${lng}`}
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