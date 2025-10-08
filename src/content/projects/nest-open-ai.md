---
title: "API de Integración con OpenAI"
description: "API RESTful desarrollada con NestJS que demuestra la integración efectiva con los servicios de inteligencia artificial de OpenAI. El proyecto implementa múltiples casos de uso prácticos, desde procesamiento de texto hasta manejo de archivos multimedia, siguiendo arquitectura modular y buenas prácticas de desarrollo backend."
image: "/images/nest-1.jpg"
stack:
  - NestJS
  - TypeScript
  - OpenAI SDK
  - Multer
  - class-validator
  - class-transformer
  - nestjs/config
demoUrl: "https://github.com/LuisAlexis73/exercises-openAI-back"
codeUrl: "https://github.com/LuisAlexis73/exercises-openAI-back"
variant: "default"
featured: false
date: "2024-08-04"
---

### Descripción completa

Aplicación backend basada en NestJS diseñada para aprender y practicar la integración de la API de OpenAI a través de una implementación de API RSTful. La aplicación sigue una arquitectura modular con dos módulos funcionales principales que consumen la API de OpenAI a través de patrones distintos; cada módulo contiene sus propios controladores, servicios, DTO y casos de uso.

El **módulo GPT** proporciona operaciones de IA de uso general a través de siete REST API endpoints. Implementa capacidades de procesamiento de texto, traducción, síntesis de audio y transcripción. El módulo sigue una arquitectura de tres capas en la que GptController valida las solicitudes utilizando DTO, GptService coordina las operaciones y los casos de uso especializados gestionan las interacciones con la API de OpenAI.

El módulo **Mentor Assistant** proporciona IA conversacional con estado mediante la API Assistant (beta) de OpenAI. Gestiona los hilos de conversación e implementa un patrón de orquestación complejo que implica la creación de hilos, la publicación de mensajes, la ejecución de procesos, la consulta de estados y la recuperación de respuestas. El módulo utiliza un ID de asistente codificado (asst_G6g7lTwgORc9eyOia64aedkz) configurado en la plataforma de OpenAI.

### Notas del desarrollo

*Módulo GPT:*
- Generación y procesamiento de texto con GPT-4.
- Revisión ortográfica y traducción.
- Conversión de texto a voz (TTS).
- Transcripción de audio a texto (Whisper-1).
- Generación de debates sobre pros y contras (estándar y en streaming).

*Módulo Asistente*
- Gestión de hilos de conversación.
- Diálogo multiturno con contexto persistente.
- Ejecución asíncrona con sondeo de estado.
- Recuperación del historial de mensajes.