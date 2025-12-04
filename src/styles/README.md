# Sistema de Estilos - Bio Design System

## 📁 Estructura de Archivos

```
src/styles/
├── index.css                    # Punto de entrada principal
├── bootstrap-variables.css      # Variables Bootstrap-compatibles
├── bootstrap-reboot.css         # Estilos base (reboot)
├── bootstrap-utilities.css       # Clases de utilidad
└── README.md                    # Este archivo
```

## 🔄 Flujo de Estilos

```
tokens/tokens.json
    ↓ (Style Dictionary)
src/tokens/generated/variables.css
    ↓ (Importado en)
src/styles/bootstrap-variables.css
    ↓ (Mapea a)
Variables Bootstrap (--bs-*)
    ↓ (Usado en)
bootstrap-reboot.css + bootstrap-utilities.css
```

## 📝 Orden de Importación

El orden en `index.css` es crítico:

1. **variables.css** - Tokens generados (fuente de verdad)
2. **bootstrap-variables.css** - Mapeo a nombres Bootstrap
3. **bootstrap-reboot.css** - Estilos base
4. **bootstrap-utilities.css** - Clases de utilidad

## 🎨 Uso

### En Componentes Angular

```typescript
// component.ts
@Component({
  selector: 'bio-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {}
```

```html
<!-- example.component.html -->
<div class="p-4 bg-primary text-white rounded shadow">
  <h1 class="fs-2 mb-3">Título</h1>
  <p class="text-muted">Contenido con utilidades Bootstrap</p>
</div>
```

```css
/* example.component.css */
.custom-class {
  /* Usar variables directas */
  background-color: var(--color-primary-500);
  padding: var(--spacing-md);
  
  /* O usar variables Bootstrap */
  border-radius: var(--bs-border-radius);
  box-shadow: var(--bs-box-shadow);
}
```

## 🔧 Personalización

### Cambiar Colores

1. Edita `tokens/tokens.json`
2. Ejecuta `npm run tokens:build`
3. ¡Listo! Todo se actualiza automáticamente

### Agregar Nuevas Utilidades

Edita `bootstrap-utilities.css`:

```css
.my-utility {
  /* Tu estilo aquí */
}
```

## 📚 Documentación Completa

- [Guía de Customización](../BOOTSTRAP_CUSTOMIZATION.md)
- [Quick Start](../QUICK_START_STYLES.md)
- [Design Tokens](../tokens/README.md)

