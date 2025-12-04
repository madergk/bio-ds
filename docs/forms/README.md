# Forms

El Bio Design System proporciona componentes de formulario estilizados y accesibles, incluyendo inputs, selects, checkboxes, radios, ranges y más.

## Componentes de Formulario

### [Overview](./overview.md)
Introducción al sistema de formularios del Bio Design System, incluyendo mejores prácticas y ejemplos básicos.

### [Form control](./form-control.md)
Componentes de control de formulario básicos: inputs, textareas y sus variantes.

### [Select](./select.md)
Componentes select para selección de opciones, incluyendo selects simples y múltiples.

### [Checks & radios](./checks-radios.md)
Checkboxes y radio buttons con estilos personalizados y estados de validación.

### [Range](./range.md)
Inputs de tipo range para seleccionar valores numéricos dentro de un rango.

### [Input group](./input-group.md)
Agrupa inputs con addons, prefixes, suffixes y otros elementos relacionados.

### [Floating labels](./floating-labels.md)
Labels flotantes que se animan cuando el input tiene foco o valor.

### [Layout](./layout.md)
Diferentes layouts para formularios: horizontal, vertical, inline y grid.

### [Validation](./validation.md)
Estados de validación, mensajes de error y feedback visual para formularios.

## Conceptos Clave

### Componentes Angular

El Bio Design System proporciona componentes Angular standalone que implementan `ControlValueAccessor` para integración perfecta con Angular Forms.

### Design Tokens

Todos los componentes de formulario usan Design Tokens para estilos consistentes:
- Colores (primary: #e20039)
- Espaciado
- Tipografía (Sora)
- Bordes y sombras

### Accesibilidad

Todos los componentes incluyen:
- Atributos ARIA apropiados
- Labels asociados
- Estados de validación accesibles
- Soporte para lectores de pantalla

## Ejemplo Rápido

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <bio-input 
      id="email"
      type="email"
      placeholder="Enter email"
      [required]="true">
    </bio-input>
  </div>
  
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <bio-password-input 
      id="password"
      placeholder="Enter password"
      [required]="true">
    </bio-password-input>
  </div>
  
  <bio-button type="submit" variant="primary">Submit</bio-button>
</form>
```

## Próximos Pasos

- [Overview](./overview.md) - Introducción a formularios
- [Form control](./form-control.md) - Inputs y textareas
- [Validation](./validation.md) - Validación de formularios

