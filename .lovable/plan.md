O objetivo é aplicar um tema "total black" (preto puro) ao site, tornando o fundo completamente preto e ajustando os outros elementos para manter o contraste e a elegância.

### Alterações sugeridas:

1.  **Ajustar `src/styles.css`**:
    *   Mudar `--background` para preto puro `oklch(0 0 0)` tanto no `:root` quanto em `.dark`.
    *   Ajustar `--card`, `--popover` e `--secondary` para tons de cinza muito escuros para manter a hierarquia visual.
    *   Refinar `--border` e `--input` para serem mais sutis sobre o fundo preto.

2.  **Ajustar `src/routes/index.tsx`**:
    *   Remover efeitos de sombra azulados (`shadow-[0_0_15px_rgba(59,130,246,0.1)]`) que podem parecer excessivos no fundo preto puro, ou suavizá-los.
    *   Ajustar a opacidade dos fundos dos cartões (`bg-white/[0.03]`) para garantir que se destaquem levemente do preto absoluto.

### Detalhes técnicos:
*   Usar `oklch(0 0 0)` para o preto absoluto.
*   Manter a compatibilidade com Tailwind v4 (usando variáveis CSS).
*   Garantir legibilidade do texto (`--foreground`) com um tom quase branco.
