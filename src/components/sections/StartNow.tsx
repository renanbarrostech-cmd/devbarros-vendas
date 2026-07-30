import { waLinks } from "@/lib/whatsapp";

export default function StartNow() {
  return (
    <section
      id="comece"
      className="relative z-10 mx-auto"
      style={{ padding: "40px 6vw 110px", maxWidth: 1000 }}
    >
      <div
        className="rounded-[28px] flex flex-wrap items-center"
        style={{
          padding: "56px 6vw",
          background:
            "radial-gradient(circle at 20% 20%,rgba(79,127,255,0.14),transparent 55%),rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.09)",
          gap: 44,
        }}
      >
        <div style={{ flex: "1 1 320px", minWidth: 260 }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8fe3b0",
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            Comece agora
          </div>
          <h2
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: "clamp(26px,3vw,36px)",
              letterSpacing: "-0.01em",
              margin: "0 0 16px",
            }}
          >
            Um site simples, moderno e pronto para gerar contatos.
          </h2>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.65,
              color: "rgba(245,246,248,0.6)",
              maxWidth: 460,
              margin: "0 0 22px",
            }}
          >
            Ideal para quem ainda não tem presença digital ou quer sair de um
            site ultrapassado — com o mesmo cuidado de design dos nossos
            projetos maiores.
          </p>
          <div className="flex flex-col" style={{ gap: 10 }}>
            {[
              "Mais credibilidade para o seu negócio",
              "Clientes te encontrando no Google",
              "Agendamento e contato direto pelo WhatsApp",
              "Entrega rápida, sem burocracia",
            ].map((item) => (
              <div
                key={item}
                style={{ fontSize: 14, color: "rgba(245,246,248,0.72)" }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
        <div
          className="text-center rounded-[20px]"
          style={{
            flex: "1 1 260px",
            minWidth: 240,
            padding: "36px 28px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "rgba(245,246,248,0.5)",
              marginBottom: 10,
            }}
          >
            Quanto vale um cliente que você perdeu por não ter um site?
          </div>
          <div
            className="font-display"
            style={{
              fontWeight: 700,
              fontSize: 22,
              lineHeight: 1.35,
              marginBottom: 22,
            }}
          >
            Descubra o que a tecnologia certa pode fazer pelo seu negócio.
          </div>
          <a
            href={waLinks.simple}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl"
            style={{
              padding: 15,
              background: "linear-gradient(135deg,#4f7fff,#7b6bf0)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              boxShadow: "0 0 30px rgba(79,127,255,0.4)",
            }}
          >
            Quero saber mais
          </a>
        </div>
      </div>
    </section>
  );
}
