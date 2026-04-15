import VistaFiltros from '../vistas/VistaFiltros.js';

export default class ControladorFiltros {
    #modelo
    #controladorLista
    #vista

    
    constructor(modelo, controladorLista) {
        this.#modelo = modelo;
        this.#controladorLista = controladorLista;
        this.#vista = new VistaFiltros();

      
        this.#vista.onBuscar((texto) => this.#aplicarFiltros(texto, null));
        this.#vista.onFiltrar((animal) => this.#aplicarFiltros(null, animal));
    }

 
    #aplicarFiltros(textoBusqueda, animalFiltro) {
        let resultados = this.#modelo.obtenerTodos();

      
        if (textoBusqueda !== null && textoBusqueda.trim() !== '') {
            resultados = this.#modelo.buscarPorNombre(textoBusqueda);
        }

        
        if (animalFiltro !== null && animalFiltro !== '') {
            resultados = resultados.filter(jugador => jugador.animales.includes(animalFiltro));
        }

        this.#controladorLista.actualizarLista(resultados);
    }

    
    resetearFiltros() {
        this.#vista.resetFiltros();          
        this.#controladorLista.actualizarLista(this.#modelo.obtenerTodos());
    }
}