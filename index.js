/** index.js */

// create a button to prompt user for number of squares
const btn = document.createElement('button');
btn.textContent = "Generate Grid";
document.body.appendChild(btn);

// add eventlistener to btn
btn.addEventListener('click', createGrid);

// container: this is the parent node holding the grid of squares
const container = document.createElement('div');
container.setAttribute('id', 'container'); // give the container an id of container
container.classList.toggle('container');

// append container to body
document.body.appendChild(container);

/** Function to generate squares */
function createGrid() {
    container.innerHTML = '';
    let numberOfSquares = parseInt(prompt("Enter the number of grids"));
    let count = 0;
    let arrayOfSquare = [];

    while (isNaN(numberOfSquares) || numberOfSquares <= 0 || numberOfSquares > 100) {
        numberOfSquares = parseInt(prompt("Enter the number of grids"));
    }

    while (count < numberOfSquares) {
        let square = document.createElement('div');
        square.classList.toggle('square');
        arrayOfSquare.push(square);
        count++;
    }

    for (let i = 0; i < arrayOfSquare.length; i++) {
        container.appendChild(arrayOfSquare[i]);
    }
}
