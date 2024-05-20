const griglia = document.querySelector('section#griglia');

const playButton = document.querySelector('button#play-button');

playButton.addEventListener('click', function(){
    generaNuovaPartita (100, griglia);
})

function generaNuovaPartita(numeroCelle , container){

    container.innerHTML = '';

    for (let index = 0; index < numeroCelle; index++) {
        const celleGriglia = document.createElement('article');//creo gli article all'interno della griglia
    
        celleGriglia.classList.add('celle');//aggiungo la class
    
        const contenutoCella = document.createElement('span');//creo l'interno della cella con uno span
        contenutoCella.classList.add('contenuto');// aggiugno una class allo span
        contenutoCella.append(index + 1); 
        celleGriglia.appendChild(contenutoCella); // aggiungo lo span all'interno dell'article
       
    
        celleGriglia.addEventListener('click' , function(){
            celleGriglia.classList.add('active');
        })
    
        griglia.appendChild(celleGriglia);//aggiungo gli article all'interno della griglia
    
    }
}
