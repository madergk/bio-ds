# Token Architecture Migration Guide

## 🎯 What Changed?

The design tokens architecture has been refactored to be simpler, more maintainable, and better aligned with Bootstrap conventions.

### Before (Multiple Files)
```
tokens/
├── colors.json
├── spacing.json
├── typography.json
└── border.json
```

### After (Consolidated)
```
tokens/
└── tokens.json  # Single source of truth
```

## ✅ Benefits

1. **Single Source of Truth**: All tokens in one file makes it easier to see the full system
2. **Better Maintainability**: No need to jump between multiple files
3. **Bootstrap Alignment**: Added numeric spacing scale (0-8) matching Bootstrap
4. **New Token Categories**: Added shadow, transition, and zIndex tokens
5. **Simplified Structure**: Cleaner organization and naming

## 🔄 Migration Steps

### For Component Developers

**No changes needed!** The CSS variables generated are identical:

```css
/* Still works exactly the same */
.my-component {
  background-color: var(--color-primary-500);
  padding: var(--spacing-md);
}
```

### For Token Maintainers

If you were editing individual token files, now you edit `tokens/tokens.json`:

**Before:**
```bash
# Edit multiple files
vim tokens/colors.json
vim tokens/spacing.json
```

**After:**
```bash
# Edit one file
vim tokens/tokens.json
```

## 📊 New Token Features

### Numeric Spacing Scale (Bootstrap-like)

You can now use numeric spacing values that match Bootstrap:

```css
/* New: Numeric spacing */
padding: var(--spacing-0);  /* 0 */
padding: var(--spacing-1);  /* 4px */
padding: var(--spacing-2);  /* 8px */
padding: var(--spacing-3);  /* 12px */
padding: var(--spacing-4);  /* 16px */
padding: var(--spacing-5);  /* 24px */
padding: var(--spacing-6);  /* 32px */
padding: var(--spacing-7);  /* 48px */
padding: var(--spacing-8);  /* 64px */

/* Still available: Semantic spacing */
padding: var(--spacing-xs);
padding: var(--spacing-sm);
padding: var(--spacing-md);
/* etc. */
```

### Shadow Tokens

```css
box-shadow: var(--shadow-none);
box-shadow: var(--shadow-sm);
box-shadow: var(--shadow-md);
box-shadow: var(--shadow-lg);
box-shadow: var(--shadow-xl);
```

### Transition Tokens

```css
transition: all var(--transition-duration-normal) var(--transition-timing-ease);
transition: opacity var(--transition-duration-fast) var(--transition-timing-ease-out);
```

### Z-Index Tokens

```css
z-index: var(--z-index-dropdown);
z-index: var(--z-index-modal);
z-index: var(--z-index-tooltip);
```

## 🗑️ Old Token Files

The old individual token files (`colors.json`, `spacing.json`, etc.) are no longer used. They can be safely removed, but are kept for reference during migration.

## 📝 Token Structure Reference

### Color Tokens
```json
{
  "color": {
    "base": { "white": { "value": "#ffffff" } },
    "primary": { "500": { "value": "#2196f3" } },
    "semantic": { "success": { "base": { "value": "#28a745" } } }
  }
}
```

### Spacing Tokens
```json
{
  "spacing": {
    "0": { "value": "0" },
    "1": { "value": "4px" },
    "md": { "value": "16px" }
  }
}
```

## 🔧 Build Process

The build process remains the same:

```bash
npm run tokens:build
```

This generates:
- `src/tokens/generated/variables.css` - CSS variables
- `src/tokens/generated/tokens.json` - JSON for runtime access
- `src/tokens/generated/tokens.ts` - TypeScript types

## ❓ FAQ

**Q: Do I need to update my components?**  
A: No! All CSS variables remain the same. This is a behind-the-scenes refactor.

**Q: Can I still use the old token files?**  
A: No, they're no longer processed. Use `tokens/tokens.json` instead.

**Q: What if I need to add a new token?**  
A: Add it to `tokens/tokens.json` in the appropriate category, then run `npm run tokens:build`.

**Q: Will this break existing code?**  
A: No, the generated CSS variables are identical. This is a non-breaking change.

## 📚 Related Documentation

- [Token README](./README.md)
- [Component Usage](../src/components/README.md)
- [Installation Guide](../INSTALLATION.md)

