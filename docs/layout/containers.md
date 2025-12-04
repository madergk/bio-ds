# Containers

Containers son el elemento base más fundamental en el layout del Bio Design System. Los containers contienen, rellenan y alinean tu contenido dentro de un dispositivo o viewport dado.

## Cómo Funcionan

Los containers son el elemento base más fundamental en el layout. Aunque los containers pueden anidarse, la mayoría de los layouts no requieren un container anidado.

Los containers se usan para:
- Contener y centrar tu contenido
- Proporcionar padding responsivo
- Establecer el ancho máximo del contenido

## Tipos de Containers

### Container por Defecto

El `.container` clase proporciona un container responsivo de ancho fijo.

```html
<div class="container">
  <!-- Contenido -->
</div>
```

**Características:**
- Ancho máximo responsivo
- Padding horizontal automático
- Centrado automático

### Container Fluid

El `.container-fluid` clase proporciona un container de ancho completo, que abarca todo el ancho del viewport.

```html
<div class="container-fluid">
  <!-- Contenido -->
</div>
```

**Características:**
- Ancho completo (100%)
- Padding horizontal automático
- Sin ancho máximo

### Container Responsivo

Puedes usar clases de container responsivas para hacer que los containers sean responsivos por breakpoint:

```html
<!-- Container pequeño hasta medium, luego fluid -->
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

## Anchos de Container

Los containers tienen anchos máximos responsivos:

| Breakpoint | Ancho Máximo |
| ---------- | ------------ |
| Extra small | 100% |
| Small (≥576px) | 540px |
| Medium (≥768px) | 720px |
| Large (≥992px) | 960px |
| Extra large (≥1200px) | 1140px |
| Extra extra large (≥1400px) | 1320px |

## Ejemplos

### Container Básico

```html
<div class="container">
  <h1>Mi Título</h1>
  <p>Contenido dentro de un container.</p>
</div>
```

### Container con Grid

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      Columna 1
    </div>
    <div class="col-md-6">
      Columna 2
    </div>
  </div>
</div>
```

### Container Fluid

```html
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      Contenido de ancho completo
    </div>
  </div>
</div>
```

## Personalización

### Cambiar Anchos Máximos

Puedes personalizar los anchos máximos de los containers usando CSS:

```css
/* Personalizar ancho máximo del container */
.container {
  max-width: 1200px; /* En lugar del valor por defecto */
}

/* Personalizar por breakpoint */
@media (min-width: 1200px) {
  .container {
    max-width: 1400px;
  }
}
```

### Cambiar Padding

```css
/* Cambiar padding horizontal del container */
.container,
.container-fluid {
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-lg);
}
```

## Mejores Prácticas

1. **Usa containers para centrar contenido**: Los containers centran automáticamente el contenido y proporcionan padding consistente.

2. **No anides containers innecesariamente**: En la mayoría de los casos, no necesitas anidar containers.

3. **Usa container-fluid para contenido de ancho completo**: Si necesitas que el contenido ocupe todo el ancho, usa `.container-fluid`.

4. **Combina con el sistema de grillas**: Los containers funcionan perfectamente con el sistema de grillas de 12 columnas.

## Ejemplo Completo

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="bio-ds/styles.css">
</head>
<body>
  <!-- Container principal -->
  <div class="container">
    <header>
      <h1>Mi Aplicación</h1>
    </header>
    
    <main>
      <div class="row">
        <div class="col-md-8">
          <h2>Contenido Principal</h2>
          <p>Este es el contenido principal de la página.</p>
        </div>
        <div class="col-md-4">
          <h3>Sidebar</h3>
          <p>Contenido de la barra lateral.</p>
        </div>
      </div>
    </main>
    
    <footer>
      <p>&copy; 2024 Mi Aplicación</p>
    </footer>
  </div>
</body>
</html>
```

## Próximos Pasos

- [Grid](./grid.md) - Crear layouts con el sistema de grillas
- [Breakpoints](./breakpoints.md) - Entender los breakpoints
- [Utilities](./utilities.md) - Utilidades de layout

