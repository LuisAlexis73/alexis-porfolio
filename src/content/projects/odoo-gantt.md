---
title: "Vista Gantt"
description: "Desarrollé una plantilla Gantt para extender componentes (GanttRenderer, GanttModel, GanttPopover) e incluir un selector mes/año, botones de acción y accesos rápidos desde el gráfico Gantt."
image: "/images/captura-vistagantt.png"
stack:
  - Odoo 17
  - Python
  - XML
  - JavaScript
  - Owl
  - PostgreSQL
codeUrl: "https://github.com/LuisAlexis73/odoo_gantt/tree/main"
videoUrl: "https://youtu.be/67VAEbFUmp8"
variant: "default"
featured: true
date: "2025-08-15"
---

### Descripción completa

Implementación de una vista Gantt personalizada para aplicación que gestiona reserva de habitaciones en hoteles hecha con Odoo 17. Implementé el template base del módulo Gantt nativo de Odoo y amplíe su comportamiento para cubrir necesidades operativas del hotel: vínculo directo desde la tarjeta Gantt al folio, posibilidad de reasignar habitación sobre reservas ya creadas, extensión de funcionalidades nativas del módulo como: desplazrce lateralmente con las flehas del teclado o la rueda del mouse, un selector personalizado mes/año que mejora la navegación temporal de manera más eficiente y la posibilidad de crear una nueva reserva directamente desde la vista sin tener que navegar a otra pantalla.

Debido a que esta aplicación se utiliza de manera interna no puedo dejar un enlace directo. Es por eso que he grabado un pequeño video para mostrar las funcionalidades que mencione.

### Detalles técnicos

- Creación de un componente OWL personalizado para el selector mes/año y plantillas XML que heredan las del web_gantt.
- Comunicación cliente-servidor con RPC (this.orm.call(...)) y uso de actions para abrir forms y wizards.
- Wizard `assign.room.wizard` para reasignación de habitaciones con validaciones en servidor.
- Wizard `Folio` para mostrar los datos del cliente en la reserva y poder realizar cualquier cambio directamente.
