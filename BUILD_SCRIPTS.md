# Build Scripts Explained

Este documento explica cada script de build en `package.json` línea por línea.

## 📋 Scripts Disponibles

### `npm run build`
```bash
npm run tokens:build && ng build
```

**¿Qué hace?**
1. `npm run tokens:build` - Genera los design tokens primero
   - Ejecuta Style Dictionary para convertir tokens JSON → CSS/TS/JSON
   - Crea `src/tokens/generated/` con archivos listos para usar
2. `&&` - Operador "y luego" (solo continúa si el primer comando tiene éxito)
3. `ng build` - Compila el proyecto Angular en modo desarrollo

**Cuándo usarlo**: Para desarrollo local, verificar que todo compila correctamente.

---

### `npm run build:library`
```bash
npm run tokens:build && ng build --configuration production
```

**¿Qué hace?**
1. `npm run tokens:build` - Genera tokens (igual que arriba)
2. `ng build` - Compila el proyecto
3. `--configuration production` - Usa configuración de producción:
   - Optimizaciones activadas
   - Minificación de código
   - Tree-shaking (elimina código no usado)
   - Genera archivos `.d.ts` (TypeScript definitions)

**Cuándo usarlo**: Antes de publicar, para crear el bundle final optimizado.

**Output**: Crea carpeta `dist/bio-ds/` con:
- `fesm2022/` - Formato ES modules moderno
- `index.d.ts` - Definiciones TypeScript
- `styles.css` - Estilos compilados
- `package.json` - Metadata del paquete

---

### `npm run build:clean`
```bash
rm -rf dist && npm run build:library
```

**¿Qué hace?**
1. `rm -rf dist` - Elimina la carpeta `dist/` completamente
   - `rm` = remove (eliminar)
   - `-r` = recursive (incluye subcarpetas)
   - `-f` = force (sin preguntar)
2. `&&` - Solo si la eliminación fue exitosa
3. `npm run build:library` - Construye desde cero

**¿Por qué es importante?**
- Asegura que no queden archivos viejos
- Build limpio sin artefactos anteriores
- Evita problemas de caché

**Cuándo usarlo**: Cuando sospechas que hay archivos corruptos o quieres un build completamente limpio.

---

### `npm run prepublishOnly`
```bash
npm run build:clean
```

**¿Qué es?**
- Hook automático de npm que se ejecuta ANTES de `npm publish`
- No lo ejecutas manualmente, npm lo hace automáticamente

**¿Qué hace?**
- Asegura que siempre publiques un build limpio y actualizado
- Previene publicar código desactualizado

**Importante**: Este script se ejecuta automáticamente cuando haces `npm publish`.

---

### `npm run version:patch`
```bash
npm version patch
```

**¿Qué hace?**
- Incrementa la versión en formato semántico: `0.1.0` → `0.1.1`
- Crea un commit git con el cambio de versión
- Crea un tag git con la nueva versión

**Cuándo usarlo**: Para correcciones de bugs (bugfixes).

**Ejemplo**:
```json
// Antes: "version": "0.1.0"
// Después: "version": "0.1.1"
```

---

### `npm run version:minor`
```bash
npm version minor
```

**¿Qué hace?**
- Incrementa versión: `0.1.0` → `0.2.0`
- Crea commit y tag

**Cuándo usarlo**: Para nuevas funcionalidades que son compatibles hacia atrás.

**Ejemplo**:
```json
// Antes: "version": "0.1.5"
// Después: "version": "0.2.0"
```

---

### `npm run version:major`
```bash
npm version major
```

**¿Qué hace?**
- Incrementa versión: `0.1.0` → `1.0.0`
- Crea commit y tag

**Cuándo usarlo**: Para cambios que rompen compatibilidad (breaking changes).

**Ejemplo**:
```json
// Antes: "version": "0.9.5"
// Después: "version": "1.0.0"
```

---

## 🔄 Flujo de Trabajo Recomendado

### Desarrollo Local
```bash
npm run build          # Verificar que compila
npm run tokens:watch    # Regenerar tokens automáticamente mientras desarrollas
```

### Antes de Publicar
```bash
npm run build:clean    # Build limpio
npm test               # Ejecutar tests
npm run lint           # Verificar código
```

### Publicar Nueva Versión
```bash
# 1. Hacer cambios y commitear
git add .
git commit -m "feat: add new component"

# 2. Incrementar versión
npm run version:patch  # o minor, o major

# 3. Publicar (prepublishOnly se ejecuta automáticamente)
npm publish
```

---

## 📦 Estructura del Output (dist/bio-ds/)

Después de `npm run build:library`, encontrarás:

```
dist/bio-ds/
├── fesm2022/
│   └── bio-ds.mjs          # Código compilado (ES modules)
├── index.d.ts              # TypeScript definitions
├── package.json            # Metadata del paquete
└── styles.css              # Estilos compilados
```

**¿Qué es cada archivo?**

- `bio-ds.mjs`: El código JavaScript compilado que otros proyectos importarán
- `index.d.ts`: Tipos TypeScript para autocompletado y type-checking
- `package.json`: Información del paquete (versión, dependencias, etc.)
- `styles.css`: Todos los estilos CSS compilados

---

## ⚠️ Errores Comunes

### Error: "Tokens not found"
**Solución**: Ejecuta `npm run tokens:build` primero

### Error: "dist folder not found"
**Solución**: Ejecuta `npm run build:library` para crear el build

### Error: "Version already exists"
**Solución**: Incrementa la versión manualmente o usa `npm version patch/minor/major`

---

## 🎯 Resumen

| Script | Cuándo Usar | Output |
|--------|-------------|--------|
| `build` | Desarrollo | Build desarrollo |
| `build:library` | Pre-publicación | Build producción optimizado |
| `build:clean` | Build limpio | Elimina dist y reconstruye |
| `version:*` | Antes de publicar | Incrementa versión |
| `prepublishOnly` | Automático | Se ejecuta antes de `npm publish` |

