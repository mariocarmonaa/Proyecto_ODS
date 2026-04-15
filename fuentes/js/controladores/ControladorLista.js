import VistaLista from '../vistas/VistaLista.js'

export default class ControladorLista {
    #vista
    #modelo
    #controladorRegistro
    #mensajeVista

    constructor(modelo, controladorRegistro, mensajeVista) {
        this.#modelo = modelo
        this.#controladorRegistro = controladorRegistro
        this.#mensajeVista = mensajeVista
        this.#vista = new VistaLista(this)
    }

    actualizarLista(jugadores = null) {
        const lista = jugadores !== null ? jugadores : this.#modelo.obtenerTodos()
        this.#vista.mostrar(lista)
    }

    borrar(id) {
        if (confirm('¿Eliminar este jugador permanentemente?')) {
            const exito = this.#modelo.eliminar(id)
            if (exito) {
                this.#mensajeVista.mostrar(' Jugador eliminado', 'ok')
                this.actualizarLista()
             
                if (window.eventosApp && window.eventosApp.onListaCambiada) window.eventosApp.onListaCambiada()
            } else {
                this.#mensajeVista.mostrar(' No se pudo eliminar', 'error')
            }
        }
    }

    editar(id) {
        const jugador = this.#modelo.obtenerPorId(id)
        if (jugador) {
            this.#controladorRegistro.cargarParaEditar(jugador)
        }
    }
}