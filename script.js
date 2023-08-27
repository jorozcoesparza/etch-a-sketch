const container = document.querySelector('.container');

for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}


const cell = document.querySelectorAll('.cell');

cell.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('hoverState');
    });

});
