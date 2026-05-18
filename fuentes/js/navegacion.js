const modeloJugador = new ModeloJugador();
const controladorRegistro = new ControladorRegistro(modeloJugador);
const controladorEstadisticas = new ControladorEstadisticas(modeloJugador);
const controladorJuego = new ControladorJuego();

const BOTONREGISTRO = document.querySelector("#botonRegistro");
const BOTONLISTADO = document.querySelector("#botonListado");
const VISTAS = document.querySelectorAll(".Vista");
const BOTONMENU = document.querySelectorAll(".botonMenu");
const BOTONJUEGO = document.querySelector("#botonJuego");
const BOTONESTADISTICAS = document.querySelector("#botonEstadisticas");
const BOTONINFO = document.querySelector("#botonInfo"); // Nuevo botón para la 6ª vista

const MENU = VISTAS[0];
const REGISTRO = VISTAS[1];
const LISTADO = VISTAS[2];
const ESTADISTICAS = VISTAS[3];
const JUEGO = VISTAS[4];
const INFO_ODS = VISTAS[5]; // Nueva vista declarada

function mostrarRegistro(evento) {
    evento.preventDefault();
    ocultarVistas();
    controladorJuego.detener();
    REGISTRO.classList.add("activa");
}

function mostrarMenu(evento) {
    evento.preventDefault();
    ocultarVistas();
    controladorJuego.detener();
    MENU.classList.add("activa");
}

function mostrarListado(evento) {
    evento.preventDefault();
    ocultarVistas();
    controladorJuego.detener();
    controladorRegistro.actualizarTabla();
    LISTADO.classList.add("activa");
}

function mostrarJuego(evento) {
    evento.preventDefault();
    ocultarVistas();
    JUEGO.classList.add("activa");
    controladorJuego.comenzar();
}

function mostrarEstadisticas(evento) {
    evento.preventDefault();
    ocultarVistas();
    controladorJuego.detener();
    ESTADISTICAS.classList.add("activa");
    controladorEstadisticas.mostrarEstadisticas();
}

function mostrarInfo(evento) {
    evento.preventDefault();
    ocultarVistas();
    controladorJuego.detener();
    INFO_ODS.classList.add("activa");
}

function ocultarVistas() {
    MENU.classList.remove("activa");
    REGISTRO.classList.remove("activa");
    LISTADO.classList.remove("activa");
    ESTADISTICAS.classList.remove("activa");
    JUEGO.classList.remove("activa");
    INFO_ODS.classList.remove("activa");
}

for (let i = 0; i < BOTONMENU.length; i++) {
    BOTONMENU[i].addEventListener('click', mostrarMenu);
}

BOTONREGISTRO.addEventListener('click', mostrarRegistro);
BOTONLISTADO.addEventListener('click', mostrarListado);
BOTONJUEGO.addEventListener('click', mostrarJuego);
BOTONESTADISTICAS.addEventListener('click', mostrarEstadisticas);
BOTONINFO.addEventListener('click', mostrarInfo);