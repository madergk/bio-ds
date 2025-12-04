# Bootstrap Customization Guide

## 🎯 Objetivo

Este documento explica cómo funciona el sistema de estilos que replica la estructura de Bootstrap pero usando nuestros design tokens personalizados. Esto te permite tener la misma experiencia de desarrollo que Bootstrap, pero con estilos completamente customizables mediante tokens.

## 📋 Estructura del Sistema

### 1. **Design Tokens** (Fuente de Verdad)
**Ubicación**: `tokens/tokens.json`

Los tokens son la fuente única de verdad. Todos los valores visuales (colores, espaciados, tipografía, etc.) se definen aquí.

```json
{
  "color": {
    "primary": {
      "500": { "value": "#2196f3" }
    }
  },
  "spacing": {
    "4": { "value": "16px" }
  }
}
```

### 2. **Variables CSS Generadas**
**Ubicación**: `src/tokens/generated/variables.css`

Style Dictionary genera automáticamente variables CSS desde los tokens:

```css
:root {
  --color-primary-500: #2196f3;
  --spacing-4: 16px;
}
```

### 3. **Variables Bootstrap-Compatibles**
**Ubicación**: `src/styles/bootstrap-variables.css`

Mapea nuestros tokens a nombres de variables de Bootstrap:

```css
:root {
  --bs-primary: var(--color-primary-500);
  --bs-spacer-4: var(--spacing-4);
}
```

**¿Por qué esto es importante?**
- Permite usar la misma nomenclatura que Bootstrap
- Facilita migración desde Bootstrap
- Mantiene compatibilidad con código existente

### 4. **Bootstrap Reboot**
**Ubicación**: `src/styles/bootstrap-reboot.css`

Replica Bootstrap's `reboot.css` pero usando nuestras variables:

```css
body {
  font-family: var(--bs-font-family-sans-serif);
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}
```

### 5. **Utilidades Bootstrap**
**Ubicación**: `src/styles/bootstrap-utilities.css`

Proporciona clases de utilidad similares a Bootstrap:

```html
<div class="p-4 m-2 text-primary bg-light">
  Contenido
</div>
```

## 🔄 Flujo de Customización

### Personalizar Colores

1. **Edita los tokens** en `tokens/tokens.json`:

```json
{
  "color": {
    "primary": {
      "500": { "value": "#tu-color-personalizado" }
    }
  }
}
```

2. **Regenera las variables**:

```bash
npm run tokens:build
```

3. **¡Listo!** Todos los componentes y utilidades se actualizan automáticamente.

### Personalizar Espaciados

1. **Edita los tokens**:

```json
{
  "spacing": {
    "4": { "value": "20px" }  // Cambia de 16px a 20px
  }
}
```

2. **Regenera**:

```bash
npm run tokens:build
```

3. **Resultado**: Todas las clases `.p-4`, `.m-4`, etc. ahora usan 20px.

## 💡 Uso en Componentes

### Opción 1: Usar Variables CSS Directas (Recomendado)

```css
.my-component {
  background-color: var(--color-primary-500);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
}
```

### Opción 2: Usar Variables Bootstrap-Compatibles

```css
.my-component {
  background-color: var(--bs-primary);
  padding: var(--bs-spacer-4);
  border-radius: var(--bs-border-radius);
}
```

### Opción 3: Usar Clases de Utilidad

```html
<div class="p-4 bg-primary text-white rounded">
  Contenido con utilidades
</div>
```

## 🎨 Clases de Utilidad Disponibles

### Spacing

```html
<!-- Margin -->
<div class="m-4">Margin 16px</div>
<div class="mt-2 mb-4">Margin top 8px, bottom 16px</div>
<div class="mx-auto">Margin horizontal auto</div>

<!-- Padding -->
<div class="p-4">Padding 16px</div>
<div class="px-3 py-2">Padding horizontal 12px, vertical 8px</div>
```

### Colors

```html
<!-- Text Colors -->
<p class="text-primary">Texto primario</p>
<p class="text-success">Texto éxito</p>
<p class="text-danger">Texto error</p>
<p class="text-muted">Texto muted</p>

<!-- Background Colors -->
<div class="bg-primary">Fondo primario</div>
<div class="bg-light">Fondo claro</div>
<div class="bg-dark text-white">Fondo oscuro con texto blanco</div>
```

### Typography

```html
<h1 class="fs-1">Tamaño H1</h1>
<p class="fs-sm">Texto pequeño</p>
<p class="fw-bold">Texto en negrita</p>
<p class="text-center">Texto centrado</p>
```

### Display & Flex

```html
<div class="d-flex justify-content-between align-items-center">
  <span>Izquierda</span>
  <span>Derecha</span>
</div>
```

### Borders & Shadows

```html
<div class="border rounded shadow-sm">
  Contenido con borde y sombra
</div>
```

## 🔧 Personalización Avanzada

### Agregar Nuevos Tokens

1. Agrega el token en `tokens/tokens.json`:

```json
{
  "color": {
    "accent": {
      "base": { "value": "#ff6b6b" }
    }
  }
}
```

2. Regenera:

```bash
npm run tokens:build
```

3. Agrega mapeo Bootstrap (opcional) en `src/styles/bootstrap-variables.css`:

```css
:root {
  --bs-accent: var(--color-accent-base);
}
```

4. Agrega utilidad (opcional) en `src/styles/bootstrap-utilities.css`:

```css
.text-accent { color: var(--bs-accent) !important; }
.bg-accent { background-color: var(--bs-accent) !important; }
```

### Modificar Estilos Base

Edita `src/styles/bootstrap-reboot.css` para cambiar estilos base como:
- Estilos de headings
- Estilos de links
- Estilos de formularios
- etc.

## 📦 Orden de Importación

El orden de importación en `src/styles/index.css` es crítico:

```css
/* 1. Tokens (fuente de verdad) */
@import '../tokens/generated/variables.css';

/* 2. Variables Bootstrap (mapeo) */
@import './bootstrap-variables.css';

/* 3. Reboot (estilos base) */
@import './bootstrap-reboot.css';

/* 4. Utilidades (clases) */
@import './bootstrap-utilities.css';
```

**No cambies este orden** o las variables no estarán disponibles cuando se necesiten.

## ✅ Ventajas de Este Sistema

1. **Consistencia**: Un solo lugar para cambiar valores (tokens)
2. **Flexibilidad**: Puedes usar tokens directos o variables Bootstrap
3. **Familiaridad**: Misma nomenclatura que Bootstrap
4. **Escalabilidad**: Fácil agregar nuevos tokens y utilidades
5. **Type Safety**: TypeScript types generados automáticamente

## 🚀 Próximos Pasos

1. **Personaliza tus tokens** en `tokens/tokens.json`
2. **Regenera** con `npm run tokens:build`
3. **Usa en componentes** con variables CSS o clases de utilidad
4. **Agrega nuevos tokens** según necesites

## 📚 Referencias

- [Bootstrap 5.3 Variables](https://getbootstrap.com/docs/5.3/customize/sass/#variable-defaults)
- [Style Dictionary Docs](https://amzn.github.io/style-dictionary/)
- [Design Tokens Guide](./tokens/README.md)

