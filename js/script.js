const griglia = document.querySelector('section#griglia');

const playButton = document.querySelector('button#play-button');

const livelloGioco = document.querySelector('select.livello');

playButton.addEventListener('click', function(){
    let cells;
    let className;

    switch (livelloGioco.value){
        case '0':
            cells = 100;
            className = 'facile';
            break;
        case '1':
            cells = 81;
            className = 'medio';
            break;
        case '2':
            cells = 49;
            className = 'difficile';
            break;
        default:
            cells = 100;
            className = 'facile';
    }

    generaNuovaPartita (griglia, cells, className);
})

function generaNuovaPartita(container, numeroCelle , livelloScelto){

    container.innerHTML = '';

    for (let index = 0; index < numeroCelle; index++) {
        const celleGriglia = document.createElement('article');//creo gli article all'interno della griglia
    
        celleGriglia.classList.add('celle', livelloScelto);//aggiungo la class
    
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
