# Forms - Floating Labels

Las floating labels (etiquetas flotantes) son labels que se animan y se mueven cuando el input tiene foco o un valor, proporcionando una experiencia de usuario moderna y ahorrando espacio.

## Floating Label Básico

```html
<div class="form-floating">
  <bio-input 
    type="text"
    id="floatingInput"
    placeholder="name@example.com">
  </bio-input>
  <label for="floatingInput">Email address</label>
</div>
```

## Con Diferentes Tipos de Input

### Email

```html
<div class="form-floating">
  <bio-input 
    type="email"
    id="floatingEmail"
    placeholder="name@example.com">
  </bio-input>
  <label for="floatingEmail">Email address</label>
</div>
```

### Password

```html
<div class="form-floating">
  <bio-password-input 
    id="floatingPassword"
    placeholder="Password">
  </bio-password-input>
  <label for="floatingPassword">Password</label>
</div>
```

### Textarea

```html
<div class="form-floating">
  <bio-textarea 
    id="floatingTextarea"
    placeholder="Leave a comment here">
  </bio-textarea>
  <label for="floatingTextarea">Comments</label>
</div>
```

### Select

```html
<div class="form-floating">
  <select class="form-select" id="floatingSelect">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>
```

## Con Valor Predefinido

```html
<div class="form-floating">
  <bio-input 
    type="text"
    id="floatingInputValue"
    placeholder="name@example.com"
    value="test@example.com">
  </bio-input>
  <label for="floatingInputValue">Email address</label>
</div>
```

## Tamaños

### Small

```html
<div class="form-floating">
  <bio-input 
    size="sm"
    type="text"
    id="floatingInputSmall"
    placeholder="name@example.com">
  </bio-input>
  <label for="floatingInputSmall">Email address</label>
</div>
```

### Large

```html
<div class="form-floating">
  <bio-input 
    size="lg"
    type="text"
    id="floatingInputLarge"
    placeholder="name@example.com">
  </bio-input>
  <label for="floatingInputLarge">Email address</label>
</div>
```

## Validación

### Valid

```html
<div class="form-floating">
  <bio-input 
    type="email"
    id="floatingInputValid"
    placeholder="name@example.com"
    validation="valid"
    value="test@example.com">
  </bio-input>
  <label for="floatingInputValid">Email address</label>
</div>
```

### Invalid

```html
<div class="form-floating">
  <bio-input 
    type="email"
    id="floatingInputInvalid"
    placeholder="name@example.com"
    validation="invalid"
    value="invalid-email">
  </bio-input>
  <label for="floatingInputInvalid">Email address</label>
  <div class="invalid-feedback">
    Please provide a valid email.
  </div>
</div>
```

## Con Input Group

```html
<div class="form-floating">
  <div class="input-group">
    <span class="input-group-text">@</span>
    <bio-input 
      type="text"
      id="floatingInputGroup"
      placeholder="Username">
    </bio-input>
  </div>
  <label for="floatingInputGroup">Username</label>
</div>
```

## Múltiples Campos

```html
<form>
  <div class="form-floating mb-3">
    <bio-input 
      type="email"
      id="floatingEmail"
      placeholder="name@example.com">
    </bio-input>
    <label for="floatingEmail">Email address</label>
  </div>
  
  <div class="form-floating mb-3">
    <bio-password-input 
      id="floatingPassword"
      placeholder="Password">
    </bio-password-input>
    <label for="floatingPassword">Password</label>
  </div>
  
  <div class="form-floating mb-3">
    <bio-textarea 
      id="floatingTextarea"
      placeholder="Leave a comment here">
    </bio-textarea>
    <label for="floatingTextarea">Comments</label>
  </div>
</form>
```

## Integración con Angular Forms

### Template-driven

```html
<form #myForm="ngForm">
  <div class="form-floating">
    <bio-input 
      id="email"
      name="email"
      type="email"
      [(ngModel)]="user.email"
      placeholder="name@example.com"
      required>
    </bio-input>
    <label for="email">Email address</label>
  </div>
</form>
```

### Reactive Forms

```html
<form [formGroup]="form">
  <div class="form-floating mb-3">
    <bio-input 
      id="email"
      formControlName="email"
      type="email"
      placeholder="name@example.com">
    </bio-input>
    <label for="email">Email address</label>
  </div>
  
  <div class="form-floating mb-3">
    <bio-password-input 
      id="password"
      formControlName="password"
      placeholder="Password">
    </bio-password-input>
    <label for="password">Password</label>
  </div>
</form>
```

## Ejemplos Completos

### Formulario de Registro

```html
<form [formGroup]="registerForm">
  <div class="form-floating mb-3">
    <bio-input 
      id="firstName"
      formControlName="firstName"
      type="text"
      placeholder="First name">
    </bio-input>
    <label for="firstName">First name</label>
  </div>
  
  <div class="form-floating mb-3">
    <bio-input 
      id="lastName"
      formControlName="lastName"
      type="text"
      placeholder="Last name">
    </bio-input>
    <label for="lastName">Last name</label>
  </div>
  
  <div class="form-floating mb-3">
    <bio-input 
      id="email"
      formControlName="email"
      type="email"
      placeholder="name@example.com">
    </bio-input>
    <label for="email">Email address</label>
  </div>
  
  <div class="form-floating mb-3">
    <bio-password-input 
      id="password"
      formControlName="password"
      placeholder="Password">
    </bio-password-input>
    <label for="password">Password</label>
  </div>
  
  <bio-button 
    type="submit" 
    variant="primary"
    [disabled]="registerForm.invalid">
    Register
  </bio-button>
</form>
```

### Formulario de Contacto

```html
<form [formGroup]="contactForm">
  <div class="form-floating mb-3">
    <bio-input 
      id="name"
      formControlName="name"
      type="text"
      placeholder="Your name">
    </bio-input>
    <label for="name">Name</label>
  </div>
  
  <div class="form-floating mb-3">
    <bio-input 
      id="email"
      formControlName="email"
      type="email"
      placeholder="name@example.com">
    </bio-input>
    <label for="email">Email</label>
  </div>
  
  <div class="form-floating mb-3">
    <bio-textarea 
      id="message"
      formControlName="message"
      placeholder="Your message">
    </bio-textarea>
    <label for="message">Message</label>
  </div>
  
  <bio-button 
    type="submit" 
    variant="primary">
    Send Message
  </bio-button>
</form>
```

## Estilos CSS

Los estilos de floating labels usan Design Tokens:

```css
.form-floating {
  position: relative;
}

.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: var(--bs-input-padding-y) var(--bs-input-padding-x);
  pointer-events: none;
  border: var(--bs-border-width) solid transparent;
  transform-origin: 0 0;
  transition: opacity var(--transition-duration-normal) var(--transition-timing-ease-in-out),
              transform var(--transition-duration-normal) var(--transition-timing-ease-in-out);
}

.form-floating > input:focus ~ label,
.form-floating > input:not(:placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
```

## Personalización

### Cambiar Color del Label

```css
.form-floating > label {
  color: var(--color-text-muted);
}

.form-floating > input:focus ~ label {
  color: var(--color-primary-500); /* #e20039 */
}
```

## Próximos Pasos

- [Form control](./form-control.md) - Inputs y textareas
- [Layout](./layout.md) - Layouts de formularios
- [Validation](./validation.md) - Validación de formularios

