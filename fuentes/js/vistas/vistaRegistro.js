export default class VistaRegistro{
    #inputNombre
    #inputFecha
    #inputGenero
    #inputDescripcion
    #inputBoton
    #controladorRegistro

    constructor(controladorRegistro){
        this.#controladorRegistro = controladorRegistro
        this.#inputNombre = document.querySelector('#nombre')
        this.#inputFecha = document.querySelector('#fecha')
        this.#inputGenero = document.querySelector('#tipo')
        this.#inputDescripcion = document.querySelector('#descripcion')
        this.#inputBoton = document.querySelector('#botonInsertar')

        this.#inputBoton.addEventListener('click', this.#insertar.bind(this))
    }

    #insertar(evento){
        evento.preventDefault()
        const nombre = this.#inputNombre.value
        const fecha = this.#inputFecha.value 
        const genero = this.#inputGenero.value 
        const descripcion = this.#inputDescripcion.value 
        const datos = {
            'nombre': nombre,
            'fechaNacimiento': fecha,
            'genero': genero,
            'descripcion': descripcion
        }
        this.#controladorRegistro.insertar(datos)
    }
}