export default class Jugador{
    #nombre
    #fecha
    #genero
    #descripcion

    constructor(nombre, fecha, genero, descripcion){
        this.#nombre = nombre
        this.#fecha = fecha
        this.#genero = genero
        this.#descripcion = descripcion
    }
}