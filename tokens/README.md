# Design Tokens

This directory contains the source design tokens for the Bio Design System.

## 📁 Structure

```
tokens/
├── tokens.json          # Consolidated token source (single source of truth)
└── README.md           # This file
```

## 🎯 Philosophy

### Single Source of Truth
All tokens are defined in `tokens.json`. This consolidated approach:
- ✅ Simplifies maintenance (one file to update)
- ✅ Prevents duplication and inconsistencies
- ✅ Makes it easier to see the full token system at a glance
- ✅ Aligns with Bootstrap's approach to design tokens

### Bootstrap Alignment
Tokens are structured to align with Bootstrap conventions:
- **Spacing**: Includes both numeric (0-8) and semantic (xs-xxxl) values
- **Colors**: Follows Bootstrap's color system (primary, semantic states)
- **Typography**: Matches Bootstrap's font scale
- **Naming**: Uses kebab-case for CSS variables (Bootstrap-like)

### Angular Compatibility
- CSS variables work seamlessly with Angular's ViewEncapsulation
- JSON tokens available for runtime access in TypeScript
- Type definitions generated for IDE autocomplete

## 📝 Token Categories

### Color
- `base`: White and black
- `primary`: Primary color scale (50-900)
- `semantic`: Success, warning, error, info with states
- `text`: Text color variants
- `background`: Background color variants
- `border`: Border color variants
- `neutral`: Neutral gray scale (50-900)
- `alert`: Alert-specific colors

### Spacing
- Numeric scale: `0`, `1` (4px), `2` (8px), `3` (12px), `4` (16px), `5` (24px), `6` (32px), `7` (48px), `8` (64px)
- Semantic scale: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`
- Base: `base` (8px)

### Typography
- `fontFamily`: Primary and monospace fonts
- `fontSize`: Size scale (xs to 4xl, plus h1-h6)
- `fontWeight`: Weight scale (light to bold)
- `lineHeight`: Line height variants

### Border
- `radius`: Border radius values (none, sm, md, lg, full)
- `width`: Border width values (thin, medium, thick)

### Shadow
- Box shadow values (none, sm, md, lg, xl)

### Transition
- `duration`: Transition durations (fast, normal, slow)
- `timing`: Timing functions (ease, easeIn, easeOut, easeInOut)

### Z-Index
- Layering values for dropdowns, modals, tooltips, etc.

## 🔧 Building Tokens

Tokens are automatically built when you run:
```bash
npm run build
```

Or manually:
```bash
npm run tokens:build
```

Watch for changes:
```bash
npm run tokens:watch
```

## 📤 Generated Outputs

After building, tokens are generated in `src/tokens/generated/`:

- **variables.css**: CSS custom properties (CSS variables)
- **tokens.json**: Nested JSON structure for runtime access
- **tokens.ts**: TypeScript type definitions

## 💡 Usage Examples

### In Component CSS
```css
.my-button {
  background-color: var(--color-primary-500);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-size: var(--typography-font-size-base);
}
```

### In TypeScript
```typescript
import { tokensJSON, getToken } from '@madergk/bio-ds';

// Direct access
const primaryColor = tokensJSON.color.primary[500].value;

// Using helper function
const spacing = getToken('spacing.md');
```

## 🔄 Adding New Tokens

1. Open `tokens/tokens.json`
2. Add your token in the appropriate category
3. Follow the existing naming convention
4. Run `npm run tokens:build`
5. Use the new token in your components

### Example: Adding a new color
```json
{
  "color": {
    "accent": {
      "base": { "value": "#ff6b6b" },
      "hover": { "value": "#ff5252" }
    }
  }
}
```

This will generate:
- CSS variable: `--color-accent-base`
- JSON path: `tokensJSON.color.accent.base.value`

## 🎨 Bootstrap Compatibility

The token structure is designed to work alongside Bootstrap:

- **Spacing**: Use numeric values (0-8) that match Bootstrap's spacing scale
- **Colors**: Semantic color names align with Bootstrap's color system
- **Typography**: Font sizes and weights match Bootstrap's typography scale

You can use Bootstrap utilities alongside design tokens:
```html
<div class="p-4 mb-3" style="background-color: var(--color-primary-500)">
  Content
</div>
```

## 📚 Related Documentation

- [Component Usage](../src/components/README.md)
- [Installation Guide](../INSTALLATION.md)
- [Figma Integration](../FIGMA_WORKFLOW.md)

