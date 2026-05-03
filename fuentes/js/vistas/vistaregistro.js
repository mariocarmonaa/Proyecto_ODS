export default class VistaRegistro {
    constructor(c) {
        this.c = c

        this.nombre = nombre
        this.fecha = fecha
        this.genero = tipo
        this.descripcion = descripcion
        this.idOculto = idOculto
        this.tbody = tbody

        this.animales = document.querySelectorAll('input[name="animalesExtincion"]')

        botonInsertar.onclick = e => this.guardar(e)
        botonLimpiar.onclick = () => this.limpiar()
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
        tbody.innerHTML = ''

        lista.forEach(j => {
            const tr = document.createElement('tr')

            tr.innerHTML = `
                <td>${j.nombre}</td>
                <td>${j.fecha}</td>
                <td>${j.genero}</td>
            `

            const td = document.createElement('td')

            const b1 = document.createElement('button')
            b1.textContent = 'Editar'
            b1.onclick = () => this.c.prepararEdicion(j.id)

            const b2 = document.createElement('button')
            b2.textContent = 'Eliminar'
            b2.onclick = () => this.c.eliminar(j.id)

            td.appendChild(b1)
            td.appendChild(b2)
            tr.appendChild(td)

            tbody.appendChild(tr)
        })
    }
}
