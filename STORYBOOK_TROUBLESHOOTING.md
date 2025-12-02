# Storybook Troubleshooting Guide

## Current Issue: Webpack Compilation Error

### Error Message
```
SB_BUILDER-WEBPACK5_0003 (WebpackCompilationError): There were problems when compiling your code with Webpack.
```

### What Was Done to Fix It

1. **Updated `.storybook/main.ts`** with:
   - Enabled Ivy compiler explicitly
   - Disabled TypeScript checking during Storybook build
   - Added webpack customization for CSS handling
   - Disabled telemetry

2. **Configuration changes**:
   - Set `enableIvy: true` - ensures Angular Ivy compiler is used
   - Set `typescript.check: false` - skips strict type checking during build
   - Added `webpackFinal` hook - handles CSS imports properly

### Next Steps to Debug

#### Step 1: Run with Debug Mode

```bash
npm run storybook -- --debug-webpack
```

This will show the exact webpack error. Look for:
- Module resolution errors
- CSS loading errors
- TypeScript compilation errors
- Missing dependencies

#### Step 2: Clear Caches

```bash
# Clear Storybook cache
rm -rf node_modules/.cache

# Clear Angular cache
rm -rf .angular

# Restart Storybook
npm run storybook
```

#### Step 3: Check for Common Issues

**A. CSS Import Issue**

The error might be related to the CSS import in `.storybook/preview.ts`:

```typescript
import '../src/styles/index.css';
```

**Solution**: Comment it out temporarily and see if Storybook starts:

```typescript
// import '../src/styles/index.css';
```

If it works, the issue is CSS-related. You can then:
1. Import CSS in individual story files instead
2. Or fix the webpack CSS loader configuration

**B. TypeScript Strict Mode**

Angular 17 has strict TypeScript settings that might conflict with Storybook.

**Solution**: Check `.storybook/tsconfig.json` and ensure it's not too strict:

```json
{
  "extends": "../tsconfig.lib.json",
  "compilerOptions": {
    "types": ["node"],
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": false
  },
  "exclude": ["../src/test.ts", "../src/**/*.spec.ts"],
  "include": ["../src/**/*.stories.*", "./preview.ts"],
  "files": ["./typings.d.ts"]
}
```

**C. Module Type Issue**

The `package.json` has `"type": "module"` which can cause CommonJS conflicts.

**Solution**: Temporarily remove it or add `.cjs` extension handling.

#### Step 4: Verify Story Files

Check if any story file has syntax errors:

```bash
# Check for TypeScript errors in story files
npx tsc --noEmit src/**/*.stories.ts
```

#### Step 5: Minimal Test

Create a minimal story to test if basic Storybook works:

Create `src/test.stories.ts`:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Test/Basic',
};

export default meta;

export const Default: StoryObj = {
  render: () => ({
    template: `<div>Hello Storybook</div>`,
  }),
};
```

If this works, the issue is in one of the component stories.

### Common Solutions

#### Solution 1: Disable TypeScript Checking (Quick Fix)

Edit `.storybook/main.ts`:

```typescript
typescript: {
  check: false, // ✅ Already applied
  reactDocgen: false
}
```

#### Solution 2: Update Storybook Angular Builder

Sometimes the Angular builder needs updating:

```bash
npm install --save-dev @storybook/angular@latest
npm install --save-dev @storybook/addon-essentials@latest
```

#### Solution 3: Check Angular.json

Make sure `angular.json` has the Storybook builder configured:

```json
{
  "projects": {
    "bio-ds": {
      "architect": {
        "storybook": {
          "builder": "@storybook/angular:start-storybook",
          "options": {
            "configDir": ".storybook",
            "browserTarget": "bio-ds:build",
            "compodoc": false
          }
        }
      }
    }
  }
}
```

#### Solution 4: Component Import Issues

Check if any component used in stories has circular dependencies or missing exports.

```bash
# Search for potential circular dependencies
npx madge --circular --extensions ts src/
```

### Debugging Commands

```bash
# 1. Check Storybook version
npm list @storybook/angular

# 2. Verify all Storybook packages are the same version
npm list | grep storybook

# 3. Check for peer dependency warnings
npm install --legacy-peer-deps

# 4. Run with maximum verbosity
npm run storybook -- --debug-webpack --loglevel verbose

# 5. Check Angular build works
npm run build:clean
```

### Expected Working Configuration

After fixes, you should see:

```bash
$ npm run storybook

> @madergk/bio-ds@0.1.2 storybook
> ng run bio-ds:storybook

╭──────────────────────────────────────────────────╮
│                                                  │
│   Storybook 8.6.14 for angular started          │
│   2.1 s for preview                              │
│                                                  │
│    Local:            http://localhost:6006/      │
│    On your network:  http://192.168.x.x:6006/   │
│                                                  │
╰──────────────────────────────────────────────────╯
```

### If Nothing Works

As a last resort:

1. **Reinstall Storybook from scratch**:

```bash
# Remove Storybook
npm uninstall @storybook/angular @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-onboarding @storybook/blocks @storybook/test storybook

# Remove .storybook directory (backup first!)
mv .storybook .storybook.backup

# Reinstall
npx storybook@latest init
```

2. **Check Storybook compatibility with Angular 17**:

Visit: https://storybook.js.org/docs/angular/get-started/install

Make sure you're using compatible versions:
- Angular 17.x → Storybook 7.x or 8.x
- Check their compatibility matrix

### Get More Help

If you continue having issues:

1. Run `npm run storybook -- --debug-webpack` and share the full error output
2. Check Storybook Discord: https://discord.gg/storybook
3. Search GitHub issues: https://github.com/storybookjs/storybook/issues

---

**Last Updated**: December 2024
**Storybook Version**: 8.6.14
**Angular Version**: 17.3.12
