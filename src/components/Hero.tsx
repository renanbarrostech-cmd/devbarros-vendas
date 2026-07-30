"use client";

import Image from "next/image";
import { useScrollFx } from "@/context/ScrollContext";
import { waLinks } from "@/lib/whatsapp";

export default function Hero() {
  const { heroMockupParallax } = useScrollFx();

  return (
    <section
      className="relative z-10 flex flex-wrap items-center mx-auto"
      style={{
        padding: "88px 6vw 60px",
        gap: 64,
        maxWidth: 1400,
      }}
    >
      <div style={{ flex: "1 1 460px", minWidth: 300 }}>
        <div
          className="inline-flex items-center rounded-full"
          style={{
            gap: 10,
            padding: "6px 16px 6px 6px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.03)",
            marginBottom: 26,
          }}
        >
          <Image
            src="/images/renan-about.jpeg"
            alt="Renan Barros"
            width={28}
            height={28}
            className="rounded-full object-cover"
            style={{
              width: 28,
              height: 28,
              objectPosition: "38% 22%",
              filter: "grayscale(0.3) contrast(1.05)",
            }}
          />
          <span
            style={{
              fontSize: 13,
              color: "rgba(245,246,248,0.75)",
              fontWeight: 600,
            }}
          >
            Renan Barros — Full Stack Developer
          </span>
        </div>

        <h1
          className="font-display"
          style={{
            fontWeight: 800,
            fontSize: "clamp(40px,5.8vw,68px)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            margin: "0 0 22px",
          }}
        >
          Tecnologia que{" "}
          <span
            style={{
              background: "linear-gradient(120deg,#6f9bff,#a78bfa)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            transforma
          </span>{" "}
          o seu negócio.
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(245,246,248,0.6)",
            maxWidth: 520,
            margin: "0 0 34px",
          }}
        >
          Sites, sistemas e automações sob medida para empresas que querem
          crescer sem depender de processos manuais.
        </p>

        <div className="flex flex-wrap" style={{ gap: 16 }}>
          <a
            href={waLinks.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "16px 30px",
              borderRadius: 14,
              background: "linear-gradient(135deg,#4f7fff,#7b6bf0)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15.5,
              boxShadow: "0 0 34px rgba(79,127,255,0.4)",
            }}
          >
            Solicitar uma demonstração
          </a>
          <a
            href={waLinks.talk}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "16px 30px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.16)",
              color: "#f5f6f8",
              fontWeight: 600,
              fontSize: 15.5,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            Conversar agora
          </a>
        </div>
      </div>

      <div
        className="relative flex justify-center"
        style={{ flex: "1 1 420px", minWidth: 300 }}
      >
        <div
          className="relative w-full rounded-[24px]"
          style={{
            maxWidth: 460,
            background: "rgba(255,255,255,0.035)",
            border: "1px solid rgba(255,255,255,0.09)",
            backdropFilter: "blur(16px)",
            padding: 22,
            boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)",
            transform: heroMockupParallax,
          }}
        >
          <div className="flex" style={{ gap: 6, marginBottom: 20 }}>
            <span
              className="rounded-full"
              style={{ width: 9, height: 9, background: "rgba(255,255,255,0.18)" }}
            />
            <span
              className="rounded-full"
              style={{ width: 9, height: 9, background: "rgba(255,255,255,0.18)" }}
            />
            <span
              className="rounded-full"
              style={{ width: 9, height: 9, background: "rgba(255,255,255,0.18)" }}
            />
          </div>
          <div className="flex" style={{ gap: 16 }}>
            <div
              className="flex flex-col"
              style={{ gap: 14, paddingTop: 4 }}
            >
              <span style={{ width: 9, height: 9, borderRadius: 3, background: "#4f7fff" }} />
              <span style={{ width: 9, height: 9, borderRadius: 3, background: "rgba(255,255,255,0.18)" }} />
              <span style={{ width: 9, height: 9, borderRadius: 3, background: "rgba(255,255,255,0.18)" }} />
              <span style={{ width: 9, height: 9, borderRadius: 3, background: "rgba(255,255,255,0.18)" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(245,246,248,0.4)",
                  marginBottom: 12,
                  fontFamily: "monospace",
                }}
              >
                Automações · Tempo real
              </div>
              <div
                className="flex items-end"
                style={{ gap: 8, height: 100, marginBottom: 18 }}
              >
                <div style={{ flex: 1, height: "38%", background: "rgba(79,127,255,0.35)", borderRadius: "6px 6px 0 0" }} />
                <div style={{ flex: 1, height: "62%", background: "rgba(79,127,255,0.55)", borderRadius: "6px 6px 0 0" }} />
                <div style={{ flex: 1, height: "44%", background: "rgba(139,92,246,0.5)", borderRadius: "6px 6px 0 0" }} />
                <div style={{ flex: 1, height: "82%", background: "#4f7fff", borderRadius: "6px 6px 0 0", boxShadow: "0 0 20px rgba(79,127,255,0.6)" }} />
                <div style={{ flex: 1, height: "56%", background: "rgba(139,92,246,0.6)", borderRadius: "6px 6px 0 0" }} />
                <div style={{ flex: 1, height: "70%", background: "rgba(79,127,255,0.45)", borderRadius: "6px 6px 0 0" }} />
              </div>
              <div
                className="flex items-center justify-between rounded-xl"
                style={{
                  padding: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ fontSize: 11, color: "rgba(245,246,248,0.4)" }}>
                  Eficiência operacional
                </div>
                <div
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: 17, color: "#8fe3b0" }}
                >
                  +38%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="animate-float absolute flex items-center rounded-2xl"
          style={{
            bottom: -22,
            left: -14,
            padding: "12px 16px",
            background: "rgba(10,12,20,0.92)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            gap: 11,
            maxWidth: 220,
          }}
        >
          <Image
            src="/images/whatsapp-hero.jpeg"
            alt="Renan Barros"
            width={34}
            height={34}
            className="rounded-full object-cover shrink-0"
            style={{
              width: 34,
              height: 34,
              objectPosition: "38% 22%",
              filter: "grayscale(0.3) contrast(1.05)",
            }}
          />
          <div style={{ fontSize: 12, lineHeight: 1.35, color: "rgba(245,246,248,0.75)" }}>
            Orçamento sob consulta para sites e automações
          </div>
        </div>
      </div>
    </section>
  );
}
