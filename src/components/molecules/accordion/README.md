# Accordion Component

A collapsible accordion component that displays a list of items with expandable content sections.

## Overview

The Accordion component is a **molecule** in the atomic design system. It allows users to expand and collapse content sections, making it ideal for organizing information in a compact space.

## Features

- ✅ Expandable/collapsible items
- ✅ Single or multiple expansion modes
- ✅ Flush variant (no borders between items)
- ✅ Accessible with ARIA attributes
- ✅ Smooth animations
- ✅ Uses design tokens for consistency

## Usage

### Basic Example

```typescript
import { Component } from '@angular/core';
import { AccordionComponent, AccordionItem } from '@madergk/bio-ds';

@Component({
  selector: 'app-example',
  imports: [AccordionComponent],
  template: `
    <bio-accordion [items]="accordionItems"></bio-accordion>
  `
})
export class ExampleComponent {
  accordionItems: AccordionItem[] = [
    {
      title: 'Accordion Item 1',
      content: 'This is the content for the first accordion item.'
    },
    {
      title: 'Accordion Item 2',
      content: 'This is the content for the second accordion item.'
    },
    {
      title: 'Accordion Item 3',
      content: 'This is the content for the third accordion item.'
    }
  ];
}
```

### With Multiple Expansion

```html
<bio-accordion 
  [items]="accordionItems"
  [allowMultiple]="true">
</bio-accordion>
```

### Flush Variant

```html
<bio-accordion 
  [items]="accordionItems"
  [flush]="true">
</bio-accordion>
```

## API

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `AccordionItem[]` | `[]` | Array of accordion items to display |
| `flush` | `boolean` | `false` | Whether to use flush variant (no borders between items) |
| `allowMultiple` | `boolean` | `false` | Whether multiple items can be expanded simultaneously |

### AccordionItem Interface

```typescript
interface AccordionItem {
  title: string;           // Header text
  content: string | any;    // Body content (string or template)
  expanded?: boolean;      // Initial expanded state (optional)
}
```

## Variants

### Default (Non-Flush)
Items have borders between them, creating a clear separation. First item has rounded top corners, last item has rounded bottom corners.

### Flush
Items have no borders between them, creating a seamless appearance. All items have borders only on the outer edges.

## States

- **Collapsed**: Header is white, text is gray (#4b5763), chevron points down
- **Expanded**: Header is light blue (#cfe2ff), text is dark blue (#052c65), chevron points up

## Accessibility

- Uses semantic HTML (`<button>` elements)
- ARIA attributes for screen readers (`aria-expanded`, `aria-controls`, `aria-labelledby`)
- Keyboard navigation support
- Focus indicators for keyboard users

## Design Tokens Used

- `--color-base-white`: Background colors
- `--spacing-md`: Padding values
- `--typography-font-family-primary`: Font family
- `--typography-font-size-base`: Font size
- `--typography-font-weight-normal`: Font weight
- `--typography-line-height-normal`: Line height
- `--border-width-thin`: Border width

## Notes

- The component uses a Set internally to track expanded items for efficient lookups
- When `allowMultiple` is `false`, opening one item automatically closes others (standard accordion behavior)
- Content can be a string or Angular template content for flexibility

