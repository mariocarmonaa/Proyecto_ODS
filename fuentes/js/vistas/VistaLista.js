export default class VistaLista {
    constructor(controlador) {
        this.controlador = controlador;
        this.contenedor = document.querySelector('#listaJugadores');
    }

    mostrar(jugadores) {
 
        this.contenedor.innerHTML = '';

        if (jugadores.length === 0) {
            this.contenedor.innerHTML = '<p>No hay jugadores.</p>';
            return;
        }


        for (let i = 0; i < jugadores.length; i++) {
            const j = jugadores[i];
            const animalesTexto = j.animales.join(', ');

      
            const div = document.createElement('div');
            div.style.border = '1px solid gray';
            div.style.margin = '10px';
            div.style.padding = '10px';
            div.innerHTML = `
                <strong>${j.nombre}</strong> (${j.edad} años)<br>
                Género: ${j.genero}<br>
                Animales: ${animalesTexto}<br>
                <button class="editar-btn">Editar</button>
                <button class="borrar-btn">Borrar</button>
            `;

          
            const editarBtn = div.querySelector('.editar-btn');
            const borrarBtn = div.querySelector('.borrar-btn');

            editarBtn.addEventListener('click', () => {
                this.controlador.editar(j.id);
            });

            borrarBtn.addEventListener('click', () => {
                this.controlador.borrar(j.id);
            });

            this.contenedor.appendChild(div);
        }
    }
}