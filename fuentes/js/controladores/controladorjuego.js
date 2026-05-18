class ControladorJuego {
    constructor() {
        this.vista = new VistaJuego(this);
    }

    comenzar() {
        this.vista.iniciar();
    }

    detener() {
        this.vista.detener();
    }
}