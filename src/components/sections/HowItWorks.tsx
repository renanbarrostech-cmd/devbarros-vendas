import Reveal from "@/components/Reveal";
import { steps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative z-10 mx-auto"
      style={{ padding: "40px 6vw 110px", maxWidth: 1000 }}
    >
      <Reveal>
        <div
          className="text-center mx-auto"
          style={{ maxWidth: 640, marginBottom: 60 }}
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
            Como funciona
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
            Um processo claro, do primeiro contato à evolução contínua.
          </h2>
        </div>
        <div className="flex flex-col">
          {steps.map((st) => (
            <div
              key={st.n}
              className="flex"
              style={{
                gap: 26,
                padding: "26px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#4f7fff",
                  minWidth: 36,
                  paddingTop: 2,
                }}
              >
                {st.n}
              </div>
              <div>
                <div
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: 19, marginBottom: 8 }}
                >
                  {st.title}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "rgba(245,246,248,0.6)",
                    maxWidth: 600,
                  }}
                >
                  {st.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
