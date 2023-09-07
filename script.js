const grid = document.getElementById('grid');
const body = document.getElementById('body');
const options = document.getElementById('submit');
const etchBody = document.getElementById('etchASketchBody');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
let heightOfGrid = 80;
let widthOfGrid = 120;
let gridPeiceSize = 4;
let colourOfGrid = '#EFEFEF';
let colourOfSketch = 'black';
let rainbowMode; 
let shadeMode;

options.addEventListener('click', () => {
    const chosenWidth = parseInt(document.getElementById('width').value);
    const chosenHeight = parseInt(document.getElementById('height').value);
    const chosenGridPeiceSize = parseInt(document.getElementById('gridPeiceSize').value);
    const chosenBorderColour = document.getElementById('borderColor').value;
    const chosenGridColor = document.getElementById('gridColor').value;
    const chosenSketchColor = document.getElementById('sketchColor').value;
    rainbowMode = document.getElementById('rainbowMode').checked;
    shadeMode = document.getElementById('shade').checked;
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
        colourOfGrid = chosenGridColor;
        etchBody.style.backgroundColor = chosenBorderColour;
        grid.style.backgroundColor = chosenGridColor;
    };

    if (rainbowMode !== true){
        colourOfSketch = chosenSketchColor;
        creatGameBoard();
    } else {
        rainbowBoard();
    };

})

function clearAndSetGridDimension() {

    // remove old grid
    while (grid.firstChild) {
        grid.firstChild.remove()
    };

    // creat new grid to spec
    for (let i = 1; i <= (heightOfGrid * widthOfGrid); i++) {
        const div = document.createElement('div');
        div.classList.add('etchGridPeice');
        grid.appendChild(div);
    };

}

function creatGameBoard() {
    grid.style.height = (heightOfGrid * gridPeiceSize) + 'px';
    grid.style.width = (widthOfGrid * gridPeiceSize) + 'px';

    // colour header and footer
    footer.style.background = 'linear-gradient(170deg, ' + colourOfGrid + ', ' + colourOfGrid +' 70%, ' + colourOfSketch + ' 80%';
    header.style.background = 'linear-gradient(170deg, ' + colourOfGrid + ', ' + colourOfGrid +' 70%, ' + colourOfSketch + ' 80%';

    clearAndSetGridDimension();

    // change colour of grid based on selection
    const etchGridPeice = document.getElementsByClassName('etchGridPeice');
   for (let i = 0; i < etchGridPeice.length; i++) {
    etchGridPeice[i].style.backgroundColor = colourOfGrid;
    etchGridPeice[i].style.height = gridPeiceSize + 'px';
    etchGridPeice[i].style.width = gridPeiceSize + 'px';
    etchGridPeice[i].addEventListener('mouseenter', colourOnce);
    if (shadeMode === true) {
        etchGridPeice[i].addEventListener('mouseenter', setopacity)
        etchGridPeice[i].addEventListener('mouseenter', function(e) {

            // get current opacity value and add 0.1 to it
           let currentOpacity = parseFloat(e.target.style.opacity);
           currentOpacity += 0.1;
           e.target.style.opacity = currentOpacity; 
        })
    }
    
   };

};

function rainbowBoard() {
    grid.style.height = (heightOfGrid * gridPeiceSize) + 'px';
    grid.style.width = (widthOfGrid * gridPeiceSize) + 'px';

    // set header and footer to rainbows
    footer.style.background = 'linear-gradient(170deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%';
    header.style.background = 'linear-gradient(170deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%'

    clearAndSetGridDimension();

    // change colour of grid based on selection
    const etchGridPeice = document.getElementsByClassName('etchGridPeice');
   for (let i = 0; i < etchGridPeice.length; i++) {
    etchGridPeice[i].style.backgroundColor = colourOfGrid;
    etchGridPeice[i].style.height = gridPeiceSize + 'px';
    etchGridPeice[i].style.width = gridPeiceSize + 'px';
    etchGridPeice[i].addEventListener('mouseenter', colourOnceRainbow);
    if (shadeMode === true) {
        etchGridPeice[i].addEventListener('mouseenter', setopacity)
        etchGridPeice[i].addEventListener('mouseenter', function(e) {

            // get current opacity value and add 0.1 to it
           let currentOpacity = parseFloat(e.target.style.opacity);
           currentOpacity += 0.1;
           e.target.style.opacity = currentOpacity; 
        })
    }
   };

};

function setopacity(e) {
    e.target.style.opacity = 0.1;
    e.target.removeEventListener('mouseenter', setopacity);
}

function colourOnce(e) {
    e.target.style.backgroundColor = colourOfSketch;
    e.target.removeEventListener('mouseenter', colourOnce);
}

function colourOnceRainbow(e) {
    e.target.style.backgroundColor = RandomColour();
    e.target.removeEventListener('mouseenter', colourOnceRainbow)

}

function randomrgbValue() {
    return(Math.floor(Math.random() * 256))
}

function RandomColour() {
    const red = randomrgbValue()
    const green = randomrgbValue()
    const blue = randomrgbValue()
    return('rgba(' + red + ', ' + green + ', ' + blue + ')')
}


   
creatGameBoard();