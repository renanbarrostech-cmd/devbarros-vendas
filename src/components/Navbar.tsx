"use client";

import { useState } from "react";
import { waLinks } from "@/lib/whatsapp";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#cases", label: "Cases" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between border-b"
        style={{
          padding: "18px 6vw",
          background: "rgba(5,6,10,0.72)",
          backdropFilter: "blur(18px)",
          borderColor: "rgba(255,255,255,0.07)",
        }}
      >
        <a href="#top" className="flex items-center gap-[9px]">
          <span
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 19,
              letterSpacing: "-0.01em",
              color: "#f5f6f8",
            }}
          >
            Dev Barros
          </span>
          <span
            className="rounded-full"
            style={{
              width: 7,
              height: 7,
              background: "#4f7fff",
              boxShadow: "0 0 14px 3px rgba(79,127,255,0.75)",
            }}
          />
        </a>

        <div className="hidden md:flex items-center gap-[38px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 15,
                color: "rgba(245,246,248,0.72)",
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLinks.talk}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "11px 22px",
              borderRadius: 100,
              background: "linear-gradient(135deg,#4f7fff,#7b6bf0)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              boxShadow: "0 0 24px rgba(79,127,255,0.35)",
            }}
          >
            Conversar agora
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none p-2 cursor-pointer"
          aria-label="Abrir menu"
        >
          <span className="block w-[22px] h-[2px] bg-[#f5f6f8]" />
          <span className="block w-[22px] h-[2px] bg-[#f5f6f8]" />
          <span className="block w-[22px] h-[2px] bg-[#f5f6f8]" />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed left-0 right-0 z-[49] flex flex-col md:hidden"
          style={{
            top: 66,
            background: "rgba(8,9,15,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "22px 6vw",
            gap: 20,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 17, color: "#f5f6f8", fontWeight: 600 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLinks.talk}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 6,
              textAlign: "center",
              padding: 14,
              borderRadius: 14,
              background: "linear-gradient(135deg,#4f7fff,#7b6bf0)",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Conversar agora
          </a>
        </div>
      )}
    </>
  );
}
