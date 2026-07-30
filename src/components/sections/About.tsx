import Image from "next/image";
import Reveal from "@/components/Reveal";
import { stack } from "@/lib/data";

export default function About() {
  return (
    <section
      className="relative z-10 mx-auto"
      style={{ padding: "40px 6vw 110px", maxWidth: 1300 }}
    >
      <Reveal>
        <div className="flex flex-wrap items-center" style={{ gap: 56 }}>
          <div
            style={{
              flex: "1 1 320px",
              minWidth: 280,
              maxWidth: 400,
            }}
          >
            <div
              className="relative rounded-[24px] overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 30px 70px -20px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src="/images/renan-about.jpeg"
                alt="Renan Barros"
                width={480}
                height={600}
                className="w-full block"
                style={{
                  filter: "grayscale(0.15) contrast(1.05)",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  objectPosition: "40% 15%",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(5,6,10,0) 55%,rgba(5,6,10,0.85) 100%)",
                }}
              />
            </div>
          </div>

          <div style={{ flex: "1 1 400px", minWidth: 280 }}>
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
              Sobre mim
            </div>
            <h2
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: "clamp(26px,3vw,36px)",
                letterSpacing: "-0.01em",
                margin: "0 0 20px",
              }}
            >
              Renan Barros — Desenvolvedor Full Stack
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(245,246,248,0.65)",
                margin: "0 0 20px",
              }}
            >
              Estou finalizando minha graduação em Tecnologia da Informação e
              me dedico todos os dias a evoluir como desenvolvedor. Tenho
              interesse especial em backend e automações — a parte da
              tecnologia que, quando bem construída, ninguém nota... só sente
              o resultado.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(245,246,248,0.65)",
                margin: "0 0 28px",
              }}
            >
              Meu objetivo é simples: construir soluções modernas que ajudam
              negócios reais a economizar tempo, automatizar processos e
              crescer através da tecnologia.
            </p>
            <div className="flex flex-wrap" style={{ gap: 10 }}>
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full"
                  style={{
                    padding: "8px 16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                    fontSize: 13.5,
                    color: "rgba(245,246,248,0.7)",
                    fontFamily: "monospace",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
