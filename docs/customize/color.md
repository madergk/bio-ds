# Customize - Color

Aprende sobre y personaliza los sistemas de color que soportan todo el toolkit del Bio Design System. El sistema de colores está diseñado para ser flexible, accesible y fácil de personalizar.

## Color Primary de Bioma

El Bio Design System utiliza **#e20039** como color primary, el color de marca de Bioma. Este color se usa en botones, enlaces, acentos y otros elementos interactivos.

### Escala de Colores Primary

El Bio Design System incluye una escala completa de colores primary del 50 (más claro) al 900 (más oscuro):

```css
/* Escala Primary - Color de Bioma */
--color-primary-50: #ffe5eb;   /* Muy claro, para fondos sutiles */
--color-primary-100: #ffb3c1;  /* Claro, para hover states suaves */
--color-primary-200: #ff8097;  /* Claro-medio */
--color-primary-300: #ff4d6d;  /* Medio-claro */
--color-primary-400: #ff1a43;  /* Medio */
--color-primary-500: #e20039;  /* Base - Color de marca de Bioma */
--color-primary-600: #c20032;  /* Medio-oscuro, para hover */
--color-primary-700: #a00029;  /* Oscuro, para active states */
--color-primary-800: #7d0020;  /* Muy oscuro */
--color-primary-900: #5a0017;  /* Extremadamente oscuro */
```

### Uso en Componentes

```css
/* Botón Primary */
.bio-button--primary {
  background-color: var(--color-primary-500);  /* #e20039 */
  color: var(--color-base-white);
}

.bio-button--primary:hover {
  background-color: var(--color-primary-600);  /* #c20032 */
}

.bio-button--primary:active {
  background-color: var(--color-primary-700);  /* #a00029 */
}
```

### Variables Bootstrap-compatibles

El Bio Design System mapea automáticamente los colores primary a variables Bootstrap:

```css
--bs-primary: var(--color-primary-500);  /* #e20039 */
--bs-primary-rgb: 226, 0, 57;  /* RGB para rgba() */
```

## Colores Semánticos

El Bio Design System incluye colores semánticos para estados y mensajes:

### Success (Verde)

```css
--color-semantic-success-base: #28a745;
--color-semantic-success-hover: #218838;
--color-semantic-success-active: #1e7e34;
--color-semantic-success-light: #d1e7dd;
--color-semantic-success-border: #a3cfbb;
--color-semantic-success-text: #0a3622;
```

### Warning (Amarillo)

```css
--color-semantic-warning-base: #ffc107;
--color-semantic-warning-hover: #e0a800;
--color-semantic-warning-active: #d39e00;
--color-semantic-warning-light: #fff3cd;
--color-semantic-warning-border: #ffe69c;
--color-semantic-warning-text: #664d03;
```

### Error/Danger (Rojo)

```css
--color-semantic-error-base: #dc3545;
--color-semantic-error-hover: #c82333;
--color-semantic-error-active: #bd2130;
--color-semantic-error-light: #f8d7da;
--color-semantic-error-border: #f1aeb5;
--color-semantic-error-text: #58151c;
```

### Info (Azul)

```css
--color-semantic-info-base: #17a2b8;
--color-semantic-info-hover: #138496;
--color-semantic-info-active: #117a8b;
--color-semantic-info-light: #cff4fc;
--color-semantic-info-border: #9eeaf9;
--color-semantic-info-text: #055160;
```

## Colores de Texto

```css
--color-text-primary: #212529;    /* Texto principal */
--color-text-secondary: #4b5763;   /* Texto secundario */
--color-text-muted: #6c757d;      /* Texto atenuado */
--color-text-disabled: #868e96;   /* Texto deshabilitado */
```

## Colores de Fondo

```css
--color-background-default: #ffffff;
--color-background-secondary: #f8f9fa;
--color-background-tertiary: #e9ecef;
--color-background-dark: #212529;
--color-background-darker: #1a1a1a;
--color-background-darkest: #303b47;
```

## Escala de Grises (Neutral)

```css
--color-neutral-50: #f8f9fa;   /* Más claro */
--color-neutral-100: #e9ecef;
--color-neutral-200: #dee2e6;
--color-neutral-300: #ced4da;
--color-neutral-400: #adb5bd;
--color-neutral-500: #868e96;
--color-neutral-600: #6c757d;
--color-neutral-700: #4b5763;
--color-neutral-800: #495057;
--color-neutral-900: #212529;  /* Más oscuro */
```

## Colores de Borde

```css
--color-border-default: #dee2e6;
--color-border-light: #ced4da;
--color-border-lighter: #e9ecef;
--color-border-focus: #86b7fe;  /* Para estados focus */
```

## Personalización de Colores

### Cambiar el Color Primary

**Método 1: Editar tokens.json**

```json
{
  "color": {
    "primary": {
      "500": { "value": "#tu-color-aqui" }
    }
  }
}
```

Luego regenera los tokens:
```bash
npm run tokens:build
```

**Método 2: Sobrescribir con CSS**

```css
:root {
  --color-primary-500: #tu-color-aqui;
  --bs-primary: #tu-color-aqui;
  --bs-primary-rgb: 226, 0, 57;  /* Actualiza también el RGB */
}
```

### Generar una Escala de Colores

Si cambias el color primary base, necesitarás generar una escala completa. Puedes usar herramientas como:

- [Coolors.co](https://coolors.co/) - Generador de paletas
- [Material Design Color Tool](https://material.io/resources/color/) - Generador de escalas
- [Adobe Color](https://color.adobe.com/) - Generador de paletas

### Ejemplo: Cambiar a un Azul

```json
{
  "color": {
    "primary": {
      "50": { "value": "#e3f2fd" },
      "100": { "value": "#bbdefb" },
      "200": { "value": "#90caf9" },
      "300": { "value": "#64b5f6" },
      "400": { "value": "#42a5f5" },
      "500": { "value": "#2196f3" },  /* Nuevo color base */
      "600": { "value": "#1e88e5" },
      "700": { "value": "#1976d2" },
      "800": { "value": "#1565c0" },
      "900": { "value": "#0d47a1" }
    }
  }
}
```

## Uso en Componentes

### Botones

```css
/* Primary Button */
.bio-button--primary {
  background-color: var(--color-primary-500);  /* #e20039 */
  color: var(--color-base-white);
}

/* Outline Button con Primary */
.bio-button--outline.bio-button--primary-color {
  border-color: var(--color-primary-500);
  color: var(--color-primary-500);
}
```

### Alertas

```css
.alert-primary {
  background-color: var(--color-primary-50);
  border-color: var(--color-primary-200);
  color: var(--color-primary-900);
}
```

### Enlaces

```css
a {
  color: var(--color-primary-500);  /* #e20039 */
}

a:hover {
  color: var(--color-primary-600);  /* #c20032 */
}
```

## Accesibilidad

Al personalizar colores, asegúrate de mantener ratios de contraste adecuados:

- **Texto normal**: Mínimo 4.5:1
- **Texto grande**: Mínimo 3:1
- **Componentes UI**: Mínimo 3:1

Usa herramientas como [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) para verificar tus colores.

## Próximos Pasos

- [Color modes](./color-modes.md) - Modos claro y oscuro
- [CSS variables](./css-variables.md) - Usar variables CSS
- [Components](./components.md) - Personalizar componentes

