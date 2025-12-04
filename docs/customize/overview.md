# Customize - Overview

Hay múltiples formas de personalizar el Bio Design System. Tu mejor camino puede depender de tu proyecto, la complejidad de tus herramientas de build, la versión del Bio Design System que estés usando, el soporte del navegador y más.

## Métodos de Personalización

### 1. Design Tokens (Recomendado)

El Bio Design System utiliza **Design Tokens** como base para toda la personalización. Los tokens están definidos en `tokens/tokens.json` y se generan automáticamente en múltiples formatos.

**Ventajas:**
- ✅ Single source of truth
- ✅ Generación automática de CSS variables
- ✅ Type safety con TypeScript
- ✅ Fácil de mantener y actualizar

**Cómo usar:**

```bash
# 1. Edita los tokens
vim tokens/tokens.json

# 2. Regenera los archivos
npm run tokens:build
```

**Ejemplo:**

```json
{
  "color": {
    "primary": {
      "500": { "value": "#e20039" }  // Color primary de Bioma
    }
  }
}
```

### 2. CSS Variables Directas

Puedes sobrescribir cualquier variable CSS directamente en tu aplicación:

```css
:root {
  --color-primary-500: #e20039;  /* Color primary de Bioma */
  --spacing-md: 16px;
  --typography-font-family-primary: 'Sora', sans-serif;
}
```

### 3. Bootstrap-compatible Variables

El Bio Design System mapea automáticamente los tokens a variables Bootstrap-compatibles:

```css
/* Automáticamente mapeado desde tokens */
--bs-primary: var(--color-primary-500);  /* #e20039 */
--bs-spacer-4: var(--spacing-4);  /* 16px */
```

## Estructura del Proyecto

```
bio-ds/
├── tokens/
│   └── tokens.json          # Single source of truth
├── src/
│   ├── tokens/
│   │   └── generated/      # Tokens generados automáticamente
│   │       ├── variables.css
│   │       ├── tokens.ts
│   │       └── tokens.json
│   └── styles/
│       ├── bootstrap-variables.css  # Mapeo a variables Bootstrap
│       ├── bootstrap-reboot.css
│       └── bootstrap-utilities.css
```

## Flujo de Trabajo Recomendado

### Para Personalización Básica

1. **Edita los tokens** en `tokens/tokens.json`
2. **Regenera los tokens**: `npm run tokens:build`
3. **Usa las variables CSS** en tus componentes

```css
.my-component {
  background-color: var(--color-primary-500);  /* #e20039 */
  color: var(--color-base-white);
  padding: var(--spacing-md);
}
```

### Para Personalización Avanzada

1. **Crea un archivo de override** en tu aplicación
2. **Sobrescribe las variables CSS** necesarias
3. **Importa después** de los estilos del Bio Design System

```css
/* my-custom-theme.css */
:root {
  --color-primary-500: #custom-color;
  --spacing-md: 20px;
}
```

```typescript
// En tu angular.json o styles.css
"styles": [
  "node_modules/@madergk/bio-ds/dist/bio-ds/styles.css",
  "src/my-custom-theme.css"  // Tu override
]
```

## Personalización del Color Primary

El color primary del Bio Design System está configurado con el color de marca de Bioma: **#e20039**.

### Cambiar el Color Primary

**Opción 1: Editar tokens.json**

```json
{
  "color": {
    "primary": {
      "500": { "value": "#tu-color-aqui" }
    }
  }
}
```

Luego ejecuta:
```bash
npm run tokens:build
```

**Opción 2: Sobrescribir con CSS**

```css
:root {
  --color-primary-500: #tu-color-aqui;
  --bs-primary: #tu-color-aqui;
}
```

### Escala de Colores Primary

El Bio Design System incluye una escala completa de colores primary (50-900):

```css
--color-primary-50: #ffe5eb;   /* Más claro */
--color-primary-100: #ffb3c1;
--color-primary-200: #ff8097;
--color-primary-300: #ff4d6d;
--color-primary-400: #ff1a43;
--color-primary-500: #e20039;   /* Color base de Bioma */
--color-primary-600: #c20032;
--color-primary-700: #a00029;
--color-primary-800: #7d0020;
--color-primary-900: #5a0017;   /* Más oscuro */
```

## Personalización de Tipografía

El Bio Design System usa **Sora** como fuente principal:

```json
{
  "typography": {
    "fontFamily": {
      "primary": { "value": "'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }
    }
  }
}
```

### Cambiar la Fuente

**Opción 1: Editar tokens.json**

```json
{
  "typography": {
    "fontFamily": {
      "primary": { "value": "'Tu Fuente', sans-serif" }
    }
  }
}
```

**Opción 2: Sobrescribir con CSS**

```css
:root {
  --typography-font-family-primary: 'Tu Fuente', sans-serif;
  --bs-font-family-sans-serif: 'Tu Fuente', sans-serif;
}
```

## Personalización de Espaciado

El Bio Design System usa un sistema de espaciado basado en 8px:

```css
--spacing-0: 0;
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 24px;
--spacing-6: 32px;
--spacing-7: 48px;
--spacing-8: 64px;
```

### Cambiar el Espaciado Base

```json
{
  "spacing": {
    "base": { "value": "8px" }  // Cambia este valor
  }
}
```

## Próximos Pasos

- [Sass](./sass.md) - Usar archivos fuente Sass
- [Options](./options.md) - Variables globales
- [Color](./color.md) - Sistema de colores completo
- [CSS variables](./css-variables.md) - Propiedades CSS personalizadas

