# 🚀 Quick Start - Deployment

Guía rápida para publicar tu design system por primera vez.

---

## ⚡ Publicación Rápida (3 pasos)

### 1. Preparar
```bash
# Verifica que todo está bien
npm run release:dry-run
```

### 2. Publicar
```bash
# Para bugfix
npm run release:patch

# Para nueva feature
npm run release:minor

# Para breaking change
npm run release:major
```

### 3. Verificar
```bash
npm view @madergk/bio-ds
```

---

## 📚 Documentación Completa

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Guía completa de publicación
- **[BUILD_SCRIPTS.md](./BUILD_SCRIPTS.md)** - Explicación de todos los scripts
- **[CHANGELOG.md](./CHANGELOG.md)** - Cómo mantener el changelog
- **[INSTALLATION.md](./INSTALLATION.md)** - Cómo instalar el design system

---

## 🎯 Scripts Más Usados

| Quiero... | Comando |
|-----------|---------|
| Verificar antes de publicar | `npm run release:dry-run` |
| Publicar bugfix | `npm run release:patch` |
| Publicar feature | `npm run release:minor` |
| Publicar breaking change | `npm run release:major` |
| Crear archivo local (.tgz) | `npm run publish:local` |
| Verificar build | `npm run build:verify` |

---

## ⚠️ Antes de Publicar

1. ✅ Actualiza `CHANGELOG.md` con los cambios
2. ✅ Commitea todos los cambios
3. ✅ Ejecuta `npm run release:dry-run` para verificar
4. ✅ Elige el tipo de versión correcto (patch/minor/major)

---

## 🆘 ¿Problemas?

Consulta [DEPLOYMENT.md](./DEPLOYMENT.md#-puntos-de-atención) para soluciones a errores comunes.

