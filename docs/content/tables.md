# Tables

El Bio Design System proporciona estilos para tablas, incluyendo variantes, estados y utilidades para crear tablas responsivas y accesibles.

## Tabla Básica

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
```

## Variantes

### Tabla con Bordes

```html
<table class="table table-bordered">
  <!-- contenido -->
</table>
```

### Tabla sin Bordes

```html
<table class="table table-borderless">
  <!-- contenido -->
</table>
```

### Tabla con Bordes Pequeños

```html
<table class="table table-sm">
  <!-- contenido -->
</table>
```

### Tabla Striped (Rayada)

```html
<table class="table table-striped">
  <!-- contenido -->
</table>
```

### Tabla Hover

```html
<table class="table table-hover">
  <!-- contenido -->
</table>
```

### Combinar Variantes

```html
<table class="table table-striped table-hover table-bordered">
  <!-- contenido -->
</table>
```

## Estados de Fila

### Filas Activas

```html
<tr class="table-active">
  <td>Active row</td>
</tr>
```

### Filas con Colores

```html
<tr class="table-primary">
  <td>Primary row</td>
</tr>
<tr class="table-secondary">
  <td>Secondary row</td>
</tr>
<tr class="table-success">
  <td>Success row</td>
</tr>
<tr class="table-danger">
  <td>Danger row</td>
</tr>
<tr class="table-warning">
  <td>Warning row</td>
</tr>
<tr class="table-info">
  <td>Info row</td>
</tr>
<tr class="table-light">
  <td>Light row</td>
</tr>
<tr class="table-dark">
  <td>Dark row</td>
</tr>
```

## Tablas Responsivas

### Tabla Scroll Horizontal

```html
<div class="table-responsive">
  <table class="table">
    <!-- contenido -->
  </table>
</div>
```

### Tabla Responsiva por Breakpoint

```html
<div class="table-responsive-sm">
  <table class="table">
    <!-- Small and up -->
  </table>
</div>

<div class="table-responsive-md">
  <table class="table">
    <!-- Medium and up -->
  </table>
</div>

<div class="table-responsive-lg">
  <table class="table">
    <!-- Large and up -->
  </table>
</div>

<div class="table-responsive-xl">
  <table class="table">
    <!-- Extra large and up -->
  </table>
</div>

<div class="table-responsive-xxl">
  <table class="table">
    <!-- Extra extra large and up -->
  </table>
</div>
```

## Estilos de Celdas

### Celdas con Colores

```html
<td class="table-primary">Primary cell</td>
<td class="table-secondary">Secondary cell</td>
<td class="table-success">Success cell</td>
<td class="table-danger">Danger cell</td>
<td class="table-warning">Warning cell</td>
<td class="table-info">Info cell</td>
<td class="table-light">Light cell</td>
<td class="table-dark">Dark cell</td>
```

## Alineación

```html
<!-- Alinear texto en celdas -->
<td class="text-start">Start</td>
<td class="text-center">Center</td>
<td class="text-end">End</td>
```

## Ejemplos Completos

### Tabla de Datos

```html
<div class="table-responsive">
  <table class="table table-striped table-hover">
    <thead class="table-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Email</th>
        <th scope="col">Estado</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Juan Pérez</td>
        <td>juan@example.com</td>
        <td><span class="badge bg-success">Activo</span></td>
        <td>
          <button class="btn btn-sm btn-primary">Editar</button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>María García</td>
        <td>maria@example.com</td>
        <td><span class="badge bg-warning">Pendiente</span></td>
        <td>
          <button class="btn btn-sm btn-primary">Editar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Tabla con Footer

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Producto 1</td>
      <td>2</td>
      <td>$20.00</td>
    </tr>
    <tr>
      <td>Producto 2</td>
      <td>1</td>
      <td>$15.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2" class="text-end fw-bold">Total:</td>
      <td class="fw-bold">$35.00</td>
    </tr>
  </tfoot>
</table>
```

## Accesibilidad

### Usar scope

Siempre usa el atributo `scope` en headers:

```html
<th scope="col">Column Header</th>
<th scope="row">Row Header</th>
```

### Usar caption

Agrega un caption para describir la tabla:

```html
<table class="table">
  <caption>Lista de usuarios</caption>
  <!-- contenido -->
</table>
```

## Personalización

### Cambiar Colores

```css
/* Personalizar color de tabla primary */
.table-primary {
  background-color: var(--color-primary-50);
  color: var(--color-primary-900);
}
```

### Cambiar Espaciado

```css
.table {
  --bs-table-cell-padding-y: var(--spacing-md);
  --bs-table-cell-padding-x: var(--spacing-md);
}
```

## Próximos Pasos

- [Typography](./typography.md) - Sistema de tipografía
- [Images](./images.md) - Trabajar con imágenes
- [Figures](./figures.md) - Usar figures

