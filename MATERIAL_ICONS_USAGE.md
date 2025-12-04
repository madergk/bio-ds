# Material Icons & Material Symbols - Guía de Uso

## 🎯 Material Symbols (Recomendado)

**Material Symbols** es la versión más reciente y recomendada de los iconos de Google. Ofrece más opciones de personalización y mejor rendimiento.

### 📦 Instalación

Material Symbols ya está incluido en el proyecto a través de Google Fonts. Se carga automáticamente en:
- Storybook (`.storybook/preview-head.html`)
- Demo HTML (`demo.html`)

### ✨ Características

- **Dos estilos**: `outlined` (contorno) y `rounded` (redondeado)
- **Variable Font**: Permite ajustar peso, tamaño, y relleno
- **Icon-only buttons**: Los botones solo con icono son completamente redondos (circular)
- **Mejor rendimiento**: Optimizado para web moderna

### 🎯 Uso en Componentes Angular

#### Opción 1: Usar con el componente Button (Recomendado)

```typescript
// En tu componente TypeScript
import { ButtonComponent } from '@madergk/bio-ds';

export class MyComponent {
  // Usar el helper method del ButtonComponent
  addIcon = this.buttonComponent.getMaterialSymbol('add', 'outlined', 20, 0);
  editIcon = this.buttonComponent.getMaterialSymbol('edit', 'rounded', 20, 0);
  favoriteIcon = this.buttonComponent.getMaterialSymbol('favorite', 'rounded', 20, 1); // filled
}
```

```html
<!-- En tu template -->
<bio-button variant="primary" [prefixIcon]="addIcon">
  Add Item
</bio-button>

<!-- Icon-only button (fully rounded) -->
<bio-button variant="primary" [iconOnly]="true" [prefixIcon]="addIcon"></bio-button>
```

#### Opción 2: Usar directamente en HTML

```html
<!-- Outlined style (default) -->
<span class="material-symbols-outlined" style="font-size: 20px;">add</span>

<!-- Rounded style -->
<span class="material-symbols-rounded" style="font-size: 20px;">favorite</span>

<!-- Con variaciones de fuente -->
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1, 'wght' 400;">star</span>
```

#### Opción 3: Helper Method en ButtonComponent

El `ButtonComponent` incluye un método helper `getMaterialSymbol()`:

```typescript
// button.component.ts ya incluye este método
getMaterialSymbol(
  name: string,
  style: 'outlined' | 'rounded' = 'outlined',
  size: number = 16,
  fill: 0 | 1 = 0
): string
```

**Parámetros:**
- `name`: Nombre del icono (ej: 'add', 'delete', 'edit')
- `style`: Estilo del icono - 'outlined' (default) o 'rounded'
- `size`: Tamaño en píxeles (default: 16)
- `fill`: Si el icono debe estar relleno - 0 (outline) o 1 (filled)

**Ejemplo:**
```typescript
// Icono outlined pequeño
const addIcon = buttonComponent.getMaterialSymbol('add', 'outlined', 16, 0);

// Icono rounded relleno grande
const favoriteIcon = buttonComponent.getMaterialSymbol('favorite', 'rounded', 24, 1);
```

### 📚 Iconos Comunes Material Symbols

Los nombres de iconos son los mismos que Material Icons, pero con mejor soporte:

#### Acciones
- `add` - Agregar
- `delete` - Eliminar
- `edit` - Editar
- `save` - Guardar
- `cancel` - Cancelar
- `close` - Cerrar
- `check` - Verificar
- `check_circle` - Verificar con círculo

#### Navegación
- `arrow_back` - Flecha atrás
- `arrow_forward` - Flecha adelante
- `arrow_upward` - Flecha arriba
- `arrow_downward` - Flecha abajo
- `menu` - Menú
- `home` - Inicio

#### Comunicación
- `email` - Email
- `phone` - Teléfono
- `message` - Mensaje
- `notifications` - Notificaciones

### 🎨 Icon-Only Buttons (Fully Rounded)

Los botones solo con icono son **completamente redondos** (circular) automáticamente:

```html
<!-- Botón circular pequeño -->
<bio-button variant="primary" size="sm" [iconOnly]="true" [prefixIcon]="addIcon"></bio-button>

<!-- Botón circular mediano -->
<bio-button variant="primary" size="md" [iconOnly]="true" [prefixIcon]="editIcon"></bio-button>

<!-- Botón circular grande -->
<bio-button variant="primary" size="lg" [iconOnly]="true" [prefixIcon]="deleteIcon"></bio-button>
```

---

## 📦 Material Icons (Legacy)

Material Icons (versión legacy) también está disponible para compatibilidad hacia atrás.

### 🎯 Uso en Componentes Angular (Material Icons Legacy)

#### Opción 1: Usar como clase CSS

```html
<!-- En tu template -->
<span class="material-icons">add</span>
<span class="material-icons">delete</span>
<span class="material-icons">edit</span>
```

#### Opción 2: Usar con el componente Button

```html
<bio-button variant="primary" [prefixIcon]="getMaterialIcon('add')">
  Add Item
</bio-button>
```

```typescript
// El ButtonComponent incluye un método helper
getMaterialIcon(name: string, size: number = 16): string {
  return `<i class="material-icons" style="font-size: ${size}px; width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">${name}</i>`;
}
```

## 📚 Iconos Comunes

### Acciones
- `add` - Agregar
- `delete` - Eliminar
- `edit` - Editar
- `save` - Guardar
- `cancel` - Cancelar
- `close` - Cerrar
- `check` - Verificar
- `check_circle` - Verificar con círculo

### Navegación
- `arrow_back` - Flecha atrás
- `arrow_forward` - Flecha adelante
- `arrow_upward` - Flecha arriba
- `arrow_downward` - Flecha abajo
- `menu` - Menú
- `home` - Inicio

### Comunicación
- `email` - Email
- `phone` - Teléfono
- `message` - Mensaje
- `notifications` - Notificaciones

### Archivos y Documentos
- `folder` - Carpeta
- `file_download` - Descargar
- `file_upload` - Subir
- `description` - Documento

## 🎨 Personalización de Tamaño

```html
<!-- Tamaño pequeño (16px) -->
<span class="material-icons" style="font-size: 16px;">add</span>

<!-- Tamaño mediano (24px - default) -->
<span class="material-icons">add</span>

<!-- Tamaño grande (48px) -->
<span class="material-icons" style="font-size: 48px;">add</span>
```

## 🔗 Recursos

### Material Symbols (Recomendado)
- [Material Symbols - Google Fonts](https://fonts.google.com/icons?icon.set=Material+Symbols)
- [Material Symbols - Documentación](https://fonts.google.com/icons)
- [Buscar Iconos Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols)

### Material Icons (Legacy)
- [Material Icons - Google Fonts](https://fonts.google.com/icons)
- [Material Icons - Guía Completa](https://fonts.google.com/icons?icon.set=Material+Icons)

## 💡 Ejemplo Completo

### Con Material Symbols (Recomendado)

```typescript
// my-component.ts
import { Component } from '@angular/core';
import { ButtonComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-my-component',
  template: `
    <bio-button variant="primary" [prefixIcon]="addIcon">
      Add Item
    </bio-button>
    
    <bio-button variant="primary" [iconOnly]="true" [prefixIcon]="addIcon"></bio-button>
  `,
  imports: [ButtonComponent]
})
export class MyComponent {
  // Usar el helper method del ButtonComponent
  buttonComponent = new ButtonComponent();
  
  addIcon = this.buttonComponent.getMaterialSymbol('add', 'outlined', 20, 0);
  favoriteIcon = this.buttonComponent.getMaterialSymbol('favorite', 'rounded', 20, 1);
}
```

### Con Material Icons (Legacy)

```typescript
// my-component.ts
import { Component } from '@angular/core';
import { ButtonComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-my-component',
  template: `
    <bio-button variant="primary" [prefixIcon]="addIcon">
      Add Item
    </bio-button>
  `,
  imports: [ButtonComponent]
})
export class MyComponent {
  buttonComponent = new ButtonComponent();
  addIcon = this.buttonComponent.getMaterialIcon('add', 20);
}
```

