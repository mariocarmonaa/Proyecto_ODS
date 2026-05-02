export default class Jugador{
    #nombre
    #fecha
    #genero
    #descripcion
    #animales
    #id

    constructor(nombre, fecha, genero, descripcion, animales, id){
        this.#nombre = nombre
        this.#fecha = new Date(fecha)
        this.#genero = genero
        this.#descripcion = descripcion
        this.#animales = animales
        this.#id = id
    }

    getNombre(){
        return this.#nombre
    }

    getFecha(){
        let fechaESP = this.#fecha.getDate()
        fechaESP += '/' + (this.#fecha.getMonth() + 1)
        fechaESP += '/' + this.#fecha.getFullYear()
        return fechaESP
    }

    getGenero(){
        return this.#genero
    }

    getId(){
        return this.#id
    }
}