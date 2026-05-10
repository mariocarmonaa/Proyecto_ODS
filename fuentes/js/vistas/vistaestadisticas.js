export default class VistaEstadisticas {
    constructor(c) {
        this.c = c
        this.contenedor = document.querySelector('#estadisticasContenido')
    }

    mostrar(lista) {
    
        this.contenedor.innerHTML = ''

    
        const totalUsuarios = lista.length

    
        const conteoAnimales = {}
        lista.forEach(j => {
            if (j.animales && j.animales.length > 0) {
                j.animales.forEach(animal => {
                    conteoAnimales[animal] = (conteoAnimales[animal] || 0) + 1
                })
            }
        })

       
        const conteoGenero = {}
        lista.forEach(j => {
            conteoGenero[j.genero] = (conteoGenero[j.genero] || 0) + 1
        })

        let html = '<h2>Estadisticas del Proyecto ODS 15</h2>'
        
        html += '<div class="estadistica">'
        html += '<h3>Total de Usuarios Registrados</h3>'
        html += '<p class="numero">' + totalUsuarios + '</p>'
        html += '</div>'

        html += '<div class="estadistica">'
        html += '<h3>Animales Favoritos</h3>'
        if (Object.keys(conteoAnimales).length > 0) {
            html += '<ul>'
            for (let animal in conteoAnimales) {
                html += '<li>' + animal + ': ' + conteoAnimales[animal] + ' usuario(s)</li>'
            }
            html += '</ul>'
        } else {
            html += '<p>No hay datos aun</p>'
        }
        html += '</div>'

        html += '<div class="estadistica">'
        html += '<h3>Distribucion por Genero</h3>'
        if (Object.keys(conteoGenero).length > 0) {
            html += '<ul>'
            for (let genero in conteoGenero) {
                html += '<li>' + genero + ': ' + conteoGenero[genero] + ' usuario(s)</li>'
            }
            html += '</ul>'
        } else {
            html += '<p>No hay datos aun</p>'
        }
        html += '</div>'

        this.contenedor.innerHTML = html
    }
}
