# Forms - Validation

El Bio Design System proporciona estados de validación visuales y mensajes de feedback para formularios, mejorando la experiencia del usuario y la accesibilidad.

## Estados de Validación

Todos los componentes de formulario soportan tres estados de validación:

- **Normal**: Estado por defecto
- **Valid**: Campo válido
- **Invalid**: Campo inválido

## Inputs con Validación

### Valid

```html
<div class="mb-3">
  <label for="emailValid" class="form-label">Email</label>
  <bio-input 
    id="emailValid"
    type="email"
    validation="valid"
    value="test@example.com">
  </bio-input>
  <div class="valid-feedback">
    Looks good!
  </div>
</div>
```

### Invalid

```html
<div class="mb-3">
  <label for="emailInvalid" class="form-label">Email</label>
  <bio-input 
    id="emailInvalid"
    type="email"
    validation="invalid"
    value="invalid-email">
  </bio-input>
  <div class="invalid-feedback">
    Please provide a valid email.
  </div>
</div>
```

## Validación con Angular Forms

### Template-driven Forms

```html
<form #myForm="ngForm">
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <bio-input 
      id="email"
      name="email"
      type="email"
      [(ngModel)]="user.email"
      required
      email
      #email="ngModel"
      [validation]="email.invalid && email.touched ? 'invalid' : email.valid ? 'valid' : 'normal'">
    </bio-input>
    <div class="invalid-feedback" *ngIf="email.invalid && email.touched">
      <div *ngIf="email.errors?.['required']">Email is required.</div>
      <div *ngIf="email.errors?.['email']">Please provide a valid email.</div>
    </div>
  </div>
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
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  
  getValidationState(controlName: string): 'normal' | 'valid' | 'invalid' {
    const control = this.form.get(controlName);
    if (!control) return 'normal';
    if (control.invalid && control.touched) return 'invalid';
    if (control.valid && control.touched) return 'valid';
    return 'normal';
  }
}
```

```html
<form [formGroup]="form">
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <bio-input 
      id="email"
      formControlName="email"
      type="email"
      placeholder="name@example.com"
      [validation]="getValidationState('email')">
    </bio-input>
    <div class="invalid-feedback" *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
      <div *ngIf="form.get('email')?.errors?.['required']">Email is required.</div>
      <div *ngIf="form.get('email')?.errors?.['email']">Please provide a valid email.</div>
    </div>
  </div>
  
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <bio-password-input 
      id="password"
      formControlName="password"
      placeholder="Password"
      [validation]="getValidationState('password')">
    </bio-password-input>
    <div class="invalid-feedback" *ngIf="form.get('password')?.invalid && form.get('password')?.touched">
      <div *ngIf="form.get('password')?.errors?.['required']">Password is required.</div>
      <div *ngIf="form.get('password')?.errors?.['minlength']">
        Password must be at least 8 characters.
      </div>
    </div>
  </div>
</form>
```

## Validación de Select

```html
<div class="mb-3">
  <label for="select" class="form-label">Choose option</label>
  <select 
    class="form-select"
    id="select"
    [class.is-invalid]="form.get('select')?.invalid && form.get('select')?.touched">
    <option value="">Choose...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
  <div class="invalid-feedback">
    Please select an option.
  </div>
</div>
```

## Validación de Checkboxes y Radios

```html
<div class="mb-3">
  <div class="form-check">
    <input 
      class="form-check-input"
      type="checkbox"
      id="agree"
      [class.is-invalid]="form.get('agree')?.invalid && form.get('agree')?.touched">
    <label class="form-check-label" for="agree">
      I agree to the terms and conditions
    </label>
    <div class="invalid-feedback">
      You must agree before submitting.
    </div>
  </div>
</div>
```

## Validación de Textarea

```html
<div class="mb-3">
  <label for="message" class="form-label">Message</label>
  <bio-textarea 
    id="message"
    formControlName="message"
    placeholder="Your message"
    [counter]="true"
    maxlength="500"
    [validation]="getValidationState('message')">
  </bio-textarea>
  <div class="invalid-feedback" *ngIf="form.get('message')?.invalid && form.get('message')?.touched">
    Message is required.
  </div>
</div>
```

## Validación de File Input

```html
<div class="mb-3">
  <label for="file" class="form-label">Upload file</label>
  <bio-file-input 
    id="file"
    accept=".pdf,.doc,.docx"
    [validation]="getValidationState('file')">
  </bio-file-input>
  <div class="invalid-feedback" *ngIf="form.get('file')?.invalid && form.get('file')?.touched">
    Please upload a valid file.
  </div>
</div>
```

## Validación Personalizada

### Validator Personalizado

```typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function customValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    // Lógica de validación personalizada
    const isValid = value.length >= 5;
    return isValid ? null : { customError: true };
  };
}
```

```typescript
form = this.fb.group({
  customField: ['', [Validators.required, customValidator()]]
});
```

## Mensajes de Validación Múltiples

```html
<div class="mb-3">
  <label for="password" class="form-label">Password</label>
  <bio-password-input 
    id="password"
    formControlName="password"
    [validation]="getValidationState('password')">
  </bio-password-input>
  <div class="invalid-feedback" *ngIf="form.get('password')?.invalid && form.get('password')?.touched">
    <div *ngIf="form.get('password')?.errors?.['required']">Password is required.</div>
    <div *ngIf="form.get('password')?.errors?.['minlength']">
      Password must be at least {{ form.get('password')?.errors?.['minlength'].requiredLength }} characters.
    </div>
    <div *ngIf="form.get('password')?.errors?.['pattern']">
      Password must contain at least one uppercase letter, one lowercase letter, and one number.
    </div>
  </div>
</div>
```

## Validación en Tiempo Real

```typescript
form = this.fb.group({
  email: ['', [Validators.required, Validators.email]]
});

// Validación en tiempo real
ngOnInit() {
  this.form.get('email')?.valueChanges.subscribe(value => {
    // Lógica de validación en tiempo real
    if (value && !this.isValidEmail(value)) {
      this.form.get('email')?.setErrors({ invalidEmail: true });
    }
  });
}
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
      placeholder="name@example.com"
      [validation]="getValidationState('email')">
    </bio-input>
    <div class="invalid-feedback" *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
      <div *ngIf="form.get('email')?.errors?.['required']">Email is required.</div>
      <div *ngIf="form.get('email')?.errors?.['email']">Please provide a valid email.</div>
    </div>
  </div>
  
  <!-- Password -->
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <bio-password-input 
      id="password"
      formControlName="password"
      placeholder="Password"
      [validation]="getValidationState('password')">
    </bio-password-input>
    <div class="invalid-feedback" *ngIf="form.get('password')?.invalid && form.get('password')?.touched">
      <div *ngIf="form.get('password')?.errors?.['required']">Password is required.</div>
      <div *ngIf="form.get('password')?.errors?.['minlength']">
        Password must be at least 8 characters.
      </div>
    </div>
  </div>
  
  <!-- Agree -->
  <div class="mb-3">
    <div class="form-check">
      <input 
        class="form-check-input"
        type="checkbox"
        id="agree"
        formControlName="agree"
        [class.is-invalid]="form.get('agree')?.invalid && form.get('agree')?.touched">
      <label class="form-check-label" for="agree">
        I agree to the terms and conditions
      </label>
      <div class="invalid-feedback" *ngIf="form.get('agree')?.invalid && form.get('agree')?.touched">
        You must agree before submitting.
      </div>
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

## Accesibilidad

### Atributos ARIA

Los componentes incluyen automáticamente atributos ARIA:

```html
<bio-input 
  [required]="true"
  validation="invalid"
  aria-invalid="true"
  aria-required="true"
  aria-describedby="email-error">
</bio-input>
<div id="email-error" class="invalid-feedback" role="alert">
  Please provide a valid email.
</div>
```

## Estilos CSS

Los estilos de validación usan Design Tokens:

```css
.is-valid {
  border-color: var(--color-semantic-success-base);
}

.is-invalid {
  border-color: var(--color-semantic-error-base);
}

.valid-feedback {
  display: block;
  color: var(--color-semantic-success-text);
  font-size: var(--typography-font-size-sm);
}

.invalid-feedback {
  display: block;
  color: var(--color-semantic-error-text);
  font-size: var(--typography-font-size-sm);
}
```

## Próximos Pasos

- [Form control](./form-control.md) - Inputs y textareas
- [Layout](./layout.md) - Layouts de formularios
- [Overview](./overview.md) - Introducción a formularios

