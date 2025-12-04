# Layout Utilities

El Bio Design System proporciona utilidades de layout para controlar el display, flexbox, spacing, positioning y más.

## Display

Controla cómo se muestra un elemento:

```html
<!-- Display block -->
<div class="d-block">Block</div>

<!-- Display inline -->
<span class="d-inline">Inline</span>

<!-- Display inline-block -->
<div class="d-inline-block">Inline Block</div>

<!-- Display flex -->
<div class="d-flex">Flex</div>

<!-- Display grid -->
<div class="d-grid">Grid</div>

<!-- Display none -->
<div class="d-none">Hidden</div>
```

### Display Responsivo

```html
<!-- Oculto en mobile, visible en desktop -->
<div class="d-none d-md-block">Visible en desktop</div>

<!-- Visible en mobile, oculto en desktop -->
<div class="d-block d-md-none">Visible en mobile</div>
```

## Flexbox

### Direction

```html
<div class="d-flex flex-row">Row (default)</div>
<div class="d-flex flex-row-reverse">Row Reverse</div>
<div class="d-flex flex-column">Column</div>
<div class="d-flex flex-column-reverse">Column Reverse</div>
```

### Justify Content

```html
<div class="d-flex justify-content-start">Start</div>
<div class="d-flex justify-content-end">End</div>
<div class="d-flex justify-content-center">Center</div>
<div class="d-flex justify-content-between">Between</div>
<div class="d-flex justify-content-around">Around</div>
<div class="d-flex justify-content-evenly">Evenly</div>
```

### Align Items

```html
<div class="d-flex align-items-start">Start</div>
<div class="d-flex align-items-end">End</div>
<div class="d-flex align-items-center">Center</div>
<div class="d-flex align-items-baseline">Baseline</div>
<div class="d-flex align-items-stretch">Stretch</div>
```

### Align Self

```html
<div class="d-flex">
  <div class="align-self-start">Start</div>
  <div class="align-self-end">End</div>
  <div class="align-self-center">Center</div>
</div>
```

### Wrap

```html
<div class="d-flex flex-nowrap">No Wrap</div>
<div class="d-flex flex-wrap">Wrap</div>
<div class="d-flex flex-wrap-reverse">Wrap Reverse</div>
```

### Gap

```html
<!-- Gap usando spacing tokens -->
<div class="d-flex gap-2">Gap pequeño</div>
<div class="d-flex gap-4">Gap mediano</div>
<div class="d-flex gap-5">Gap grande</div>
```

## Spacing

### Margin

```html
<!-- Margin all sides -->
<div class="m-0">m-0</div>
<div class="m-1">m-1 (4px)</div>
<div class="m-2">m-2 (8px)</div>
<div class="m-3">m-3 (12px)</div>
<div class="m-4">m-4 (16px)</div>
<div class="m-5">m-5 (24px)</div>

<!-- Margin top -->
<div class="mt-4">mt-4</div>

<!-- Margin bottom -->
<div class="mb-4">mb-4</div>

<!-- Margin start (left) -->
<div class="ms-4">ms-4</div>

<!-- Margin end (right) -->
<div class="me-4">me-4</div>

<!-- Margin horizontal -->
<div class="mx-4">mx-4</div>

<!-- Margin vertical -->
<div class="my-4">my-4</div>

<!-- Auto margin -->
<div class="mx-auto">Centrado</div>
```

### Padding

```html
<!-- Padding all sides -->
<div class="p-0">p-0</div>
<div class="p-1">p-1 (4px)</div>
<div class="p-2">p-2 (8px)</div>
<div class="p-3">p-3 (12px)</div>
<div class="p-4">p-4 (16px)</div>
<div class="p-5">p-5 (24px)</div>

<!-- Padding top -->
<div class="pt-4">pt-4</div>

<!-- Padding bottom -->
<div class="pb-4">pb-4</div>

<!-- Padding start (left) -->
<div class="ps-4">ps-4</div>

<!-- Padding end (right) -->
<div class="pe-4">pe-4</div>

<!-- Padding horizontal -->
<div class="px-4">px-4</div>

<!-- Padding vertical -->
<div class="py-4">py-4</div>
```

### Spacing Responsivo

```html
<!-- Padding responsivo -->
<div class="p-2 p-md-4 p-lg-5">Padding responsivo</div>

<!-- Margin responsivo -->
<div class="m-2 m-md-4 m-lg-5">Margin responsivo</div>
```

## Position

```html
<!-- Position static (default) -->
<div class="position-static">Static</div>

<!-- Position relative -->
<div class="position-relative">Relative</div>

<!-- Position absolute -->
<div class="position-absolute">Absolute</div>

<!-- Position fixed -->
<div class="position-fixed">Fixed</div>

<!-- Position sticky -->
<div class="position-sticky">Sticky</div>
```

### Positioning Values

```html
<div class="position-relative">
  <div class="top-0">Top 0</div>
  <div class="end-0">End 0</div>
  <div class="bottom-0">Bottom 0</div>
  <div class="start-0">Start 0</div>
</div>
```

## Sizing

### Width

```html
<div class="w-25">25%</div>
<div class="w-50">50%</div>
<div class="w-75">75%</div>
<div class="w-100">100%</div>
<div class="w-auto">Auto</div>
```

### Height

```html
<div class="h-25">25%</div>
<div class="h-50">50%</div>
<div class="h-75">75%</div>
<div class="h-100">100%</div>
<div class="h-auto">Auto</div>
```

### Max Width/Height

```html
<div class="mw-100">Max width 100%</div>
<div class="mh-100">Max height 100%</div>
```

## Overflow

```html
<div class="overflow-auto">Auto</div>
<div class="overflow-hidden">Hidden</div>
<div class="overflow-visible">Visible</div>
<div class="overflow-scroll">Scroll</div>
```

## Visibility

```html
<!-- Visible -->
<div class="visible">Visible</div>

<!-- Invisible (mantiene espacio) -->
<div class="invisible">Invisible</div>
```

## Text

### Alignment

```html
<div class="text-start">Start</div>
<div class="text-center">Center</div>
<div class="text-end">End</div>
```

### Wrapping

```html
<div class="text-nowrap">No wrap</div>
<div class="text-wrap">Wrap</div>
```

### Truncate

```html
<div class="text-truncate">Texto largo que se trunca...</div>
```

## Vertical Align

```html
<span class="align-baseline">Baseline</span>
<span class="align-top">Top</span>
<span class="align-middle">Middle</span>
<span class="align-bottom">Bottom</span>
<span class="align-text-top">Text Top</span>
<span class="align-text-bottom">Text Bottom</span>
```

## Ejemplos de Uso

### Centrar Contenido

```html
<!-- Centrar horizontalmente -->
<div class="mx-auto" style="width: 200px;">Centrado</div>

<!-- Centrar con flexbox -->
<div class="d-flex justify-content-center">
  <div>Centrado</div>
</div>

<!-- Centrar texto -->
<div class="text-center">Texto centrado</div>
```

### Layout con Flexbox

```html
<div class="d-flex justify-content-between align-items-center">
  <div>Izquierda</div>
  <div>Centro</div>
  <div>Derecha</div>
</div>
```

### Spacing Responsivo

```html
<div class="container">
  <div class="row">
    <div class="col-md-6 p-2 p-md-4 p-lg-5">
      Padding responsivo
    </div>
  </div>
</div>
```

## Próximos Pasos

- [Breakpoints](./breakpoints.md) - Entender breakpoints
- [Grid](./grid.md) - Sistema de grillas
- [Z-index](./z-index.md) - Controlar orden de capas

