# SafeClick | Site institucional

Página inicial do PFC **SafeClick**, plataforma de educação em segurança digital desenvolvida no curso de Sistemas de Informação da Universidade de Mogi das Cruzes (UMC).

- Sistema: https://safeclick-umc.vercel.app
- Repositório do sistema: https://github.com/EduMafra10/SafeClick

## Páginas

| Rota | Página |
|---|---|
| `/` | Início |
| `/sobre` | Sobre o projeto |
| `/funcionalidades` | Funcionalidades |
| `/seguranca` | Segurança |
| `/tecnologias` | Tecnologias |
| `/equipe` | Equipe |
| `*` | Página 404 |

## Tecnologias

React 19, Vite, React Router e React Icons. Deploy na Vercel.

## Como rodar

```bash
npm install
npm run dev
```

Build de produção: `npm run build`.

## Estrutura

```
src/
  components/   Navbar, Footer, Card, PageHeader, Logo, ScrollToTop
  pages/        uma página por rota
  data/         textos e dados do site (conteudo.js)
  index.css     estilos globais
vercel.json     redireciona todas as rotas para o index.html (SPA)
```

## Uso de IA

O site foi gerado com o Claude (Anthropic), seguindo o fluxo ideia → protótipo → código → ajustes → entrega.

**Prompt inicial:** pedido de um site em React + Vite com no mínimo 5 páginas, servindo de página inicial do PFC, com o conteúdo baseado no README do repositório do SafeClick.

**Revisões e ajustes feitos:**
- Conferência de todos os textos com o README do sistema (funcionalidades, stack, medidas de segurança e equipe).
- Correção do espaçamento do logo ("Safe Click" → "SafeClick").
- Teste das páginas no desktop e no celular, incluindo o menu responsivo.
- Correção do `ScrollToTop`, que retornava o resultado de `window.scrollTo` dentro do `useEffect` e deixava a página em branco no Chrome.
- Inclusão do `vercel.json` para que as rotas funcionem ao recarregar a página na Vercel.
