class VistaRegistro {
    constructor(controlador) {
        this.controlador = controlador;

        this.inputNombre = document.querySelector("#nombre");
        this.inputFecha = document.querySelector("#fecha");
        this.selectGenero = document.querySelector("#tipo");
        this.txtDescripcion = document.querySelector("#descripcion");
        this.inputIdOculto = document.querySelector("#idOculto");
        this.tablaCuerpo = document.querySelector("#tablaCuerpo");
        this.checksAnimales = document.querySelectorAll('input[name="animalesExtincion"]');

        var botonInsertar = document.querySelector("#botonInsertar");
        var botonLimpiar = document.querySelector("#botonLimpiar");

        var self = this;

        botonInsertar.addEventListener("click", function () {
            self.enviarDatos();
        });

        botonLimpiar.addEventListener("click", function () {
            self.limpiarFormulario();
        });
    }

    enviarDatos() {
        var animalesSeleccionados = [];
        for (var i = 0; i < this.checksAnimales.length; i++) {
            if (this.checksAnimales[i].checked === true) {
                animalesSeleccionados.push(this.checksAnimales[i].value);
            }
        }

        var idFormulario = this.inputIdOculto.value;
        var idConvertido = null;

        if (idFormulario !== "") {
            idConvertido = Number(idFormulario);
        }

        var datos = {
            nombre: this.inputNombre.value,
            fecha: this.inputFecha.value,
            genero: this.selectGenero.value,
            descripcion: this.txtDescripcion.value,
            animales: animalesSeleccionados,
            id: idConvertido
        };

        if (this.inputIdOculto.value !== "") {
            this.controlador.editar(datos);
        } else {
            this.controlador.insertar(datos);
        }

        this.limpiarFormulario();
    }

    limpiarFormulario() {
        this.inputNombre.value = "";
        this.inputFecha.value = "";
        this.selectGenero.value = "Masculino";
        this.txtDescripcion.value = "";
        this.inputIdOculto.value = "";
        for (var i = 0; i < this.checksAnimales.length; i++) {
            this.checksAnimales[i].checked = false;
        }
    }

    rellenarParaEditar(jugador) {
        this.inputNombre.value = jugador.nombre;
        this.inputFecha.value = jugador.fecha;
        this.selectGenero.value = jugador.genero;
        this.txtDescripcion.value = jugador.descripcion;
        this.inputIdOculto.value = jugador.id;

        for (var i = 0; i < this.checksAnimales.length; i++) {
            var checkActual = this.checksAnimales[i];
            var encontrado = false;

            for (var j = 0; j < jugador.animales.length; j++) {
                if (jugador.animales[j] === checkActual.value) {
                    encontrado = true;
                }
            }

            if (encontrado === true) {
                checkActual.checked = true;
            } else {
                checkActual.checked = false;
            }
        }
    }

    pintarTabla(listaJugadores) {
        this.tablaCuerpo.innerHTML = "";
        var self = this;

        for (var i = 0; i < listaJugadores.length; i++) {
            var j = listaJugadores[i];
            var fila = document.createElement("tr");

            var tdNombre = document.createElement("td");
            tdNombre.textContent = j.nombre;
            fila.appendChild(tdNombre);

            var tdFecha = document.createElement("td");
            tdFecha.textContent = j.fecha;
            fila.appendChild(tdFecha);

            var tdGenero = document.createElement("td");
            tdGenero.textContent = j.genero;
            fila.appendChild(tdGenero);

            var tdAcciones = document.createElement("td");

            var btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            btnEditar.style.marginRight = "5px";

            (function (idActual) {
                btnEditar.addEventListener("click", function () {
                    self.controlador.prepararEdicion(idActual);
                });
            })(j.id);

            var btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";

            (function (idActual) {
                btnEliminar.addEventListener("click", function () {
                    self.controlador.eliminar(idActual);
                });
            })(j.id);

            tdAcciones.appendChild(btnEditar);
            tdAcciones.appendChild(btnEliminar);
            fila.appendChild(tdAcciones);

            this.tablaCuerpo.appendChild(fila);
        }
    }
}