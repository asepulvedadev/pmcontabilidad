1. Estándares de Código y Estilo

Seguir un estilo consistente:

camelCase para variables y funciones.

PascalCase para clases y componentes.

CONSTANT_CASE para constantes globales.

Usar tipado fuerte siempre que sea posible (TypeScript, Pydantic, DTOs, interfaces).

Nombres de variables y funciones claros y descriptivos.

Código autoexplicativo y mínimo uso de comentarios (solo para lógica compleja).

Evitar código duplicado → aplicar principio DRY.

2. Arquitectura y Organización

Mantener una arquitectura modular y desacoplada:

Backend: controladores, servicios, modelos, repositorios, middlewares, utilidades.

Frontend: componentes, hooks, stores, estilos, utilidades.

Separar configuración de la lógica (variables de entorno, config central).

Patrones de diseño cuando sean útiles (MVC, Repository, Factory, Observer).

Carpeta docs/ para documentación y diagramas.

3. Seguridad

Validar y sanitizar toda entrada de usuario (front y back).

Cifrar contraseñas con bcrypt o argon2 (nunca texto plano).

Usar control de acceso basado en roles (RBAC) o atributos (ABAC).

Implementar medidas anti-XSS, anti-SQL Injection, anti-CSRF y anti-directory traversal.

HTTPS en producción, JWT/OAuth2 para autenticación.

No exponer claves ni secretos en el código.

4. Backend

Middleware central para manejo de errores y respuestas uniformes.

Usar códigos HTTP correctos (200, 201, 400, 401, 403, 404, 500).

Optimizar consultas a base de datos (índices, paginación).

Caching con Redis o similar para consultas costosas.

Arquitectura preparada para escalabilidad horizontal (stateless cuando sea posible).

5. Frontend

Componentes pequeños, reutilizables y sin lógica de negocio interna.

Lazy loading, code splitting y memoización para optimizar rendimiento.

Estado centralizado con librerías seguras (Redux Toolkit, Zustand, Pinia).

Diseño responsive y accesible (WCAG 2.1).

Usar clases de Tailwind o equivalente (evitar CSS inline y estilos no escalables).

6. Testing

Tests unitarios, de integración y end-to-end.

Cobertura mínima: 80% del código crítico.

Herramientas recomendadas:

JS/TS: Jest, Vitest, Cypress, Playwright.

Python: Pytest, Unittest.

Tests claros y sin mocks innecesarios.

7. Rendimiento

Backend: caching, compresión (gzip/Brotli), consultas optimizadas.

Frontend: optimizar imágenes, minificar recursos, usar CDN.

Monitorizar métricas clave: TTFB, LCP, FID, CLS.

Uso de paginación en listados grandes.

8. Control de Versiones

Git con ramas dedicadas para features, fixes y releases.

Commits siguiendo Conventional Commits (feat:, fix:, refactor:, etc.).

Pull requests revisados y aprobados antes de merge.

9. Documentación

Documentar APIs con Swagger/OpenAPI o Postman Collections.

README con instalación, ejecución, tests y despliegue.

Diagramas de arquitectura y flujo de datos.

Historial de cambios en CHANGELOG.md.

10. Despliegue y Mantenimiento

CI/CD para tests y despliegue automatizado.

Logs centralizados y monitoreo activo (Prometheus, Grafana).

Actualización periódica de dependencias y parches de seguridad.

Backups automáticos de base de datos.

11. Dockerización

Dockerfile optimizado y con multistage build.

.dockerignore configurado para reducir tamaño de imagen.

docker-compose.yml para entornos de desarrollo y pruebas.

Variables de entorno gestionadas con .env.

Contenedores separados para servicios (API, DB, cache, etc.).

Usuario no root en producción y solo puertos necesarios expuestos.

💡 Instrucción para LLM en Cursor:

Cada vez que generes código, sigue estrictamente estas reglas.
Si un requerimiento contradice alguna de ellas, advierte primero.
Implementa siempre soluciones seguras, escalables y limpias.
Incluye Dockerización lista para uso y documentación mínima necesaria.
Evita placeholders, código incompleto o dependencias innecesarias.