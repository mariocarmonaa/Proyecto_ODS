class ModeloJugador {
    constructor() {
        if (ModeloJugador.instancia) {
            return ModeloJugador.instancia
        }
        this.jugadores = []
        ModeloJugador.instancia = this
    }

    agregar(j) {
        this.jugadores.push(j)
    }

    listar() {
        return this.jugadores
    }

    eliminar(id) {
        this.jugadores = this.jugadores.filter(j => j.id !== Number(id))
    }

    editar(nuevo) {
        this.jugadores = this.jugadores.map(j =>
            j.id === nuevo.id ? nuevo : j
        )
    }
}

export default ModeloJugador
