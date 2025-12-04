# Forms - Overview

El Bio Design System proporciona componentes de formulario estilizados y accesibles que se integran perfectamente con Angular Forms.

## Componentes Disponibles

### Input (`bio-input`)

Componente de input básico con soporte para prefixes, suffixes, addons y validación.

```html
<bio-input 
  type="text"
  placeholder="Enter text"
  size="md">
</bio-input>
```

### Password Input (`bio-password-input`)

Input especializado para contraseñas con toggle de visibilidad.

```html
<bio-password-input 
  placeholder="Enter password"
  [showToggle]="true">
</bio-password-input>
```

### Textarea (`bio-textarea`)

Input de múltiples líneas con contador de caracteres opcional.

```html
<bio-textarea 
  placeholder="Enter message"
  [counter]="true"
  maxlength="500">
</bio-textarea>
```

### File Input (`bio-file-input`)

Input para subir archivos con validación.

```html
<bio-file-input 
  accept="image/*"
  [multiple]="true">
</bio-file-input>
```

### Search Box (`bio-search-box`)

Input especializado para búsqueda con icono y funcionalidad de limpieza.

```html
<bio-search-box 
  placeholder="Search..."
  (search)="handleSearch($event)">
</bio-search-box>
```

## Integración con Angular Forms

Todos los componentes implementan `ControlValueAccessor` para integración con Angular Forms:

### Template-driven Forms

```html
<form #myForm="ngForm">
  <bio-input 
    name="email"
    [(ngModel)]="user.email"
    required>
  </bio-input>
</form>
```

### Reactive Forms

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class MyComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}
```

```html
<form [formGroup]="form">
  <bio-input 
    formControlName="email"
    type="email"
    placeholder="Email">
  </bio-input>
  
  <bio-password-input 
    formControlName="password"
    placeholder="Password">
  </bio-password-input>
</form>
```

## Estados de Validación

Todos los componentes soportan estados de validación:

```html
<!-- Normal -->
<bio-input validation="normal"></bio-input>

<!-- Valid -->
<bio-input validation="valid"></bio-input>

<!-- Invalid -->
<bio-input validation="invalid"></bio-input>
```

## Tamaños

Los componentes soportan tres tamaños:

```html
<!-- Small -->
<bio-input size="sm"></bio-input>

<!-- Medium (default) -->
<bio-input size="md"></bio-input>

<!-- Large -->
<bio-input size="lg"></bio-input>
```

## Mejores Prácticas

### 1. Siempre Usa Labels

```html
<!-- ✅ Bueno -->
<label for="email" class="form-label">Email</label>
<bio-input id="email" name="email"></bio-input>

<!-- ❌ Evitar -->
<bio-input placeholder="Email"></bio-input>
```

### 2. Agrupa Campos Relacionados

```html
<div class="mb-3">
  <label for="firstName" class="form-label">First Name</label>
  <bio-input id="firstName" name="firstName"></bio-input>
</div>

<div class="mb-3">
  <label for="lastName" class="form-label">Last Name</label>
  <bio-input id="lastName" name="lastName"></bio-input>
</div>
```

### 3. Proporciona Feedback de Validación

```html
<bio-input 
  validation="invalid"
  [required]="true">
</bio-input>
<div class="invalid-feedback">
  Este campo es requerido.
</div>
```

### 4. Usa Placeholders Apropiados

```html
<!-- ✅ Bueno: Placeholder descriptivo -->
<bio-input placeholder="ej: usuario@ejemplo.com"></bio-input>

<!-- ❌ Evitar: Placeholder genérico -->
<bio-input placeholder="text"></bio-input>
```

## Accesibilidad

### Labels Asociados

Siempre asocia labels con inputs:

```html
<label for="email" class="form-label">Email</label>
<bio-input id="email" name="email"></bio-input>
```

### Atributos ARIA

Los componentes incluyen automáticamente atributos ARIA apropiados:

```html
<bio-input 
  [required]="true"
  validation="invalid"
  aria-invalid="true"
  aria-required="true">
</bio-input>
```

### Mensajes de Error

Proporciona mensajes de error accesibles:

```html
<bio-input 
  id="email"
  validation="invalid"
  aria-describedby="email-error">
</bio-input>
<div id="email-error" class="invalid-feedback" role="alert">
  Por favor ingresa un email válido.
</div>
```

## Ejemplo Completo

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <!-- Email -->
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <bio-input 
      id="email"
      formControlName="email"
      type="email"
      placeholder="ej: usuario@ejemplo.com"
      [validation]="getValidationState('email')">
    </bio-input>
    <div class="invalid-feedback" *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
      Por favor ingresa un email válido.
    </div>
  </div>
  
  <!-- Password -->
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <bio-password-input 
      id="password"
      formControlName="password"
      placeholder="Enter password"
      [validation]="getValidationState('password')">
    </bio-password-input>
    <div class="invalid-feedback" *ngIf="form.get('password')?.invalid && form.get('password')?.touched">
      La contraseña es requerida.
    </div>
  </div>
  
  <!-- Submit -->
  <bio-button 
    type="submit" 
    variant="primary"
    [disabled]="form.invalid">
    Submit
  </bio-button>
</form>
```

## Próximos Pasos

- [Form control](./form-control.md) - Inputs y textareas detallados
- [Validation](./validation.md) - Validación de formularios
- [Layout](./layout.md) - Layouts de formularios

