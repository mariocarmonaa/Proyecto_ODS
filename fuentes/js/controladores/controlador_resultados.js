function mostrarListaJugadores() {
    const contenedor = document.querySelector("#listaJugadores");

    if (listaJugadores.length === 0) {
        contenedor.innerHTML = "No hay jugadores";
        return;
    }

    contenedor.innerHTML = "";

    for (let i = 0; i < listaJugadores.length; i++) {
        const j = listaJugadores[i];

        const edad = new Date().getFullYear() - new Date(j.fecha).getFullYear();

        let animales = "";
        for (let k = 0; k < j.animales.length; k++) {
            animales += j.animales[k] + " ";
        }

        contenedor.innerHTML +=
            "<div>" +
            "<p>" + j.nombre + "</p>" +
            "<p>Edad: " + edad + "</p>" +
            "<p>Genero: " + j.genero + "</p>" +
            "<p>Animales: " + animales + "</p>" +
            "<button onclick=\"cargarJugadorEnFormulario('" + j.id + "')\">Editar</button>" +
            "<button onclick=\"eliminarJugador('" + j.id + "')\">Borrar</button>" +
            "</div>";
    }
}

function buscarJugador() {
    const texto = document.querySelector("#campoBusqueda").value.toLowerCase();
    let resultados = [];

    for (let i = 0; i < listaJugadores.length; i++) {
        if (listaJugadores[i].nombre.toLowerCase().indexOf(texto) !== -1) {
            resultados.push(listaJugadores[i]);
        }
    }

    mostrarListaFiltrada(resultados);
}

function filtrarPorAnimal() {
    const animal = document.querySelector("#filtroAnimal").value;

    if (animal === "") {
        mostrarListaJugadores();
        return;
    }

    let resultados = [];

    for (let i = 0; i < listaJugadores.length; i++) {
        if (listaJugadores[i].animales.indexOf(animal) !== -1) {
            resultados.push(listaJugadores[i]);
        }
    }

    mostrarListaFiltrada(resultados);
}

function mostrarListaFiltrada(lista) {
    const copia = listaJugadores;

    listaJugadores = lista;
    mostrarListaJugadores();
    listaJugadores = copia;
}

function mostrarEstadisticas() {
    const cont = document.querySelector("#estadisticas");

    if (listaJugadores.length === 0) {
        cont.innerHTML = "Sin datos";
        return;
    }

    let suma = 0;

    for (let i = 0; i < listaJugadores.length; i++) {
        const edad = new Date().getFullYear() - new Date(listaJugadores[i].fecha).getFullYear();
        suma += edad;
    }

    const media = (suma / listaJugadores.length).toFixed(1);

    cont.innerHTML =
        "<p>Total: " + listaJugadores.length + "</p>" +
        "<p>Edad media: " + media + "</p>";
}