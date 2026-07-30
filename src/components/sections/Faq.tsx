"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative z-10 mx-auto"
      style={{ padding: "40px 6vw 110px", maxWidth: 800 }}
    >
      <Reveal>
        <div className="text-center" style={{ marginBottom: 50 }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8fa6ff",
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            FAQ
          </div>
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(28px,3.4vw,40px)",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Perguntas frequentes.
          </h2>
        </div>
        <div className="flex flex-col" style={{ gap: 12 }}>
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex items-center justify-between cursor-pointer"
                  style={{ padding: "20px 24px", gap: 16 }}
                >
                  <span style={{ fontWeight: 600, fontSize: 15.5 }}>{q}</span>
                  <span
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{
                      minWidth: 22,
                      height: 22,
                      border: "1px solid rgba(255,255,255,0.2)",
                      fontSize: 15,
                      color: "rgba(245,246,248,0.6)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                  >
                    +
                  </span>
                </div>
                <div
                  style={{
                    maxHeight: isOpen ? 260 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 24px 22px",
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: "rgba(245,246,248,0.6)",
                    }}
                  >
                    {a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
