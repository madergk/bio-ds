# Customize - CSS Variables

Usa las propiedades CSS personalizadas (CSS Variables) del Bio Design System para un diseño y desarrollo rápido y orientado al futuro. Todas las variables están disponibles globalmente y se pueden sobrescribir fácilmente.

## ¿Qué son las CSS Variables?

Las CSS Variables (Custom Properties) son valores que puedes definir una vez y reutilizar en todo tu CSS. El Bio Design System utiliza CSS Variables generadas desde Design Tokens.

```css
/* Definir variable */
:root {
  --color-primary-500: #e20039;
}

/* Usar variable */
.my-component {
  background-color: var(--color-primary-500);
}
```

## Variables Disponibles

### Colores

```css
/* Primary - Color de Bioma */
--color-primary-50: #ffe5eb;
--color-primary-100: #ffb3c1;
--color-primary-200: #ff8097;
--color-primary-300: #ff4d6d;
--color-primary-400: #ff1a43;
--color-primary-500: #e20039;  /* Color base de Bioma */
--color-primary-600: #c20032;
--color-primary-700: #a00029;
--color-primary-800: #7d0020;
--color-primary-900: #5a0017;

/* Semantic Colors */
--color-semantic-success-base: #28a745;
--color-semantic-warning-base: #ffc107;
--color-semantic-error-base: #dc3545;
--color-semantic-info-base: #17a2b8;

/* Text Colors */
--color-text-primary: #212529;
--color-text-secondary: #4b5763;
--color-text-muted: #6c757d;

/* Background Colors */
--color-background-default: #ffffff;
--color-background-secondary: #f8f9fa;
```

### Espaciado

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

### Tipografía

```css
--typography-font-family-primary: 'Sora', sans-serif;
--typography-font-size-base: 16px;
--typography-font-size-lg: 18px;
--typography-font-weight-medium: 500;
--typography-line-height-normal: 1.5;
```

### Bordes

```css
--border-radius-md: 8px;
--border-radius-lg: 12px;
--border-width-thin: 1px;
```

### Sombras

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

## Uso Básico

### En Componentes CSS

```css
.my-component {
  background-color: var(--color-primary-500);  /* #e20039 */
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-family: var(--typography-font-family-primary);
}
```

### Con Valores por Defecto

Si una variable no está definida, puedes proporcionar un valor por defecto:

```css
.my-component {
  color: var(--color-text-primary, #212529);
  margin: var(--spacing-custom, 20px);
}
```

### Variables Anidadas

Puedes usar variables dentro de otras variables:

```css
:root {
  --primary: var(--color-primary-500);
  --primary-hover: var(--color-primary-600);
}

.button {
  background-color: var(--primary);
}

.button:hover {
  background-color: var(--primary-hover);
}
```

## Variables Bootstrap-compatibles

El Bio Design System mapea automáticamente los tokens a variables Bootstrap:

```css
/* Colores */
--bs-primary: var(--color-primary-500);  /* #e20039 */
--bs-success: var(--color-semantic-success-base);
--bs-danger: var(--color-semantic-error-base);

/* Espaciado */
--bs-spacer-1: var(--spacing-1);
--bs-spacer-2: var(--spacing-2);
--bs-spacer-4: var(--spacing-4);

/* Tipografía */
--bs-font-family-sans-serif: var(--typography-font-family-primary);
--bs-font-size-base: var(--typography-font-size-base);
```

## Sobrescribir Variables

Puedes sobrescribir cualquier variable fácilmente:

```css
/* Sobrescribir en :root */
:root {
  --color-primary-500: #custom-color;
  --spacing-md: 20px;
}

/* Sobrescribir en un scope específico */
.my-theme {
  --color-primary-500: #another-color;
}
```

## Variables Dinámicas con JavaScript

Puedes cambiar variables dinámicamente con JavaScript:

```typescript
// Cambiar color primary
document.documentElement.style.setProperty('--color-primary-500', '#new-color');

// Cambiar espaciado
document.documentElement.style.setProperty('--spacing-md', '20px');

// Leer variable
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-primary-500');
```

## Variables en Media Queries

Puedes cambiar variables basadas en media queries:

```css
:root {
  --spacing-md: 16px;
}

@media (min-width: 768px) {
  :root {
    --spacing-md: 24px;
  }
}
```

## Variables para Modos de Color

```css
/* Modo claro (default) */
:root {
  --color-background-default: #ffffff;
  --color-text-primary: #212529;
}

/* Modo oscuro */
[data-theme="dark"] {
  --color-background-default: #212529;
  --color-text-primary: #ffffff;
}
```

## Ejemplos Prácticos

### Botón Personalizado

```css
.my-button {
  background-color: var(--color-primary-500);  /* #e20039 */
  color: var(--color-base-white);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-family: var(--typography-font-family-primary);
  transition: all var(--transition-duration-normal);
}

.my-button:hover {
  background-color: var(--color-primary-600);
  box-shadow: var(--shadow-md);
}
```

### Card Personalizada

```css
.my-card {
  background-color: var(--color-background-default);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  border: var(--border-width-thin) solid var(--color-border-default);
}

.my-card__title {
  color: var(--color-primary-500);
  font-size: var(--typography-font-size-xl);
  font-weight: var(--typography-font-weight-semibold);
  margin-bottom: var(--spacing-md);
}
```

### Input Personalizado

```css
.my-input {
  padding: var(--spacing-sm) var(--spacing-md);
  border: var(--border-width-thin) solid var(--color-border-default);
  border-radius: var(--border-radius-md);
  font-family: var(--typography-font-family-primary);
  font-size: var(--typography-font-size-base);
}

.my-input:focus {
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 0.2rem rgba(226, 0, 57, 0.25);
  outline: none;
}
```

## Ventajas de CSS Variables

1. **Dinámicas**: Pueden cambiar en runtime
2. **Cascada**: Heredan y pueden sobrescribirse
3. **Scoped**: Pueden tener scope específico
4. **Type-safe**: Con TypeScript types generados
5. **Performantes**: Nativos del navegador

## Compatibilidad

Las CSS Variables son compatibles con:
- ✅ Chrome 49+
- ✅ Firefox 31+
- ✅ Safari 9.1+
- ✅ Edge 15+
- ✅ Opera 36+

## Próximos Pasos

- [Color](./color.md) - Sistema de colores completo
- [Components](./components.md) - Personalizar componentes
- [Optimize](./optimize.md) - Optimización y rendimiento

