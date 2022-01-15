const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
//const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square);
}

function setColor(el) {
    //const color = getRandomColor();
    let first = (Math.random() * 257);
    let second = (Math.random() * 257);
    let last = (Math.random() * 257);
    const color = `rgb(${first}, ${second}, ${last})`;
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}`;
}

function removeColor(el) {
    el.style.background = '#1d1d1d';
    el.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(){
    const index = Math.ceil(Math.random() * colors.length);
    return colors[index];
}