import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="servicos"
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
            Serviços
          </div>
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(28px,3.4vw,40px)",
              letterSpacing: "-0.01em",
              margin: "0 0 16px",
            }}
          >
            Soluções sob medida para cada etapa do seu negócio.
          </h2>
          <p style={{ color: "rgba(245,246,248,0.6)", fontSize: 16, margin: 0 }}>
            Do site institucional à automação mais avançada.
          </p>
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 20,
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card rounded-[20px]"
              style={{
                padding: 28,
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: 42,
                  height: 42,
                  background: s.bg,
                  marginBottom: 22,
                  boxShadow: s.glow,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    border: "2px solid #fff",
                    borderRadius: 4,
                  }}
                />
              </div>
              <div
                className="font-display"
                style={{ fontWeight: 700, fontSize: 17.5, marginBottom: 10 }}
              >
                {s.title}
              </div>
              <div
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: "rgba(245,246,248,0.6)",
                }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
