# 🤝 Proceso de Handoff: Diseño → Desarrollo

Esta guía documenta el proceso completo para transferir diseños de Figma al código, asegurando que nada se pierda en la traducción.

---

## 🎯 OBJETIVO

Establecer un proceso claro y repetible que permita:
- Transferir diseños de Figma al código sin perder información
- Mantener consistencia entre diseño e implementación
- Facilitar la comunicación entre diseñadores y desarrolladores
- Reducir iteraciones y correcciones

---

## 💭 RAZONAMIENTO

### ¿Por qué necesitamos un proceso de handoff?

Sin un proceso claro:
- ❌ Los desarrolladores interpretan los diseños de forma diferente
- ❌ Se pierden detalles importantes (spacing, colors, typography)
- ❌ Hay múltiples iteraciones de "esto no se ve igual"
- ❌ No hay una fuente de verdad clara

Con un proceso estructurado:
- ✅ Todos usan los mismos tokens y valores
- ✅ Los detalles están documentados
- ✅ Menos iteraciones y correcciones
- ✅ Diseño e implementación siempre sincronizados

---

## 📋 CHECKLIST DE HANDOFF

### Para el Diseñador (Antes de entregar)

#### 1. Tokens y Variables
- [ ] Todos los colores usan tokens (no colores hardcodeados)
- [ ] Todos los espaciados usan tokens de spacing
- [ ] Tipografía usa tokens de fontFamily, fontSize, fontWeight
- [ ] Bordes usan tokens de radius y width
- [ ] Los tokens están sincronizados con el código

#### 2. Componentes
- [ ] Los componentes están organizados en frames claros
- [ ] Cada componente tiene variantes documentadas
- [ ] Los estados (hover, active, disabled) están definidos
- [ ] Los componentes usan auto-layout cuando es posible

#### 3. Especificaciones
- [ ] Spacing entre elementos está claro
- [ ] Padding interno de componentes está especificado
- [ ] Border radius está definido
- [ ] Shadows y efectos están documentados
- [ ] Breakpoints responsive están indicados

#### 4. Documentación
- [ ] Hay notas explicativas en el diseño
- [ ] Los casos edge están documentados
- [ ] Las interacciones están descritas
- [ ] Los estados de error/success están incluidos

---

### Para el Desarrollador (Al recibir)

#### 1. Revisión Inicial
- [ ] Revisar el diseño completo antes de empezar
- [ ] Identificar todos los componentes necesarios
- [ ] Verificar que los tokens existen en el código
- [ ] Identificar componentes nuevos vs. existentes

#### 2. Preparación
- [ ] Sincronizar tokens desde Figma: `npm run tokens:sync`
- [ ] Validar tokens: `npm run tokens:validate`
- [ ] Revisar componentes existentes en el design system
- [ ] Planificar qué componentes crear/modificar

#### 3. Implementación
- [ ] Usar tokens del código, no valores hardcodeados
- [ ] Seguir la estructura de componentes existente
- [ ] Implementar todos los estados y variantes
- [ ] Verificar spacing y padding con el diseño

#### 4. Validación
- [ ] Comparar visualmente con el diseño
- [ ] Verificar en diferentes tamaños de pantalla
- [ ] Probar todos los estados e interacciones
- [ ] Validar accesibilidad básica

---

## 🔄 FLUJO DE TRABAJO DETALLADO

### Paso 1: Diseñador prepara el diseño

```
1. Diseñador crea/actualiza diseño en Figma
2. Asegura que todos los elementos usan tokens
3. Documenta casos especiales y notas
4. Marca el diseño como "Listo para desarrollo"
```

**Herramientas:**
- Figma Tokens Plugin para gestionar tokens
- Notas en Figma para documentar
- Frames organizados por componente

### Paso 2: Sincronización de tokens

```
1. Diseñador exporta tokens desde Figma Tokens Plugin
2. Tokens se guardan en tokens/
3. Desarrollador ejecuta: npm run tokens:sync
4. Tokens se validan y se generan en múltiples formatos
```

**Comandos:**
```bash
# Sincronizar y validar tokens
npm run tokens:sync

# Solo validar (sin sincronizar)
npm run tokens:validate
```

### Paso 3: Desarrollo del componente

```
1. Desarrollador revisa el diseño en Figma
2. Identifica qué componentes necesita
3. Crea/modifica componentes usando tokens
4. Implementa estados y variantes
```

**Ejemplo de uso de tokens:**
```typescript
// ✅ CORRECTO: Usar tokens
import { tokens } from '@madergk/bio-ds/tokens';

const styles = {
  backgroundColor: tokens.color.primary[500],
  padding: tokens.spacing.md,
  borderRadius: tokens.border.radius.md,
};

// ❌ INCORRECTO: Valores hardcodeados
const styles = {
  backgroundColor: '#2196f3',
  padding: '16px',
  borderRadius: '8px',
};
```

### Paso 4: Revisión y ajustes

```
1. Desarrollador muestra implementación al diseñador
2. Diseñador compara con Figma
3. Identifican diferencias (si las hay)
4. Ajustan tokens o implementación según sea necesario
```

---

## 📐 ESPECIFICACIONES TÉCNICAS

### Cómo leer especificaciones en Figma

#### Spacing
1. Selecciona dos elementos
2. En el panel derecho, verás la distancia entre ellos
3. Usa el token de spacing más cercano:
   - `4px` → `spacing.xs`
   - `8px` → `spacing.sm` o `spacing.base`
   - `16px` → `spacing.md`
   - `24px` → `spacing.lg`
   - `32px` → `spacing.xl`

#### Colors
1. Selecciona un elemento con color
2. En "Fills", verás el token usado (si está vinculado)
3. Si no hay token, busca el color más cercano en los tokens
4. Si no existe, crea un nuevo token siguiendo la guía de nomenclatura

#### Typography
1. Selecciona un texto
2. Verás:
   - Font: Debe usar `typography.fontFamily.primary`
   - Size: Debe usar un token de `typography.fontSize.*`
   - Weight: Debe usar un token de `typography.fontWeight.*`
   - Line Height: Debe usar un token de `typography.lineHeight.*`

#### Borders
1. Selecciona un elemento con borde
2. Verás:
   - Radius: Debe usar `border.radius.*`
   - Width: Debe usar `border.width.*`
   - Color: Debe usar un token de color

---

## 🎨 COMPONENTES VS. TOKENS

### Cuándo crear un componente nuevo

Crea un componente nuevo cuando:
- ✅ Se repite en múltiples pantallas
- ✅ Tiene lógica o comportamiento específico
- ✅ Tiene múltiples variantes o estados
- ✅ Será reutilizable en otros proyectos

**Ejemplo:** Button, Input, Card, Modal

### Cuándo solo usar tokens

Usa solo tokens cuando:
- ✅ Es un elemento simple (rectángulo, texto)
- ✅ No tiene comportamiento específico
- ✅ Es parte de un componente más grande
- ✅ No se reutiliza de forma independiente

**Ejemplo:** Un título, un fondo de color, un espaciado

---

## 🔍 VALIDACIÓN VISUAL

### Checklist de comparación

Al comparar implementación con diseño:

- [ ] **Colores:** ¿Coinciden exactamente?
- [ ] **Spacing:** ¿Las distancias son correctas?
- [ ] **Typography:** ¿Font, size, weight, line-height coinciden?
- [ ] **Borders:** ¿Radius y width son correctos?
- [ ] **Shadows:** ¿Los efectos visuales coinciden?
- [ ] **Estados:** ¿Hover, active, disabled se ven igual?
- [ ] **Responsive:** ¿Se adapta correctamente en diferentes tamaños?

### Herramientas de comparación

1. **Figma Dev Mode:** Permite ver especificaciones exactas
2. **Browser DevTools:** Inspecciona valores reales en el código
3. **Screenshots:** Compara lado a lado

---

## 🚨 PROBLEMAS COMUNES Y SOLUCIONES

### Problema: "El color no coincide"

**Causa:** Token no sincronizado o valor diferente

**Solución:**
1. Verifica el token en Figma
2. Verifica el token en el código: `src/tokens/generated/tokens.json`
3. Sincroniza: `npm run tokens:sync`
4. Si aún no coincide, actualiza el token en la fuente de verdad

### Problema: "El spacing es diferente"

**Causa:** No se está usando el token correcto

**Solución:**
1. Mide la distancia exacta en Figma
2. Encuentra el token de spacing más cercano
3. Si no existe, crea uno nuevo o ajusta el existente
4. Actualiza el código para usar el token

### Problema: "La tipografía se ve diferente"

**Causa:** Font family, size, weight o line-height diferentes

**Solución:**
1. Verifica cada propiedad de tipografía en Figma
2. Compara con los tokens en el código
3. Asegúrate de usar todos los tokens correctos
4. Verifica que la font esté cargada correctamente

### Problema: "El componente no tiene todos los estados"

**Causa:** Estados no documentados o no implementados

**Solución:**
1. Revisa el diseño para todos los estados
2. Crea variantes en el componente
3. Implementa los estados faltantes
4. Documenta los estados en el componente

---

## 📚 PLANTILLA DE HANDOFF

### Para el Diseñador

```
## Componente: [Nombre del Componente]

### Descripción
[Breve descripción del componente y su propósito]

### Variantes
- [ ] Default
- [ ] Hover
- [ ] Active
- [ ] Disabled
- [ ] Error
- [ ] Success

### Tokens Usados
- Colors: [lista de tokens de color]
- Spacing: [lista de tokens de spacing]
- Typography: [lista de tokens de tipografía]
- Borders: [lista de tokens de borde]

### Comportamiento
[Descripción de interacciones y animaciones]

### Casos Edge
[Notas sobre casos especiales o límites]

### Notas Adicionales
[Cualquier otra información relevante]
```

### Para el Desarrollador

```
## Implementación: [Nombre del Componente]

### Estado
- [ ] Diseño revisado
- [ ] Tokens sincronizados
- [ ] Componente creado
- [ ] Estados implementados
- [ ] Validación visual completada
- [ ] Documentación actualizada

### Tokens Verificados
- [ ] Todos los tokens existen en el código
- [ ] Valores coinciden con Figma
- [ ] Tokens se usan correctamente

### Issues Encontrados
[Lista de problemas o preguntas]

### Notas
[Notas sobre la implementación]
```

---

## ✅ CHECKLIST FINAL

Antes de marcar como "Completado":

- [ ] Diseño implementado visualmente correcto
- [ ] Todos los tokens están sincronizados
- [ ] Todos los estados están implementados
- [ ] Componente funciona en diferentes tamaños
- [ ] Accesibilidad básica verificada
- [ ] Documentación actualizada
- [ ] Diseñador ha aprobado la implementación

---

## ➡️ PRÓXIMOS PASOS

1. ✅ Revisar esta guía con el equipo
2. ✅ Establecer proceso de comunicación (Slack, GitHub, etc.)
3. ✅ Crear plantillas de handoff para componentes comunes
4. ⏭️ Automatizar validaciones (opcional)
5. ⏭️ Integrar con herramientas de design review (opcional)

---

**Última actualización:** Diciembre 2025  
**Mantenedor:** Equipo de Design System

