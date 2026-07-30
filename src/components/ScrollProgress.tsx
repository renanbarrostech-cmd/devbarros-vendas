"use client";

import { useScrollFx } from "@/context/ScrollContext";

export default function ScrollProgress() {
  const { scrollPct } = useScrollFx();

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[60]"
      style={{
        background: "linear-gradient(90deg,#4f7fff,#8b5cf6)",
        width: `${scrollPct}%`,
        transition: "width 0.1s linear",
        boxShadow: "0 0 10px rgba(79,127,255,0.6)",
      }}
    />
  );
}
