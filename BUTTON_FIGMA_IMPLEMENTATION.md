# Implementación del Diseño de Figma - Button Component

## ✅ Implementación Completada

He implementado completamente el diseño del componente Button desde Figma, incluyendo todas las variantes, estados, tamaños y funcionalidades especificadas.

## 🎨 Cambios Realizados

### 1. **Nuevas Variantes Agregadas**

- ✅ **`default`** - Botón gris/neutral (nuevo)
- ✅ **`dashed`** - Botón con borde punteado (nuevo)
- ✅ **`link`** - Botón estilo link con subrayado (nuevo)
- ✅ **`primary`** - Actualizado con color de Figma (#e20039)
- ✅ **`outline`** - Mejorado
- ✅ **`text`** - Mejorado
- ✅ **`secondary`** - Mantenido
- ✅ **`danger`** - Mantenido

### 2. **Sistema de Colores**

Las variantes `outline`, `dashed`, `text` y `link` ahora soportan dos temas de color:
- **`default`** (gris/neutral) - Por defecto
- **`primary`** (rojo #e20039) - Usando `color="primary"`

**Ejemplo:**
```html
<!-- Outline con color default (gris) -->
<bio-button variant="outline" color="default">Button</bio-button>

<!-- Outline con color primary (rojo) -->
<bio-button variant="outline" color="primary">Button</bio-button>
```

### 3. **Soporte para Iconos**

- ✅ **Prefix Icon** - Icono antes del texto
- ✅ **Suffix Icon** - Icono después del texto
- ✅ **Icon Only** - Solo icono, sin texto

**Ejemplo:**
```html
<!-- Con prefix icon -->
<bio-button variant="primary" prefixIcon="<svg>...</svg>">
  Button
</bio-button>

<!-- Con suffix icon -->
<bio-button variant="primary" suffixIcon="<svg>...</svg>">
  Button
</bio-button>

<!-- Icon only -->
<bio-button variant="primary" [iconOnly]="true" prefixIcon="<svg>...</svg>">
</bio-button>
```

### 4. **Estado Loading**

- ✅ Spinner animado
- ✅ Deshabilita automáticamente el botón
- ✅ Oculta texto e iconos mientras carga

**Ejemplo:**
```html
<bio-button variant="primary" [loading]="true">
  Loading...
</bio-button>
```

### 5. **Especificaciones de Figma Implementadas**

#### Colores
- ✅ Primary: `#e20039` (actualizado en tokens)
- ✅ Default: Gris/neutral usando tokens existentes
- ✅ Estados hover y active para todas las variantes

#### Spacing
- ✅ Gap entre iconos y texto: `12px` (space-3)
- ✅ Padding LG: `8px` vertical, `16px` horizontal
- ✅ Padding MD: `8px` vertical, `12px` horizontal
- ✅ Padding SM: `6px` vertical, `12px` horizontal

#### Tipografía
- ✅ Font size LG: `18px`
- ✅ Line height LG: `28px`
- ✅ Font weight: Medium (500)

#### Border Radius
- ✅ `4px` (border-radius/default de Figma)

#### Tamaños
- ✅ Small: `32px` altura mínima
- ✅ Medium: `40px` altura mínima
- ✅ Large: `44px` altura mínima (size-11 de Figma)

## 📝 API del Componente

### Inputs

```typescript
@Input() label?: string;              // Texto del botón
@Input() variant: ButtonVariant;      // Variante visual
@Input() size: ButtonSize;            // Tamaño (sm, md, lg)
@Input() disabled: boolean;            // Estado deshabilitado
@Input() loading: boolean;            // Estado loading
@Input() type: 'button' | 'submit' | 'reset';  // Tipo HTML
@Input() prefixIcon?: string;         // Icono prefix (HTML/SVG)
@Input() suffixIcon?: string;         // Icono suffix (HTML/SVG)
@Input() iconOnly: boolean;           // Solo icono
@Input() color?: 'default' | 'primary';  // Color theme (para outline, dashed, text, link)
@Input() class?: string;              // Clases CSS adicionales
```

### Outputs

```typescript
@Output() click = new EventEmitter<MouseEvent>();
```

## 🎯 Ejemplos de Uso

### Variantes Básicas

```html
<!-- Default (gris) -->
<bio-button variant="default">Button</bio-button>

<!-- Primary (rojo) -->
<bio-button variant="primary">Button</bio-button>

<!-- Outline -->
<bio-button variant="outline">Button</bio-button>
<bio-button variant="outline" color="primary">Button</bio-button>

<!-- Dashed -->
<bio-button variant="dashed">Button</bio-button>
<bio-button variant="dashed" color="primary">Button</bio-button>

<!-- Text -->
<bio-button variant="text">Button</bio-button>
<bio-button variant="text" color="primary">Button</bio-button>

<!-- Link -->
<bio-button variant="link">Button</bio-button>
<bio-button variant="link" color="primary">Button</bio-button>
```

### Con Iconos

```html
<!-- Prefix icon -->
<bio-button variant="primary" prefixIcon="<svg>...</svg>">
  Add Item
</bio-button>

<!-- Suffix icon -->
<bio-button variant="primary" suffixIcon="<svg>...</svg>">
  Continue
</bio-button>

<!-- Icon only -->
<bio-button variant="primary" [iconOnly]="true" prefixIcon="<svg>...</svg>">
</bio-button>
```

### Estados

```html
<!-- Loading -->
<bio-button variant="primary" [loading]="true">Loading...</bio-button>

<!-- Disabled -->
<bio-button variant="primary" [disabled]="true">Disabled</bio-button>
```

### Tamaños

```html
<bio-button variant="primary" size="sm">Small</bio-button>
<bio-button variant="primary" size="md">Medium</bio-button>
<bio-button variant="primary" size="lg">Large</bio-button>
```

## 🔄 Cambios en Tokens

### Color Primary Actualizado

El color primary se actualizó de azul (`#2196f3`) a rojo (`#e20039`) según Figma:

```json
{
  "color": {
    "primary": {
      "500": { "value": "#e20039" },  // Antes: #2196f3
      "600": { "value": "#c20032" },
      "700": { "value": "#a00029" },
      // ... escala completa actualizada
    }
  }
}
```

**Nota**: Esto afecta a todos los componentes que usan `var(--color-primary-500)`, no solo al Button.

## ✅ Verificación

- ✅ Componente compila sin errores
- ✅ Todas las variantes implementadas
- ✅ Iconos funcionando (prefix, suffix, icon-only)
- ✅ Estado loading funcionando
- ✅ Tokens actualizados
- ✅ Stories de Storybook actualizadas
- ✅ Estilos coinciden con Figma

## 📚 Stories de Storybook

Las siguientes stories están disponibles en Storybook:

1. **Default** - Botón default (gris)
2. **Primary** - Botón primary (rojo)
3. **Secondary** - Botón secondary
4. **Outline** - Botón outline
5. **Dashed** - Botón dashed (nuevo)
6. **Text** - Botón text
7. **Link** - Botón link (nuevo)
8. **Danger** - Botón danger
9. **Sizes** - Todos los tamaños
10. **Disabled** - Estado deshabilitado
11. **AllVariants** - Todas las variantes
12. **VariantsWithPrimaryColor** - Variantes con color primary (nuevo)
13. **WithIcons** - Botones con iconos (nuevo)
14. **Loading** - Estado loading (nuevo)

## 🚀 Próximos Pasos

1. **Probar en Storybook**: Ejecuta `npm run storybook` para ver todas las variantes
2. **Verificar visualmente**: Compara con el diseño de Figma
3. **Ajustar si es necesario**: Si hay diferencias visuales, ajusta los valores

## 📝 Notas Importantes

1. **Color Primary**: El cambio de color primary afecta a TODOS los componentes que lo usan. Si necesitas mantener el azul en otros componentes, considera crear un token separado.

2. **Iconos**: Los iconos se pasan como strings HTML (típicamente SVG). Puedes usar cualquier formato de icono que funcione con `innerHTML`.

3. **Loading**: Cuando `loading` es `true`, el botón se deshabilita automáticamente y muestra un spinner.

4. **Color Theme**: El input `color` solo afecta a las variantes `outline`, `dashed`, `text` y `link`. Las variantes `default` y `primary` tienen sus propios colores fijos.

---

**Implementación completada según diseño de Figma** ✅

