import { waLinks } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer
      className="relative z-10 mx-auto"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "60px 6vw 36px",
        maxWidth: 1300,
      }}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 40,
          marginBottom: 44,
        }}
      >
        <div>
          <div className="flex items-center" style={{ gap: 9, marginBottom: 14 }}>
            <span className="font-display" style={{ fontWeight: 700, fontSize: 18 }}>
              Renan Barros
            </span>
            <span
              className="rounded-full"
              style={{
                width: 7,
                height: 7,
                background: "#4f7fff",
                boxShadow: "0 0 12px 2px rgba(79,127,255,0.7)",
              }}
            />
          </div>
          <div style={{ fontSize: 14, color: "rgba(245,246,248,0.5)", lineHeight: 1.6 }}>
            Desenvolvedor Full Stack.
            <br />
            Tecnologia sob medida para negócios que querem crescer.
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "rgba(245,246,248,0.4)",
              marginBottom: 16,
            }}
          >
            Navegação
          </div>
          <div className="flex flex-col" style={{ gap: 11, fontSize: 14.5 }}>
            <a href="#servicos" style={{ color: "rgba(245,246,248,0.65)" }}>Serviços</a>
            <a href="#como-funciona" style={{ color: "rgba(245,246,248,0.65)" }}>Como funciona</a>
            <a href="#cases" style={{ color: "rgba(245,246,248,0.65)" }}>Cases</a>
            <a href="#faq" style={{ color: "rgba(245,246,248,0.65)" }}>FAQ</a>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "rgba(245,246,248,0.4)",
              marginBottom: 16,
            }}
          >
            Contato
          </div>
          <div className="flex flex-col" style={{ gap: 11, fontSize: 14.5 }}>
            <a href={waLinks.talk} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,246,248,0.65)" }}>
              WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/renan-costa-barros" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,246,248,0.65)" }}>
              LinkedIn
            </a>
            <a href="https://github.com/renanbarrostech-cmd" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,246,248,0.65)" }}>
              GitHub
            </a>
            <a href="https://instagram.com/renan.devbarros" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,246,248,0.65)" }}>
              Instagram
            </a>
            <a href="mailto:renanbarros.tech@gmail.com" style={{ color: "rgba(245,246,248,0.65)" }}>
              Email
            </a>
          </div>
        </div>
      </div>
      <div
        className="text-center"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 24,
          fontSize: 13,
          color: "rgba(245,246,248,0.35)",
        }}
      >
        © 2026 Renan Barros. Todos os direitos reservados.
      </div>
    </footer>
  );
}
