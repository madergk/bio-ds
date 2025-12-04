# Forms - Input Group

El Bio Design System proporciona componentes para agrupar inputs con addons, prefixes, suffixes y otros elementos relacionados, creando interfaces de formulario más ricas y funcionales.

## Input con Addon

### Addon Before

```html
<div class="input-group">
  <span class="input-group-text">@</span>
  <bio-input 
    type="text"
    placeholder="Username">
  </bio-input>
</div>
```

### Addon After

```html
<div class="input-group">
  <bio-input 
    type="text"
    placeholder="Recipient's username">
  </bio-input>
  <span class="input-group-text">@example.com</span>
</div>
```

### Addon en Ambos Lados

```html
<div class="input-group">
  <span class="input-group-text">$</span>
  <bio-input 
    type="text"
    placeholder="Amount">
  </bio-input>
  <span class="input-group-text">.00</span>
</div>
```

## Input con Prefix y Suffix

### Prefix Icon

```html
<div class="input-group">
  <bio-input 
    [prefix]="true"
    prefixContent="<i class='material-icons'>search</i>"
    [prefixIcon]="true"
    placeholder="Search">
  </bio-input>
</div>
```

### Suffix Icon

```html
<div class="input-group">
  <bio-input 
    [suffix]="true"
    suffixContent="<i class='material-icons'>clear</i>"
    [suffixIcon]="true"
    placeholder="Clearable">
  </bio-input>
</div>
```

### Prefix y Suffix

```html
<div class="input-group">
  <bio-input 
    [prefix]="true"
    prefixContent="<i class='material-icons'>person</i>"
    [prefixIcon]="true"
    [suffix]="true"
    suffixContent="<i class='material-icons'>check</i>"
    [suffixIcon]="true"
    placeholder="Username">
  </bio-input>
</div>
```

## Input con Botones

### Botón al Final

```html
<div class="input-group">
  <bio-input 
    type="text"
    placeholder="Search">
  </bio-input>
  <bio-button variant="primary" type="button">Search</bio-button>
</div>
```

### Botón al Inicio

```html
<div class="input-group">
  <bio-button variant="outline" type="button">Button</bio-button>
  <bio-input 
    type="text"
    placeholder="Input">
  </bio-input>
</div>
```

### Botones en Ambos Lados

```html
<div class="input-group">
  <bio-button variant="outline" type="button">Left</bio-button>
  <bio-input 
    type="text"
    placeholder="Input">
  </bio-input>
  <bio-button variant="primary" type="button">Right</bio-button>
</div>
```

## Input con Dropdown

```html
<div class="input-group">
  <button 
    class="btn btn-outline-secondary dropdown-toggle" 
    type="button" 
    data-bs-toggle="dropdown">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
  <bio-input 
    type="text"
    placeholder="Input">
  </bio-input>
</div>
```

## Input con Select

```html
<div class="input-group">
  <select class="form-select">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
  </select>
  <bio-input 
    type="text"
    placeholder="Input">
  </bio-input>
</div>
```

## Tamaños

### Small

```html
<div class="input-group input-group-sm">
  <span class="input-group-text">Small</span>
  <bio-input 
    size="sm"
    type="text"
    placeholder="Small input">
  </bio-input>
</div>
```

### Large

```html
<div class="input-group input-group-lg">
  <span class="input-group-text">Large</span>
  <bio-input 
    size="lg"
    type="text"
    placeholder="Large input">
  </bio-input>
</div>
```

## Validación

### Valid

```html
<div class="input-group">
  <span class="input-group-text">@</span>
  <bio-input 
    type="text"
    validation="valid"
    placeholder="Valid input">
  </bio-input>
  <div class="valid-feedback">
    Looks good!
  </div>
</div>
```

### Invalid

```html
<div class="input-group">
  <span class="input-group-text">@</span>
  <bio-input 
    type="text"
    validation="invalid"
    placeholder="Invalid input">
  </bio-input>
  <div class="invalid-feedback">
    Please provide a valid input.
  </div>
</div>
```

## Ejemplos Completos

### Búsqueda con Botón

```html
<div class="input-group">
  <bio-input 
    type="search"
    placeholder="Search products..."
    [prefix]="true"
    prefixContent="<i class='material-icons'>search</i>"
    [prefixIcon]="true">
  </bio-input>
  <bio-button variant="primary" type="button">Search</bio-button>
</div>
```

### Precio con Moneda

```html
<div class="input-group">
  <span class="input-group-text">$</span>
  <bio-input 
    type="number"
    placeholder="0.00"
    [prefix]="false">
  </bio-input>
  <span class="input-group-text">USD</span>
</div>
```

### Email con Dominio

```html
<div class="input-group">
  <bio-input 
    type="text"
    placeholder="username"
    [addonAfter]="false">
  </bio-input>
  <span class="input-group-text">@</span>
  <select class="form-select" style="max-width: 150px;">
    <option selected>example.com</option>
    <option value="gmail.com">gmail.com</option>
    <option value="yahoo.com">yahoo.com</option>
  </select>
</div>
```

### URL Completa

```html
<div class="input-group">
  <span class="input-group-text">https://</span>
  <bio-input 
    type="text"
    placeholder="example"
    [addonBefore]="false"
    [addonAfter]="false">
  </bio-input>
  <span class="input-group-text">.com</span>
</div>
```

## Integración con Angular Forms

```html
<form [formGroup]="form">
  <div class="input-group">
    <span class="input-group-text">@</span>
    <bio-input 
      formControlName="username"
      type="text"
      placeholder="Username">
    </bio-input>
  </div>
  
  <div class="input-group">
    <span class="input-group-text">$</span>
    <bio-input 
      formControlName="amount"
      type="number"
      placeholder="0.00">
    </bio-input>
    <span class="input-group-text">.00</span>
  </div>
</form>
```

## Estilos CSS

Los estilos del input group usan Design Tokens:

```css
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: var(--bs-input-padding-y) var(--bs-input-padding-x);
  font-size: var(--bs-input-font-size);
  font-weight: var(--bs-font-weight-normal);
  line-height: var(--bs-line-height-base);
  color: var(--bs-body-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--color-background-secondary);
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
}
```

## Próximos Pasos

- [Form control](./form-control.md) - Inputs y textareas
- [Floating labels](./floating-labels.md) - Labels flotantes
- [Validation](./validation.md) - Validación de formularios

