# Button Component

A reusable button component following atomic design principles. This is an **atom** - a basic building block of the design system.

## Features

- ✅ Multiple variants (primary, secondary, outline, text, danger)
- ✅ Three sizes (sm, md, lg)
- ✅ Disabled state
- ✅ Type safety with TypeScript
- ✅ Uses design tokens for consistent styling
- ✅ Accessible (ARIA attributes, keyboard navigation)
- ✅ Flexible content (label prop or content projection)

## Usage

### Basic Usage

```html
<!-- Using label prop -->
<bio-button label="Click me" (click)="handleClick()"></bio-button>

<!-- Using content projection -->
<bio-button (click)="handleClick()">Click me</bio-button>
```

### Variants

```html
<!-- Primary (default) -->
<bio-button variant="primary">Primary Button</bio-button>

<!-- Secondary -->
<bio-button variant="secondary">Secondary Button</bio-button>

<!-- Outline -->
<bio-button variant="outline">Outline Button</bio-button>

<!-- Text -->
<bio-button variant="text">Text Button</bio-button>

<!-- Danger -->
<bio-button variant="danger">Delete</bio-button>
```

### Sizes

```html
<bio-button size="sm">Small</bio-button>
<bio-button size="md">Medium</bio-button>
<bio-button size="lg">Large</bio-button>
```

### Disabled State

```html
<bio-button [disabled]="true">Disabled Button</bio-button>
```

### Form Integration

```html
<!-- Submit button -->
<bio-button type="submit" variant="primary">Submit</bio-button>

<!-- Reset button -->
<bio-button type="reset" variant="secondary">Reset</bio-button>
```

### With Custom Classes

```html
<bio-button class="my-custom-class" variant="primary">
  Custom Styled
</bio-button>
```

## API

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Button text content |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'text' \| 'danger'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `class` | `string` | `undefined` | Additional CSS classes |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `click` | `EventEmitter<MouseEvent>` | Emitted when button is clicked (if not disabled) |

## Design Tokens Used

The Button component uses the following design tokens:

- Colors: `--color-primary-*`, `--color-semantic-error`, `--color-base-white`
- Spacing: `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`
- Typography: `--typography-font-family-primary`, `--typography-font-size-*`, `--typography-font-weight-*`
- Borders: `--border-radius-md`, `--border-width-thin`

## Accessibility

- ✅ Proper ARIA attributes (`aria-disabled`)
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Semantic HTML (`<button>` element)

## Examples

### Complete Example

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div>
      <bio-button 
        variant="primary" 
        size="lg"
        (click)="handlePrimaryClick()">
        Save Changes
      </bio-button>
      
      <bio-button 
        variant="outline" 
        size="md"
        (click)="handleCancelClick()">
        Cancel
      </bio-button>
      
      <bio-button 
        variant="danger" 
        size="sm"
        [disabled]="isDeleting"
        (click)="handleDeleteClick()">
        Delete
      </bio-button>
    </div>
  `
})
export class ExampleComponent {
  isDeleting = false;
  
  handlePrimaryClick() {
    console.log('Primary button clicked');
  }
  
  handleCancelClick() {
    console.log('Cancel clicked');
  }
  
  handleDeleteClick() {
    this.isDeleting = true;
    // Delete logic here
  }
}
```

