# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Add more atomic components (Input, Label, etc.)
- Add molecule components (FormField, SearchBar, etc.)
- Add organism components (Card, Header, etc.)
- Storybook documentation setup
- Theme customization support

---

## [0.1.1] - 2024-12-01

### Changed
- Package name changed from `@bio-ds/design-system` to `@madergk/bio-ds`
- Updated all documentation and examples to reflect new package name

### Fixed
- Build configuration for proper npm publishing
- TypeScript configuration for JSON module imports
- ng-packagr configuration paths

### Technical Details
- First public release on npm
- Package size: 15.5 kB (63.9 kB unpacked)
- Published with public access

---

## [0.1.0] - 2024-12-01

### Added
- Initial project setup with Angular 17
- Design tokens system using Style Dictionary
  - Color tokens (primary, semantic colors)
  - Spacing tokens (xs to xxxl)
  - Typography tokens (font families, sizes, weights)
  - Border tokens (radius, width)
- Button component (atom)
  - 5 variants: primary, secondary, outline, text, danger
  - 3 sizes: sm, md, lg
  - Disabled state
  - Type safety with TypeScript
  - Full test coverage
- CSS Modules support
- Bootstrap integration
- Build configuration for library distribution
- Documentation (README, component docs)

### Technical Details
- Angular 17 with standalone components
- TypeScript 5.2
- Style Dictionary 4.4.0 for token transformation
- CSS Custom Properties (CSS Variables) for tokens
- ng-packagr for library bundling

---

## Version Format

### [MAJOR.MINOR.PATCH] - YYYY-MM-DD

- **MAJOR**: Breaking changes (incompatible API changes)
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Change Types

- **Added**: New features
- **Changed**: Changes in existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security vulnerability fixes

---

## 📝 How to Update This File

**¿Cuándo actualizar el CHANGELOG?**
- Antes de cada publicación (release)
- Cada vez que agregas una feature, corriges un bug, o haces un cambio importante

**Analogía con Figma**: Es como mantener un registro de cambios en tu biblioteca de componentes. Cada vez que actualizas un componente, documentas qué cambió.

### Proceso Paso a Paso

**1. Durante el desarrollo** (mientras trabajas):
- Agrega items a la sección `[Unreleased]` cuando haces cambios
- No esperes hasta el final, documenta mientras desarrollas

**2. Antes de publicar** (release):
- Mueve items de `[Unreleased]` a una nueva sección de versión
- Actualiza la fecha (formato: YYYY-MM-DD)
- Asegúrate de que todos los cambios importantes estén documentados
- Agrega la nueva sección ANTES de `[Unreleased]`

**3. Después de publicar**:
- Commit con mensaje: `chore: update CHANGELOG for vX.Y.Z`
- El tag de git se crea automáticamente con `npm version`

### Estructura de una Entrada

```markdown
## [VERSION] - YYYY-MM-DD

### Added
- Nueva funcionalidad que no existía antes

### Changed
- Cambios en funcionalidad existente (compatible hacia atrás)

### Deprecated
- Funcionalidad que seguirá funcionando pero será removida en el futuro

### Removed
- Funcionalidad que fue eliminada (breaking change)

### Fixed
- Corrección de bugs

### Security
- Correcciones de vulnerabilidades de seguridad
```

### Ejemplos Reales

#### Ejemplo 1: Release Minor (Nueva Feature)

```markdown
## [0.2.0] - 2024-12-15

### Added
- Input component with validation states (required, error, success)
- FormField molecule component that wraps Input with Label
- Icon prop support for Button component
- New color token: `color-success-500`

### Changed
- Button component now accepts `icon` prop (backward compatible)
- Updated primary color token from `#2196f3` to `#1976d2` for better contrast

### Fixed
- Button disabled state now properly prevents click events
- Input focus state now correctly applies focus ring

### Technical Details
- Added 3 new components
- Updated 2 existing components
- Added 5 new design tokens
```

#### Ejemplo 2: Release Patch (Bugfix)

```markdown
## [0.1.2] - 2024-12-10

### Fixed
- Button component now correctly applies disabled styles in Safari
- Input component no longer loses focus on validation error
- Design tokens CSS variables now properly scoped to prevent conflicts

### Technical Details
- Fixed Safari-specific CSS issue with `:disabled` pseudo-class
- Resolved focus management bug in Input component
```

#### Ejemplo 3: Release Major (Breaking Change)

```markdown
## [1.0.0] - 2024-12-20

### Changed
- **BREAKING**: Button component `variant` prop renamed to `style`
  - Migration: Change `variant="primary"` to `style="primary"`
  - Old prop will be removed in v2.0.0
- **BREAKING**: Removed `outline` variant from Button (use `style="secondary"` with `outline` prop instead)

### Deprecated
- Button `variant` prop (use `style` instead)
  - Will be removed in v2.0.0

### Added
- Button now supports `outline` boolean prop for outline style
- New migration guide in README.md

### Technical Details
- This is a major release due to API changes
- See MIGRATION.md for detailed upgrade instructions
```

### Buenas Prácticas

✅ **DO** (Haz esto):
- Documenta TODOS los cambios importantes
- Usa lenguaje claro y específico
- Agrupa cambios relacionados
- Incluye detalles técnicos cuando son relevantes
- Menciona breaking changes claramente

❌ **DON'T** (No hagas esto):
- No documentes cambios internos que no afectan a usuarios
- No uses lenguaje técnico sin contexto
- No olvides actualizar antes de publicar
- No mezcles tipos de cambios (Added vs Changed)
- No documentes cambios que no están en el código

### Categorías de Cambios Explicadas

**Added** (Agregado):
- Nuevos componentes
- Nuevas props en componentes existentes
- Nuevos design tokens
- Nueva documentación
- Nuevos ejemplos

**Changed** (Cambiado):
- Modificaciones en componentes existentes que son compatibles hacia atrás
- Actualizaciones de dependencias
- Mejoras de performance
- Cambios en estilos que no rompen layouts existentes

**Deprecated** (Deprecado):
- Funcionalidad que seguirá funcionando pero será removida
- Props que serán eliminadas en el futuro
- Componentes que serán reemplazados

**Removed** (Removido):
- Componentes eliminados
- Props eliminadas
- Funcionalidad eliminada
- Siempre indica versión anterior donde existía

**Fixed** (Corregido):
- Bugs corregidos
- Problemas de accesibilidad resueltos
- Errores de TypeScript corregidos
- Problemas de estilos corregidos

**Security** (Seguridad):
- Vulnerabilidades corregidas
- Actualizaciones de seguridad
- Parches de seguridad

### Template para Copiar y Pegar

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- 

### Changed
- 

### Deprecated
- 

### Removed
- 

### Fixed
- 

### Security
- 

### Technical Details
- 
```

### Integración con Git

**Convención de Commits** (recomendado usar junto con CHANGELOG):

```bash
# Para features
git commit -m "feat: add Input component with validation"

# Para bugfixes
git commit -m "fix: button disabled state in Safari"

# Para breaking changes
git commit -m "feat!: rename Button variant prop to style"

# Para documentación
git commit -m "docs: update CHANGELOG for v0.2.0"
```

El prefijo (`feat:`, `fix:`, etc.) ayuda a generar el CHANGELOG automáticamente si usas herramientas como `standard-version` o `release-please` (avanzado).

---

## 🔄 Flujo de Trabajo Recomendado

1. **Durante desarrollo**: Agrega items a `[Unreleased]` mientras trabajas
2. **Antes de release**: Mueve items a nueva versión y actualiza fecha
3. **Ejecuta release**: `npm run release:patch/minor/major`
4. **Verifica**: El CHANGELOG está actualizado y correcto
5. **Commit**: `git commit -m "chore: update CHANGELOG for vX.Y.Z"`

---

## Links

- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

