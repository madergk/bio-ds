# Storybook Configuration

This directory contains the Storybook configuration for the Bio Design System.

## Files

- **main.ts**: Main Storybook configuration file
  - Defines which stories to load
  - Configures addons
  - Sets up the Angular framework

- **preview.ts**: Preview configuration
  - Imports global styles (design tokens)
  - Configures default parameters
  - Sets up backgrounds and controls

## Usage

### Start Storybook
```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

### Build Storybook
```bash
npm run build-storybook
```

This creates a static build in the `storybook-static` directory that can be deployed.

### Build Documentation
```bash
npm run docs:build
```

This builds tokens and Storybook together for complete documentation.

## Adding New Stories

Create a `.stories.ts` file next to your component:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { YourComponent } from './your.component';

const meta: Meta<YourComponent> = {
  title: 'Category/ComponentName',
  component: YourComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<YourComponent>;

export const Default: Story = {
  args: {
    // component props
  },
};
```

## Documentation

Storybook automatically generates documentation from:
- Component JSDoc comments
- TypeScript types
- Story descriptions
- Args table (auto-generated from component props)

