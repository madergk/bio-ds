# Customize - Color Modes

El Bio Design System soporta modos de color, incluyendo modo claro (por defecto) y modo oscuro. Puedes crear tus propios modos de color personalizados.

## Modo Claro (Default)

El modo claro es el modo por defecto del Bio Design System. Todos los colores están optimizados para fondos claros:

```css
:root {
  /* Colores de fondo */
  --color-background-default: #ffffff;
  --color-background-secondary: #f8f9fa;
  
  /* Colores de texto */
  --color-text-primary: #212529;
  --color-text-secondary: #4b5763;
  
  /* Colores de borde */
  --color-border-default: #dee2e6;
}
```

## Modo Oscuro

El modo oscuro invierte los colores para una mejor experiencia en ambientes con poca luz:

```css
[data-theme="dark"] {
  /* Colores de fondo */
  --color-background-default: #212529;
  --color-background-secondary: #1a1a1a;
  
  /* Colores de texto */
  --color-text-primary: #ffffff;
  --color-text-secondary: #e9ecef;
  
  /* Colores de borde */
  --color-border-default: #495057;
}
```

## Implementar Modo Oscuro

### Método 1: Usar data-theme

```html
<html data-theme="dark">
  <!-- Tu contenido -->
</html>
```

```css
/* Estilos base (modo claro) */
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

### Método 2: Usar clase CSS

```html
<html class="theme-dark">
  <!-- Tu contenido -->
</html>
```

```css
.theme-dark {
  --color-background-default: #212529;
  --color-text-primary: #ffffff;
}
```

### Método 3: Toggle con JavaScript

```typescript
// toggle-theme.ts
export function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Inicializar desde localStorage
export function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}
```

## Paleta de Colores para Modo Oscuro

### Colores de Fondo

```css
[data-theme="dark"] {
  --color-background-default: #212529;
  --color-background-secondary: #1a1a1a;
  --color-background-tertiary: #303b47;
  --color-background-dark: #000000;
}
```

### Colores de Texto

```css
[data-theme="dark"] {
  --color-text-primary: #ffffff;
  --color-text-secondary: #e9ecef;
  --color-text-muted: #adb5bd;
  --color-text-disabled: #6c757d;
}
```

### Colores de Borde

```css
[data-theme="dark"] {
  --color-border-default: #495057;
  --color-border-light: #6c757d;
  --color-border-lighter: #495057;
}
```

### Colores Primary (Ajustados para Modo Oscuro)

```css
[data-theme="dark"] {
  /* Usar tonos más claros del primary para mejor contraste */
  --color-primary-500: #ff4d6d;  /* Más claro que #e20039 */
  --color-primary-600: #ff8097;
  --color-primary-700: #ffb3c1;
}
```

## Crear Modos Personalizados

Puedes crear modos de color personalizados para diferentes contextos:

### Modo Alto Contraste

```css
[data-theme="high-contrast"] {
  --color-background-default: #000000;
  --color-text-primary: #ffffff;
  --color-primary-500: #ffff00;  /* Amarillo para máximo contraste */
  --color-border-default: #ffffff;
}
```

### Modo Sepia

```css
[data-theme="sepia"] {
  --color-background-default: #f4ecd8;
  --color-text-primary: #5b4636;
  --color-primary-500: #8b4513;  /* Marrón */
}
```

## Componentes y Modos de Color

Los componentes del Bio Design System usan variables CSS, por lo que se adaptan automáticamente a los modos de color:

```css
/* Botón se adapta automáticamente */
.bio-button--primary {
  background-color: var(--color-primary-500);
  color: var(--color-base-white);
}

/* En modo oscuro, el color primary puede cambiar */
[data-theme="dark"] .bio-button--primary {
  background-color: var(--color-primary-500);  /* Usa el valor del modo oscuro */
}
```

## Transiciones entre Modos

Agrega transiciones suaves al cambiar de modo:

```css
:root {
  transition: background-color 0.3s ease, color 0.3s ease;
}

[data-theme="dark"] {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

## Detección de Preferencia del Sistema

Puedes detectar la preferencia del sistema del usuario:

```typescript
// Detectar preferencia del sistema
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
}
```

```css
/* Usar media query como fallback */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background-default: #212529;
    --color-text-primary: #ffffff;
  }
}
```

## Ejemplo Completo

```html
<!DOCTYPE html>
<html data-theme="light">
<head>
  <link rel="stylesheet" href="bio-ds/styles.css">
  <style>
    :root {
      --color-background-default: #ffffff;
      --color-text-primary: #212529;
    }
    
    [data-theme="dark"] {
      --color-background-default: #212529;
      --color-text-primary: #ffffff;
    }
    
    body {
      background-color: var(--color-background-default);
      color: var(--color-text-primary);
      transition: background-color 0.3s ease, color 0.3s ease;
    }
  </style>
</head>
<body>
  <button onclick="toggleTheme()">Toggle Theme</button>
  <script>
    function toggleTheme() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    }
  </script>
</body>
</html>
```

## Próximos Pasos

- [Color](./color.md) - Sistema de colores completo
- [CSS variables](./css-variables.md) - Propiedades CSS personalizadas
- [Components](./components.md) - Personalizar componentes

