# 📚 Storybook Documentation Guide

Complete guide for documenting Bio Design System components with Storybook.

## 🎯 What is Storybook?

Storybook is an interactive documentation and development environment for UI components. It allows you to:
- **Browse** all components in isolation
- **Test** different states and variations
- **Document** props, events, and usage
- **Share** with designers and stakeholders

## 🚀 Quick Start

### Run Storybook Locally
```bash
npm run storybook
```
Opens at: http://localhost:6006

### Build Static Storybook
```bash
npm run build-storybook
```
Output: `storybook-static/`

### Build Documentation Site
```bash
npm run docs:build
```
Builds tokens + Storybook static site

---

## 📝 Story File Structure

Every component should have a `.stories.ts` file with this structure:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { YourComponent } from './your-component.component';

// 1. Meta Configuration
const meta: Meta<YourComponent> = {
  title: 'Category/ComponentName',  // e.g., 'Atoms/Button'
  component: YourComponent,
  parameters: {
    docs: {
      description: {
        component: 'Component description here',
      },
    },
  },
  tags: ['autodocs'],  // Auto-generates docs
  argTypes: {
    // Define props/inputs here
  },
};

export default meta;
type Story = StoryObj<YourComponent>;

// 2. Default Story
export const Default: Story = {
  args: {
    // Default prop values
  },
};

// 3. Additional Variants
export const Variant1: Story = {
  args: {
    // Different prop values
  },
};
```

---

## 🎨 Story Categories

Organize stories by atomic design level:

- **`Atoms/`** - Basic building blocks (Button, Input, Badge)
- **`Molecules/`** - Simple combinations (Dropdown, Modal, Navbar)
- **`Organisms/`** - Complex components (Header, Card, Form)
- **`Templates/`** - Page layouts
- **`Pages/`** - Full pages

---

## 📖 Documentation Best Practices

### 1. Component Description
```typescript
const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  parameters: {
    docs: {
      description: {
        component: `
          # Button Component

          A reusable button component following atomic design principles.

          ## Features
          - Multiple variants (primary, secondary, outline)
          - Three sizes (sm, md, lg)
          - Disabled state
          - Full TypeScript support

          ## Usage
          \`\`\`typescript
          import { ButtonComponent } from '@madergk/bio-ds';
          \`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};
```

### 2. ArgTypes (Props Documentation)
```typescript
argTypes: {
  variant: {
    control: 'select',
    options: ['primary', 'secondary', 'outline'],
    description: 'Visual style of the button',
    table: {
      type: { summary: 'ButtonVariant' },
      defaultValue: { summary: 'primary' },
      category: 'Appearance',
    },
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the button is disabled',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
      category: 'State',
    },
  },
  click: {
    action: 'clicked',
    description: 'Emitted when button is clicked',
    table: {
      category: 'Events',
    },
  },
}
```

### 3. Story Descriptions
```typescript
/**
 * Primary button - the default and most commonly used variant.
 * Use for main call-to-action buttons.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Click Me',
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary button should be used for the main action on a page.',
      },
    },
  },
};
```

### 4. Complex Stories (Custom Template)
```typescript
export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px;">
        <bio-button size="sm">Small</bio-button>
        <bio-button size="md">Medium</bio-button>
        <bio-button size="lg">Large</bio-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Buttons are available in three sizes to fit different use cases.',
      },
    },
  },
};
```

---

## 🎯 Story Checklist

For each component, create stories for:

- [ ] **Default** - Basic usage with default props
- [ ] **Variants** - All available styles/types
- [ ] **Sizes** - If component has multiple sizes
- [ ] **States** - Disabled, active, hover, error, etc.
- [ ] **Interactive** - Example with user interaction
- [ ] **Kitchen Sink** - All options combined for testing

---

## 📂 Example: Complete Story File

See `src/components/atoms/button/button.stories.ts` for a complete example.

Key sections:
1. ✅ Component meta with title and description
2. ✅ Detailed argTypes for all props
3. ✅ Default story
4. ✅ Multiple variants
5. ✅ Size comparison
6. ✅ Disabled state
7. ✅ All variants showcase

---

## 🔧 Advanced Features

### Add Backgrounds
```typescript
export const OnDarkBackground: Story = {
  args: {
    variant: 'primary',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
};
```

### Add Custom Viewports
```typescript
parameters: {
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: { width: '375px', height: '667px' },
      },
    },
    defaultViewport: 'mobile',
  },
}
```

### Add Actions/Events
```typescript
argTypes: {
  onClick: { action: 'clicked' },
  onChange: { action: 'changed' },
  onFocus: { action: 'focused' },
}
```

---

## 📊 Component Status

### ✅ Fully Documented (5)
- `atoms/button` - Complete with all variants
- `atoms/input` - Complete with validation states
- `atoms/alert` - Complete with all types
- `atoms/badge` - Complete with all variants
- `molecules/modal` - Complete with examples

### 📝 Needs Documentation (25+)
See [DESIGN_SYSTEM_STATUS.md](./DESIGN_SYSTEM_STATUS.md) for full list.

Priority order:
1. **High Priority Atoms** - progress, spinner, tooltip, textarea
2. **High Priority Molecules** - dropdown, navbar, pagination
3. **Remaining Atoms** - placeholder, file-input, search-box
4. **Remaining Molecules** - accordion, breadcrumb, toast

---

## 🚀 Deployment

### Deploy Storybook to GitHub Pages

1. Build static Storybook:
```bash
npm run build-storybook
```

2. Deploy to GitHub Pages:
```bash
# Option 1: Using gh-pages package
npm install --save-dev gh-pages
npx gh-pages -d storybook-static

# Option 2: Manual deploy
git subtree push --prefix storybook-static origin gh-pages
```

3. Enable GitHub Pages in repo settings:
   - Settings → Pages
   - Source: `gh-pages` branch
   - Folder: `/` (root)

Your Storybook will be live at:
`https://madergk.github.io/bio-ds/`

### Deploy to Netlify/Vercel

1. Build: `npm run build-storybook`
2. Publish directory: `storybook-static`
3. Build command: `npm run build-storybook`

---

## 📚 Resources

- [Storybook Docs](https://storybook.js.org/docs)
- [Angular Storybook Guide](https://storybook.js.org/docs/angular/get-started/introduction)
- [MDX Stories](https://storybook.js.org/docs/angular/writing-docs/mdx)
- [Addon Docs](https://storybook.js.org/docs/angular/writing-docs/docs-page)

---

## 🎨 Design Tokens in Stories

Use design tokens in stories for consistency:

```typescript
export const WithTokens: Story = {
  render: () => ({
    template: `
      <div style="padding: var(--spacing-md);
                  background: var(--color-background-subtle);
                  border-radius: var(--border-radius-md);">
        <bio-button variant="primary">Styled with Tokens</bio-button>
      </div>
    `,
  }),
};
```

---

## 💡 Tips

1. **Start Simple** - Begin with basic stories, add complexity later
2. **Use Real Data** - Show realistic examples, not "Lorem ipsum"
3. **Show Context** - Demonstrate how components work together
4. **Explain Usage** - Add descriptions for when to use each variant
5. **Keep Updated** - Update stories when component API changes

---

**Last Updated:** December 2024
**Storybook Version:** 8.6.14
**Maintainer:** Bio Design System Team
