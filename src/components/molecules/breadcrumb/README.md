# Breadcrumb Component

A navigation breadcrumb component for displaying the current page's location within a site hierarchy.

## Overview

The Breadcrumb component is a **molecule** in the atomic design system. It provides a way to show users their current location and allow navigation to parent pages.

## Features

- ✅ Multiple breadcrumb items
- ✅ Optional icons (e.g., home icon)
- ✅ Different separator types (text or icon)
- ✅ Link styling for non-current items
- ✅ Current page indication
- ✅ Accessible with ARIA attributes
- ✅ Uses design tokens for consistency

## Usage

### Basic Breadcrumb

```typescript
import { Component } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItem } from '@madergk/bio-ds';

@Component({
  selector: 'app-example',
  imports: [BreadcrumbComponent],
  template: `
    <bio-breadcrumb [items]="breadcrumbItems"></bio-breadcrumb>
  `
})
export class ExampleComponent {
  breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', url: '/', icon: 'home' },
    { label: 'Item 1', url: '/item1' },
    { label: 'Page now' }
  ];
}
```

### With Text Separator

```html
<bio-breadcrumb 
  [items]="breadcrumbItems"
  separator="text"
  separatorText="/">
</bio-breadcrumb>
```

### With Icon Separator

```html
<bio-breadcrumb 
  [items]="breadcrumbItems"
  separator="icon">
</bio-breadcrumb>
```

### Custom Separator Text

```html
<bio-breadcrumb 
  [items]="breadcrumbItems"
  separator="text"
  separatorText=">">
</bio-breadcrumb>
```

## API

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | `[]` | Array of breadcrumb items |
| `separator` | `BreadcrumbSeparator` | `'text'` | Separator type between items |
| `separatorText` | `string` | `'/'` | Separator text (only used when separator is 'text') |

### BreadcrumbItem Interface

```typescript
interface BreadcrumbItem {
  label: string;    // Text displayed for the item
  url?: string;     // Optional URL (if not provided, item is treated as current)
  icon?: string;    // Optional icon name (e.g., 'home')
}
```

### BreadcrumbSeparator Type

```typescript
type BreadcrumbSeparator = 'text' | 'icon';
```

- **text**: Text separator (uses `separatorText` value, default: "/")
- **icon**: Icon separator (chevron/arrow icon)

## Behavior

### Current Item
The last item in the array is automatically treated as the current page:
- No link styling (plain text)
- Gray color (#4b5763)
- No underline

### Link Items
All items except the last one are treated as links if they have a `url`:
- Red color (#e20039)
- Underlined
- Hover effect
- Clickable

### Icons
- Currently supports 'home' icon
- Icons are displayed in gray (#4b5763)
- Icons appear before the item text

## Variants

### Separator Types

- **Text Separator**: Uses text character (default: "/", can be ">", "›", etc.)
- **Icon Separator**: Uses a chevron/arrow icon

### Common Separator Texts

- `/` - Forward slash (default)
- `>` - Greater than
- `›` - Right-pointing single angle quotation mark

## Accessibility

- Uses semantic HTML (`<nav>`, `<ol>`, `<li>`)
- `aria-label="Breadcrumb"` on nav element
- Proper link semantics for non-current items
- Icons have `aria-hidden="true"`

## Design Tokens Used

- `--spacing-xs`, `--spacing-md`: Spacing values
- `--typography-font-family-primary`: Font family
- `--typography-font-size-base`: Font size
- `--typography-font-weight-normal`: Font weight
- `--typography-line-height-normal`: Line height

## Colors

- **Link color**: #e20039 (Primary red)
- **Link hover**: #c2002f (Slightly darker red)
- **Current item text**: #4b5763 (Secondary gray)
- **Icon color**: #4b5763 (Secondary gray)
- **Separator color**: #4b5763 (Secondary gray)

## Notes

- The component automatically treats the last item as the current page
- Items without a `url` are rendered as plain text (not links)
- The separator is not shown after the last item
- Icons are optional and currently only 'home' is supported
- The component uses flexbox for layout and supports wrapping on smaller screens

