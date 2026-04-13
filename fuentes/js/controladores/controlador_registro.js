class Controlador_registro{
    #vistaRegistro
    #modeloJugador

    constructor(){
        this.#vistaRegistro = new VistaRegistro(this)
        this.#modeloJugador = new ModeloJugador()
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    new Controlador_registro()
})