# Installation Guide

Guía completa para instalar y usar el Bio Design System en tu proyecto Angular.

## 📦 Instalación

### Opción 1: npm (Recomendado)

```bash
npm install @madergk/bio-ds
```

### Opción 2: GitHub Packages

Si el paquete está publicado en GitHub Packages, primero configura `.npmrc`:

```bash
# .npmrc
@bio-ds:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

Luego instala:

```bash
npm install @madergk/bio-ds
```

### Opción 3: Local (Desarrollo)

Para usar el design system localmente durante el desarrollo:

```bash
npm install /ruta/al/bio-ds
```

O usando `npm link`:

```bash
# En el directorio del design system
cd /ruta/al/bio-ds
npm link

# En tu proyecto
npm link @madergk/bio-ds
```

---

## 🚀 Configuración Inicial

### Paso 1: Importar Estilos

En tu `angular.json`, agrega los estilos globales:

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@madergk/bio-ds/dist/bio-ds/styles.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```

O importa directamente en tu `styles.css`:

```css
/* src/styles.css */
@import '@madergk/bio-ds/styles';
```

### Paso 2: Importar el Módulo

#### Opción A: Módulo Completo (Angular tradicional)

En tu `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BioDesignSystemModule } from '@madergk/bio-ds';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BioDesignSystemModule  // ← Importa el módulo completo
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Opción B: Standalone Components (Angular 17+)

En tu componente standalone:

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],  // ← Importa solo lo que necesitas
  template: `
    <bio-button variant="primary">Click me</bio-button>
  `
})
export class ExampleComponent {}
```

---

## 🎨 Usar Componentes

### Ejemplo Básico

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <bio-button 
      variant="primary" 
      size="md"
      (click)="handleClick()">
      Click me
    </bio-button>
  `
})
export class MyComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
```

### Usar Design Tokens

Los tokens están disponibles como CSS Variables:

```css
/* En tu componente.component.css */
.my-custom-button {
  background-color: var(--color-primary-500);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-family: var(--typography-font-family-primary);
}
```

O importa los tokens JSON en TypeScript:

```typescript
import { tokensJSON } from '@madergk/bio-ds';

const primaryColor = tokensJSON.color.primary[500].value;
console.log(primaryColor); // "#2196f3"
```

---

## 📋 Requisitos

### Versiones Mínimas

- **Angular**: ^17.0.0
- **Node.js**: 18.x o superior
- **npm**: 9.x o superior

### Peer Dependencies

El design system requiere estas dependencias en tu proyecto:

```json
{
  "dependencies": {
    "@angular/common": "^17.0.0",
    "@angular/core": "^17.0.0"
  }
}
```

Estas se instalan automáticamente cuando instalas `@bio-ds/design-system`.

---

## 🔧 Solución de Problemas

### Error: "Module not found"

**Problema**: Angular no encuentra el módulo.

**Solución**:
1. Verifica que instalaste el paquete: `npm list @madergk/bio-ds`
2. Reinicia el servidor de desarrollo: `ng serve`
3. Verifica que importaste correctamente el módulo o componente

### Error: "Styles not found"

**Problema**: Los estilos no se cargan.

**Solución**:
1. Verifica que agregaste los estilos en `angular.json` o `styles.css`
2. Verifica la ruta: `node_modules/@madergk/bio-ds/dist/bio-ds/styles.css`
3. Reinicia el servidor de desarrollo

### Error: "Component not recognized"

**Problema**: El componente no se reconoce en el template.

**Solución**:
1. Verifica que importaste el componente en `imports` (standalone) o en el módulo
2. Verifica el selector: `<bio-button>` (no `<button>`)
3. Verifica que el componente está exportado en `public-api.ts`

### Error: "Design tokens not found"

**Problema**: Las variables CSS no están disponibles.

**Solución**:
1. Asegúrate de importar los estilos (ver Paso 1)
2. Verifica que los tokens se generaron: `npm run tokens:build` (en el design system)
3. Revisa que las variables CSS están en el bundle final

---

## 📚 Recursos Adicionales

- [Documentación de Componentes](./src/components/README.md)
- [Design Tokens](./README.md#design-tokens)
- [CHANGELOG](./CHANGELOG.md)
- [Ejemplos de Uso](./src/components/atoms/button/README.md)

---

## 🆘 Soporte

Si encuentras problemas:

1. Revisa la [documentación](./README.md)
2. Consulta el [CHANGELOG](./CHANGELOG.md) para cambios recientes
3. Abre un issue en el repositorio (si está disponible)

---

## 🔄 Actualizar el Design System

Para actualizar a la última versión:

```bash
npm update @madergk/bio-ds
```

Para actualizar a una versión específica:

```bash
npm install @madergk/bio-ds@0.2.0
```

**Importante**: Revisa el [CHANGELOG](./CHANGELOG.md) antes de actualizar para ver breaking changes.

