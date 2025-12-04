# Customize

Aprende cómo personalizar, temarizar y extender el Bio Design System con Design Tokens, opciones globales, un sistema de colores expansivo y más.

**Overview** Descubre las múltiples formas de personalizar el Bio Design System y elige el mejor método para tu proyecto.

**Sass** Utiliza nuestros archivos fuente Sass para aprovechar variables, maps, mixins y funciones.

**Options** Personaliza el Bio Design System con variables integradas para alternar fácilmente las preferencias globales de CSS.

**Color** Aprende sobre y personaliza los sistemas de color que soportan todo el toolkit.

**Color modes** Explora nuestro modo claro por defecto y el nuevo modo oscuro, o crea tus propios modos de color.

**Components** Aprende cómo construimos casi todos nuestros componentes de forma responsiva y con clases base y modificadoras.

**CSS variables** Usa las propiedades CSS personalizadas del Bio Design System para un diseño y desarrollo rápido y orientado al futuro.

**Optimize** Mantén tus proyectos ligeros, responsivos y mantenibles para que puedas ofrecer la mejor experiencia.

## Overview

Hay múltiples formas de personalizar el Bio Design System. Tu mejor camino puede depender de tu proyecto, la complejidad de tus herramientas de build, la versión del Bio Design System que estés usando, el soporte del navegador y más.

Nuestros dos métodos preferidos son:

1. **Usar el Bio Design System vía package manager** para que puedas usar y extender nuestros archivos fuente.
2. **Usar los archivos compilados del Bio Design System** o jsDelivr para que puedas agregar o sobrescribir los estilos del Bio Design System.

Aunque no podemos entrar en detalles aquí sobre cómo usar cada package manager, podemos dar alguna orientación sobre cómo usar el Bio Design System con tu propio compilador de tokens.

Para aquellos que quieran usar los archivos de distribución, revisa la página de [instalación](../getting-started/installation.md) para ver cómo incluir esos archivos y una página HTML de ejemplo. Desde ahí, consulta la documentación para el layout, componentes y comportamientos que te gustaría usar.

A medida que te familiarices con el Bio Design System, continúa explorando esta sección para obtener más detalles sobre cómo utilizar nuestras opciones globales, hacer uso y cambiar nuestro sistema de colores, cómo construimos nuestros componentes, cómo usar nuestra creciente lista de propiedades CSS personalizadas y cómo optimizar tu código al construir con el Bio Design System.

## Design Tokens como Base

El Bio Design System utiliza **Design Tokens** como base para toda la personalización. Los tokens están definidos en `tokens/tokens.json` y se generan automáticamente en múltiples formatos:

- **CSS Variables**: Para uso directo en estilos
- **TypeScript Types**: Para autocompletado y type safety
- **JSON**: Para acceso en runtime

### Ejemplo Rápido

```css
/* Usar tokens directamente */
.my-component {
  background-color: var(--color-primary-500); /* #e20039 - Color primary de Bioma */
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-family: var(--typography-font-family-primary); /* Sora */
}
```

## CSPs y SVGs Embebidos

Varios componentes del Bio Design System incluyen SVGs embebidos en nuestro CSS para estilizar componentes de forma consistente y fácil en todos los navegadores y dispositivos. **Para organizaciones con configuraciones CSP más estrictas**, hemos documentado todas las instancias de nuestros SVGs embebidos (todos los cuales se aplican vía `background-image`) para que puedas revisar más a fondo tus opciones.

Basado en conversaciones de la comunidad, algunas opciones para abordar esto en tu propio codebase incluyen reemplazar las URLs con assets alojados localmente, eliminar las imágenes y usar imágenes inline (no es posible en todos los componentes), y modificar tu CSP. Nuestra recomendación es revisar cuidadosamente tus propias políticas de seguridad y decidir el mejor camino a seguir, si es necesario.

## Guías de Personalización

### [Overview](./overview.md)
Descubre las múltiples formas de personalizar el Bio Design System y elige el mejor método para tu proyecto. Aprende sobre Design Tokens, CSS Variables y diferentes estrategias de personalización.

### [Sass](./sass.md)
Aunque el Bio Design System utiliza Design Tokens, puedes usar Sass para extender y personalizar el sistema. Aprende a crear mixins, funciones y componentes con Sass.

### [Options](./options.md)
Personaliza el Bio Design System con variables globales integradas. Todas las opciones están definidas como Design Tokens y se pueden personalizar fácilmente.

### [Color](./color.md)
Aprende sobre y personaliza los sistemas de color que soportan todo el toolkit. El color primary de Bioma (#e20039) está integrado en todo el sistema.

### [Color modes](./color-modes.md)
Explora el modo claro por defecto y el nuevo modo oscuro, o crea tus propios modos de color personalizados. Aprende a implementar temas dinámicos.

### [Components](./components.md)
Aprende cómo construimos casi todos nuestros componentes de forma responsiva y con clases base y modificadoras. Personaliza y extiende componentes fácilmente.

### [CSS variables](./css-variables.md)
Usa las propiedades CSS personalizadas del Bio Design System para un diseño y desarrollo rápido y orientado al futuro. Todas las variables están disponibles globalmente.

### [Optimize](./optimize.md)
Mantén tus proyectos ligeros, responsivos y mantenibles. Aprende sobre tree shaking, code splitting, optimización de CSS y más.

