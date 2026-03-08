//your JS code here. If required.

let player1 = "";
let player2 = "";
let currentPlayer = "x";
let boardStates = ["","","","","","","","",""];

let message = document.querySelector(".message");
let board = document.getElementById("board");
let cells = document.querySelectorAll(".cell");

document.getElementById("submit").onclick = function () {
	player1 = document.getElementById("player1").value;
	player2 = document.getElementById("player2").value;

	board.style.display = "grid";

	message.innerText = `${player1}, you're up`;
};

cells.forEach((cell,index) => {
	cell.addEventListener("click", function(){
		if(boardStates[index] !== "")return;
		boardStates[index] = currentPlayer;
		cell.innerText = currentPlayer;
		if(checkWinner()){
			let winner = currentPlayer === "x" ? player1 : player2;
			message.innerText = `${winner} congratulations you won!`;
			return;
		}
		currentPlayer = currentPlayer === "x" ? "o" : "x";
		let next = currentPlayer === "x" ? player1 : player2;
		message.innerText = `${next}, you're up`;
	});
});

function checkWinner() {

	const wins = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];

	for(let combo of wins){
		let [a,b,c] = combo;
		if(boardStates[a] && boardStates[a] === boardStates[b] && boardStates[a] === boardStates[c]){
          return true;
		}
	}
	return false;
}