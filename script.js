const containerDiv = document.querySelector("#container");

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
    createButton();
}

makeGrid(16, 16);

function createButton(){
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid";
    resetButton.style.margin = "20px";
    buttonDiv.appendChild(resetButton);

    //add event listener and prompt user to reset grid size / throw error > 100
    resetButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userGridInput = prompt("Please enter the number of grid squares per side (Max 100)");
        if (userGridInput > 100) {
            alert("Error! You specified a grid size larger than 100");
            return;
        }
        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
    })
}
