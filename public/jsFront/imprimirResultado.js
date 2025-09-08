import { division, multiplicacion, resta, suma } from "./backend.js";


const pantalla = document.getElementById('pantalla');

const botones = document.querySelectorAll('button');



botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent.trim();
        let operandoA;
        let operandoB;
        let resultado;
        if (botonApretado === '+' || botonApretado === '-' || botonApretado === '*' || botonApretado === '/') {
            console.log('has apretado el operador', boton.id);
        }
        
        
        
        if (boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }
        
        if(boton.id === 'borrar'){
            console.log(boton.id);
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR') {
                pantalla.textContent = '0';
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        
        
        if (boton.id === 'resultado') {
            const operadorApretado = pantalla.textContent.match(/[+\-*/]/)[0];
            let operandos = pantalla.textContent.split(operadorApretado);
            operandoA = Number(operandos[0]);
            operandoB = Number(operandos[1]);
            switch (operadorApretado) {
                case '+':
                    console.log('has enntrado en el case suma del resultado');
                  
                    resultado = suma(operandoA, operandoB);
                    break;
                case '-':
                    console.log('has enntrado en el case resta del resultado');
                    resultado = resta(operandoA, operandoB);
 
                    break;
                case '*':
                    console.log('has enntrado en el case multiplicacion del resultado');
                    resultado = multiplicacion(operandoA, operandoB);
                    break;
                case '/':
                    console.log('has enntrado en el case division del resultado');
                    resultado = division(operandoA, operandoB)
                    break;
            
                default:
                    break;
            }
           // try {
             //   pantalla.textContent = eval(pantalla.textContent);
            //} catch (error) {
              //  pantalla.textContent = 'ERROR';
            //}
            pantalla.textContent = resultado;
            return;
        }
        
             if (pantalla.textContent === '0'|| pantalla.textContent === 'ERROR') {
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
        
            
        
       
          

    });
});