import Reveal from "@/components/Reveal";
import { sectors } from "@/lib/data";

export default function Sectors() {
  return (
    <section
      className="relative z-10 mx-auto"
      style={{ padding: "40px 6vw 70px", maxWidth: 1300 }}
    >
      <Reveal>
        <div
          className="text-center"
          style={{
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(245,246,248,0.4)",
            marginBottom: 26,
            fontWeight: 600,
          }}
        >
          Setores que confiam em soluções sob medida
        </div>
        <div className="flex flex-wrap justify-center" style={{ gap: 14 }}>
          {sectors.map((sector) => (
            <div
              key={sector}
              className="rounded-full"
              style={{
                padding: "11px 22px",
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(255,255,255,0.03)",
                fontSize: 14.5,
                color: "rgba(245,246,248,0.62)",
                fontWeight: 500,
              }}
            >
              {sector}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
