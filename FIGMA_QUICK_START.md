# 🚀 Quick Start: Conectar Figma con el Código

Guía rápida para empezar a sincronizar tokens entre Figma y el código en 5 minutos.

---

## ⚡ Pasos Rápidos

### 1. Instalar Figma Tokens Plugin (2 min)

1. Abre Figma Desktop o Figma en el navegador
2. Ve a `Plugins` → `Browse plugins in Community`
3. Busca "Figma Tokens" (por Jan Six)
4. Haz clic en "Install"

### 2. Importar Tokens Existentes (1 min)

1. En Figma, ve a `Plugins` → `Figma Tokens` → `Open`
2. Haz clic en "Import"
3. Selecciona la carpeta `tokens/` de este proyecto
4. ¡Listo! Tus tokens ahora están en Figma

### 3. Sincronizar Tokens (1 min)

**Opción A: Local File (Manual)**
- **Desde Figma al código:**
  1. Actualiza tokens en Figma Tokens Plugin
  2. Haz clic en "Export" o "Sync"
  3. Selecciona la carpeta `tokens/`
  4. Ejecuta: `npm run tokens:sync`

- **Desde código a Figma:**
  1. Edita archivos en `tokens/*.json`
  2. En Figma, abre Figma Tokens Plugin
  3. Haz clic en "Import"
  4. Selecciona la carpeta `tokens/`

**Opción B: GitHub Sync (Automático) ⭐**
- Configura sincronización automática con GitHub
- Los cambios se sincronizan automáticamente
- **📖 Ver guía completa:** [FIGMA_GITHUB_SYNC.md](./FIGMA_GITHUB_SYNC.md)

### 4. Validar Tokens (1 min)

```bash
npm run tokens:validate
```

Esto verifica que todos los tokens son válidos y están correctamente estructurados.

---

## 📋 Comandos Útiles

```bash
# Validar tokens
npm run tokens:validate

# Sincronizar con Figma (valida y reconstruye)
npm run tokens:sync

# Solo construir tokens (sin validar)
npm run tokens:build

# Watch mode (reconstruye automáticamente)
npm run tokens:watch
```

---

## 🎯 Convenciones de Nomenclatura

**Regla simple:** En Figma usa `/`, en código se convierte en `.`

```
Figma:          color/primary/500
Código:         color.primary.500
```

**Ejemplos:**
- `spacing/md` → `spacing.md`
- `typography/fontSize/base` → `typography.fontSize.base`
- `border/radius/md` → `border.radius.md`

---

## ✅ Checklist Rápido

- [ ] Plugin Figma Tokens instalado
- [ ] Tokens importados desde `tokens/`
- [ ] Tokens validados: `npm run tokens:validate`
- [ ] Probar sincronización bidireccional
- [ ] Leer guía completa: [FIGMA_WORKFLOW.md](./FIGMA_WORKFLOW.md)

---

## 🆘 Problemas Comunes

### "No se encuentran tokens"
→ Asegúrate de seleccionar la carpeta `tokens/` (no `src/tokens/`)

### "Validación falla"
→ Ejecuta `npm run tokens:validate` para ver errores específicos

### "Los tokens no se actualizan"
→ Asegúrate de ejecutar `npm run tokens:build` después de importar

---

## 📚 Documentación Completa

- **[Workflow Completo](./FIGMA_WORKFLOW.md)** - Guía detallada del proceso
- **[Guía de Nomenclatura](./FIGMA_NAMING_GUIDE.md)** - Convenciones y ejemplos
- **[Proceso de Handoff](./FIGMA_HANDOFF.md)** - Cómo transferir diseños al código

---

**¿Listo para empezar?** Sigue los pasos arriba y estarás sincronizado en 5 minutos! 🎉

