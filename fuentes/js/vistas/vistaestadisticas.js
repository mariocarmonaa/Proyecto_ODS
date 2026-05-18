class VistaEstadisticas {
    constructor(controlador) {
        this.controlador = controlador;
        this.contenedor = document.querySelector("#estadisticasContenido");
    }

    mostrar(lista) {
        this.contenedor.innerHTML = "";
        
        var total = lista.length;
        var hombres = 0;
        var mujeres = 0;
        var otros = 0;

        for (var i = 0; i < lista.length; i++) {
            if (lista[i].genero === "Masculino") {
                hombres = hombres + 1;
            } else if (lista[i].genero === "Femenino") {
                mujeres = mujeres + 1;
            } else {
                otros = otros + 1;
            }
        }

        var html = "";
        html = html + "<div class='estadistica'>";
        html = html + "<h3>Total de usuarios registrados:</h3>";
        html = html + "<p>" + total + "</p>";
        html = html + "</div>";
        html = html + "<div class='estadistica'>";
        html = html + "<h3>Clasificación por Géneros:</h3>";
        html = html + "<ul>";
        html = html + "<li>Hombres: " + hombres + "</li>";
        html = html + "<li>Mujeres: " + mujeres + "</li>";
        html = html + "<li>Otros / No especificado: " + otros + "</li>";
        html = html + "</ul>";
        html = html + "</div>";

        this.contenedor.innerHTML = html;
    }
}