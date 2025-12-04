# Bio Design System - Cheatsheet

Una referencia rápida visual de todos los componentes y utilidades del Bio Design System, inspirada en el [Bootstrap Cheatsheet](https://getbootstrap.com/docs/5.3/examples/cheatsheet/).

## 🎯 Propósito

El cheatsheet proporciona una vista rápida y visual de:
- **Typography**: Headings, display headings, texto inline, listas
- **Images**: Imágenes responsivas
- **Tables**: Tablas básicas, striped, hover
- **Figures**: Elementos figure con captions
- **Forms**: Inputs, selects, checkboxes, radios, ranges, input groups, floating labels, validación
- **Components**: Accordion, Alerts, Badges, Breadcrumbs, Buttons, Button groups, Cards, List groups, Pagination, Progress, Spinners, Navs, Toasts, Tooltips

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente

1. Asegúrate de que los tokens estén generados:
   ```bash
   npm run tokens:build
   ```

2. Abre `cheatsheet.html` en tu navegador:
   ```bash
   open cheatsheet.html
   ```
   
   O simplemente haz doble clic en el archivo.

### Opción 2: Servidor Local

Para evitar problemas de CORS con los imports CSS, puedes usar un servidor local:

```bash
# Con Python
python3 -m http.server 8000

# Con Node.js (http-server)
npx http-server -p 8000

# Con PHP
php -S localhost:8000
```

Luego abre: `http://localhost:8000/cheatsheet.html`

## 📋 Contenido

### Contents
- **Typography**: Display headings, headings, lead, inline text elements, blockquotes, listas
- **Images**: Imágenes responsivas
- **Tables**: Tablas básicas, striped, hover
- **Figures**: Elementos figure con captions

### Forms
- **Overview**: Formularios básicos con todos los tipos de inputs
- **Disabled forms**: Formularios deshabilitados
- **Sizing**: Tamaños de inputs (sm, md, lg)
- **Input group**: Inputs con addons
- **Floating labels**: Labels flotantes
- **Validation**: Estados de validación

### Components
- **Accordion**: Acordeones colapsables
- **Alerts**: Alertas con diferentes variantes
- **Badge**: Badges con diferentes colores
- **Breadcrumb**: Navegación breadcrumb
- **Buttons**: Todos los tipos de botones (primary, outline, dashed, text, link, danger)
- **Button group**: Grupos de botones
- **Card**: Tarjetas
- **List group**: Listas de grupos
- **Pagination**: Paginación
- **Progress**: Barras de progreso
- **Spinners**: Spinners de carga
- **Navs**: Navegación
- **Toasts**: Notificaciones toast
- **Tooltips**: Tooltips (requiere JavaScript para funcionar completamente)

## 🎨 Características

- **Color Primary de Bioma**: Todos los componentes usan el color #e20039
- **Fuente Sora**: Tipografía Sora aplicada en todo el cheatsheet
- **Material Icons**: Iconos de Material Design disponibles
- **Design Tokens**: Todos los estilos usan Design Tokens
- **Responsive**: Se adapta a diferentes tamaños de pantalla

## 🔧 Personalización

El cheatsheet usa los mismos Design Tokens que el resto del sistema. Para personalizar:

1. Edita `tokens/tokens.json`
2. Regenera los tokens: `npm run tokens:build`
3. Recarga el cheatsheet en el navegador

## 📝 Notas

- El cheatsheet es una referencia visual, no incluye toda la funcionalidad JavaScript
- Algunos componentes requieren JavaScript para funcionar completamente (modals, tooltips, etc.)
- Los estilos están embebidos en el HTML para facilitar la visualización
- Para uso en producción, usa los componentes Angular del design system

## 🔗 Enlaces Relacionados

- [Documentación Completa](./docs/README.md)
- [Demo HTML](./demo.html)
- [Bootstrap Cheatsheet](https://getbootstrap.com/docs/5.3/examples/cheatsheet/) - Inspiración

