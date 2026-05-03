export default class ModeloJugador {
    constructor() {
        this.jugadores = []
    }

    agregar(j) {
        this.jugadores.push(j)
    }

    listar() {
        return this.jugadores
    }

    eliminar(id) {
        this.jugadores = this.jugadores.filter(j => j.id !== id)
    }

    editar(nuevo) {
        this.jugadores = this.jugadores.map(j =>
            j.id === nuevo.id ? nuevo : j
        )
    }
}
