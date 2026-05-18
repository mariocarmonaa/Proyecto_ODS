class ControladorRegistro {
    constructor(modelo) {
        this.modelo = modelo;
        this.vista = new VistaRegistro(this);
    }

    insertar(d) {
        var nuevo = new Jugador(d.nombre, d.fecha, d.genero, d.alertas, d.descripcion, d.animales, d.id);
        this.modelo.agregar(nuevo);
        this.actualizarTabla();
    }

    editar(d) {
        var editado = new Jugador(d.nombre, d.fecha, d.genero, d.alertas, d.descripcion, d.animales, d.id);
        this.modelo.editar(editado);
        this.actualizarTabla();
    }

    eliminar(id) {
        this.modelo.eliminar(id);
        this.actualizarTabla();
    }

    prepararEdicion(id) {
        var listado = this.modelo.listar();
        var encontrado = null;

        for (var i = 0; i < listado.length; i++) {
            if (listado[i].id === id) {
                encontrado = listado[i];
                break;
            }
        }

        if (encontrado !== null) {
            this.vista.rellenarParaEditar(encontrado);

            ocultarVistas();
            REGISTRO.classList.add("activa");
        }
    }

    // RÚBRICA: Lógica de búsqueda avanzada dentro del CRUD Maestro
    filtrarPorNombre(cadenaBusqueda) {
        var listaCompleta = this.modelo.listar();
        var listaFiltrada = [];

        for (var i = 0; i < listaCompleta.length; i++) {
            var nombreMinusculas = listaCompleta[i].nombre.toLowerCase();
            var filtroMinusculas = cadenaBusqueda.toLowerCase();

            // Verificamos si el nombre contiene el texto buscado
            if (nombreMinusculas.indexOf(filtroMinusculas) !== -1) {
                listaFiltrada.push(listaCompleta[i]);
            }
        }

        this.vista.pintarTabla(listaFiltrada);
    }

    actualizarTabla() {
        this.vista.pintarTabla(this.modelo.listar());
    }
}