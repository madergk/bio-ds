# Alert Component

A flexible alert component for displaying contextual feedback messages to users.

## Overview

The Alert component is an **atom** in the atomic design system. It provides a way to display important messages with different semantic meanings and visual styles.

## Features

- ✅ Multiple variants (primary, secondary, success, danger, warning, info, light, dark)
- ✅ Optional icon
- ✅ Optional dismissible (close button)
- ✅ Simple or additional content layouts
- ✅ Accessible with ARIA attributes
- ✅ Uses design tokens for consistency

## Usage

### Simple Alert

```typescript
import { Component } from '@angular/core';
import { AlertComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-example',
  imports: [AlertComponent],
  template: `
    <bio-alert 
      variant="success"
      message="A simple alert—check it out!">
    </bio-alert>
  `
})
export class ExampleComponent {}
```

### Alert with Heading and Additional Content

```html
<bio-alert 
  variant="primary"
  heading="Well done!"
  message="Aww yeah, you successfully read this important alert message."
  additionalText="Whenever you need to, be sure to use margin utilities to keep things nice and tidy.">
</bio-alert>
```

### Alert with Icon

```html
<bio-alert 
  variant="warning"
  [showIcon]="true"
  message="This is a warning message.">
</bio-alert>
```

### Dismissible Alert

```html
<bio-alert 
  variant="info"
  [dismissible]="true"
  message="This alert can be dismissed."
  (dismiss)="onAlertDismissed()">
</bio-alert>
```

## API

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `AlertVariant` | `'primary'` | Visual variant of the alert |
| `message` | `string` | `undefined` | Main alert message text |
| `heading` | `string` | `undefined` | Optional heading/title (enables additional content layout) |
| `additionalText` | `string` | `undefined` | Additional text shown below divider |
| `showIcon` | `boolean` | `false` | Whether to show an icon |
| `dismissible` | `boolean` | `false` | Whether the alert can be dismissed |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `dismiss` | `EventEmitter<void>` | Emitted when alert is dismissed |

### AlertVariant Type

```typescript
type AlertVariant = 
  | 'primary'    // Blue theme
  | 'secondary'  // Gray theme
  | 'success'    // Green theme
  | 'danger'     // Red/pink theme
  | 'warning'    // Yellow theme
  | 'info'       // Cyan theme
  | 'light'      // Light gray with border
  | 'dark';      // Dark gray
```

## Variants

Each variant has specific background, border, and text colors:

- **Primary**: Light blue background (#cfe2ff), dark blue text (#052c65)
- **Secondary**: Light gray background (#e2e3e5), dark gray text (#2b2f32)
- **Success**: Light green background (#d1e7dd), dark green text (#0a3622)
- **Danger**: Light pink/red background (#f8d7da), dark red text (#58151c)
- **Warning**: Light yellow background (#fff3cd), dark yellow text (#664d03)
- **Info**: Light cyan background (#cff4fc), dark cyan text (#055160)
- **Light**: White background (#fcfcfd), gray text (#495057), gray border
- **Dark**: Dark gray background (#ced4da), gray text (#495057)

## Content Layouts

### Simple Layout
When only `message` is provided, displays a simple single-line alert.

### Additional Content Layout
When `heading` is provided, displays:
1. Bold heading
2. Main message text
3. Optional divider (if `additionalText` is provided)
4. Additional text below divider

## Accessibility

- Uses `role="alert"` for screen readers
- `aria-live="assertive"` for danger/warning alerts
- `aria-live="polite"` for other variants
- Close button has `aria-label`
- Proper focus indicators

## Design Tokens Used

- `--spacing-xs`, `--spacing-md`: Spacing values
- `--typography-font-family-primary`: Font family
- `--typography-font-size-base`, `--typography-font-size-2xl`: Font sizes
- `--typography-font-weight-normal`, `--typography-font-weight-bold`: Font weights
- `--typography-line-height-normal`: Line height
- `--border-width-thin`: Border width

## Notes

- The component automatically hides when dismissed (`visible` property)
- Icons are simple SVG shapes that match the variant's semantic meaning
- Content projection (`<ng-content>`) is available for simple alerts
- The dismiss button is positioned absolutely in the top-right corner

