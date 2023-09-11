// Get slider value and update it 
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
// Container with the grids
const container = document.getElementById('grid-container');
const gridSize = sliderValue; // Number of grids per row and column
const maxWidth = 800;
const maxHeight = 800;
let isDragging = false;
let activeElement = null;

function createGrid(numGrids) {
    for (let i = 0; i < numGrids*numGrids; i++) {
        const gridItem = document.createElement('div');
        gridItem.draggable = 'true';
        gridItem.style.width = 800/numGrids+"px";
        gridItem.style.height = 800/numGrids+"px";
        gridItem.classList.add('grid')
        // Change color when clicked
        // gridItem.addEventListener('mousedown', () =>{
        //     gridItem.style.backgroundColor = "red";
        // })
        container.appendChild(gridItem);
    }
}

function clearCanvas() {
    document.querySelectorAll('.grid').forEach(element => {
        element.style.backgroundColor = 'lightgray';
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sketch() {
    document.querySelectorAll('.grid').forEach(element => {
        let eventCounter = 0;
        element.addEventListener('dragover', (event) => {
            eventCounter += 0.1;
            if (eventCounter >= 1.0) eventCounter = 1.0;
            console.log(eventCounter);
            event.preventDefault();
            let red = getRandomInt(1,255);
            let green = getRandomInt(1,255);
            let blue = getRandomInt(1,255);
            element.style.backgroundColor = `rgb(${red - eventCounter*red}, ${green - eventCounter*green}, ${blue - eventCounter*blue})`;
        });
        element.addEventListener('click', (event) => {
            eventCounter += 0.1;
            if (eventCounter >= 1.0) eventCounter = 1.0;
            console.log(eventCounter);
            event.preventDefault();
            let red = getRandomInt(1,255);
            let green = getRandomInt(1,255);
            let blue = getRandomInt(1,255);
            element.style.backgroundColor = `rgb(${red - eventCounter*red}, ${green - eventCounter*green}, ${blue - eventCounter*blue})`;
        });
    });
}
slider.addEventListener('input', function() {
    container.innerHTML = ""; // empty grid
    const value = slider.value;
    sliderValue.textContent = value;
    createGrid(value);
    sketch();
});
// initialize canvas
slider.value = 10;
createGrid(16);
sketch();