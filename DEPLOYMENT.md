# 🚀 Deployment Guide - Guía Completa de Publicación

Esta guía te explica paso a paso cómo publicar tu design system, similar a cómo exportarías y compartirías una biblioteca de componentes en Figma.

---

## 🎯 OBJETIVO

Publicar tu design system para que otros proyectos puedan instalarlo y usarlo, igual que compartirías una biblioteca de componentes en Figma para que otros diseñadores la usen.

---

## 💭 RAZONAMIENTO

**¿Por qué necesitamos publicar el design system?**

Imagina que tienes una biblioteca de componentes en Figma que quieres compartir con tu equipo. Tienes varias opciones:
- **Compartir el archivo directamente** (local) - rápido pero no escalable
- **Publicar en Figma Community** (npm público) - accesible para todos
- **Compartir dentro de tu organización** (GitHub Packages) - control de acceso

En código, es exactamente lo mismo. Publicamos el design system para que otros proyectos puedan "instalarlo" y usar los componentes.

---

## 📋 OPCIONES DE DISTRIBUCIÓN

### 1. **npm (Public Registry)** 🌐
**Equivalente a**: Publicar en Figma Community

**Mejor para**: Proyectos open source o uso público

#### Ventajas:
- ✅ **Fácil instalación**: `npm install @madergk/bio-ds`
- ✅ **Accesible para cualquiera**: Cualquier desarrollador puede instalarlo
- ✅ **Versionado automático**: npm maneja las versiones por ti
- ✅ **Integración con CI/CD**: Se integra fácilmente con herramientas de automatización
- ✅ **Estándar de la industria**: Es lo que todos esperan

#### Desventajas:
- ❌ Requiere cuenta npm (gratis, pero necesitas crearla)
- ❌ Nombre debe ser único globalmente (como un nombre de usuario)
- ❌ Público por defecto (puede ser privado con pago)

#### Configuración Paso a Paso:

**Paso 1: Crear cuenta npm**
```bash
# Si no tienes cuenta, ve a https://www.npmjs.com/signup
# Luego inicia sesión desde la terminal:
npm login
```

**Paso 2: Verificar que puedes publicar**
```bash
# Verifica que estás logueado
npm whoami

# Verifica que el nombre del paquete está disponible
npm view @madergk/bio-ds
# Si dice "404", el nombre está disponible ✅
```

**Paso 3: Configurar package.json**
Ya está configurado en tu proyecto:
```json
{
  "name": "@madergk/bio-ds",
  "publishConfig": {
    "access": "public"  // ← Necesario para scoped packages (@madergk/)
  }
}
```

**Paso 4: Publicar**
```bash
# Opción 1: Publicación manual completa
npm run release:patch   # Para bugfixes (0.1.0 → 0.1.1)
npm run release:minor   # Para nuevas features (0.1.0 → 0.2.0)
npm run release:major   # Para breaking changes (0.1.0 → 1.0.0)

# Opción 2: Solo publicar (si ya incrementaste la versión)
npm run publish:npm
```

**Paso 5: Verificar publicación**
```bash
# Ver información del paquete publicado
npm view @madergk/bio-ds

# Ver versión específica
npm view @madergk/bio-ds@0.1.1
```

---

### 2. **GitHub Packages** 🐙
**Equivalente a**: Compartir dentro de tu organización de Figma

**Mejor para**: Proyectos privados o dentro de una organización

#### Ventajas:
- ✅ **Integrado con GitHub**: Todo en un solo lugar
- ✅ **Privado por defecto**: Control de acceso por repositorio
- ✅ **Gratis para open source**: Si tu repo es público, GitHub Packages es gratis
- ✅ **Mismo workflow**: Usas GitHub para código y paquetes
- ✅ **Control de acceso**: Puedes decidir quién puede instalar

#### Desventajas:
- ❌ Requiere configuración adicional (archivo `.npmrc`)
- ❌ Menos conocido que npm público
- ❌ Los consumidores necesitan configurar autenticación

#### Configuración Paso a Paso:

**Paso 1: Crear Personal Access Token (PAT)**

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Genera un nuevo token con estos permisos:
   - `read:packages` (para instalar)
   - `write:packages` (para publicar)
   - `repo` (si el repo es privado)
3. Copia el token (solo se muestra una vez)

**Paso 2: Configurar autenticación en tu proyecto**

Crea o edita `.npmrc` en la raíz del proyecto:
```bash
# .npmrc
@madergk:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

**Paso 3: Configurar variable de entorno**
```bash
# En tu terminal (o en tu archivo .zshrc/.bashrc para persistencia)
export GITHUB_TOKEN=tu_token_aqui
```

**Paso 4: Actualizar package.json**

Agrega la configuración de publicación:
```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

**Paso 5: Publicar**
```bash
npm run publish:github
```

**Paso 6: Configurar para consumidores**

Los proyectos que quieran instalar tu paquete necesitan crear `.npmrc`:
```bash
# .npmrc en el proyecto consumidor
@madergk:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SU_TOKEN_AQUI
```

Luego instalan normalmente:
```bash
npm install @madergk/bio-ds
```

---

### 3. **Local/File System** 💻
**Equivalente a**: Compartir archivo Figma directamente por email/Slack

**Mejor para**: Desarrollo local, testing, o proyectos muy pequeños

#### Ventajas:
- ✅ **No requiere servidor**: Todo funciona localmente
- ✅ **Perfecto para testing**: Prueba antes de publicar
- ✅ **Control total**: No depende de servicios externos
- ✅ **Rápido**: Sin latencia de red

#### Desventajas:
- ❌ **No escalable**: Solo funciona en tu máquina
- ❌ **No hay versionado automático**: Tú manejas las versiones manualmente
- ❌ **Complejo para equipos**: Cada desarrollador necesita la ruta local

#### Configuración Paso a Paso:

**Opción A: Usando `npm pack` (Recomendado)**

```bash
# Paso 1: Crear tarball (archivo .tgz)
npm run publish:local

# Esto crea: madergk-bio-ds-0.1.1.tgz

# Paso 2: En el proyecto consumidor, instalar desde archivo
npm install /ruta/completa/a/madergk-bio-ds-0.1.1.tgz

# O desde ruta relativa
npm install ../bio-ds/madergk-bio-ds-0.1.1.tgz
```

**Opción B: Usando `npm link` (Para desarrollo activo)**

```bash
# En el directorio del design system
cd /Users/mader/bio-ds
npm link

# En tu proyecto consumidor
cd /ruta/a/tu/proyecto
npm link @madergk/bio-ds
```

**⚠️ Importante**: `npm link` crea un enlace simbólico. Los cambios en el design system se reflejan inmediatamente, pero puede causar problemas con módulos duplicados.

**Opción C: Instalación directa desde carpeta**

```bash
# En el proyecto consumidor
npm install /Users/mader/bio-ds
```

---

## 🚀 PROCESO DE PUBLICACIÓN COMPLETO

### Flujo Recomendado (npm público)

```bash
# 1. Asegúrate de tener todos los cambios commiteados
git status

# 2. Ejecuta tests y validaciones
npm test
npm run lint
npm run tokens:validate

# 3. Actualiza el CHANGELOG.md con los cambios de esta versión
# (Mueve items de [Unreleased] a la nueva versión)

# 4. Haz un dry-run para verificar que todo está bien
npm run release:dry-run

# 5. Publica la nueva versión
npm run release:patch   # o minor, o major según corresponda
```

**¿Qué hace `release:patch` automáticamente?**
1. ✅ Ejecuta validaciones completas (lint, tests, tokens, build)
2. ✅ Si las validaciones pasan, incrementa la versión en package.json
3. ✅ Crea commit de versión en git automáticamente
4. ✅ Crea tag de git con la nueva versión automáticamente
5. ✅ Publica en npm (solo verifica que el build existe)
6. ✅ Hace push de commits y tags al repositorio

**⚠️ Importante**: Las validaciones se ejecutan ANTES de cualquier operación de git. Si las validaciones fallan, no se crea commit ni tag, manteniendo git y npm sincronizados.

---

## 📝 SCRIPTS DISPONIBLES

### Scripts de Build

| Script | ¿Qué hace? | Cuándo usarlo |
|--------|------------|---------------|
| `npm run build` | Build de desarrollo | Desarrollo local |
| `npm run build:library` | Build de producción optimizado | Antes de publicar |
| `npm run build:clean` | Elimina dist y reconstruye | Cuando sospechas problemas de caché |
| `npm run build:verify` | Verifica que el build es correcto | Automático antes de publicar |

### Scripts de Versionado

| Script | ¿Qué hace? | Cuándo usarlo |
|--------|------------|---------------|
| `npm run version:patch` | Incrementa versión patch (0.1.0 → 0.1.1) | Bugfixes |
| `npm run version:minor` | Incrementa versión minor (0.1.0 → 0.2.0) | Nuevas features compatibles |
| `npm run version:major` | Incrementa versión major (0.1.0 → 1.0.0) | Breaking changes |

### Scripts de Release (Recomendados)

| Script | ¿Qué hace? | Cuándo usarlo |
|--------|------------|---------------|
| `npm run release:patch` | Valida + versiona + publica (patch) | Bugfix listo para publicar |
| `npm run release:minor` | Valida + versiona + publica (minor) | Feature listo para publicar |
| `npm run release:major` | Valida + versiona + publica (major) | Breaking change listo para publicar |
| `npm run release:dry-run` | Simula publicación sin publicar | Para verificar antes de publicar |
| `npm run release:validate` | Solo valida sin publicar | Para verificar que todo está bien |

### Scripts de Publicación

| Script | ¿Qué hace? | Cuándo usarlo |
|--------|------------|---------------|
| `npm run publish:npm` | Publica en npm público | Si ya incrementaste versión manualmente |
| `npm run publish:github` | Publica en GitHub Packages | Si usas GitHub Packages |
| `npm run publish:local` | Crea archivo .tgz local | Para testing local |

---

## ✅ VALIDACIÓN ANTES DE PUBLICAR

El script `release:validate` verifica automáticamente ANTES de cualquier operación de git:

1. ✅ **Lint**: Código sin errores de estilo
2. ✅ **Tests**: Todos los tests pasan
3. ✅ **Tokens**: Tokens válidos y sin errores
4. ✅ **Build**: Build limpio y correcto
5. ✅ **Verificación**: Archivos requeridos presentes y no vacíos

**Flujo de validación**:
- Los scripts `release:patch/minor/major` ejecutan `release:validate` PRIMERO
- Si las validaciones pasan, entonces se crea el commit y tag de versión
- Luego se publica en npm (que solo verifica que el build existe con `prepublishOnly`)
- Finalmente se hace push de commits y tags

**Si alguna validación falla**, el proceso se detiene ANTES de crear commits o tags. Esto previene:
- Publicar código con errores
- Desincronización entre git y npm (commits sin publicación)
- Tags de versión para código no publicado

---

## 🎯 VERSIONADO SEMÁNTICO

**¿Qué es?** Un sistema de versionado que comunica el tipo de cambio.

**Formato**: `MAJOR.MINOR.PATCH` (ej: `1.2.3`)

### Reglas:

- **PATCH** (0.1.0 → 0.1.1): Bugfixes, correcciones que no cambian la API
  - Ejemplo: Corregir un bug en el botón que no se deshabilitaba correctamente

- **MINOR** (0.1.0 → 0.2.0): Nuevas features compatibles hacia atrás
  - Ejemplo: Agregar una nueva variante al botón sin romper las existentes

- **MAJOR** (0.1.0 → 1.0.0): Breaking changes, cambios que rompen compatibilidad
  - Ejemplo: Cambiar el nombre de una prop del botón que otros proyectos usan

**Analogía con Figma**: 
- PATCH = Corregir un bug en un componente existente
- MINOR = Agregar una nueva variante sin cambiar las existentes
- MAJOR = Cambiar la estructura del componente de forma que rompe proyectos que lo usan

---

## ⚠️ PUNTOS DE ATENCIÓN

### Errores Comunes y Soluciones

**Error: "You do not have permission to publish"**
- **Causa**: No estás logueado o no tienes permisos
- **Solución**: `npm login` y verifica con `npm whoami`

**Error: "Package name already exists"**
- **Causa**: El nombre del paquete ya está tomado
- **Solución**: Cambia el nombre en `package.json` o usa un scope diferente

**Error: "Version already exists"**
- **Causa**: Estás intentando publicar una versión que ya existe
- **Solución**: Incrementa la versión con `npm run version:patch/minor/major`

**Error: "Build verification failed"**
- **Causa**: El build no pasó las validaciones
- **Solución**: Revisa los errores, corrige y vuelve a intentar

**Error: "Git working directory not clean"**
- **Causa**: Tienes cambios sin commitear
- **Solución**: Haz commit de tus cambios o usa `--no-git-tag-version` en version scripts

---

## 📚 RECURSOS ADICIONALES

- [Semantic Versioning](https://semver.org/) - Especificación oficial
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) - Guía oficial de npm
- [GitHub Packages Guide](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) - Guía de GitHub Packages
- [Keep a Changelog](https://keepachangelog.com/) - Formato recomendado para CHANGELOG

---

## ➡️ SIGUIENTE PASO

Una vez que publiques tu primera versión:

1. **Verifica la instalación**: Crea un proyecto de prueba e instala tu paquete
2. **Documenta el proceso**: Asegúrate que tu equipo sabe cómo publicar
3. **Configura CI/CD**: Automatiza la publicación (opcional, avanzado)
4. **Monitorea uso**: Revisa `npm view @madergk/bio-ds` periódicamente

---

**¿Listo para publicar?** Ejecuta `npm run release:dry-run` primero para verificar que todo está correcto antes de la publicación real.
