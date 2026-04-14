import VistaEstadisticas from '../vistas/VistaEstadisticas.js'

export default class ControladorEstadisticas {
    #vista
    #modelo

    constructor(modeloJugadores) {
        this.#vista = new VistaEstadisticas()
        this.#modelo = modeloJugadores

        this.#vista.alActualizar(() => {
            this.actualizar()
        })
    }

    actualizar() {
        this.#vista.mostrar(this.#modelo.obtenerTodos())
    }
}