# Estándar de Mensajes de Commit

Este proyecto adhiere a la especificación de **Conventional Commits v1.0.0**. Cada mensaje de commit debe seguir el siguiente formato:

`<tipo>[ámbito opcional]: <descripción>`

---

### Tipos de Commit

* **feat**: Una nueva característica para el usuario.
* **fix**: Una corrección de un bug.
* **docs**: Cambios exclusivos en la documentación.
* **style**: Cambios que no afectan el significado del código (espacios, formato, etc).
* **refactor**: Un cambio en el código que no corrige un bug ni añade una característica.
* **perf**: Un cambio que mejora el rendimiento.
* **test**: Añadir pruebas faltantes o corregir pruebas existentes.
* **build**: Cambios que afectan el sistema de build o dependencias externas.
* **ci**: Cambios a nuestros archivos y scripts de configuración de CI.
* **chore**: Otros cambios que no modifican el código fuente o las pruebas.

### Ejemplo

`feat(api): permitir que los usuarios actualicen su correo electrónico`
`fix(ui): corregir el desbordamiento del botón en la vista móvil`
