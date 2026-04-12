class Ecosistema {
    constructor(nombre, tipo, estado, descripcion, acciones) {
        this._nombre = nombre;
        this._tipo = tipo;
        this._estado = estado;
        this._descripcion = descripcion;
        this._acciones = acciones || [];
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(valor) {
        this._nombre = valor;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(valor) {
        this._tipo = valor;
    }

    get estado() {
        return this._estado;
    }

    set estado(valor) {
        this._estado = valor;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(valor) {
        this._descripcion = valor;
    }

    get acciones() {
        return this._acciones;
    }

    set acciones(valor) {
        this._acciones = valor;
    }

    nivelUrgencia() {
        if (this._estado == "critico") return "critico";
        if (this._estado == "amenazado") return "amenazado";
        if (this._estado == "vulnerable") return "vulnerable";
        return "estable";
    }

    iconoTipo() {
        if (this._tipo == "bosque") return "bosque";
        if (this._tipo == "selva") return "selva";
        if (this._tipo == "desierto") return "desierto";
        if (this._tipo == "montaña") return "montaña";
        return "otro";
    }

    esUrgente() {
        if (this._estado == "critico" || this._estado == "amenazado") {
            return true;
        }
        return false;
    }

    toString() {
        return this._nombre + " - " + this._tipo + " - " + this._estado;
    }
}