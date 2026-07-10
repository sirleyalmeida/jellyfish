# Jellyfish Portfolio

Projeto estático demonstrando um efeito visual de águas-vivas (jellyfish) usado como pano de fundo de um portfólio front-end.

**Descrição rápida:**
- Fundo com várias águas-vivas animadas via CSS e animação de tentáculos via JavaScript leve.
- Foco em performance, acessibilidade (prefers-reduced-motion), e responsividade.

<img width="1911" height="956" alt="Captura de Tela 2026-07-10 às 12 18 26 PM" src="https://github.com/user-attachments/assets/e08121ef-f1f7-4ff6-9173-590f3a18adbd" />


**Demonstração:**
- Abra `src/index.html` em um navegador moderno (Chrome, Firefox, Safari) para ver o efeito localmente.

**Principais recursos:**
- Animações contínuas das águas-vivas com controle por variáveis CSS.
- Movimento de tentáculos gerado em `src/hooks/tentacles.js` com `requestAnimationFrame`.
- Queda de efeitos em dispositivos móveis e suporte a `prefers-reduced-motion`.

## Como executar

1. Abra o diretório do projeto:

```bash
cd path/to/jellyfish/src
open index.html
```

Ou sirva com um servidor local simples:

```bash
# com Python 3
python3 -m http.server 8000
```

Abra `http://localhost:8000` no navegador.

## Estrutura do projeto

- `src/`
  - `index.html` — marcação principal
  - `css/` — `styles.css`, `jellyfish.css`, `ocean.css`, `portfolio.css`
  - `hooks/` — `tentacles.js` (lógica de movimento)

## Personalização
- Ajuste variáveis CSS em `jellyfish.css` (`--float-duration`, `--float-delay`, `--jelly-size`) para alterar comportamento e escala.
- Reduza efeitos gráficos removendo filtros ou diminuindo `box-shadow` no CSS para melhor performance.

## Acessibilidade & Performance
- Respeita `prefers-reduced-motion` e desativa animações quando solicitado.
- Usa `will-change` e `translate3d` na JS para indicar ao browser otimizações de GPU.
- Evite filtros pesados em dispositivos móveis — já há reduções condicionais no CSS.

## Contribuição
- Faça fork, crie uma branch, implemente mudanças e envie um pull request com descrição clara das mudanças.
