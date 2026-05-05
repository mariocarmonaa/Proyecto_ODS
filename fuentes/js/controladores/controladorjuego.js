import vistajuego from '../vistas/vistajuego.js'
class controladorjuego{
    #vista
    constructor(){
        this.vista = new vistajuego(this)
    }
}
document.addEventListener('DOMContentLoaded', () =>{
    const controlador = new controladorjuego()
})