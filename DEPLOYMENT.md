# Deployment Guide

Esta guía explica cómo publicar y distribuir el Bio Design System.

## 🎯 Opciones de Distribución

### 1. **npm (Public Registry)**
**Mejor para**: Proyectos open source o uso público

**Ventajas**:
- ✅ Fácil instalación: `npm install @madergk/bio-ds`
- ✅ Accesible para cualquiera
- ✅ Versionado automático
- ✅ Integración con CI/CD

**Desventajas**:
- ❌ Requiere cuenta npm (gratis)
- ❌ Nombre debe ser único globalmente
- ❌ Público por defecto (puede ser privado con pago)

**Cuándo usarlo**: Si quieres que cualquiera pueda instalar tu design system

---

### 2. **GitHub Packages**
**Mejor para**: Proyectos privados o dentro de una organización

**Ventajas**:
- ✅ Integrado con GitHub
- ✅ Privado por defecto (gratis para open source)
- ✅ Mismo workflow que tu código
- ✅ Control de acceso por repositorio

**Desventajas**:
- ❌ Requiere configuración de `.npmrc`
- ❌ Menos conocido que npm público

**Cuándo usarlo**: Si tu código está en GitHub y quieres control de acceso

---

### 3. **Local/File System**
**Mejor para**: Desarrollo local o testing

**Ventajas**:
- ✅ No requiere servidor
- ✅ Perfecto para testing
- ✅ Control total

**Desventajas**:
- ❌ No escalable
- ❌ Solo funciona localmente
- ❌ No hay versionado automático

**Cuándo usarlo**: Para probar antes de publicar, o en proyectos muy pequeños

---

## 📦 Recomendación

Para este proyecto, recomendamos empezar con **npm público** porque:
1. Es el estándar de la industria
2. Fácil de usar para los consumidores
3. Permite crecimiento futuro
4. Puedes migrar a GitHub Packages después si es necesario

---

## 🚀 Proceso de Publicación

### Paso 1: Preparar el Build
```bash
npm run build:library
```

### Paso 2: Verificar el Output
Revisa que `dist/bio-ds/` contenga todos los archivos necesarios.

### Paso 3: Publicar
```bash
npm publish
```

### Paso 4: Verificar Publicación
```bash
npm view @madergk/bio-ds
```

---

## 📝 Próximos Pasos

1. **Configurar cuenta npm**: `npm login`
2. **Verificar nombre**: Asegúrate que `@madergk/bio-ds` esté disponible
3. **Primera publicación**: `npm publish --access public` (para scoped packages)
4. **Actualizaciones**: Usa versionado semántico (ver CHANGELOG.md)

