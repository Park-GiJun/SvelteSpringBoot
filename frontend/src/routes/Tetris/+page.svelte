<script>
	let cols = Array.from({ length: 9 }, (_, i) => i);
	let rows = Array.from({ length: 20 }, (_, i) => i);
	let currentRow = 0;
	let currentCol = 4;
	let lastRow = 19;
	let isActive = true;

	let blocks = {
		T:[
			[1,1,1],
			[0,1,0],
			[0,1,0]
		],
		L:[
			[1,1,1],
			[1,0,0],
			[1,0,0]
		]
	}

	const tableBoolean = new Array(20).fill(0).map(() => new Array(9).fill(0));

	function updateCellBackgroundColor(row, col, color) {
		const table = document.getElementById('table');
		table.rows[row].cells[col].style.backgroundColor = color;
	}

	function reset() {
		const table = document.getElementById('table');
		console.log('reset');
		currentRow = 0;
		currentCol = 4;
		for (let row = 0; row < rows.length; row++) {
			for (let col = 0; col < cols.length; col++) {
				updateCellBackgroundColor(row, col, 'black');
				tableBoolean[row][col] = 0;
			}
		}
		console.table(tableBoolean);
	}

	function start() {
		isActive = true;
		currentRow = 0;
		currentCol = 4;
		tableBoolean[currentRow][currentCol] = 1;
		if (tableBoolean[currentRow][currentCol] === 1) {
			updateCellBackgroundColor(currentRow, currentCol, 'white');
		} else {
			updateCellBackgroundColor(currentRow, currentCol, 'black');
		}
	}

	function checkAndRemoveLastRow() {
		const isLastRowFull = tableBoolean[lastRow].every(cell => cell === 3);

		if (isLastRowFull) {
			for (let row = lastRow; row > 0; row--) {
				for (let col = 0; col < cols.length; col++) {
					tableBoolean[row][col] = tableBoolean[row - 1][col];
					updateCellBackgroundColor(row, col, tableBoolean[row][col] === 3 ? 'Gray' : 'black');
				}
			}

			tableBoolean[0].fill(0);
			for (let col = 0; col < cols.length; col++) {
				updateCellBackgroundColor(0, col, 'black');
			}
		}
	}


	document.addEventListener('keydown', function(e) {
		if (!isActive) return;

		let newRow = currentRow;
		let newCol = currentCol;
		switch (e.key) {
			case 'ArrowLeft':
				newCol = Math.max(currentCol - 1, 0);
				break;
			case 'ArrowRight':
				newCol = Math.min(currentCol + 1, cols.length - 1);
				break;
			case 'ArrowDown':
				if (currentRow < lastRow && tableBoolean[currentRow + 1][currentCol] === 3) {
					isActive = false;
					updateCellBackgroundColor(currentRow, currentCol, 'Gray');
					tableBoolean[currentRow][currentCol] = 3;
					checkAndRemoveLastRow();
					break;
				}
				newRow = Math.min(currentRow + 1, rows.length - 1);
				break;
		}
		if (isActive) {
			tableBoolean[currentRow][currentCol] = 0;
			if (newRow < rows.length - 1 || (newRow === rows.length - 1 && tableBoolean[newRow][newCol] !== 3)) {
				tableBoolean[newRow][newCol] = 1;
			}
			if (tableBoolean[newRow][newCol] === 1) {
				updateCellBackgroundColor(currentRow, currentCol, 'black');
				currentRow = newRow;
				currentCol = newCol;
				updateCellBackgroundColor(currentRow, currentCol, 'white');
			}
		}
		if (newRow === lastRow && newRow === rows.length - 1 && tableBoolean[newRow][newCol] !== 3) {
			isActive = false;
			updateCellBackgroundColor(currentRow, currentCol, 'Gray');
			tableBoolean[currentRow][currentCol] = 3;
			checkAndRemoveLastRow();
		}
		if (!isActive) {
			start();
		}
		console.table(tableBoolean);
	});
</script>


<table class="table" id="table">
	{#each rows as row}
		<tr>
			{#each cols as col}
				<td></td>
			{/each}
		</tr>
	{/each}
</table>
<button on:click={reset}>Reset</button>
<button on:click={start}>Start</button>

<style>
    .table tr, td {
        border: 1px solid black;
        border-collapse: collapse;
        margin: 0;
        padding: 5px;
        width: 20px;
        height: 20px;
        background: black;
    }
</style>
