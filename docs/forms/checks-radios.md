# Forms - Checks & Radios

El Bio Design System proporciona estilos personalizados para checkboxes y radio buttons, mejorando su apariencia y accesibilidad.

## Checkbox

### Checkbox Básico

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkbox1">
  <label class="form-check-label" for="checkbox1">
    Default checkbox
  </label>
</div>
```

### Checkbox Checked

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkbox2" checked>
  <label class="form-check-label" for="checkbox2">
    Checked checkbox
  </label>
</div>
```

### Checkbox Disabled

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkbox3" disabled>
  <label class="form-check-label" for="checkbox3">
    Disabled checkbox
  </label>
</div>
```

### Checkbox Disabled Checked

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkbox4" checked disabled>
  <label class="form-check-label" for="checkbox4">
    Disabled checked checkbox
  </label>
</div>
```

## Radio

### Radio Básico

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="radio1" id="radio1">
  <label class="form-check-label" for="radio1">
    Default radio
  </label>
</div>
```

### Radio Checked

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="radio1" id="radio2" checked>
  <label class="form-check-label" for="radio2">
    Checked radio
  </label>
</div>
```

### Radio Disabled

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="radio2" id="radio3" disabled>
  <label class="form-check-label" for="radio3">
    Disabled radio
  </label>
</div>
```

## Tamaños

### Small

```html
<div class="form-check form-check-sm">
  <input class="form-check-input" type="checkbox" id="checkbox-sm">
  <label class="form-check-label" for="checkbox-sm">
    Small checkbox
  </label>
</div>
```

### Large

```html
<div class="form-check form-check-lg">
  <input class="form-check-input" type="checkbox" id="checkbox-lg">
  <label class="form-check-label" for="checkbox-lg">
    Large checkbox
  </label>
</div>
```

## Switch

Los switches son checkboxes estilizados como interruptores:

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch1">
  <label class="form-check-label" for="switch1">
    Default switch checkbox input
  </label>
</div>
```

### Switch Checked

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch2" checked>
  <label class="form-check-label" for="switch2">
    Checked switch checkbox input
  </label>
</div>
```

## Inline

### Checkboxes Inline

```html
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
```

### Radios Inline

```html
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
```

## Sin Label

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel">
</div>
```

## Validación

### Valid

```html
<div class="form-check">
  <input class="form-check-input is-valid" type="checkbox" id="checkboxValid">
  <label class="form-check-label" for="checkboxValid">
    Valid checkbox
  </label>
  <div class="valid-feedback">
    Looks good!
  </div>
</div>
```

### Invalid

```html
<div class="form-check">
  <input class="form-check-input is-invalid" type="checkbox" id="checkboxInvalid">
  <label class="form-check-label" for="checkboxInvalid">
    Invalid checkbox
  </label>
  <div class="invalid-feedback">
    You must agree before submitting.
  </div>
</div>
```

## Integración con Angular Forms

### Template-driven

```html
<form #myForm="ngForm">
  <div class="form-check">
    <input 
      class="form-check-input" 
      type="checkbox" 
      id="agree"
      name="agree"
      [(ngModel)]="user.agree"
      required>
    <label class="form-check-label" for="agree">
      I agree to the terms and conditions
    </label>
  </div>
  
  <div class="form-check">
    <input 
      class="form-check-input" 
      type="radio" 
      name="gender"
      id="male"
      value="male"
      [(ngModel)]="user.gender">
    <label class="form-check-label" for="male">
      Male
    </label>
  </div>
</form>
```

### Reactive Forms

```typescript
form = this.fb.group({
  agree: [false, Validators.requiredTrue],
  gender: ['', Validators.required]
});
```

```html
<form [formGroup]="form">
  <div class="form-check">
    <input 
      class="form-check-input" 
      type="checkbox" 
      id="agree"
      formControlName="agree">
    <label class="form-check-label" for="agree">
      I agree to the terms and conditions
    </label>
  </div>
  
  <div class="form-check">
    <input 
      class="form-check-input" 
      type="radio" 
      name="gender"
      id="male"
      value="male"
      formControlName="gender">
    <label class="form-check-label" for="male">
      Male
    </label>
  </div>
  
  <div class="form-check">
    <input 
      class="form-check-input" 
      type="radio" 
      name="gender"
      id="female"
      value="female"
      formControlName="gender">
    <label class="form-check-label" for="female">
      Female
    </label>
  </div>
</form>
```

## Ejemplos Completos

### Grupo de Checkboxes

```html
<fieldset>
  <legend>Select your interests</legend>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="interest1" value="sports">
    <label class="form-check-label" for="interest1">
      Sports
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="interest2" value="music">
    <label class="form-check-label" for="interest2">
      Music
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="interest3" value="reading">
    <label class="form-check-label" for="interest3">
      Reading
    </label>
  </div>
</fieldset>
```

### Grupo de Radios

```html
<fieldset>
  <legend>Choose your payment method</legend>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="payment" id="credit" value="credit" checked>
    <label class="form-check-label" for="credit">
      Credit Card
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="payment" id="debit" value="debit">
    <label class="form-check-label" for="debit">
      Debit Card
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="payment" id="paypal" value="paypal">
    <label class="form-check-label" for="paypal">
      PayPal
    </label>
  </div>
</fieldset>
```

## Estilos CSS

Los estilos usan Design Tokens:

```css
.form-check-input {
  width: 1em;
  height: 1em;
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--border-radius-sm);
}

.form-check-input:checked {
  background-color: var(--color-primary-500); /* #e20039 */
  border-color: var(--color-primary-500);
}

.form-check-input:focus {
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 0.25rem rgba(226, 0, 57, 0.25);
}
```

## Próximos Pasos

- [Form control](./form-control.md) - Inputs y textareas
- [Range](./range.md) - Inputs de rango
- [Validation](./validation.md) - Validación de formularios

