# Forms - Range

El Bio Design System proporciona estilos personalizados para inputs de tipo `range` (sliders), permitiendo seleccionar valores numéricos dentro de un rango especificado.

## Range Básico

```html
<label for="range" class="form-label">Example range</label>
<input type="range" class="form-range" id="range">
```

### Con Valor Mínimo y Máximo

```html
<label for="range" class="form-label">Range (0-100)</label>
<input 
  type="range" 
  class="form-range" 
  id="range"
  min="0"
  max="100"
  value="50">
```

### Con Steps

```html
<label for="range" class="form-label">Range with steps</label>
<input 
  type="range" 
  class="form-range" 
  id="range"
  min="0"
  max="100"
  step="10"
  value="50">
```

## Con Valor Mostrado

```html
<label for="range" class="form-label">Volume: <span id="volumeValue">50</span></label>
<input 
  type="range" 
  class="form-range" 
  id="range"
  min="0"
  max="100"
  value="50"
  (input)="updateValue($event)">
```

```typescript
updateValue(event: Event) {
  const target = event.target as HTMLInputElement;
  document.getElementById('volumeValue')!.textContent = target.value;
}
```

## Disabled

```html
<label for="range" class="form-label">Disabled range</label>
<input 
  type="range" 
  class="form-range" 
  id="range"
  min="0"
  max="100"
  value="50"
  disabled>
```

## Múltiples Ranges

```html
<div class="mb-3">
  <label for="range1" class="form-label">Range 1</label>
  <input 
    type="range" 
    class="form-range" 
    id="range1"
    min="0"
    max="100"
    value="25">
</div>

<div class="mb-3">
  <label for="range2" class="form-label">Range 2</label>
  <input 
    type="range" 
    class="form-range" 
    id="range2"
    min="0"
    max="100"
    value="75">
</div>
```

## Integración con Angular Forms

### Template-driven

```html
<form #myForm="ngForm">
  <label for="volume" class="form-label">Volume</label>
  <input 
    type="range" 
    class="form-range" 
    id="volume"
    name="volume"
    [(ngModel)]="settings.volume"
    min="0"
    max="100">
</form>
```

### Reactive Forms

```typescript
form = this.fb.group({
  volume: [50, [Validators.min(0), Validators.max(100)]],
  brightness: [75, [Validators.min(0), Validators.max(100)]]
});
```

```html
<form [formGroup]="form">
  <div class="mb-3">
    <label for="volume" class="form-label">Volume</label>
    <input 
      type="range" 
      class="form-range" 
      id="volume"
      formControlName="volume"
      min="0"
      max="100">
    <div class="form-text">Current value: {{ form.get('volume')?.value }}</div>
  </div>
  
  <div class="mb-3">
    <label for="brightness" class="form-label">Brightness</label>
    <input 
      type="range" 
      class="form-range" 
      id="brightness"
      formControlName="brightness"
      min="0"
      max="100">
    <div class="form-text">Current value: {{ form.get('brightness')?.value }}</div>
  </div>
</form>
```

## Ejemplos Completos

### Control de Volumen

```html
<div class="mb-3">
  <label for="volume" class="form-label">
    Volume: <span id="volumeDisplay">50</span>%
  </label>
  <input 
    type="range" 
    class="form-range" 
    id="volume"
    min="0"
    max="100"
    value="50"
    (input)="updateVolume($event)">
  <div class="d-flex justify-content-between">
    <small>0%</small>
    <small>100%</small>
  </div>
</div>
```

### Rango de Precios

```html
<div class="mb-3">
  <label for="priceRange" class="form-label">
    Price Range: $<span id="minPrice">0</span> - $<span id="maxPrice">1000</span>
  </label>
  <input 
    type="range" 
    class="form-range" 
    id="priceRange"
    min="0"
    max="1000"
    step="10"
    value="500"
    (input)="updatePriceRange($event)">
</div>
```

### Configuración de Filtros

```html
<form [formGroup]="filterForm">
  <div class="mb-3">
    <label for="minAge" class="form-label">Minimum Age: {{ filterForm.get('minAge')?.value }}</label>
    <input 
      type="range" 
      class="form-range" 
      id="minAge"
      formControlName="minAge"
      min="18"
      max="100"
      step="1">
  </div>
  
  <div class="mb-3">
    <label for="maxAge" class="form-label">Maximum Age: {{ filterForm.get('maxAge')?.value }}</label>
    <input 
      type="range" 
      class="form-range" 
      id="maxAge"
      formControlName="maxAge"
      min="18"
      max="100"
      step="1">
  </div>
</form>
```

## Estilos CSS

Los estilos del range usan Design Tokens:

```css
.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  background-color: var(--color-primary-500); /* #e20039 */
  border: 0;
  border-radius: 1rem;
  -webkit-appearance: none;
  appearance: none;
}

.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: var(--color-primary-500); /* #e20039 */
  border: 0;
  border-radius: 1rem;
  -moz-appearance: none;
  appearance: none;
}
```

## Personalización

### Cambiar Color del Thumb

```css
.form-range::-webkit-slider-thumb {
  background-color: var(--color-primary-500); /* #e20039 */
}

.form-range::-moz-range-thumb {
  background-color: var(--color-primary-500); /* #e20039 */
}
```

### Cambiar Tamaño del Thumb

```css
.form-range::-webkit-slider-thumb {
  width: 1.25rem;
  height: 1.25rem;
}

.form-range::-moz-range-thumb {
  width: 1.25rem;
  height: 1.25rem;
}
```

## Próximos Pasos

- [Form control](./form-control.md) - Inputs y textareas
- [Input group](./input-group.md) - Agrupar inputs
- [Validation](./validation.md) - Validación de formularios

