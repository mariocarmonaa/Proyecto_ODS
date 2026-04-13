export default class VistaRegistro {
    #controlador_registro
    #nombreUsuario
    #fechaNacimiento
    #tipoGenero
    #descripcion
    #agregar

    constructor(controlador_registro) {
        this.#nombreUsuario = document.querySelector("#nombre")
        this.#fechaNacimiento = document.querySelector("#fecha")
        this.#tipoGenero = document.querySelector("#tipo")
        this.#descripcion = document.querySelector("#descripcion")
        this.#agregar = document.querySelector("#botonInsertar")
    }
}