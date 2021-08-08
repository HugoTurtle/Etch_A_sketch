const div = document.querySelector('#gridContainer');

createGridBoxes(16);

function createGridBoxes(size) {
    div.setAttribute('style', 'grid-template-columns: repeat('+size+', 1fr)');
    for (let i = 0; i < size * size; i++) {
        let gridBox = document.createElement('div');
            gridBox.classList.add('gridBox');
                div.appendChild(gridBox);
    }
}

function changeGridBoxColor() {
    let gridBoxes = document.getElementById('gridBox', function(e) {

    });
}