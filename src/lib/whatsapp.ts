const WHATSAPP_NUMBER = "5511987160499";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waLinks = {
  talk: waLink("Olá! Vim pelo site e quero conversar sobre um projeto."),
  demo: waLink("Olá! Vim pelo site e quero solicitar uma demonstração."),
  simple: waLink(
    "Olá! Vim pelo site e quero saber mais sobre um site para o meu negócio."
  ),
  project: waLink(
    "Olá Renan! Vim pelo site e quero conversar sobre meu projeto."
  ),
};
