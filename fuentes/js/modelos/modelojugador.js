class ModeloJugador {
    constructor() {
        this.lista = [];
        this.ultimoId = 0;
    }

    agregar(nuevoJugador) {
        this.ultimoId = this.ultimoId + 1;
        nuevoJugador.id = this.ultimoId;
        this.lista.push(nuevoJugador);
    }

    listar() {
        return this.lista;
    }

    eliminar(id) {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id === id) {
                this.lista.splice(i, 1);
                break;
            }
        }
    }

    editar(jugadorEditado) {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id === jugadorEditado.id) {
                this.lista[i] = jugadorEditado;
                break;
            }
        }
    }
}