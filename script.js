const button = document.getElementById('play')

button.addEventListener('click', function(){
    const grid = document.getElementById('grid');


    grid.innerHTML= '';


    // generatore di caselle
    for(let i = 0; i < 100; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.append(square)

    }
})