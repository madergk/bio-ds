# 🎨 Sistema de Estilos Bootstrap-Compatible

## ✅ Estado: Listo para Desarrollo

El sistema de estilos está completamente configurado y listo para usar. Replica la estructura de Bootstrap pero usando nuestros design tokens personalizados.

## 📦 Lo que se ha Creado

### 1. **Variables Bootstrap-Compatibles** (`src/styles/bootstrap-variables.css`)
- Mapea nuestros tokens a nombres de variables Bootstrap (`--bs-*`)
- Permite usar la misma nomenclatura que Bootstrap
- Se actualiza automáticamente cuando cambias los tokens

### 2. **Bootstrap Reboot** (`src/styles/bootstrap-reboot.css`)
- Replica Bootstrap's `reboot.css` usando nuestros tokens
- Estilos base consistentes (tipografía, links, formularios, etc.)
- Normalización cross-browser

### 3. **Utilidades Bootstrap** (`src/styles/bootstrap-utilities.css`)
- Clases de utilidad similares a Bootstrap
- Spacing: `.p-4`, `.m-2`, `.px-3`, etc.
- Colors: `.text-primary`, `.bg-success`, etc.
- Typography: `.fs-1`, `.fw-bold`, etc.
- Display & Flex: `.d-flex`, `.justify-content-between`, etc.
- Borders & Shadows: `.border`, `.rounded`, `.shadow-sm`, etc.

### 4. **Sistema Integrado** (`src/styles/index.css`)
- Orden correcto de importación
- Todo conectado y funcionando

## 🚀 Cómo Empezar

### Paso 1: Personaliza tus Tokens

Edita `tokens/tokens.json`:

```json
{
  "color": {
    "primary": {
      "500": { "value": "#tu-color-personalizado" }
    }
  }
}
```

### Paso 2: Regenera Variables

```bash
npm run tokens:build
```

### Paso 3: Usa en tus Componentes

**Opción A: Clases de Utilidad**
```html
<div class="p-4 bg-primary text-white rounded">
  Contenido
</div>
```

**Opción B: Variables CSS**
```css
.my-component {
  background-color: var(--bs-primary);
  padding: var(--bs-spacer-4);
}
```

## 📚 Documentación

- **[Quick Start](./QUICK_START_STYLES.md)** - Guía rápida de uso
- **[Guía Completa](./BOOTSTRAP_CUSTOMIZATION.md)** - Documentación detallada
- **[Design Tokens](./tokens/README.md)** - Sistema de tokens

## ✅ Verificación

- ✅ Tokens se generan correctamente
- ✅ Variables Bootstrap se crean correctamente
- ✅ Build de Angular funciona sin errores
- ✅ Estilos base aplicados
- ✅ Utilidades disponibles

## 🎯 Próximos Pasos

1. **Personaliza tus tokens** según tu diseño
2. **Crea componentes** usando las utilidades o variables
3. **Agrega nuevos tokens** según necesites
4. **Extiende utilidades** si necesitas clases adicionales

## 💡 Ejemplo Completo

```html
<!-- Usando utilidades Bootstrap -->
<div class="container p-4">
  <div class="card border rounded shadow-sm p-4 mb-3">
    <h2 class="fs-3 text-primary mb-3">Título</h2>
    <p class="text-muted mb-4">Descripción</p>
    <button class="btn bg-primary text-white px-4 py-2 rounded">
      Acción
    </button>
  </div>
</div>
```

```css
/* Usando variables CSS */
.card {
  background-color: var(--bs-body-bg);
  border-color: var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  box-shadow: var(--bs-box-shadow-sm);
}

.btn {
  background-color: var(--bs-primary);
  color: var(--color-base-white);
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  border-radius: var(--bs-btn-border-radius);
  transition: var(--bs-btn-transition);
}
```

## 🔄 Flujo de Trabajo Recomendado

1. **Diseña** → Define tokens en `tokens/tokens.json`
2. **Genera** → `npm run tokens:build`
3. **Desarrolla** → Usa utilidades o variables en componentes
4. **Itera** → Ajusta tokens y regenera

---

**¡Todo está listo para empezar a crear componentes!** 🎉

