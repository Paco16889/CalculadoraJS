//aqui comenzaremos creando las funciones de las operaciones empezaremos con las basicas suma y resta
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return suma(a, -b);
}

function multiplicacion(a, b){
    let producto = 0;
    for (let i = 0; i < b; i++) {
        producto = suma(producto, a);
        
    }
    return producto;
}

function division(a, b){
    let dividendo = a;
    let divisor = b;
    let cociente;
    let resto = dividendo;
    let cocienteDecimal;
    for (cociente = 0; resto >= divisor; cociente++) {
        resto = resta(resto, divisor);
    }
    
    if (resto > 0 ) {
        resto *= 10;
        for (cocienteDecimal = 0; resto > 0; cocienteDecimal++) {
            resto = resta(resto, divisor);
        }
        if (resto < 0 ) {
            cocienteDecimal -=1;
            resto = Math.abs(resto);
            resto *= 10;
        for (let i = cocienteDecimal; resto > 0; i++) {
            resto = resta(resto, divisor);
            cocienteDecimal = i;
        }
        }///tengo que rejunar en array los digitos decimales pff que liadaaaaa a dormir 
        ///acuerdate estas ahora ismo que te suma los cocientes decimales 
        //quieres que cociente decimal sea migual menos uno
        //otro digito decimal que valga la cuenta y que repita sacando un nuevo elemento de array
        //pueba for dentro de for un for que de a un array valores que sean cada uno la cuenta del bucle interno
        let cocientesSeparados = [];
        cocientesSeparados[0] = cociente;
        cocientesSeparados[1] = cocienteDecimal;
        let resultado = cocientesSeparados.join('.');
        return resultado;
    }
    return cociente;
}

export {suma, resta, multiplicacion, division};