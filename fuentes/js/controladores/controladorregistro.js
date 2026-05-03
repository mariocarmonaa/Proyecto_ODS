import VistaRegistro from '../vistas/vistaregistro.js'
import Jugador from '../modelos/jugador.js'
import ModeloJugador from '../modelos/modelojugador.js'

class ControladorRegistro {
    constructor() {
        this.vista = new VistaRegistro(this)
        this.modelo = new ModeloJugador()
    }

    insertar(datos) {
        this.modelo.agregar(
            new Jugador(
                datos.nombre,
                datos.fechaNacimiento,
                datos.genero,
                datos.descripcion,
                datos.animales,
                datos.id
            )
        )
        this.vista.listar(this.modelo.listar())
    }

    editar(datos) {
        this.modelo.editar(
            new Jugador(
                datos.nombre,
                datos.fechaNacimiento,
                datos.genero,
                datos.descripcion,
                datos.animales,
                datos.id
            )
        )
        this.vista.listar(this.modelo.listar())
    }

    eliminar(id) {
        this.modelo.eliminar(id)
        this.vista.listar(this.modelo.listar())
    }

    prepararEdicion(id) {
        const j = this.modelo.listar().find(j => j.getId() === id)
        if (j) this.vista.rellenarFormulario(j)
    }
}

document.addEventListener('DOMContentLoaded', () => new ControladorRegistro())
