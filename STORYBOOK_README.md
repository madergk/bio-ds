# 📚 Storybook Documentation System

Complete documentation system for Bio Design System components using Storybook.

## 🚀 Quick Start

### View Storybook Locally

```bash
npm run storybook
```

Opens at http://localhost:6006

### Generate Missing Stories

```bash
# Check which components need stories
npm run stories:check

# Generate story templates for all components without them
npm run stories:generate

# Generate story for specific component
node scripts/generate-stories.js --component=spinner
```

### Build Documentation Site

```bash
# Build Storybook as static site
npm run build-storybook

# Build everything (tokens + storybook)
npm run docs:build
```

Output: `storybook-static/` directory

---

## 📊 Current Status

### ✅ Components with Stories (5/30+)

**Atoms:**
- ✅ Button - Complete with all variants and sizes
- ✅ Input - Complete with validation states
- ✅ Alert - Complete with all types
- ✅ Badge - Complete with all variants

**Molecules:**
- ✅ Modal - Complete with examples

### 📝 Components Needing Stories (25+)

**High Priority Atoms:**
- [ ] Progress
- [ ] Spinner
- [ ] Tooltip
- [ ] Textarea
- [ ] Password Input
- [ ] File Input
- [ ] Search Box

**High Priority Molecules:**
- [ ] Dropdown
- [ ] Dropdown Menu
- [ ] Dropdown Trigger
- [ ] Navbar (+ sub-components)
- [ ] Pagination
- [ ] Accordion
- [ ] Breadcrumb
- [ ] Toast
- [ ] Popover
- [ ] Offcanvas
- [ ] Button Group
- [ ] List Group

---

## 🎯 How to Document a Component

### Step 1: Generate Story Template

```bash
# For a specific component (e.g., spinner)
node scripts/generate-stories.js --component=spinner
```

This creates: `src/components/atoms/spinner/spinner.stories.ts`

### Step 2: Customize the Story

Open the generated file and update:

1. **Component Description** - What it does, when to use it
2. **ArgTypes** - Document all props/inputs
3. **Stories** - Add all variants and states
4. **Examples** - Show real usage

### Step 3: Test in Storybook

```bash
npm run storybook
```

Navigate to your component and verify:
- ✅ All variants display correctly
- ✅ Props are interactive in controls panel
- ✅ Documentation is clear and helpful
- ✅ Examples are realistic

---

## 📖 Story Template Explained

Every story file has this structure:

```typescript
// 1. Imports
import type { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';

// 2. Meta Configuration
const meta: Meta<SpinnerComponent> = {
  title: 'Atoms/Spinner',                    // Category/Name
  component: SpinnerComponent,                // The component
  tags: ['autodocs'],                         // Auto-generate docs
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the spinner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<SpinnerComponent>;

// 3. Stories (Variants)
export const Default: Story = {
  args: {
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
```

---

## 🎨 Best Practices

### 1. Show All Variants

Create a story for each major variant:

```typescript
export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Danger: Story = { args: { variant: 'danger' } };
```

### 2. Show All States

Create stories for different states:

```typescript
export const Default: Story = { args: { disabled: false } };
export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };
export const Error: Story = { args: { error: 'Error message' } };
```

### 3. Show Size Comparisons

Use custom templates for side-by-side comparisons:

```typescript
export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <bio-spinner size="sm"></bio-spinner>
        <bio-spinner size="md"></bio-spinner>
        <bio-spinner size="lg"></bio-spinner>
      </div>
    `,
  }),
};
```

### 4. Add Helpful Descriptions

```typescript
/**
 * The primary variant should be used for main call-to-action buttons.
 * It has the highest visual prominence.
 */
export const Primary: Story = {
  args: { variant: 'primary' },
  parameters: {
    docs: {
      description: {
        story: 'Use primary buttons for the main action on a page.',
      },
    },
  },
};
```

### 5. Use Real Examples

```typescript
export const RealWorld: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px;">
        <h3>User Profile</h3>
        <bio-input label="Full Name" value="John Doe"></bio-input>
        <bio-input label="Email" value="john@example.com" type="email"></bio-input>
        <bio-button variant="primary">Save Changes</bio-button>
      </div>
    `,
  }),
};
```

---

## 📚 Complete Example

See **`src/components/atoms/button/button.stories.ts`** for a complete, production-ready example that includes:

- ✅ Comprehensive component description
- ✅ Detailed argTypes for all props
- ✅ All variants (Primary, Secondary, Outline, Text, Danger)
- ✅ All sizes (Small, Medium, Large)
- ✅ Disabled states
- ✅ Side-by-side comparisons
- ✅ Real-world usage examples
- ✅ Helpful descriptions for each story

Copy this pattern for your components!

---

## 🚀 Deployment

### Deploy to GitHub Pages

1. Build Storybook:
```bash
npm run build-storybook
```

2. Add deployment script to package.json:
```json
{
  "scripts": {
    "deploy-storybook": "npm run build-storybook && npx gh-pages -d storybook-static"
  }
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Deploy:
```bash
npm run deploy-storybook
```

5. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Your Storybook will be live at: `https://madergk.github.io/bio-ds/`

### Deploy to Netlify

1. Connect your GitHub repo to Netlify
2. Build command: `npm run build-storybook`
3. Publish directory: `storybook-static`
4. Deploy!

### Deploy to Vercel

1. Connect your GitHub repo to Vercel
2. Framework Preset: Other
3. Build command: `npm run build-storybook`
4. Output directory: `storybook-static`
5. Deploy!

---

## 📊 Workflow

### For New Components

1. Create the component
2. Write the component code
3. Run: `npm run stories:generate` or manually create `.stories.ts`
4. Customize the story with real props and variants
5. Test in Storybook locally
6. Commit both component and story

### For Existing Components

1. Run: `npm run stories:check` to see what's missing
2. Run: `npm run stories:generate` to create templates
3. Customize each generated story
4. Test in Storybook
5. Commit the stories

### For Updates

1. Update component code
2. Update corresponding story
3. Test in Storybook
4. Commit changes

---

## 🎯 Goals

### Short Term
- [ ] Generate stories for all atom components
- [ ] Generate stories for all molecule components
- [ ] Customize generated stories with real data
- [ ] Add usage examples for each component

### Medium Term
- [ ] Add MDX documentation pages
- [ ] Add design token showcase
- [ ] Add component playground
- [ ] Deploy to GitHub Pages

### Long Term
- [ ] Add visual regression testing
- [ ] Add accessibility audits in stories
- [ ] Add interaction testing
- [ ] Auto-generate stories from TypeScript types

---

## 🔧 Troubleshooting

### Storybook doesn't start

```bash
# Clear cache and reinstall
rm -rf node_modules/.cache
npm install
npm run storybook
```

### Component not showing

- Check that component is exported in `index.ts`
- Check that story file name matches: `component-name.stories.ts`
- Check console for errors

### Props not interactive

- Verify argTypes are defined correctly
- Use proper control types: `select`, `boolean`, `text`, etc.
- Check that prop names match component inputs

---

## 📖 Resources

- **Storybook Docs**: https://storybook.js.org/docs
- **Angular + Storybook**: https://storybook.js.org/docs/angular
- **Best Practices**: [STORYBOOK_GUIDE.md](./STORYBOOK_GUIDE.md)
- **Component Status**: [DESIGN_SYSTEM_STATUS.md](./DESIGN_SYSTEM_STATUS.md)

---

## 💡 Pro Tips

1. **Use the Controls Panel** - Test all prop combinations interactively
2. **Use Backgrounds Addon** - Test components on different backgrounds
3. **Use Viewport Addon** - Test responsive behavior
4. **Document Edge Cases** - Show what happens with empty/long/special values
5. **Keep Stories Updated** - Update stories when component APIs change

---

**Need help?** See [STORYBOOK_GUIDE.md](./STORYBOOK_GUIDE.md) for detailed documentation best practices.

**Last Updated:** December 2024
