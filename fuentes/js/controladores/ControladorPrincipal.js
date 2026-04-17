import ModeloJugador from '../modelos/ModeloJugador.js'
import ControladorRegistro from './ControladorRegistro.js'
import ControladorLista from './ControladorLista.js'
import ControladorEstadisticas from './ControladorEstadisticas.js'
import ControladorFiltros from './ControladorFiltros.js'
import VistaMensaje from '../vistas/VistaMensaje.js'

export default class ControladorPrincipal {
    constructor() {
        this.modelo = new ModeloJugador()
        this.mensajeVista = new VistaMensaje('#mensajeEstado')
        this.controladorRegistro = new ControladorRegistro(this.modelo, this.mensajeVista)
        this.controladorLista = new ControladorLista(this.modelo, this.controladorRegistro, this.mensajeVista)
        this.controladorEstadisticas = new ControladorEstadisticas(this.modelo)
        this.controladorFiltros = new ControladorFiltros(this.modelo, this.controladorLista)

    
        window.eventosApp = {
            onListaCambiada: () => {
                this.controladorLista.actualizarLista()
                this.controladorEstadisticas.actualizar()
                this.controladorFiltros.resetear() 
            }
        }

        this.inicializar()
    }

    inicializar() {
        this.controladorLista.actualizarLista()
        this.controladorEstadisticas.actualizar()
    }
}