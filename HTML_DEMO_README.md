# 📄 Demo HTML - Bio Design System

## 🎯 Propósito

Este archivo HTML (`demo.html`) permite revisar y verificar visualmente que todos los estilos del design system funcionan correctamente en HTML puro, sin necesidad de Angular.

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente

1. Asegúrate de que los tokens estén generados:
   ```bash
   npm run tokens:build
   ```

2. Abre `demo.html` en tu navegador:
   ```bash
   open demo.html
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

Luego abre: `http://localhost:8000/demo.html`

## 📋 Qué Verifica

La página demo muestra y verifica:

### ✅ 1. Colores
- Variables de color primarias
- Colores semánticos (success, danger, warning, info)
- Escala de grises
- Variables Bootstrap-compatibles

### ✅ 2. Espaciado
- Sistema de espaciado (0-8)
- Variables de spacing
- Utilidades de padding y margin

### ✅ 3. Tipografía
- Tamaños de fuente (fs-1 a fs-6)
- Pesos de fuente (fw-light a fw-bold)
- Colores de texto
- Estilos base de tipografía

### ✅ 4. Bordes y Sombras
- Bordes redondeados (rounded, rounded-sm, rounded-lg, rounded-pill)
- Sombras (shadow-sm, shadow, shadow-lg)
- Variables de border-radius

### ✅ 5. Utilidades Flexbox
- Display flex
- Justify content
- Align items
- Flex direction

### ✅ 6. Variables CSS
- Uso directo de tokens (`var(--color-primary-500)`)
- Uso de variables Bootstrap (`var(--bs-primary)`)
- Verificación de que ambas funcionan

## 🔍 Verificación Manual

Al abrir la página, verifica:

1. **¿Se cargan los estilos?**
   - Los colores deben verse correctamente
   - El texto debe tener la tipografía correcta
   - Los espaciados deben ser consistentes

2. **¿Las utilidades funcionan?**
   - Las clases `.p-4`, `.m-3`, etc. deben aplicar espaciado
   - Las clases `.bg-primary`, `.text-white`, etc. deben aplicar colores
   - Las clases `.rounded`, `.shadow`, etc. deben aplicar estilos

3. **¿Las variables CSS funcionan?**
   - Inspecciona elementos en DevTools
   - Verifica que las variables CSS estén definidas
   - Verifica que los valores sean correctos

## 🐛 Solución de Problemas

### Los estilos no se cargan

**Problema**: La página se ve sin estilos.

**Solución**:
1. Verifica que los archivos CSS existan:
   ```bash
   ls -la src/tokens/generated/variables.css
   ls -la src/styles/bootstrap-variables.css
   ```

2. Verifica que los tokens estén generados:
   ```bash
   npm run tokens:build
   ```

3. Usa un servidor local en lugar de abrir el archivo directamente

### Variables CSS no definidas

**Problema**: En DevTools ves `var(--bs-primary)` sin valor.

**Solución**:
1. Verifica el orden de importación en `demo.html`
2. Asegúrate de que `variables.css` se cargue primero
3. Verifica que `bootstrap-variables.css` se cargue después

### Estilos diferentes a los esperados

**Problema**: Los colores o espaciados no coinciden con los tokens.

**Solución**:
1. Regenera los tokens:
   ```bash
   npm run tokens:build
   ```
2. Recarga la página
3. Verifica que los valores en `tokens/tokens.json` sean correctos

## 📝 Personalización

Para probar cambios en los tokens:

1. Edita `tokens/tokens.json`
2. Regenera: `npm run tokens:build`
3. Recarga la página demo

Los cambios se reflejarán automáticamente.

## 🎨 Estructura del Demo

```
demo.html
├── Header (Título y descripción)
├── Sección: Colores
├── Sección: Espaciado
├── Sección: Utilidades de Espaciado
├── Sección: Tipografía
├── Sección: Bordes y Sombras
├── Sección: Flexbox Utilities
├── Sección: Variables CSS Directas
└── Footer (Resumen)
```

## ✅ Checklist de Verificación

Antes de considerar que todo funciona:

- [ ] Los colores se muestran correctamente
- [ ] El espaciado es consistente
- [ ] La tipografía se ve bien
- [ ] Las utilidades Bootstrap funcionan
- [ ] Las variables CSS están definidas
- [ ] Los bordes y sombras se aplican
- [ ] Flexbox funciona correctamente
- [ ] No hay errores en la consola del navegador

## 📚 Próximos Pasos

Una vez verificado que todo funciona en HTML:

1. **Integra en Angular**: Los mismos estilos funcionarán en componentes Angular
2. **Usa en Storybook**: Los estilos ya están configurados en Storybook
3. **Personaliza tokens**: Ajusta los valores según tu diseño
4. **Crea componentes**: Usa los estilos en tus componentes

---

**Nota**: Este demo es solo para verificación visual. Para desarrollo real, usa los componentes Angular o Storybook.

