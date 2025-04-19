WorkPilot® | Asistente Laboral
Descripción General
WorkPilot® es una aplicación web diseñada para optimizar la gestión laboral, proporcionando una herramienta práctica y eficiente para manejar las entradas, salidas y registros de empleados. Esta solución es ideal para entornos laborales que buscan mejorar la productividad y mantener una experiencia intuitiva y profesional.
Funcionalidades
Gestión de Entradas y Salidas
- Marcar Entrada:- Los empleados pueden registrar su entrada utilizando su nombre.
- Registra fecha y hora exacta en el sistema, almacenando los datos en localStorage para persistencia.
- Ofrece un histórico único de entradas específicas para cada empleado validado.

- Registrar Salida:- Guarda la fecha y hora de salida del empleado.
- Los registros son únicos y personalizados para cada empleado, evitando datos compartidos entre usuarios.
- Visualiza un histórico ordenado de las salidas del empleado.


Gestión de Empleados
- Añadir Empleado:- Los administradores pueden agregar nuevos empleados a través de un formulario.
- Validación de contraseña: Requiere una contraseña específica (1234) para realizar esta acción.
- Validación de duplicados: Garantiza que no se puedan agregar empleados con nombres existentes.
- Confirmación a través de alertas dinámicas con SweetAlert2 para mejorar la experiencia de usuario.

- Eliminar Empleado:- Opción para eliminar empleados mediante un proceso seguro.
- Confirmación de contraseña: Solo usuarios autorizados pueden realizar esta acción.
- Confirmación visual: Utiliza SweetAlert2 para advertir sobre la eliminación antes de proceder.


Visualización Dinámica
- Lista de Empleados:- Modal que muestra todos los empleados registrados en el sistema, actualizado en tiempo real.

- Reloj en Tiempo Real:- Muestra fecha y hora actual de forma dinámica utilizando JavaScript.
- La interfaz visual mejora la interactividad del usuario.


Perfil de Empleados
- Información Personalizada:- Cada empleado tiene su propio registro de entradas y salidas, almacenado de manera única en localStorage.
- Al validar su nombre, el empleado es redirigido a su perfil para visualizar su histórico de acciones.

- Historial:- Muestra un registro claro y ordenado de las entradas y salidas del empleado, asegurando integridad y privacidad de los datos.


Interfaz de Usuario
- Estilización Moderna:- Utiliza Bootstrap para un diseño responsivo y moderno, complementado con animaciones de Animate.css para mejorar la estética.
- SweetAlert2 proporciona notificaciones estilizadas y atractivas para confirmar acciones del usuario.



Seguridad
- Validación de Contraseña:- Acciones críticas como agregar y eliminar empleados están restringidas mediante una contraseña específica.

- Protección de Datos:- Los registros de entradas y salidas son personales y únicos para cada empleado, garantizando integridad y privacidad.



Futuro
WorkPilot® se encuentra en fase de desarrollo y evoluciona continuamente para integrar herramientas avanzadas como análisis predictivo, personalización inteligente y una interfaz aún más intuitiva. Con estas mejoras, se busca consolidar WorkPilot® como una solución de referencia en la gestión laboral.
