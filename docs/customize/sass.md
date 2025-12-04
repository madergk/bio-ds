# Customize - Sass

Aunque el Bio Design System utiliza Design Tokens como base, puedes usar Sass para extender y personalizar el sistema. Esta guía te muestra cómo trabajar con Sass en el contexto del Bio Design System.

## Arquitectura Actual

El Bio Design System utiliza **Design Tokens** con Style Dictionary en lugar de Sass puro. Sin embargo, puedes usar Sass para:

1. **Extender los tokens generados**
2. **Crear mixins y funciones personalizadas**
3. **Construir componentes con Sass**

## Estructura de Archivos

```
bio-ds/
├── tokens/
│   └── tokens.json              # Source of truth
├── src/
│   ├── tokens/
│   │   └── generated/
│   │       └── variables.css    # Tokens generados como CSS
│   └── styles/
│       ├── bootstrap-variables.css  # Mapeo Bootstrap
│       ├── bootstrap-reboot.css
│       └── bootstrap-utilities.css
```

## Usar Tokens en Sass

Aunque los tokens se generan como CSS variables, puedes importarlos en Sass:

```scss
// Importar tokens generados
@import '../tokens/generated/variables.css';

// Usar en tu Sass
.my-component {
  background-color: var(--color-primary-500);  // #e20039
  padding: var(--spacing-md);
}
```

## Crear Mixins Personalizados

Puedes crear mixins que utilicen los tokens:

```scss
// _mixins.scss
@mixin button-variant($color) {
  background-color: var($color);
  color: var(--color-base-white);
  
  &:hover {
    background-color: var($color);
    opacity: 0.9;
  }
  
  &:active {
    background-color: var($color);
    opacity: 0.8;
  }
}

// Uso
.my-button {
  @include button-variant(--color-primary-500);
}
```

## Funciones Sass con Tokens

```scss
// _functions.scss
@function get-color($color-name, $shade: 500) {
  @return var(--color-#{$color-name}-#{$shade});
}

// Uso
.my-component {
  background-color: get-color(primary, 500);  // var(--color-primary-500)
  border-color: get-color(primary, 300);
}
```

## Variables Sass Locales

Puedes crear variables Sass locales que referencien los tokens:

```scss
// _variables.scss
$primary-color: var(--color-primary-500);
$primary-hover: var(--color-primary-600);
$primary-active: var(--color-primary-700);

$spacing-sm: var(--spacing-sm);
$spacing-md: var(--spacing-md);
$spacing-lg: var(--spacing-lg);
```

## Compilar Sass con Tokens

### Opción 1: Usar Angular CLI

Si estás usando Angular, el CLI maneja Sass automáticamente:

```json
// angular.json
{
  "styles": [
    "src/styles.scss"
  ]
}
```

```scss
// src/styles.scss
@import '~@madergk/bio-ds/dist/bio-ds/styles.css';

// Tus estilos personalizados
@import 'custom/variables';
@import 'custom/mixins';
@import 'custom/components';
```

### Opción 2: Usar Webpack

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
```

## Ejemplo Completo

```scss
// _theme.scss
@import '../tokens/generated/variables.css';

// Variables locales
$primary: var(--color-primary-500);
$secondary: var(--color-neutral-600);

// Mixins
@mixin card($padding: var(--spacing-md)) {
  padding: $padding;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
}

@mixin button($variant: primary) {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-family: var(--typography-font-family-primary);
  
  @if $variant == primary {
    background-color: var(--color-primary-500);
    color: var(--color-base-white);
  }
}

// Uso
.my-card {
  @include card;
  background-color: var(--color-background-default);
}

.my-button {
  @include button(primary);
}
```

## Migrar de Sass a Tokens

Si tienes código Sass existente, puedes migrarlo gradualmente:

**Antes (Sass puro):**
```scss
$primary-color: #e20039;
$spacing-md: 16px;

.my-component {
  background-color: $primary-color;
  padding: $spacing-md;
}
```

**Después (con Tokens):**
```scss
.my-component {
  background-color: var(--color-primary-500);
  padding: var(--spacing-md);
}
```

## Ventajas de Usar Tokens

1. **Single Source of Truth**: Un solo archivo (`tokens.json`) controla todos los valores
2. **Generación Automática**: Los tokens se generan en múltiples formatos
3. **Type Safety**: TypeScript types generados automáticamente
4. **Runtime Access**: Puedes acceder a los tokens en JavaScript/TypeScript
5. **Bootstrap Compatible**: Mapeo automático a variables Bootstrap

## Próximos Pasos

- [Options](./options.md) - Variables globales
- [CSS variables](./css-variables.md) - Propiedades CSS personalizadas
- [Components](./components.md) - Estructura de componentes

