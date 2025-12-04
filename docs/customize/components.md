# Customize - Components

Aprende cómo construimos casi todos nuestros componentes de forma responsiva y con clases base y modificadoras. Esta guía te muestra cómo personalizar y extender los componentes del Bio Design System.

## Estructura de Componentes

Los componentes del Bio Design System siguen el principio de **Atomic Design**:

- **Atoms**: Componentes básicos (Button, Input, Badge)
- **Molecules**: Combinaciones simples (ButtonGroup, InputGroup)
- **Organisms**: Componentes complejos (Modal, Navbar)

## Clases Base y Modificadoras

Todos los componentes usan un sistema de clases base + modificadoras:

```css
/* Clase base */
.bio-button {
  /* Estilos base */
}

/* Modificadoras */
.bio-button--primary { }
.bio-button--outline { }
.bio-button--sm { }
.bio-button--md { }
.bio-button--lg { }
```

## Personalizar Componentes

### Método 1: Sobrescribir Variables CSS

La forma más fácil de personalizar componentes es sobrescribir las variables CSS que usan:

```css
/* Personalizar botones */
:root {
  --bs-btn-padding-y: 12px;  /* En lugar de var(--spacing-sm) */
  --bs-btn-padding-x: 24px;   /* En lugar de var(--spacing-md) */
  --bs-btn-border-radius: 8px;
}
```

### Método 2: Extender con CSS

Puedes extender los componentes con tus propias clases:

```css
/* Extender botón */
.bio-button--custom {
  background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700));
  box-shadow: var(--shadow-lg);
}

.bio-button--custom:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}
```

### Método 3: Modificar Tokens

Modifica los tokens que los componentes usan:

```json
{
  "border": {
    "radius": {
      "md": { "value": "12px" }  // Cambiar de 8px a 12px
    }
  }
}
```

## Componentes Principales

### Button

```css
/* Variables personalizables */
--bs-btn-padding-y: var(--spacing-sm);
--bs-btn-padding-x: var(--spacing-md);
--bs-btn-font-size: var(--typography-font-size-base);
--bs-btn-border-radius: var(--border-radius-md);
--bs-btn-transition: var(--bs-transition-base);
```

**Variantes:**
- `.bio-button--default`
- `.bio-button--primary` (usa `--color-primary-500` - #e20039)
- `.bio-button--outline`
- `.bio-button--dashed`
- `.bio-button--text`
- `.bio-button--link`
- `.bio-button--danger`

**Tamaños:**
- `.bio-button--sm`
- `.bio-button--md`
- `.bio-button--lg`

### Input

```css
/* Variables personalizables */
--bs-input-padding-y: var(--spacing-sm);
--bs-input-padding-x: var(--spacing-md);
--bs-input-font-size: var(--typography-font-size-base);
--bs-input-border-radius: var(--border-radius-md);
--bs-input-border-color: var(--color-border-default);
--bs-input-focus-border-color: var(--color-border-focus);
```

### Card

```css
/* Variables personalizables */
--bs-card-spacer-y: var(--spacing-md);
--bs-card-spacer-x: var(--spacing-md);
--bs-card-border-radius: var(--border-radius-md);
--bs-card-border-color: var(--color-border-lighter);
--bs-card-box-shadow: var(--shadow-sm);
```

### Alert

```css
/* Variables personalizables */
--bs-alert-padding-y: var(--spacing-md);
--bs-alert-padding-x: var(--spacing-md);
--bs-alert-border-radius: var(--border-radius-md);
--bs-alert-border-width: var(--border-width-thin);
```

## Crear Componentes Personalizados

Puedes crear componentes personalizados que usen los tokens del Bio Design System:

```css
/* Mi componente personalizado */
.my-custom-card {
  /* Usar tokens del design system */
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  background-color: var(--color-background-default);
  box-shadow: var(--shadow-md);
  
  /* Usar colores primary de Bioma */
  border-top: 4px solid var(--color-primary-500);  /* #e20039 */
}

.my-custom-card__title {
  color: var(--color-primary-500);
  font-family: var(--typography-font-family-primary);  /* Sora */
  font-size: var(--typography-font-size-xl);
  font-weight: var(--typography-font-weight-semibold);
}
```

## Responsive Components

Los componentes se adaptan automáticamente usando las variables CSS y media queries:

```css
.bio-button {
  padding: var(--spacing-sm) var(--spacing-md);
}

@media (max-width: 768px) {
  .bio-button {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--typography-font-size-sm);
  }
}
```

## Estados de Componentes

Los componentes soportan múltiples estados usando clases modificadoras:

```css
/* Estados de botón */
.bio-button--disabled { }
.bio-button--loading { }

/* Estados de input */
.bio-input--error { }
.bio-input--success { }
.bio-input--focus { }
```

## Ejemplo: Personalizar Button

```css
/* 1. Sobrescribir variables */
:root {
  --bs-btn-padding-y: 10px;
  --bs-btn-padding-x: 20px;
  --bs-btn-border-radius: 6px;
}

/* 2. Crear variante personalizada */
.bio-button--gradient {
  background: linear-gradient(
    135deg,
    var(--color-primary-500),  /* #e20039 */
    var(--color-primary-700)     /* #a00029 */
  );
  border: none;
  color: var(--color-base-white);
  box-shadow: var(--shadow-md);
}

.bio-button--gradient:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-1px);
}

.bio-button--gradient:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

## Ejemplo: Personalizar Input

```css
/* Input personalizado con focus mejorado */
.bio-input {
  transition: all var(--transition-duration-normal) var(--transition-timing-ease);
}

.bio-input:focus {
  border-color: var(--color-primary-500);  /* #e20039 */
  box-shadow: 0 0 0 0.2rem rgba(226, 0, 57, 0.25);  /* Primary con opacidad */
  outline: none;
}
```

## Accesibilidad

Al personalizar componentes, asegúrate de mantener la accesibilidad:

```css
/* Mantener contraste adecuado */
.bio-button--primary {
  background-color: var(--color-primary-500);  /* #e20039 */
  color: var(--color-base-white);
  /* Ratio de contraste: 4.5:1 ✓ */
}

/* Focus visible */
.bio-button:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

## Próximos Pasos

- [CSS variables](./css-variables.md) - Propiedades CSS personalizadas
- [Color](./color.md) - Sistema de colores
- [Optimize](./optimize.md) - Optimización y rendimiento

