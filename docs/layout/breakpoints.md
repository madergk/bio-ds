# Breakpoints

Breakpoints son anchos personalizables que determinan cómo se comporta tu layout responsivo en diferentes tamaños de dispositivo o viewport en el Bio Design System.

## Conceptos Clave

- **Los breakpoints son los bloques de construcción del diseño responsivo.** Úsalos para controlar cuándo tu layout puede adaptarse a un viewport o tamaño de dispositivo particular.
- **Usa media queries para estructurar tu CSS por breakpoint.** Las media queries son una característica de CSS que te permiten aplicar estilos condicionalmente basados en un conjunto de parámetros del navegador y sistema operativo. Más comúnmente usamos `min-width` en nuestras media queries.
- **Mobile first, diseño responsivo es el objetivo.** El CSS del Bio Design System apunta a aplicar el mínimo de estilos para hacer que un layout funcione en el breakpoint más pequeño, y luego agrega estilos para ajustar ese diseño para dispositivos más grandes. Esto optimiza tu CSS, mejora el tiempo de renderizado y proporciona una gran experiencia para tus visitantes.

## Breakpoints Disponibles

El Bio Design System incluye seis breakpoints por defecto, a veces referidos como _grid tiers_, para construir de forma responsiva. Estos breakpoints pueden personalizarse si estás usando nuestros archivos fuente.

| Breakpoint        | Class infix | Dimensions |
| ----------------- | ----------- | ---------- |
| Extra small       | _None_      | <576px     |
| Small             | sm          | ≥576px     |
| Medium            | md          | ≥768px     |
| Large             | lg          | ≥992px     |
| Extra large       | xl          | ≥1200px    |
| Extra extra large | xxl         | ≥1400px    |

Cada breakpoint fue elegido para contener cómodamente containers cuyos anchos son múltiplos de 12. Los breakpoints también son representativos de un subconjunto de tamaños comunes de dispositivos y dimensiones de viewport—no apuntan específicamente a cada caso de uso o dispositivo. En su lugar, los rangos proporcionan una base fuerte y consistente para construir en casi cualquier dispositivo.

## Personalizar Breakpoints

Los breakpoints pueden personalizarse mediante Design Tokens. Aunque actualmente no están definidos como tokens, puedes sobrescribirlos usando CSS:

```css
/* Personalizar breakpoints */
:root {
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1200px;
  --bs-breakpoint-xxl: 1400px;
}
```

## Media Queries

Dado que el Bio Design System está desarrollado para ser mobile first, usamos un puñado de media queries para crear breakpoints sensatos para nuestros layouts e interfaces. Estos breakpoints están principalmente basados en anchos mínimos de viewport y nos permiten escalar elementos a medida que el viewport cambia.

### Min-width

El Bio Design System usa principalmente los siguientes rangos de media queries—o breakpoints—en nuestros archivos fuente para nuestro layout, sistema de grillas y componentes.

```css
/* X-Small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { ... }

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) { ... }
```

### Max-width

Ocasionalmente usamos media queries que van en la otra dirección (el tamaño de pantalla dado _o más pequeño_):

```css
/* `xs` returns only a ruleset and no media query */
/* ... { ... } */

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { ... }

/* `md` applies to small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { ... }

/* `lg` applies to medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) { ... }

/* `xl` applies to large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { ... }

/* `xxl` applies to x-large devices (large desktops, less than 1400px) */
@media (max-width: 1399.98px) { ... }
```

**¿Por qué restar .02px?** Los navegadores actualmente no soportan consultas de rango de contexto, por lo que trabajamos alrededor de las limitaciones de los prefijos min- y max- y viewports con anchos fraccionales (que pueden ocurrir bajo ciertas condiciones en dispositivos de alta densidad de píxeles, por ejemplo) usando valores con mayor precisión.

### Single Breakpoint

También hay media queries y mixins para apuntar a un solo segmento de tamaños de pantalla usando los anchos mínimos y máximos de breakpoint:

```css
/* Solo para medium devices */
@media (min-width: 768px) and (max-width: 991.98px) { ... }
```

### Between Breakpoints

De manera similar, las media queries pueden abarcar múltiples anchos de breakpoint:

```css
/* Aplicar estilos desde medium devices hasta extra large devices */
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
```

## Ejemplos de Uso

### Ocultar en Mobile, Mostrar en Desktop

```css
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}

.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .desktop-only {
    display: block;
  }
}
```

### Ajustar Padding por Breakpoint

```css
.responsive-padding {
  padding: var(--spacing-sm);
}

@media (min-width: 768px) {
  .responsive-padding {
    padding: var(--spacing-md);
  }
}

@media (min-width: 1200px) {
  .responsive-padding {
    padding: var(--spacing-lg);
  }
}
```

### Cambiar Tamaño de Fuente

```css
.responsive-text {
  font-size: var(--typography-font-size-base);
}

@media (min-width: 768px) {
  .responsive-text {
    font-size: var(--typography-font-size-lg);
  }
}

@media (min-width: 1200px) {
  .responsive-text {
    font-size: var(--typography-font-size-xl);
  }
}
```

## Clases de Utilidad Responsivas

El Bio Design System proporciona clases de utilidad que se aplican en diferentes breakpoints:

```html
<!-- Ocultar en mobile, mostrar en desktop -->
<div class="d-none d-md-block">Visible en desktop</div>

<!-- Mostrar en mobile, ocultar en desktop -->
<div class="d-block d-md-none">Visible en mobile</div>

<!-- Padding responsivo -->
<div class="p-2 p-md-4 p-lg-5">Contenido</div>
```

## Próximos Pasos

- [Containers](./containers.md) - Usar containers para layout
- [Grid](./grid.md) - Crear layouts con el sistema de grillas
- [Utilities](./utilities.md) - Utilidades de layout

