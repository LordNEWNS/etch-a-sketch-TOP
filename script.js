const main = document.getElementById('grid');
let length = 16;
let width = 16;
let gridArea = length * width;



function creatGameBoard() {
    for (let i = 1; i <= gridArea; i++) {
        const div = document.createElement('div');
        div.classList.add('etchGridPeice');
        main.appendChild(div);
    };
};
   
creatGameBoard()