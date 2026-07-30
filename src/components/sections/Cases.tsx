import Reveal from "@/components/Reveal";
import { cases } from "@/lib/data";

export default function Cases() {
  return (
    <section
      id="cases"
      className="relative z-10 mx-auto"
      style={{ padding: "40px 6vw 110px", maxWidth: 1300 }}
    >
      <Reveal>
        <div
          className="text-center mx-auto"
          style={{ maxWidth: 640, marginBottom: 56 }}
        >
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
            Cases
          </div>
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(28px,3.4vw,40px)",
              letterSpacing: "-0.01em",
              margin: "0 0 14px",
            }}
          >
            Exemplos do que construímos.
          </h2>
          <p
            style={{
              color: "rgba(245,246,248,0.55)",
              fontSize: 14.5,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Projetos ilustrativos representando o tipo de solução que
            desenvolvemos.
          </p>
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 22,
          }}
        >
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-[20px] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="animate-drift flex items-center justify-center relative"
                style={{
                  height: 150,
                  background: c.thumb,
                  backgroundSize: "200% 200%",
                }}
              >
                <span
                  className="rounded-lg"
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11.5,
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.75)",
                    textTransform: "uppercase",
                    background: "rgba(0,0,0,0.25)",
                    padding: "6px 12px",
                  }}
                >
                  preview do projeto
                </span>
              </div>
              <div style={{ padding: 24 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#a9c0ff",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 10,
                  }}
                >
                  {c.tag}
                </div>
                <div
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: 18, marginBottom: 9 }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "rgba(245,246,248,0.6)",
                  }}
                >
                  {c.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
