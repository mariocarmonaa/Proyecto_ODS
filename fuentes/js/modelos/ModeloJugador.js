export default class ModeloJugador{
    #jugadores

    constructor(){
        this.#jugadores = new Set()
    }

    agregarJugador(jugador){
        console.log("Jugador agregado: " + jugador)
        this.#jugadores.add(jugador)
        console.log(this.#jugadores)
    }

    listar(){
        return this.#jugadores
    }
}