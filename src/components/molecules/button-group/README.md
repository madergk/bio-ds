# Button Group Component

A component that groups multiple buttons together with connected borders and shared styling.

## Overview

The Button Group component is a **molecule** in the atomic design system. It groups multiple Button components together, creating a visually connected set of buttons with shared styling.

## Features

- ✅ Horizontal or vertical layout
- ✅ Connected borders (no gaps between buttons)
- ✅ Rounded corners only on outer edges
- ✅ Outline variant support
- ✅ Consistent sizing across all buttons
- ✅ Accessible with proper ARIA attributes
- ✅ Uses design tokens for consistency

## Usage

### Basic Button Group

```typescript
import { Component } from '@angular/core';
import { ButtonGroupComponent, ButtonComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-example',
  imports: [ButtonGroupComponent, ButtonComponent],
  template: `
    <bio-button-group>
      <bio-button variant="primary">Button 1</bio-button>
      <bio-button variant="primary">Button 2</bio-button>
      <bio-button variant="primary">Button 3</bio-button>
    </bio-button-group>
  `
})
export class ExampleComponent {}
```

### Horizontal Layout (Default)

```html
<bio-button-group direction="horizontal">
  <bio-button variant="primary">First</bio-button>
  <bio-button variant="primary">Second</bio-button>
  <bio-button variant="primary">Third</bio-button>
</bio-button-group>
```

### Vertical Layout

```html
<bio-button-group direction="vertical">
  <bio-button variant="primary">Top</bio-button>
  <bio-button variant="primary">Middle</bio-button>
  <bio-button variant="primary">Bottom</bio-button>
</bio-button-group>
```

### Outline Variant

```html
<bio-button-group [outline]="true">
  <bio-button variant="primary">Button 1</bio-button>
  <bio-button variant="primary">Button 2</bio-button>
  <bio-button variant="primary">Button 3</bio-button>
</bio-button-group>
```

### With Size

```html
<bio-button-group size="lg">
  <bio-button variant="primary">Large 1</bio-button>
  <bio-button variant="primary">Large 2</bio-button>
  <bio-button variant="primary">Large 3</bio-button>
</bio-button-group>
```

## API

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `direction` | `ButtonGroupDirection` | `'horizontal'` | Layout direction of the button group |
| `outline` | `boolean` | `false` | Whether buttons should use outline variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of all buttons in the group |

### ButtonGroupDirection Type

```typescript
type ButtonGroupDirection = 'horizontal' | 'vertical';
```

- **horizontal**: Buttons arranged in a row (default)
- **vertical**: Buttons arranged in a column

## Behavior

### Connected Borders
- Buttons are connected with no gaps between them
- Achieved using negative margins (`-1px`)
- Borders overlap to create seamless connection

### Rounded Corners
- Only outer edges have rounded corners
- First button: rounded on left (horizontal) or top (vertical)
- Last button: rounded on right (horizontal) or bottom (vertical)
- Middle buttons: no rounded corners

### Size Consistency
- All buttons in the group automatically use the same size
- Size is applied to all child buttons via `@ContentChildren`

### Outline Variant
- When `outline` is `true`, all buttons use the outline variant
- Original variant is preserved but overridden for visual consistency

## Layouts

### Horizontal
- Buttons arranged left to right
- First button: rounded left corners
- Last button: rounded right corners
- Middle buttons: square corners

### Vertical
- Buttons arranged top to bottom
- First button: rounded top corners
- Last button: rounded bottom corners
- Middle buttons: square corners

## Accessibility

- Uses `role="group"` for semantic grouping
- `aria-label` for screen readers
- Maintains keyboard navigation from individual buttons
- Focus states work correctly with z-index layering

## Design Tokens Used

- `--border-radius-md`: Border radius for outer corners

## Notes

- The component uses `@ContentChildren` to find all ButtonComponent children
- Buttons are automatically styled when added to the group
- The component watches for changes in button children
- Z-index is used to ensure hover/active states appear above adjacent buttons
- All buttons in the group should typically use the same variant for visual consistency

## Examples

### Three Buttons Horizontal

```html
<bio-button-group>
  <bio-button variant="primary">Left</bio-button>
  <bio-button variant="primary">Center</bio-button>
  <bio-button variant="primary">Right</bio-button>
</bio-button-group>
```

### Two Buttons Vertical

```html
<bio-button-group direction="vertical">
  <bio-button variant="secondary">Top</bio-button>
  <bio-button variant="secondary">Bottom</bio-button>
</bio-button-group>
```

### Outline Group

```html
<bio-button-group [outline]="true" size="sm">
  <bio-button variant="primary">Small 1</bio-button>
  <bio-button variant="primary">Small 2</bio-button>
  <bio-button variant="primary">Small 3</bio-button>
</bio-button-group>
```

