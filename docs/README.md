# Bio Design System - Documentación

Bienvenido a la documentación del Bio Design System. Esta documentación te guía a través de todas las características, componentes y opciones de personalización disponibles.

## 🎨 Customize

Personaliza, temariza y extiende el Bio Design System con Design Tokens, opciones globales, un sistema de colores expansivo y más.

- **[Overview](./customize/overview.md)** - Métodos de personalización
- **[Sass](./customize/sass.md)** - Usar archivos fuente Sass
- **[Options](./customize/options.md)** - Variables globales
- **[Color](./customize/color.md)** - Sistema de colores (Primary: #e20039)
- **[Color modes](./customize/color-modes.md)** - Modos claro y oscuro
- **[Components](./customize/components.md)** - Estructura y personalización de componentes
- **[CSS variables](./customize/css-variables.md)** - Propiedades CSS personalizadas
- **[Optimize](./customize/optimize.md)** - Optimización y rendimiento

## 📐 Layout

Sistema de layout del Bio Design System con containers, grillas responsivas, utilidades flexbox y más.

- **[Overview](./layout/README.md)** - Introducción al sistema de layout
- **[Breakpoints](./layout/breakpoints.md)** - Breakpoints responsivos
- **[Containers](./layout/containers.md)** - Containers para layout
- **[Grid](./layout/grid.md)** - Sistema de grillas de 12 columnas
- **[Utilities](./layout/utilities.md)** - Utilidades de layout
- **[Z-index](./layout/z-index.md)** - Control de orden de capas

## 📝 Content

Estilos base para contenido, incluyendo tipografía, imágenes, tablas y más.

- **[Overview](./content/README.md)** - Introducción a Content
- **[Reboot](./content/reboot.md)** - Estilos base y normalización
- **[Typography](./content/typography.md)** - Sistema de tipografía con Sora
- **[Images](./content/images.md)** - Trabajar con imágenes responsivas
- **[Tables](./content/tables.md)** - Crear tablas estilizadas
- **[Figures](./content/figures.md)** - Usar figures con captions

## 📋 Forms

Componentes de formulario estilizados y accesibles, integrados con Angular Forms.

- **[Overview](./forms/README.md)** - Introducción a Forms
- **[Form control](./forms/form-control.md)** - Inputs, textareas y controles básicos
- **[Select](./forms/select.md)** - Componentes select
- **[Checks & radios](./forms/checks-radios.md)** - Checkboxes y radio buttons
- **[Range](./forms/range.md)** - Inputs de tipo range
- **[Input group](./forms/input-group.md)** - Agrupar inputs con addons
- **[Floating labels](./forms/floating-labels.md)** - Labels flotantes
- **[Layout](./forms/layout.md)** - Layouts de formularios
- **[Validation](./forms/validation.md)** - Validación y feedback

### Guías de Personalización

- **[Overview](./customize/overview.md)** - Métodos de personalización y flujo de trabajo
- **[Sass](./customize/sass.md)** - Usar archivos fuente Sass
- **[Options](./customize/options.md)** - Variables globales y opciones
- **[Color](./customize/color.md)** - Sistema de colores (Primary: #e20039)
- **[Color modes](./customize/color-modes.md)** - Modos claro y oscuro
- **[Components](./customize/components.md)** - Estructura y personalización de componentes
- **[CSS variables](./customize/css-variables.md)** - Propiedades CSS personalizadas
- **[Optimize](./customize/optimize.md)** - Optimización y rendimiento

## 🎯 Características Principales

### Design Tokens

El Bio Design System utiliza **Design Tokens** como base para toda la personalización:

- **Single Source of Truth**: Todos los tokens en `tokens/tokens.json`
- **Generación Automática**: CSS Variables, TypeScript types, JSON
- **Bootstrap Compatible**: Mapeo automático a variables Bootstrap
- **Type Safe**: TypeScript types generados automáticamente

### Color Primary de Bioma

El color primary del Bio Design System está configurado con el color de marca de Bioma: **#e20039**.

```css
--color-primary-500: #e20039;  /* Color base de Bioma */
--bs-primary: #e20039;          /* Variable Bootstrap-compatible */
```

### Tipografía Sora

El Bio Design System usa **Sora** como fuente principal:

```css
--typography-font-family-primary: 'Sora', sans-serif;
```

### Material Icons

Material Icons está incluido y disponible en todo el proyecto.

## 📚 Estructura de Documentación

```
docs/
├── README.md                    # Este archivo
└── customize/
    ├── README.md                # Índice de personalización
    ├── overview.md              # Overview de personalización
    ├── sass.md                  # Guía de Sass
    ├── options.md               # Variables globales
    ├── color.md                 # Sistema de colores
    ├── color-modes.md           # Modos de color
    ├── components.md            # Componentes
    ├── css-variables.md         # CSS Variables
    └── optimize.md              # Optimización
```

## 🚀 Inicio Rápido

### Instalación

```bash
npm install @madergk/bio-ds
```

### Uso Básico

```typescript
import { ButtonComponent } from '@madergk/bio-ds';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <bio-button variant="primary">Click me</bio-button>
  `
})
export class MyComponent {}
```

### Importar Estilos

```css
@import '@madergk/bio-ds/dist/bio-ds/styles.css';
```

## 📖 Más Información

- [README Principal](../README.md) - Información general del proyecto
- [Instalación](../INSTALLATION.md) - Guía de instalación detallada
- [Tokens](../tokens/README.md) - Documentación de Design Tokens

## 🎨 Personalización Rápida

### Cambiar Color Primary

```json
// tokens/tokens.json
{
  "color": {
    "primary": {
      "500": { "value": "#tu-color-aqui" }
    }
  }
}
```

```bash
npm run tokens:build
```

### Usar Variables CSS

```css
.my-component {
  background-color: var(--color-primary-500);  /* #e20039 */
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
}
```

## 🔗 Enlaces Útiles

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/) - Referencia de Bootstrap
- [Style Dictionary](https://amzn.github.io/style-dictionary/) - Herramienta de tokens
- [Material Icons](https://fonts.google.com/icons) - Biblioteca de iconos

