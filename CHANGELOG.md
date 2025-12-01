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

## How to Update This File

When releasing a new version:

1. Move items from `[Unreleased]` to a new version section
2. Update the date
3. Add new items to `[Unreleased]` for future releases
4. Commit with message: `chore: update CHANGELOG for vX.Y.Z`

### Example Entry

```markdown
## [0.2.0] - 2024-12-15

### Added
- Input component with validation states
- FormField molecule component

### Changed
- Button component now supports icon prop
- Updated primary color token

### Fixed
- Button disabled state now properly prevents clicks
```

---

## Links

- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

