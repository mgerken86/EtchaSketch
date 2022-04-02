const containerDiv = document.querySelector("#container");
let userGridInput = 16;

function makeGrid(rows, columns){
    //check for existing button and remove it if present
    while (document.querySelector("button") !== null) {
        document.querySelector("button").remove();
    }
    //create the grid
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    containerDiv.style.width = "960px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        containerDiv.appendChild(square).className = "grid-item";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
    }
    createResetButton();
    createSizeButton();
}

makeGrid(16, 16);

function createResetButton(){
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid";
    resetButton.style.margin = "20px";
    buttonDiv.appendChild(resetButton);

    //add event listener and prompt user to reset grid size / throw error > 100
    resetButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
    })
}

function createSizeButton(){
    const buttonDiv = document.querySelector("#buttonDiv");
    const sizeButton = document.createElement("button");
    sizeButton.textContent = "Change Size";
    sizeButton.style.margin = "20px";
    buttonDiv.appendChild(sizeButton);

    //add event listener and prompt user to reset grid size / throw error > 100
    sizeButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        userGridInput = prompt("Please select a grid size 1-100");
    if(userGridInput > 100 || userGridInput < 1 || userGridInput == null){
        alert("Please choose a size between 1-100");
        userGridInput = prompt("Please select a grid size 1-100");
    }
        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
    })
}