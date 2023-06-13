//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone");

//store the dragged piece in a global variable, we will need it in the handleDrop function
let draggedPiece;

//functions
function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
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
    //this line moves the dragged piece from the left side of the board and drops it into whatever dropzone we choose 
    this.appendChild(draggedPiece);
}

//event listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));