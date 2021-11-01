let rj = document.getElementById('rj')
let squares = document.querySelectorAll(".square");

rj.onclick = reiniciarJogo

document.addEventListener("DOMContentLoaded", () => {
 

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  handleMove(position);
  updateSquares(position);

  if (gameOver == true) {
    setTimeout(() => {
      alert(`O vencedor é ${symbols[playerTime]}`);
    }, 10);
  }
}

function updateSquares(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class="${symbol}"></div>`;
}

function reiniciarJogo() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = false;

  for(square of squares){
    if(square.children[0] != undefined){
      square.children[0].remove()
    }
  }


}