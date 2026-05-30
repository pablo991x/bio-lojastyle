Alterar o tema do site para escuro, garantindo que o fundo, textos e efeitos de brilho (glow) nos botões se adaptem corretamente à paleta de cores escura.

### Alterações técnicas

- **`src/styles.css`**: Atualizar as variáveis de cor `:root` para refletirem um tema escuro por padrão, ou garantir que a classe `dark` seja aplicada corretamente. Como o usuário pediu explicitamente "coloca um tema escuro", vou inverter os valores de `:root` para tons escuros.
- **`src/routes/index.tsx`**: 
    - Ajustar as classes dos botões para usarem transparências e bordas que se destaquem no fundo escuro (ex: `bg-white/[0.03]` em vez de `bg-black/[0.02]`).
    - Ajustar a intensidade e as cores dos efeitos de brilho (`glow`) para que fiquem mais visíveis e elegantes no tema dark.
    - Garantir que o rodapé e os subrótulos tenham cores legíveis (usando `text-muted-foreground`).
