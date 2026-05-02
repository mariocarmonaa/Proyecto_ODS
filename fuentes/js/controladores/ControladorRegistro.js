import VistaRegistro from "../vistas/VistaRegistro.js"
import Jugador from "../modelos/Jugador.js"
import ModeloJugador from "../modelos/ModeloJugador.js"
class ControladorRegistro{
    #vistaRegistro
    #modeloJugador

    constructor(){
        console.log('Controlador en el aire')
        this.#vistaRegistro = new VistaRegistro(this)
        this.#modeloJugador = new ModeloJugador()
    }

    insertar(datos){
        const jugador = new Jugador(datos.nombre, datos.fechaNacimiento, datos.genero, datos.descripcion, datos.animales, datos.id)
        this.#modeloJugador.agregarJugador(jugador)
        this.#listar()
    }
    #listar(){
        const datos = this.#modeloJugador.listar()
        this.#vistaRegistro.listar(datos)
    }

    eliminar(id){
        this.#modeloJugador.eliminarJugador(id)
        this.#listar()
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    new ControladorRegistro()
})