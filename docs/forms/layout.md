# Forms - Layout

El Bio Design System proporciona diferentes layouts para formularios, permitiendo organizar campos de manera vertical, horizontal, inline o en grid.

## Layout Vertical (Default)

El layout vertical es el más común y fácil de usar:

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <bio-input 
      id="email"
      type="email"
      placeholder="name@example.com">
    </bio-input>
  </div>
  
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <bio-password-input 
      id="password"
      placeholder="Password">
    </bio-password-input>
  </div>
  
  <bio-button type="submit" variant="primary">Submit</bio-button>
</form>
```

## Layout Horizontal

Para layouts horizontales, usa el sistema de grillas:

```html
<form>
  <div class="row mb-3">
    <label for="email" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <bio-input 
        id="email"
        type="email"
        placeholder="name@example.com">
      </bio-input>
    </div>
  </div>
  
  <div class="row mb-3">
    <label for="password" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <bio-password-input 
        id="password"
        placeholder="Password">
      </bio-password-input>
    </div>
  </div>
  
  <div class="row">
    <div class="col-sm-10 offset-sm-2">
      <bio-button type="submit" variant="primary">Submit</bio-button>
    </div>
  </div>
</form>
```

## Layout Inline

Para formularios compactos en una sola línea:

```html
<form class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inlineFormInput" class="visually-hidden">Name</label>
    <bio-input 
      id="inlineFormInput"
      type="text"
      placeholder="Jane Doe">
    </bio-input>
  </div>
  
  <div class="col-auto">
    <label for="inlineFormSelect" class="visually-hidden">Preference</label>
    <select class="form-select" id="inlineFormSelect">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  </div>
  
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck">
      <label class="form-check-label" for="inlineFormCheck">
        Remember me
      </label>
    </div>
  </div>
  
  <div class="col-auto">
    <bio-button type="submit" variant="primary">Submit</bio-button>
  </div>
</form>
```

## Layout en Grid

Usa el sistema de grillas para layouts más complejos:

```html
<form>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="firstName" class="form-label">First name</label>
      <bio-input 
        id="firstName"
        type="text"
        placeholder="First name">
      </bio-input>
    </div>
    
    <div class="col-md-6 mb-3">
      <label for="lastName" class="form-label">Last name</label>
      <bio-input 
        id="lastName"
        type="text"
        placeholder="Last name">
      </bio-input>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-12 mb-3">
      <label for="email" class="form-label">Email</label>
      <bio-input 
        id="email"
        type="email"
        placeholder="name@example.com">
      </bio-input>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="city" class="form-label">City</label>
      <bio-input 
        id="city"
        type="text"
        placeholder="City">
      </bio-input>
    </div>
    
    <div class="col-md-4 mb-3">
      <label for="state" class="form-label">State</label>
      <select class="form-select" id="state">
        <option selected>Choose...</option>
        <option value="1">State 1</option>
        <option value="2">State 2</option>
      </select>
    </div>
    
    <div class="col-md-2 mb-3">
      <label for="zip" class="form-label">Zip</label>
      <bio-input 
        id="zip"
        type="text"
        placeholder="Zip">
      </bio-input>
    </div>
  </div>
</form>
```

## Formularios en Columnas Múltiples

```html
<form>
  <div class="row">
    <div class="col-md-6">
      <h5>Personal Information</h5>
      <div class="mb-3">
        <label for="firstName" class="form-label">First name</label>
        <bio-input id="firstName" type="text"></bio-input>
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Last name</label>
        <bio-input id="lastName" type="text"></bio-input>
      </div>
    </div>
    
    <div class="col-md-6">
      <h5>Contact Information</h5>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <bio-input id="email" type="email"></bio-input>
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <bio-input id="phone" type="tel"></bio-input>
      </div>
    </div>
  </div>
</form>
```

## Formularios con Secciones

```html
<form>
  <fieldset class="mb-4">
    <legend>Personal Information</legend>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <bio-input id="name" type="text"></bio-input>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <bio-input id="email" type="email"></bio-input>
    </div>
  </fieldset>
  
  <fieldset class="mb-4">
    <legend>Address</legend>
    <div class="mb-3">
      <label for="address" class="form-label">Street Address</label>
      <bio-input id="address" type="text"></bio-input>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="city" class="form-label">City</label>
        <bio-input id="city" type="text"></bio-input>
      </div>
      <div class="col-md-6 mb-3">
        <label for="zip" class="form-label">Zip Code</label>
        <bio-input id="zip" type="text"></bio-input>
      </div>
    </div>
  </fieldset>
</form>
```

## Formularios Responsivos

Los layouts se adaptan automáticamente a diferentes tamaños de pantalla:

```html
<form>
  <div class="row">
    <!-- Stack en mobile, lado a lado en desktop -->
    <div class="col-12 col-md-6 mb-3">
      <label for="firstName" class="form-label">First name</label>
      <bio-input id="firstName" type="text"></bio-input>
    </div>
    
    <div class="col-12 col-md-6 mb-3">
      <label for="lastName" class="form-label">Last name</label>
      <bio-input id="lastName" type="text"></bio-input>
    </div>
  </div>
</form>
```

## Ejemplos Completos

### Formulario de Registro Completo

```html
<form [formGroup]="registerForm">
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="firstName" class="form-label">First name</label>
      <bio-input 
        id="firstName"
        formControlName="firstName"
        type="text"
        placeholder="First name">
      </bio-input>
    </div>
    
    <div class="col-md-6 mb-3">
      <label for="lastName" class="form-label">Last name</label>
      <bio-input 
        id="lastName"
        formControlName="lastName"
        type="text"
        placeholder="Last name">
      </bio-input>
    </div>
  </div>
  
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <bio-input 
      id="email"
      formControlName="email"
      type="email"
      placeholder="name@example.com">
    </bio-input>
  </div>
  
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <bio-password-input 
      id="password"
      formControlName="password"
      placeholder="Password">
    </bio-password-input>
  </div>
  
  <div class="mb-3">
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
  </div>
  
  <bio-button 
    type="submit" 
    variant="primary"
    [disabled]="registerForm.invalid">
    Register
  </bio-button>
</form>
```

## Mejores Prácticas

1. **Usa spacing consistente**: Usa `mb-3` o `mb-4` para espaciado consistente entre campos.

2. **Agrupa campos relacionados**: Usa fieldsets o secciones visuales para agrupar campos relacionados.

3. **Considera el orden de los campos**: Coloca campos más importantes primero.

4. **Haz formularios responsivos**: Usa el sistema de grillas para layouts que se adapten a diferentes pantallas.

5. **Proporciona feedback visual**: Usa estados de validación y mensajes de error apropiados.

## Próximos Pasos

- [Form control](./form-control.md) - Inputs y textareas
- [Validation](./validation.md) - Validación de formularios
- [Input group](./input-group.md) - Agrupar inputs

