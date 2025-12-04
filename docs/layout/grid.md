# Grid

El sistema de grillas del Bio Design System utiliza flexbox y está construido con un sistema de 12 columnas. Permite crear layouts complejos y responsivos fácilmente.

## Cómo Funciona

El sistema de grillas del Bio Design System:

- **Usa flexbox**: Construido con flexbox para layouts flexibles
- **12 columnas**: Sistema de 12 columnas por defecto
- **Responsive**: Se adapta automáticamente a diferentes tamaños de pantalla
- **Gutters**: Espaciado entre columnas personalizable

## Ejemplo Básico

```html
<div class="container">
  <div class="row">
    <div class="col">
      Columna 1
    </div>
    <div class="col">
      Columna 2
    </div>
    <div class="col">
      Columna 3
    </div>
  </div>
</div>
```

## Columnas

### Columnas Automáticas

Usa `.col` para crear columnas que se distribuyen automáticamente:

```html
<div class="row">
  <div class="col">Columna 1</div>
  <div class="col">Columna 2</div>
  <div class="col">Columna 3</div>
</div>
```

### Columnas con Ancho Específico

Usa `.col-{number}` para especificar el ancho de una columna (de 1 a 12):

```html
<div class="row">
  <div class="col-8">8 columnas</div>
  <div class="col-4">4 columnas</div>
</div>
```

### Columnas Responsivas

Usa clases de breakpoint para hacer columnas responsivas:

```html
<!-- Stack en mobile, 2 columnas en tablet, 4 columnas en desktop -->
<div class="row">
  <div class="col-12 col-md-6 col-lg-3">Columna 1</div>
  <div class="col-12 col-md-6 col-lg-3">Columna 2</div>
  <div class="col-12 col-md-6 col-lg-3">Columna 3</div>
  <div class="col-12 col-md-6 col-lg-3">Columna 4</div>
</div>
```

### Clases de Breakpoint Disponibles

| Clase | Breakpoint | Dimensiones |
| ----- | ---------- | ----------- |
| `.col-{n}` | Extra small | <576px |
| `.col-sm-{n}` | Small | ≥576px |
| `.col-md-{n}` | Medium | ≥768px |
| `.col-lg-{n}` | Large | ≥992px |
| `.col-xl-{n}` | Extra large | ≥1200px |
| `.col-xxl-{n}` | Extra extra large | ≥1400px |

### Ejemplos de Columnas

#### Dos Columnas Iguales

```html
<div class="row">
  <div class="col-6">50%</div>
  <div class="col-6">50%</div>
</div>
```

#### Tres Columnas Iguales

```html
<div class="row">
  <div class="col-4">33.33%</div>
  <div class="col-4">33.33%</div>
  <div class="col-4">33.33%</div>
</div>
```

#### Layout Asimétrico

```html
<div class="row">
  <div class="col-8">Contenido principal (66.67%)</div>
  <div class="col-4">Sidebar (33.33%)</div>
</div>
```

#### Layout Responsivo Completo

```html
<div class="row">
  <!-- Full width en mobile, 2 columnas en tablet, 4 columnas en desktop -->
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card">Card 1</div>
  </div>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card">Card 2</div>
  </div>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card">Card 3</div>
  </div>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card">Card 4</div>
  </div>
</div>
```

## Gutters

Los gutters (espaciado entre columnas) proporcionan espacio entre las columnas usando padding. El espaciado se puede personalizar usando Design Tokens.

### Gutters por Defecto

Los gutters usan el espaciado del sistema de tokens:

```css
/* Gutters usan spacing tokens */
.row {
  --bs-gutter-x: var(--spacing-4);  /* 16px horizontal */
  --bs-gutter-y: var(--spacing-4);  /* 16px vertical */
}
```

### Sin Gutters

Usa `.g-0` para eliminar los gutters:

```html
<div class="row g-0">
  <div class="col-6">Sin gutter</div>
  <div class="col-6">Sin gutter</div>
</div>
```

### Gutters Personalizados

Puedes personalizar los gutters usando clases de utilidad:

```html
<!-- Gutters pequeños -->
<div class="row g-2">
  <div class="col-6">Gutter pequeño</div>
  <div class="col-6">Gutter pequeño</div>
</div>

<!-- Gutters grandes -->
<div class="row g-5">
  <div class="col-6">Gutter grande</div>
  <div class="col-6">Gutter grande</div>
</div>
```

### Gutters Verticales

Controla solo el espaciado vertical:

```html
<div class="row gy-4">
  <div class="col-6">Gutter vertical</div>
  <div class="col-6">Gutter vertical</div>
</div>
```

### Gutters Horizontales

Controla solo el espaciado horizontal:

```html
<div class="row gx-4">
  <div class="col-6">Gutter horizontal</div>
  <div class="col-6">Gutter horizontal</div>
</div>
```

## Alineación

### Alineación Vertical

```html
<!-- Alinear al inicio -->
<div class="row align-items-start">
  <div class="col">Inicio</div>
</div>

<!-- Alinear al centro -->
<div class="row align-items-center">
  <div class="col">Centro</div>
</div>

<!-- Alinear al final -->
<div class="row align-items-end">
  <div class="col">Final</div>
</div>
```

### Alineación Horizontal

```html
<!-- Justificar al inicio -->
<div class="row justify-content-start">
  <div class="col-4">Inicio</div>
</div>

<!-- Justificar al centro -->
<div class="row justify-content-center">
  <div class="col-4">Centro</div>
</div>

<!-- Justificar al final -->
<div class="row justify-content-end">
  <div class="col-4">Final</div>
</div>

<!-- Espacio entre -->
<div class="row justify-content-between">
  <div class="col-4">Izquierda</div>
  <div class="col-4">Derecha</div>
</div>

<!-- Espacio alrededor -->
<div class="row justify-content-around">
  <div class="col-4">Columna</div>
</div>
```

## Ordenamiento

Puedes cambiar el orden visual de las columnas:

```html
<div class="row">
  <div class="col order-2">Segundo</div>
  <div class="col order-1">Primero</div>
  <div class="col order-3">Tercero</div>
</div>
```

### Ordenamiento Responsivo

```html
<div class="row">
  <div class="col order-md-2">Segundo en desktop</div>
  <div class="col order-md-1">Primero en desktop</div>
</div>
```

## Offset

Usa offset para mover columnas:

```html
<div class="row">
  <div class="col-md-4 offset-md-4">Centrado (offset 4)</div>
</div>
```

## Anidación

Puedes anidar filas dentro de columnas:

```html
<div class="row">
  <div class="col-md-8">
    <div class="row">
      <div class="col-md-6">Anidado 1</div>
      <div class="col-md-6">Anidado 2</div>
    </div>
  </div>
  <div class="col-md-4">Sidebar</div>
</div>
```

## Ejemplos Completos

### Layout de Blog

```html
<div class="container">
  <div class="row">
    <!-- Sidebar -->
    <aside class="col-md-3">
      <h3>Sidebar</h3>
      <nav>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
        </ul>
      </nav>
    </aside>
    
    <!-- Contenido principal -->
    <main class="col-md-9">
      <article>
        <h1>Título del Artículo</h1>
        <p>Contenido del artículo...</p>
      </article>
    </main>
  </div>
</div>
```

### Dashboard con Cards

```html
<div class="container">
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card 1</h5>
          <p class="card-text">Contenido</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card 2</h5>
          <p class="card-text">Contenido</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card 3</h5>
          <p class="card-text">Contenido</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Personalización

### Cambiar Número de Columnas

```css
/* Cambiar a sistema de 16 columnas */
.row {
  --bs-columns: 16;
}
```

### Cambiar Gutters

```css
/* Gutters personalizados */
.row {
  --bs-gutter-x: var(--spacing-lg);  /* 24px */
  --bs-gutter-y: var(--spacing-md);  /* 16px */
}
```

## Próximos Pasos

- [Containers](./containers.md) - Usar containers
- [Breakpoints](./breakpoints.md) - Entender breakpoints
- [Utilities](./utilities.md) - Utilidades de layout

