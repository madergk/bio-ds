# Fix: Storybook CSS @import Error

## 🔴 Problema

Storybook no podía procesar los `@import` anidados en CSS, generando este error:

```
ERROR in ./src/styles/index.css 16:0
Module parse failed: Unexpected character '@' (16:0)
You may need an appropriate loader to handle this file type
```

## ✅ Solución Implementada

### 1. Cambio en `.storybook/preview.ts`

**Antes** (usando @import anidados):
```typescript
import '../src/styles/index.css'; // Esto causaba el error
```

**Después** (importando archivos directamente):
```typescript
// Import order is critical - must match the order in index.css
// 1. Design tokens (source of truth)
import '../src/tokens/generated/variables.css';
// 2. Bootstrap-compatible variables
import '../src/styles/bootstrap-variables.css';
// 3. Bootstrap reboot (base styles)
import '../src/styles/bootstrap-reboot.css';
// 4. Bootstrap utilities (utility classes)
import '../src/styles/bootstrap-utilities.css';
```

**¿Por qué funciona?**
- Webpack procesa mejor los imports directos de TypeScript/JavaScript
- Evita problemas con @import anidados en CSS
- Mantiene el mismo orden de carga que `index.css`

### 2. Actualización de `.storybook/main.ts`

Se actualizó la configuración de Webpack para asegurar que `css-loader` procese `@import` si es necesario:

```typescript
webpackFinal: async (config: any) => {
  // Ensure CSS files are handled properly
  config.module.rules.forEach((rule: any) => {
    if (rule.test && rule.test.toString().includes('css')) {
      // Ensure css-loader processes @import statements
      if (rule.use) {
        rule.use = rule.use.map((loader: any) => {
          if (loader.includes('css-loader')) {
            return {
              loader: 'css-loader',
              options: {
                import: true, // Process @import statements
                esModule: false,
              },
            };
          }
          return loader;
        });
      }
    }
  });
  return config;
}
```

## 🎯 Resultado

- ✅ Storybook puede cargar todos los estilos
- ✅ Variables CSS disponibles
- ✅ Clases de utilidad funcionando
- ✅ Estilos base aplicados

## 📝 Notas Importantes

1. **Orden de Importación**: El orden en `preview.ts` debe coincidir con `index.css`
2. **Tokens Generados**: Asegúrate de ejecutar `npm run tokens:build` antes de iniciar Storybook
3. **Consistencia**: Los estilos se cargan igual en Storybook que en la aplicación Angular

## 🚀 Uso

Ahora puedes ejecutar Storybook sin problemas:

```bash
npm run storybook
```

Todos los estilos estarán disponibles:
- Variables CSS: `var(--bs-primary)`, `var(--bs-spacer-4)`, etc.
- Clases de utilidad: `.p-4`, `.bg-primary`, `.text-white`, etc.
- Estilos base: tipografía, links, formularios, etc.

## 🔄 Si Necesitas Agregar Más Estilos

Simplemente agrega el import en `.storybook/preview.ts`:

```typescript
import '../src/styles/tu-nuevo-archivo.css';
```

Mantén el orden lógico (tokens primero, luego variables, luego estilos).

