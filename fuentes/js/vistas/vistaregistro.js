export default class VistaRegistro {
    constructor(controlador) {
        this.c = controlador

        this.nombre = document.querySelector('#nombre')
        this.fecha = document.querySelector('#fecha')
        this.genero = document.querySelector('#tipo')
        this.descripcion = document.querySelector('#descripcion')
        this.idOculto = document.querySelector('#idOculto')
        this.tbody = document.querySelector('tbody')

        this.animales = document.querySelectorAll('input[name="animalesExtincion"]')

        document.querySelector('#botonInsertar')
            .addEventListener('click', e => this.guardar(e))

        document.querySelector('#botonLimpiar')
            .addEventListener('click', () => this.limpiar())
    }

    guardar(e) {
        e.preventDefault()

        const animalesSel = [...this.animales]
            .filter(c => c.checked)
            .map(c => c.value)

        const datos = {
            nombre: this.nombre.value,
            fechaNacimiento: this.fecha.value,
            genero: this.genero.value,
            descripcion: this.descripcion.value,
            animales: animalesSel,
            id: this.idOculto.value ? Number(this.idOculto.value) : Date.now()
        }

        if (this.idOculto.value) this.c.editar(datos)
        else this.c.insertar(datos)

        this.limpiar()
    }

    limpiar() {
        this.nombre.value = ''
        this.fecha.value = ''
        this.genero.value = 'Masculino'
        this.descripcion.value = ''
        this.idOculto.value = ''

        this.animales.forEach(c => c.checked = false)
    }

    rellenarFormulario(j) {
        this.nombre.value = j.getNombre()
        this.fecha.value = j.getFecha()
        this.genero.value = j.getGenero()
        this.idOculto.value = j.getId()
    }

    listar(lista) {
        this.tbody.innerHTML = ''

        lista.forEach(j => {
            const tr = document.createElement('tr')

            tr.innerHTML = `
                <td>${j.getNombre()}</td>
                <td>${j.getFecha()}</td>
                <td>${j.getGenero()}</td>
            `

            const td = document.createElement('td')

            const btnE = document.createElement('button')
            btnE.textContent = 'Editar'
            btnE.onclick = () => this.c.prepararEdicion(j.getId())

            const btnD = document.createElement('button')
            btnD.textContent = 'Eliminar'
            btnD.onclick = () => this.c.eliminar(j.getId())

            td.appendChild(btnE)
            td.appendChild(btnD)

            tr.appendChild(td)
            this.tbody.appendChild(tr)
        })
    }
}
