---
title: "API E-commerce NestJS"
description: "API RESTful completa de e-commerce construida con NestJS, que incluye gestión de productos, autenticación JWT, sistema de roles y manejo de archivos multimedia."
image: "/images/captura-api-nestjs.png"
stack:
  - NestJS
  - TypeScript
  - PostgreSQL
  - TypeORM
  - JWT
  - Swagger
  - Docker
  - bcrypt
demoUrl: "https://nestjs-ecoomerce-api.onrender.com/api"
codeUrl: "https://github.com/LuisAlexis73/nestjs-ecoomerce-api"
variant: "default"
featured: false
date: "2024-12-11"
---

### Descripción completa

Este es un proyecto de API e-commerce desarrollado con NestJS, TypeScript y PostgreSQL. El objetivo es crear una solución backend completa que permita gestionar productos, usuarios y autenticación en un sistema de comercio electrónico moderno.

La API implementa un sistema robusto  de autenticación basado en JWT con tres niveles de roles: User (por defecto), Admin y Superuser. Las credenciales se calidan con contraseñas cifradas usando bcrypt, y la autenticación exitosa genera tokens JWT que contienen información del usuario y sus permisos.

El sistema cuenta con un CRUD completo para productos que incluye paginación para manejar grandes volúmenes de datos de manera eficiente. Los usuarios con roles administrativos pueden crear, actualizar y eliminar productos, mientras que los usuarios regulares tienen acceso de solo lectura.

La API incluye manejo de archivos multimedia para las imágenes de productos, permitiendo la carga y gestión de contenido visual. Además, cuenta con documentación interactiva Swagger/OpenAPI para facilitar las pruebas y el entendimiento de los endpoints disponibles.

Para probar la API y realziar las operaciones sin problemas, puedes usar las credenciales de prueba que se generan automáticamente con el comando SEED:

```
curl http://localhost:300/api/seed
```

### Detalles técnicos

- **Arquitectura modular**: Implementación siguiendo los principios de NestJS con módulos separados para auth, products, files y seed.
- **Sistema de autenticación JWT**: Middleware de protección que valida tokens y gestiona sesiones de usuario de forma segura.
- **Control de acceso basado en roles (RBAC)**: Sistema de tres niveles (User, Admin, Super) que controla el acceso a diferentes funcionalidades.
- **Validación de datos**: Pipes globales con class-validator y class-transformer para validación automática de entrada.
- **Manejo de archivos**: Sistema de carga y gestion de imágenes para productos con validación de tipos y tamaños.
- **Base de datos relacional**: Esquemas y entidades TypeORM que definen las relaciones entre usuarios, productos e imágenes.
- **Paginación**: Implementación eficiente para navegación a través de grandes conjuntos de productos.

La aplicación sigue las mejores prácticas de NestJS incluyendo decoradores, guards, interceptors y exception filters para crear una API robusta y escalable.
