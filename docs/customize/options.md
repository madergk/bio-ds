# Customize - Options

Personaliza el Bio Design System con variables globales integradas para alternar fácilmente las preferencias de CSS. Todas las opciones están definidas como Design Tokens y se pueden personalizar fácilmente.

## Variables Globales Disponibles

### Espaciado

El sistema de espaciado está basado en un valor base de 8px:

```css
/* Espaciado Numérico (Bootstrap-like) */
--spacing-0: 0;
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 24px;
--spacing-6: 32px;
--spacing-7: 48px;
--spacing-8: 64px;

/* Espaciado Semántico */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-xxl: 48px;
--spacing-xxxl: 64px;

/* Base */
--spacing-base: 8px;
```

### Tipografía

```css
/* Fuente Principal - Sora */
--typography-font-family-primary: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* Fuente Monospace */
--typography-font-family-monospace: 'Courier New', Courier, monospace;

/* Tamaños de Fuente */
--typography-font-size-xs: 12px;
--typography-font-size-sm: 14px;
--typography-font-size-base: 16px;
--typography-font-size-lg: 18px;
--typography-font-size-xl: 20px;
--typography-font-size-2xl: 24px;
--typography-font-size-3xl: 30px;
--typography-font-size-4xl: 36px;

/* Tamaños de Heading */
--typography-font-size-h1: 2.25rem;
--typography-font-size-h2: 1.875rem;
--typography-font-size-h3: 1.5rem;
--typography-font-size-h4: 1.25rem;
--typography-font-size-h5: 1.125rem;
--typography-font-size-h6: 1rem;

/* Pesos de Fuente */
--typography-font-weight-light: 300;
--typography-font-weight-normal: 400;
--typography-font-weight-medium: 500;
--typography-font-weight-semibold: 600;
--typography-font-weight-bold: 700;

/* Altura de Línea */
--typography-line-height-tight: 1.25;
--typography-line-height-normal: 1.5;
--typography-line-height-relaxed: 1.75;
```

### Bordes

```css
/* Border Radius */
--border-radius-none: 0;
--border-radius-sm: 4px;
--border-radius-md: 8px;
--border-radius-lg: 12px;
--border-radius-full: 9999px;

/* Border Width */
--border-width-thin: 1px;
--border-width-medium: 2px;
--border-width-thick: 4px;
```

### Sombras

```css
--shadow-none: none;
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

### Transiciones

```css
/* Duración */
--transition-duration-fast: 150ms;
--transition-duration-normal: 200ms;
--transition-duration-slow: 300ms;

/* Timing Functions */
--transition-timing-ease: ease;
--transition-timing-ease-in: ease-in;
--transition-timing-ease-out: ease-out;
--transition-timing-ease-in-out: ease-in-out;
```

### Z-Index

```css
--z-index-dropdown: 1000;
--z-index-sticky: 1020;
--z-index-fixed: 1030;
--z-index-modal-backdrop: 1040;
--z-index-modal: 1050;
--z-index-popover: 1060;
--z-index-tooltip: 1070;
```

## Variables Bootstrap-compatibles

El Bio Design System mapea automáticamente los tokens a variables Bootstrap:

```css
/* Colores */
--bs-primary: var(--color-primary-500);  /* #e20039 */
--bs-primary-rgb: 226, 0, 57;

/* Espaciado */
--bs-spacer: var(--spacing-base);
--bs-spacer-1: var(--spacing-1);
--bs-spacer-2: var(--spacing-2);
/* ... */

/* Tipografía */
--bs-font-family-sans-serif: var(--typography-font-family-primary);
--bs-font-size-base: var(--typography-font-size-base);

/* Bordes */
--bs-border-radius: var(--border-radius-md);
--bs-border-width: var(--border-width-thin);

/* Sombras */
--bs-box-shadow-sm: var(--shadow-sm);
--bs-box-shadow: var(--shadow-md);
--bs-box-shadow-lg: var(--shadow-lg);
```

## Personalizar Opciones

### Método 1: Editar tokens.json

```json
{
  "spacing": {
    "base": { "value": "10px" }  // Cambiar base de 8px a 10px
  },
  "typography": {
    "fontSize": {
      "base": { "value": "18px" }  // Cambiar tamaño base
    }
  }
}
```

Luego regenera:
```bash
npm run tokens:build
```

### Método 2: Sobrescribir con CSS

```css
:root {
  --spacing-base: 10px;
  --typography-font-size-base: 18px;
  --border-radius-md: 12px;
}
```

## Opciones Específicas de Componentes

### Botones

```css
--bs-btn-padding-y: var(--spacing-sm);
--bs-btn-padding-x: var(--spacing-md);
--bs-btn-font-size: var(--typography-font-size-base);
--bs-btn-border-radius: var(--border-radius-md);
--bs-btn-transition: var(--bs-transition-base);
```

### Inputs

```css
--bs-input-padding-y: var(--spacing-sm);
--bs-input-padding-x: var(--spacing-md);
--bs-input-font-size: var(--typography-font-size-base);
--bs-input-border-radius: var(--border-radius-md);
--bs-input-border-color: var(--color-border-default);
--bs-input-focus-border-color: var(--color-border-focus);
```

### Cards

```css
--bs-card-spacer-y: var(--spacing-md);
--bs-card-spacer-x: var(--spacing-md);
--bs-card-border-radius: var(--border-radius-md);
--bs-card-border-color: var(--color-border-lighter);
--bs-card-box-shadow: var(--shadow-sm);
```

## Ejemplo de Personalización Completa

```css
/* my-custom-theme.css */
:root {
  /* Cambiar espaciado base */
  --spacing-base: 10px;
  
  /* Cambiar fuente */
  --typography-font-family-primary: 'Inter', sans-serif;
  
  /* Cambiar border radius */
  --border-radius-md: 12px;
  --border-radius-lg: 16px;
  
  /* Cambiar sombras */
  --shadow-md: 0 6px 12px -2px rgba(0, 0, 0, 0.15);
  
  /* Cambiar transiciones */
  --transition-duration-normal: 250ms;
}
```

## Validar Opciones

Puedes validar tus tokens antes de compilar:

```bash
npm run tokens:validate
```

## Próximos Pasos

- [Color](./color.md) - Sistema de colores
- [CSS variables](./css-variables.md) - Propiedades CSS personalizadas
- [Components](./components.md) - Personalizar componentes

