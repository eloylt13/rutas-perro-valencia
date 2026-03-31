"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

const EMAIL_ADDRESS = "info@iamagica.es";
const MOBILE_USER_AGENT_PATTERN =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

type FooterProps = {
  methodologyHref?: string;
};

function isMobileDevice() {
  if (typeof navigator === "undefined") {
    return false;
  }

  return MOBILE_USER_AGENT_PATTERN.test(navigator.userAgent);
}

export default function Footer({ methodologyHref }: FooterProps) {
  const handleEmailClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (isMobileDevice()) {
      return;
    }

    event.preventDefault();

    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      alert(`Correo copiado: ${EMAIL_ADDRESS}`);
    } catch {
      window.location.href = `mailto:${EMAIL_ADDRESS}`;
    }
  };

  return (
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

        <div className="flex flex-col items-center gap-2 md:items-end">
          {methodologyHref ? (
            <Link
              href={methodologyHref}
              className="text-sm font-semibold text-bosque hover:text-grafito"
            >
              Cómo verificamos las rutas
            </Link>
          ) : null}

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            onClick={handleEmailClick}
            style={{
              fontSize: "13px",
              color: "#6b7280",
              textDecoration: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            ✉ {EMAIL_ADDRESS}
          </a>
        </div>
      </div>
    </footer>
  );
}
