/* Mostrar fecha y hora "2" */
function mostrarFechaHora2() {
    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const fecha = ahora.toLocaleDateString('es-AR', opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-AR', opcionesHora);

    const fechaHoraElemento = document.getElementById("fechaHora2");
    if (fechaHoraElemento) {
        fechaHoraElemento.textContent = `${fecha} ${hora}`;
    }
}

setInterval(mostrarFechaHora2, 1000);

/* Perfil de empleado seleccionado */
const mostrarNombreEnPerfil = () => {
    const spanNombrePerfil = document.getElementById('nombreEmpleadoPerfil');
    const nombreValidado = localStorage.getItem('nombreValidado');

    if (spanNombrePerfil) {
        if (nombreValidado) {
            spanNombrePerfil.textContent = nombreValidado;
        } else {
            spanNombrePerfil.textContent = 'Empleado no encontrado.';
        }
    }
};

document.addEventListener('DOMContentLoaded', mostrarNombreEnPerfil);

/* Guardar entrada al cargar perfilEmpleado.html */
window.onload = function() {
    const nombreValidado = localStorage.getItem('nombreValidado');
    if (!nombreValidado) return;

    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const fecha = ahora.toLocaleDateString('es-AR', opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-AR', opcionesHora);
    const fechaHoraFormateada = `${fecha} ${hora}`;

    let entradas = JSON.parse(localStorage.getItem(`entradas_${nombreValidado}`)) || [];

    entradas.push(fechaHoraFormateada);

    localStorage.setItem(`entradas_${nombreValidado}`, JSON.stringify(entradas));
};

/* Mostrar registro de entradas únicas */
window.addEventListener('load', function() {
    const nombreValidado = localStorage.getItem('nombreValidado');
    if (!nombreValidado) return;

    const listaRegistroEntradas = document.querySelector('#listaRegistroEntradas');

    let entradas = JSON.parse(localStorage.getItem(`entradas_${nombreValidado}`)) || [];
    entradas.forEach((entrada) => {
        const nuevaEntrada = document.createElement('li');
        nuevaEntrada.textContent = `Entraste el: ${entrada}`;
        listaRegistroEntradas.appendChild(nuevaEntrada);
    });
});

/* Guardar salida y mostrar salidas únicas */
function guardarSalida() {
    const nombreValidado = localStorage.getItem('nombreValidado');
    if (!nombreValidado) return;

    const fechaHoraElemento = document.getElementById("fechaHora2");
    let fechaHoraSalida = "";

    if (fechaHoraElemento) {
        fechaHoraSalida = fechaHoraElemento.textContent;
    } else {
        const ahora = new Date();
        const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const fecha = ahora.toLocaleDateString('es-AR', opcionesFecha);
        const hora = ahora.toLocaleTimeString('es-AR', opcionesHora);
        fechaHoraSalida = `${fecha} ${hora}`;
    }

    let salidas = JSON.parse(localStorage.getItem(`salidas_${nombreValidado}`)) || [];

    salidas.push(fechaHoraSalida);

    localStorage.setItem(`salidas_${nombreValidado}`, JSON.stringify(salidas));

    localStorage.removeItem('fechaHoraEntrada');
    console.log("Salida registrada y fechaHoraEntrada eliminada.");
    window.location.href = '/index.html';
}

window.addEventListener('load', function() {
    const nombreValidado = localStorage.getItem('nombreValidado');
    if (!nombreValidado) return;

    const listaRegistroSalidas = document.querySelector('#listaRegistroSalidas');

    let salidas = JSON.parse(localStorage.getItem(`salidas_${nombreValidado}`)) || [];
    salidas.forEach((salida) => {
        const nuevaSalida = document.createElement('li');
        nuevaSalida.textContent = `Saliste el: ${salida}`;
        listaRegistroSalidas.appendChild(nuevaSalida);
    });
});