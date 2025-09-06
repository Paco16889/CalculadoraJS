const pantalla = document.getElementById('pantalla');



document.addEventListener('submit', (event) => {
    event.preventDefault();
    const numeroAImprimir = document.getElementById('uno').value;

    pantalla.innerHTML=`<p>${numeroAImprimir}</p>`
})