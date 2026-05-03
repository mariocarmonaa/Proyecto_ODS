export default class VistaRegistro {
    constructor(c) {
        this.c = c

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
            fecha: this.fecha.value,
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
        this.nombre.value = j.nombre
        this.fecha.value = j.fecha
        this.genero.value = j.genero
        this.descripcion.value = j.descripcion
        this.idOculto.value = j.id

        this.animales.forEach(c =>
            c.checked = j.animales.includes(c.value)
        )
    }

    listar(lista) {
        this.tbody.innerHTML = ''

        lista.forEach(j => {
            const tr = document.createElement('tr')

            tr.innerHTML = `
                <td>${j.nombre}</td>
                <td>${j.fecha}</td>
                <td>${j.genero}</td>
            `

            const td = document.createElement('td')

            const btnE = document.createElement('button')
            btnE.textContent = 'Editar'
            btnE.addEventListener('click', () => {
                this.c.prepararEdicion(j.id)
            })

            const btnD = document.createElement('button')
            btnD.textContent = 'Eliminar'
            btnD.addEventListener('click', () => {
                this.c.eliminar(j.id)
            })

            td.appendChild(btnE)
            td.appendChild(btnD)
            tr.appendChild(td)

            this.tbody.appendChild(tr)
        })
    }
}
