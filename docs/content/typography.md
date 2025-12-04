# Typography

El sistema de tipografía del Bio Design System utiliza la fuente **Sora** y proporciona una jerarquía clara de tamaños, pesos y alturas de línea usando Design Tokens.

## Fuente Principal: Sora

El Bio Design System usa **Sora** como fuente principal:

```css
font-family: var(--typography-font-family-primary);
/* 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif */
```

Sora se carga automáticamente desde Google Fonts cuando usas el Bio Design System.

## Headings

### Tamaños de Heading

El Bio Design System proporciona seis niveles de headings:

```html
<h1>Heading 1 (2.25rem / 36px)</h1>
<h2>Heading 2 (1.875rem / 30px)</h2>
<h3>Heading 3 (1.5rem / 24px)</h3>
<h4>Heading 4 (1.25rem / 20px)</h4>
<h5>Heading 5 (1.125rem / 18px)</h5>
<h6>Heading 6 (1rem / 16px)</h6>
```

### Clases de Heading

Puedes usar clases para aplicar estilos de heading a otros elementos:

```html
<p class="h1">Párrafo con estilo h1</p>
<p class="h2">Párrafo con estilo h2</p>
<p class="h3">Párrafo con estilo h3</p>
```

### Display Headings

Los display headings son más grandes y ligeros:

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
```

## Tamaños de Texto

### Tamaños Disponibles

```html
<p class="fs-1">Font size 1 (2.5rem)</p>
<p class="fs-2">Font size 2 (2rem)</p>
<p class="fs-3">Font size 3 (1.75rem)</p>
<p class="fs-4">Font size 4 (1.5rem)</p>
<p class="fs-5">Font size 5 (1.25rem)</p>
<p class="fs-6">Font size 6 (1rem)</p>
```

### Tamaños Semánticos

```html
<p class="fs-xs">Extra small (12px)</p>
<p class="fs-sm">Small (14px)</p>
<p class="fs-base">Base (16px)</p>
<p class="fs-lg">Large (18px)</p>
<p class="fs-xl">Extra large (20px)</p>
```

## Pesos de Fuente

```html
<p class="fw-light">Font weight light (300)</p>
<p class="fw-normal">Font weight normal (400)</p>
<p class="fw-medium">Font weight medium (500)</p>
<p class="fw-semibold">Font weight semibold (600)</p>
<p class="fw-bold">Font weight bold (700)</p>
```

## Altura de Línea

```html
<p class="lh-1">Line height tight (1.25)</p>
<p class="lh-base">Line height normal (1.5)</p>
<p class="lh-lg">Line height relaxed (1.75)</p>
```

## Colores de Texto

```html
<p class="text-primary">Text primary (#e20039)</p>
<p class="text-secondary">Text secondary</p>
<p class="text-success">Text success</p>
<p class="text-danger">Text danger</p>
<p class="text-warning">Text warning</p>
<p class="text-info">Text info</p>
<p class="text-muted">Text muted</p>
<p class="text-dark">Text dark</p>
<p class="text-white bg-dark">Text white</p>
```

## Alineación de Texto

```html
<p class="text-start">Start aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-end">End aligned text</p>
```

## Transformación de Texto

```html
<p class="text-lowercase">LOWERCASE TEXT</p>
<p class="text-uppercase">uppercase text</p>
<p class="text-capitalize">capitalize text</p>
```

## Decoración de Texto

```html
<p class="text-decoration-underline">Underlined text</p>
<p class="text-decoration-line-through">Line-through text</p>
<p class="text-decoration-none">No decoration</p>
```

## Wrap y Truncate

```html
<!-- No wrap -->
<div class="text-nowrap">This text will not wrap</div>

<!-- Wrap -->
<div class="text-wrap">This text will wrap normally</div>

<!-- Truncate -->
<div class="text-truncate" style="max-width: 200px;">
  This text will be truncated with an ellipsis
</div>
```

## Lead

Haz que un párrafo se destaque:

```html
<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>
```

## Inline Text Elements

```html
<p>You can use <mark>mark</mark> to highlight text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
```

## Abbreviations

```html
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
```

## Blockquotes

```html
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>

<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
  <footer class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>
```

## Lists

### Lista Sin Estilo

```html
<ul class="list-unstyled">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Lista Inline

```html
<ul class="list-inline">
  <li class="list-inline-item">Item 1</li>
  <li class="list-inline-item">Item 2</li>
  <li class="list-inline-item">Item 3</li>
</ul>
```

## Monospace

```html
<code>inline code</code>

<pre><code>block code
multiple lines</code></pre>
```

## Variables CSS Disponibles

```css
/* Fuentes */
--typography-font-family-primary: 'Sora', sans-serif;
--typography-font-family-monospace: 'Courier New', Courier, monospace;

/* Tamaños */
--typography-font-size-xs: 12px;
--typography-font-size-sm: 14px;
--typography-font-size-base: 16px;
--typography-font-size-lg: 18px;
--typography-font-size-xl: 20px;
--typography-font-size-2xl: 24px;
--typography-font-size-3xl: 30px;
--typography-font-size-4xl: 36px;

/* Headings */
--typography-font-size-h1: 2.25rem;
--typography-font-size-h2: 1.875rem;
--typography-font-size-h3: 1.5rem;
--typography-font-size-h4: 1.25rem;
--typography-font-size-h5: 1.125rem;
--typography-font-size-h6: 1rem;

/* Pesos */
--typography-font-weight-light: 300;
--typography-font-weight-normal: 400;
--typography-font-weight-medium: 500;
--typography-font-weight-semibold: 600;
--typography-font-weight-bold: 700;

/* Altura de línea */
--typography-line-height-tight: 1.25;
--typography-line-height-normal: 1.5;
--typography-line-height-relaxed: 1.75;
```

## Personalización

### Cambiar Fuente

```json
{
  "typography": {
    "fontFamily": {
      "primary": { "value": "'Tu Fuente', sans-serif" }
    }
  }
}
```

### Cambiar Tamaños

```json
{
  "typography": {
    "fontSize": {
      "base": { "value": "18px" }
    }
  }
}
```

## Ejemplo Completo

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="bio-ds/styles.css">
</head>
<body>
  <div class="container">
    <h1 class="display-1">Display Heading</h1>
    <h1>Heading 1</h1>
    <p class="lead">This is a lead paragraph with Sora font.</p>
    <p class="text-primary fw-semibold">Primary colored text with semibold weight.</p>
    
    <blockquote class="blockquote">
      <p>Design is not just what it looks like and feels like. Design is how it works.</p>
      <footer class="blockquote-footer">Steve Jobs</footer>
    </blockquote>
  </div>
</body>
</html>
```

## Próximos Pasos

- [Reboot](./reboot.md) - Estilos base
- [Images](./images.md) - Trabajar con imágenes
- [Tables](./tables.md) - Crear tablas

