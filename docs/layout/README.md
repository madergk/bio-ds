# Layout

El sistema de layout del Bio Design System proporciona contenedores, un sistema de grillas responsivo, utilidades flexbox y más para crear diseños responsivos y adaptativos.

## Componentes de Layout

### [Breakpoints](./breakpoints.md)
Breakpoints son anchos personalizables que determinan cómo se comporta tu layout responsivo en diferentes tamaños de dispositivo o viewport. El Bio Design System incluye seis breakpoints por defecto.

### [Containers](./containers.md)
Containers son el elemento base más fundamental en el layout. Los containers contienen, rellenan y alinean tu contenido dentro de un dispositivo o viewport dado.

### [Grid](./grid.md)
El sistema de grillas del Bio Design System utiliza flexbox y está construido con un sistema de 12 columnas. Permite crear layouts complejos y responsivos fácilmente.

### [Columns](./grid.md#columns)
Las columnas son los bloques de construcción del sistema de grillas. Aprende a usar columnas para crear layouts responsivos.

### [Gutters](./grid.md#gutters)
Los gutters (espaciado entre columnas) son personalizables y se pueden ajustar para diferentes breakpoints.

### [Utilities](./utilities.md)
Utilidades de layout para controlar el display, flexbox, spacing y más.

### [Z-index](./z-index.md)
El sistema de z-index del Bio Design System proporciona valores predefinidos para capas de componentes como modals, tooltips, popovers y más.

## Conceptos Clave

### Mobile First

El Bio Design System está construido con un enfoque **mobile first**. Esto significa:

- Los estilos base se aplican para dispositivos móviles
- Los estilos se ajustan para dispositivos más grandes usando media queries
- Esto optimiza el CSS y mejora el tiempo de renderizado

### Responsive Design

El sistema de layout es completamente responsivo:

- Se adapta automáticamente a diferentes tamaños de pantalla
- Usa breakpoints para cambiar el layout en puntos específicos
- Proporciona clases de utilidad para controlar el comportamiento responsivo

## Ejemplo Rápido

```html
<!-- Container -->
<div class="container">
  <!-- Grid -->
  <div class="row">
    <div class="col-md-6">
      Columna 1
    </div>
    <div class="col-md-6">
      Columna 2
    </div>
  </div>
</div>
```

## Próximos Pasos

- [Breakpoints](./breakpoints.md) - Entender los breakpoints disponibles
- [Containers](./containers.md) - Usar containers para layout
- [Grid](./grid.md) - Crear layouts con el sistema de grillas
- [Z-index](./z-index.md) - Controlar el orden de capas

