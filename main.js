const div = document.querySelector('#gridContainer');

let gridSize = prompt("Please enter the grid size (e.g 2 : 2x2, 4 : 4x4, 25 : 25x25) : ");

createGridBoxes(gridSize);
changeGridBoxColor();
onClickResetButton();

function createGridBoxes(size) {
    div.setAttribute('style', 'grid-template-columns: repeat('+size+', 1fr)');
    for (let i = 0; i < size * size; i++) {
        let gridBox = document.createElement('div');
            gridBox.classList.add('gridBox');
                div.appendChild(gridBox);
    }
}

function changeGridBoxColor() {
    const gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover", (e) => {
            gridBox.classList.add('active');
        });
    });
}
function resetGridBoxColor() {
    const gridBoxes = document.querySelectorAll(".active");
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove('active');
    });
}
function onClickResetButton() {
    const resetButton = document.getElementById("resetButton");
        resetButton.onclick = function() {
            resetGridBoxColor();
        };
}