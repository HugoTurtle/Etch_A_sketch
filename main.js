const div = document.querySelector('#grid');

createGridBoxes(4);

function createGridBoxes(size) {
    for (let i = 0; i < size * size; i++) {
        let gridBox = document.createElement('div');
            gridBox.classList.add('gridBox');
                div.appendChild(gridBox);
    }
}