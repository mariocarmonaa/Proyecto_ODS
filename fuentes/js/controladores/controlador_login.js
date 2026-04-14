'use strict';

function mostrarVista(idVista) {
    const vistas = document.querySelectorAll('.vista');
    vistas.forEach(v => v.style.display = 'none');

    document.getElementById('vista-' + idVista).style.display = 'block';
}

document.getElementById('btnEntrar').onclick = function () {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;

    if (u === "admin" && p === "1234") {
        document.getElementById('menu-navegacion').style.display = 'block';
        mostrarVista('formulario');
    } else {
        alert("Acceso denegado");
    }
};

document.getElementById('btnNavForm').onclick = () => mostrarVista('formulario');
document.getElementById('btnNavLista').onclick = () => mostrarVista('listado');

document.getElementById('btnNavSalir').onclick = function () {
    document.getElementById('menu-navegacion').style.display = 'none';
    mostrarVista('login');
};

window.prepararEdicion = function () {
    mostrarVista('formulario');
};