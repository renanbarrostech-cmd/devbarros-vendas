import Reveal from "@/components/Reveal";
import { benefits } from "@/lib/data";

export default function Benefits() {
  return (
    <section
      className="relative z-10 mx-auto"
      style={{ padding: "40px 6vw 100px", maxWidth: 1300 }}
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
            Benefícios
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
            Menos operação manual. Mais crescimento real.
          </h2>
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 22,
          }}
        >
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-[20px]"
              style={{
                padding: 30,
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-[11px]"
                style={{
                  width: 38,
                  height: 38,
                  background: b.bg,
                  marginBottom: 20,
                  boxShadow: b.glow,
                }}
              >
                <span
                  className="rounded-full"
                  style={{ width: 9, height: 9, background: "#fff" }}
                />
              </div>
              <div
                className="font-display"
                style={{ fontWeight: 700, fontSize: 18, marginBottom: 9 }}
              >
                {b.title}
              </div>
              <div
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: "rgba(245,246,248,0.6)",
                }}
              >
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
