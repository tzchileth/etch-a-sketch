/** index.js */

// create a button to prompt user for number of squares
const btn = document.createElement('button');
btn.textContent = "Generate Canvas & Sketch";
document.body.appendChild(btn);
// add eventlistener to btn
btn.addEventListener('click', createGrid);

// container: this is the parent node holding the grid of squares
const container = document.createElement('div');
container.classList.toggle('container'); // add container class to container object

// append container to body
document.body.appendChild(container);

/** Function to generate squares */    const totalSquaresToDraw = numberOfSquares * numberOfSquares;

function createGrid() {
    container.innerHTML = '';
    const numberOfSquares = parseInt(prompt("Enter the number of grids"));
    const totalSquaresToDraw = numberOfSquares * numberOfSquares;
    let count = 0;
    let arrayOfSquare = [];

    // keep prompting for the right input (numeric)
    while (isNaN(numberOfSquares) ||
        !Number.isInteger(numberOfSquares) || numberOfSquares <= 0
        || numberOfSquares > 100) {
        numberOfSquares = parseInt(prompt("Enter the number of grids"));
    }

    while (count < totalSquaresToDraw) {
        let square = document.createElement('div');

        square.classList.toggle('square');
        arrayOfSquare.push(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRGB();
        });

        square.addEventListener('mouseleave', () => {
            square.style.backgroundColor = getRGB();
        });

        count++;
    }

    // get container width: this would make the flex-wrap on container
    // to start the grid on a new line
    // 18 because total width for a square = 16px(width) + (1px border left) + (1 px border left)
    let width = numberOfSquares * 18;
    container.style.width = `${width}px`; // set canvas width

    // this loop generates the grid of squares
    for (let i = 1; i <= arrayOfSquare.length; i++) {
        for (let j = 1; j <= arrayOfSquare.length; j++) {
            container.appendChild(arrayOfSquare[j - 1]);
        }
    }
}

// function to generate rgb color
function getRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}