# Storybook Documentation Guide

## 🎯 Objetivo

Storybook proporciona documentación interactiva y visual de todos los componentes del Bio Design System. Es la herramienta principal para:

- **Documentar componentes**: Ver todos los componentes con ejemplos interactivos
- **Desarrollo aislado**: Desarrollar y probar componentes sin la aplicación completa
- **Testing visual**: Verificar que los componentes se ven correctamente en diferentes estados
- **Onboarding**: Ayudar a nuevos desarrolladores a entender el sistema

## 📋 Estructura

### Organización por Categorías

Los componentes están organizados siguiendo Atomic Design:

```
Atoms/
  ├── Button
  ├── Alert
  ├── Badge
  ├── Input
  └── ...

Molecules/
  ├── Modal
  ├── Toast
  ├── Accordion
  └── ...
```

### Estructura de Stories

Cada componente tiene un archivo `.stories.ts` que contiene:

1. **Meta**: Configuración del componente en Storybook
2. **Stories**: Diferentes variantes y estados del componente
3. **Documentación**: Descripciones y guías de uso

## 🚀 Comandos

### Iniciar Storybook (Desarrollo)
```bash
npm run storybook
```

Abre Storybook en `http://localhost:6006` con hot-reload.

### Construir Storybook (Producción)
```bash
npm run build-storybook
```

Genera una versión estática en `storybook-static/` lista para deploy.

### Construir Documentación Completa
```bash
npm run docs:build
```

Construye tokens y Storybook juntos.

## 📝 Crear una Nueva Story

### Paso 1: Crear el archivo de story

Crea `component-name.stories.ts` junto a tu componente:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { YourComponent } from './your.component';

const meta: Meta<YourComponent> = {
  title: 'Category/ComponentName',
  component: YourComponent,
  parameters: {
    docs: {
      description: {
        component: 'Descripción del componente y cuándo usarlo.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Define controles para las props
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Variante visual del componente',
    },
  },
};

export default meta;
type Story = StoryObj<YourComponent>;
```

### Paso 2: Crear stories

```typescript
// Story básica
export const Default: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

// Story con template personalizado
export const Custom: Story = {
  render: () => ({
    template: `
      <your-component variant="primary">
        Custom content
      </your-component>
    `,
  }),
};

// Story con múltiples variantes
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px;">
        <your-component variant="primary">Primary</your-component>
        <your-component variant="secondary">Secondary</your-component>
      </div>
    `,
  }),
};
```

### Paso 3: Agregar documentación

Usa JSDoc en el componente TypeScript:

```typescript
/**
 * Component Description
 * 
 * Detailed explanation of when and how to use this component.
 * 
 * @example
 * ```html
 * <your-component variant="primary">Content</your-component>
 * ```
 */
@Component({...})
export class YourComponent {
  /**
   * Prop description
   * @default 'primary'
   */
  @Input() variant: string = 'primary';
}
```

## 📚 Mejores Prácticas

### 1. Nombres Descriptivos
- Usa nombres claros: `Primary`, `Disabled`, `AllVariants`
- Evita nombres genéricos: `Test`, `Example1`

### 2. Documentación Clara
- Explica **cuándo** usar el componente
- Muestra **cómo** usarlo
- Incluye **ejemplos** de código

### 3. Cobertura Completa
- Muestra todas las variantes
- Incluye estados (disabled, loading, error)
- Demuestra interacciones cuando sea relevante

### 4. Organización
- Agrupa stories relacionadas
- Usa la estructura de categorías (Atoms/Molecules)
- Mantén consistencia en los nombres

## 🎨 Personalización

### Agregar Backgrounds

En `.storybook/preview.ts`:

```typescript
backgrounds: {
  values: [
    { name: 'light', value: '#ffffff' },
    { name: 'dark', value: '#212529' },
  ],
}
```

### Configurar Controls

Los controles se generan automáticamente desde los `@Input()` del componente. Puedes personalizarlos en `argTypes`:

```typescript
argTypes: {
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg'],
    description: 'Size description',
  },
}
```

## 🚢 Deploy

### Opciones de Deploy

1. **Netlify/Vercel**: Conecta el repositorio y apunta a `storybook-static/`
2. **GitHub Pages**: Usa `gh-pages` para publicar
3. **Servidor propio**: Sube `storybook-static/` a tu servidor

### Script de Deploy (GitHub Pages)

```json
{
  "scripts": {
    "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"
  }
}
```

## 🔗 Recursos

- [Storybook para Angular](https://storybook.js.org/docs/angular/get-started/introduction)
- [Documentación de Stories](https://storybook.js.org/docs/angular/writing-stories/introduction)
- [Addons](https://storybook.js.org/docs/angular/addons/introduction)

## ✅ Checklist para Nuevos Componentes

- [ ] Crear archivo `.stories.ts`
- [ ] Agregar story `Default`
- [ ] Agregar stories para todas las variantes
- [ ] Agregar stories para estados (disabled, loading, etc.)
- [ ] Documentar props con JSDoc
- [ ] Agregar descripciones en `parameters.docs`
- [ ] Probar que todas las stories se renderizan correctamente
- [ ] Verificar que los controles funcionan
- [ ] Revisar la documentación generada

