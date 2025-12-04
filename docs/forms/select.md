# Forms - Select

El Bio Design System proporciona estilos para elementos `<select>` nativos de HTML, permitiendo crear dropdowns de selección estilizados y accesibles.

## Select Básico

```html
<select class="form-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

### Con Label

```html
<label for="select" class="form-label">Choose an option</label>
<select class="form-select" id="select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

## Tamaños

```html
<!-- Small -->
<select class="form-select form-select-sm">
  <option selected>Small select</option>
  <option value="1">One</option>
</select>

<!-- Default -->
<select class="form-select">
  <option selected>Default select</option>
  <option value="1">One</option>
</select>

<!-- Large -->
<select class="form-select form-select-lg">
  <option selected>Large select</option>
  <option value="1">One</option>
</select>
```

## Múltiple

```html
<select class="form-select" multiple>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

## Tamaño Múltiple

```html
<select class="form-select" multiple size="3">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

## Deshabilitado

```html
<select class="form-select" disabled>
  <option selected>Disabled select</option>
  <option value="1">One</option>
</select>
```

## Opciones Deshabilitadas

```html
<select class="form-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2" disabled>Two (disabled)</option>
  <option value="3">Three</option>
</select>
```

## Validación

### Valid

```html
<select class="form-select is-valid">
  <option selected>Valid select</option>
  <option value="1">One</option>
</select>
<div class="valid-feedback">
  Looks good!
</div>
```

### Invalid

```html
<select class="form-select is-invalid">
  <option selected>Invalid select</option>
  <option value="1">One</option>
</select>
<div class="invalid-feedback">
  Please select a valid option.
</div>
```

## Con Optgroups

```html
<select class="form-select">
  <option selected>Choose...</option>
  <optgroup label="Group 1">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </optgroup>
</select>
```

## Integración con Angular Forms

### Template-driven

```html
<form #myForm="ngForm">
  <select 
    name="country"
    [(ngModel)]="user.country"
    class="form-select"
    required>
    <option value="">Choose...</option>
    <option value="us">United States</option>
    <option value="mx">Mexico</option>
    <option value="ca">Canada</option>
  </select>
</form>
```

### Reactive Forms

```typescript
form = this.fb.group({
  country: ['', Validators.required]
});
```

```html
<form [formGroup]="form">
  <select 
    formControlName="country"
    class="form-select">
    <option value="">Choose...</option>
    <option value="us">United States</option>
    <option value="mx">Mexico</option>
    <option value="ca">Canada</option>
  </select>
</form>
```

## Ejemplos Completos

### Select con Validación

```html
<form [formGroup]="form">
  <div class="mb-3">
    <label for="country" class="form-label">Country</label>
    <select 
      id="country"
      formControlName="country"
      class="form-select"
      [class.is-invalid]="form.get('country')?.invalid && form.get('country')?.touched">
      <option value="">Choose...</option>
      <option value="us">United States</option>
      <option value="mx">Mexico</option>
      <option value="ca">Canada</option>
    </select>
    <div class="invalid-feedback" *ngIf="form.get('country')?.invalid && form.get('country')?.touched">
      Please select a country.
    </div>
  </div>
</form>
```

### Select Múltiple

```html
<div class="mb-3">
  <label for="languages" class="form-label">Languages</label>
  <select 
    id="languages"
    class="form-select"
    multiple
    size="4">
    <option value="en">English</option>
    <option value="es">Spanish</option>
    <option value="fr">French</option>
    <option value="de">German</option>
  </select>
  <div class="form-text">Hold Ctrl (Windows) or Cmd (Mac) to select multiple options.</div>
</div>
```

## Estilos CSS

Los estilos del select usan Design Tokens:

```css
.form-select {
  padding: var(--bs-input-padding-y) var(--bs-input-padding-x);
  font-size: var(--bs-input-font-size);
  border-radius: var(--bs-input-border-radius);
  border: var(--bs-border-width) solid var(--bs-input-border-color);
  font-family: var(--bs-font-family-sans-serif);
}

.form-select:focus {
  border-color: var(--bs-input-focus-border-color);
  box-shadow: var(--bs-input-focus-box-shadow);
}
```

## Personalización

### Cambiar Estilos

```css
.form-select {
  background-color: var(--color-background-default);
  border-color: var(--color-border-default);
}

.form-select:focus {
  border-color: var(--color-primary-500); /* #e20039 */
  box-shadow: 0 0 0 0.25rem rgba(226, 0, 57, 0.25);
}
```

## Próximos Pasos

- [Form control](./form-control.md) - Inputs y textareas
- [Checks & radios](./checks-radios.md) - Checkboxes y radios
- [Validation](./validation.md) - Validación de formularios

