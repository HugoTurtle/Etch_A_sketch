




const div = document.querySelector('#grid');

function createGridBoxes(size) {
    for (let i = 0; i < size; i++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        div.appendChild(gridBox);
    }
}