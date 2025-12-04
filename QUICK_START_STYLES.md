# Quick Start: Sistema de Estilos Bootstrap-Compatible

## 🎯 ¿Qué es esto?

Un sistema que replica la estructura y nomenclatura de Bootstrap, pero usando nuestros design tokens personalizados. Esto significa que puedes usar clases como `.p-4`, `.text-primary`, `.bg-light`, etc., pero todos los valores vienen de nuestros tokens.

## ⚡ Inicio Rápido

### 1. Personalizar Colores

Edita `tokens/tokens.json`:

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

### 2. Usar en Componentes

**Opción A: Variables CSS**

```css
.my-button {
  background-color: var(--color-primary-500);
  padding: var(--spacing-md);
}
```

**Opción B: Variables Bootstrap**

```css
.my-button {
  background-color: var(--bs-primary);
  padding: var(--bs-spacer-4);
}
```

**Opción C: Clases de Utilidad**

```html
<button class="p-4 bg-primary text-white">
  Botón
</button>
```

## 📝 Ejemplos Comunes

### Espaciado

```html
<!-- Padding -->
<div class="p-4">Padding 16px en todos los lados</div>
<div class="px-3 py-2">Padding horizontal 12px, vertical 8px</div>

<!-- Margin -->
<div class="m-4">Margin 16px</div>
<div class="mt-2 mb-4">Margin top 8px, bottom 16px</div>
```

### Colores

```html
<!-- Texto -->
<p class="text-primary">Texto primario</p>
<p class="text-success">Texto éxito</p>
<p class="text-danger">Texto error</p>

<!-- Fondo -->
<div class="bg-primary text-white">Fondo primario</div>
<div class="bg-light">Fondo claro</div>
```

### Tipografía

```html
<h1 class="fs-1">Tamaño H1</h1>
<p class="fs-sm fw-bold text-center">Texto pequeño, negrita, centrado</p>
```

### Flexbox

```html
<div class="d-flex justify-content-between align-items-center">
  <span>Izquierda</span>
  <span>Derecha</span>
</div>
```

## 🔄 Flujo de Trabajo

1. **Edita tokens** → `tokens/tokens.json`
2. **Regenera** → `npm run tokens:build`
3. **Usa** → Variables CSS o clases de utilidad

## 📚 Más Información

- [Guía Completa](./BOOTSTRAP_CUSTOMIZATION.md)
- [Design Tokens](./tokens/README.md)

