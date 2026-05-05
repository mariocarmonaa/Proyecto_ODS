export default class vistajuego{
    #personajeMono
    constructor(controlador){
        this.#personajeMono = document.querySelector("#monoAviador")
        window.addEventListener('keydown', this.atenderEvento.bind(this))
    }

    atenderEvento(evento){
        const estiloCalculado = window.getComputedStyle(this.#personajeMono)
        console.log(estiloCalculado.top)
        console.log(evento.key)
        let monoTop = parseInt(estiloCalculado.top)
        if(evento.key == 'w' || evento.key === "ArrowUp"){
            monoTop -= 5
        }else if(evento.key == 's' || evento.key === "ArrowDown"){
            monoTop += 5
        }
        this.#personajeMono.style.top = monoTop + 'px'

        let monoLeft = parseInt(estiloCalculado.left)
        if(evento.key == 'd' || evento.key === "ArrowRight"){
            monoLeft += 5
        }else if(evento.key == 'a' || evento.key === "ArrowLeft"){
            monoLeft -= 5
        }
        this.#personajeMono.style.left = monoLeft + 'px'
    }
}