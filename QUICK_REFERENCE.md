# 🚀 Bio Design System - Quick Reference

One-page reference for all common tasks and commands.

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Install Angular CLI globally (optional)
npm install -g @angular/cli
```

---

## 🎨 Design Tokens

```bash
# Build tokens from JSON to CSS/TS
npm run tokens:build

# Watch and rebuild tokens on changes
npm run tokens:watch

# Validate token structure
npm run tokens:validate

# Sync tokens with Figma (requires config)
npm run tokens:sync
```

**Tokens Location:** `tokens/*.json` → `src/tokens/generated/`

---

## 🧩 Component Development

```bash
# Run Storybook (development environment)
npm run storybook
# → http://localhost:6006

# Build library for development
npm run build

# Build library for production
npm run build:library

# Build with clean start
npm run build:clean
```

---

## 📚 Storybook Documentation

```bash
# Run Storybook locally
npm run storybook

# Build static Storybook site
npm run build-storybook

# Build tokens + Storybook
npm run docs:build

# Check which components need stories
npm run stories:check

# Generate story templates for all components
npm run stories:generate

# Generate story for specific component
node scripts/generate-stories.js --component=spinner
```

**Output:** `storybook-static/`

---

## 🧪 Testing

```bash
# Run tests once
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --code-coverage

# Run specific test file
npm test -- --include='**/button.component.spec.ts'
```

**Coverage Reports:** `coverage/`

---

## ✅ Code Quality

```bash
# Lint TypeScript and HTML
npm run lint

# Lint with auto-fix
npm run lint -- --fix
```

---

## 📦 Building & Publishing

### Build

```bash
# Development build
npm run build

# Production build
npm run build:library

# Clean build
npm run build:clean

# Verify build output
npm run build:verify
```

### Version Management

```bash
# Increment patch version (0.1.1 → 0.1.2)
npm run version:patch

# Increment minor version (0.1.1 → 0.2.0)
npm run version:minor

# Increment major version (0.1.1 → 1.0.0)
npm run version:major
```

### Publishing

```bash
# Full release workflow (validates + versions + publishes)
npm run release:patch    # For bugfixes
npm run release:minor    # For new features
npm run release:major    # For breaking changes

# Just validate (lint + test + build)
npm run release:validate

# Dry run (simulate publish)
npm run release:dry-run

# Publish to npm directly
npm run publish:npm

# Publish to GitHub Packages
npm run publish:github

# Create local tarball
npm run publish:local
```

---

## 🌐 Deployment

### npm Package

```bash
# Full release (recommended)
npm run release:patch

# Manual publish
npm login
npm publish
```

### Storybook to GitHub Pages

```bash
# Build Storybook
npm run build-storybook

# Deploy (requires gh-pages package)
npm install --save-dev gh-pages
npx gh-pages -d storybook-static
```

**Live at:** `https://madergk.github.io/bio-ds/`

---

## 🔧 Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run build` | Development build |
| `npm run build:library` | Production build |
| `npm run build:clean` | Clean + production build |
| `npm run build:verify` | Verify build output |
| `npm test` | Run tests |
| `npm run lint` | Lint code |
| `npm run tokens:build` | Generate design tokens |
| `npm run tokens:watch` | Watch and rebuild tokens |
| `npm run tokens:validate` | Validate token structure |
| `npm run storybook` | Run Storybook dev server |
| `npm run build-storybook` | Build Storybook static site |
| `npm run docs:build` | Build tokens + Storybook |
| `npm run stories:check` | Check which components need stories |
| `npm run stories:generate` | Generate story templates |
| `npm run release:validate` | Validate before publishing |
| `npm run release:patch` | Release patch version |
| `npm run release:minor` | Release minor version |
| `npm run release:major` | Release major version |
| `npm run release:dry-run` | Simulate npm publish |
| `npm run version:patch` | Increment patch version |
| `npm run version:minor` | Increment minor version |
| `npm run version:major` | Increment major version |
| `npm run publish:npm` | Publish to npm |
| `npm run publish:github` | Publish to GitHub Packages |
| `npm run publish:local` | Create local .tgz file |

---

## 📁 Project Structure

```
bio-ds/
├── src/
│   ├── components/         # Component library
│   │   ├── atoms/         # Basic components
│   │   └── molecules/     # Composite components
│   ├── tokens/            # Generated design tokens
│   └── public-api.ts      # Public exports
├── tokens/                # Token source files (JSON)
├── .storybook/            # Storybook configuration
├── dist/                  # Build output
├── storybook-static/      # Storybook build output
└── scripts/               # Build and utility scripts
```

---

## 🎯 Common Workflows

### Daily Development

```bash
# 1. Start Storybook
npm run storybook

# 2. Make changes to components

# 3. Test changes in Storybook
# → Changes auto-reload

# 4. Commit changes
git add .
git commit -m "feat: add new component"
```

### Adding a New Component

```bash
# 1. Create component files
# src/components/atoms/my-component/
#   ├── my-component.component.ts
#   ├── my-component.component.html
#   ├── my-component.component.scss
#   └── index.ts

# 2. Export in public-api.ts
# export * from './components/atoms/my-component';

# 3. Generate story
npm run stories:generate

# 4. Customize story file
# Edit src/components/atoms/my-component/my-component.stories.ts

# 5. Test in Storybook
npm run storybook

# 6. Build and verify
npm run build:clean
```

### Publishing a New Version

```bash
# 1. Make sure everything works
npm run build:clean
npm test
npm run lint

# 2. Update CHANGELOG.md
# Add your changes to the appropriate section

# 3. Commit changes
git add .
git commit -m "feat: add new features"
git push

# 4. Publish (chooses version type)
npm run release:patch   # For bugfixes
npm run release:minor   # For new features
npm run release:major   # For breaking changes
```

### Deploying Documentation

```bash
# 1. Build Storybook
npm run build-storybook

# 2. Deploy to GitHub Pages
npm install --save-dev gh-pages
npx gh-pages -d storybook-static

# 3. Enable GitHub Pages in repo settings
# Settings → Pages → Source: gh-pages branch
```

---

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear caches
rm -rf node_modules/.cache
rm -rf .angular
rm -rf dist

# Clean install
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Try build again
npm run build:clean
```

### Tests Fail

```bash
# Run in watch mode to see details
npm test -- --watch

# Run with coverage to see what's missing
npm test -- --code-coverage

# Check specific file
npm test -- --include='**/your-component.spec.ts'
```

### Storybook Won't Start

```bash
# Clear Storybook cache
rm -rf node_modules/.cache/storybook

# Reinstall
npm install

# Try again
npm run storybook
```

### Can't Publish to npm

```bash
# Make sure you're logged in
npm login

# Check if version already exists
npm view @madergk/bio-ds

# Increment version
npm run version:patch

# Try publishing again
npm publish
```

---

## 📖 Documentation

- **[README.md](./README.md)** - Project overview
- **[INSTALLATION.md](./INSTALLATION.md)** - How to install and use
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Publishing guide
- **[BUILD_SCRIPTS.md](./BUILD_SCRIPTS.md)** - Build commands explained
- **[STORYBOOK_README.md](./STORYBOOK_README.md)** - Storybook documentation
- **[STORYBOOK_GUIDE.md](./STORYBOOK_GUIDE.md)** - Story writing guide
- **[TESTING.md](./TESTING.md)** - Testing guide
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history

---

## 🔗 Links

- **npm Package:** https://www.npmjs.com/package/@madergk/bio-ds
- **GitHub Repo:** https://github.com/madergk/bio-ds
- **Storybook:** https://madergk.github.io/bio-ds/ (when deployed)

---

**Last Updated:** December 2024
