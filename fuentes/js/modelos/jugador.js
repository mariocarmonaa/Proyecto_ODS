export default class Jugador {
    constructor(nombre, fecha, genero, descripcion, animales, id) {
        this.nombre = nombre
        this.fecha = fecha
        this.genero = genero
        this.descripcion = descripcion
        this.animales = animales
        this.id = Number(id)
    }
}
