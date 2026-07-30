"use client";

import { useState } from "react";
import { useScrollFx } from "@/context/ScrollContext";

export default function Background() {
  const { blobParallax1, blobParallax2 } = useScrollFx();
  const [particlesEnabled] = useState(true);

  if (!particlesEnabled) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          opacity: 0.35,
        }}
      />
      <div
        className="fixed z-0 pointer-events-none rounded-full"
        style={{
          top: "-200px",
          left: "-150px",
          width: 600,
          height: 600,
          background: "#4f7fff",
          opacity: 0.16,
          filter: "blur(120px)",
          transform: blobParallax1,
        }}
      />
      <div
        className="fixed z-0 pointer-events-none rounded-full"
        style={{
          bottom: "-220px",
          right: "-150px",
          width: 640,
          height: 640,
          background: "#8b5cf6",
          opacity: 0.14,
          filter: "blur(130px)",
          transform: blobParallax2,
        }}
      />
    </>
  );
}
