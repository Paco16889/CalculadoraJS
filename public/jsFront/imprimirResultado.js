

const pantalla = document.getElementById('pantalla');

const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        
        if (boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }
        
        if(boton.id === 'borrar'){
            console.log(boton.id);
            if (pantalla.textContent.trim().length === 1 || pantalla.textContent.trim() === 'ERROR') {
                pantalla.textContent = '0';
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        
        
        if (boton.id === 'resultado') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = 'ERROR';
            }
            return;
        }
        if (boton.id !== 'borrar') {
            const botonApretado = boton.textContent;
             if (pantalla.textContent === '0'|| pantalla.textContent === 'ERROR') {
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
        }else{
            pantalla.textContent = pantalla.textContent;
        }
       
          

    })
})