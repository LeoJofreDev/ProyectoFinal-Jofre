/* Mostrar fecha y hora "1" */
function mostrarFechaHora() {
    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const fecha = ahora.toLocaleDateString('es-AR', opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-AR', opcionesHora);

    const fechaHoraElemento = document.getElementById("fechaHora");
    if (fechaHoraElemento) {
        fechaHoraElemento.textContent = `${fecha} ${hora}`;
    }
}

setInterval(mostrarFechaHora, 1000);

mostrarFechaHora();

/* Gestión de empleados */
const listaEmpleados = document.getElementById('empleadosCargados');
const inputEmpleado = document.getElementById('nombreEmpleado');
const mensajeExitoAgregar = document.getElementById('mensajeExitoAgregar');
const inputEmpleadoEliminar = document.getElementById('nombreEmpleadoEliminar');
const inputContraseña = document.getElementById('contraseña');
const botonAgregar = document.getElementById('agregarEmpleado');
const botonBorrar = document.getElementById('borrarEmpleado');
const mensajeError = document.getElementById('mensajeError');
const mensajeEmpleado = document.getElementById('mensajeEmpleado');
const mensajeExito = document.getElementById('mensajeExito');

/* Datos de empleados cargados desde JSON Placeholder. Endpoint para usuarios: https://jsonplaceholder.typicode.com/users */

/* Función para mostrar los empleados en la lista */
const mostrarEmpleados = (empleados) => {
    listaEmpleados.innerHTML = '';

    empleados.forEach((empleado) => {
        const li = document.createElement('li');
        li.textContent = empleado.name;
        listaEmpleados.appendChild(li);
    });
};

/* Función para cargar empleados desde la API o localStorage */
const cargarEmpleados = async () => {
    const empleadosEnLocalStorage = JSON.parse(localStorage.getItem('empleados'));
    if (empleadosEnLocalStorage && empleadosEnLocalStorage.length > 0) {
        mostrarEmpleados(empleadosEnLocalStorage);
    } else {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Error al obtener los datos de la API');
            }
            const usuarios = await response.json();
            const primeros10Usuarios = usuarios.slice(0, 10);

            localStorage.setItem('empleados', JSON.stringify(primeros10Usuarios));
            mostrarEmpleados(primeros10Usuarios);
        } catch (error) {
            console.error('Error al cargar los usuarios:', error);
        }
    }
};

/* Función para agregar un nuevo empleado */
function agregarEmpleado() {
    const nombre = inputEmpleado.value.trim();

    if (!nombre) {
        mensajeExitoAgregar.textContent = 'Por favor ingresa un nombre válido.';
        return;
    }

    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    const nuevoEmpleado = {
        id: empleados.length + 1,
        name: nombre,
        email: `${nombre.replace(/\s+/g, '').toLowerCase()}@example.com`
    };

    empleados.push(nuevoEmpleado);
    localStorage.setItem('empleados', JSON.stringify(empleados));
    mensajeExitoAgregar.textContent = `${nombre} ha sido agregado exitosamente.`;
    mostrarEmpleados(empleados);

    inputEmpleado.value = '';
    setTimeout(() => {
        mensajeExitoAgregar.textContent = '';
    }, 3000);
}

/* Función para eliminar un empleado */
const borrarEmpleado = () => {
    const nombre = inputEmpleadoEliminar.value.trim();
    const contraseña = inputContraseña.value.trim();

    mensajeError.textContent = '';
    mensajeEmpleado.textContent = '';
    mensajeExito.textContent = '';

    // Validar contraseña
    if (contraseña !== '1234') {
        mensajeError.textContent = 'Contraseña incorrecta.';
        setTimeout(() => {
            mensajeError.textContent = '';
        }, 3000);
        return;
    }

    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    const index = empleados.findIndex(empleado => empleado.name.toLowerCase() === nombre.toLowerCase());

    if (index !== -1) {
        empleados.splice(index, 1);
        localStorage.setItem('empleados', JSON.stringify(empleados));
        mostrarEmpleados(empleados);

        mensajeExito.textContent = `${nombre} ha sido eliminado exitosamente.`;
        setTimeout(() => {
            mensajeExito.textContent = '';
        }, 3000);
    } else {
        mensajeEmpleado.textContent = `El empleado ${nombre} no se encuentra en la lista.`;
        setTimeout(() => {
            mensajeEmpleado.textContent = '';
        }, 3000);
    }

    inputEmpleadoEliminar.value = '';
    inputContraseña.value = '';
};

/* Eventos */
document.addEventListener('DOMContentLoaded', cargarEmpleados); // Cargar empleados al iniciar la página
botonAgregar.addEventListener('click', agregarEmpleado); // Añadir nuevo empleado
botonBorrar.addEventListener('click', borrarEmpleado); // Eliminar empleado al hacer clic

// Cargar los datos al iniciar la página
document.addEventListener('DOMContentLoaded', cargarEmpleados);

/* Validar y transferir empleado a perfilEmpleado.html */
const inputEmpleadoCargado = document.getElementById('nombreEmpleadoCargado');
const botonValidar = document.getElementById('validarEmpleado');

// Función para validar si el empleado está en la lista
const validarEmpleado = () => {
    const nombre = inputEmpleadoCargado.value.trim().toLowerCase();
    const mensajeValidacion = document.getElementById('mensajeValidacion');

    mensajeValidacion.textContent = '';

    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];

    if (empleados.some(empleado => empleado.name.toLowerCase().trim() === nombre)) {
        localStorage.setItem('nombreValidado', nombre);
        const perfilUrl = `/pages/perfilEmpleado.html`;
        window.location.href = perfilUrl;
    } else {
        mensajeValidacion.textContent = 'El empleado no existe en la lista cargada.';
    }
};

botonValidar.addEventListener('click', validarEmpleado);

// Guardar nombre, fecha y hora 1 directamente en localStorage para ser reutilizados en perfilEmpleado.html
function guardarFechaHoraEntrada() {
    const fechaHoraElemento = document.getElementById("fechaHora");
    if (fechaHoraElemento) {
        const fechaHora = fechaHoraElemento.textContent;
        localStorage.setItem('fechaHoraEntrada', fechaHora);
        console.log("Fecha y hora de entrada guardada:", fechaHora);
    } else {
        console.error("El span #fechaHora no está disponible.");
    }
}

function guardarNombre() {
    const nombre = document.getElementById('nombreEmpleadoCargado').value.trim();
    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    localStorage.setItem('nombreEmpleado', nombre);
    console.log("Nombre guardado:", nombre); 
}