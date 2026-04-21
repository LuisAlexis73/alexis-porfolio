---
title: "Control de Ventas para Rotisería"
description: "Aplicación de escritorio diseñada específicamente para gestionar y controlar las ventas diarias de una rotisería. Fue creada para transformar la manera en que el negocio registra y analiza sus ingresos, proporcionando una solución 100% offline que funciona en una sola PC con Windows."
image: "/images/captura-rotiseria.png"
stack:
  - TypeScript
  - JavaScript
  - CSS
  - HTML
  - Electron
  - React
  - Vite
  - SQLite
  - Better SQLite3
videoUrl: "https://youtu.be/-i14EeRNcHE"
variant: "default"
featured: true
date: "2026-04-10"
---

### Descripción completa

El problema principal que resuelve es la desorganización en el control de ventas. Antes de tener esta herramienta, muchas rotiserías:

- No tenían un registro centralizado de sus ventas
- Desconocían cuáles productos vendían más
- No diferenciaban pagos en efectivo de transferencias
- No podían revisar datos históricos de manera rápida
- Corrían el riesgo de perder información importante

### **Funcionalidades principales**

La aplicación ofrece un conjunto de módulos integrados que cubren todo el flujo de ventas:

#### **1. Registro de Pedidos**

- Crea pedidos con múltiples productos
- Permite agregar observaciones especiales (cambios, preferencias)
- Registra el medio de pago (efectivo o transferencia/pago virtual)
- Permite editar pedidos antes de entregarlos
- Imprime comprobantes en impresoras térmicas

#### **2. Ventas Directas**

- Registro rápido de ventas de productos individuales
- Ideal para productos que se venden sin formulario completo
- Clasificación inmediata por tipo de pago

#### **3. Caja Diaria**

- Panel centralizado de todas las ventas del día
- Resumen visual con 4 métricas clave:
  - **Efectivo cobrado**: total de pagos en efectivo
  - **Transferencias**: total de pagos virtuales
  - **Unidades vendidas**: cantidad total de productos
  - **Total del día**: suma de todos los ingresos
- Filtrado por fecha y medio de pago
- Tabla detallada de cada venta con hora exacta

#### **4. Gestión de Productos**

- Agregar nuevos productos a la carta
- Modificar precios en tiempo real
- Dos tipos de productos: "carta" (pedidos) e "individuales" (ventas directas)
- Desactivar productos sin eliminarlos del historial

#### **5. Estadísticas e Historial**

- Selector de fechas para revisar ventas pasadas
- Ranking de productos más vendidos
- Cálculos automáticos de promedios (ingresos y unidades por día)
- Visualización compacta de volumen, facturación y ranking

#### **6. Respaldo Automático de Datos**

- Backups semanales automáticos de la base de datos
- Opción de crear backups manuales
- Acceso a carpeta de copias de seguridad desde la aplicación
