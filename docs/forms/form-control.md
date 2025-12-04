# Forms - Form Control

Los componentes de control de formulario son los elementos básicos para crear formularios. El Bio Design System proporciona componentes estilizados y accesibles para inputs y textareas.

## Input Component

El componente `bio-input` es un input de texto estilizado con soporte para múltiples características.

### Uso Básico

```html
<bio-input 
  type="text"
  placeholder="Enter text">
</bio-input>
```

### Con Label

```html
<label for="name" class="form-label">Name</label>
<bio-input 
  id="name"
  name="name"
  placeholder="Enter your name">
</bio-input>
```

### Tamaños

```html
<!-- Small -->
<bio-input size="sm" placeholder="Small input"></bio-input>

<!-- Medium (default) -->
<bio-input size="md" placeholder="Medium input"></bio-input>

<!-- Large -->
<bio-input size="lg" placeholder="Large input"></bio-input>
```

### Tipos de Input

```html
<!-- Text -->
<bio-input type="text" placeholder="Text"></bio-input>

<!-- Email -->
<bio-input type="email" placeholder="Email"></bio-input>

<!-- Password -->
<bio-input type="password" placeholder="Password"></bio-input>

<!-- Number -->
<bio-input type="number" placeholder="Number"></bio-input>

<!-- Tel -->
<bio-input type="tel" placeholder="Phone"></bio-input>

<!-- URL -->
<bio-input type="url" placeholder="URL"></bio-input>

<!-- Date -->
<bio-input type="date"></bio-input>

<!-- Time -->
<bio-input type="time"></bio-input>

<!-- Search -->
<bio-input type="search" placeholder="Search"></bio-input>
```

### Estados

```html
<!-- Normal -->
<bio-input state="normal" placeholder="Normal"></bio-input>

<!-- Focused -->
<bio-input state="focused" placeholder="Focused"></bio-input>

<!-- Disabled -->
<bio-input state="disabled" placeholder="Disabled"></bio-input>
```

### Validación

```html
<!-- Normal -->
<bio-input validation="normal" placeholder="Normal"></bio-input>

<!-- Valid -->
<bio-input validation="valid" placeholder="Valid"></bio-input>

<!-- Invalid -->
<bio-input validation="invalid" placeholder="Invalid"></bio-input>
```

### Con Prefix y Suffix

```html
<!-- Prefix Icon -->
<bio-input 
  [prefix]="true"
  prefixContent="<i class='material-icons'>search</i>"
  [prefixIcon]="true"
  placeholder="Search">
</bio-input>

<!-- Suffix Icon -->
<bio-input 
  [suffix]="true"
  suffixContent="<i class='material-icons'>clear</i>"
  [suffixIcon]="true"
  placeholder="Clearable">
</bio-input>

<!-- Prefix Text -->
<bio-input 
  [prefix]="true"
  prefixContent="$"
  placeholder="Amount">
</bio-input>

<!-- Suffix Text -->
<bio-input 
  [suffix]="true"
  suffixContent=".com"
  placeholder="Domain">
</bio-input>
```

### Con Addons

```html
<!-- Addon Before -->
<bio-input 
  [addonBefore]="true"
  addonBeforeContent="https://"
  placeholder="example.com">
</bio-input>

<!-- Addon After -->
<bio-input 
  [addonAfter]="true"
  addonAfterContent=".com"
  placeholder="example">
</bio-input>
```

## Textarea Component

El componente `bio-textarea` es un input de múltiples líneas.

### Uso Básico

```html
<bio-textarea 
  placeholder="Enter message">
</bio-textarea>
```

### Con Label

```html
<label for="message" class="form-label">Message</label>
<bio-textarea 
  id="message"
  name="message"
  placeholder="Enter your message">
</bio-textarea>
```

### Tamaños

```html
<bio-textarea size="sm" placeholder="Small textarea"></bio-textarea>
<bio-textarea size="md" placeholder="Medium textarea"></bio-textarea>
<bio-textarea size="lg" placeholder="Large textarea"></bio-textarea>
```

### Con Contador de Caracteres

```html
<bio-textarea 
  [counter]="true"
  maxlength="500"
  placeholder="Enter message (max 500 characters)">
</bio-textarea>
```

### Auto-resize

El textarea se ajusta automáticamente según el contenido:

```html
<bio-textarea 
  placeholder="Auto-resizing textarea">
</bio-textarea>
```

### Validación

```html
<bio-textarea 
  validation="invalid"
  placeholder="Invalid textarea">
</bio-textarea>
```

## Password Input Component

El componente `bio-password-input` es especializado para contraseñas.

### Uso Básico

```html
<bio-password-input 
  placeholder="Enter password">
</bio-password-input>
```

### Con Toggle de Visibilidad

```html
<bio-password-input 
  [showToggle]="true"
  placeholder="Enter password">
</bio-password-input>
```

### Validación

```html
<bio-password-input 
  validation="invalid"
  placeholder="Invalid password">
</bio-password-input>
```

## File Input Component

El componente `bio-file-input` es para subir archivos.

### Uso Básico

```html
<bio-file-input 
  accept="image/*">
</bio-file-input>
```

### Múltiples Archivos

```html
<bio-file-input 
  accept="image/*"
  [multiple]="true">
</bio-file-input>
```

### Con Label

```html
<label for="file" class="form-label">Upload File</label>
<bio-file-input 
  id="file"
  accept=".pdf,.doc,.docx">
</bio-file-input>
```

## Search Box Component

El componente `bio-search-box` es especializado para búsqueda.

### Uso Básico

```html
<bio-search-box 
  placeholder="Search...">
</bio-search-box>
```

### Con Evento de Búsqueda

```html
<bio-search-box 
  placeholder="Search..."
  (search)="handleSearch($event)">
</bio-search-box>
```

## Integración con Angular Forms

### Template-driven

```html
<form #myForm="ngForm">
  <bio-input 
    name="email"
    [(ngModel)]="user.email"
    required
    type="email">
  </bio-input>
</form>
```

### Reactive Forms

```typescript
form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  message: ['', Validators.required]
});
```

```html
<form [formGroup]="form">
  <bio-input 
    formControlName="email"
    type="email"
    placeholder="Email">
  </bio-input>
  
  <bio-textarea 
    formControlName="message"
    placeholder="Message">
  </bio-textarea>
</form>
```

## Ejemplos Completos

### Formulario de Contacto

```html
<form [formGroup]="contactForm">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <bio-input 
      id="name"
      formControlName="name"
      placeholder="Your name"
      [required]="true">
    </bio-input>
  </div>
  
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <bio-input 
      id="email"
      formControlName="email"
      type="email"
      placeholder="your@email.com"
      [required]="true">
    </bio-input>
  </div>
  
  <div class="mb-3">
    <label for="message" class="form-label">Message</label>
    <bio-textarea 
      id="message"
      formControlName="message"
      placeholder="Your message"
      [counter]="true"
      maxlength="1000"
      [required]="true">
    </bio-textarea>
  </div>
  
  <bio-button 
    type="submit" 
    variant="primary"
    [disabled]="contactForm.invalid">
    Send Message
  </bio-button>
</form>
```

### Input con Iconos

```html
<div class="mb-3">
  <label for="search" class="form-label">Search</label>
  <bio-input 
    id="search"
    [prefix]="true"
    prefixContent="<i class='material-icons'>search</i>"
    [prefixIcon]="true"
    placeholder="Search products...">
  </bio-input>
</div>
```

## Próximos Pasos

- [Select](./select.md) - Componentes select
- [Checks & radios](./checks-radios.md) - Checkboxes y radios
- [Validation](./validation.md) - Validación de formularios

