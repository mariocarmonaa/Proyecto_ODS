export default class VistaFiltros {
    #inputBuscar
    #btnBuscar
    #btnReset
    #selectFiltroAnimal
    #btnFiltrar
    #callbackBuscar
    #callbackFiltrar

    constructor() {
        this.#inputBuscar = document.querySelector('#campoBusqueda')
        this.#btnBuscar = document.querySelector('#botonBuscar')
        this.#btnReset = document.querySelector('#botonResetBusqueda')
        this.#selectFiltroAnimal = document.querySelector('#filtroAnimal')
        this.#btnFiltrar = document.querySelector('#botonFiltrar')

        if (this.#btnBuscar) {
            this.#btnBuscar.addEventListener('click', () => {
                if (this.#callbackBuscar) this.#callbackBuscar(this.#inputBuscar.value)
            })
        }
        if (this.#btnReset) {
            this.#btnReset.addEventListener('click', () => {
                this.#inputBuscar.value = ''
                if (this.#callbackBuscar) this.#callbackBuscar('')
            })
        }
        if (this.#btnFiltrar) {
            this.#btnFiltrar.addEventListener('click', () => {
                if (this.#callbackFiltrar) this.#callbackFiltrar(this.#selectFiltroAnimal.value)
            })
        }
    }

    onBuscar(callback) {
        this.#callbackBuscar = callback
    }

    onFiltrar(callback) {
        this.#callbackFiltrar = callback
    }

    resetFiltros() {
        this.#inputBuscar.value = ''
        this.#selectFiltroAnimal.value = ''
    }
}