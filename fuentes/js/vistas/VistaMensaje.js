export default class VistaMensaje {
    constructor(selector) {
        this.elemento = document.querySelector(selector)
    }

    mostrar(texto, tipo = 'info') {
        if (!this.elemento) return
        this.elemento.textContent = texto
        this.elemento.className = `mensaje ${tipo}`
        setTimeout(() => {
            if (this.elemento) this.elemento.textContent = ''
        }, 3000)
    }
}