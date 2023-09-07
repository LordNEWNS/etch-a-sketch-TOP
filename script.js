const grid = document.getElementById('grid');
const body = document.getElementById('body');
const options = document.getElementById('submit')
const etchBody = document.getElementById('etchASketchBody')
let heightOfGrid = 80;
let widthOfGrid = 120;
let gridPeiceSize = 4;
let colourOfGrid = '#EFEFEF';
let colourOfSketch = 'black';


options.addEventListener('click', () => {
    const chosenWidth = parseInt(document.getElementById('width').value);
    const chosenHeight = parseInt(document.getElementById('height').value);
    const chosenGridPeiceSize = parseInt(document.getElementById('gridPeiceSize').value);
    const chosenBorderColour = document.getElementById('borderColor').value;
    const chosenGridColor = document.getElementById('gridColor').value;
    const chosenSketchColor = document.getElementById('sketchColor').value;
    if (chosenWidth > 200 
        || chosenHeight > 100 
        || chosenHeight < 1 
        || chosenWidth < 1 
        || chosenGridPeiceSize < 1) {
        alert('Max/Min width 200/1 | Max/Min height 100/1 | Min peice size 1');
    } else {
        gridPeiceSize = chosenGridPeiceSize;
        widthOfGrid = chosenWidth;
        heightOfGrid = chosenHeight;
        colorOfBorder = chosenBorderColour;
        colourOfGrid = chosenGridColor;
        colourOfSketch = chosenSketchColor;
        etchBody.style.backgroundColor = chosenBorderColour;
        creatGameBoard();
    }

})

function creatGameBoard() {
    grid.style.height = (heightOfGrid * gridPeiceSize) + 'px';
    grid.style.width = (widthOfGrid * gridPeiceSize) + 'px';

    // remove old grid
    while (grid.firstChild) {
        grid.firstChild.remove()
    } 

    // creat new grid to spec
    for (let i = 1; i <= (heightOfGrid * widthOfGrid); i++) {
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
   
creatGameBoard();