# 🎨 Workflow Figma ↔ Código

## 🎯 OBJETIVO

Establecer un flujo de trabajo bidireccional entre Figma y el código que permita:
- Sincronizar tokens de diseño desde Figma al código
- Mantener consistencia entre diseño y implementación
- Validar que los tokens coincidan entre ambas plataformas
- Facilitar el handoff entre diseñadores y desarrolladores

---

## 💭 RAZONAMIENTO

### ¿Por qué necesitamos conectar Figma con el código?

Imagina que tienes un color primario en Figma. Si cambias ese color en Figma, necesitas:
1. Recordar actualizarlo en el código
2. Buscar todos los lugares donde se usa
3. Actualizar manualmente cada archivo
4. Verificar que no se rompió nada

Con una conexión automatizada:
- Cambias en Figma → Se actualiza automáticamente en el código
- O cambias en el código → Se sincroniza con Figma
- Todo queda siempre consistente

### Opciones disponibles

#### 1. **Figma Tokens Plugin** (Recomendado para empezar) ⭐
**Ventajas:**
- ✅ Plugin gratuito y fácil de usar
- ✅ Sincronización bidireccional
- ✅ Compatible con Style Dictionary
- ✅ No requiere conocimientos técnicos avanzados
- ✅ Funciona directamente desde Figma
- ✅ Soporta GitHub Sync para automatización

**Desventajas:**
- ⚠️ Requiere instalar el plugin en Figma
- ⚠️ Sincronización manual (click en botón) - a menos que uses GitHub Sync

**Cuándo usarlo:** Para la mayoría de proyectos, especialmente al inicio.

**📖 Para GitHub Sync, ver [FIGMA_GITHUB_SYNC.md](./FIGMA_GITHUB_SYNC.md)**

#### 2. **Figma API** (Para automatización avanzada)
**Ventajas:**
- ✅ Sincronización completamente automática
- ✅ Integración con CI/CD
- ✅ Control total del proceso

**Desventajas:**
- ❌ Requiere conocimientos de programación
- ❌ Necesita configuración de tokens de API
- ❌ Más complejo de mantener

**Cuándo usarlo:** Cuando el equipo crece y necesitas automatización completa.

#### 3. **Export Manual** (Solo para casos simples)
**Ventajas:**
- ✅ No requiere herramientas adicionales
- ✅ Control total sobre qué exportar

**Desventajas:**
- ❌ Propenso a errores humanos
- ❌ No escala bien
- ❌ Requiere disciplina del equipo

**Cuándo usarlo:** Solo para proyectos muy pequeños o prototipos.

---

## 📋 ESTRATEGIA RECOMENDADA

Para este proyecto, vamos a implementar **Figma Tokens Plugin** porque:
1. Es la opción más simple que funciona
2. Se integra perfectamente con tu Style Dictionary actual
3. Permite crecer hacia automatización más adelante
4. No requiere cambios en tu código existente

---

## 🔄 FLUJO DE TRABAJO

### Flujo 1: Figma → Código (Sincronización de Tokens)

```
1. Diseñador actualiza tokens en Figma (usando Figma Tokens Plugin)
2. Diseñador exporta tokens desde el plugin
3. Tokens se guardan en carpeta tokens/
4. Style Dictionary procesa los tokens
5. Tokens se generan en múltiples formatos (CSS, TS, JSON)
6. Componentes usan los tokens actualizados
```

### Flujo 2: Código → Figma (Actualización desde código)

```
1. Desarrollador actualiza tokens en tokens/*.json
2. Ejecuta script de sincronización
3. Tokens se importan a Figma via plugin
4. Diseñador verifica cambios en Figma
```

---

## 📐 GUÍA DE NOMENCLATURA

### Estructura de nombres en Figma

Para que los tokens se mapeen correctamente, usa esta estructura en Figma:

#### Colores
```
Figma Token Name          →  Código JSON Path
─────────────────────────────────────────────
color/base/white         →  color.base.white
color/base/black         →  color.base.black
color/primary/50         →  color.primary.50
color/primary/500        →  color.primary.500
color/semantic/success   →  color.semantic.success
color/semantic/error     →  color.semantic.error
```

**Regla:** Usa `/` como separador en Figma, se convierte en `.` en JSON

#### Espaciado
```
Figma Token Name      →  Código JSON Path
─────────────────────────────────────────
spacing/xs           →  spacing.xs
spacing/sm           →  spacing.sm
spacing/base         →  spacing.base
spacing/md           →  spacing.md
spacing/lg           →  spacing.lg
```

#### Tipografía
```
Figma Token Name                    →  Código JSON Path
─────────────────────────────────────────────────────────
typography/fontFamily/primary      →  typography.fontFamily.primary
typography/fontSize/xs             →  typography.fontSize.xs
typography/fontSize/base           →  typography.fontSize.base
typography/fontWeight/normal       →  typography.fontWeight.normal
typography/lineHeight/normal       →  typography.lineHeight.normal
```

#### Bordes
```
Figma Token Name              →  Código JSON Path
─────────────────────────────────────────────────
border/radius/none           →  border.radius.none
border/radius/sm             →  border.radius.sm
border/radius/md             →  border.radius.md
border/width/thin            →  border.width.thin
border/width/medium          →  border.width.medium
```

### Convenciones importantes

1. **Usa minúsculas siempre** - `primary` no `Primary`
2. **Usa camelCase para nombres compuestos** - `fontFamily` no `font-family`
3. **Mantén consistencia** - Si usas `xs/sm/md/lg`, úsalo en todos los tokens
4. **Evita espacios** - Usa `/` o camelCase, nunca espacios

---

## 🛠️ CONFIGURACIÓN PASO A PASO

### Paso 1: Instalar Figma Tokens Plugin

1. Abre Figma Desktop o Figma en el navegador
2. Ve a `Plugins` → `Browse plugins in Community`
3. Busca "Figma Tokens" (por Jan Six)
4. Haz clic en "Install"
5. El plugin quedará disponible en `Plugins` → `Figma Tokens`

### Paso 2: Configurar el plugin

1. Abre tu archivo de Figma
2. Ve a `Plugins` → `Figma Tokens` → `Open`
3. En la ventana del plugin:
   - Haz clic en "Settings" (⚙️)
   - Selecciona "Sync with GitHub" o "Local file" según prefieras
   - Para empezar, usa "Local file" (más simple)

### Paso 3: Importar tokens existentes

1. En el plugin, haz clic en "Import"
2. Selecciona la carpeta `tokens/` de este proyecto
3. El plugin leerá tus archivos JSON actuales
4. Los tokens aparecerán en Figma como variables

### Paso 4: Usar tokens en Figma

1. Selecciona un elemento en Figma
2. En el panel de propiedades, busca "Variables" o "Fills"
3. Haz clic y selecciona el token que quieres usar
4. El elemento quedará vinculado al token

---

## 🔄 PROCESO DE SINCRONIZACIÓN

### Sincronizar desde Figma al código

1. **En Figma:**
   - Abre el plugin Figma Tokens
   - Haz cambios en los tokens
   - Haz clic en "Export" o "Sync"
   - Selecciona la carpeta `tokens/` del proyecto

2. **En el código:**
   ```bash
   npm run tokens:build
   ```
   Esto regenerará todos los archivos de tokens

3. **Verificar cambios:**
   ```bash
   git status
   git diff tokens/
   ```

### Sincronizar desde código a Figma

1. **En el código:**
   - Edita los archivos en `tokens/*.json`
   - Guarda los cambios

2. **En Figma:**
   - Abre el plugin Figma Tokens
   - Haz clic en "Import"
   - Selecciona la carpeta `tokens/`
   - Los tokens se actualizarán en Figma

---

## ✅ VALIDACIONES DE CONSISTENCIA

Para asegurar que Figma y el código están sincronizados, ejecuta:

```bash
npm run tokens:validate
```

Este script verifica:
- ✅ Que todos los tokens de Figma existen en el código
- ✅ Que los valores coinciden
- ✅ Que no hay tokens huérfanos
- ✅ Que la estructura es correcta

---

## 🚨 ERRORES COMUNES Y SOLUCIONES

### Error: "Token not found in code"
**Causa:** Creaste un token en Figma pero no existe en el código
**Solución:** Exporta desde Figma o crea el token manualmente en el código

### Error: "Value mismatch"
**Causa:** El valor en Figma es diferente al del código
**Solución:** Decide cuál es la fuente de verdad y sincroniza

### Error: "Invalid token name"
**Causa:** El nombre del token no sigue la convención
**Solución:** Revisa la guía de nomenclatura y renombra el token

### Error: "Style Dictionary build failed"
**Causa:** Hay un error de sintaxis en los archivos JSON
**Solución:** Valida el JSON con un validador online o el script de validación

---

## 📚 RECURSOS ADICIONALES

- [Figma Tokens Plugin Docs](https://docs.tokens.studio/)
- [Style Dictionary Docs](https://amzn.github.io/style-dictionary/)
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383)

---

## ➡️ PRÓXIMOS PASOS

1. ✅ Instalar Figma Tokens Plugin
2. ✅ Importar tokens existentes
3. ✅ Probar sincronización bidireccional
4. ⏭️ Configurar validaciones automáticas (opcional)
5. ⏭️ Integrar con CI/CD (avanzado)

---

**Última actualización:** Diciembre 2025  
**Mantenedor:** Equipo de Design System

