//Regras de negócio

//iniciar as variáveis
let board = ["", "", "", "", "", "", "", "", ""];
let symbols = ["o", "x"];
let playerTime = 0;

function handleMove(position) {
  if (board[position] == "") {
    board[position] = symbols[playerTime];

    if (playerTime == 0) {
      playerTime = 1;
    } else {
      playerTime = 0;
    }
  }
}
