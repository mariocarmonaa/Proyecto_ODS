export default class vistajuego {
    #personajeMono
    #vistaJuego
    #contadorJuego
    #campoContador
    #iniciarContador
    obstaculos = []
    bananas = []
    puntos = 0
    intervaloObstaculo
    intervaloBananas
    intervaloMovimiento
    intervaloContador
    constructor(controlador){
        this.#personajeMono = document.querySelector("#monoAviador")
        this.#vistaJuego = document.querySelector("#vistaJuego")
        window.addEventListener('keydown', this.atenderEvento.bind(this))
        this.#contadorJuego = 0
        this.#campoContador = document.querySelector("#contador")
        this.#iniciarContador = false
        this.iniciarJuego()
    }

    atenderEvento(evento){
        const estilo = window.getComputedStyle(this.#personajeMono)

        let monoTop = parseInt(estilo.top)
        let monoLeft = parseInt(estilo.left)

        const monoWidth = this.#personajeMono.offsetWidth
        const monoHeight = this.#personajeMono.offsetHeight

        const maxLeft = window.innerWidth - monoWidth
        const maxTop = window.innerHeight - monoHeight

        
        if(evento.key === 'w' || evento.key === "ArrowUp"){
            monoTop -= 14
        } else if(evento.key === 's' || evento.key === "ArrowDown"){
            monoTop += 14
        }

        
        if(evento.key === 'd' || evento.key === "ArrowRight"){
            monoLeft += 14
        } else if(evento.key === 'a' || evento.key === "ArrowLeft"){
            monoLeft -= 14
        }

        
        monoTop = Math.max(0, Math.min(monoTop, maxTop))
        monoLeft = Math.max(0, Math.min(monoLeft, maxLeft))

        this.#personajeMono.style.top = monoTop + 'px'
        this.#personajeMono.style.left = monoLeft + 'px'
        this.bananas.forEach((banana, i) => {
            this.detectarColisionesBananas(banana, i)
        })
    }

    crearObstaculo(){
        const obstaculo = document.createElement("img")
        obstaculo.src = "img/obstaculo.png"
        obstaculo.classList.add("obstaculo")
        obstaculo.style.position = "absolute"
        obstaculo.style.top = Math.random() * (window.innerHeight - 100) + "px"
        obstaculo.style.left = window.innerWidth + "px"
        this.#vistaJuego.appendChild(obstaculo)
        this.obstaculos.push(obstaculo)
    }

    crearBanana(){
        const banana = document.createElement("img")
        banana.src = "img/banana.png"
        banana.classList.add("banana")
        banana.style.position = "absolute"
        banana.style.top = Math.random() * (window.innerHeight - 100) + "px"
        banana.style.left = Math.random() * (window.innerWidth - 100) + "px"
        this.#vistaJuego.appendChild(banana)
        this.bananas.push(banana)
        this.detectarColisionesBananas(banana)
    }

    moverObstaculo(){
        this.obstaculos.forEach((obstaculo, i)=>{
            let left = parseInt(obstaculo.style.left)
            left -= 12
            obstaculo.style.left = left + "px"
            if (left < -100){
                obstaculo.remove()
                this.obstaculos.splice(i, 1)
            } 
            this.detectarColisiones(obstaculo)
        })
    }

    detectarColisiones(obstaculo) {
        const monoRect = this.#personajeMono.getBoundingClientRect()
        const obstRect = obstaculo.getBoundingClientRect()

    
        const monoCentroX = (monoRect.left + monoRect.right) / 2
        const monoCentroY = (monoRect.top + monoRect.bottom) / 2

   
        const obstCentroX = (obstRect.left + obstRect.right) / 2
        const obstCentroY = (obstRect.top + obstRect.bottom) / 2

    
        const radioMono = Math.min(monoRect.width, monoRect.height) * 0.35
        const radioObst = Math.min(obstRect.width, obstRect.height) * 0.4

    
        const dx = monoCentroX - obstCentroX
        const dy = monoCentroY - obstCentroY
        const distancia = Math.sqrt(dx * dx + dy * dy)

        const colision = distancia < (radioMono + radioObst)

        if (colision) {
            alert("GAME OVER")
            this.terminarJuego()
        }
    }

    detectarColisionesBananas(banana, indice){
        const monoRect = this.#personajeMono.getBoundingClientRect()
        const bananaRect = banana.getBoundingClientRect()

        const monoCentroX = (monoRect.left + monoRect.right) / 2
        const monoCentroY = (monoRect.top + monoRect.bottom) / 2

        const bananaCentroX = (bananaRect.left + bananaRect.right) / 2
        const bananaCentroY = (bananaRect.top + bananaRect.bottom) / 2

        const radioMono = Math.min(monoRect.width, monoRect.height) * 0.35
        const radioBanana = Math.min(bananaRect.width, bananaRect.height) * 0.35

        const dx = monoCentroX - bananaCentroX
        const dy = monoCentroY - bananaCentroY
        const distancia = Math.sqrt(dx * dx + dy * dy)

        const colision = distancia < (radioMono + radioBanana)

        if(colision){
            banana.remove()
            this.bananas.splice(indice, 1)

            this.puntos++
            const campoPuntos = document.querySelector("#puntos")
            campoPuntos.textContent = `Has obtenido ${this.puntos} puntos.`
        }
    }



    iniciarJuego(){
        this.#iniciarContador = true
        this.intervaloContador = setInterval(()=> {
            if(!this.#iniciarContador) return
            this.#contadorJuego += 1
            this.#campoContador.textContent = `Has aguantado ${this.#contadorJuego} segundos`
        }, 1000)
        this.intervaloObstaculo = setInterval(() => this.crearObstaculo(), 1500)
        this.intervaloBananas = setInterval(()=> this.crearBanana(), 1500)
        this.intervaloMovimiento = setInterval(() => this.moverObstaculo(), 30)
    }

    terminarJuego() {
        this.#iniciarContador = false
        clearInterval(this.intervaloContador)
        clearInterval(this.intervaloObstaculo)
        clearInterval(this.intervaloMovimiento)
        clearInterval(this.intervaloBananas)
    }   
}
