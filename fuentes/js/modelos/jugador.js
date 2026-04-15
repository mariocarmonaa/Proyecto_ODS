export default class Jugador{
    #nombre
    #fecha
    #genero
    #descripcion
    #animales

    constructor(nombre, fecha, genero, descripcion, animales){
        this.#nombre = nombre
        this.#fecha = fecha
        this.#genero = genero
        this.#descripcion = descripcion
        this.#animales = animales
    }
}