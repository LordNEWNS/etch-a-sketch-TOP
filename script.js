const main = document.getElementById('MAIN');
let length = 16;
let width = 16;
let gridArea = length * width;



function creatGameBoard() {
    for (let i = 1; i <= gridArea; i++) {
        const div = document.createElement('div');
        div.classList.add('etchGrid');
        main.appendChild(div);
    };
};
   
creatGameBoard()