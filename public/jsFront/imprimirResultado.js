const pantalla = document.getElementById('pantalla');

const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', (event) => {
        const valor = event.target.value;

            // Si es un número, lo añadimos a la pantalla
        if (!isNaN(valor)) {
            manejarNumero(valor);
        } 
        // Si es un operador (+ o -), lo manejamos
        else if (valor === 'suma' || valor === 'resta') {
            manejarOperador(valor);
        } 
        // Si es el botón "=" (resultado), calculamos el resultado
        else if (valor === 'resultado') {
            const resultado = calcularResultado();
            pantalla.value = resultado;
        }

    })
})