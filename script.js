const grid = document.getElementById('grid');
const body = document.getElementById('body')
let heightOfGrid = 16;
let widthOfGrid = 16;
let gridArea = heightOfGrid * widthOfGrid;
let gridPeiceSize = 8
let colourOfGrid = 'grey'
let colourOfSketch = 'black'


function creatGameBoard() {
    grid.style.height = (heightOfGrid * gridPeiceSize) + 'px';
    grid.style.width = (widthOfGrid * gridPeiceSize) + 'px'; 
    for (let i = 1; i <= gridArea; i++) {
        const div = document.createElement('div');
        div.classList.add('etchGridPeice');
        grid.appendChild(div);
    };

    // change colour of grid based on selection
    const etchGridPeice = document.getElementsByClassName('etchGridPeice');
   for (let i = 0; i < etchGridPeice.length; i++) {
    etchGridPeice[i].style.backgroundColor = colourOfGrid;
    etchGridPeice[i].style.height = gridPeiceSize + 'px';
    etchGridPeice[i].style.width = gridPeiceSize + 'px';
    etchGridPeice[i].addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = colourOfSketch;
    });
   };

};
   
creatGameBoard()