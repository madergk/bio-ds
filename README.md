# Bio Design System

Angular component library with Bootstrap styling and CSS Modules.

## 🎯 What is this?

A design system built with Angular that provides reusable components following atomic design principles. This system uses design tokens for consistent styling and CSS Modules for scoped styles.

## 📦 Installation

```bash
npm install @madergk/bio-ds
```

**📖 For detailed installation instructions, see [INSTALLATION.md](./INSTALLATION.md)**

## 🚀 Quick Start

### Import the module

**Option 1: Full Module (Traditional Angular)**
```typescript
import { BioDesignSystemModule } from '@madergk/bio-ds';

@NgModule({
  imports: [BioDesignSystemModule],
  // ...
})
export class AppModule {}
```

**Option 2: Standalone Components (Angular 17+)**
```typescript
import { ButtonComponent } from '@madergk/bio-ds';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  // ...
})
export class MyComponent {}
```

### Import styles

In your `angular.json`:
```json
{
  "styles": [
    "node_modules/@madergk/bio-ds/dist/bio-ds/styles.css"
  ]
}
```

Or in your `styles.css`:
```css
@import '@madergk/bio-ds/styles';
```

## 🏗️ Project Structure

```
bio-ds/
├── src/
│   ├── tokens/          # Design tokens (colors, spacing, typography)
│   ├── components/      # Angular components
│   └── public-api.ts    # Public exports
├── tokens/              # Token source files (JSON)
└── dist/                # Built library output
```

## 🎨 Design Tokens

Design tokens are the foundation of the design system. They define colors, spacing, typography, and other design values.

Build tokens:
```bash
npm run tokens:build
```

Watch for changes:
```bash
npm run tokens:watch
```

## 🧩 Components

Components are organized following atomic design principles:
- **Atoms**: Basic building blocks (Button, Input, Label)
- **Molecules**: Simple combinations (FormField, SearchBar)
- **Organisms**: Complex components (Header, Card, Form)

## 📚 Documentation

- **[Installation Guide](./INSTALLATION.md)** - Complete setup instructions
- **[Deployment Guide](./DEPLOYMENT.md)** - How to publish the design system
- **[Build Scripts](./BUILD_SCRIPTS.md)** - Explanation of all build commands
- **[CHANGELOG](./CHANGELOG.md)** - Version history and changes

### 🎨 Figma Integration

- **[Figma Workflow](./FIGMA_WORKFLOW.md)** - Complete guide to connect Figma with code
- **[Figma GitHub Sync](./FIGMA_GITHUB_SYNC.md)** - Automatic sync with GitHub ⭐
- **[Figma Naming Guide](./FIGMA_NAMING_GUIDE.md)** - Naming conventions for Figma ↔ Code
- **[Figma Handoff Process](./FIGMA_HANDOFF.md)** - Step-by-step handoff process

## 🛠️ Development

### Build library
```bash
npm run build:library
```

### Build with clean
```bash
npm run build:clean
```

### Run tests
```bash
npm test
```

### Lint
```bash
npm run lint
```

### Generate tokens
```bash
npm run tokens:build
```

### Validate tokens
```bash
npm run tokens:validate
```

### Sync tokens with Figma
```bash
npm run tokens:sync
```

**📖 For detailed build script explanations, see [BUILD_SCRIPTS.md](./BUILD_SCRIPTS.md)**  
**🎨 For Figma integration, see [FIGMA_WORKFLOW.md](./FIGMA_WORKFLOW.md)**

## 📦 Publishing

To publish a new version:

```bash
# 1. Update version
npm run version:patch  # or :minor, or :major

# 2. Publish (builds automatically)
npm publish
```

**📖 For complete publishing guide, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

## 📝 License

MIT

