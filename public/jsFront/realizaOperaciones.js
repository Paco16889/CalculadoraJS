//en este fichero haremos las operaciones y gestionaremos la logica de la calculadora
//las funcioens para las operaciones las sacaremos del fichero backend.js
//y pasaremos al front los datos para ser impresos en panntalla
//IMPORTA FUNCIONES IMPORTANTE
let operandoA = null;
let operandoB = null;
let operador = null;
let resultado = null;
let operacionEnCurso = false;


//funcion para manejar la entrada de numeros
function manejarNumero(valor) {
    //si estamos en en medio de una operacion limmpiamos la pantalla
    if (operacionEnCurso) {
        pantalla.value = '';
        operacionEnCurso = false;
    }

    //añadimos el valor actual en pantalla
    pantalla.value += valor;
}


//funcion para manejar el operador(+ o -)
function manejarOperador(operadorSeleccionado) {
    if (operandoA === null) {
        operandoA = parseFloat(pantalla.value);//guardamos el primer numero
    }

    operador = operadorSeleccionado;//guardamos el operador
    operacionEnCurso = true;//esperamos segundo operando

       // Mostramos el operador en la pantalla
    pantalla.value += ` ${operador === 'suma' ? '+' : operador === 'resta' ? '-' : ''} `;


}


//funcion para calcular el resultado
function calcularResultado() {
     operandoB = parseFloat(pantalla.value.split(operador === 'suma' ? '+' : '-')[1].trim()); // Obtenemos el segundo número



    // Llamamos a la función correspondiente de operaciones.js
    if (operador === 'suma') {
        resultado = suma(operandoA, operandoB);
    } else if (operador === 'resta') {
        resultado = resta(operandoA, operandoB);
    }

    // Reseteamos las variables para futuras operaciones
    operandoA = resultado;
    operador = null;
    operacionEnCurso = false;

    return resultado;  // Devolvemos el resultado
}


