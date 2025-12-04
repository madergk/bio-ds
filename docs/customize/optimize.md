# Customize - Optimize

Mantén tus proyectos ligeros, responsivos y mantenibles para que puedas ofrecer la mejor experiencia. Esta guía te muestra cómo optimizar el uso del Bio Design System.

## Tree Shaking

El Bio Design System está construido como una librería modular. Solo importa lo que necesitas:

### Angular (Standalone Components)

```typescript
// ✅ Bueno: Importar solo lo necesario
import { ButtonComponent } from '@madergk/bio-ds';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  // ...
})
```

```typescript
// ❌ Evitar: Importar todo el módulo si solo necesitas un componente
import { BioDesignSystemModule } from '@madergk/bio-ds';
```

### Estilos

```css
/* ✅ Bueno: Importar solo los estilos necesarios */
@import '@madergk/bio-ds/dist/bio-ds/tokens/generated/variables.css';
@import '@madergk/bio-ds/dist/bio-ds/styles/bootstrap-variables.css';
```

```css
/* ❌ Evitar: Importar todo si no lo necesitas */
@import '@madergk/bio-ds/dist/bio-ds/styles.css';
```

## Optimizar Tokens

### Usar Solo Tokens Necesarios

Si no necesitas todos los tokens, puedes crear un subset:

```json
{
  "color": {
    "primary": {
      "500": { "value": "#e20039" },
      "600": { "value": "#c20032" },
      "700": { "value": "#a00029" }
      // Solo incluir los que necesitas
    }
  }
}
```

### Purge CSS Variables No Usadas

Usa herramientas como PurgeCSS para eliminar variables CSS no usadas:

```javascript
// purgecss.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  css: ['./src/styles.css'],
  safelist: [
    /^--color-/,
    /^--spacing-/,
    /^--typography-/
  ]
};
```

## Lazy Loading de Componentes

Carga componentes solo cuando se necesiten:

```typescript
// Lazy load de componentes
const ButtonComponent = () => import('@madergk/bio-ds').then(m => m.ButtonComponent);
```

## Optimizar CSS

### Minificar CSS

```bash
# Usar herramientas de minificación
npm install -D cssnano
```

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
```

### Critical CSS

Extrae el CSS crítico para above-the-fold:

```html
<!-- Inline critical CSS -->
<style>
  /* CSS crítico aquí */
</style>

<!-- Defer non-critical CSS -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

## Optimizar Imágenes e Iconos

### Usar SVG Optimizado

```html
<!-- ✅ Bueno: SVG inline optimizado -->
<svg width="16" height="16" viewBox="0 0 16 16">
  <path d="M8 2V14M2 8H14" stroke="currentColor" stroke-width="2"/>
</svg>
```

### Material Icons

Usa solo los iconos que necesitas:

```html
<!-- ✅ Bueno: Solo cargar iconos necesarios -->
<span class="material-icons">add</span>
```

## Optimizar Build

### Production Build

```bash
# Build optimizado para producción
npm run build:library
```

### Verificar Bundle Size

```bash
# Analizar tamaño del bundle
npm run build:library
npx bundlephobia @madergk/bio-ds
```

## Caché de Assets

Configura headers de caché apropiados:

```nginx
# nginx.conf
location ~* \.(css|js)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

## Lazy Loading de Fuentes

```html
<!-- Preconnect para Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Cargar fuente con display=swap -->
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## Optimizar Variables CSS

### Usar Variables Nativas

Las CSS Variables son nativas y performantes:

```css
/* ✅ Bueno: Variables CSS nativas */
:root {
  --color-primary: #e20039;
}

.button {
  background-color: var(--color-primary);
}
```

### Evitar Cálculos Complejos

```css
/* ❌ Evitar: Cálculos complejos en variables */
:root {
  --complex: calc(var(--spacing-md) * 2 + var(--spacing-sm));
}

/* ✅ Mejor: Pre-calcular */
:root {
  --spacing-custom: 20px;
}
```

## Code Splitting

Divide tu aplicación en chunks más pequeños:

```typescript
// Lazy load de rutas
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];
```

## Monitoreo de Performance

### Lighthouse

Usa Lighthouse para auditar performance:

```bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Auditar
lighthouse https://tu-sitio.com --view
```

### Web Vitals

Monitorea Core Web Vitals:

```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## Checklist de Optimización

- [ ] Tree shaking habilitado
- [ ] Solo importar componentes necesarios
- [ ] CSS minificado en producción
- [ ] Imágenes optimizadas
- [ ] Fuentes con display=swap
- [ ] Caché configurado
- [ ] Lazy loading implementado
- [ ] Bundle size monitoreado
- [ ] Performance auditado

## Próximos Pasos

- [Overview](./overview.md) - Métodos de personalización
- [CSS variables](./css-variables.md) - Propiedades CSS personalizadas
- [Components](./components.md) - Personalizar componentes

