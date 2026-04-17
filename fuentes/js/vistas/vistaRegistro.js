export default class VistaRegistro{
    #inputNombre
    #inputFecha
    #inputGenero
    #inputDescripcion
    #inputBoton
    #controladorRegistro
    #inputAnimales
    #tbody
    #inputBotonLimpiar

    constructor(controladorRegistro){
        this.#controladorRegistro = controladorRegistro
        this.#obtenerReferenciasIU()
        this.#inputBoton.addEventListener('click', this.#insertar.bind(this))
        this.#inputBotonLimpiar.addEventListener('click', this.#limpiar.bind(this))
    }

    #obtenerReferenciasIU(){
        this.#inputNombre = document.querySelector('#nombre')
        this.#inputFecha = document.querySelector('#fecha')
        this.#inputGenero = document.querySelector('#tipo')
        this.#inputDescripcion = document.querySelector('#descripcion')
        this.#inputBoton = document.querySelector('#botonInsertar')
        this.#inputBotonLimpiar = document.querySelector('#botonLimpiar')
        this.#tbody = document.querySelector('tbody')
        this.#inputAnimales = document.querySelectorAll('input[name="animalesExtincion"]')
        console.log(this.#tbody)
    }

    #insertar(evento){
        evento.preventDefault()
        const nombre = this.#inputNombre.value
        const fecha = this.#inputFecha.value 
        const genero = this.#inputGenero.value 
        const descripcion = this.#inputDescripcion.value
        const animalesSeleccionados = []
        for (const chk of this.#inputAnimales){
            if (chk.checked){
                animalesSeleccionados.push(chk.value)
            }
        }
        const datos = {
            'nombre': nombre,
            'fechaNacimiento': fecha,
            'genero': genero,
            'descripcion': descripcion,
            'animales': animalesSeleccionados
        }
        this.#controladorRegistro.insertar(datos)
    }

    #limpiar(){
        this.#inputNombre.value = ''
        this.#inputFecha.value = ''
        this.#inputGenero.value = 'Masculino'
        this.#inputDescripcion.value = ''
        const marcados = document.querySelectorAll('input[type="checkbox"]:checked');
        marcados.forEach(checkbox => {
            checkbox.checked = false;
        });
    }

    listar(jugadores){
        this.#tbody.innerHTML = ''
        jugadores.forEach (jugador => {
            const tr = document.createElement('tr')
            this.#tbody.appendChild(tr)
            const tdNombre = document.createElement('td')
            tr.appendChild(tdNombre)
            tdNombre.textContent = jugador.getNombre()

            const tdFechaNacimiento = document.createElement('td')
            tr.appendChild(tdFechaNacimiento)
            tdFechaNacimiento.textContent = jugador.getFecha()

            const tdGenero = document.createElement('td')
            tr.appendChild(tdGenero)
            tdGenero.textContent = jugador.getGenero()
        })
    }
}