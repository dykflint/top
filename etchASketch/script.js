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

function sketch() {
    document.querySelectorAll('.grid').forEach(element => {
        element.addEventListener('dragover', (event) => {
            event.preventDefault();
            element.style.backgroundColor = 'red';
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
// initialize canva
slider.value = 10;
createGrid(16);
sketch();