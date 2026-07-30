import Reveal from "@/components/Reveal";
import { waLinks } from "@/lib/whatsapp";

export default function FinalCta() {
  return (
    <section
      className="relative z-10 mx-auto"
      style={{ padding: "40px 6vw 120px", maxWidth: 1000 }}
    >
      <Reveal>
        <div
          className="text-center rounded-[28px] relative overflow-hidden"
          style={{
            padding: "70px 6vw",
            background:
              "radial-gradient(circle at 50% 0%,rgba(79,127,255,0.16),transparent 60%),rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          <h2
            className="font-display"
            style={{
              fontWeight: 800,
              fontSize: "clamp(30px,4.4vw,50px)",
              letterSpacing: "-0.02em",
              margin: "0 0 20px",
            }}
          >
            Empresas que investem em tecnologia crescem com menos esforço.
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: 17,
              color: "rgba(245,246,248,0.62)",
              maxWidth: 560,
              marginBottom: 38,
            }}
          >
            Vamos entender seu negócio e mostrar como a tecnologia certa pode
            economizar seu tempo e acelerar seus resultados.
          </p>
          <a
            href={waLinks.project}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl"
            style={{
              padding: "19px 40px",
              background: "linear-gradient(135deg,#4f7fff,#7b6bf0)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 17,
              boxShadow: "0 0 44px rgba(79,127,255,0.5)",
            }}
          >
            Vamos conversar sobre seu projeto
          </a>
        </div>
      </Reveal>
    </section>
  );
}
