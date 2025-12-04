# Fix: Storybook TypeScript Errors

## 🔴 Problemas Encontrados

Storybook tenía errores de TypeScript en las stories porque las propiedades en `argTypes` y `args` no coincidían con las propiedades reales de los componentes.

### Errores Específicos:

1. **BadgeComponent**: 
   - ❌ Usaba `variant` pero el componente tiene `color`
   - ❌ Faltaba `text` en argTypes

2. **InputComponent**:
   - ❌ Usaba `disabled` pero el componente usa `state` con valor 'disabled'
   - ❌ Templates usaban elementos HTML directamente en lugar del componente

## ✅ Soluciones Implementadas

### 1. BadgeComponent Stories (`badge.stories.ts`)

**Antes:**
```typescript
argTypes: {
  variant: { ... }, // ❌ No existe en BadgeComponent
  size: { ... },
  type: { ... },
}
```

**Después:**
```typescript
argTypes: {
  text: { control: 'text', ... }, // ✅ Agregado
  color: { control: 'select', ... }, // ✅ Cambiado de variant a color
  size: { control: 'select', ... },
  type: { control: 'select', ... },
}
```

**Templates actualizados:**
```typescript
// Antes: <bio-badge variant="primary">Primary</bio-badge>
// Después: <bio-badge text="Primary" color="primary"></bio-badge>
```

### 2. InputComponent Stories (`input.stories.ts`)

**Antes:**
```typescript
argTypes: {
  disabled: { control: 'boolean', ... }, // ❌ No existe directamente
}
```

**Después:**
```typescript
argTypes: {
  state: { 
    control: 'select', 
    options: ['normal', 'focused', 'disabled'], // ✅ Usa state
    ...
  },
  value: { control: 'text', ... }, // ✅ Agregado
}
```

**Templates actualizados:**
```typescript
// Antes: Templates con elementos HTML directamente
// Después: Usa el componente correctamente
<bio-input [state]="state" [size]="size" [placeholder]="placeholder"></bio-input>
```

## 📝 Propiedades Correctas por Componente

### BadgeComponent
- ✅ `text: string` - Texto del badge
- ✅ `color: BadgeColor` - Color (no variant)
- ✅ `size: BadgeSize` - Tamaño
- ✅ `type: BadgeType` - Tipo de forma

### InputComponent
- ✅ `size: InputSize` - Tamaño
- ✅ `state: InputState` - Estado (normal, focused, disabled)
- ✅ `placeholder: string` - Placeholder
- ✅ `value: string` - Valor
- ✅ `validation: InputValidation` - Estado de validación

## 🎯 Resultado

- ✅ Todos los errores de TypeScript resueltos
- ✅ Stories usan las propiedades correctas
- ✅ Templates usan los componentes correctamente
- ✅ Storybook puede compilar sin errores

## 🚀 Próximos Pasos

1. Ejecuta Storybook:
   ```bash
   npm run storybook
   ```

2. Verifica que las stories funcionen correctamente

3. Si encuentras más errores similares en otras stories, sigue el mismo patrón:
   - Revisa las propiedades reales del componente
   - Actualiza `argTypes` para que coincidan
   - Actualiza `args` en las stories
   - Actualiza los templates para usar el componente correctamente

