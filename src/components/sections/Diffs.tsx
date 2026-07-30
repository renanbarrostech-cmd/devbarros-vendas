import Reveal from "@/components/Reveal";
import { diffs } from "@/lib/data";

export default function Diffs() {
  return (
    <section
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
            Diferenciais
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
            Por que trabalhar com a gente.
          </h2>
        </div>
        <div
          className="grid rounded-[20px] overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 2,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {diffs.map((d) => (
            <div
              key={d.title}
              style={{ padding: 28, background: "rgba(255,255,255,0.02)" }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: d.color,
                  marginBottom: 16,
                  boxShadow: `0 0 10px 2px ${d.color}`,
                }}
              />
              <div
                className="font-display"
                style={{ fontWeight: 700, fontSize: 16.5, marginBottom: 8 }}
              >
                {d.title}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "rgba(245,246,248,0.55)",
                }}
              >
                {d.desc}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
