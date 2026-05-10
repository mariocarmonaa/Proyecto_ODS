import VistaEstadisticas from '../vistas/vistaestadisticas.js'
import ModeloJugador from '../modelos/modelojugador.js'

class ControladorEstadisticas {
    constructor() {
        this.vista = new VistaEstadisticas(this)
        this.modelo = new ModeloJugador()
    }

    mostrarEstadisticas() {
        this.vista.mostrar(this.modelo.listar())
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const c = new ControladorEstadisticas()
    c.mostrarEstadisticas()
})
