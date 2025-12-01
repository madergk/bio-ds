# Badge Component

A flexible badge component for displaying labels, status indicators, or small pieces of information.

## Overview

The Badge component is an **atom** in the atomic design system. It provides a compact way to display labels, statuses, or counts with various visual styles.

## Features

- ✅ Multiple sizes (H6 to H1, or dot)
- ✅ Multiple color variants (8 variants)
- ✅ Three types (normal, pill, dot)
- ✅ Uses design tokens for consistency

## Usage

### Basic Badge

```typescript
import { Component } from '@angular/core';
import { BadgeComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-example',
  imports: [BadgeComponent],
  template: `
    <bio-badge text="Primary"></bio-badge>
  `
})
export class ExampleComponent {}
```

### Different Sizes

```html
<bio-badge text="H6" size="H6"></bio-badge>
<bio-badge text="H5" size="H5"></bio-badge>
<bio-badge text="H4" size="H4"></bio-badge>
<bio-badge text="H3" size="H3"></bio-badge>
<bio-badge text="H2" size="H2"></bio-badge>
<bio-badge text="H1" size="H1"></bio-badge>
```

### Color Variants

```html
<bio-badge text="Primary" color="primary"></bio-badge>
<bio-badge text="Secondary" color="secondary"></bio-badge>
<bio-badge text="Success" color="success"></bio-badge>
<bio-badge text="Danger" color="danger"></bio-badge>
<bio-badge text="Warning" color="warning"></bio-badge>
<bio-badge text="Info" color="info"></bio-badge>
<bio-badge text="Light" color="light"></bio-badge>
<bio-badge text="Dark" color="dark"></bio-badge>
```

### Pill Type

```html
<bio-badge text="Pill Badge" type="pill" color="primary"></bio-badge>
```

### Dot Type

```html
<bio-badge type="dot" color="primary"></bio-badge>
```

## API

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | `string` | `'Primary'` | Badge text content (not used for dot type) |
| `size` | `BadgeSize` | `'H6'` | Size of the badge |
| `color` | `BadgeColor` | `'primary'` | Color variant |
| `type` | `BadgeType` | `'normal'` | Type/shape of the badge |

### BadgeSize Type

```typescript
type BadgeSize = 'H6' | 'H5' | 'H4' | 'H3' | 'H2' | 'H1' | '-';
```

- **H6**: Smallest (12px font, 4.2px/7.8px padding)
- **H5**: Small (15px font, 5.25px/9.75px padding)
- **H4**: Medium (18px font, 6.3px/11.7px padding)
- **H3**: Large (21px font, 7.35px/13.65px padding)
- **H2**: Extra Large (24px font, 8.4px/15.6px padding)
- **H1**: Largest (30px font, 10.5px/19.5px padding)
- **'-'**: Dot type only (no text, 16px circle)

### BadgeColor Type

```typescript
type BadgeColor = 
  | 'primary'    // Red (#e20039)
  | 'secondary'  // Gray (#4b5763)
  | 'success'    // Green (#198754)
  | 'danger'     // Red (#dc3545)
  | 'warning'    // Yellow (#ffc107)
  | 'info'       // Cyan (#0dcaf0)
  | 'light'      // Light gray (#f8f9fa)
  | 'dark';      // Dark gray (#303b47)
```

### BadgeType Type

```typescript
type BadgeType = 'normal' | 'pill' | 'dot';
```

- **normal**: Rounded corners (6px border-radius)
- **pill**: Fully rounded (100px border-radius)
- **dot**: Just a circle, no text (only works with size '-')

## Variants

### Colors

Each color variant has specific background and text colors:

- **Primary**: Red background (#e20039), white text
- **Secondary**: Gray background (#4b5763), white text
- **Success**: Green background (#198754), white text
- **Danger**: Red background (#dc3545), white text
- **Warning**: Yellow background (#ffc107), dark gray text (#4b5763)
- **Info**: Cyan background (#0dcaf0), dark gray text (#4b5763)
- **Light**: Light gray background (#f8f9fa), dark gray text (#4b5763)
- **Dark**: Dark gray background (#303b47), white text

### Types

- **Normal**: Standard rounded rectangle with 6px border-radius
- **Pill**: Fully rounded with 100px border-radius (pill-shaped)
- **Dot**: Small 16px circle, no text (useful for status indicators)

## Design Tokens Used

- `--typography-font-family-primary`: Font family
- `--typography-font-weight-bold`: Font weight
- `--color-base-white`: White color for text

## Notes

- The dot type ignores the `text` and `size` inputs (except size must be '-' for dot)
- Warning and info variants use dark gray text for better contrast on light backgrounds
- All other variants use white text on colored backgrounds
- The component uses `white-space: nowrap` to prevent text wrapping

