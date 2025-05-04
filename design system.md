# Design System: Divisão Inteligente de Gastos

## 1. Princípios Fundamentais
- **Clareza Numérica Priorizada:** Dados financeiros sempre em destaque visual
- **Interação Minimalista:** Apenas elementos essenciais para operação básica
- **Feedback Imediato:** Validação em tempo real de porcentagens
- **Hierarquia Visual Direta:** Fluxo top-down natural para entrada de dados

---

## 2. Sistema de Cores (Dark Mode)
| Categoria          | Tailwind       | Uso Típico                 | Estado       |
|--------------------|----------------|----------------------------|--------------|
| Primária           | `emerald-500`  | Botões, % positivas        | Hover: `emerald-400` |
| Alerta             | `amber-500`    | Avisos de limite           | Focus: `amber-300` |
| Erro               | `rose-500`     | Somas inválidas (>100%)    | Active: `rose-600` |
| Fundo              | `slate-900`    | Background principal       | -            |
| Superfície         | `slate-800`    | Cards/Inputs               | -            |
| Texto Primário     | `slate-100`    | Valores, Títulos           | -            |
| Texto Secundário   | `slate-400`    | Labels, %                  | Disabled: `slate-600` |

---

## 3. Tipografia Dinâmica
```jsx
// Títulos
<Text type="h1">Divisão de Gastos</Text>       // text-2xl font-semibold
<Text type="h2">Valor inicial</Text>           // text-lg font-medium

// Corpo
<Text type="body">Insira o valor</Text>        // text-base
<Text type="caption">*valores mensais</Text>   // text-sm opacity-75

// Especializados
<Text type="percentage">30%</Text>            // text-xl tabular-nums
<Text type="currency">R$ 1.500</Text>         // text-2xl font-mono
```
## 4. Sistema de Espaçamento
Unidade Base: 8px (2x Tailwind unit)

Vertical Rhythm: gap-y-6 entre seções

Input Group: gap-y-3 entre label e input

Mobile Padding: px-4 laterais

## 5. Componentes Chave
Input Financeiro
```jsx
<Input 
  type="number"
  label="Valor inicial"
  prefix="R$"
  className="w-full" 
/>
```
Estados:

Foco: ring-2 ring-emerald-500

Erro: border-rose-500 text-rose-300

Disabled: opacity-50 cursor-not-allowed

Barra de Divisão
```jsx
<Divider 
  title="Distribuição Percentual" 
  percentage="100%" 
/>
// Linha horizontal com título centralizado e % à direita
```
Resultado Contextual
```jsx
<ResultBadge 
  type="remaining" 
  value="35%" 
  amount="R$ 525" 
/>
// Exibe porcentagem e valor absoluto lado a lado
```
## 6. Microinterações
Atualização Suave: Transições de 200ms para mudanças numéricas

Scroll Inertial: Rolagem suave entre seções

Input Validation: Pulse animado em porcentagens inválidas

Focus Management: Navegação sequencial entre campos

## 7. Layout Responsivo
```jsx
// Container Principal
<main className="min-h-screen w-full max-w-lg mx-auto p-4 grid grid-rows-[auto_1fr]">
  {/* Cabeçalho Fixo */}
  <header className="sticky top-0 bg-slate-900/95 backdrop-blur">
    <h1>...</h1>
  </header>

  {/* Área Rolável */}
  <div className="overflow-y-auto pb-20">
    {/* Conteúdo */}
  </div>
</main>
```
## 8. Acessibilidade
Screen Reader: Live regions para atualizações dinâmicas

Keyboard Nav: Setas alteram valores numéricos

Contraste: 5.5:1 mínimo para texto crítico

Zoom Safe: Layout funcional até 150% de zoom