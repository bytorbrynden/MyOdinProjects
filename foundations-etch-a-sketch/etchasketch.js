let rowCount = 16;
let colCount = 16;

let updateGridSize = () => {
    let gridSize = +document.getElementById("sizeSlider").value;

    rowCount = gridSize;
    colCount = gridSize;

    document.getElementById("selectedSize").textContent = gridSize;
};

let generateGrid = (rows, cols) => {
    let gridElement = document.getElementById("grid");

    for (let r = 0; r < rows; r++) {
        let rowElem = document.createElement("div");
        rowElem.className = "gridRow";

        for (let c = 0; c < cols; c++) {
            let colElem = document.createElement("div");
            colElem.className = "gridCol";
            colElem.textContent = ".";
            colElem.style.color = "white";

            colElem.addEventListener("mouseover", () => {
                colElem.textContent = "x";
                colElem.style.color = "black";
                colElem.style.backgroundColor = "black";
            });

            rowElem.appendChild(colElem);
        }

        gridElement.appendChild(rowElem);
    }
};

let clearGrid = () => {
    document.getElementById("grid").remove();

    let newGrid = document.createElement("div");
    newGrid.id = "grid";

    document.getElementsByClassName("container")[0].appendChild(newGrid);
};

let resetGrid = () => {
    clearGrid();
    generateGrid(rowCount, colCount);
};

generateGrid(16, 16);