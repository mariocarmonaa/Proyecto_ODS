const BOTONREGISTRO = document.querySelector("#botonRegistro")
const BOTONLISTADO = document.querySelector("#botonListado")
const VISTAS = document.querySelectorAll(".Vista")
const BOTONMENU = document.querySelectorAll(".botonMenu")
const MENU = VISTAS[0]
const REGISTRO = VISTAS[1]
const LISTADO = VISTAS[2]
console.log(LISTADO)

const mostrarRegistro = evento =>{
    evento.preventDefault()
    ocultarVistas()
    REGISTRO.classList.add("activa")
}

const mostrarMenu = evento =>{
    evento.preventDefault()
    ocultarVistas()
    MENU.classList.add("activa")
}

const mostrarListado = evento =>{
    evento.preventDefault()
    ocultarVistas()
    LISTADO.classList.add("activa")
}

function ocultarVistas(){
    MENU.classList.remove("activa")
    REGISTRO.classList.remove("activa")
    LISTADO.classList.remove("activa")
}

BOTONMENU.forEach(boton =>{
    boton.addEventListener('click', mostrarMenu)
})
BOTONREGISTRO.addEventListener('click', mostrarRegistro)
BOTONLISTADO.addEventListener('click', mostrarListado)