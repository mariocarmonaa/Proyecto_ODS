
const NOMBRE = document.querySelector("#nombre")
const FECHA = document.querySelector("#fecha")
const GENERO = document.querySelector("#tipo")
const PANDA = document.querySelector("#panda")
const TIGRE = document.querySelector("#tigre")
const AJOLOTE = document.querySelector("#ajolote")
const DESCRIPCION = document.querySelector("#descripcion")
const BOTON = document.querySelector("#botonInsertar")

funcionRegistrar = evento =>{
    NOMBREUSER = NOMBRE.value
    FECHAUSER = FECHA.value
    GENEROUSER = GENERO.value
    DESCRIPCIONUSER = DESCRIPCION.value
    const ANIMALES = []
    if(PANDA.checked) ANIMALES.push(PANDA.value)
    if(TIGRE.checked) ANIMALES.push(TIGRE.value)
    if(AJOLOTE.checked) ANIMALES.push(AJOLOTE.value)

    const JUGADOR = new Jugador (NOMBREUSER, FECHAUSER, GENEROUSER, DESCRIPCIONUSER, ANIMALES)
    console.log(JUGADOR)
}

BOTON.addEventListener('click', funcionRegistrar)