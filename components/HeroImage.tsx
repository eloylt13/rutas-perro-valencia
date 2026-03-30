"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HeroImage() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <Image
      src="/nala.png"
      alt="Nala — la perrita de las rutas"
      width={320}
      height={320}
      className="h-auto w-full max-w-[320px]"
      style={{
        objectFit: "contain",
        mixBlendMode: "multiply"
      }}
    />
  );
}
