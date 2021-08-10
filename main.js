const div = document.querySelector('#gridContainer');

createGridBoxes();
changeGridBoxColor();
onClickClearButton();

function promptUser() {
    let looping = true;

    while (looping) {
        let gridSize = prompt("Please enter the grid size (e.g 2 : 2x2, 4 : 4x4, 25 : 25x25) : ");
            if(gridSize == null || gridSize < 0) {
                looping = true;
            }
            else if (gridSize >= 101) {
                looping = true;
            }
            else if (gridSize != 0) {
                return gridSize;
            }
            else {
                return 16;
            }
    };
};
function createGridBoxes() {
    let gridSize = promptUser();
        div.setAttribute('style', 'grid-template-columns: repeat('+gridSize+', 1fr)');
            for (let i = 0; i < gridSize * gridSize; i++) {
                let gridBox = document.createElement('div');
                    gridBox.classList.add('gridBox');
                    div.appendChild(gridBox);
    };
};

function changeGridBoxColor() {
    const gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover", (e) => {
            gridBox.classList.add('active');
        });
    });
};
function clearGridBoxColor() {
    const gridBoxes = document.querySelectorAll(".active");
        gridBoxes.forEach((gridBox) => {
            gridBox.classList.remove('active');
        });
};
function onClickClearButton() {
    const clearButton = document.getElementById("clearButton");
        clearButton.onclick = function() {
                clearGridBoxColor();
        };
};