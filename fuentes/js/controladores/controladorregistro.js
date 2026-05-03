import VistaRegistro from '../vistas/vistaregistro.js'
import Jugador from '../modelos/jugador.js'
import ModeloJugador from '../modelos/modelojugador.js'

class ControladorRegistro {
    constructor() {
        this.vista = new VistaRegistro(this)
        this.modelo = new ModeloJugador()
    }

    insertar(d) {
        this.modelo.agregar(new Jugador(
            d.nombre,
            d.fecha,
            d.genero,
            d.descripcion,
            d.animales,
            d.id
        ))

        this.vista.listar(this.modelo.listar())
    }

    editar(d) {
        this.modelo.editar(new Jugador(
            d.nombre,
            d.fecha,
            d.genero,
            d.descripcion,
            d.animales,
            d.id
        ))

        this.vista.listar(this.modelo.listar())
    }

    eliminar(id) {
        this.modelo.eliminar(id)
        this.vista.listar(this.modelo.listar())
    }

    prepararEdicion(id) {
        const j = this.modelo.listar().find(x => x.id === Number(id))
        if (j) this.vista.rellenarFormulario(j)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const c = new ControladorRegistro()
    c.vista.listar(c.modelo.listar())
})
