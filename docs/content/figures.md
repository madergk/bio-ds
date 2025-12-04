# Figures

El Bio Design System proporciona estilos para elementos `figure`, comúnmente usados para imágenes con captions y contenido relacionado.

## Figura Básica

```html
<figure class="figure">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Figure image">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
```

## Alineación de Caption

### Caption Abajo (Default)

```html
<figure class="figure">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Image">
  <figcaption class="figure-caption">Caption below the image.</figcaption>
</figure>
```

### Caption Arriba

```html
<figure class="figure">
  <figcaption class="figure-caption text-end">Caption above the image.</figcaption>
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Image">
</figure>
```

## Alineación de Texto

```html
<!-- Caption alineado a la izquierda -->
<figure class="figure">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Image">
  <figcaption class="figure-caption text-start">Left-aligned caption.</figcaption>
</figure>

<!-- Caption centrado -->
<figure class="figure">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Image">
  <figcaption class="figure-caption text-center">Center-aligned caption.</figcaption>
</figure>

<!-- Caption alineado a la derecha -->
<figure class="figure">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Image">
  <figcaption class="figure-caption text-end">Right-aligned caption.</figcaption>
</figure>
```

## Estilos de Imagen

### Con Border Radius

```html
<figure class="figure">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Rounded image">
  <figcaption class="figure-caption">Rounded corners.</figcaption>
</figure>
```

### Con Border Radius Pequeño

```html
<figure class="figure">
  <img src="image.jpg" class="figure-img img-fluid rounded-sm" alt="Small rounded">
  <figcaption class="figure-caption">Small rounded corners.</figcaption>
</figure>
```

### Con Border Radius Grande

```html
<figure class="figure">
  <img src="image.jpg" class="figure-img img-fluid rounded-lg" alt="Large rounded">
  <figcaption class="figure-caption">Large rounded corners.</figcaption>
</figure>
```

### Con Thumbnail

```html
<figure class="figure">
  <img src="image.jpg" class="figure-img img-thumbnail" alt="Thumbnail">
  <figcaption class="figure-caption">Thumbnail style.</figcaption>
</figure>
```

## Tamaños de Figura

### Figura Pequeña

```html
<figure class="figure" style="max-width: 300px;">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Small figure">
  <figcaption class="figure-caption">Small figure.</figcaption>
</figure>
```

### Figura Mediana

```html
<figure class="figure" style="max-width: 500px;">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Medium figure">
  <figcaption class="figure-caption">Medium figure.</figcaption>
</figure>
```

### Figura Grande

```html
<figure class="figure" style="max-width: 800px;">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Large figure">
  <figcaption class="figure-caption">Large figure.</figcaption>
</figure>
```

## Grid de Figuras

```html
<div class="row g-4">
  <div class="col-md-4">
    <figure class="figure">
      <img src="image1.jpg" class="figure-img img-fluid rounded" alt="Image 1">
      <figcaption class="figure-caption">Caption 1</figcaption>
    </figure>
  </div>
  <div class="col-md-4">
    <figure class="figure">
      <img src="image2.jpg" class="figure-img img-fluid rounded" alt="Image 2">
      <figcaption class="figure-caption">Caption 2</figcaption>
    </figure>
  </div>
  <div class="col-md-4">
    <figure class="figure">
      <img src="image3.jpg" class="figure-img img-fluid rounded" alt="Image 3">
      <figcaption class="figure-caption">Caption 3</figcaption>
    </figure>
  </div>
</div>
```

## Figura con Overlay

```html
<figure class="figure position-relative">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Image">
  <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
    <p class="text-white mb-0">Overlay Text</p>
  </div>
  <figcaption class="figure-caption">Caption with overlay.</figcaption>
</figure>
```

## Figura con Enlace

```html
<figure class="figure">
  <a href="large-image.jpg">
    <img src="thumbnail.jpg" class="figure-img img-fluid rounded" alt="Click to enlarge">
  </a>
  <figcaption class="figure-caption">Click image to view larger version.</figcaption>
</figure>
```

## Ejemplos Completos

### Galería de Imágenes

```html
<div class="container">
  <div class="row g-4">
    <div class="col-md-6 col-lg-4">
      <figure class="figure">
        <img src="photo1.jpg" class="figure-img img-fluid rounded shadow-sm" alt="Photo 1">
        <figcaption class="figure-caption text-center">Beautiful sunset</figcaption>
      </figure>
    </div>
    <div class="col-md-6 col-lg-4">
      <figure class="figure">
        <img src="photo2.jpg" class="figure-img img-fluid rounded shadow-sm" alt="Photo 2">
        <figcaption class="figure-caption text-center">Mountain landscape</figcaption>
      </figure>
    </div>
    <div class="col-md-6 col-lg-4">
      <figure class="figure">
        <img src="photo3.jpg" class="figure-img img-fluid rounded shadow-sm" alt="Photo 3">
        <figcaption class="figure-caption text-center">Ocean view</figcaption>
      </figure>
    </div>
  </div>
</div>
```

### Figura con Estilos Personalizados

```html
<figure class="figure">
  <img src="image.jpg" 
       class="figure-img img-fluid rounded border border-primary border-3" 
       alt="Styled image"
       style="box-shadow: var(--shadow-lg);">
  <figcaption class="figure-caption text-muted">
    <small>Image with custom border and shadow</small>
  </figcaption>
</figure>
```

## Accesibilidad

Siempre incluye texto alternativo en las imágenes:

```html
<!-- ✅ Bueno -->
<figure class="figure">
  <img src="image.jpg" alt="Descripción clara de la imagen">
  <figcaption class="figure-caption">Caption adicional</figcaption>
</figure>
```

## Personalización

### Cambiar Estilos de Caption

```css
.figure-caption {
  font-size: var(--typography-font-size-sm);
  color: var(--color-text-muted);
  margin-top: var(--spacing-sm);
}
```

### Cambiar Espaciado

```css
.figure {
  margin-bottom: var(--spacing-lg);
}
```

## Próximos Pasos

- [Images](./images.md) - Trabajar con imágenes
- [Typography](./typography.md) - Sistema de tipografía
- [Tables](./tables.md) - Crear tablas

