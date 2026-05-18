class ControladorEstadisticas {
    constructor(modelo) {
        this.modelo = modelo;
        this.vista = new VistaEstadisticas(this);
    }

    mostrarEstadisticas() {
        var listaActual = this.modelo.listar();
        this.vista.mostrar(listaActual);
    }
}