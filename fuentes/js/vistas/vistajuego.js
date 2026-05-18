class VistaJuego {
    constructor(controlador) {
        this.controlador = controlador;
        this.mono = document.querySelector("#monoAviador");
        this.escenario = document.querySelector("#vistaJuego");
        this.txtContador = document.querySelector("#contador");
        this.txtPuntos = document.querySelector("#puntos");

        var self = this;
        window.addEventListener('keydown', function (evento) {
            self.moverMono(evento);
        });

        this.obstaculos = [];
        this.bananas = [];
        this.puntos = 0;
        this.tiempo = 0;
        this.juegoActivo = false;

        this.tContador = null;
        this.tObstaculos = null;
        this.tBananas = null;
        this.tMovimiento = null;
    }

    iniciar() {
        this.limpiarPantalla();
        this.puntos = 0;
        this.tiempo = 0;
        this.juegoActivo = true;

        this.txtContador.textContent = "Tiempo: 0s";
        this.txtPuntos.textContent = "Bananas: 0";

        this.mono.style.top = "400px";
        this.mono.style.left = "200px";

        var self = this;

        this.tContador = setInterval(function () {
            self.tiempo = self.tiempo + 1;
            self.txtContador.textContent = "Tiempo: " + self.tiempo + "s";
        }, 1000);

        this.tObstaculos = setInterval(function () {
            self.crearObstaculo();
        }, 2000);

        this.tBananas = setInterval(function () {
            self.crearBanana();
        }, 3000);

        this.tMovimiento = setInterval(function () {
            self.actualizarJuego();
        }, 40);
    }

    moverMono(evento) {
        if (this.juegoActivo === false) {
            return;
        }

        var top = parseInt(window.getComputedStyle(this.mono).top);
        var left = parseInt(window.getComputedStyle(this.mono).left);

        if (evento.key === "ArrowUp" || evento.key === "w") { top = top - 25; }
        if (evento.key === "ArrowDown" || evento.key === "s") { top = top + 25; }
        if (evento.key === "ArrowLeft" || evento.key === "a") { left = left - 25; }
        if (evento.key === "ArrowRight" || evento.key === "d") { left = left + 25; }

        this.mono.style.top = top + "px";
        this.mono.style.left = left + "px";
    }

    crearObstaculo() {
        var obs = document.createElement("img");
        obs.src = "img/obstaculo.png";
        obs.classList.add("obstaculo");
        obs.style.top = (Math.random() * (window.innerHeight - 100)) + "px";
        obs.style.left = window.innerWidth + "px";
        this.escenario.appendChild(obs);
        this.obstaculos.push(obs);
    }

    crearBanana() {
        var ban = document.createElement("img");
        ban.src = "img/banana.png";
        ban.classList.add("banana");
        ban.style.top = (Math.random() * (window.innerHeight - 100)) + "px";
        ban.style.left = (Math.random() * (window.innerWidth - 100)) + "px";
        this.escenario.appendChild(ban);
        this.bananas.push(ban);
    }

    actualizarJuego() {
        for (var i = this.obstaculos.length - 1; i >= 0; i--) {
            var obs = this.obstaculos[i];
            var leftObs = parseInt(obs.style.left);
            leftObs = leftObs - 10;
            obs.style.left = leftObs + "px";

            if (leftObs < -50) {
                obs.remove();
                this.obstaculos.splice(i, 1);
            }

            if (this.comprobarColision(this.mono, obs) === true) {
                this.detener();
                alert("¡GAME OVER!\nTiempo sobrevivido: " + this.tiempo + "s\nBananas recolectadas: " + this.puntos);
                document.querySelector("#botonSalirJuego").click();
                return;
            }
        }

        for (var j = this.bananas.length - 1; j >= 0; j--) {
            var ban = this.bananas[j];
            if (this.comprobarColision(this.mono, ban) === true) {
                ban.remove();
                this.bananas.splice(j, 1);
                this.puntos = this.puntos + 1;
                this.txtPuntos.textContent = "Bananas: " + this.puntos;
            }
        }
    }

    comprobarColision(r1, r2) {
        var rect1 = r1.getBoundingClientRect();
        var rect2 = r2.getBoundingClientRect();

        var fueraHorizontal = rect1.right < rect2.left || rect1.left > rect2.right;
        var fueraVertical = rect1.bottom < rect2.top || rect1.top > rect2.bottom;

        if (fueraHorizontal === true || fueraVertical === true) {
            return false;
        } else {
            return true;
        }
    }

    limpiarPantalla() {
        var obsEnPantalla = document.querySelectorAll(".obstaculo");
        for (var i = 0; i < obsEnPantalla.length; i++) {
            obsEnPantalla[i].remove();
        }

        var banEnPantalla = document.querySelectorAll(".banana");
        for (var j = 0; j < banEnPantalla.length; j++) {
            banEnPantalla[j].remove();
        }

        this.obstaculos = [];
        this.bananas = [];
    }

    detener() {
        this.juegoActivo = false;
        clearInterval(this.tContador);
        clearInterval(this.tObstaculos);
        clearInterval(this.tBananas);
        clearInterval(this.tMovimiento);
        this.limpiarPantalla();
    }
}