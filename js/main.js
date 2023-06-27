//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    puzzlePieceDiv = document.querySelector(".puzzle-pieces"),
    resetButton = document.querySelector("#resetBut");

//store the dragged piece in a global variable, we will need it in the handleDrop function
let draggedPiece;

//functions
function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;

    /*technically a bug so I will label it as bug fix #3 - loop through the puzzlePieces nodeList 
        and then set a new img src value for each puzzle piece based on the puzzle that the user has chosen*/
    puzzlePieces.forEach(piece => {
        /*each puzzle piece img follows the same naming convention ({piece}{num}.jpg - topRight1.jpg, topRight2.jpg, etc.)
            so I simply retrieved the IDs I gave to each puzzle piece img and background (which were based off 
            of the img names) and then used these to set the new src values*/
        piece.src = `images/${piece.id}${this.id}.jpg`;
    });

    //call the resetBoard() function to reset the puzzle and move any puzzle pieces back to the puzzle piece div 
    resetBoard();
}

function handleStartDrag() {
    draggedPiece = this;
}

function handleDragOver(e) {
    //this will prevent the default dragover behaviour (e is short for event and can also be passed as "evt" or "event")
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();

    //bug fix #1 - if the dropzone has no children then drop the puzzle piece into it
    if (this.children.length === 0) {
        //this line moves the dragged piece from the left side of the board and drops it into whatever dropzone we choose
        this.appendChild(draggedPiece);
    }
}

function resetBoard() {
    /*bug fix #2 - loop through the dropzones and check with firstChild if there is a puzzle piece in each one, if
        there is then return the puzzle piece back to the puzzle piece div with appendChild()*/
    dropZones.forEach(zone => {
        /*if the dropzone has no child then it will return null when firstChild is printed to the console
            so the if statement is used to check if it is not null and if that condition is true then it 
            will append the puzzle piece(s) back to the puzzle piece div*/
        if (zone.firstChild != null) {
            puzzlePieceDiv.appendChild(zone.firstChild);
        }
    });
}

//event listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
resetButton.addEventListener("click", resetBoard);