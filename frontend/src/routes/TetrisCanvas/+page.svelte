<script>
	import { onMount } from 'svelte';
	import { Piece } from './Piece.js';

	let canvas;
	const COLS = 11;
	const ROWS = 20;
	const BLOCK_SIZE = 30;

	class Board {
		grid;

		constructor() {
			this.reset();
		}

		reset() {
			this.grid = this.getEmptyBoard();
		}

		removeLines() {
			let linesToRemove = [];
			for (let y = 0; y < ROWS; y++) {
				let isRowFull = this.grid[y].every(value => value.value > 0);
				if (isRowFull) {
					linesToRemove.push(y);
				}
			}

			linesToRemove.forEach(line => {
				this.grid.splice(line, 1);
				this.grid.unshift(Array(COLS).fill(0));
			});

			// return linesToRemove.length;
		}


		getEmptyBoard() {
			return Array.from(
				{ length: ROWS }, () => Array(COLS).fill(0)
			);
		}
	}

	let board = new Board();
	let interval;

	function stopGame(){
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		board.reset();
		if (interval) {
			clearInterval(interval);
		}
		console.table(board.grid);
	}

	function play() {
		board.reset();
		const ctx = canvas.getContext('2d');
		ctx.canvas.width = COLS * BLOCK_SIZE;
		ctx.canvas.height = ROWS * BLOCK_SIZE;
		ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


		let piece = new Piece(ctx);
		piece.draw();

		function draw() {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			piece.draw();
			drawBoard();
		}

		function drawBoard() {
			board.grid.forEach((row, y) => {
				row.forEach((cell, x) => {
					if (typeof cell === 'object' && cell.value > 0) {
						ctx.fillStyle = cell.color;
						ctx.fillRect(x, y, 1, 1);
					}
				});
			});
		}

		function update() {
			board.removeLines();
			if (piece.moveDown(board)) {
				piece.lock(board);
				piece = new Piece(ctx);
			}
			draw();
		}

		document.addEventListener('keydown', function(e) {
			switch (e.key) {
				case 'ArrowLeft':
					piece.moveLeft(board);
					break;
				case 'ArrowRight':
					piece.moveRight(board);
					break;
				case 'ArrowDown':
					update();
					break;
				case 'ArrowUp':
					piece.rotate(board);
					break;
				default:
					break;
			}
			draw();
		});

		if (interval) {
			clearInterval(interval);
		}
		interval = setInterval(update, 1000);

		onMount(() => {
			const ctx = canvas.getContext('2d');
			ctx.canvas.width = COLS * BLOCK_SIZE;
			ctx.canvas.height = ROWS * BLOCK_SIZE;
			ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
		});
	}
</script>

<div>
	<canvas bind:this={canvas} class="play-board"></canvas>
</div>
<button on:click={play}>Start</button>
<button on:click={stopGame}>Stop</button>

<style>
    .play-board {
        border: solid 2px;
    }
</style>
