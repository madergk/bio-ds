# Reboot

Reboot es una colección de estilos base que normaliza y corrige inconsistencias entre navegadores. Proporciona una base sólida y consistente para construir sobre ella, usando Design Tokens del Bio Design System.

## ¿Qué es Reboot?

Reboot es una colección de estilos CSS que:

- **Normaliza estilos entre navegadores**: Corrige inconsistencias entre diferentes navegadores
- **Usa Design Tokens**: Todos los valores provienen de nuestros Design Tokens
- **Proporciona una base consistente**: Establece estilos base para elementos HTML comunes
- **Mejora la accesibilidad**: Incluye mejoras de accesibilidad por defecto

## Elementos Normalizados

### HTML y Body

```css
html {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  margin: 0;
  font-family: var(--bs-font-family-sans-serif);  /* Sora */
  font-size: var(--bs-font-size-base);  /* 16px */
  font-weight: var(--bs-font-weight-normal);  /* 400 */
  line-height: var(--bs-line-height-base);  /* 1.5 */
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}
```

### Tipografía

#### Headings

```css
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: var(--bs-spacer-2);
  font-weight: var(--bs-font-weight-semibold);
  line-height: var(--bs-line-height-sm);
  color: var(--bs-body-color);
}
```

**Tamaños de Heading:**

- `h1`: `2.25rem` (36px)
- `h2`: `1.875rem` (30px)
- `h3`: `1.5rem` (24px)
- `h4`: `1.25rem` (20px)
- `h5`: `1.125rem` (18px)
- `h6`: `1rem` (16px)

#### Párrafos

```css
p {
  margin-top: 0;
  margin-bottom: var(--bs-spacer-2);
}
```

### Enlaces

```css
a {
  color: var(--bs-primary);  /* #e20039 - Color de Bioma */
  text-decoration: underline;
}

a:hover {
  color: var(--color-primary-600);
  text-decoration: underline;
}

a:not([href]):not([class]) {
  color: inherit;
  text-decoration: none;
}
```

### Listas

```css
ul, ol {
  margin-top: 0;
  margin-bottom: var(--bs-spacer-2);
  padding-left: var(--bs-spacer-4);
}

li {
  margin-bottom: var(--bs-spacer-1);
}
```

### Formularios

```css
input, button, select, optgroup, textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button, input {
  overflow: visible;
}

button, select {
  text-transform: none;
}
```

### Imágenes

```css
img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}
```

### Tablas

```css
table {
  border-collapse: collapse;
}

th {
  text-align: inherit;
}
```

## Características Principales

### 1. Box Sizing

Todos los elementos usan `box-sizing: border-box`:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### 2. Margin Reset

Muchos elementos tienen `margin: 0` para eliminar márgenes por defecto del navegador:

```css
body, h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}
```

### 3. Font Inheritance

Los elementos de formulario heredan la fuente:

```css
input, button, select, textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
```

### 4. Color Inheritance

Los enlaces sin href heredan el color:

```css
a:not([href]):not([class]) {
  color: inherit;
}
```

## Personalización

### Cambiar Fuente Base

Los estilos de Reboot usan Design Tokens, por lo que puedes personalizarlos fácilmente:

```json
{
  "typography": {
    "fontFamily": {
      "primary": { "value": "'Tu Fuente', sans-serif" }
    }
  }
}
```

Luego regenera los tokens:

```bash
npm run tokens:build
```

### Sobrescribir Estilos

Puedes sobrescribir estilos de Reboot con CSS:

```css
/* Cambiar color de enlaces */
a {
  color: var(--color-primary-500);  /* #e20039 */
}

/* Cambiar espaciado de párrafos */
p {
  margin-bottom: var(--spacing-md);
}
```

## Mejores Prácticas

1. **No sobrescribas Reboot innecesariamente**: Reboot proporciona una base sólida, solo sobrescríbelo cuando sea necesario.

2. **Usa Design Tokens**: Cuando personalices, usa los Design Tokens en lugar de valores hardcodeados.

3. **Mantén la consistencia**: Si cambias un estilo en Reboot, asegúrate de que sea consistente en toda la aplicación.

4. **Considera la accesibilidad**: Reboot incluye mejoras de accesibilidad, no las elimines sin considerar el impacto.

## Ejemplo Completo

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="bio-ds/styles.css">
</head>
<body>
  <!-- Reboot normaliza estos elementos automáticamente -->
  <h1>Título Principal</h1>
  <p>Este párrafo tiene estilos normalizados por Reboot.</p>
  
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  
  <a href="#">Enlace con color primary de Bioma</a>
  
  <table>
    <thead>
      <tr>
        <th>Columna 1</th>
        <th>Columna 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dato 1</td>
        <td>Dato 2</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

## Próximos Pasos

- [Typography](./typography.md) - Sistema de tipografía completo
- [Images](./images.md) - Trabajar con imágenes
- [Tables](./tables.md) - Crear tablas

