# Components

This directory contains all Angular components for the design system.

## Structure

Components are organized following atomic design principles:

```
components/
├── atoms/          # Basic building blocks
│   ├── button/
│   ├── input/
│   └── label/
├── molecules/      # Simple combinations
│   ├── form-field/
│   └── search-bar/
└── organisms/      # Complex components
    ├── header/
    └── card/
```

## Component Structure

Each component should follow this structure:

```
component-name/
├── component-name.component.ts      # Component logic
├── component-name.component.html    # Template
├── component-name.component.css     # Styles (CSS Modules)
├── component-name.component.spec.ts # Tests
└── index.ts                         # Public exports
```

## Creating a New Component

1. Create the component folder in the appropriate atomic level
2. Generate component files using Angular CLI or manually
3. Export the component from `index.ts`
4. Add to `BioDesignSystemModule` exports
5. Export from `src/public-api.ts`

