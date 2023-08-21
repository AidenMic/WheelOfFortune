function puzzleHide(puzzleDiv) {
	let puzzle = puzzleDiv.innerHTML;
	puzzleDiv.innerHTML = puzzle.replace(/\S/gm, '_');
	return puzzle.toLocaleLowerCase();
}

function guessLetter(event, puzzle, puzzleDiv, prevLetters) {
	let inputSpace = event.currentTarget;
	inputSpace.disabled = true;
	inputSpace.value = ``;
	let inputChar = event.key.toLocaleLowerCase();
	let numValue = 0;
	
	if (!prevLetters.innerHTML.includes(inputChar)) {
		prevLetters.innerHTML = prevLetters.innerHTML + inputChar;
	
		if (
			(inputChar.length == 1) && 
			(puzzle.includes(inputChar))
			)
		{
			console.log(`yippee: ` + inputChar);
			let puzzleIndex = -1;
			while (true)
			{
				puzzleIndex++;
				puzzleIndex = puzzle.indexOf(inputChar, puzzleIndex);
				if (puzzleIndex !== -1) {
					puzzleDiv.innerHTML = puzzleDiv.innerHTML.substring(0, puzzleIndex) + inputChar + puzzleDiv.innerHTML.substring(puzzleIndex + 1);
					numValue++;
				}
				else {
					break;
				}
			}
		}
	}
	console.log(numValue);
	inputSpace.disabled = false;
}

let puzzle = "";
let puzzleDiv;
let prevLetters;


window.onload = (event) => {
	puzzleDiv = document.getElementById("puzzle");
	prevLetters = document.getElementById("prevLetters");
	puzzle = puzzleHide(puzzleDiv);
};