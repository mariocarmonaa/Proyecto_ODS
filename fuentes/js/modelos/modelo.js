export default class Modelo {
    #jugadores

    constructor() {
        this.#jugadores = new Set()
    }

    agregarJugadores(jugador) {
        this.#jugadores.add(jugador)
        console.log(this.#jugadores)
    }
}