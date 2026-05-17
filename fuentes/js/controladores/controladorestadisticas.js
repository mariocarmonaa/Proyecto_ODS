import VistaEstadisticas from '../vistas/vistaestadisticas.js'
import ModeloJugador from '../modelos/modelojugador.js'

class ControladorEstadisticas {
    constructor() {
        this.vista = new VistaEstadisticas(this)
        this.modelo = new ModeloJugador()
    }

    mostrarEstadisticas() {
        const datos = this.modelo.listar()
        console.log("Mostrando estadisticas con datos:", datos)
        this.vista.mostrar(datos)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const c = new ControladorEstadisticas()
    const btnEstadisticas = document.querySelector("#botonEstadisticas")
    if (btnEstadisticas){
        btnEstadisticas.addEventListener('click', () => {
            c.mostrarEstadisticas()
   })
 }
})
