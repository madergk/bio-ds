# ✅ Verificación de Compatibilidad: Storybook

## Estado: **COMPATIBLE** ✓

Storybook está completamente compatible con el nuevo sistema de estilos Bootstrap-compatible.

## 🔍 Verificaciones Realizadas

### ✅ 1. Archivos de Estilos Existen
- ✓ `src/styles/index.css` - Punto de entrada principal
- ✓ `src/styles/bootstrap-variables.css` - Variables Bootstrap-compatibles
- ✓ `src/styles/bootstrap-reboot.css` - Estilos base
- ✓ `src/styles/bootstrap-utilities.css` - Utilidades
- ✓ `src/tokens/generated/variables.css` - Tokens generados

### ✅ 2. Configuración de Storybook

**Archivo**: `.storybook/main.ts`
- ✓ Webpack configurado para manejar CSS
- ✓ Angular Ivy habilitado
- ✓ TypeScript checking deshabilitado (para evitar errores estrictos)

**Archivo**: `.storybook/preview.ts`
- ✓ Import de estilos habilitado: `import '../src/styles/index.css'`
- ✓ Configuración de backgrounds usando tokens
- ✓ Parámetros de documentación configurados

### ✅ 3. Orden de Importación Correcto

El archivo `src/styles/index.css` importa en el orden correcto:
1. Tokens generados (`variables.css`)
2. Variables Bootstrap (`bootstrap-variables.css`)
3. Reboot (`bootstrap-reboot.css`)
4. Utilidades (`bootstrap-utilities.css`)

## 🚀 Cómo Usar en Storybook

### Ejecutar Storybook

```bash
npm run storybook
```

Esto iniciará Storybook en `http://localhost:6006` con todos los estilos cargados.

### Los Estilos Están Disponibles

Una vez que Storybook esté ejecutándose, tendrás acceso a:

1. **Variables CSS** - Usables en tus stories:
   ```css
   .my-story {
     background-color: var(--bs-primary);
     padding: var(--bs-spacer-4);
   }
   ```

2. **Clases de Utilidad** - Usables directamente en templates:
   ```html
   <div class="p-4 bg-primary text-white rounded">
     Contenido de prueba
   </div>
   ```

3. **Estilos Base** - Tipografía, links, formularios, etc. aplicados automáticamente

## 📝 Ejemplo de Story con Estilos

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div class="p-4">
        <bio-button variant="primary" size="md">
          Botón con Estilos
        </bio-button>
      </div>
    `,
  }),
};

export const WithUtilities: Story = {
  render: () => ({
    template: `
      <div class="p-4 bg-light rounded shadow-sm">
        <h2 class="fs-3 text-primary mb-3">Título</h2>
        <p class="text-muted mb-4">Descripción usando utilidades Bootstrap</p>
        <bio-button variant="primary">Acción</bio-button>
      </div>
    `,
  }),
};
```

## 🎨 Personalización en Storybook

### Cambiar Tokens

1. Edita `tokens/tokens.json`
2. Regenera: `npm run tokens:build`
3. Reinicia Storybook: Los cambios se reflejarán automáticamente

### Agregar Estilos Personalizados

Puedes agregar estilos adicionales en `.storybook/preview.ts`:

```typescript
import '../src/styles/index.css';
import './custom-storybook-styles.css'; // Tus estilos personalizados
```

## ⚠️ Notas Importantes

1. **Orden de Importación**: No cambies el orden de imports en `index.css`
2. **Tokens Generados**: Asegúrate de ejecutar `npm run tokens:build` antes de iniciar Storybook si cambias tokens
3. **Cache**: Si los estilos no se actualizan, limpia el cache:
   ```bash
   rm -rf node_modules/.cache
   rm -rf .angular
   ```

## ✅ Checklist de Compatibilidad

- [x] Archivos de estilos existen
- [x] Tokens generados correctamente
- [x] Import habilitado en preview.ts
- [x] Webpack configurado para CSS
- [x] Orden de importación correcto
- [x] Variables CSS disponibles
- [x] Clases de utilidad disponibles
- [x] Estilos base aplicados

## 🐛 Solución de Problemas

### Si Storybook no inicia:

1. **Verifica que los tokens estén generados**:
   ```bash
   npm run tokens:build
   ```

2. **Limpia caches**:
   ```bash
   rm -rf node_modules/.cache
   rm -rf .angular
   ```

3. **Verifica que los archivos existan**:
   ```bash
   ls -la src/styles/
   ls -la src/tokens/generated/
   ```

### Si los estilos no se aplican:

1. Verifica que el import esté habilitado en `.storybook/preview.ts`
2. Revisa la consola del navegador para errores de CSS
3. Verifica que las variables CSS estén definidas en el inspector

## 📚 Recursos

- [Guía de Storybook](./STORYBOOK_GUIDE.md)
- [Sistema de Estilos](./STYLES_SYSTEM.md)
- [Bootstrap Customization](./BOOTSTRAP_CUSTOMIZATION.md)

---

**Estado Final**: ✅ **Storybook es completamente compatible con el sistema de estilos Bootstrap-compatible**

