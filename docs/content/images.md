# Images

El Bio Design System proporciona estilos y utilidades para imágenes responsivas, incluyendo clases para hacer imágenes adaptables y estilos para diferentes tipos de imágenes.

## Imágenes Responsivas

### Imagen Fluid

Haz que una imagen sea responsiva (se adapta al contenedor):

```html
<img src="image.jpg" class="img-fluid" alt="Descripción">
```

La clase `.img-fluid` aplica:
- `max-width: 100%`
- `height: auto`

Esto hace que la imagen se escale proporcionalmente con su contenedor.

### Ejemplo

```html
<div class="container">
  <img src="hero.jpg" class="img-fluid" alt="Hero image">
</div>
```

## Imágenes con Thumbnail

Crea imágenes con borde redondeado:

```html
<img src="thumbnail.jpg" class="img-thumbnail" alt="Thumbnail">
```

La clase `.img-thumbnail` aplica:
- Padding
- Border
- Border radius
- Box shadow

## Alineación de Imágenes

### Flotar Imágenes

```html
<img src="image.jpg" class="float-start" alt="Float start">
<img src="image.jpg" class="float-end" alt="Float end">
<img src="image.jpg" class="float-none" alt="Float none">
```

### Centrar Imágenes

```html
<div class="text-center">
  <img src="image.jpg" alt="Centered image">
</div>
```

O usando flexbox:

```html
<div class="d-flex justify-content-center">
  <img src="image.jpg" alt="Centered image">
</div>
```

## Tamaños de Imagen

Puedes usar clases de utilidad para controlar el tamaño:

```html
<!-- Width -->
<img src="image.jpg" class="w-25" alt="25% width">
<img src="image.jpg" class="w-50" alt="50% width">
<img src="image.jpg" class="w-75" alt="75% width">
<img src="image.jpg" class="w-100" alt="100% width">

<!-- Height -->
<img src="image.jpg" class="h-25" alt="25% height">
<img src="image.jpg" class="h-50" alt="50% height">
<img src="image.jpg" class="h-75" alt="75% height">
<img src="image.jpg" class="h-100" alt="100% height">
```

## Object Fit

Controla cómo una imagen se ajusta a su contenedor:

```html
<img src="image.jpg" class="object-fit-contain" alt="Contain">
<img src="image.jpg" class="object-fit-cover" alt="Cover">
<img src="image.jpg" class="object-fit-fill" alt="Fill">
<img src="image.jpg" class="object-fit-none" alt="None">
<img src="image.jpg" class="object-fit-scale-down" alt="Scale down">
```

## Lazy Loading

Usa el atributo nativo `loading="lazy"` para cargar imágenes de forma diferida:

```html
<img src="image.jpg" class="img-fluid" loading="lazy" alt="Lazy loaded image">
```

## Imágenes con Caption

Combina imágenes con captions usando la clase `.figure`:

```html
<figure class="figure">
  <img src="image.jpg" class="figure-img img-fluid rounded" alt="Figure image">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
```

## Responsive Images con srcset

Para mejor rendimiento, usa `srcset`:

```html
<img src="image-small.jpg"
     srcset="image-small.jpg 300w,
             image-medium.jpg 600w,
             image-large.jpg 1200w"
     sizes="(max-width: 600px) 300px,
            (max-width: 1200px) 600px,
            1200px"
     alt="Responsive image">
```

## Aspect Ratio

Mantén el aspect ratio de las imágenes:

```html
<!-- 16:9 -->
<div class="ratio ratio-16x9">
  <img src="image.jpg" alt="16:9 image">
</div>

<!-- 4:3 -->
<div class="ratio ratio-4x3">
  <img src="image.jpg" alt="4:3 image">
</div>

<!-- 1:1 -->
<div class="ratio ratio-1x1">
  <img src="image.jpg" alt="Square image">
</div>
```

## Imágenes con Overlay

Crea imágenes con overlay usando utilidades:

```html
<div class="position-relative">
  <img src="image.jpg" class="img-fluid" alt="Image">
  <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
    <h2 class="text-white">Overlay Text</h2>
  </div>
</div>
```

## Ejemplos de Uso

### Hero Image

```html
<div class="hero-section">
  <img src="hero.jpg" class="img-fluid w-100" alt="Hero image" style="max-height: 500px; object-fit: cover;">
  <div class="hero-content position-absolute top-50 start-50 translate-middle text-center text-white">
    <h1>Welcome</h1>
    <p>Hero section with image</p>
  </div>
</div>
```

### Gallery

```html
<div class="row g-4">
  <div class="col-md-4">
    <img src="image1.jpg" class="img-fluid rounded" alt="Image 1">
  </div>
  <div class="col-md-4">
    <img src="image2.jpg" class="img-fluid rounded" alt="Image 2">
  </div>
  <div class="col-md-4">
    <img src="image3.jpg" class="img-fluid rounded" alt="Image 3">
  </div>
</div>
```

### Avatar

```html
<img src="avatar.jpg" class="rounded-circle" alt="Avatar" style="width: 100px; height: 100px; object-fit: cover;">
```

## Accesibilidad

Siempre incluye texto alternativo:

```html
<!-- ✅ Bueno -->
<img src="image.jpg" alt="Descripción clara de la imagen">

<!-- ❌ Evitar -->
<img src="image.jpg" alt="image">
<img src="image.jpg">
```

## Optimización

### Formatos Modernos

Usa formatos modernos como WebP o AVIF cuando sea posible:

```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" class="img-fluid" alt="Fallback image">
</picture>
```

### Tamaños Responsivos

```html
<picture>
  <source media="(min-width: 1200px)" srcset="image-large.jpg">
  <source media="(min-width: 768px)" srcset="image-medium.jpg">
  <img src="image-small.jpg" class="img-fluid" alt="Responsive image">
</picture>
```

## Próximos Pasos

- [Typography](./typography.md) - Sistema de tipografía
- [Tables](./tables.md) - Crear tablas
- [Figures](./figures.md) - Usar figures

