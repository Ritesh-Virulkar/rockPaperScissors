let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const result_h3 = document.getElementById('res');

function getComputerChoice() {
	const choices = ['r', 'p', 's']
	const randomChoice = Math.floor(Math.random() * 3)	
	return choices[randomChoice];
}

function win () {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_h3.innerHTML = 'You win!!';
	console.log('win!');
}
function lose () {
	compScore++;
	compScore_span.innerHTML = compScore;
	userScore_span.innerHTML = userScore;
	result_h3.innerHTML = 'You Lost!!';
	console.log('lost!');
}
function draw () {
	result_h3.innerHTML = 'Draw!!';
	console.log('draw!');
}

function game (userChoice) {
	const compChoice = getComputerChoice();
	console.log(userChoice);
	console.log(compChoice);
	switch (userChoice + compChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win();
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose();
			break;
		case 'rr':
		case 'pp':
		case 'dd':
			draw();
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function() {
		game('r');
	})
	paper_div.addEventListener('click', function() {
		game('p');
	})
	scissor_div.addEventListener('click', function() {
		game('s');
	})
}
main();