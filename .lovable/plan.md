Alterar o tema do site de volta para branco, ajustando o fundo, cores de texto, bordas e efeitos de brilho para garantir legibilidade e estética no tema claro.

### Alterações técnicas

- **`src/styles.css`**: Inverter as variáveis de cor `:root` para valores claros (tema light como padrão).
- **`src/routes/index.tsx`**: 
    - Ajustar as classes dos botões para usarem transparências escuras (ex: `bg-black/[0.02]` e `border-black/5`) que funcionam melhor em fundos claros.
    - Suavizar a intensidade dos efeitos de brilho (`glow`) para não ficarem agressivos no fundo branco.
