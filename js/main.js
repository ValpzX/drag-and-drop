
//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board");

//functions
function changeBGImage() {
    //url('../images/backGround0.jpg');
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

//event listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));