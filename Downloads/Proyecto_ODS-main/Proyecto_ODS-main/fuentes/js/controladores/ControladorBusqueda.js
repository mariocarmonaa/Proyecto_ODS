
import VistaBusquedaFiltro from '../vistas/VistaBusquedaFiltro.js'

export default class ControladorBusqueda {
    #vista
    #modelo

    constructor(modeloJugadores) {
        this.#vista = new VistaBusquedaFiltro()
        this.#modelo = modeloJugadores

        this.#vista.alBuscar((texto) => {
            const resultados = this.#modelo.buscarPorNombre(texto)
            this.#modelo.mostrarListaFiltrada(resultados)
        })

        this.#vista.alResetBusqueda(() => {
            this.#modelo.mostrarTodos()
        })

        this.#vista.alFiltrar((animal) => {
            const resultados = this.#modelo.filtrarPorAnimal(animal)
            this.#modelo.mostrarListaFiltrada(resultados)
        })
    }
}