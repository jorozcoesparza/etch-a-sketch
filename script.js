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

function resizing() {
    let resizeVar = prompt("Enter resize value between 1-100")
    if (resizeVar < 1 || resizeVar > 100) {
        alert("Range not valid");
    } else {
        let removeCells = document.getElementsByClassName('cell');
        while(removeCells[0]) {
            removeCells[0].parentNode.removeChild(removeCells[0]);
        }

        for (let i = 0; i < resizeVar * resizeVar; i++) {
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

    };

}

const button = document.querySelector("button");
button.addEventListener('click', resizing);

