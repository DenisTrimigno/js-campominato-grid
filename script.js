// funzione che crea la griglia di gioco
function createNewGame(){
    const grid = document.getElementById('grid');

// svuota la griglia
    grid.innerHTML= '';

// funzione per creare le singole caselle di gioco
    createCell(); 

}

// funzione che crea caselle della griglia
function createCell(){
        // generatore di caselle
        for(let i = 0; i < 100; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.innerText = i + 1;
    
            square.addEventListener('click', function(){
                this.classList.add('clicked');
                console.log(this.innerText);
            })
    
            grid.append(square);
    
        }
}

const button = document.getElementById('play')

button.addEventListener('click', function(){
    // click del pulsante che crea la griglia di gioco
    createNewGame();
})