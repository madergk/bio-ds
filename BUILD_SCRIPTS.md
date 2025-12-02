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

### `npm run build:verify`
```bash
node scripts/verify-build.js
```

**¿Qué hace?**
- Verifica que el build se completó correctamente
- Revisa que todos los archivos requeridos existen
- Verifica que los archivos no están vacíos
- Valida la estructura del package.json del build
- Muestra el tamaño del bundle

**Cuándo usarlo**: Automáticamente antes de publicar, o manualmente para verificar el build.

**Output**: Lista de archivos verificados y su tamaño, o errores si algo falta.

---

### `npm run prepublishOnly`
```bash
npm run build:verify
```

**¿Qué es?**
- Hook automático de npm que se ejecuta ANTES de `npm publish`
- No lo ejecutas manualmente, npm lo hace automáticamente

**¿Qué hace?**
- Solo verifica que el build existe y es correcto
- NO ejecuta todas las validaciones (esas ya se ejecutaron antes en `release:*`)

**Importante**: 
- Este script se ejecuta automáticamente cuando haces `npm publish`
- Las validaciones completas ya se ejecutaron en `release:patch/minor/major` ANTES de crear commits/tags
- Esto previene desincronización entre git y npm si la publicación falla

---

### Scripts de Versionado

#### `npm run version:patch`
```bash
npm version patch --no-git-tag-version
```

**¿Qué hace?**
- Incrementa la versión en formato semántico: `0.1.0` → `0.1.1`
- Solo actualiza `package.json`, NO crea commit ni tag (usa `release:patch` para eso)

**Cuándo usarlo**: Para incrementar versión manualmente sin publicar.

**Ejemplo**:
```json
// Antes: "version": "0.1.0"
// Después: "version": "0.1.1"
```

---

#### `npm run version:minor`
```bash
npm version minor --no-git-tag-version
```

**¿Qué hace?**
- Incrementa versión: `0.1.0` → `0.2.0`
- Solo actualiza `package.json`

**Cuándo usarlo**: Para incrementar versión manualmente sin publicar.

**Ejemplo**:
```json
// Antes: "version": "0.1.5"
// Después: "version": "0.2.0"
```

---

#### `npm run version:major`
```bash
npm version major --no-git-tag-version
```

**¿Qué hace?**
- Incrementa versión: `0.1.0` → `1.0.0`
- Solo actualiza `package.json`

**Cuándo usarlo**: Para incrementar versión manualmente sin publicar.

**Ejemplo**:
```json
// Antes: "version": "0.9.5"
// Después: "version": "1.0.0"
```

---

### Scripts de Release (Recomendados)

#### `npm run release:validate`
```bash
npm run lint && npm run test && npm run tokens:validate && npm run build:clean && npm run build:verify
```

**¿Qué hace?**
1. `npm run lint` - Verifica código sin errores de estilo
2. `npm run test` - Ejecuta todos los tests
3. `npm run tokens:validate` - Valida design tokens
4. `npm run build:clean` - Build limpio de producción
5. `npm run build:verify` - Verifica que el build es correcto

**Cuándo usarlo**: Antes de publicar, para asegurar que todo está correcto.

**Importante**: Si alguna validación falla, el proceso se detiene. Esto previene publicar código con errores.

---

#### `npm run release:patch`
```bash
npm run release:validate && npm version patch && npm publish
```

**¿Qué hace?**
1. Ejecuta validaciones completas (lint, tests, tokens, build)
2. Si las validaciones pasan, incrementa versión patch (`0.1.0` → `0.1.1`)
3. Crea commit de versión en git automáticamente
4. Crea tag de git con la nueva versión automáticamente
5. Publica en npm (ejecuta `prepublishOnly` que solo verifica build)
6. Hace push de commits y tags (ejecuta `postversion` automáticamente)

**Cuándo usarlo**: Para publicar bugfixes.

**⚠️ Importante**: 
- Las validaciones se ejecutan ANTES de crear commits/tags
- Si las validaciones fallan, no se crea commit ni tag, manteniendo git y npm sincronizados
- Los tags de git se crean automáticamente con `npm version`

---

#### `npm run release:minor`
```bash
npm run release:validate && npm version minor && npm publish
```

**¿Qué hace?**
1. Ejecuta validaciones completas (lint, tests, tokens, build)
2. Si las validaciones pasan, incrementa versión minor (`0.1.0` → `0.2.0`)
3. Crea commit y tag de versión automáticamente
4. Publica en npm
5. Hace push de commits y tags

**Cuándo usarlo**: Para publicar nuevas features compatibles.

---

#### `npm run release:major`
```bash
npm run release:validate && npm version major && npm publish
```

**¿Qué hace?**
1. Ejecuta validaciones completas (lint, tests, tokens, build)
2. Si las validaciones pasan, incrementa versión major (`0.1.0` → `1.0.0`)
3. Crea commit y tag de versión automáticamente
4. Publica en npm
5. Hace push de commits y tags

**Cuándo usarlo**: Para publicar breaking changes.

---

#### `npm run release:dry-run`
```bash
npm run build:clean && npm publish --dry-run
```

**¿Qué hace?**
- Hace build limpio
- Simula la publicación SIN publicar realmente
- Muestra qué archivos se publicarían

**Cuándo usarlo**: Para verificar que todo está correcto antes de publicar realmente.

**Muy útil**: Úsalo siempre antes de tu primera publicación o cuando cambies la configuración.

---

#### `npm run release:changelog`
```bash
echo '⚠️  Remember to update CHANGELOG.md with the new version changes!'
```

**¿Qué hace?**
- Te recuerda actualizar el CHANGELOG antes de publicar

**Cuándo usarlo**: Se ejecuta automáticamente con `npm version`, pero puedes ejecutarlo manualmente como recordatorio.

---

### Scripts de Publicación

#### `npm run publish:npm`
```bash
npm publish --registry=https://registry.npmjs.org
```

**¿Qué hace?**
- Publica en npm público (registry por defecto)

**Cuándo usarlo**: Si ya incrementaste la versión manualmente y solo quieres publicar.

---

#### `npm run publish:github`
```bash
npm publish --registry=https://npm.pkg.github.com
```

**¿Qué hace?**
- Publica en GitHub Packages

**Cuándo usarlo**: Si usas GitHub Packages como registry.

**Requisitos**: Necesitas configurar `.npmrc` y autenticación (ver DEPLOYMENT.md).

---

#### `npm run publish:local`
```bash
npm pack
```

**¿Qué hace?**
- Crea un archivo `.tgz` (tarball) con el paquete
- No publica en ningún registry

**Cuándo usarlo**: Para testing local o compartir el paquete como archivo.

**Output**: Crea `madergk-bio-ds-0.1.1.tgz` en la raíz del proyecto.

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

### Publicar Nueva Versión (Recomendado)

**Opción 1: Usando scripts de release (Más fácil)**
```bash
# 1. Hacer cambios y commitear
git add .
git commit -m "feat: add new component"

# 2. Actualizar CHANGELOG.md (mover items de [Unreleased] a nueva versión)

# 3. Verificar antes de publicar (dry-run)
npm run release:dry-run

# 4. Publicar (valida, versiona y publica automáticamente)
npm run release:patch   # o minor, o major según corresponda
```

**Opción 2: Manual (Más control)**
```bash
# 1. Hacer cambios y commitear
git add .
git commit -m "feat: add new component"

# 2. Actualizar CHANGELOG.md

# 3. Validar que todo está bien
npm run release:validate

# 4. Incrementar versión manualmente
npm run version:patch  # o minor, o major

# 5. Commit de la versión
git add package.json CHANGELOG.md
git commit -m "chore: bump version to 0.1.1"

# 6. Crear tag
git tag v0.1.1

# 7. Publicar (prepublishOnly se ejecuta automáticamente)
npm run publish:npm

# 8. Push commits y tags
git push && git push --tags
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

### Scripts de Build

| Script | Cuándo Usar | Output |
|--------|-------------|--------|
| `build` | Desarrollo | Build desarrollo |
| `build:library` | Pre-publicación | Build producción optimizado |
| `build:clean` | Build limpio | Elimina dist y reconstruye |
| `build:verify` | Verificar build | Valida archivos del build |

### Scripts de Versionado

| Script | Cuándo Usar | Output |
|--------|-------------|--------|
| `version:patch` | Incrementar patch | Actualiza package.json |
| `version:minor` | Incrementar minor | Actualiza package.json |
| `version:major` | Incrementar major | Actualiza package.json |

### Scripts de Release (Recomendados)

| Script | Cuándo Usar | Output |
|--------|-------------|--------|
| `release:validate` | Validar antes de publicar | Ejecuta todas las validaciones |
| `release:patch` | Publicar bugfix | Versiona y publica |
| `release:minor` | Publicar feature | Versiona y publica |
| `release:major` | Publicar breaking change | Versiona y publica |
| `release:dry-run` | Simular publicación | Muestra qué se publicaría |
| `release:changelog` | Recordatorio | Mensaje para actualizar CHANGELOG |

### Scripts de Publicación

| Script | Cuándo Usar | Output |
|--------|-------------|--------|
| `publish:npm` | Publicar en npm | Publica en npm público |
| `publish:github` | Publicar en GitHub | Publica en GitHub Packages |
| `publish:local` | Crear archivo local | Genera .tgz |

### Hooks Automáticos

| Hook | Cuándo se ejecuta | Qué hace |
|------|-------------------|-----------|
| `prepublishOnly` | Antes de `npm publish` | Solo verifica que el build existe (`build:verify`) |
| `version` | Durante `npm version` | Recuerda actualizar CHANGELOG (`release:changelog`) |
| `postversion` | Después de `npm version` | Hace push de commits y tags a git |

**⚠️ Nota importante sobre el flujo**:
- Los scripts `release:*` ejecutan validaciones COMPLETAS ANTES de `npm version`
- Esto previene crear commits/tags si las validaciones fallan
- `prepublishOnly` solo verifica el build (no todas las validaciones) porque ya se validó todo antes
- Esto mantiene git y npm sincronizados: si la publicación falla, no hay commits/tags creados

