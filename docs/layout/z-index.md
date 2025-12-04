# Z-index

El sistema de z-index del Bio Design System proporciona valores predefinidos para capas de componentes como modals, tooltips, popovers y más. Estos valores están definidos como Design Tokens y se pueden personalizar fácilmente.

## Valores Disponibles

El Bio Design System incluye los siguientes valores de z-index predefinidos:

| Componente | Variable CSS | Valor | Descripción |
| ---------- | ------------ | ----- | ----------- |
| Dropdown | `--z-index-dropdown` | 1000 | Menús desplegables |
| Sticky | `--z-index-sticky` | 1020 | Elementos sticky |
| Fixed | `--z-index-fixed` | 1030 | Elementos fixed |
| Modal Backdrop | `--z-index-modal-backdrop` | 1040 | Fondo de modales |
| Modal | `--z-index-modal` | 1050 | Modales |
| Popover | `--z-index-popover` | 1060 | Popovers |
| Tooltip | `--z-index-tooltip` | 1070 | Tooltips |

## Uso Básico

### Usar Variables CSS

```css
.my-dropdown {
  z-index: var(--z-index-dropdown);  /* 1000 */
}

.my-modal {
  z-index: var(--z-index-modal);  /* 1050 */
}

.my-tooltip {
  z-index: var(--z-index-tooltip);  /* 1070 */
}
```

### Variables Bootstrap-compatibles

El Bio Design System también proporciona variables Bootstrap-compatibles:

```css
.my-dropdown {
  z-index: var(--bs-zindex-dropdown);  /* 1000 */
}

.my-modal {
  z-index: var(--bs-zindex-modal);  /* 1050 */
}
```

## Orden de Capas

El orden de las capas (de menor a mayor) es:

1. **Dropdown** (1000) - Menús desplegables básicos
2. **Sticky** (1020) - Elementos que se pegan al scroll
3. **Fixed** (1030) - Elementos con posición fixed
4. **Modal Backdrop** (1040) - Fondo oscuro de modales
5. **Modal** (1050) - Ventanas modales
6. **Popover** (1060) - Popovers y dropdowns avanzados
7. **Tooltip** (1070) - Tooltips (siempre al frente)

## Ejemplos de Uso

### Modal

```css
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--z-index-modal-backdrop);  /* 1040 */
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--z-index-modal);  /* 1050 */
}
```

### Dropdown

```css
.dropdown-menu {
  position: absolute;
  z-index: var(--z-index-dropdown);  /* 1000 */
}
```

### Tooltip

```css
.tooltip {
  position: absolute;
  z-index: var(--z-index-tooltip);  /* 1070 */
}
```

### Sticky Header

```css
.sticky-header {
  position: sticky;
  top: 0;
  z-index: var(--z-index-sticky);  /* 1020 */
}
```

## Personalización

### Cambiar Valores de Z-index

Puedes personalizar los valores de z-index editando los tokens:

```json
{
  "zIndex": {
    "dropdown": { "value": "1000" },
    "sticky": { "value": "1020" },
    "fixed": { "value": "1030" },
    "modalBackdrop": { "value": "1040" },
    "modal": { "value": "1050" },
    "popover": { "value": "1060" },
    "tooltip": { "value": "1070" }
  }
}
```

Luego regenera los tokens:

```bash
npm run tokens:build
```

### Sobrescribir con CSS

También puedes sobrescribir los valores directamente:

```css
:root {
  --z-index-modal: 2000;  /* Valor personalizado */
  --bs-zindex-modal: 2000;
}
```

## Mejores Prácticas

1. **Usa los valores predefinidos**: Siempre que sea posible, usa los valores de z-index predefinidos para mantener consistencia.

2. **Respeta el orden de capas**: No uses valores que interfieran con el orden establecido.

3. **Evita valores arbitrarios**: En lugar de usar valores como `z-index: 9999`, usa los valores del sistema.

4. **Considera el contexto**: Algunos componentes pueden necesitar z-index más altos en contextos específicos.

## Valores Personalizados

Si necesitas valores de z-index personalizados para componentes específicos, puedes agregarlos a los tokens:

```json
{
  "zIndex": {
    "dropdown": { "value": "1000" },
    "sticky": { "value": "1020" },
    "fixed": { "value": "1030" },
    "modalBackdrop": { "value": "1040" },
    "modal": { "value": "1050" },
    "popover": { "value": "1060" },
    "tooltip": { "value": "1070" },
    "customComponent": { "value": "1080" }  /* Nuevo valor */
  }
}
```

## Ejemplo Completo

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="bio-ds/styles.css">
  <style>
    .sticky-header {
      position: sticky;
      top: 0;
      background: white;
      z-index: var(--z-index-sticky);
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: var(--z-index-modal-backdrop);
    }
    
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 2rem;
      border-radius: 8px;
      z-index: var(--z-index-modal);
    }
    
    .tooltip {
      position: absolute;
      background: #333;
      color: white;
      padding: 0.5rem;
      border-radius: 4px;
      z-index: var(--z-index-tooltip);
    }
  </style>
</head>
<body>
  <header class="sticky-header">
    <h1>Mi Aplicación</h1>
  </header>
  
  <main>
    <button onclick="showModal()">Abrir Modal</button>
  </main>
  
  <div class="modal-backdrop" id="backdrop" style="display: none;"></div>
  <div class="modal" id="modal" style="display: none;">
    <h2>Modal</h2>
    <p>Contenido del modal</p>
    <button onclick="hideModal()">Cerrar</button>
  </div>
</body>
</html>
```

## Próximos Pasos

- [Grid](./grid.md) - Sistema de grillas
- [Utilities](./utilities.md) - Utilidades de layout
- [Breakpoints](./breakpoints.md) - Entender breakpoints

