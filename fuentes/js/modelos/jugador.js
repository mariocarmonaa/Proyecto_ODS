class Jugador {
    constructor(nombre, fecha, genero, alertas, descripcion, animales, id) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.genero = genero;
        this.alertas = alertas; // Guardará "Si" o "No" (Radio button)
        this.descripcion = descripcion;
        this.animales = animales;
        this.id = id;
    }
}