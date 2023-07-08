/** index.js */

// container: this is the parent node holding the grid of squares
const container = document.createElement('div');
container.setAttribute('id', 'container'); // give the container an id of container
container.classList.toggle('container');

// append container to body
document.body.appendChild(container);

// create a button to prompt user for number of squares
const btn = document.createElement('button');
btn.textContent = "Generate Grid";
container.appendChild(btn);

