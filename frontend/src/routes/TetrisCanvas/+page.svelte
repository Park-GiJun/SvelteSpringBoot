<script>
	import { onMount } from 'svelte';
	import { Piece } from './Piece.js';
	import { score } from './Score.js';
	import { level } from './Level.js';

	let canvas;
	const COLS = 11;
	const ROWS = 20;
	const BLOCK_SIZE = 35;

	let score_value;
	let level_value;
	let timeInterval = 1000;

	let clear_lines = 0;

	score.subscribe(value => score_value = value);


	function updateScore(value) {
		score.update(n => n + value);
	}

	function updateLevel(removedLines) {
		clear_lines += removedLines;
		if (clear_lines >= 10) {
			clear_lines -= 10;
			level.update(n => n + 1);
		}
	}

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
			let removedLines = linesToRemove.length;
			clear_lines += removedLines;
			updateLevel();
			return linesToRemove.length * linesToRemove.length * 100;
		}


		getEmptyBoard() {
			return Array.from(
				{ length: ROWS }, () => Array(COLS).fill(0)
			);
		}
	}

	let board = new Board();
	let interval;

	let nickname = '';
	let showModal = false;

	function sendScore(nickname, score) {
		fetch('/api/score', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ nickname: nickname, score: score })
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('점수 제출 실패');
				}
				return response.json();
			})
			.then(data => {
				console.log('점수 제출 성공:', data);
			})
			.catch(error => {
				console.error('점수 제출 중 오류 발생:', error);
			});
	}

	function gameOver() {
		clearInterval(interval);
		showModal = true;
		score.set(0);
		level.set(0);
	}

	function submitScore() {
		if (!nickname.trim()) {
			alert('닉네임을 입력해야 점수를 제출할 수 있습니다.');
			return;
		}
		sendScore(nickname, score_value);
		showModal = false;
		nickname = '';
	}


	function stopGame() {
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		board.reset();
		if (interval) {
			clearInterval(interval);
		}
		score.set(0);
		level.set(0);
	}

	function play() {
		board.reset();
		score.set(0);
		level.set(0);
		const ctx = canvas.getContext('2d');
		ctx.canvas.width = COLS * BLOCK_SIZE;
		ctx.canvas.height = ROWS * BLOCK_SIZE;
		ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


		let piece = new Piece(ctx);
		if (piece.collision(board)) {
			gameOver();
			return;
		}
		piece.draw();

		function draw() {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			piece.draw();
			drawBoard();
			console.table(board.grid);
			for (let i = 0; i < 10; i++) {
				if (board.grid[0][i] === 2) {
					alert('게임오버');
				}
			}

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
			if (piece.moveDown(board)) {
				piece.lock(board);
				if (board.grid[0].some(cell => cell !== 0)) {
					gameOver();
					return;
				}
				piece = new Piece(ctx);
			}
			if (piece.moveDown(board)) {
				piece.lock(board);
				piece = new Piece(ctx);
			}
			const removedLines = board.removeLines();
			if (removedLines > 0) {
			}
			updateScore(removedLines);
			draw();
		}

		function updateGameSpeed() {
			clearInterval(interval);
			timeInterval = Math.max(200, 1000 - level_value * 50);
			interval = setInterval(update, timeInterval);
		}

		level.subscribe(value => {
			level_value = value;
			updateGameSpeed();
		});

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
		interval = setInterval(update, timeInterval);

		onMount(() => {
			const ctx = canvas.getContext('2d');
			ctx.canvas.width = COLS * BLOCK_SIZE;
			ctx.canvas.height = ROWS * BLOCK_SIZE;
			ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
		});
	}
</script>
<div class="board">
	<div class="play-division">
		<canvas bind:this={canvas} class="play-board"></canvas>
	</div>
	<div class="right-division">
		<button on:click={play}>Start</button>
		<button on:click={stopGame}>Stop</button>
		<p>점수: {score_value}</p>
		<p>레벨: {level_value}</p>
	</div>
</div>

{#if showModal}
	<div class="modal">
		<input bind:value={nickname} placeholder="닉네임 입력" />
		<button on:click={submitScore}>점수 제출</button>
	</div>
{/if}

<style>
    .board {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 20px;
        align-items: start;
    }

    .play-division, .right-division {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .play-board {
        border: solid 2px #444;
        background-color: #f0f0f0;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #007bff;
        color: white;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }

    p {
        margin: 0;
        padding: 10px;
        background-color: #f8f9fa;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 1000;
    }

</style>

