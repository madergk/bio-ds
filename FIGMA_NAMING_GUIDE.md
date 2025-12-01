# 📐 Guía de Nomenclatura: Figma ↔ Código

Esta guía asegura que los nombres de tokens en Figma se mapeen correctamente a la estructura JSON del código.

---

## 🎯 PRINCIPIO FUNDAMENTAL

**En Figma:** Usa `/` como separador  
**En Código:** Se convierte en `.` en la estructura JSON

```
Figma:  color/primary/500
Código: color.primary.500
```

---

## 🎨 COLORES

### Estructura Base

```
Figma Token Path              →  JSON Path                    →  Uso
─────────────────────────────────────────────────────────────────────────────
color/base/white             →  color.base.white            →  Fondos, texto
color/base/black             →  color.base.black            →  Texto, bordes
```

### Colores Primarios

```
Figma Token Path              →  JSON Path                    →  Uso
─────────────────────────────────────────────────────────────────────────────
color/primary/50              →  color.primary.50            →  Backgrounds muy claros
color/primary/100             →  color.primary.100           →  Backgrounds claros
color/primary/200             →  color.primary.200           →  Hover states claros
color/primary/300             →  color.primary.300           →  Borders claros
color/primary/400             →  color.primary.400           →  Accent colors
color/primary/500             →  color.primary.500            →  Color principal ⭐
color/primary/600             →  color.primary.600            →  Hover states
color/primary/700             →  color.primary.700            →  Active states
color/primary/800             →  color.primary.800            →  Texto sobre fondo claro
color/primary/900             →  color.primary.900            →  Texto, elementos destacados
```

### Colores Semánticos

```
Figma Token Path              →  JSON Path                    →  Uso
─────────────────────────────────────────────────────────────────────────────
color/semantic/success        →  color.semantic.success      →  Mensajes de éxito
color/semantic/warning        →  color.semantic.warning      →  Advertencias
color/semantic/error          →  color.semantic.error         →  Errores, validaciones
color/semantic/info           →  color.semantic.info         →  Información
```

### Ejemplo de uso en Figma

1. Selecciona un rectángulo
2. En "Fills", haz clic en el ícono de variables
3. Busca `color/primary/500`
4. El elemento quedará vinculado al token

---

## 📏 ESPACIADO

### Estructura

```
Figma Token Path              →  JSON Path                    →  Valor
─────────────────────────────────────────────────────────────────────────────
spacing/xs                    →  spacing.xs                   →  4px
spacing/sm                    →  spacing.sm                   →  8px
spacing/base                  →  spacing.base                 →  8px
spacing/md                    →  spacing.md                   →  16px
spacing/lg                    →  spacing.lg                   →  24px
spacing/xl                    →  spacing.xl                   →  32px
spacing/xxl                   →  spacing.xxl                 →  48px
spacing/xxxl                  →  spacing.xxxl                 →  64px
```

### Uso en Figma

- **Padding:** Usa tokens de spacing para padding interno
- **Gap:** Usa tokens para gaps en auto-layout
- **Margin:** Usa tokens para márgenes entre elementos

**Ejemplo:**
- Padding de un botón: `spacing/md` (16px)
- Gap entre iconos: `spacing/sm` (8px)
- Margin entre secciones: `spacing/lg` (24px)

---

## ✍️ TIPOGRAFÍA

### Font Family

```
Figma Token Path                    →  JSON Path
─────────────────────────────────────────────────────────
typography/fontFamily/primary      →  typography.fontFamily.primary
typography/fontFamily/monospace    →  typography.fontFamily.monospace
```

### Font Size

```
Figma Token Path              →  JSON Path                    →  Valor
─────────────────────────────────────────────────────────────────────────────
typography/fontSize/xs       →  typography.fontSize.xs       →  12px
typography/fontSize/sm       →  typography.fontSize.sm       →  14px
typography/fontSize/base     →  typography.fontSize.base     →  16px
typography/fontSize/lg       →  typography.fontSize.lg       →  18px
typography/fontSize/xl       →  typography.fontSize.xl       →  20px
typography/fontSize/2xl      →  typography.fontSize.2xl      →  24px
typography/fontSize/3xl      →  typography.fontSize.3xl      →  30px
typography/fontSize/4xl      →  typography.fontSize.4xl      →  36px
```

### Font Weight

```
Figma Token Path              →  JSON Path                    →  Valor
─────────────────────────────────────────────────────────────────────────────
typography/fontWeight/light  →  typography.fontWeight.light   →  300
typography/fontWeight/normal →  typography.fontWeight.normal  →  400
typography/fontWeight/medium →  typography.fontWeight.medium →  500
typography/fontWeight/semibold → typography.fontWeight.semibold → 600
typography/fontWeight/bold   →  typography.fontWeight.bold    →  700
```

### Line Height

```
Figma Token Path              →  JSON Path                    →  Valor
─────────────────────────────────────────────────────────────────────────────
typography/lineHeight/tight  →  typography.lineHeight.tight   →  1.25
typography/lineHeight/normal →  typography.lineHeight.normal  →  1.5
typography/lineHeight/relaxed → typography.lineHeight.relaxed → 1.75
```

### Uso en Figma

1. Selecciona un texto
2. En las propiedades de texto:
   - **Font:** Usa `typography/fontFamily/primary`
   - **Size:** Usa `typography/fontSize/base`
   - **Weight:** Usa `typography/fontWeight/normal`
   - **Line Height:** Usa `typography/lineHeight/normal`

---

## 🔲 BORDES

### Border Radius

```
Figma Token Path              →  JSON Path                    →  Valor
─────────────────────────────────────────────────────────────────────────────
border/radius/none           →  border.radius.none           →  0
border/radius/sm             →  border.radius.sm             →  4px
border/radius/md             →  border.radius.md             →  8px
border/radius/lg             →  border.radius.lg             →  12px
border/radius/full           →  border.radius.full           →  9999px
```

### Border Width

```
Figma Token Path              →  JSON Path                    →  Valor
─────────────────────────────────────────────────────────────────────────────
border/width/thin            →  border.width.thin            →  1px
border/width/medium          →  border.width.medium          →  2px
border/width/thick           →  border.width.thick           →  4px
```

### Uso en Figma

1. Selecciona un elemento con borde
2. En "Corner Radius", usa `border/radius/md`
3. En "Stroke", usa `border/width/thin`

---

## ✅ REGLAS DE NOMENCLATURA

### ✅ HACER

- ✅ Usar minúsculas siempre: `primary` no `Primary`
- ✅ Usar camelCase para nombres compuestos: `fontFamily` no `font-family`
- ✅ Usar `/` como separador en Figma
- ✅ Mantener consistencia en escalas: `xs/sm/md/lg/xl`
- ✅ Usar nombres descriptivos: `semantic/success` no `green`

### ❌ NO HACER

- ❌ No usar espacios: `color primary` ❌ → `color/primary` ✅
- ❌ No usar mayúsculas: `Color/Primary` ❌ → `color/primary` ✅
- ❌ No usar guiones: `color-primary-500` ❌ → `color/primary/500` ✅
- ❌ No usar nombres genéricos: `color/blue` ❌ → `color/primary/500` ✅
- ❌ No mezclar convenciones: `color/PRIMARY/500` ❌ → `color/primary/500` ✅

---

## 🔍 VERIFICACIÓN

### Checklist antes de crear un token

- [ ] ¿Sigue la estructura `categoría/subcategoría/nombre`?
- [ ] ¿Está en minúsculas?
- [ ] ¿Usa camelCase para nombres compuestos?
- [ ] ¿Es descriptivo y claro?
- [ ] ¿Es consistente con tokens existentes?

### Ejemplo: Crear un nuevo color secundario

**❌ Incorrecto:**
```
Secondary-Color-500
secondary_color_500
Color/Secondary/500
```

**✅ Correcto:**
```
color/secondary/500
```

Esto se mapeará a: `color.secondary.500` en el código.

---

## 📊 TABLA DE REFERENCIA RÁPIDA

| Tipo | Figma | Código | Ejemplo |
|------|-------|--------|---------|
| Color | `color/primary/500` | `color.primary.500` | `#2196f3` |
| Spacing | `spacing/md` | `spacing.md` | `16px` |
| Typography | `typography/fontSize/base` | `typography.fontSize.base` | `16px` |
| Border | `border/radius/md` | `border.radius.md` | `8px` |

---

## 🚀 PRÓXIMOS PASOS

1. Revisa tus tokens actuales en Figma
2. Asegúrate de que siguen esta convención
3. Si no, renómbralos usando esta guía
4. Exporta desde Figma para sincronizar

---

**Última actualización:** Diciembre 2025

