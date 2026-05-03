export default class Jugador {
    constructor(nombre, fecha, genero, descripcion, animales, id) {
        this.nombre = nombre
        this.fecha = new Date(fecha)
        this.genero = genero
        this.descripcion = descripcion
        this.animales = animales
        this.id = Number(id)
    }

    getNombre() { return this.nombre }

    getFecha() {
        return this.fecha.toLocaleDateString()
    }

    getGenero() { return this.genero }

    getId() { return this.id }
}
