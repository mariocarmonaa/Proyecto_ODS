
export default class VistaEstadisticas {
    constructor() {
        this.contenedor = document.querySelector("#estadisticas")
        this.botonActualizar = document.querySelector("#botonEstadisticas")
    }

    mostrar(jugadores) {
        if (jugadores.length === 0) {
            this.contenedor.innerHTML = "<p>Sin datos</p>"
            return
        }
        let sumaEdades = 0
        jugadores.forEach(j => {
            sumaEdades += new Date().getFullYear() - new Date(j.fecha).getFullYear()
        })
        const media = (sumaEdades / jugadores.length).toFixed(1)
        this.contenedor.innerHTML = `
            <p> Total jugadores: ${jugadores.length}</p>
            <p>Edad media: ${media} años</p>
        `
    }

    alActualizar(callback) {
        this.botonActualizar.addEventListener('click', callback)
    }
}
