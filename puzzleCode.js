function puzzleHide(puzzleDiv) {
	let puzzle = puzzleDiv.innerHTML;
	puzzleDiv.innerHTML = puzzle.replace(/\S/gm, '_');
	return puzzle.toLocaleLowerCase();
}

function guessLetter(event, puzzle, puzzleDiv) {
	let inputSpace = event.currentTarget;
	inputSpace.disabled = true;
	inputSpace.value = ``;
	let inputChar = event.key.toLocaleLowerCase();
	let numValue = 0;
	
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
	console.log(numValue);
	inputSpace.disabled = false;
}

let puzzle = "";
let puzzleDiv;


window.onload = (event) => {
	puzzleDiv = document.getElementById("puzzle");
	puzzle = puzzleHide(puzzleDiv);
};