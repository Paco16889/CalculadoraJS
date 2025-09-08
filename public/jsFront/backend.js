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
    let cocientesDecimales = [];
    let cocientesSeparados = [];
    let resultado;
    for (cociente = 0; resto >= divisor; cociente++) {
        resto = resta(resto, divisor);
    }
    
    for (let i = 0; i < 6; i++) {
        if (resto > 0 ) {
        
            resto *= 10;
            for (cocienteDecimal = 0; resto >= divisor; cocienteDecimal++) {
                resto = resta(resto, divisor);
            }
            
           cocientesDecimales[i] = cocienteDecimal;
            ///tengo que rejunar en array los digitos decimales pff que liadaaaaa a dormir 
            ///acuerdate estas ahora ismo que te suma los cocientes decimales 
            //quieres que cociente decimal sea migual menos uno
            //otro digito decimal que valga la cuenta y que repita sacando un nuevo elemento de array
            //pueba for dentro de for un for que de a un array valores que sean cada uno la cuenta del bucle interno
         
            
        }

    }
    cocientesSeparados[1] = cocientesDecimales.join('');

    if (cocientesDecimales.lenght === 0) {
        resultado = cociente;
    }
    cocientesSeparados[0] = cociente;
    resultado = cocientesSeparados.join('.')
    return resultado;

}

export {suma, resta, multiplicacion, division};