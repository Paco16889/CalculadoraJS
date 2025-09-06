const pantalla = document.getElementById('pantalla');

const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', (event) => {
        const numeroAImprimir = event.target.value;

        pantalla.value += numeroAImprimir;
    })
})