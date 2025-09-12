---
title: "API REST"
description: "Aplicación backend que implementa una solución completa para gestionar usuarios, roles y publicaciones con autenticación basada en JWT y control de acceso basado en roles."
image: "/images/captura-api-express.png"
stack:
  - Node.js
  - Express
  - TypeScript
  - MongoDB
  - Mongoose
  - JWT
demoUrl: "https://apirest-prueba-express.onrender.com/api-docs"
codeUrl: "https://github.com/LuisAlexis73/odoo_gantt/tree/main"
variant: "default"
featured: false
date: "2025-02-17"
---

### Descripción completa

Este es un proyecto de ejemplo, desarrollado con Express, TypeScript y MongoDB. El objetivo es crear una API que permita realizar operaciones CRUD en una colección de documentos en MongoDB. El proyecto proporciona endpoints para interactuar con usuarios, roles y publicaciones.
El sistema implementa autenticación basada en JWT con protección de middleware. Las credenciales de usuario se validan con contraseñas cifradas con bcrypt, y la autenticación exitosa genera tokens JWT que contienen roles y permisos de usuario.
A los usuarios se les asignan roles con permisos especificos. La capa de middleware valida tanto los tokens como los permisos de usuario antes de permitir el acceso a los endpoints protegidos.

Esta API cuenta con la documentación OpenAPI (Swagger) para realziar las pruebas a los distintos endpoints. Para poder loguearte y realizar las pruebas sin problemas, ingresa con las siguientes credenciales:

```bash
email: admin@test.com
password: 123456
```

### Detalles técnicos

- Creación de CRUD completo con manejo de roles y autenticación.
- Creación de middlewares que protegen los endpoints de la API y administran los permisos de los usuarios.
- Creación del sistema de control de acceso basado en roles (RBAC) implementado en la capa de moddleware que valida los roles de usuario y transforma los nombres de los roles en identificadores de base de datos para fines de autorización.
- Creación de los modelos y esquemas que define la estructura de la base de datos para la API. Los modelos manejan cuentas de usuarios, permisos basado en roles y gestión de contenidos a través de colecciones MongoDB.

Para un mayor entendimiento de la API y una explicación más detallada sobre la estructura, configuración y ver la estructura de los modelos o referencias dirigete a:

```bash
https://deepwiki.com/LuisAlexis73/apirest-prueba-express
```
