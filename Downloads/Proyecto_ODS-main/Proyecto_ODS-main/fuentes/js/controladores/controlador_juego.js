let listaJugadores = [];

function cargarJugadoresDelStorage() {
    const datos = localStorage.getItem("jugadores_ods15");

    if (datos === null) {
        listaJugadores = [];
    } else {
        listaJugadores = JSON.parse(datos);
    }
}

function guardarJugadoresEnStorage() {
    localStorage.setItem("jugadores_ods15", JSON.stringify(listaJugadores));
}

function insertarJugador() {
    const nombre = document.querySelector("#nombre").value;
    const fecha = document.querySelector("#fecha").value;
    const genero = document.querySelector("#tipo").value;
    const descripcion = document.querySelector("#descripcion").value;

    let animales = [];

    if (document.getElementById("panda").checked) {
        animales.push("panda");
    }
    if (document.getElementById("tigre").checked) {
        animales.push("tigre");
    }
    if (document.getElementById("ajolote").checked) {
        animales.push("ajolote");
    }

    if (nombre === "") {
        mostrarMensaje("Nombre vacío", "error");
        return;
    }

    if (fecha === "") {
        mostrarMensaje("Fecha obligatoria", "error");
        return;
    }

    const jugador = new Jugador(nombre, fecha, genero, descripcion, animales);

    listaJugadores.push(jugador);

    guardarJugadoresEnStorage();

    mostrarMensaje("Jugador añadido", "ok");

    limpiarFormulario();
    mostrarListaJugadores();
}

function eliminarJugador(id) {
    if (!confirm("¿Borrar jugador?")) {
        return;
    }

    let nuevaLista = [];

    for (let i = 0; i < listaJugadores.length; i++) {
        if (listaJugadores[i].id !== id) {
            nuevaLista.push(listaJugadores[i]);
        }
    }

    listaJugadores = nuevaLista;

    guardarJugadoresEnStorage();
    mostrarListaJugadores();
}

function cargarJugadorEnFormulario(id) {
    let jugador = null;

    for (let i = 0; i < listaJugadores.length; i++) {
        if (listaJugadores[i].id === id) {
            jugador = listaJugadores[i];
        }
    }

    if (jugador === null) return;

    document.getElementById("nombre").value = jugador.nombre;
    document.getElementById("fecha").value = jugador.fecha;
    document.getElementById("tipo").value = jugador.genero;
    document.getElementById("descripcion").value = jugador.descripcion;

    document.getElementById("panda").checked = jugador.animales.indexOf("panda") !== -1;
    document.getElementById("tigre").checked = jugador.animales.indexOf("tigre") !== -1;
    document.getElementById("ajolote").checked = jugador.animales.indexOf("ajolote") !== -1;

    document.getElementById("idOculto").value = jugador.id;
}

function actualizarJugador(id) {
    const nombre = document.querySelector("#nombre").value;
    const fecha = document.querySelector("#fecha").value;
    const genero = document.querySelector("#tipo").value;
    const descripcion = document.querySelector("#descripcion").value;

    let animales = [];

    if (document.getElementById("panda").checked) animales.push("panda");
    if (document.getElementById("tigre").checked) animales.push("tigre");
    if (document.getElementById("ajolote").checked) animales.push("ajolote");

    for (let i = 0; i < listaJugadores.length; i++) {
        if (listaJugadores[i].id === id) {
            listaJugadores[i].nombre = nombre;
            listaJugadores[i].fecha = fecha;
            listaJugadores[i].genero = genero;
            listaJugadores[i].descripcion = descripcion;
            listaJugadores[i].animales = animales;
        }
    }

    guardarJugadoresEnStorage();
    limpiarFormulario();
    mostrarListaJugadores();
}

function limpiarFormulario() {
    document.querySelector("#nombre").value = "";
    document.querySelector("#fecha").value = "";
    document.querySelector("#tipo").value = "Masculino";
    document.querySelector("#descripcion").value = "";

    document.getElementById("panda").checked = false;
    document.getElementById("tigre").checked = false;
    document.getElementById("ajolote").checked = false;

    document.getElementById("idOculto").value = "";
}

function mostrarMensaje(texto, tipo) {
    const caja = document.getElementById("mensajeEstado");

    caja.textContent = texto;

    setTimeout(function () {
        caja.textContent = "";
    }, 3000);
}