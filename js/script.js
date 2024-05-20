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


function generaNuovaPartita(container, numeroCelle, livelloScelto) {
    container.innerHTML = '';   
    
    
    for (let index = 0; index < numeroCelle; index++) {
        const celleGriglia = document.createElement('article');
        celleGriglia.classList.add('celle', livelloScelto);
        
        const contenutoCella = document.createElement('span');
        contenutoCella.classList.add('contenuto');
        contenutoCella.append(index + 1);
        celleGriglia.appendChild(contenutoCella);
        
        celleGriglia.addEventListener('click', function() {
            const numeroCella = index + 1;

            const bombe = generaBombe(16, numeroCelle);
            let numeriRivelati = 0;

            if (bombe.includes(numeroCella)) {
                celleGriglia.classList.add('bomba');
                console.log("Hai cliccato su una bomba! Il gioco è finito.");
                gameOver(container, numeriRivelati);
            }  else {
                celleGriglia.classList.add('active');
                numeriRivelati++;
            }
        });
        
        griglia.appendChild(celleGriglia);
    }
}

function generaBombe(numBombe, max){
    const bombe = [];

    while (bombe.lenght<numBombe){
        const numeroRandom = Math.floor(Math.random() * max + 1);

        if (!bombe.includes(numeroRandom)){ // se bombe non include il numero generato
            bombe.push(numeroRandom); // allora viene aggiunto nell'array
        }

    }return bombe;

}


function gameOver(){
    alert('hai cliccato su una bomba, il tuo punteggio è' + punteggio);
}
