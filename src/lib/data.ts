export const blue = {
  bg: "rgba(79,127,255,0.16)",
  glow: "0 0 18px rgba(79,127,255,0.3)",
  color: "#4f7fff",
};
export const purple = {
  bg: "rgba(139,92,246,0.16)",
  glow: "0 0 18px rgba(139,92,246,0.3)",
  color: "#8b5cf6",
};
export const pick = (i: number) => (i % 2 === 0 ? blue : purple);

export const sectors = [
  "Barbearias",
  "Clínicas",
  "Academias",
  "Restaurantes",
  "Imobiliárias",
  "Escritórios",
  "Contabilidades",
  "Lojas",
];

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Prisma ORM",
  "Neon PostgreSQL",
  "Better Auth",
  "Tailwind CSS",
];

const benefitsRaw: [string, string][] = [
  [
    "Economia de tempo",
    "Menos horas em tarefas manuais, mais tempo para o que importa.",
  ],
  [
    "Mais produtividade",
    "Times focados no que gera resultado, não em retrabalho.",
  ],
  [
    "Menos tarefas repetitivas",
    "Processos automatizados do início ao fim.",
  ],
  [
    "Mais vendas",
    "Experiências digitais que convertem visitantes em clientes.",
  ],
  [
    "Atendimento mais rápido",
    "Respostas imediatas, em qualquer hora do dia.",
  ],
  [
    "Escalabilidade",
    "Estrutura pronta para crescer sem travar a operação.",
  ],
];
export const benefits = benefitsRaw.map(([title, desc], i) => ({
  title,
  desc,
  bg: pick(i).bg,
  glow: pick(i).glow,
}));

const servicesRaw: [string, string][] = [
  [
    "Sites institucionais modernos",
    "Presença digital sofisticada que comunica autoridade desde o primeiro acesso.",
  ],
  [
    "Landing Pages de alta conversão",
    "Páginas focadas em transformar visitantes em contatos qualificados.",
  ],
  [
    "Sistemas Web & Dashboards",
    "Painéis sob medida para acompanhar métricas e decisões em tempo real.",
  ],
  [
    "Portais & Sistemas administrativos",
    "Centralize operações, times e processos em um único ambiente.",
  ],
  [
    "Aplicações SaaS",
    "Produtos digitais escaláveis, prontos para crescer com o seu negócio.",
  ],
  [
    "Integrações & APIs",
    "Conectamos as ferramentas que sua empresa já usa em um fluxo único.",
  ],
  [
    "Automações inteligentes & IA",
    "Processos que exigiam horas passam a rodar sozinhos, todos os dias.",
  ],
  [
    "Atendimento automatizado & Agendamento",
    "Respostas rápidas e agendamentos inteligentes, mesmo fora do horário comercial.",
  ],
  [
    "CRM & Integrações com WhatsApp",
    "Relacionamento organizado com clientes, direto no canal que eles já usam.",
  ],
];
export const services = servicesRaw.map(([title, desc], i) => ({
  title,
  desc,
  bg: pick(i).bg,
  glow: pick(i).glow,
}));

export const steps = (
  [
    [
      "01",
      "Conversa inicial",
      "Entendemos seu negócio, seus desafios e onde a tecnologia pode gerar mais impacto.",
    ],
    [
      "02",
      "Diagnóstico",
      "Mapeamos processos e identificamos oportunidades de automação e crescimento.",
    ],
    [
      "03",
      "Desenvolvimento sob medida",
      "Construímos a solução ideal, com tecnologia moderna e performance real.",
    ],
    [
      "04",
      "Implantação",
      "Colocamos tudo em produção com atenção total aos detalhes.",
    ],
    [
      "05",
      "Evolução contínua",
      "Acompanhamos, ajustamos e evoluímos a solução junto com o seu negócio.",
    ],
  ] as [string, string, string][]
).map(([n, title, desc]) => ({ n, title, desc }));

const casesRaw: [string, string, string, string][] = [
  [
    "Dashboard para clínicas",
    "Saúde",
    "Painel completo para acompanhar agendamentos, pacientes e indicadores em tempo real.",
    "linear-gradient(135deg,#1a2440,#2a3a6b,#4f7fff)",
  ],
  [
    "Sistema de gestão para academias",
    "Fitness",
    "Controle de matrículas, planos e frequência em um único sistema.",
    "linear-gradient(135deg,#241a40,#3a2a6b,#8b5cf6)",
  ],
  [
    "Landing page para barbearias",
    "Beleza & Estética",
    "Página de alta conversão com agendamento integrado ao WhatsApp.",
    "linear-gradient(135deg,#101820,#1c2b3d,#4f7fff)",
  ],
  [
    "Painel administrativo",
    "Gestão",
    "Centralização de operações, financeiro e equipe em um só lugar.",
    "linear-gradient(135deg,#1c1420,#331f4d,#7b6bf0)",
  ],
  [
    "Automação de atendimento",
    "Atendimento",
    "Fluxo inteligente que responde, qualifica e agenda automaticamente.",
    "linear-gradient(135deg,#0f1e22,#173d4a,#4f9fff)",
  ],
];
export const cases = casesRaw.map(([title, tag, desc, thumb]) => ({
  title,
  tag,
  desc,
  thumb,
}));

const diffsRaw: [string, string][] = [
  ["Tecnologia moderna", "Stack atual, sem gambiarras nem soluções ultrapassadas."],
  ["Alta performance", "Sistemas rápidos, otimizados de ponta a ponta."],
  ["Segurança", "Boas práticas de proteção de dados em cada camada."],
  ["Escalabilidade", "Preparado para crescer junto com sua empresa."],
  ["UX profissional", "Interfaces pensadas para conversão e clareza."],
  [
    "Desenvolvimento personalizado",
    "Nada de templates genéricos — solução sob medida.",
  ],
  ["Integração entre sistemas", "Suas ferramentas conversando entre si."],
  ["Suporte próximo", "Comunicação direta, sem burocracia."],
];
export const diffs = diffsRaw.map(([title, desc], i) => ({
  title,
  desc,
  color: pick(i).color,
}));

export const faqs: [string, string][] = [
  [
    "Quanto tempo leva para desenvolver meu projeto?",
    "Cada projeto tem um prazo próprio, definido após entendermos suas necessidades. Vamos conversar para te dar uma estimativa real.",
  ],
  [
    "Vocês atendem qualquer tipo de negócio?",
    "Sim. Desenvolvemos soluções sob medida para clínicas, academias, barbearias, escritórios, lojas e diversos outros segmentos.",
  ],
  [
    "Preciso já ter um site para contratar automações?",
    "Não. Podemos criar tudo do zero ou integrar com o que você já tem.",
  ],
  [
    "Como funciona o suporte após a entrega?",
    "Acompanhamos a evolução da solução e ficamos disponíveis para ajustes e melhorias contínuas.",
  ],
  [
    "O sistema pode se integrar com o WhatsApp?",
    "Sim, criamos integrações completas para atendimento, agendamento e CRM direto pelo WhatsApp.",
  ],
  [
    "Como sei qual solução é ideal para o meu negócio?",
    "Vamos conversar sobre seus processos e objetivos — a partir disso, indicamos o melhor caminho.",
  ],
];
