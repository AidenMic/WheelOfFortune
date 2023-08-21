function puzzleHide(puzzleDiv) {
	let puzzle = puzzleDiv.innerHTML;
	puzzleDiv.innerHTML = puzzle.replace(/\S/gm, '_');
	return puzzle;
}


let puzzle = "";
let puzzleDiv;


puzzleDiv = document.getElementById("puzzle");
puzzle = puzzleHide(puzzleDiv);