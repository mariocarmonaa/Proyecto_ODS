export default class ModeloJugador {
    constructor() {
        this.jugadores = []
    }

    agregar(jugador) {
        this.jugadores.push(jugador)
    }

    listar() {
        return this.jugadores
    }

    eliminar(id) {
        this.jugadores = this.jugadores.filter(j => j.getId() !== id)
    }

    editar(jugadorNuevo) {
        this.jugadores = this.jugadores.map(j =>
            j.getId() === jugadorNuevo.getId() ? jugadorNuevo : j
        )
    }
}
