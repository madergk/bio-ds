# 🔄 GitHub Sync con Figma Tokens

Guía completa para configurar sincronización automática entre Figma y GitHub usando Figma Tokens Plugin.

---

## 🎯 OBJETIVO

Configurar sincronización automática bidireccional entre:
- **Figma** (donde diseñas los tokens)
- **GitHub** (donde está tu código)

Esto permite que los cambios en Figma se reflejen automáticamente en tu repositorio, y viceversa.

---

## 💭 RAZONAMIENTO

### ¿Por qué GitHub Sync?

**Sin GitHub Sync:**
- ❌ Cambias tokens en Figma → Tienes que exportar manualmente
- ❌ Cambias tokens en código → Tienes que importar manualmente en Figma
- ❌ Fácil olvidar sincronizar
- ❌ Pueden quedar desincronizados

**Con GitHub Sync:**
- ✅ Cambias tokens en Figma → Se guardan automáticamente en GitHub
- ✅ Cambias tokens en código → Se sincronizan automáticamente con Figma
- ✅ Siempre sincronizado
- ✅ Historial de cambios en Git
- ✅ Colaboración en tiempo real

### ¿Cuándo usar GitHub Sync?

**✅ Usa GitHub Sync cuando:**
- Tienes un equipo trabajando en el design system
- Quieres automatización completa
- Necesitas historial de cambios de tokens
- Trabajas con múltiples diseñadores/desarrolladores

**⚠️ Usa Local File cuando:**
- Trabajas solo o en equipo pequeño
- Prefieres control manual
- No necesitas historial de Git para tokens
- Estás empezando y quieres simplicidad

---

## 📋 REQUISITOS PREVIOS

Antes de configurar GitHub Sync, necesitas:

1. ✅ **Repositorio en GitHub** (ya lo tienes: `madergk/bio-ds`)
2. ✅ **Acceso al repositorio** (permisos de escritura)
3. ✅ **GitHub Personal Access Token** (lo crearemos juntos)
4. ✅ **Figma Tokens Plugin instalado** (ya lo tienes o lo instalamos)

---

## 🔧 CONFIGURACIÓN PASO A PASO

### Paso 1: Crear GitHub Personal Access Token

Un token es como una contraseña especial que permite a Figma acceder a tu repositorio de forma segura.

1. **Ve a GitHub:**
   - Abre: https://github.com/settings/tokens
   - O: GitHub → Tu perfil → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Crear nuevo token:**
   - Haz clic en "Generate new token" → "Generate new token (classic)"
   - **Nombre:** `Figma Tokens Sync` (o el que prefieras)
   - **Expiración:** Elige según tu preferencia (90 días, 1 año, o sin expiración)
   - **Permisos necesarios:**
     - ✅ `repo` (acceso completo a repositorios)
       - Esto incluye: `repo:status`, `repo_deployment`, `public_repo`, `repo:invite`, `security_events`

3. **Generar y copiar:**
   - Haz clic en "Generate token"
   - **⚠️ IMPORTANTE:** Copia el token inmediatamente (solo se muestra una vez)
   - Guárdalo en un lugar seguro (gestor de contraseñas, notas seguras)

**💡 Tip:** Si pierdes el token, tendrás que crear uno nuevo.

---

### Paso 2: Configurar GitHub Sync en Figma Tokens

1. **Abrir Figma Tokens Plugin:**
   - En Figma: `Plugins` → `Figma Tokens` → `Open`

2. **Ir a Settings:**
   - Haz clic en el ícono de ⚙️ (Settings) en la parte superior

3. **Configurar GitHub Sync:**
   - En "Storage location", selecciona **"GitHub"**
   - Aparecerán campos para configurar:

4. **Completar información:**
   ```
   Owner: madergk
   Repository: bio-ds
   Branch: main (o master, según tu rama principal)
   Path: tokens (ruta donde están tus tokens en el repo)
   Token: [pega tu GitHub Personal Access Token aquí]
   ```

   **Explicación de cada campo:**
   - **Owner:** Tu usuario de GitHub (`madergk`)
   - **Repository:** Nombre del repositorio (`bio-ds`)
   - **Branch:** Rama principal (`main` o `master`)
   - **Path:** Carpeta donde están los tokens (`tokens`)
   - **Token:** El token que creaste en el Paso 1

5. **Guardar configuración:**
   - Haz clic en "Save" o "Apply"
   - El plugin intentará conectarse a GitHub
   - Si todo está bien, verás un mensaje de éxito

---

### Paso 3: Verificar la conexión

1. **Probar sincronización:**
   - En el plugin, haz clic en "Sync" o "Pull from GitHub"
   - Deberías ver tus tokens actuales cargándose desde GitHub

2. **Verificar en GitHub:**
   - Ve a tu repositorio: https://github.com/madergk/bio-ds
   - Navega a la carpeta `tokens/`
   - Deberías ver tus archivos JSON

---

## 🔄 FLUJO DE TRABAJO CON GITHUB SYNC

### Flujo 1: Cambiar tokens en Figma → GitHub

```
1. Diseñador abre Figma Tokens Plugin
2. Modifica tokens (colores, spacing, etc.)
3. Haz clic en "Push to GitHub" o "Sync"
4. Los cambios se guardan automáticamente en GitHub
5. Los archivos en tokens/ se actualizan en el repositorio
6. Desarrollador hace pull de los cambios
7. Ejecuta: npm run tokens:build
8. Los tokens se regeneran en el código
```

**Ventaja:** El diseñador no necesita saber Git, solo hace clic en "Sync".

### Flujo 2: Cambiar tokens en código → Figma

```
1. Desarrollador edita tokens/*.json
2. Hace commit y push a GitHub
3. En Figma, diseñador abre Figma Tokens Plugin
4. Haz clic en "Pull from GitHub" o "Sync"
5. Los tokens se actualizan automáticamente en Figma
6. Diseñador ve los cambios reflejados
```

**Ventaja:** El desarrollador trabaja en código, Figma se actualiza automáticamente.

---

## 📐 ESTRUCTURA EN GITHUB

Con GitHub Sync, tus tokens deben estar en esta estructura:

```
bio-ds/
└── tokens/
    ├── colors.json
    ├── spacing.json
    ├── typography.json
    └── border.json
```

**Path en la configuración:** `tokens`

Si tus tokens están en otra ubicación, ajusta el campo "Path" en la configuración.

---

## ✅ COMANDOS ÚTILES CON GITHUB SYNC

### Para el Diseñador (en Figma)

1. **Sincronizar cambios a GitHub:**
   - Abre Figma Tokens Plugin
   - Haz cambios
   - Haz clic en "Push to GitHub" o "Sync"

2. **Obtener cambios desde GitHub:**
   - Abre Figma Tokens Plugin
   - Haz clic en "Pull from GitHub" o "Sync"

### Para el Desarrollador (en código)

```bash
# 1. Obtener últimos cambios de tokens desde GitHub
git pull origin main

# 2. Validar tokens
npm run tokens:validate

# 3. Reconstruir tokens generados
npm run tokens:build

# 4. Si modificaste tokens, hacer commit y push
git add tokens/
git commit -m "chore: update design tokens"
git push origin main
```

---

## 🚨 PROBLEMAS COMUNES Y SOLUCIONES

### Error: "Authentication failed"

**Causa:** Token inválido o expirado

**Solución:**
1. Verifica que el token esté correctamente copiado (sin espacios)
2. Verifica que el token tenga permisos `repo`
3. Si expiró, crea uno nuevo y actualiza la configuración

### Error: "Repository not found"

**Causa:** Nombre incorrecto del repositorio o sin acceso

**Solución:**
1. Verifica que el Owner sea correcto (`madergk`)
2. Verifica que el Repository sea correcto (`bio-ds`)
3. Verifica que tengas acceso al repositorio
4. Verifica que el token tenga permisos `repo`

### Error: "Path not found"

**Causa:** La ruta especificada no existe en el repositorio

**Solución:**
1. Verifica que la carpeta `tokens/` exista en la raíz del repo
2. Verifica que el Path sea correcto (`tokens`, no `./tokens` o `/tokens`)
3. Si los tokens están en otra ubicación, ajusta el Path

### Error: "Branch not found"

**Causa:** La rama especificada no existe

**Solución:**
1. Verifica cuál es tu rama principal: `git branch`
2. Usualmente es `main` o `master`
3. Actualiza la configuración con la rama correcta

### Los cambios no se sincronizan

**Causa:** No hiciste push/pull correctamente

**Solución:**
1. En Figma: Asegúrate de hacer clic en "Push to GitHub" después de cambiar tokens
2. En código: Asegúrate de hacer `git push` después de cambiar tokens
3. Verifica que los cambios estén en GitHub antes de hacer pull

---

## 🔒 SEGURIDAD Y MEJORES PRÁCTICAS

### Proteger el Token

1. **No compartir el token:**
   - No lo subas a Git
   - No lo compartas en Slack/email
   - Cada persona debe crear su propio token

2. **Rotar tokens periódicamente:**
   - Crea tokens con expiración
   - Rótalos cada 90 días o según tu política

3. **Usar tokens con permisos mínimos:**
   - Solo permisos `repo` (ya incluido en la selección)
   - No dar permisos administrativos innecesarios

### Trabajo en Equipo

1. **Cada persona configura su propio token:**
   - No compartir tokens entre miembros del equipo
   - Cada uno crea su token personal

2. **Comunicar cambios:**
   - Si cambias tokens, avisa al equipo
   - Usa commits descriptivos: `chore: update primary color to #2196f3`

3. **Revisar cambios antes de hacer push:**
   - En Figma: Revisa los cambios antes de "Push to GitHub"
   - En código: Revisa `git diff` antes de hacer commit

---

## 🔄 COMPARACIÓN: GitHub Sync vs Local File

| Característica | GitHub Sync | Local File |
|----------------|-------------|------------|
| **Automatización** | ✅ Automática | ❌ Manual |
| **Historial** | ✅ Git history | ❌ Sin historial |
| **Colaboración** | ✅ Múltiples personas | ⚠️ Limitada |
| **Complejidad** | ⚠️ Requiere token | ✅ Más simple |
| **Offline** | ❌ Necesita internet | ✅ Funciona offline |
| **Recomendado para** | Equipos, producción | Individual, prototipos |

---

## 📚 RECURSOS ADICIONALES

- [Figma Tokens Plugin Docs](https://docs.tokens.studio/sync/github)
- [GitHub Personal Access Tokens Guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

---

## ✅ CHECKLIST DE CONFIGURACIÓN

Antes de empezar a usar GitHub Sync:

- [ ] Repositorio GitHub creado y accesible
- [ ] GitHub Personal Access Token creado
- [ ] Token guardado de forma segura
- [ ] Figma Tokens Plugin instalado
- [ ] GitHub Sync configurado en el plugin
- [ ] Conexión verificada (pull/push funciona)
- [ ] Equipo informado sobre el proceso
- [ ] Documentación actualizada

---

## ➡️ PRÓXIMOS PASOS

1. ✅ Crear GitHub Personal Access Token
2. ✅ Configurar GitHub Sync en Figma Tokens
3. ✅ Probar sincronización bidireccional
4. ⏭️ Compartir configuración con el equipo
5. ⏭️ Establecer proceso de trabajo colaborativo

---

## 💡 TIPS Y TRUCOS

### Tip 1: Usar ramas para experimentar

Puedes configurar GitHub Sync para usar una rama diferente (ej: `tokens-experiment`):
- Experimenta con tokens sin afectar `main`
- Cuando estés listo, mergea a `main`

### Tip 2: Revisar cambios antes de push

En Figma Tokens Plugin, puedes ver un diff antes de hacer push:
- Revisa qué tokens cambiaron
- Confirma antes de sincronizar

### Tip 3: Backup manual

Aunque GitHub es tu backup, puedes exportar manualmente:
- Exporta tokens a local como backup
- Útil antes de cambios grandes

---

**Última actualización:** Diciembre 2025  
**Mantenedor:** Equipo de Design System

